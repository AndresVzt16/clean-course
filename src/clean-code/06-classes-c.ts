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
    /* 
    --Aplicando el principio de responsabilidad Unica 
    --Priorizar la composicion frente a la herencia 
      
    */
    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name;
      (this.gender = gender), (this.birthdate = birthdate);
    }
  }

  interface UserProps {
    email: String;
    role: String;
  }

  class User {
    public lastAccess: Date;
    public email: String;
    public role: String;

    constructor({ email, role }: UserProps) {
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingsProps {
    workingDirectory: String;
    lastOpenFolder: String;
  }
  class Settings {
    public workingDirectory: String;
    public lastOpenFolder: String;
    constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
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

  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;
    constructor({ name, birthdate, gender, email, role, lastOpenFolder, workingDirectory }: UserSettingsProps) {
      this.person = new Person({ name, birthdate, gender });
      this.user = new User({ email, role });
      this.settings = new Settings({ workingDirectory,lastOpenFolder});
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


  console.log({
    userSettings,

  });
})();
