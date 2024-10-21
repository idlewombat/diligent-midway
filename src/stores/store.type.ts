export interface Store<Type> {
  getValue(): Promise<Type>;
  setValue(value: Type): Promise<void>;
}
