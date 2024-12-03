const typed=new Typed('.multiple-text',{
    strings:['Siddhartha Reddy','Fullstack Developer','B.Tech Graduate'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:100,
    loop:true
});
function validateForm()
{
    var name=document.getElementById('Name').value;
    var namepattern=/^[a-zA-Z\s]+$/;
    if(!namepattern.test(Name))
        {
            alert("please enter a valid name");
            return false;
        }
    return true;
}