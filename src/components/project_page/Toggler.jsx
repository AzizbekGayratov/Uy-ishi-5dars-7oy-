import React from "react";
import Project_card from "../cards/project_card";
import { useParams } from "react-router-dom";

const Toggler = () => {
  const params = useParams();
  const id = params.id;

  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    console.log("mounted");

    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/${id}`, {
          signal,
        });
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
  }, [id]);

  return (
    <>
      <ul className="grid grid-cols-2 gap-x-[50px] gap-y-[38px] text-left">
        {data.map((item) => (
          <Project_card
            key={item.id}
            id={item.id}
            title={item.title}
            img={item.img}
          />
        ))}
      </ul>
    </>
  );
};

export default Toggler;
