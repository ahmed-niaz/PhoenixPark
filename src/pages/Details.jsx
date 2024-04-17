import { useLoaderData, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const Details = () => {
  const estate = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const realEstate = estate.find((e) => e.id === idInt);

  const {
    image,
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
  } = realEstate;
  return (
    <main className="mt-10">
        <Helmet>
        <meta charSet="utf-8" />
        <title>PhoenixPark | Estate Details</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="container mx-auto mb-10">
      <div className="flex gap-12 flex-col lg:flex-row w-11/12 mx-auto lg:w-full">
        <div className="basis-1/2 flex items-center justify-center rounded-xl">
          <img className="w-full opacity-90 rounded-lg" src={image} alt="" />
        </div>
        <div>
          <h2 className="text-2xl lg:text-5xl font-extrabold text-center lg:text-start">
            {estate_title}
          </h2>
          <h2 className="font-bold my-2 lg:my-8 text-center lg:text-start">
            {" "}
            Segment: <span className="text-[#d90429]">{segment_name}</span>
          </h2>

          <p className="my-4 md:my-0">
            {" "}
            Available for{" "}
            <div className="badge border-rose-800 hover:cursor-pointer font-bold text-[#d90429]">
              {status}
            </div>
          </p>
          <div className="divider hidden lg:block"></div>
          <p className="font-bold mb-4">
            Overview of the project:{" "}
            <span className="font-normal">{description}</span>
          </p>
          <div className="hidden lg:flex  gap-2">
            <p className="flex items-center font-bold"> Facility</p>
            {facilities.map((facility, idx) => (
              <button
                className="btn  bg-[#d90429] hover:text-[#d90429] text-white border-none rounded-full hover:scale-105 hover:border-[#d90429] hover:border-2"
                key={idx}
              >
                {`#${facility}`}
              </button>
            ))}
          </div>
          <div className="divider"></div>
          <div className="my-4">
            <div className="grid grid-cols-2">
              <p className="font-bold">{status} price: </p>
              <p className="font-bold">${price}</p>
            </div>
            <div className="grid grid-cols-2">
              <p className="font-bold">Area</p>
              <p className="font-bold">{area}</p>
            </div>
            <div className="grid grid-cols-2">
              <p className="font-bold">Location</p>
              <p className="font-bold">{location}</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer/>
      {/* <ToastContainer /> */}
    </main>
    
  );
};

export default Details;
