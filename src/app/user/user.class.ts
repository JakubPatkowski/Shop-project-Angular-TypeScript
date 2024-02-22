export class User {
  private _name: string;
  private _surname: string;
  private _email: string;
  private _telNumber: string;


  constructor(name: string, surname: string, email: string, telNumber: string) {
    this._name = name;
    this._surname = surname;
    this._email = email;
    this._telNumber = telNumber;
  }


  public getName(): string {
    return this._name;
  }

  public getSurname(): string {
    return this._surname;
  }

  public getEmail(): string {
    return this._email;
  }

  public getTelNumber(): string {
    return this._telNumber;
  }
}
