const validation = new JustValidate("#point-add-student");
validation
  // Фамилия
  .addField("#input-lastName", [
    {
      rule: "required",
      errorMessage: "Укажите Фамилию",
    },
  ])
  // Имя
  .addField("#input-name", [
    {
      rule: "required",
      errorMessage: "Укажите Имя",
    },
  ])
  // Отчество
  .addField("#input-patronymic", [
    {
      rule: "required",
      errorMessage: "Укажите Отчество",
    },
  ])
  // Требуется минимум 2000 год
  .addField("#input-workStart", [
    {
      rule: "required",
      errorMessage: "Укажите год начала обучения",
    },
    {
      rule: "minNumber",
      value: 2000,
      errorMessage: "Требуется минимум 2000 год",
    },
  ])
  // Дата должна быть после 01/01/1900
  .addField("#input-birthDate", [
    {
      rule: "required",
      errorMessage: "Дата должна быть по примеру: 01/01/1900 ",
    },
    {
      plugin: JustValidatePluginDate(() => ({
        format: "dd/mm/yyyy",
        isAfter: "01/01/1900",
      })),
      errorMessage: "Дата должна быть после 01.01.1900",
    },
  ])
  // Факультет
  .addField("#input-post", [
    {
      rule: "required",
      errorMessage: "Укажите Факультет",
    },
  ])

  .onSuccess((ev) => {
    ev.preventDefault();
    window.showNotification();
  });
