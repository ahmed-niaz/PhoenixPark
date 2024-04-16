import { useLoaderData } from "react-router-dom";
import CategoryList from "../components/CategoryList";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const Category = () => {
  const category = useLoaderData();
  console.log(category);
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>PhoenixPark | Category</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-10 w-11/12 mx-auto lg:w-full">
          {category.map((cat) => (
            <CategoryList key={cat.id} cat={cat} />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Category;
