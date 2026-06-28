/*
  1
  1 2
  1 2 3
  1 2 3 4
  1 2 3 4 5

  number of rows =5
  number of columns 1 ( for row 1 -> col count=1, row 2 -> col count=2, row 3 -> col count=3, row 4 -> col count=4, row 5 -> col count=5)

*/
var str = "";
for (var i = 1; i <= 5; i++) {
    for (var j = 1; j <= i; j++) {
        str = str + j + " ";
    }
    str = str + "\n";
}
console.log(str);
