import theStudent from "./export.js";

// Массив учеников
let students = [
  new theStudent(
    "Петр",
    "Петров",
    "Сергеевич",
    2020,
    new Date(1992, 2, 21),
    "Финансы"
  ),
  new theStudent(
    "Кристина",
    "Бледных",
    "Юрьевна",
    2021,
    new Date(1998, 11, 11),
    "Управление персоналом"
  ),
  new theStudent(
    "Сергей",
    "Петров",
    "Васильевич",
    2022,
    new Date(1987, 1, 23),
    "Управление персоналом"
  ),
  new theStudent(
    "Иван",
    "Ушаков",
    "Александрович",
    2021,
    new Date(1989, 1, 23),
    "Бизнес программы"
  ),
  new theStudent(
    "Роман",
    "Новиков",
    "Андреевич",
    2020,
    new Date(1995, 4, 4),
    "Кибер-спорт"
  ),
  new theStudent(
    "Наталья",
    "Березкина",
    "Павловна",
    2019,
    new Date(1998, 7, 25),
    "Машиностроительный"
  ),
  new theStudent(
    "Иван",
    "Иванов",
    "Алексеевна",
    2018,
    new Date(1999, 2, 24),
    "Машиностроительный"
  ),
];

const $studentsList = document.getElementById("students-list"),
  $studentsListTHALL = document.querySelectorAll(".studentsTable th"),
  $filterForm = document.getElementById('filter-form'),
  $fioFilterInp = document.getElementById('filter-form__fio-inpt'),
  $facultyFilterInp = document.getElementById('filter-form__faculty-inpt'),
  $birthDateFilterInp = document.getElementById('filter-form__birthday'),
  $workStartFilterInp = document.getElementById('filter-form__workstart');

let column = "fio",
  columnDir = true;

// Получить TR сотрудника
function newWorkerTR(student) {
  //$ - DOM Элементы
  const $studentTR = document.createElement("tr"),
    $fioTD = document.createElement("td"),
    $birthDateTD = document.createElement("td"),
    $workStartTD = document.createElement("td"),
    $postTD = document.createElement("td");

  $fioTD.textContent = student.fio;
  $birthDateTD.textContent =
    student.getBirthDateString() + " (" + student.getAge() + " лет)";
  $workStartTD.textContent =
    student.workStart + " (" + student.getWorkPeriod() + " лет)";
  $postTD.textContent = student.post;

  if (student.getWorkPeriod() >= 4) {
    $workStartTD.textContent = student.workStart + " (Закончил)";
  }

  $studentTR.append($fioTD);
  $studentTR.append($birthDateTD);
  $studentTR.append($workStartTD);
  $studentTR.append($postTD);

  return $studentTR;
}

// Получить сортировку массива по параметрам
function getSortWorkers(prop, dir) {
  const studentsCopy = [...students];

  return studentsCopy.sort(function (studentA, studentB) {
    if (
      !dir == false
        ? studentA[prop] < studentB[prop]
        : studentA[prop] > studentB[prop]
    )
      return -1;
  });
}

//Отрисовать
function render() {

  let studentsCopy = [...students];
  $studentsList.innerHTML = "";

  studentsCopy = getSortWorkers(students, column, columnDir);
  if($fioFilterInp.value.trim() !== '')  {
    studentsCopy = studentsCopy.filter(function(student)  {
      if(student.fio.includes($fioFilterInp.value.trim())) return true
    })
  }

  if($facultyFilterInp.value.trim() !== '')  {
    studentsCopy = studentsCopy.filter(function(student)  {
      if(student.post.includes($facultyFilterInp.value.trim())) return true
    })
  }

  if($birthDateFilterInp.value.trim() !== '')  {
    studentsCopy = studentsCopy.filter(function(student)  {
      if(String(student.birthDate).includes($birthDateFilterInp.value.trim())) return true
    })
  }

  if($workStartFilterInp.value.trim() !== '')  {
    studentsCopy = studentsCopy.filter(function(student)  {
      if(String(student.workStart).includes($workStartFilterInp.value.trim())) return true
    })
  }

  for (const student of studentsCopy) {
    $studentsList.append(newWorkerTR(student));
  }
}
// События сортировки
$studentsListTHALL.forEach((element) => {
  element.addEventListener("click", function () {
    column = this.dataset.column;
    columnDir = !columnDir;
    render();
  });
});


//фильтрация
document.getElementById('filter-form').addEventListener('submit', function (event) {
  event.preventDefault();

})

$fioFilterInp.addEventListener('input', function()  {
  render(students)
})
$facultyFilterInp.addEventListener('input', function()  {
  render(students)
})
$birthDateFilterInp.addEventListener('input', function()  {
  render(students)
})
$workStartFilterInp.addEventListener('input', function()  {
  render(students)
})


//Добавление
document
  .getElementById("point-add-student") // Возвращает ссылку на элемент по его идентификатору
  .addEventListener("submit", function (event) {
    event.preventDefault();

    if(document.getElementById('input-lastName').value == "")  {
      return
    }
    if(document.getElementById('input-name').value == "")  {
      return
    }
    if(document.getElementById('input-patronymic').value == "")  {
      return
    }
    if(Number(document.getElementById('input-workStart').value) == "")  {
      return
    }
    if(new Date(document.getElementById('input-birthDate').value) == "")  {
      return
    }
    if(document.getElementById('input-post').value == "")  {
      return
    }

    students.push(
      new theStudent(
        document.getElementById('input-lastName').value,
        document.getElementById('input-name').value,
        document.getElementById('input-patronymic').value,
        Number(document.getElementById('input-workStart').value),
        new Date(document.getElementById('input-birthDate').value),
        document.getElementById('input-post').value
      )
    );

    render();
  });

render();
