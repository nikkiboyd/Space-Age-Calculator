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

  mercuryAge() {
    let age = this.secondsToYears();
    let mercurcyAge = Math.floor(age / .24);
    return mercurcyAge;
  }

  venusAge() {
    let age = this.secondsToYears();
    let venusAge = Math.floor(age / .62);
    return venusAge;
  }

  marsAge() {
    let age = this.secondsToYears();
    let marsAge = Math.floor(age / 1.88);
    return marsAge;
  }

  jupiterAge() {
    let age = this.secondsToYears();
    let jupiterAge = Math.floor(age / 11.86);
    return jupiterAge;
  }

  mercuryExpectancy(maxLife) {
    let mercuryAge = this.mercuryAge();
    let yearsToLive = maxLife - mercuryAge;
    return yearsToLive;
  }

  venusExpectancy(maxLife) {
    let venusAge = this.venusAge();
    let yearsToLive = maxLife - venusAge;
    return yearsToLive;
  }
}

export default Age;
