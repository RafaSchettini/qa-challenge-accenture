import { faker } from '@faker-js/faker';

class WebTableDataGenerator {
  generateTableRecord() {
    return {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      age: faker.number.int({ min: 18, max: 65 }).toString(),
      salary: faker.number.int({ min: 1000, max: 100000 }).toString(),
      department: faker.helpers.arrayElement(['IT', 'Finance', 'HR', 'Sales', 'Marketing']),
    };
  }
}

export default new WebTableDataGenerator();

