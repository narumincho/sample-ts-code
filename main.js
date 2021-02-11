// 変数は基本的に const で定義する
const one = 1;
console.log("1+1=", one + 1);

// 上書きする変数は, let で 定義するが, あまり使わない
let value = 5;
console.log(value); // 5
value += 22;
console.log(value); // 27

const text = "👌";
// 文字列はプリミティブ値なので, 値での比較ができる.
console.log(text === "👌"); // true

const list = [1, 2, 3];
console.log(list[0]); // 1
console.log(list["0"]); // 1
console.log([...list, "last"]); // [ 1, 2, 3, 'last' ]
console.log(list.map((e) => e + 5)); // [ 6, 7, 8 ]
list.push("overwrite");
// 配列の要素は const でも上書きできる
console.log(list); // [ 1, 2, 3, 'overwrite' ]

const countryList = [
  {
    id: "iceland",
    name: "アイスランド共和国",
  },
  { id: "yemen", name: "イエメン共和国" },
];
const getName = (country) => country.name;
console.log(countryList.map(getName)); // [ 'アイスランド共和国', 'イエメン共和国' ]
