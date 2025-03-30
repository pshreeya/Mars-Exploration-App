/*
  Name: Mars Exploration App
  Purpose: To see the latest photos from Spirit, Curiority, and Opportunity Mars Rovers. 
  Author:  Shreeya Prasanna
  Created: 15-Dec-2020
  Updated: 30-March-2025
  Visit 'https://api.nasa.gov/' to generate API Key
*/

var data;
//Navigate to Spirit Rover's photo screen
onEvent("Spirit", "click", function( ) {
  setScreen("SpiritPhotos");
});
// Navigate back to Home screen from Spirit photos
onEvent("buttonhome2", "click", function( ) {
  setScreen("Home");
});

// API request for Spirit Rover images
var url = "https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/latest_photos?api_key=DEMOKEY"; //update the query using your API Key
var currentImage= 0;
function processspiritData(status,type,content) {
  data= JSON.parse(content); 
  updatespiritImage(); //update UI with the first image
}

// Updates the displayed image information 
function updatespiritImage () {
  setText ("infomars1","Camera Name:"+ data.latest_photos[currentImage].camera.full_name + "\nDate Taken:" + data.latest_photos [currentImage].earth_date);
  setImageURL("imagemars1",data.latest_photos[currentImage].img_src);
  setText ("numimages1", "Image " + (currentImage+1) + " of " + data.latest_photos.length);
}

startWebRequest(url,processspiritData); 

//navigates to show the next Spirit Rover image
onEvent("next1","click", function () {
  if (currentImage==data.latest_photos.length - 1) {
  currentImage=0; 
  }
  else {
    currentImage++;
  }
  updatespiritImage();
});

//navigates to show the previous Spirit Rover image
onEvent("back1","click", function () {
  if (currentImage==0) {
  currentImage=data.latest_photos.length - 1;
  }
  else {
    currentImage--;
  }
  updatespiritImage();
});

//the below code follows the same structure to show images from both Curiosity and Opportunity rovers

onEvent("Curiosity", "click", function( ) {
  setScreen("Curiosityphotos");
});
onEvent("buttonhome1", "click", function( ) {
  setScreen("Home");
});
var url1 = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=DEMOKEY";
var data1;
var currentImage1= 0;
function processcuriosityData(status,type,content) {
  data1= JSON.parse(content);
  updatecuriosityImage();
}
function updatecuriosityImage () {
  setText ("infomars","Camera Name:"+ data1.latest_photos[currentImage1].camera.full_name + "\nDate Taken:" + data1.latest_photos [currentImage1].earth_date);
  setImageURL("imagemars",data1.latest_photos[currentImage1].img_src);
  setText ("numimages", "Image " + (currentImage1+1) + " of " + data1.latest_photos.length);
}

startWebRequest(url1,processcuriosityData); 

onEvent("next","click", function () {
  if (currentImage1==data1.latest_photos.length - 1) {
  currentImage1=0;
  }
  else {
    currentImage1++;
  }
  updatecuriosityImage();
});
 
onEvent("back","click", function () {
  if (currentImage1==0) {
  currentImage1=data1.latest_photos.length - 1;
  }
  else {
    currentImage1--;
  }
  updatecuriosityImage();
});


onEvent("Opportunity", "click", function( ) {
  setScreen("Oppurtunityphotos");
});
onEvent("buttonhome3", "click", function( ) {
  setScreen("Home");
});

var url2 = "https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/latest_photos?api_key=DEMOKEY";
var data2;
var currentImage2= 0;
function processopportunityData(status,type,content) {
  data2= JSON.parse(content);
  updateopportunityImage();
}
function updateopportunityImage () {
  setText ("infomars3","Camera Name:"+ data2.latest_photos[currentImage2].camera.full_name + "\nDate Taken:" + data2.latest_photos [currentImage2].earth_date);
  setImageURL("imagemars3",data2.latest_photos[currentImage2].img_src);
  setText ("numimages3", "Image " + (currentImage2+1) + " of " + data2.latest_photos.length);
}

startWebRequest(url2,processopportunityData); 

onEvent("next3","click", function () {
  if (currentImage2==data2.latest_photos.length - 1) {
  currentImage2=0;
  }
  else {
    currentImage2++;
  }
  updateopportunityImage();
});
 
onEvent("back3","click", function () {
  if (currentImage2==0) {
  currentImage2=data2.latest_photos.length - 1;
  }
  else {
    currentImage2--;
  }
  updateopportunityImage();
});


