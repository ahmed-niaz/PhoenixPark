import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const Card = ({ estate }) => {
 
  const { image, description, estate_title, status,id } = estate;
  return (
    <main>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {estate_title}
            <div className="badge border-rose-800 hover:cursor-pointer">
              {status}
            </div>
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-center">
           
            <Link to={`/estate/${id}`} className="btn glass  w-10/12 mx-auto bg-[#d90429] border-2 font-bold text-xl text-white">View Property</Link>
            
          </div>
        </div>
      </div>
    </main>
  );
};
Card.propTypes = {
  estate: PropTypes.object,
}
export default Card;
