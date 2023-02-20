// Question 3
let scienceSubjects = [
  " Physics",
  " Chemistry",
  " Biology",
  " Tecnical Drawing",
];
let socialScienceSubjects = [
  " Accounting",
  " Commerce",
  " Marketing",
  " Geography",
];
let artSubjects = [" Government", " Economics", " LIterature", " History"];
let generalSubjects = [" English", " Mathematics"];

let department = "Arts";

if (department === "socialScience") {
  console.log(
    "These are your subjects for the semester as a social science student:" +
      socialScienceSubjects +
      "," +
      generalSubjects
  );
} else if (department === "Science") {
  console.log(
    "These are your subjects for the semester as a science student:" +
      scienceSubjects +
      "," +
      generalSubjects
  );
} else if (department === "Arts") {
  console.log(
    "These are your subjects for the semester as an art student:" +
      artSubjects +
      "," +
      generalSubjects
  );
} else {
  console.log("These are the general subjects:" + generalSubjects);
}

//Question 5
let num = 70;
let pwr = 1;
while (pwr * 2 <= num) {
  pwr *= 2;
}
console.log("The number " + pwr + " is the power of 2 nearest to " + num);
