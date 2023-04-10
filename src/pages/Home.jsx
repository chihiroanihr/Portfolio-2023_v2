import coffeeImg1 from "../assets/images/coffee-1.jpg";
import coffeeImg2 from "../assets/images/coffee-2.jpg";
import coffeeImg3 from "../assets/images/coffee-3.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen bg-coffee-100 dark:bg-coffee-800 overflow-x-hidden"
    >
      <div
        className="grid grid-rows-6 lg:grid-cols-12 md:grid-cols-8 sm:grid-cols-fixed-6 grid-cols-fixed-4 gap-5
        h-full max-w-screen-xxxl mx-auto xl:px-[150px] lg:px-[100px] md:px-[70px] px-[35px]"
      >
        {/* Text Area */}
        <div
          className="row-start-4 md:row-start-3 xxxl:row-start-1 xxl:row-start-2 row-span-full xl:col-span-6 xl:col-start-1 lg:col-span-7 lg:col-start-1 md:col-start-1 md:col-span-6 sm:col-start-1 sm:col-span-5 col-span-full
          flex flex-col justify-center md:gap-8 sm:gap-4 gap-2 z-10"
        >
          <p className="font-default-sans lg:text-5xl md:text-4xl sm:text-2xl text-xl font-extralight text-coffee-600 dark:text-coffee-300 xl:mb-5 md:mb-4">
            Sipping on
          </p>
          <p className="font-title-cursive lg:text-8xl md:text-7xl sm:text-5xl text-4xl text-coffee-600 dark:text-coffee-300">
            Creativity
          </p>
          <p className="font-default-sans lg:text-5xl md:text-4xl sm:text-2xl text-xl font-extralight text-coffee-600 dark:text-coffee-300">
            one cup of <span className="font-light">coffee</span> at a time.
          </p>
        </div>

        {/* Image Area */}
        <div
          className="row-start-1 row-end-6 xl:row-span-full xl:col-start-6 md:col-start-4 sm:col-start-2 col-start-1 col-span-full
          relative"
        >
          <img
            src={coffeeImg3}
            alt="coffee-image-3"
            className="absolute top-[45%] right-[50%] -rotate-[17deg] -translate-y-1/2
            w-[200px] h-[400px] md:w-[300px] md:h-[500px] xl:w-[400px] xl:h-[650px] rounded-2xl shadow-cards-light dark:shadow-cards-dark object-cover object-center"
          />
          <img
            src={coffeeImg2}
            alt="coffee-image-2"
            className="absolute top-1/2 right-[30%] -rotate-6 -translate-y-1/2
            w-[200px] h-[400px] md:w-[300px] md:h-[500px] xl:w-[400px] xl:h-[650px] rounded-2xl shadow-cards-light dark:shadow-cards-dark object-cover object-center"
          />
          <img
            src={coffeeImg1}
            alt="coffee-image-1"
            className="absolute top-[60%] right-[5%] rotate-6 -translate-y-1/2
            w-[200px] h-[400px] md:w-[300px] md:h-[500px] xl:w-[400px] xl:h-[650px] rounded-2xl shadow-cards-light dark:shadow-cards-dark object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
