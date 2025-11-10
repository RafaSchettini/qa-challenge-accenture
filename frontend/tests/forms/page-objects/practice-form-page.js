class PracticeFormPage {
  constructor() {
    this.selectors = {
      firstName: '#firstName',
      lastName: '#lastName',
      userEmail: '#userEmail',
      gender: {
        male: '#gender-radio-1',
        female: '#gender-radio-2',
        other: '#gender-radio-3',
      },
      userNumber: '#userNumber',
      dateOfBirthInput: '#dateOfBirthInput',
      subjectsInput: '#subjectsInput',
      hobbies: {
        sports: '#hobbies-checkbox-1',
        reading: '#hobbies-checkbox-2',
        music: '#hobbies-checkbox-3',
      },
      uploadFile: '#uploadPicture',
      currentAddress: '#currentAddress',
      state: '#state',
      city: '#city',
      dropdownIndicator: 'div[class*="indicatorContainer"]',
      reactSelectOption: '[id*="react-select"][id*="-option"]',
      submitButton: '#submit',
      modal: '.modal-content',
      modalCloseButton: '#closeLargeModal',
      modalTitle: '#example-modal-sizes-title-lg',
    };
  }

  fillFirstName(firstName) {
    cy.get(this.selectors.firstName).type(firstName);
  }

  fillLastName(lastName) {
    cy.get(this.selectors.lastName).type(lastName);
  }

  fillEmail(email) {
    cy.get(this.selectors.userEmail).type(email);
  }

  selectGender(gender) {
    const genderMap = {
      male: this.selectors.gender.male,
      female: this.selectors.gender.female,
      other: this.selectors.gender.other,
    };
    cy.get(genderMap[gender] || this.selectors.gender.male).check({ force: true });
  }

  fillPhoneNumber(phoneNumber) {
    cy.get(this.selectors.userNumber).type(phoneNumber);
  }

  selectDateOfBirth(day, month, year) {
    cy.get(this.selectors.dateOfBirthInput).click();
    cy.get('.react-datepicker__month-select').select(month);
    cy.get('.react-datepicker__year-select').select(year);
    cy.get('.react-datepicker__day:not(.react-datepicker__day--outside-month)')
      .contains(new RegExp(`^${day}$`))
      .first()
      .click();
  }

  fillSubjects(subjects) {
    subjects.forEach((subject) => {
      cy.get(this.selectors.subjectsInput).type(subject);
      cy.get('.subjects-auto-complete__menu').contains(subject).click();
    });
  }

  selectHobbies(hobbies) {
    hobbies.forEach((hobby) => {
      const hobbyMap = {
        sports: this.selectors.hobbies.sports,
        reading: this.selectors.hobbies.reading,
        music: this.selectors.hobbies.music,
      };
      cy.get(hobbyMap[hobby]).check({ force: true });
    });
  }

  uploadFile(filePath) {
    cy.get(this.selectors.uploadFile).selectFile(filePath, { force: true });
  }

  fillCurrentAddress(address) {
    cy.get(this.selectors.currentAddress).type(address);
  }

  selectState(state) {
    cy.get(this.selectors.state).find(this.selectors.dropdownIndicator).first().click();
    cy.get(this.selectors.reactSelectOption, { timeout: 5000 })
      .contains(state)
      .click();
  }

  selectCity(city) {
    cy.get(this.selectors.city).find(this.selectors.dropdownIndicator).first().click();
    cy.get(this.selectors.reactSelectOption, { timeout: 5000 })
      .contains(city)
      .click();
  }

  submitForm() {
    cy.get(this.selectors.submitButton).click({ force: true });
  }

  verifyModalIsVisible() {
    cy.get(this.selectors.modal, { timeout: 10000 }).should('be.visible');
    cy.get(this.selectors.modalTitle).should('contain.text', 'Thanks for submitting the form');
  }

  closeModal() {
    cy.get(this.selectors.modalCloseButton).click();
    cy.get(this.selectors.modal).should('not.exist');
  }

  fillForm(formData) {
    this.fillFirstName(formData.firstName);
    this.fillLastName(formData.lastName);
    this.fillEmail(formData.email);
    this.selectGender(formData.gender);
    this.fillPhoneNumber(formData.phoneNumber);
    this.selectDateOfBirth(formData.dateOfBirth.day, formData.dateOfBirth.month, formData.dateOfBirth.year);
    
    if (formData.subjects?.length > 0) {
      this.fillSubjects(formData.subjects);
    }
    
    if (formData.hobbies?.length > 0) {
      this.selectHobbies(formData.hobbies);
    }
    
    this.fillCurrentAddress(formData.address);
    this.selectState(formData.state);
    this.selectCity(formData.city);
  }
}

export default new PracticeFormPage();
