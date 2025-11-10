import { faker } from '@faker-js/faker';

class FormDataGenerator {
  generatePracticeFormData() {
    const stateCityMap = {
      'NCR': ['Delhi', 'Gurgaon', 'Noida'],
      'Uttar Pradesh': ['Agra', 'Lucknow', 'Merrut'],
      'Haryana': ['Karnal', 'Panipat'],
      'Rajasthan': ['Jaipur', 'Jaiselmer'],
    };

    const state = faker.helpers.arrayElement(Object.keys(stateCityMap));
    const city = faker.helpers.arrayElement(stateCityMap[state]);

    return {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      gender: faker.helpers.arrayElement(['male', 'female', 'other']),
      phoneNumber: faker.string.numeric(10),
      dateOfBirth: {
        day: faker.number.int({ min: 1, max: 28 }),
        month: faker.helpers.arrayElement([
          'January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December'
        ]),
        year: faker.number.int({ min: 1990, max: 2005 }).toString(),
      },
      subjects: [faker.helpers.arrayElement(['Maths', 'Physics', 'Chemistry', 'English', 'Computer Science'])],
      hobbies: faker.helpers.arrayElements(['sports', 'reading', 'music'], { min: 1, max: 3 }),
      address: faker.location.streetAddress(),
      state: state,
      city: city,
    };
  }
}

export default new FormDataGenerator();
