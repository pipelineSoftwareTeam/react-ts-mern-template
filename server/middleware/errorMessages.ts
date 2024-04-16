import HTTP_STATUS from "../data/httpStatus";

interface ExtendedError extends Error {
  statusCode?: number;
  errors?: Error[];
}

const errorMessage: { statusCode: HTTP_STATUS; message: string | any[] } = {
  statusCode: HTTP_STATUS.BAD,
  message: "Unexpected error. Please try again.",
};

const setDefaultError = (err: ExtendedError) => {
  (errorMessage.statusCode =
    err.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR),
    (errorMessage.message =
      `${err.message}` || "Something went wrong, please try again later.");
};

const setValidationError = (err: ExtendedError) => {
  errorMessage.statusCode = HTTP_STATUS.BAD;
  if (err.errors)
    errorMessage.message = `${Object.values(err.errors)
      .map((item) => item.message)
      .join(", ")}`;
};

const setDuplicateError = (err: {keyValue: {email: string}}) => {
  errorMessage.statusCode = HTTP_STATUS.BAD;
  errorMessage.message = `${err.keyValue.email} already exists. Please login.`;
};

export { errorMessage, setDefaultError, setValidationError, setDuplicateError };
