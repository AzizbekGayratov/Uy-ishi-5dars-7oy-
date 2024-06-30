import React from "react";
import Cards from "../cards/card";

const Services = () => {
  const [service, setService] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    console.log("mounted");

    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/service`,
          {
            signal,
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        if (!signal.aborted) {
          setService(data);
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
      <section className="mt-[30px] bg-no-repeat bg-cover bg-center bg-[url('/public/assets/services_hero_bg.jpg')]">
        <div className="container max-w-[1260px]">
          <div className="pt-[180px] pb-[90px] text-center">
            <h1 className="font-Custom text-[70px] leading-tight text-white">
              Services
            </h1>
          </div>
        </div>
      </section>
      <section className="pt-[70px] pb-[30px]">
        <div className="container max-w-[1260px]">
          <ul className="text-center grid grid-cols-3 gap-x-[42px] gap-y-[10px] px-[22px]">
            {service.map((item) => (
              <Cards
                className="py-[80px]"
                key={item.id}
                title={item.title}
                text={item.text}
                link={item.link}
              />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Services;
