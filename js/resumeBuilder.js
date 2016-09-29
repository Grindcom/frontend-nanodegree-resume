/*
This is empty on purpose! Your code to build the resume will go here.
 */
 // Access a tag id from JavaScript
 // $("#main").append("Greg Ford, B.Sc.");
 // How to use variables and print to console
 var firstName = "Greg";
 var lastName = "Ford";
 // console.log("My name is " + firstName);
 // Using replace
 var oldEmail = "ford@grindcom.ca";
 var newEmail = oldEmail.replace("grindcom","facet-it");
 // console.log("My first email was "+oldEmail);
 // console.log("But now I use "+newEmail+" for business");

 //
 // Set up Header
 //
 // Set up name and role variables
var myname = firstName + " " + lastName + " B.sc.";
var desiredRole = "Front-end Developer";
var skills = ["programming","problem solving","C","C++","C#","Java"];
var message = "Thanks for checking out my Resume";


//
// Set up bio object
//
var bio = {
  "picture" : "./images/greg_casual-800x350_large_1x.jpg",
  "bioname" : myname,
  "role" : desiredRole,
  "age" : 48,
  "skills" : skills,
  "message" : message,
  "contact" : {
    "mobile" : "250-305-8802",
    "email" : oldEmail,
    "github" : "Grindcom",
    "linkedin" : "gtford",
    "location" : "British Columbia"
  }
};
//
// Work object
//
var work = {
  "currentJob" : "a",
  "employer" : "b",
  "yearsWorked" : {
    "start" : "",
    "end" : ""
  },
  "city" : "d"
};
work.currentJob = "Firefighter";
work.employer = "Williams Lake Fire Department";
work.yearsWorked.start = 2011;
work.yearsWorked.end = "current";
work.city = "Williams Lake";
//
// Education object
//
var education = {
  "school" : "",
  "degree" : "",
  "major" : "",
  "yearsAttended" : {
    "start" : "",
    "end" : ""
  },
  "city" : ""
};
education["school"] = "Devry Institute of Technology";
education["degree"] = "Bachelor of Science";
education["major"] = "Computer Engineering Technology";
education["yearsAttended"].start = 2003;
education["yearsAttended"].end = 2006;
education["city"] = "Calgary";
//
// Format information
//
// format bio
var formattedName = HTMLheaderName.replace("%data%",bio.bioname);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.message);
var formattedPic = HTMLbioPic.replace("%data%",bio.picture);
// format education
var formattedDegree = HTMLschoolDegree.replace("%data%",education.degree);
var formattedMajor = HTMLschoolMajor.replace("%data%",education.major);
var formattedschoolName = HTMLschoolName.replace("%data%",education.school);
var formattedschoolStart = HTMLschoolStart.replace("%data%",education.yearsAttended.start);
var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.city);
// format job
var formattedWorkStart = HTMLworkStart.replace("%data%",work);
var formattedEmployer = HTMLworkEmployer.replace("%data%",work.employer);
var formattedJobTitle = HTMLworkTitle.replace("%data%",work.currentJob);
var formattedWorkDate = HTMLworkDates.replace("%data%",work.yearsWorked.start + " to " + work.yearsWorked.end);
// Add to header
//  Use prepend to put it at the start of the header area
$("#header").prepend(formattedMessage);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedPic);
//
// Add work experience
//
$("#workExperience").append(formattedWorkStart);
$("#workExperience").append(formattedEmployer);
$("#workExperience").append(formattedJobTitle);
$("#workExperience").append(formattedWorkDate);
//
// Add projects
//

//
// Add Education
//
$("#education").append(formattedschoolStart);
$("#education").append(formattedschoolName);
$("#education").append(formattedDegree);
$("#education").append(formattedSchoolLocation);
$("#education").append(formattedMajor);
//
// Add maps
//
