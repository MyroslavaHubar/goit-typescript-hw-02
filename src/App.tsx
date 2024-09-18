import { useEffect, useState } from "react";
import "./App.css";
import { getImage } from "./data/image-api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { Image } from "./Types/Types";

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<Pick<Image, "urls"> | null>(
    null
  );
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchImages() {
      try {
        setLoading(true);
        const result = await getImage(query, page);
        setHasMore(result.results.length > 0);
        setImages((prevImages) => [...prevImages, ...result.results]);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Unknown error");
        }
      } finally {
        setLoading(false);
      }
    }
    if (query) {
      fetchImages();
    }
  }, [query, page]);

  const handleSubmit = (value: string) => {
    setQuery(value);
    setPage(1);
    setImages([]);
    setHasMore(true);
    setError(null);
  };

  function openModal(image: Image) {
    setIsOpen(true);
    setModalImage(image);
  }

  function closeModal() {
    setIsOpen(false);
    setModalImage(null);
  }

  function imageLoadMore() {
    setPage(page + 1);
  }

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {images.length > 0 && hasMore && (
        <LoadMoreBtn loadMoreBtn={imageLoadMore} />
      )}
      <ImageModal
        image={modalImage}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </>
  );
}

export default App;
