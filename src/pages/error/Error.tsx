import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img
        src="/src/assets/Error/Error-404-Page-Not-Found.png"
        alt="404 Error"
        className="w-1/2 max-w-sm mb-8"
      />

      <p className="text-lg text-gray-500 mb-8"></p>
      <Link to="/" className="text-gray-600 text-2xl font-bold hover:underline">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
