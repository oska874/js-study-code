var patt1 = new RegExp("e");
var reg1 = patt1.test("123e");
console.log(reg1);
reg1 = patt1.exec("abcdefgh")
console.log(reg1);


patt1.compile('d');
reg1 = patt1.exec("abcdedcba");
console.log("reg2: ");
console.log(reg1);
