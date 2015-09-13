/**
 * Created by roisinokeeffe on 23/07/2015.
 */

//function animatePen(){
//    console.log("Clicked");
//    document.getElementById("penSVG").className="penAnimate";
//}

//var svgContainer = document.getElementById("greenPen");
////var nS = "http://www.w3.org/2000/svg";
//var animation = new TimelineMax({repeat:0});
//
//var svgPaths = svgContainer.getElementsByTagName("path");
//
//for (var x = 0; x < svgPaths.length; x++){
//    //select a path
//    var path = svgPaths[x];
//    //get the pixel length of the SVG path
//    var pathDimensions = path.getTotalLength();
//    // apply styles to stroke-dasharray and stroke-dashoffset
//    path.style.strokeDasharray = pathDimensions+" "+pathDimensions;
//    path.style.strokeDashoffset = pathDimensions;
//
//}
//
//function drawPen(){
//    animation.add(TweenMax.to(path.style,1,{strokeDashoffset:0}));
//}

//================================================================================
    //CODE TO ANIMATE ABOUT ICON
//================================================================================

var aboutIcon = document.getElementById("aboutIcon");
var animationAbout = new TimelineMax({repeat:0});
animationAbout.pause();

var svgPathsAbout = aboutIcon.getElementsByTagName("path");

for (var x = 0; x < svgPathsAbout.length; x++) {
    //select a path
    var pathAbout = svgPathsAbout[x];
    //get the pixel length of the SVG path
    var pathDimensionsAbout = pathAbout.getTotalLength();
    // apply styles to stroke-dasharray and stroke-dashoffset
    pathAbout.style.strokeDasharray = pathDimensionsAbout + " " + pathDimensionsAbout;
    pathAbout.style.strokeDashoffset = pathDimensionsAbout;
    if(x>0){
        console.log("x is greater than 0");
        animationAbout.to(pathAbout.style, 2, {strokeDashoffset: 0}, "-=2");
    }else {
        console.log("x is not greater than 0");
        animationAbout.to(pathAbout.style, 2, {strokeDashoffset: 0});
    }
}

//================================================================================
//CODE TO ANIMATE PORTFOLIO ICON
//================================================================================

var portfolioIcon = document.getElementById("portfolioIcon");

var animationPortfolio = new TimelineMax({repeat:0});           //Declare a new timeline
animationPortfolio.pause();                                     //Pause it at the beginning

var pathsPortfolio = portfolioIcon.getElementsByTagName("path");    //Gets all of the paths that make up portfolioIcon and put them into an array

for(var i=0; i < pathsPortfolio.length; i++){                               //loop through all paths that make up portfolioIcon, and for each:
    var portfolioPath = pathsPortfolio[i];                                  //select the path
    var pathLength = portfolioPath.getTotalLength();                        //Find out how long it is
    portfolioPath.style.strokeDasharray = pathLength +" "+ pathLength;      //Apply this to the stroke dask size (Makes the dash the length of the whole path)
    portfolioPath.style.strokeDashoffset = pathLength;                      //and also the stroke dash offset. (Moves the dash to hide the path)
    if(i>0){
        console.log("i is greater than 0");
        animationPortfolio.to(portfolioPath.style, 2, {strokeDashoffset: 0}, "-=2");
    }else {
        console.log("i is not greater than 0");
        animationPortfolio.to(portfolioPath.style, 2, {strokeDashoffset: 0});
    }
}//end of for loop

//================================================================================
//CODE TO ANIMATE CONTACT ICON
//================================================================================


var contactIcon = document.getElementById("contactIcon");

var animationContact = new TimelineMax({repeat:0});           //Declare a new timeline
animationContact.pause();                                     //Pause it at the beginning

var pathsPlane = contactIcon.getElementsByTagName("path");    //Gets all of the paths that make up portfolioIcon and put them into an array

for(var i=0; i < pathsPlane.length; i++){                               //loop through all paths that make up portfolioIcon, and for each:
    var planePath = pathsPlane[i];                                  //select the path
    var pathLength = planePath.getTotalLength();                        //Find out how long it is
    planePath.style.strokeDasharray = pathLength +" "+ pathLength;      //Apply this to the stroke dask size (Makes the dash the length of the whole path)
    planePath.style.strokeDashoffset = pathLength;                      //and also the stroke dash offset. (Moves the dash to hide the path)
    if(i>0){
        console.log("i is greater than 0");
        animationContact.to(planePath.style, 2, {strokeDashoffset: 0}, "-=2");
    }else {
        console.log("i is not greater than 0");
        animationContact.to(planePath.style, 2, {strokeDashoffset: 0});
    }
}//end of for loop







function drawPortfolioIcon(){
    TweenLite.to(window, 2, {scrollTo:{y:1000}, ease:Power2.easeOut});
    animationPortfolio.play();
}

function drawContactIcon(){
    animationContact.play();
}

function drawAboutIcon(){
    animationAbout.play();
}



