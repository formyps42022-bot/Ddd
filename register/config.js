// config.js
//
// Заполните после настройки Google Таблицы (см. README.md, раздел
// "Регистрация через Google Таблицу"). Никакого GitHub-токена здесь больше
// не нужно — все данные регистрации теперь хранятся в Google Таблице.

window.APP_CONFIG = {
  // Ссылка на веб-приложение Google Apps Script, которую вы скопировали
  // после Deploy → New deployment → Web app.
  // Выглядит примерно так: https://script.google.com/macros/s/AKfycb.../exec
  GAS_WEB_APP_URL: "https://script.google.com/macros/s/AKfycbyjs1C-kQtFaD8LI3Jiu8kRcSY1oyEIUBsHrWd5XpllhjsDaWbyA0Lou3S_iBRIF2t7KQ/exec",

  // Путь к файлу с таблицей рейтинга (тот же, что использует index.html)
  DATA_PATH: "data.json",
};
