import Age from './../src/age.js';

describe('Age', function() {
// Test passes - However, fails after first instance due to seconds constantly updating
//   it('should display an inputted age into seconds', function() {
//     let age = new Age(1994, 3, 30);
//     let result = age.ageInSeconds();
//     expect(result).toEqual(756864000);
//   });

  it('should display years between birthday and current date/time', function() {
    let age = new Age(1994, 3, 30);
    let result = age.secondsToYears();
    expect(result).toEqual(24);
  });

  it('should convert Earth age to Mercury age', function() {
    let age = new Age(1994, 3, 30);
    let result = age.mercuryAge();
    expect(result).toEqual(100);
  });

  it('should convert Earth age to Venus age', function() {
    let age = new Age(1994, 3, 30);
    let result = age.venusAge();
    expect(result).toEqual(38);
  });

  it('should convert Earth age to Mars age', function() {
    let age = new Age(1994, 3, 30);
    let result = age.marsAge();
    expect(result).toEqual(12);
  });

  it('should convert Earth age to Jupiter age', function() {
    let age = new Age(1994, 3, 30);
    let result = age.jupiterAge();
    expect(result).toEqual(2);
  });

  it('should return number of years left to live on Mercury', function() {
    let age = new Age(1994, 3, 30);
    let mercuryAge = age.mercuryAge();
    let result = age.mercuryExpectancy(99);
    expect(result).toEqual("Congrats! You've lived 1 year(s) longer than most Mercurians!");
  });

  it('should return number of years left to live on Venus', function() {
    let age = new Age(1994, 3, 30);
    let venusAge = age.venusAge();
    let result = age.venusExpectancy(38);
    expect(result).toEqual(0);
  });

  it('should return number of years left to live on Mars', function() {
    let age = new Age(1994, 3, 30);
    let marsAge = age.marsAge();
    let result = age.marsExpectancy(12);
    expect(result).toEqual(0);
  });

  it('should return number of years left to live on Jupiter', function() {
    let age = new Age(1994, 3, 30);
    let jupiterAge = age.jupiterAge();
    let result = age.jupiterExpectancy(2);
    expect(result).toEqual(0);
  });
});
