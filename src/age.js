class Age {
  constructor(year, month, day) {
    this.birthDay = new Date(year, month, day);
    this.currentDay = new Date();
  }

  ageInSeconds() {
    let age = this.birthDay.getTime();
    console.log(age);
    let today = this.currentDay.getTime();
    console.log(today);
    let ageInSeconds = (age - today);
    return ageInSeconds;
  }
}

export default Age;
