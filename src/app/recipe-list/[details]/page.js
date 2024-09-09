import RecipeDetailsItem from "@/components/recipe-details";


const fetchRecepieDetails = async(id) => {
  try {
    const apiResponse = await fetch(`https://dummyjson.com/recipes/${id}`);
    const data = await apiResponse.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

const RecipeDetails = async({params}) => {
  const getRecepieDetails = await fetchRecepieDetails(params?.details);

  // console.log("params", recepieDetails);

  return (
    <div>
      <RecipeDetailsItem getRecepieDetails={getRecepieDetails} />
    </div>
  )
}

export default RecipeDetails