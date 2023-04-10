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
        className="grid grid-rows-1 lg:grid-cols-12 md:grid-cols-8 sm:grid-cols-6 grid-cols-4 gap-5
        h-full max-w-screen-xxl mx-auto xl:px-[200px] lg:px-[100px] md:px-[70px] px-[35px]"
      >
        {/* Text Area */}
        <div
          className="row-span-full lg:col-span-5 md:col-start-1 md:col-span-6 sm:col-start-1 sm:col-span-5 col-start-1 col-span-full
          flex flex-col justify-center gap-8 z-10"
        >
          <p className="font-default-sans text-5xl font-extralight text-coffee-600 dark:text-coffee-300 mb-5">
            Sipping on
          </p>
          <p className="font-title-cursive text-8xl text-coffee-600 dark:text-coffee-300">
            Creativity
          </p>
          <p className="font-default-sans text-5xl font-extralight text-coffee-600 dark:text-coffee-300">
            one cup of <span className="font-light">coffee</span> at a time.
          </p>
        </div>

        {/* Image Area */}
        <div
          className="row-span-full lg:col-span-7 md:col-start-3 md:col-span-full sm:col-start-2 sm:col-span-full col-start-1 col-span-full
          relative"
        >
          <img
            src={coffeeImg3}
            alt="coffee-image-3"
            className="absolute top-[45%] right-[50%] -rotate-[17deg] -translate-y-1/2
            w-[300px] h-[500px] rounded-2xl object-cover object-center"
          />
          <img
            src={coffeeImg2}
            alt="coffee-image-2"
            className="absolute top-1/2 right-[30%] -rotate-6 -translate-y-1/2
            w-[300px] h-[500px] rounded-2xl object-cover object-center"
          />
          <img
            src={coffeeImg1}
            alt="coffee-image-1"
            className="absolute top-[60%] right-[10%] rotate-6 -translate-y-1/2
            w-[300px] h-[500px] rounded-2xl object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
