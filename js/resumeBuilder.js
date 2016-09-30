/*
Code to build the resume will go here.
*/
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
  "jobs" = [
    {
      "employer" : "Williams Lake Fire Department",
      "jobTitle" : "Firefighter",
      "date" : {
        "start" : "2011",
        "end" : "current"
      },
      "location" : "Williams Lake"
    },
    {// ToDo: finish adding work experience
      "employer" : "b",
      "jobTitle" : "a",
      "date" : {
        "start" : "",
        "end" : ""
      },
      "location" : "d"
    }
  ]

};
//
// Education object
//
var education = {
  "schools" : [
    {
      "name" : "Devry Institute of Technology",
      "degree" : "B.Sc.",
      "major" : "Computer Engineering Technology",
      "yearsAttended" : {
        "start" : "2003",
        "end" : "2006"
      },
      "city" : "Calgary"
    },
    {
      "name" : "University of Norther British Columbia",
      "degree" : "",
      "major" : "Computer Science",
      "yearsAttended" : {
        "start" : "1997",
        "end" : "1999"
      },
      "city" : "Prince George"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "How to Use Git and GitHub",
      "school" : "Udacity",
      "dates" : 2016,
      "url" : "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
    },
    {
      "title" : "Responsive Web Design Fundamentals",
      "school" : "Udacity",
      "dates" : 2016,
      "url" : "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
    },
    {
      "title" : "JavaScript Basics",
      "school" : "Udacity",
      "dates" : 2016,
      "url" : "https://www.udacity.com/course/javascript-basics--ud804"
    },
    {
      "title" : "Intro to HTML and CSS",
      "school" : "Udacity",
      "dates" : 2016,
      "url" : "https://www.udacity.com/course/intro-to-html-and-css--ud304"
    },
    {
      "title" : "Responsive Images",
      "school" : "Udacity",
      "dates" : 2016,
      "url" : "https://www.udacity.com/course/responsive-images--ud882"
    }
  ]
};
//
// Projects object
//
var projects = {
  "projects" : [
    {
      "title" : "a",
      "dates" : {
        "start" : "b",
        "end" : "c"
      },
      "description" : "d",
      "images" : [{
        "url" : ""
      }]
    }
  ]
}
//
// Format information
//
// format bio
var formattedName = HTMLheaderName.replace("%data%",bio.bioname);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.message);
var formattedPic = HTMLbioPic.replace("%data%",bio.picture);
// format education

// format job

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

//
// Add maps
//
