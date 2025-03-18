import s from "./SearchBar.module.css";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

export default function SearchBar({ onSubmit }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
  };
  return (
    <header className={s.header}>
      <form className={s.searchBar} onSubmit={handleSubmit}>
        <button className={s.button} type="submit">
          <IoSearchOutline className={s.searchIcon} />
        </button>
        <input
          className={s.searchInput}
          type="text"
          value={value}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="topic"
        />
      </form>
    </header>
  );
}
