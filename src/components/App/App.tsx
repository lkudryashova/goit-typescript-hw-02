import { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import * as imagesService from "../../services/api";
import React from "react";
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ImageModal from "../ImageModal/ImageModal";
import { Image } from "../App/App.types";

export default function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      setLoading(true);
      try {
        const response = await imagesService.fetchImages(query, page);
        setImages((prev) => [
          ...prev,
          ...response.results.map((image: any) => ({
            id: image.id,
            urls: image.urls,
            alt_description: image.alt_description,
            user: image.user || {
              name: "Unknown",
              profile_image: undefined,
              portfolio_url: undefined,
            },
          })),
        ]);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleSearch = (newQuery: string) => {
    if (newQuery === "") {
      toast.error("Please enter a search term");
      return;
    }
    setQuery(newQuery);
    setImages([]);
    setPage(1);
    setError(null);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const openModal = (image: Image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setShowModal(false);
  };

  return (
    <div className="container">
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} openModal={openModal} />
      {loading && (
        <div className="loader-wrapper">
          <Loader />
        </div>
      )}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {showModal && (
        <ImageModal selectedImage={selectedImage} closeModal={closeModal} />
      )}
      <Toaster />
    </div>
  );
}
