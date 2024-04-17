import Footer from "../components/Footer";
import about from '../assets/images/about.jpg'

const About = () => {
  return (
    <main >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 container mx-auto my-10 ">
        <div>
            <img className="rounded-lg w-full" src={about} alt="" />
        </div>
        <div>
          <h2 className="font-bold text-2xl">
            This is <span className="font-extrabold text-4xl text-[#d90429] font-jersey ">PhoenixPark</span>
          </h2>
          <p className="mt-4 font-semibold">
            Welcome to PhoenixPark Industrial Real Estate, your premier
            destination for industrial property solutions. With a commitment to
            excellence and a focus on delivering tailored options to suit your
            business needs, we offer a diverse range of industrial estates
            available for sale, auction, and lease. At PhoenixPark, we
            understand the importance of finding the perfect industrial space
            for your operations. Whether youre seeking to expand your
            manufacturing facilities, warehouse storage, or distribution
            centers, our comprehensive portfolio encompasses a variety of
            options to accommodate your requirements. With years of experience
            in the industry, our team of dedicated professionals is here to
            guide you through every step of the process, from initial inquiry to
            final contract. We prioritize transparency, reliability, and
            efficiency, ensuring that your experience with PhoenixPark is
            seamless and successful.
          </p>
        </div>
      </div>
      <div className="bg-black p-10">
      <Footer />
      </div>
    </main>
  );
};

export default About;
