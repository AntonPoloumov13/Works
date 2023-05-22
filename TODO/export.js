export default class theStudent {
  constructor(firstName, lastName, patronymic, workStart, birthDate, post) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.patronymic = patronymic;
    this.workStart = workStart;
    this.birthDate = birthDate;
    this.post = post;
  }

  get fio() {
    // имя + фамилия + отчество
    return this.lastName + " " + this.firstName + " " + this.patronymic;
  }


  getWorkPeriod() {
    const currentTime = new Date();
    return currentTime.getFullYear() - this.workStart;
  }

  getBirthDateString() {
    const yyyy = this.birthDate.getFullYear();
    let mm = this.birthDate.getMonth() + 1;
    let dd = this.birthDate.getDate();
    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    return dd + "." + mm + "." + yyyy;
  }

  getAge() {
    const today = new Date();
    let age = today.getFullYear() - this.birthDate.getFullYear();
    var m = today.getMonth() - this.birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < this.birthDate.getDate())) {
      age--;
    }
    return age;
  }
}
