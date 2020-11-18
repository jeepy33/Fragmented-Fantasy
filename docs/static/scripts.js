/*
    Functions to show and hide the stories
*/

function showStory1()
{
    var story1 = document.getElementById("story1");
    var story2 = document.getElementById("story2");
    var story3 = document.getElementById("story3");

    story2.style.visibility = 'hidden'
    story3.style.visibility = 'hidden'
    
    story1.style.visibility = 'visible'
}

function showStory2()
{
    var story1 = document.getElementById("story1");
    var story2 = document.getElementById("story2");
    var story3 = document.getElementById("story3");

    story1.style.visibility = 'hidden'
    story3.style.visibility = 'hidden'

    story2.style.visibility = 'visible'
}

function showStory3()
{
    var story1 = document.getElementById("story1");
    var story2 = document.getElementById("story2");
    var story3 = document.getElementById("story3");
    
    story2.style.visibility = 'hidden'
    story1.style.visibility = 'hidden'

    story3.style.visibility = 'visible'
}