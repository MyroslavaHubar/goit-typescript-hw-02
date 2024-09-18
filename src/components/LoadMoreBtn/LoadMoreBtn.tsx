import css from "./LoadMoreBtn.module.css";

type loadMoreBtnProp = {
  loadMoreBtn: () => void;
};

function LoadMoreBtn({ loadMoreBtn }: loadMoreBtnProp) {
  return (
    <button type="button" onClick={loadMoreBtn} className={css.loadMoreBtn}>
      Load more
    </button>
  );
}

export default LoadMoreBtn;
