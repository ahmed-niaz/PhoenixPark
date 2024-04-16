import { Link } from "react-router-dom";
import error from "../assets/error/error.png";

const ErrorPage = () => {
  return (
    <main className="min-h-screen flex items-center justify-center">
     <Link to='/'>
     <img src={error} alt="" />
     <small className="font-bold">HomePage</small>
     </Link>
    </main>
  );
};

export default ErrorPage;
