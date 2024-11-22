export class UserWithoutPassword {
  id: number;
  username: string;
  email: string;
  role: string;
  hashRefreshToken: string;
  lastLogin: Date;
  createdAt: Date;
  updatedAt: Date;
}

export class UserModel extends UserWithoutPassword {
  password: string;
}
