interface NameInfo {
  firstName: string,
  lastName: string
}

const getFullName = ({ firstName, lastName }: NameInfo) => {
  return `${firstName} ${lastName}`;
}

console.log(
  getFullName({
    firstName: "rain",
    lastName: "wildest"
  })
)

// 加上问号就是可选属性(多余属性检测可用索引签名绕过检查)
interface Vegetable {
  color?: string,
  readonly type: string /*添加readonly后，该属性则不能修改*/,
  [prop: string]: any
}

const getVegetables = ({ color, type }: Vegetable) => {
  return `A ${color ? (`${color} `) : ""}${type}`
}

/*
  console.log(
    // 多余属性检测可以用类型断言绕过
    getVegetables({
      type: "tomao",
      color: "red",
      size: 2
    } as Vegetable)
  )
*/

console.log(
  getVegetables({
    type: "tomao",
    color: "red",
    size: 2
  })
)


let vegetableInfo = {
  type: "tomao",
  color: "red",
  size: 2
}
// 最后一种方法就是利用 类型兼容性 来绕过多余属性检测
console.log(
  getVegetables(vegetableInfo)
)


interface ArrInter {
  0: number,
  readonly 1: string /*该索引就变成可读索引*/
}

let arr1: ArrInter = [1, "a"];
// arr1[1] = "b";

// 类型别名(参数名字不必相同，位置对应上就可以了)
type AddFunc = (num1: number, num2: number) => number

const add: AddFunc = (n1, n2) => (n1 + n2)

// 索引类型(此时索引只能为数字)
/*
interface RoleDic {
  [id: number]: string
}

const role1: RoleDic = {
  0: "super_admin"
  // "a": "super_admin"
}
*/

interface RoleDic {
  [id: string]: string
}

const role2: RoleDic = {
  // 此时数字会转为string类型
  0: "super_admin",
  "a": "super_admin"
}


// 接口继承
interface Vegetables {
  color: string
}

interface Tomato extends Vegetables {
  radius: number
}


// 混合类型接口
interface Counter {
  (): void,
  count: number
}
const getCounter = (): Counter => {
  const c = () => { c.count++ }
  c.count = 0;
  return c;
}
const counter: Counter = getCounter();
counter()
console.log("counter", counter.count)
