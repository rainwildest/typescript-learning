// 布尔类型

/*
  // 直接创建并赋值
  // let bool: boolean = false;
*/

// 创建后再赋值
let bool: boolean;
bool = true;

// 数值类型
let num: number = 123;
// 二进制
num = 0b111011;
// 八进制
num = 0o173;
// 十六进制
num = 0x7b;

// 字符串类型
let str: string;
str = "abc";
str = `数值是${num}`;
console.log(str);

// 数组类型
// [1,2,3]
// 写法1：
let arr: number[];
arr = [5];

// 写法2：
let arr2: number[];

// 联合类型：数组情况得加括号
let arr3: (string | number)[];

// 元组类型：固定长度，固定顺序
let tuple: [string, number, boolean];
tuple = ["a", 1, true];

// 枚举类型
enum Roles {
  SUPER_ADMIN,
  ADMIN = 4 /*(自定义索引值)*/,
  USER
}

console.log("枚举类型（拿出相应的索引）：", Roles.SUPER_ADMIN);
console.log("枚举类型（拿出相应的名称）：", Roles[0]);

// any 类型
let value: any;
value = "abc";
value = 123;
value = false;
const arr4: any[] = [1, "a"];

// void类型(undefined 可以赋值给 void 类型)
const consoleText = (text: string): void => {
  console.log(text);
}

let v: void;
v = undefined;

// null 和 undefined(基础类型)
let u: undefined;
// 只能赋值undefined
u = undefined;

let n: null;
// 只能赋值null
n = null;

// never 类型(一般用于以下两种情况)
const errorFunc = (message: string): never => {
  throw new Error(message);
}

const infiniteFunc = (): never => {
  while (true) { }
};

// object 类型
let obj = {
  name: "rainwildest"
}

let obj2 = obj;
obj2.name = "wildest";
console.log(obj);
function getObject(obj: Object): void {
  console.log(obj);
}
getObject(obj2);

// 类型断言
const getLength = (target: string | number): number => {
  if ((target as string).length || (target as string).length === 0) {
    return (target as string).length;
  } else {
    return target.toString().length;
  }
}
