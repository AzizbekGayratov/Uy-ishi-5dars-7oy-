import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Project = () => {
  // Bu yerda keyinchalik fetch ishlatilishi mumkun bolgani uchun useEffect ishlatib quyganman
  const titles = ["Bathroom", "Bedroom", "Kitchen", "Living-Area"];
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    console.log("mounted");

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <section className="mt-[40px] mb-[30px] bg-no-repeat bg-cover bg-center bg-[url('/public/assets/project_hero_bg.jpg')]">
        <div className="container max-w-[1260px]">
          <div className="pt-[180px] pb-[90px] text-center">
            <h1 className="font-Custom text-[70px] leading-tight text-white">
              Our Project
            </h1>
          </div>
        </div>
      </section>
      <section className="mb-[30px] mt-[60px]">
        <div className="container max-w-[1260px]">
          <div className="text-center">
            <nav className="mb-[38px] w-full px-[180px]" id="project-nav">
              <ul className="flex items-center justify-between rounded-[18px] border-[1px] border-brown">
                {titles.map((item, index) => (
                  <li key={index}>
                    <NavLink
                      className="font-Jost text-[20px] font-medium leading-tight py-[25.5px] px-[70px] hover:bg-[#F4F0EC] transition rounded-[18px] block"
                      to={`${item}`}
                    >
                      {item}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <Outlet />
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
