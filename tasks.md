# Tasks and Rules

## Rules

- You should work in a **separate branch**.
- All tasks should be implemented in one branch.
- You should push this branch to GitHub and open a **Pull Request**. 
- Do not use any Generative AI.
- Do not share your results with your teammates.
- Creating tests are not needed.

You most probably won't finish all of the tasks. **It is totally OK**. Try to
create the best quality code for the finished tasks.

## Tasks

### 1: Show meaningful error message to the user

- Right now if, an unknown command is given as the first argument of
our app, it throws an error.
- Handle this error and show only the error's message to the user.

Example command and output:

```
npm start -- start-engine
Error: Unknown command: start-engine
```

### 2: List command should not have any arguments

- Validate the `list` command's arguments.
- If it has any, show a meaningful error message to the user.

Example:
```
npm start -- list unnecessary
Error: The list command should not have any arguments.
```

### 3: Recipe details

- A new `details` command is available.
- It should have one argument, the `id` of the recipe.
- It should display the recipe details (currently the ID and the name only).
- If the recipe ID is not numeric show a meaningful error message to the user.

Example:
```
npm start -- details 1
ID: 1
Name: Scrambled Egg
```

### 4: Create a recipe

- A new `create` command is available.
- The command has one argument, the `name` of the recipe.
- If the `name` is missing, the app should show a meaningful error message to the user.
- Create a new `CreateRecipeType` from the `RecipeType` type. `CreateRecipeType` is the same as `RecipeType` without the `id` property. The new type should reuse the `RecipeType` use the typescript utilities.
- The app should generate a new unique numeric ID for the recipe.
- If the recipe is created successfully, its details should be displayed
  the same way like in the `details` command.

Example:
```
npm start -- create Oatmeal
ID: 3
Name: Oatmeal
```

### 5: Add a difficulty to the recipe

- Extend the recipe properties with a `difficulty`.
- The difficulty can only the following strings: `easy`, `medium`, `hard`.
- List the difficulties in the details command.
- Hint: You can update the initial values in the `src/index.ts` then delete the `data.json`.

Example:
```
npm start -- details 1
ID: 1
Name: Scrambled Egg
Difficulty: easy
```

### 6: Add difficulty to the create command

- The create command should have a second argument, the difficulty.
- If not `easy`, `medium` or `hard` given show a meaningful error message to the user.

Example:
```
npm start -- create "Duck in orange sauce" hard
ID: 2
Name: Duck in orange sauce
Difficulty: hard
```

### 7: Update name

- Create a command `update-name`.
- It should have two arguments, the `id` of the recipe and the `newName`.
- If the ID is not numeric or missing or the new name is missing show a meaningful error message to the user.
- Create a new `UpdateRecipeType` from the `RecipeType` type. `UpdateRecipeType` is the same as the `RecipeType` without the `id`, and all other properties are optional. The new type should reuse the `RecipeType` use the typescript utilities.
- If the recipe with the given ID is not exists it should show a meaningful error message to the user.
- If the update is successful, show the details of the recipe a same way in the details command.

Example:
```
npm start -- update-name 1 "Pancake with marmalade"
ID: 1
Name: Pancake with marmalade
Difficulty: easy
```

### 8: Remove the recipe

- Create a `remove` command.
- It has only one argument the `id` of the recipe.
- If it is not a numeric argument show a meaningful error message to the user.
- If the recipe with the given ID is not exists show a meaningful error message to the user.
- If the deletion is successful, show the details of the deleted recipe to the user.

```
Example:
npm start -- remove 1
ID: 1
Name: Pancake
Difficulty: easy
```

### 9: Preparation time

- Extend the recipe with a preparationTime property. It describes the preparation time in minutes.
- It should be numeric.
- Add it to the recipe details (everywhere a recipe 
details should be displayed, like the details, create, update and remove commands)
- Add it to the create command as a 3rd argument. If it is not numeric or missing show a 
meaningful error message to the user.
- Hint: You can update the initial values in the `src/index.ts` then delete the `data.json`.

Example:
```
npm start -- create "Duck in orange sauce" hard 120 
ID: 3
Name: Duck in orange sauce
Difficulty: hard
Preparation time: 120 mins
```

### 10: Differentiate errors

- There are two different type of errors. The `AppError` which indicates
any issues that should be displayed to the user in a nice way.
- And there are a lot of different type of runtime errors, represented by the Javascript's built in `Error`'s object.
- Differentiate the two errors. If the `AppError` is happened, show it to a nice way to the user, if a runtime error is given, display the full error with all information, e.g. the stacktrace.

### 11: Add ingredients

- The recipe can have multiple ingredients. 
- An ingredient has a `name`, `amount` and `unit`.
- The name should be a string, the amount is a number and the unit can be `g` (gram) or `ml` (milliliter).
- The new command is `add-ingredient`, it should have 4 arguments. 
- The `id` of the recipe to add the ingredient to, the `name`, the ingredient `amount` and the `unit`.
- If any of them is missing or the ID and the amount is not numeric, or the unit is not one of `g` or `ml` it should show a meaningful error message to the user.
- If the ingredient is successfully added show the details of the recipe. 
- The ingredients must be visible in the recipe details (create, update, remove, details commands).

An example ingredient:

```json
{
  "name": "Marmalade",
  "unit": "g",
  "amount": 5
}
```

```
npm start -- add-ingredient 1 Marmalade 5 g
ID: 1
Name: Pancake
Difficulty: easy
Preparation time: 15 mins
Ingredients:
- 5 g Marmalade
```