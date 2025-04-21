(() => {
  type Gender = "M" | "F";
  class Person {
    /* Sin aplicar el principio de responsabilidad Unica */
    constructor(
      public name: String,
      public gender: Gender,
      public birthdate: Date
    ) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  class User extends Person {
    private lastAccess = new Date()
    constructor(
      public email: String,
      public role: String,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(name, gender, birthdate)
    }

    checkCredentials() {
      return true;
    }
  }
  class UserSettings extends User {
    constructor(
      public workingDirectory: String,
      public lastOpenFolder: String,
      email: string,
      name: string,
      role: string,
      gender: Gender,
      birthdate: Date
    ) {
        super(email , name, role, gender, birthdate);
    
    }
  }
  const userSettings = new UserSettings(
    '/usr/home',
    '/home',
    'andres@dms.com.ec',
    'Admin',
    'Andres Vizuete',
    'M',
    new Date('1998-12-08')
  )

  console.log({userSettings, areCredentialsValid: userSettings.checkCredentials()});
})();
