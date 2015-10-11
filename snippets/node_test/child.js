/* child.js */
console.log("123123");

process.on('SIGTERM', function () {
    console.log("killed");
    process.exit(0);
});

var t=Date.now();
while(1)
{
    console.log("222");

    while( Date.now() - t < 1000)
    {
    }
    t=Date.now();
}

