const { writeFile } = require("fs");
console.log('Start');

writeFile('./temporary/fileB.txt', 'This is line 1\n', (err, result) => {
  console.log('at point 1');
  if (err) {
    console.log('This error happened: ', err);
  } else {
    console.log('Line 1');
    writeFile('./temporary/fileB.txt', 'This is line 2\n', { flag: 'a' }, (err, result2) => {
      console.log('at point 2');
      if (err) {
        console.log('This error happened: ', err);
      } else {
        console.log('Line 2');
        writeFile('./temporary/fileB.txt', 'This is line 3\n', { flag: 'a' }, (err, result3) => {
          console.log('at point 3');
          if (err) {
            console.log('This error happened: ', err);
          } else {
            console.log('Line 3');
            console.log('End');
          }
        });
      }
    });
  }
});