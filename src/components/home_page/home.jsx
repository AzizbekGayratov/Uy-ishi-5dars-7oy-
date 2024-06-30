import React from "react";
import Cards from "../cards/card.jsx";
import { HiArrowRight } from "react-icons/hi";

const Home = () => {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    console.log("mounted");

    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/home`, {
          signal,
        });

        console.log(response);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        if (!signal.aborted) {
          setData(data);
        }
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Aborted");
        } else {
          setError(error.message);
          console.error(`Error fetching data: ${error}`);
        }
      }
    };
    fetchData();

    return () => {
      console.log("unmounted");
      controller.abort();
    };
  }, []);

  return (
    <>
      <section className="mt-[60px]">
        <div className="container max-w-[1260px]">
          <div className="bg-no-repeat bg-cover bg-[url('/public/assets/home_hero_bg.jpg')] pt-[75px] pr-[460px] pb-[330px] pl-[35px]">
            <h1 className="font-Custom text-[60px] leading-tight text-white mb-[10px]">
              Let's make your <br />
              home beautiful together
            </h1>
            <p className="font-Inter text-[22px] leading-[30px] text-white tracking-[0.01em] w-[470px] mb-[30px]">
              There are many variations of the passages of lorem Ipsum
              fromavailable, majority.
            </p>
            <button className="py-[26px] px-[48px] bg-brown rounded-[18px] font-Inter text-[18px] font-semibold tracking-[0.02em] leding-tight text-white hover:bg-white hover:text-brown transition">
              Get Started
              <HiArrowRight className="inline ml-[8px] align-[-1.5px]" />
            </button>
          </div>
        </div>
      </section>
      <section className="mt-[35px] mb-[10px]">
        <div className="container max-w-[1260px]">
          <div className="px-[26px]">
            <ul className="flex justify-between items-center text-center">
              {data.map((item) => (
                <Cards
                  key={item.id}
                  title={item.title}
                  text={item.text}
                  link={item.link}
                />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
