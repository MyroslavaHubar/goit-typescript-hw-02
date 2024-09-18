import css from "./ErrorMessage.module.css";

type ErrorMessageProps = {
  message: string;
};

function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className={css.errorMessageContainer}>
      <h2 className={css.errorMessage}>{message}!</h2>
    </div>
  );
}

export default ErrorMessage;
