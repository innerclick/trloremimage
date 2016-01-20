

function sendToLoremImage() {
    var responses = "";
    var lorempixel = "http://lorempixel.com/";
    var xwidth = document.forms["loremimage-form"]["xwidth"].value;
    var yheight = document.forms["loremimage-form"]["yheight"].value;
    var category = document.forms["loremimage-form"]["category"].value; 
    var incolor = document.forms["loremimage-form"]["color"].value; 
    var dummytext = document.forms["loremimage-form"]["dummytext"].value;
    var color = "";
    var categories = ["None", "Abstract", "City", "People", "Transport", "Animals", "Food", "Nature", "Business", "Cats", "Fashion", "Technics"];
    if (xwidth == null || xwidth == "") {
        var responses = responses + "X dimensions must be entered\n";
    }
    else if (isNaN(xwidth) == true) {
	    var responses = responses + "X dimensions must a number\n";
    }
    if (yheight == null || yheight == "") {
        var responses = responses + "Y dimensions must be entered\n";
    }
    else if (isNaN(yheight) == true) {
	    var responses = responses + "Y dimensions must a number\n";
    }
    if (category == "0") {
	    var responses = responses + "Please select a category\n";
    }
    else {
	    category = categories[category];
    }
    if ((incolor != '0') && (incolor != '1')){
        var responses = responses + "Please choose color or greyscale\n";
    }
    else if (incolor == '0') {
        color = "color";
    }
    else if (incolor == '1') {
        color = "greyscale";
    }
    if (dummytext == null || dummytext == "") {
        var responses = responses + "Dummy Text must be entered";
    }
    if (responses == null || responses == "") {
	    console.log(lorempixel + xwidth + "/" + yheight + "/" + category + "/" + dummytext + "/" + color);
	    return false;
    }
    else
    {
	    console.log(category);
	    alert(responses);
	    return false;
    }
}