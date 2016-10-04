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
  "name" : myname,
  "role" : desiredRole,
  "contacts" : {
    "mobile" : "250-305-8802",
    "email" : oldEmail,
    "github" : "Grindcom",
    "linkedin" : "gtford",// replace twitter
    "location" : "Williams Lake, BC"
  },
  "welcomeMessage" : message,
  "skills" : skills,
  "biopic" : "./images/greg_casual-800x350_large_1x.jpg",
  display: function(){

  }
};
//
// Education object
//
var education = {
  "schools" : [
    {
      "name" : "Devry University, Calgary campus",
      "location" : "Calgary, AB",
      "degree" : "B.Sc.",
      "majors" : "Computer Engineering Technology",
      "dates" : "March, 2003 to February, 2006",
      "url" : "http://www.devry.edu/degree-programs/engineering-information-sciences/computer-engineering-technology.html"
    },
    {
      "name" : "University of Norther British Columbia",
      "location" : "Prince George, BC",
      "degree" : "NA",
      "majors" : "Computer Science",
      "dates" : "September, 1997 to January, 1999",
      "url": "http://www.unbc.ca"
    },
    {
      "name" : "Okanagan University Collage",
      "location" : "Kelowna, BC",
      "degree" : "NA",
      "majors" : "General Studies",
      "dates" : "June, 1996 to May, 1997",
      "url": "http://www.ouc.bc.ca"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "How to Use Git and GitHub",
      "school" : "Udacity",
      "dates" : "September, 2016",
      "url" : "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
    },
    {
      "title" : "Responsive Web Design Fundamentals",
      "school" : "Udacity",
      "dates" : "September, 2016",
      "url" : "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
    },
    {
      "title" : "JavaScript Basics",
      "school" : "Udacity",
      "dates" : "September, 2016",
      "url" : "https://www.udacity.com/course/javascript-basics--ud804"
    },
    {
      "title" : "Intro to HTML and CSS",
      "school" : "Udacity",
      "dates" : "September, 2016",
      "url" : "https://www.udacity.com/course/intro-to-html-and-css--ud304"
    },
    {
      "title" : "Responsive Images",
      "school" : "Udacity",
      "dates" : "September, 2016",
      "url" : "https://www.udacity.com/course/responsive-images--ud882"
    }
  ],
  "display": function(){

  }
};
//
// Work object
//
var work = {
  "jobs" : [
    {// work experience
      "employer" : "Williams Lake Fire Department",
      "title" : "Firefighter",
      "location" : "Williams Lake,BC",
      "dates" : "March, 2011 - in progress",
      "description" : "Professional Firefighter, NFPA 1001 certification."
    },
    {// work experience
      "employer" : "Grindcom (Self-Employed)",
      "title" : "CEO, System Architect",
      "location" : "Williams Lake,BC",
      "dates" : "March, 2006 - June, 2015",
      "description" : "Grindcom was focused on research and development of a measurement and control system for industrial forestry equipment.  Operationaly I was the system architect, software and hardware developer.  Managing this business included maintaining the R&D budget; utilizing Canadian federal programs such as SR&ED and IRAP."
    },
    {// work experience
      "employer" : "Tom Ford Logging Ltd.",
      "title" : "Supervisor, Industrial Computer Tech.",
      "location" : "Williams Lake,BC",
      "date" : "May, 1999 - February, 2003",
      "description" : "Supervise logging operations, administer and maintain measurement and control computers on board heavy equipment."
    },
    {// work experience
      "employer" : "Tom Ford Logging Ltd.",
      "title" : "Heavy Equipment Operator",
      "dates" : "June, 1985 - March, 1996",
      "location" : "Williams Lake",
      "description" : "Operating Skidders, Dozers and Log loaders."
    }
  ],
  "display": function(){
    var formattedEmployer = "";
    var formattedTitle = "";
    var formattedConcat = "";
    var formattedDates = "";
    var formattedDescrip = "";
    this.jobs.forEach(function(job){
      $("#workExperience").append(HTMLworkStart);
      formattedEmployer = HTMLworkEmployer.replace("%data%",job.employer);
      formattedTitle = HTMLworkTitle.replace("%data%",job.title.bold());
      formattedDates = HTMLworkDates.replace("%data%",job.dates);
      formattedDescrip = HTMLworkDescription.replace("%data%",job.description);
      formattedConcat = formattedEmployer + formattedTitle + formattedDates + formattedDescrip;
      $(".work-entry:last").append(formattedConcat);
    });
  }
};

//
// Projects object
//
var projects = {
  "projects" : [
    {
      "title" : "Portfolio",
      "dates" : "September, 2016 - September, 2016",
      "description" : "A projects portfolio, created for the Front End Developer nanodegree.",
      "images" : [{
        "url" : ""
      }]
    }
  ],
  "display":function(){
    // set up variables
    var frmTitle = "";
    var frmDate = "";
    var frmDescrip = "";
    var frmImage = "";
    var frmConcat = "";
    // iterate through all projects and place them in the projects div
    projects.projects.forEach(function(project){
      $("#projects").append(HTMLprojectStart);
      frmTitle = HTMLprojectTitle.replace("%data%",project.title);
      frmDate = HTMLprojectDates.replace("%data%",project.dates.start + " - " + project.dates.end);
      frmDescrip = HTMLprojectDescription.replace("%data%",project.description);
      frmImage = HTMLprojectImage.replace("%data%",project.images[0].url);
      frmConcat = frmTitle + frmDate + frmDescrip + frmImage;
      $(".project-entry:last").append(frmConcat);
    });
  }

};
//
// Format information
//
// format bio
var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
var formattedPic = HTMLbioPic.replace("%data%",bio.biopic);
// format education


// Add to header
//  Use prepend to put it at the start of the header area
$("#header").prepend(formattedMessage);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedPic);
//
// Add skills
//
// If there are skills listed add them
if(bio.skills.length > 0)
{
  // Add skills to html
  $("#header").append(HTMLskillsStart);
  //
  var formattedSkill = "";
  var i = 0;
  do{
    formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
    $("#skills:last").append(formattedSkill);
    i++;
  }while(i < bio.skills.length);

}
//
// Add work experience
//

if(work.jobs.length > 0){
  work.display();
}
//
// Add projects
//
projects.display();
//
// Add Education
//

//
// Add maps
//
$("#mapDiv").append(googleMap);
//
// Log mouse clicks
//
$(document).click(function(loc){
  logClicks(loc.pageX,loc.pageY);
});
//
// Add Internationalize button
//
$("#main").append(internationalizeButton);
function inName(intName){
  var tmpName = intName.split(" ");
  tmpName[0] = tmpName[0][0].toUpperCase() + tmpName[0].slice(1);
  intName = tmpName[0] + " " + tmpName[1].toUpperCase();
  return intName;
}

// function locationizer(arr){
//   arr.forEach(function(thing){
//
//   });
// }
