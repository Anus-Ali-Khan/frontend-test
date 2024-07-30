import { useEffect, useState } from "react";
import { api } from "./api";
import HeroSection from "./components/HeroSection";
import RecipeCardsSection from "./components/RecipeCardsSection";
import TabsSection from "./components/TabsSection";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [open, setOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [weekRecipes, setWeekRecipes] = useState({
    week1: [],
    week2: [],
    week3: [],
    week4: [],
  });

  const getAllRecipes = async () => {
    try {
      const response = await api.get("/recipes");
      if (response) {
        setRecipes(response.data.recipes);
        console.log(response.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAllRecipes();
  }, []);

  const handleSelectItem = (item) => {
    if (selectedRecipe?.id === item.id) {
      setSelectedRecipe(null);
    } else {
      setSelectedRecipe(item);
    }
  };

  const handleRemoveItemFromWeek = (week, item) => {
    setWeekRecipes((prev) => {
      let data = { ...prev };
      if (data[week].find((i) => i.id === item.id)) {
        data[week] = data[week].filter((i) => i.id !== item.id);
      }

      return data;
    });
  };

  return (
    <div className="bg-gradient-to-r from-orange-50 via-purple-50 to-blue-50">
      <HeroSection />
      <TabsSection
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        open={open}
        setOpen={setOpen}
        setWeekRecipes={setWeekRecipes}
        selectedRecipe={selectedRecipe}
        setSelectedRecipe={setSelectedRecipe}
      />
      <RecipeCardsSection
        recipes={
          activeTab === 0
            ? recipes
            : activeTab === 1
            ? weekRecipes.week1
            : activeTab === 2
            ? weekRecipes.week2
            : activeTab === 3
            ? weekRecipes.week3
            : activeTab === 4
            ? weekRecipes.week4
            : recipes
        }
        activeTab={activeTab}
        selectedRecipe={selectedRecipe}
        setSelectedRecipe={handleSelectItem}
        handleRemoveItemFromWeek={handleRemoveItemFromWeek}
        currentWeek={
          activeTab === 0
            ? "all"
            : activeTab === 1
            ? "week1"
            : activeTab === 2
            ? "week2"
            : activeTab === 3
            ? "week3"
            : activeTab === 4
            ? "week4"
            : "all"
        }
      />
    </div>
  );
};
export default App;
