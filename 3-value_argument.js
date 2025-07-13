const no_of_arguments = process.argv.slice(2);

if (no_of_arguments[0] === undefined) {
  console.log("No argument");
} else {
  console.log(no_of_arguments[0]);
}