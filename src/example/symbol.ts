// 不用使用 new，此时就是一个独一无二的symbol
// const s1 = Symbol();
// console.log(s1);

// const s2 = Symbol();
// console.log(s2);

// 最后结果是为false 
// console.log(s1 === s2);

// 它会先在内部调用toString把 123 转换为string，然后再给它起这个名字
// const s3 = Symbol(123);

// 传入对象则会报错
// const s3 = Symbol({ a: '1' })

/*
const s4 = Symbol('rainwildest');
// 会直接转为 string
console.log(s4.toString());
console.log(Boolean(s4));
console.log(!s4);

let prop = 'name';
const info = {
  [`my${prop}is`]: 'rainwildest'
}
console.log(info);
*/


const s5 = Symbol('name');
const info2 = {
  [s5]: 'rainwildest',
  age: 18,
  sex: 'man'
}
/*
console.log(info2);
info2[s5] = 'haha';
console.log(info2);
*/

// 修改 info2 的值不可以用该方法
// info2.s5
// Symbol 只能用该方法值修改对象
// info2[s5]

// 以下四种方法不能获取到 Symbol 的键
// 第一种：
for (const key in info2) {
  console.log('第一种：', key);
}

// 第二种：
console.log('第二种：', Object.keys(info2));

// 第三种：
console.log('第三种：', Object.getOwnPropertyNames(info2));

// 第四种：
console.log('第四种：', JSON.stringify(info2));
/* ============================================= */

// 以下两种方法可以获取到Symbol的键
// 该方法只可以获取到 Symbol 的键
console.log(Object.getOwnPropertySymbols(info2));
// ES6新提供的对象，可获取全部的键包括Symbol
console.log(Reflect.ownKeys(info2));

// Symbol.for()、Symbol.keyFor() 作用相似
// 两者不会相等
const s6 = Symbol('rainwildest');
const s7 = Symbol('rainwildest');

// Symbol.for()会在全局去查找，如果存在则直接返回，反之则创建
const s8 = Symbol.for('rainwildest');
const s9 = Symbol.for('rainwildest');
const s10 = Symbol.for('haha');
// console.log(s8 === s9); 则是相等的；console.log(s9 === s10);则是不相等的
// 全局范围包含当前页面、iframe

// Symbol.keyFor()得是Symbol.for()全局注册的Symbol值
console.log('keyFor:', Symbol.keyFor(s10))

const obj1 = {
  [Symbol.hasInstance](otherObj: any) {
    console.log(otherObj)
  }
}
console.log({ a: 'a' } instanceof <any>obj1)