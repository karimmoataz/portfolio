import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold">Contact.</h1>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              LET&apos;S WORK
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              TOGETHER
            </h1>
            <a href="tel:+201090025713"><Button type="primary">call me</Button></a>
            <div className="mt-10">
              <Socials />
            </div>
            <div className="mt-10">
              <a href="mailto:karimmoataz42@gmail.com">✉ karimmoataz42@gmail.com </a> <span>/</span> <a href="tel:+201090025713"> ✆ +201090025713</a>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
      © Karim Moataz 2024{" "}
      </h1>
    </>
  );
};

export default Footer;
