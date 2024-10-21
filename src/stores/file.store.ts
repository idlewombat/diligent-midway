import { PathLike, existsSync, writeFileSync } from "node:fs";
import { Store } from "./store.type";
import { readFile, writeFile } from "node:fs/promises";

export class FileStore<Type> implements Store<Type> {
  private path;

  constructor(path: PathLike, initialValues: Type) {
    this.path = path;

    if (!existsSync(path)) {
      writeFileSync(path, JSON.stringify(initialValues))
    }
  }

  async getValue(): Promise<Type> {
    const content = await readFile(this.path, 'utf-8');
    return JSON.parse(content);
  }
  async setValue(value: Type): Promise<void> {
    await writeFile(this.path, JSON.stringify(value, null, 2));
  }
}