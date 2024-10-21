import { AppError } from "./app.error";
import { Recipe, RecipeType } from "./recipe";
import { Store } from "./stores/store.type";

export async function list(store: Store<RecipeType[]>, args: string[]) {
  if (args.length > 0) {
    throw new AppError("Error: The list command should not have any argument.");
  }
  const recipe = new Recipe(store);
  const recipes = await recipe.readAll();
  const formatted = recipes
    .map((recipe) => `- [${recipe.id}] ${recipe.name}`)
    .join('\n');
  console.log('Your recipes:');
  console.log(formatted);
}

export async function details(store: Store<RecipeType[]>, args: string[]) {
  if (args.length !== 1) {
    throw new AppError("Error: The details command should have one argument (the id number).");
  }
  if (isNaN(parseInt(args[0]))){
    throw new AppError(
      "Error: The id should be a number)."
    );
  }
  const recipe = new Recipe(store);
  const recipes = await recipe.readAll();
  let id: number = Number(args[0]) 
  const matchingRecipe = recipes.find(r => r.id === id)
  if (!matchingRecipe) {
    throw new AppError(`Error: recipe not found with id: ${id} `);
  }
  console.log(`ID: ${matchingRecipe.id} \n Name: ${matchingRecipe.name}`)

};