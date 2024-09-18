import css from "./ErrorMessage.module.css";

type Props = {
  message: string,
};

function ErrorMessage({ message }: Props) {
  return (
    <div className={css.errorMessageContainer}>
      <h2 className={css.errorMessage}>{message}!</h2>
    </div>
  );
}

export default ErrorMessage;
