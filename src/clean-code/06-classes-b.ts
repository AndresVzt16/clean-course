(() => {
  type Gender = "M" | "F";

  interface PersonProps {
    name: String;
    gender: Gender;
    birthdate: Date;
  }

  class Person {
    public birthdate: Date;
    public gender: Gender;
    public name: String;
    /* Sin aplicar el principio de responsabilidad Unica */
    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name;
      (this.gender = gender), (this.birthdate = birthdate);
    }
  }

  interface UserProps {
    email: String;
    role: String;
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class User extends Person {
    public lastAccess: Date;
    public email: String;
    public role: String;

    constructor({ email, role, name, gender, birthdate }: UserProps) {
      super({ name, gender, birthdate });
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface UserSettingsProps {
    workingDirectory: String;
    lastOpenFolder: String;
    email: String;
    role: String;
    gender: Gender;
    birthdate: Date;
    name: string;
  }
  class UserSettings extends User {
    public workingDirectory: String;
    public lastOpenFolder: String;
    constructor({
      workingDirectory,
      lastOpenFolder,
      email,
      name,
      role,
      gender,
      birthdate,
    }: UserSettingsProps) {
      super({ email, name, role, gender, birthdate });
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }
  const userSettings = new UserSettings({
    workingDirectory: "/usr/home",
    lastOpenFolder: "/home",
    email: "andres@dms.com.ec",
    role: "Admin",
    name: "Andres Vizuete",
    gender: "M",
    birthdate: new Date("1998-12-08"),
  });
userSettings.checkCredentials();

  console.log({
    userSettings,
    areCredentialsValid: userSettings.checkCredentials(),
  });
})();
