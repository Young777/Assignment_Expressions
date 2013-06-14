//Shaylen Young - 06/13 - Personal Assignment
//How Much Money Will I Have Left After Bills
var percheck = 820;
var checkspermnth = 4;
var bills = [80, 120, 450, 30, 206]

//Time to add everything together

var checktotal = percheck * 4
var billstotal = bills[0] + bills [1] + bills[2] + bills [3] + bills [4]
// It's tally time

var answer = checktotal - billstotal;

console.log(answer);