export class UserWithoutPassword {
  id: number;
  role: string;
  email: string;
  username: string;
  hashRefreshToken: string;

  lastLogin: Date;
  createdAt: Date;
  updatedAt: Date;
}

export class UserModel extends UserWithoutPassword {
  password: string;
}
