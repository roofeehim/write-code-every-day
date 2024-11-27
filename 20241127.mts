type Result<T, E = Error> = Success<T> | Failure<E>;

// 成功を表現する型
interface Success<T> {
  type: 'success';
  value: T;
}

// 失敗を表現する型
interface Failure<E> {
  type: 'failure';
  error: E;
}

// ユーティリティ関数
const success = <T extends unknown>(value: T): Success<T> => ({
  type: 'success',
  value,
});

const failure = <E extends unknown>(error: E): Failure<E> => ({
  type: 'failure',
  error,
});

// Result型を操作するためのユーティリティ関数
const isSuccess = <T, E>(result: Result<T, E>): result is Success<T> => 
  result.type === 'success';

const isFailure = <T, E>(result: Result<T, E>): result is Failure<E> => 
  result.type === 'failure';

interface UserData {
  id: string;
  name: string;
  email: string;
}

async function fetchUserData(id: string): Promise<Result<UserData, string>> {
  try {
    const response = await fetch(`/api/users/${id}`);
    if (!response.ok) {
      return failure('APIリクエストに失敗しました');
    }
    const data = await response.json();
    return success(data);
  } catch (e) {
    return failure('予期せぬエラーが発生しました');
  }
}

const result = await fetchUserData("123");
if (isSuccess(result)) {
  console.log(result.value.name); // 成功時の処理
} else {
  console.log(result.error);      // エラー時の処理
}