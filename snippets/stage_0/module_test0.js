var module0 = new Object({
    　　　　_count : 0,
    　　　　m1 : function (){
        　　　　　　//...
    　　　　},
    　　　　m2 : function (){
        　　　　　　//...
    　　　　}
　　});
console.info(module0._count);



var module1 = (function(){
　　　　var _count = 0;
　　　　var m1 = function(){
　　　　　　//...
　　　　};
　　　　var m2 = function(){
　　　　　　//...
　　　　};
　　　　return {
　　　　　　m1 : m1,
　　　　　　m2 : m2
　　　　};
　　})();

console.info(module1._count);

var module2 = (function(){
    　　　　var _count = 0;
    　　　　var m1 = function(){
        　　　　　　//...
    　　　　};
    　　　　var m2 = function(){
        　　　　　　//...
    　　　　};
    　　　　return {
    　　　　　　m1 : m1,
    　　　　　　m2 : m2
    　　　　};
    　　})();

console.info(module2._count);
console.info(module2);

var module2 = (function (mod){
    　　　　mod.m3 = function () {
        　　　　　　//...
    　　　　};
    　　　　return mod;
    　　})(module2);
console.info(module2);
