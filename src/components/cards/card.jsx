import React from "react";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
// <Link></Link> bosilganda refresh bolib ketmasligi sabab <a></a> orniga yozdim

const Cards = (props) => {
  return (
    <li
      key={props.id}
      className="w-[358px] py-[80px] px-[20px] hover:bg-[#F8F8F8] transition rounded-[30px] text-center"
    >
      <h1 className="font-Custom text-[25px] leading-tight text-secondary mb-[20px]">
        {props.title}
      </h1>
      <p className="font-Jost text-[22px] leading-tight text-text mb-[52px]">
        {props.text}
      </p>
      <Link
        to={props.link}
        className="hover:text-primary transition text-link font-Jost text-[18px] leading-tight font-semibold tracking-[0.02em] "
      >
        Read More
        <HiArrowRight className="inline ml-[8px] align-[-3.5px] color-link" />
      </Link>
    </li>
  );
};

export default Cards;
