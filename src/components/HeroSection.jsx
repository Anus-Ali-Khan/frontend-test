import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className="relative h-[16rem] flex flex-col justify-center items-center gap-4">
        <img
          src="https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg"
          alt="Banner Image"
          className="absolute w-full h-full object-cover opacity-50"
        />
        <h1 className="z-10 text-4xl font-bold text-center max-sm:text-4xl">
          Optimized Your Meal
        </h1>
        <p className="z-10 text-center font-semibold text-sm max-sm:w-[80%] ">
          Select Meal to Add in Week.You will be able to edit. modify and change
          the Meal Weeks
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
