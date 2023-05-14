function doGet(request) {
  return HtmlService.createTemplateFromFile('Index').evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  
}

function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function processForm(formObject){
  var url="https://docs.google.com/spreadsheets/d/1BT7veP33L3XMDkCCNhMxKCn1n_X3lyUkSoVnkqwdEB8/edit#gid=0";
  var ss= SpreadsheetApp.openByUrl(url);
  var ws=ss.getSheetByName("Submit Data");

  ws.appendRow([
    formObject.Category,
    formObject.o_o_name,
    formObject.title,
    formObject.url
  ]);
}