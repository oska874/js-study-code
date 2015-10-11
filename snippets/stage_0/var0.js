function fff()
{
    var name = '11';
    var name1 = '11';
    name='22';
    name1='22';
    console.log(name);
    console.log(global.name);
    console.log(name1);
    console.log(global.name1);
    global.name='33';
    global.name1='33';
    console.log(name);
    console.log(global.name);
    console.log(name1);
    console.log(global.name1);
}

name = '00';
var name1 = '00'
    console.log(name);
    console.log(global.name);
    console.log(name1);
    console.log(global.name1);
fff();
    console.log(name);
    console.log(global.name);
    console.log(name1);
    console.log(global.name1);
