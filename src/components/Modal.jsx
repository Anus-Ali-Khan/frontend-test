import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { mealWeeks } from "../utils/data";

export default function Modal({
  open,
  setOpen,
  setWeekRecipes,
  selectedRecipe,
  setSelectedRecipe,
}) {
  const [currentSelectedWeek, setCurrentSelectedWeek] = useState("");

  const handleSelectWeeks = () => {
    if (selectedRecipe) {
      if (currentSelectedWeek !== "") {
        setWeekRecipes((prev) => {
          let weekRecipes = { ...prev };
          if (
            !weekRecipes[currentSelectedWeek].find(
              (item) => item?.id === selectedRecipe?.id
            )
          ) {
            weekRecipes[currentSelectedWeek] = [
              ...weekRecipes[currentSelectedWeek],
              selectedRecipe,
            ];
          }

          return weekRecipes;
        });
      }
    }

    setCurrentSelectedWeek("");
    setSelectedRecipe(null);
    setOpen(false);
  };

  console.log("currentSelectedWeek", currentSelectedWeek);

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 justify-center flex flex-col gap-6">
              <div className=" ">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 ">
                  <DialogTitle
                    as="h3"
                    className="text-2xl font-bold leading-6 text-gray-900 text-center mb-4"
                  >
                    Select Week
                  </DialogTitle>
                </div>
              </div>
              <div className="flex gap-4 justify-center flex-wrap">
                {mealWeeks.map((item) => (
                  <button
                    className={`p-2 px-6 rounded-md font-semibold ${
                      currentSelectedWeek === item.id
                        ? "bg-blue-900 text-white"
                        : "bg-slate-100 text-black"
                    }`}
                    onClick={() => setCurrentSelectedWeek(item.id)}
                  >
                    {item.title}
                  </button>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 justify-center">
              <button
                className="bg-blue-900 p-2 text-white px-10 rounded-md font-semibold"
                onClick={() => handleSelectWeeks(selectedRecipe)}
              >
                Save
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
