function doPost(e) {
  var sheet = SpreadsheetApp.openById('YOUR_SHEET_ID').getSheetByName('Sheet1');
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([data.name, data.email, data.message]);
  
  return ContentService.createTextOutput('Success');
}

function doGet(e) {
  return ContentService.createTextOutput('GET request received.');
}
