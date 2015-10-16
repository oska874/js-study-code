var i,x;
var arr = new Array();
arr[0]=0;
arr[1]=1;
arr[2]=2;
arr[3]=3;

for (i=0;i<arr.length;i++)
	console.log(arr[i]);

console.log("------");

for(x in arr)
	console.log(x)

console.log("------");
i=0;
do
{
	console.log(arr[i])
	i++;
}
while(i<arr.length);
console.log(i);

console.log("------");
i=0;
while(i<arr.length)
{
	console.log(arr[i]);
	i++;
}