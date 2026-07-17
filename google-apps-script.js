// Этот код нужно вставить в редактор Apps Script (Расширения → Apps Script)
// внутри вашей Google Таблицы, полностью заменив код-заглушку.
//
// После вставки: Deploy → New deployment → Web app →
//   Execute as: Me
//   Who has access: Anyone
// Скопируйте появившуюся ссылку вида
// https://script.google.com/macros/s/ДЛИННЫЙ_КОД/exec — она нужна для
// register/config.js на сайте.

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    var lastName = (data.lastName || "").toString().trim();
    var firstName = (data.firstName || "").toString().trim();
    var serial = (data.serial || "").toString().trim();
    var timestamp = new Date();

    sheet.appendRow([lastName + " " + firstName, serial, timestamp]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
