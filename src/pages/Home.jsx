import { useEffect, useState } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import Banner from "../components/Banner";

const Home = () => {
  const [estate, setEstate] = useState([]);
  useEffect(() => {
    fetch(`estate.json`)
      .then((resp) => resp.json())
      .then((data) => setEstate(data));
  }, []);
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>PhoenixPark | Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Banner/>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-10 w-11/12 mx-auto lg:w-full">
          {estate.map((estate) => (
            <Card key={estate.id} estate={estate} />
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Home;
