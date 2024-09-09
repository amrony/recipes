import RecipeList from "@/components/recipe-list";

const fetchListOfRecepie = async () => {
  try {
    const apiResponse = await fetch("https://dummyjson.com/recipes");
    const data = await apiResponse.json();

    return data?.recipes;
  } catch (error) {
    throw new Error(error);
  }
};

const Recepes = async () => {
  const recipeList = await fetchListOfRecepie();
  return <RecipeList recipeList={recipeList} />;
};

export default Recepes;
