/*
This is empty on purpose! Your code to build the resume will go here.
 */
 // Access a tag id from JavaScript
 $("#main").append("Greg Ford, B.Sc.");
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
//
var formattedName = HTMLheaderName.replace("%data%",bio.bioname);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.message);
var formattedPic = HTMLbioPic.replace("%data%",bio.picture);
// Add to header
//  Use prepend to put it at the start of the header area
$("#header").prepend(formattedMessage);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedPic);
