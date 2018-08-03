import Age from './../src/age.js';

describe('Age', function() {
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
    let result = age.mercurcyAge();
    expect(result).toEqual(100);
  });

  it('should convert Earth age to Venus age', function() {
    let age = new Age(1994, 3, 30);
    let result = age.venusAge();
    expect(result).toEqual(38);
  });
});
