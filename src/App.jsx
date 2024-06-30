import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import { Home, Project, Services } from "./components/combined.js";
import Logo from "./assets/logo.svg";
import Search_svg from "./assets/search.svg";
import { IoMdCloseCircle } from "react-icons/io";
import Toggler from "./components/project_page/Toggler.jsx";

const App = () => {
  const [isSearching, setIsSearching] = React.useState(false);

  return (
    <Router>
      <header>
        <div className="container max-w-[1260px]">
          <div className="flex justify-between items-center py-[20px]">
            <a href="/">
              <img src={Logo} alt="log_svg" />
            </a>
            <nav>
              <ul className="flex gap-[50px] items-center">
                <li>
                  <NavLink
                    to="/"
                    className="font-Jost text-[20px] font-medium leading-tight"
                    activeclassname="active"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services"
                    className="font-Jost text-[20px] font-medium leading-tight"
                    activeclassname="active"
                  >
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/project"
                    className="font-Jost text-[20px] font-medium leading-tight"
                    activeclassname="active"
                  >
                    Project
                  </NavLink>
                </li>

                <li className="cursor-pointer">
                  {isSearching ? (
                    <div className="flex gap-[10px] items-center">
                      <input
                        placeholder="Search ..."
                        type="text"
                        className="w-[240px] border-2 border-secondary rounded-[10px] py-[8px] px-[12px] font-Jost text-[18px] font-medium leading-tight tracking-[0.02em] text-text placeholder:text-text"
                      />
                      <button
                        onClick={() => {
                          setIsSearching(false);
                        }}
                      >
                        <IoMdCloseCircle className="w-[32px] h-[32px]" />
                      </button>
                    </div>
                  ) : (
                    <img
                      onClick={() => {
                        setIsSearching(!isSearching);
                      }}
                      src={Search_svg}
                      alt="search_svg"
                    />
                  )}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/project/*" element={<Project />}>
          <Route path=":id" element={<Toggler />} />
          <Route path="*" element={<Navigate to="Bathroom" />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
