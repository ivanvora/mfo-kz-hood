export type TDataWrapper<T> = {
  success: true;
  message?: null;
  errors?: string[];
  data?: T;
};
