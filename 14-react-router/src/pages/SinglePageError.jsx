import { useRouteError } from "react-router-dom";

const SinglePageError = () => {
  const error = useRouteError();
  return <h1>{error.message}</h1>;
};
export default SinglePageError;
