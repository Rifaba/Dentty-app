import React, { useEffect } from "react";
import { useState } from "react";

export const Hero = () => {
  const [day, setDay] = useState("");

  useEffect(() => {
    let currentDate = new Date();
    let today = new Date().toDateString();
    let hours = currentDate.getHours().toString().padStart(2, "0");
    let minutes = currentDate.getMinutes().toString().padStart(2, "0");

    let time = `${hours}:${minutes}`;

    setDay(`${today}, ${time}`);
  }, []);

  return (
    <section className="sm:flex w-full text-white justify-between bg-[#567daa] items-center px-8 py-4 mb-2  gap-6">
      <div className="">
        <h1 className="md:text-8xl   text-5xl mb-5 text-nowrap animate__animated animate__slideInLeft">
          Your Smile
        </h1>
        <span>
          <h1 className="md:text-8xl text-5xl text-nowrap animate__animated animate__slideInRight duration-700 transition-all">
            Comes First
          </h1>
        </span>
      </div>

      <div className="my-4">
        <div className="animate__animated animate__slideInRight">
          <h5 className="text-nowrap font-bold text-xl mb-3">Practice Hours</h5>
          <p className="text-nowrap">Monday-Tuesday : 09:00 - 21:00</p>
          <p className="text-nowrap">Friday : 09:00 - 19:00</p>
          <p className="text-nowrap">Saturday : 11:00 - 16:00</p>
        </div>

        <div className="mt-5 flex animate__animated animate__slideInRight">
          <p className=" bg-slate-400/40 rounded-xl text-nowrap text-center px-3 py-3">
            Today is {day}
          </p>
        </div>
      </div>
    </section>
  );
};
