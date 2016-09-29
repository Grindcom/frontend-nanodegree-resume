/*
This is empty on purpose! Your code to build the resume will go here.
 */
 // Access a tag id from JavaScript
 $("#main").append("Greg Ford, B.Sc.");
 // How to use variables and print to console
 var firstName = "Greg";
 var lastName = "Ford";
 console.log("My name is " + firstName);
 // Using replace
 var oldEmail = "ford@grindcom.ca";
 var newEmail = oldEmail.replace("grindcom","facet-it");
 console.log("My first email was "+oldEmail);
 console.log("But now I use "+newEmail+" for business");
 //
 // Set up Header
 //
 // Set up name and role variables
var name = firstName + " " + lastName + " B.sc.";
var formattedName = HTMLheaderName.replace("%data%",name);
var role = "Front-end Developer";
var formattedRole = HTMLheaderRole.replace("%data%",role);
// Add to header
//  Use prepend to put it at the start of the header area
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
