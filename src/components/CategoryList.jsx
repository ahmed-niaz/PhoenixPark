import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const CategoryList = ({ cat }) => {
  const { title, image, description } = cat;
  return (
    <main>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img className="lg:h-[350px]" src={image} alt={image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-extrabold">{title}</h2>
          <p className="text-xl text-gray-500">{description}</p>
          <div className="card-actions justify-center">
            <Link
              to="/"
              className="btn  w-10/12 mx-auto border-[#d90429] border-2 font-bold text-xl text-[#d90429]"
            >
              View Property List
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

CategoryList.propTypes = {
    cat: PropTypes.object,
  }
export default CategoryList;
