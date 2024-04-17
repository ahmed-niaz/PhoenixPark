import CategoryList from "../components/CategoryList";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const Category = () => {
  const [group, setGroup] = useState([]);
  useEffect(() => {
    fetch(`category.json`)
      .then((resp) => resp.json())
      .then((data) => setGroup(data));
  }, []);
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>PhoenixPark | Category</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-10 w-11/12 mx-auto lg:w-full">
          {group.map((category) => (
            <CategoryList key={category.id} category={category} />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Category;
