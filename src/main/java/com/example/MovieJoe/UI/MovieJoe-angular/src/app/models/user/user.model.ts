export class User {
  id?: number;
  userName?: string;
  password?: string;
  role?: string;
  firstName?: String;
  lastName?: String;
  email?: String;
  image?: String;

  constructor(id?: number, userName?: string, password?: string, role?: string, firstName?: string, lastName?: string,
              email?: string, image?: string) {
    this.id = id;
    this.userName = userName;
    this.password = password;
    this.role = role;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.image = image;
  }
}
