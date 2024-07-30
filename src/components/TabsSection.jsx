import React, { useState } from "react";
import { weeks } from "../utils/data";
import Modal from "./Modal";

const TabsSection = ({
  activeTab,
  setActiveTab,
  setOpen,
  open,
  setWeekRecipes,
  selectedRecipe,
  setSelectedRecipe,
}) => {
  const openModal = () => {
    setOpen(true);
  };

  return (
    <div>
      <h1 className="m-auto w-[80%] font-bold text-3xl mt-8 mb-8">
        Week Orders
      </h1>
      <div className="w-full bg-white p-8 ">
        <div className=" m-auto w-[80%] flex justify-between items-center flex-wrap ">
          {weeks.map((item) => (
            <div key={item.id} onClick={() => setActiveTab(item.id)}>
              <p
                className={`font-bold mb-4 px-6 py-2 cursor-pointer ${
                  activeTab === item.id
                    ? " border-b-4 border-blue-900 text-blue-900"
                    : ""
                }   `}
              >
                {item.title}
              </p>
            </div>
          ))}
          <button
            onClick={openModal}
            className="bg-blue-900 p-2 text-white px-10 rounded-md font-semibold "
          >
            Add to Week
          </button>
        </div>
      </div>
      <Modal
        open={open}
        setOpen={setOpen}
        setWeekRecipes={setWeekRecipes}
        selectedRecipe={selectedRecipe}
        setSelectedRecipe={setSelectedRecipe}
      />
    </div>
  );
};

export default TabsSection;
