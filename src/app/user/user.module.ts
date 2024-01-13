class User {
  name: string;
  surname: string;
  email: string;
  telNumber: string;
  passwordHash: string;


  constructor(name: string, surname: string, email: string, telNumber: string, passwordHash: string) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.telNumber = telNumber;
    this.passwordHash = passwordHash;
  }
}
