import { MagnifyingGlass } from "react-loader-spinner";
import css from "./Loader.module.css";

function Loader() {
  return (
    <div className={css.loaderContainer}>
      <MagnifyingGlass
        visible={true}
        height="100"
        width="100"
        ariaLabel="magnifying-glass-loading"
        wrapperStyle={{}}
        // wrapperClass="magnifying-glass-wrapper"
        wrapperClass={css.loader}
        glassColor="#c0efff"
        color="#e15b64"
      />
    </div>
  );
}

export default Loader;
