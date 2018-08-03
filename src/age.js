class Age {
  constructor(year, month, day) {
    this.birthDay = new Date(year, month, day);
    this.currentDay = new Date();
  }

  ageInSeconds() {
    let age = this.birthDay;
    let today = this.currentDay;
    let difference = today.getTime() - age.getTime();
    let ageInSeconds = difference / 1000;
    return ageInSeconds;
  }

  secondsToYears() {
    let seconds = this.ageInSeconds();
    let ageInYears = Math.floor(seconds / 31536000);
    return ageInYears;
  }
}

export default Age;
