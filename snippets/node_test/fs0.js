var fs = require('fs');
 
function copy(src, dst) 
{
    fs.writeFileSync(dst, fs.readFileSync(src));
}
 
function main(argv) 
{
    copy(argv[0], argv[1]);
}

function copy1(src, dst) {
        fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}
 
function main1(argv) {
        copy(argv[0], argv[1]);
}
if (process.argv.length == 4) {
)
    main(process.argv.slice(2));
    main1(process.argv.slice(2));
    console.log("copy ok");
}
