import data from "./data.json";

let dailyBtn = document.querySelector(".person-info-container__daily"),
  weeklyBtn  = document.querySelector(".person-info-container__weekly"),
  monthlyBtn = document.querySelector(".person-info-container__monthly"),
  // Todos los h2 con las horas y todos los p con las horas totales.
  titles     = document.querySelectorAll(".information-container__activity"),
  hours      = document.querySelectorAll(".information-container__hours"),
  totalHours = document.querySelectorAll(".information-container__total-time");

const changeTitles = () => {
  titles.forEach((title, i) => {
    title.textContent = data[i].title;
  });
};
changeTitles();

const changeDailyHours = () => {
  dailyBtn.classList.add("active");
  weeklyBtn.classList.remove("active");
  monthlyBtn.classList.remove("active");
  hours.forEach((hour, i) => {
    hour.textContent = `${data[i].timeframes.daily.current}hrs`;
  });
  totalHours.forEach((total, i) => {
    total.textContent = `Previous - ${data[i].timeframes.daily.previous}hrs`;
  });
};

const changeWeeklyHours = () => {
  weeklyBtn.classList.add("active");
  dailyBtn.classList.remove("active");
  monthlyBtn.classList.remove("active");

  hours.forEach((hour, i) => {
    hour.textContent = `${data[i].timeframes.weekly.current}hrs`;
  });
  totalHours.forEach((total, i) => {
    total.textContent = `Previous - ${data[i].timeframes.weekly.previous}hrs`;
  });
};

const changeMonthlyHours = () => {
  monthlyBtn.classList.add("active");
  dailyBtn.classList.remove("active");
  weeklyBtn.classList.remove("active");

  hours.forEach((hour, i) => {
    hour.textContent = `${data[i].timeframes.monthly.current}hrs`;
  });
  totalHours.forEach((total, i) => {
    total.textContent = `Previous - ${data[i].timeframes.monthly.previous}hrs`;
  });
};

changeWeeklyHours();

dailyBtn.addEventListener("click", changeDailyHours);
weeklyBtn.addEventListener("click", changeWeeklyHours);
monthlyBtn.addEventListener("click", changeMonthlyHours);

// data.forEach => por cada elemento que contiene el json haz algo (ej dibujar nuevos elementos += `<div> texto </div>`)
