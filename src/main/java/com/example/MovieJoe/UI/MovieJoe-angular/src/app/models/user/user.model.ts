export class User {
  id?: number;
  userName?: string;
  password?: string;
  role?: string;

  constructor(id?: number, userName?: string, password?: string, role?: string) {
    this.id = id;
    this.userName = userName;
    this.password = password;
    this.role = role;
  }
}
