import { UserModel, UserWithoutPassword } from '../model/user.model';

export interface IUserRepository {
  createUserWithoutPassword(
    user: UserWithoutPassword,
  ): Promise<UserWithoutPassword>;
  createUserWithPassword(
    user: UserWithoutPassword,
  ): Promise<UserWithoutPassword>;

  getAllUsers(): Promise<UserWithoutPassword[]>;
  getUserById(id: number): Promise<UserModel>;
  getUserByEmail(email: string): Promise<UserModel>;
  getUserByUserName(username: string): Promise<UserModel>;

  updateLastLogin(id: number): Promise<void>;
  updateRole(id: number, role: string): Promise<void>;
  updatePassword(id: number, password: string): Promise<void>;
  updateRefreshToken(id: number, hashRefreshToken: string): Promise<void>;
}
