/*
    Functions to show and hide the stories
*/
function showStory1()
{
    var story1 = document.getElementById("story1");
    var story2 = document.getElementById("story2");
    var story3 = document.getElementById("story3");
    var header = document.getElementById("header-story");

    header.innerText = document.getElementById("story1title").innerText;
    document.getElementById("story1title").innerText.fontcolor = "#f1f1f1"
    story2.style.visibility = 'hidden'
    story3.style.visibility = 'hidden'
    
    story1.style.visibility = 'visible'
}

function showStory2()
{
    var story1 = document.getElementById("story1");
    var story2 = document.getElementById("story2");
    var story3 = document.getElementById("story3");
    var header = document.getElementById("header-story");
    header.innerText = document.getElementById("story2title").innerText;

    story1.style.visibility = 'hidden'
    story3.style.visibility = 'hidden'

    story2.style.visibility = 'visible'
}

function showStory3()
{
    var story1 = document.getElementById("story1");
    var story2 = document.getElementById("story2");
    var story3 = document.getElementById("story3");
    var header = document.getElementById("header-story");
    header.innerText = document.getElementById("story3title").innerText;

    story2.style.visibility = 'hidden'
    story1.style.visibility = 'hidden'

    story3.style.visibility = 'visible'
}

function showMenu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

showStory1();

