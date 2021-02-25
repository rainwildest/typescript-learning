let add1: (x: number, y: number) => number;
add1 = (arg1: number, arg2: number): number => (arg1 + arg2);
// 不用定义返回类型也行
add1 = (arg1: number, arg2: number) => (arg1 + arg2);

// 类型别名
type Add = (x: number, y: number) => number;
let addFunc: Add;
addFunc = (arg1: number, arg2: number) => (arg1 + arg2);

type AddFunction = (arg1: number, arg2: number, arg3?: number) => number;
let addFunction: AddFunction;
addFunction = (x: number, y: number) => (x + y);
addFunction = (x: number, y: number, z?: number) => (x + y + (z ?? 0));

// 剩余参数
// const handleData = (arg1: number, ...args: number[]) {
//   // ...
// }

// 函数重载(只能用function来定义)
function handleData(x: string): string[];
function handleData(x: number): number[];
// 这个是函数重载的主体
function handleData(x: any): any {
  if (typeof x === "string") {
    return x.split("")
  } else {
    return x.toString().split("").map((item: string) => Number(item))
  }
}
