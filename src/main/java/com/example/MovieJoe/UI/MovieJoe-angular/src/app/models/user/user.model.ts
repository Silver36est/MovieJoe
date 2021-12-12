export class User {
  id?: number;
  userName?: string | null;
  password?: string | null;
  role?: string;
  firstName?: String;
  lastName?: String;
  email?: String;
  image?: String;
  active?: boolean;

  constructor(id?: number, userName?: string, password?: string, role?: string, firstName?: string, lastName?: string,
              email?: string, image?: string, active?: boolean) {
    this.id = id;
    this.userName = userName;
    this.password = password;
    this.role = role;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.image = image;
    this.active = active;
  }
}
