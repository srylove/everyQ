



type MyPartial<T> = {
  [Property in keyof T]?: T[Property];
}