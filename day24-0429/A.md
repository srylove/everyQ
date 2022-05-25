### 问题一答案

```javaScript

```


### 问题二答案

```javascript
type MyPartial<T> = {
  [Property in keyof T]?: T[Property];
}
```