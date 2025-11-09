import { faker } from '@faker-js/faker';

class DataGenerator {
  generateUsername() {
    return faker.internet.username();
  }

  generatePassword(options = {}) {
    const length = options.length || 12;
    const minLength = Math.max(8, length);
    
    const uppercase = faker.string.alpha({ length: 1, casing: 'upper' });
    const lowercase = faker.string.alpha({ length: 1, casing: 'lower' });
    const digit = faker.string.numeric({ length: 1 });
    const special = faker.helpers.arrayElement(['!', '@', '#', '$', '%', '^', '&', '*']);
    
    const remainingLength = minLength - 4;
    const remaining = faker.internet.password({
      length: remainingLength,
      memorable: false,
    });
    
    const password = uppercase + lowercase + digit + special + remaining;
    return password.split('').sort(() => Math.random() - 0.5).join('');
  }

  generateUserData() {
    return {
      userName: this.generateUsername(),
      password: this.generatePassword(),
    };
  }
}

export default new DataGenerator();
