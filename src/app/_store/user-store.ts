interface UserInfoType {
  id: number;
  devName: string;
  email: string;
}

interface State {
  user?: UserInfoType;
  state: 'Login' | 'Logout';
}
