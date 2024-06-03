function doPost(e) {
  var sheet = SpreadsheetApp.openById('1210718963').getSheetByName('Enquiry Form');
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([data.name, data.email, data.message]);
  
  return ContentService.createTextOutput('Success');
}

function doGet(e) {
  return ContentService.createTextOutput('GET request received.');
}
