// function getArray<T>(value: T, times: number = 5): T[] {
//   return new Array(times).fill(value)
// }
// T是不固定的，一般用T来命名
// const getArray = <T>(value: T, times: number = 5): T[] => {
//   return new Array(times).fill(value)
// }

/*
const getArray = <T, U>(param1: T, param2: U, tiems: number): [T, U][] => {
  return new Array(tiems).fill([param1, param2]);
}
// 两种写法
// 直接声明输入的类型
getArray<number, string>(1, "a", 3);
// 省略类型声明，typescript会自动识别类型
getArray(1, "a", 3);
*/

/*
let getArray: <T>(arg: T, tiems: number) => T[];
getArray = (arg: any, times: number) => {
  return new Array(times).fill(arg);
}
// 虽然 arg 定义的是 any，但是T返回的类型还是按照传入参数的类型来返回
// getArray(123, 3).map(item => item.length);
*/

/*
// 使用类型别名来定义参数类型
type GetArray = <T>(arg: T, times: number) => T[];
let getArray: GetArray = (arg: any, times: number) => {
  return new Array(times).fill(arg);
}
*/

// interface GetArray<T> {
//   (arg: T, times: number): T[],
//   array: T[]
// }

// 泛型约束
interface ValueWithLength {
  length: number
}
// T传入的参数必须是有length属性才行
const getArray = <T extends ValueWithLength>(arg: T, times: number): T[] => {
  return new Array(times).fill(arg);
}
getArray([1, 2], 3);
// 这样传入也可以
getArray({ length: 3 }, 3);

const getProps = <T, K extends keyof T>(object: T, propName: K) => {
  return object[propName];
}

const objs = {
  a: "a",
  b: "b"
}

getProps(objs, "a");
