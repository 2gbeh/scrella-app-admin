export interface UserDto {
  id: number;
  name: string;
  username?: string | null;
  email: string;
  phone?: string | null;
}