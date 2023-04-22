var emailidorphno=localStorage.getItem("mailidorphno")
var pass=localStorage.getItem("pass")
var form=document.forms;
function  passvalid()
{
    
    var inputTags=document.querySelectorAll("input")
    var usergivenmailornum=inputTags[0].value
    var usergivenpassword=inputTags[1].value
    var borders=document.getElementsByClassName("inputdiv")
    if(emailidorphno!=usergivenmailornum && pass!=usergivenpassword)
    {

        document.body.style.backgroundImage="linear-gradient(75deg,red,red)";
        borders[0].style.borderColor="red"
        borders[1].style.borderColor="red"
        document.getElementById("status").innerHTML="Userid and password is wrong"
    }
    else if(emailidorphno==usergivenmailornum && pass!=usergivenpassword)
    {
        document.body.style.backgroundImage="linear-gradient(75deg,rgb(193,0,97),red)";
        borders[0].style.borderColor="royalblue"
        borders[1].style.borderColor="red"
        document.getElementById("status").innerHTML=" password is wrong"
    }
    else if(emailidorphno!=usergivenmailornum && pass==usergivenpassword)
    {
        document.body.style.backgroundImage="linear-gradient(75deg,red,purple)";
        borders[0].style.borderColor="red"
        borders[1].style.borderColor="royalblue"
        document.getElementById("status").innerHTML=" email or phone number is wrong"
    }
    else{
        form[0].action="./html/home.html"
        form[0].elements[2].type="submit"
    }
}
function passVis()
{
    form[0].elements[1].type="text"
    document.getElementById("passvis").style.transition="transform 0.3s"
    document.getElementById("passvis").src="./asset/images/visible.avif"
    document.getElementById("passvis").style.transform="rotateY(180deg)"
}
function passHid()
{
    form[0].elements[1].type="password"
    document.getElementById("passvis").style.transform="transform 0.3s"
    document.getElementById("passvis").style.transform="rotateY(0deg)"
    document.getElementById("passvis").src="./asset/images/eyesclose.png"
}
function bigButton()
{
    form[0].elements[2].style.transform="scale(1.2)"
    form[0].elements[2].style.backgroundColor="purple"
}
function smallButton()
{
    form[0].elements[2].style.transform="scale(1)"
    form[0].elements[2].style.backgroundColor="transparent"
}