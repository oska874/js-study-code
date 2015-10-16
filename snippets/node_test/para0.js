function sayHi() {
  if (arguments[0] == "bye") {
    return;
  }

  var i;
  for(i=0;i<arguments.length;i++)
    console.log(arguments[i]);
}

sayHi(1);
sayHi(1,2);
sayHi(1,2,3);