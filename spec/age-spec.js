import Age from './../src/age.js';

describe('Age', function() {
  it('should display an inputted age into seconds', function() {
    let age = new Age(1994, 3, 30);
    let result = age.ageInSeconds();
    expect(result).toEqual(756864000);
  });
});
