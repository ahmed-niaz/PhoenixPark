import { useEffect, useState } from "react";
import Card from "../components/Card";


const Home = () => {
    const [estate,setEstate] = useState([])
    useEffect(() => {
        fetch(`estate.json`)
          .then((resp) => resp.json())
          .then((data) => setEstate(data));
      }, []);
    return (
       <main>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-10 w-11/12 mx-auto lg:w-full">
        {estate.map((estate) => (
          <Card key={estate.id} estate = {estate} />
        ))}
      </div>
       </main>
    );
};

export default Home;