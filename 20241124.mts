// 基本的な型定義
interface User {
  id:number;
  name:string;
  email:string;
  isActive?:boolean; // オプショナルプロパティ
  role:'admin' | 'user' | 'guest'; // リテラル型のユニオン型
}

// ジェネリック型を使用した配列の型定義
type UserList<T> = {
  items:T[];
  total:number;
  hasMore:boolean;
}

const createUser = (name:string, email:string, role: User['role']):User => {
  return {
    id:Math.floor(Math.random() * 1000000),
    name,
    email,
    isActive:true,
    role
  };
}

const userList:UserList<User> = {
  items:[
    createUser('田中太郎', 'tanaka@example.com', 'admin'),
    createUser('鈴木花子', 'suzuki@example.com', 'user'),
    createUser('佐藤次郎', 'sato@example.com', 'guest'),
  ],
  total:3,
  hasMore:false,
}