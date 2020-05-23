
function changeLinkText(lnk) {
 
    if(lnk == "ce") {
        document.getElementById('divLeftDefault').style.display = "none";
        document.getElementById('divLeft_CELinks').style.display = "block";
        document.getElementById('divLeft_ALinks').style.display = "none";
        document.getElementById('divRight').style.display = "none";
        document.getElementById('ls_Heading').innerHTML = "Class Exercises";
        document.getElementById('rs_Heading').innerHTML = "This is where you can find my class exercises.";
    }
    
    else{
        document.getElementById('divLeftDefault').style.display = "block";
        document.getElementById('divLeft_CELinks').style.display = "none";
        document.getElementById('divLeft_ALinks').style.display = "none";
        document.getElementById('divRight').style.display = "none";
    }
    
    document.getElementById('divRight').innerHTML = 'Content for the "Link 1" link.';
    
    document.getElementById('divRight').style.color = 'red';
    }
    
    function changeDivRightText(txt) {
          
    document.getElementById('rs_Heading').innerHTML = txt;
    }