import { useState, FormEvent, ChangeEvent } from "react";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

type SearchBaProps = {
  onSubmit: (value: string) => void;
};

function SearchBar({ onSubmit }: SearchBaProps) {
  const [value, setValue] = useState<string>("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (value.trim() === "") {
      toast("Enter text to search for images", {
        icon: "❌",
        style: {
          borderRadius: "5px",
          background: "black",
          color: "#fff",
        },
      });
    }
    onSubmit(value);
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <header className={css.header}>
      <form className={css.headerForm} onSubmit={handleSubmit}>
        <input
          className={css.headerInput}
          type="text"
          value={value}
          onChange={handleInputChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.headerBtn} type="submit">
          Search
        </button>
        <Toaster position="top-right" reverseOrder={false} />
      </form>
    </header>
  );
}

export default SearchBar;
