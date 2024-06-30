import React from "react";
import { HiChevronRight } from "react-icons/hi";

const Project_card = (props) => {
  return (
    <li key={props.id}>
      <div className="mb-[38px]">
        <img className="w-full" src={props.img} alt="img" />
      </div>
      <div className="flex justify-between items-center">
        <div className="">
          <h2 className="font-Custom text-[25px] leading-tight text-secondary mb-[4px] tracking-[0.02em]">
            {props.title}
          </h2>
          <p className="font-Jost text-[22px] leading-[33px] tracking-[0.01em] text-text">
            Decor / Artchitecture
          </p>
        </div>
        <button className="p-[24px] bg-[#F4F0EC] rounded-full">
          <HiChevronRight className="w-6 h-6" />
        </button>
      </div>
    </li>
  );
};

export default Project_card;
