export type TLoginRequest = {
  username: string;
  password: string;
};
export type TLoginResponse = {
  success: boolean;
  message: string;
  data: {
    access_token: string;
    token_type: string;
    expires_in: number;
  };
};
