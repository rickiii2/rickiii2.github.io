var myImage = document.querySelector('img');

myImage.onclick = function()
{
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Theodorick_Bland.jpg')
        {
            myImage.setAttribute ('src','images/firefox2.png');
        }
    else
        {
                    myImage.setAttribute ('scr','images/Theodorick_Bland.jpg');
                
        }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName()
{
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Modzilla is cool, ' + myName;
}
if(!localStorage.getItem(name))
    {
        setUserName()        
    }
    else
        {
            var storedName = localStorage.getItem('name');
            myHeading.textContent = 'Modzilla is cool, ' + storedName;
        }
myButton.onclick = function() 
{
    setUserName();
}