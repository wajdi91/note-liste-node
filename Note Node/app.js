var package = require("./package.json");

// var package = require("./package.json");
const fs = require("fs");
// const listNotes = () => {
console.log("LIST NOTES");
let noteList = JSON.parse(fs.readFileSync("./package.json"));
console.log(`Printing ` + noteList.length + ` note(s)`);

for (let i = 0; i < noteList.length; i++) {
  console.log("--");
  console.log("Title:", noteList[i].title);
  console.log("Body:", noteList[i].body);
}

// module.export = listNotes;

// const _ = require("lodash");

// let index = _.findIndex(noteList, function(w) {
//   return w.title == title;
// });

// if (index == -1) {
//   console.log("note was not found");
// } else {
//   let listfiltred = noteList.filter(el => {
//     return el.title != title;
//   });
//   console.log("NOTE REMOVED");
//   let data = JSON.stringify(listfiltred);
//   fs.writeFileSync("./package.json", data);
// }
