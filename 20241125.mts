interface BaseResponse {
  status: 'success' | 'error';
  timestamp:number;
}

interface ApiResponse<T> extends BaseResponse {
  data: T;
  error?:string;
}

interface UserData {
  id:number;
  username:string;
  email:string;
  role:UserRole;
  preferences?:UserPreferences;
}

type UserRole = 'admin' | 'user' | 'guest';

interface UserPreferences {
  theme: 'light' | 'dark';
  notifications: boolean;
  language:string;
}

const handleApiResponse = <T extends unknown>(response:ApiResponse<T>):T | null => {
  if(response.status === 'error') {
    console.error(response.error);
    return null;
  }
  return response.data;
}

const mockApiResponse:ApiResponse<UserData> = {
  status: 'success',
  timestamp: Date.now(),
  data: {
    id:1,
    username:'admin',
    email:'admin@example.com',
    role:'admin',
    preferences: {
      theme:'light',
      notifications:true,
      language:'en',
    },
  },
};

const userData = handleApiResponse(mockApiResponse);