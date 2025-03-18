import s from "./SearchBar.module.css";
import { useState, ChangeEvent, FormEvent } from "react";
import { IoSearchOutline } from "react-icons/io5";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.trim() === "") {
      return;
    }
    onSubmit(value);
    setValue("");
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
