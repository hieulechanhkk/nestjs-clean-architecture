import { UserWithoutPassword } from '../model/user.model';

export interface UserRepository {
  getAllUsers(): Promise<UserWithoutPassword[]>;
  getUserById(id: number): Promise<UserWithoutPassword>;
  getUserByEmail(email: string): Promise<UserWithoutPassword>;
  getUserByUserName(username: string): Promise<UserWithoutPassword>;

  updateLastLogin(id: number): Promise<void>;
  updateRole(id: number, role: string): Promise<void>;
  updatePassword(id: number, password: string): Promise<void>;
  updateRefreshToken(id: number, hashRefreshToken: string): Promise<void>;
}
