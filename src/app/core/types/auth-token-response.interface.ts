export interface AuthTokenResponseInterface {
  data: {
    user_device_identifier: string,
    is_unique: boolean
  };
  debug: [];
  errors: [];
  success: boolean;
}
