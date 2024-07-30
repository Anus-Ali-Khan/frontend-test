import React from "react";
import { FaStar } from "react-icons/fa6";
import { RiDeleteBin5Line } from "react-icons/ri";

const RecipeCardsSection = ({
  recipes,
  selectedRecipe,
  setSelectedRecipe,
  handleRemoveItemFromWeek,
  currentWeek,
}) => {
  if (recipes?.length === 0) {
    return <div className="flex justify-center items-center h-52">No data</div>;
  }

  return (
    <>
      <div className="w-[80%]  m-auto flex flex-wrap justify-center items-center gap-[3%]">
        {recipes.map((item) => {
          return (
            <div
              key={item.id}
              className={`m-auto mt-10 bg-white rounded-md p-8 basis-[40%] max-[768px]:basis-[45%] max-sm:basis-[100%] ${
                selectedRecipe?.id === item.id ? " border-2 border-black " : ""
              }`}
              onClick={() => setSelectedRecipe(item)}
            >
              <div>
                <div className="relative">
                  {currentWeek !== "all" && (
                    <div
                      className="absolute bg-red-50 p-2 top-2 left-2 cursor-pointer"
                      onClick={() =>
                        handleRemoveItemFromWeek(currentWeek, item)
                      }
                    >
                      <RiDeleteBin5Line className="h-5 w-5 text-red-500 " />
                    </div>
                  )}

                  <img
                    src={item.image}
                    className="w-full h-[15rem] rounded-xl"
                  />
                  {item.mealType.map((meal) => (
                    <p className="bg-black text-white w-fit px-8 rounded-md text-[10px] py-[2px] font-medium absolute top-2 right-2 ">
                      {meal}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-bold mt-4 text-xl">{item.name}</h3>
                <p className="text-gray-700 text-sm">
                  {item.instructions.join(" ")}
                </p>

                <div className="flex justify-between items-center max-sm:flex-wrap">
                  <div>
                    <p>
                      <span className="font-bold">Cusine: </span>
                      {item.cuisine}
                    </p>
                  </div>
                  <div className="flex justify-center items-center gap-2 flex-wrap">
                    <span className="font-bold"> Rating: </span> {item.rating}
                    <span className="flex">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RecipeCardsSection;
