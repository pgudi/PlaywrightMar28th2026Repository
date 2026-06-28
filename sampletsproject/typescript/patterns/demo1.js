/*
    * * * * * * *
    * * * * * * *
    * * * * * * *
    
    number of rows =3
    number of columns =7
*/
var patterns = "";
for (var i = 1; i <= 3; i++) {
    for (var j = 1; j <= 7; j++) {
        patterns = patterns + "* ";
    }
    patterns = patterns + "\n";
}
console.log(patterns);
