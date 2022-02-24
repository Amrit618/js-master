var fs = require("fs");

var spawn = require("child_process").spawn;

var wstream = fs.createWriteStream("dumpfilename.sql");

var mysqldump = spawn("mysqldump", ["-u", "root", "-p", "test"]);

mysqldump.stdout

  .pipe(wstream)

  .on("finish", function () {

    console.log("Completed");

  })

  .on("error", function (err) {

    console.log(err);

  });
