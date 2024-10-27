import { createApp } from './app';
import { RecipeType } from './recipe';
import { FileStore } from './stores/file.store';
import { join } from 'node:path';

const fileToStore = join(__dirname, '..', 'data.json');

type RecipeStore = RecipeType[];

const initialRecipes: RecipeType[] = [
  { id: 1, name: "Scrambled Egg", difficulty: "easy" },
  { id: 2, name: "Pancake", difficulty: "medium" },
  { id: 3, name: "New englandi kagyloleves", difficulty: "hard"}
];

const store = new FileStore<RecipeStore>(fileToStore, initialRecipes);
const args = process.argv

async function main() {
  return await createApp(store, args);
}

main()
  .then(() => console.log('Done.'))

