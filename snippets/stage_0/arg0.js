function showParams(title,name){
    var htm="param1:"+title+"---param2:"+name;
    for (var i=0;i<arguments.length;i++){
        console.log(arguments[i]);
        temp=arguments[i];
        htm+="---param"+(i+1)+":"+temp
    }
    return;
}

showParams("a","b","c");
