import { AppError } from "./app.error";
import { Recipe, RecipeType, CreateRecipeType } from "./recipe";
import { Store } from "./stores/store.type";

export async function list(store: Store<RecipeType[]>, args: string[]) {
  if (args.length > 0) {
    throw new AppError('The list command should not have any arguments')
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
    throw new AppError("The list command should have one argument: The id of the recipe.");
  }
  let id = parseInt(args[0])
  if (typeof id !== "number"){
    throw new AppError("the id should be numeric.")
  }
  const recipe = new Recipe(store);
  const recipes = await recipe.readAll();
  const matchingRecipe = recipes.filter(r => r.id === id)[0]
  if (!matchingRecipe){
    throw new AppError('No recipe found with this id.')
  }
  const formatted = `- [${matchingRecipe.id}] ${matchingRecipe.name}, difficulty: ${matchingRecipe.difficulty}`;
  console.log("Your recipe:");
  console.log(formatted);
}

export async function create(store: Store<RecipeType[]>, args: string[]) {
  if (args.length !== 2) {
    throw new AppError(
      "The create command should have two arguments: The name of the recipe, and the difficulty."
    );
  }
  let newRecipeName = args[0];
  let difficulty = args[1] as 'easy' | 'medium' | 'hard'
  if (!newRecipeName){
    throw new AppError("provide a recipe name pls")
  }
  if (!['easy', 'medium', 'hard'].includes(difficulty)){
    throw new AppError("difficulty should be either easy, medium or hard.")
  }
  
  const recipe = new Recipe(store);
  const recipes = await recipe.readAll();
  const newId = recipes.length > 0 ? Math.max(...recipes.map(r => r.id)) + 1 : 1

  const newRecipe: CreateRecipeType = {
    name: newRecipeName,
    difficulty: difficulty
  }

  const recipeToSave: RecipeType = { id: newId, ...newRecipe }

  console.log(`ID: ${recipeToSave.id}`);
  console.log(`name: ${recipeToSave.name}`);  
  console.log(`difficulty: ${recipeToSave.difficulty}`)
}
