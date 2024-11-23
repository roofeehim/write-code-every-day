// 基本的な型定義の練習
// 1. プリミティブ型

let message: string = "おはようございます";
let count: number = 1;
let isDone:boolean = false;

// 2. 配列
let numbers:number[] = [1, 2, 3, 4, 5];
let words:Array<string> = ["apple", "banana", "cherry"];

// 3. オブジェクト
interface User {
    name: string;
    age: number;
    isActive?: boolean;
}

// インターフェイスの使用
const user:User = {
  name: "田中太郎",
  age:30
};

// 4. 関数の型定義
function greer(name: string): string {
  return `${name}さん、おはようございます`;
}