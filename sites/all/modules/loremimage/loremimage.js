

function sendToLoremImage() {
    var lorempixel = "http://lorempixel.com/";
    var xwidth = document.forms["loremimage-form"]["xwidth"].value;
    var yheight = document.forms["loremimage-form"]["yheight"].value;
    if (xwidth == null || xwidth == "") {
        alert("X dimensions must be entered");
        return false;
    }
    else if (isNaN(xwidth) == true) {
	    alert("X dimensions must a number");
	    return false;
    }
    else if (yheight == null || yheight == "") {
        alert("Y dimensions must be entered");
        return false;
    }
    else if (isNaN(yheight) == true) {
	    alert("Y dimensions must a number");
	    return false;
    }
    else {
	    console.log(lorempixel + xwidth + "/" + yheight );
	    return false;
    }
}