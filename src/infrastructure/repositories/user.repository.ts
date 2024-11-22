import { Injectable } from '@nestjs/common';
import { UserWithoutPassword } from 'src/domain/model/user.model';
import { IUserRepository } from 'src/domain/repositories/userRepositoty.interface';

@Injectable()
export class UserRepository implements IUserRepository {
  createUserWithoutPassword(
    user: UserWithoutPassword,
  ): Promise<UserWithoutPassword> {
    return Promise.resolve(user);
  }

  createUserWithPassword(
    user: UserWithoutPassword,
  ): Promise<UserWithoutPassword> {
    return Promise.resolve(user);
  }

  getAllUsers(): Promise<UserWithoutPassword[]> {
    return Promise.resolve([]);
  }

  getUserById(id: number): Promise<UserWithoutPassword> {
    return Promise.resolve({ id } as UserWithoutPassword);
  }

  getUserByEmail(email: string): Promise<UserWithoutPassword> {
    return Promise.resolve({ id: 1, email } as UserWithoutPassword);
  }

  getUserByUserName(username: string): Promise<UserWithoutPassword> {
    return Promise.resolve({ id: 1, username } as UserWithoutPassword);
  }

  updateLastLogin(id: number): Promise<void> {
    return Promise.resolve({ id } as any);
  }

  updateRole(id: number, role: string): Promise<void> {
    return Promise.resolve({ id, role } as any);
  }

  updatePassword(id: number, password: string): Promise<void> {
    return Promise.resolve({
      id,
      password,
    } as any);
  }

  updateRefreshToken(id: number, hashRefreshToken: string): Promise<void> {
    return Promise.resolve({ id, hashRefreshToken } as any);
  }
}
