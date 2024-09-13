import { useRouteError } from "react-router-dom";

// css
import "./Error.css";

const Error = () => {
    const err = useRouteError()
    console.log(err,"err +++++")
  return (
    <div className="Error">
      <h1>Oops !</h1>
      <p>{err?.data}</p>
      <p>{err?.status} : {err?.statusText}</p>
    </div>
  );
};

export default Error;
