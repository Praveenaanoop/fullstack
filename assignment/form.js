function read()
{
    var getname=document.getElementById('name').value;
    var getmail=document.getElementById('mail').value;
    var getuser=document.getElementById('user').value;
    var getplace=document.getElementById('place').value;
    var getdob=document.getElementById('dob').value;
    var getpswd=document.getElementById('pswd').value;
    var getphone=document.getElementById('phone').value;
    console.log(getname);
    console.log(getmail);
    console.log(getuser);
    console.log(getplace);
    console.log(getdob);
    console.log(getpswd);
    console.log(getphone);
    document.getElementById('register').innerHTML=getname;
    document.getElementById('register').innerHTML=getmail;
    document.getElementById('register').innerHTML=getphone;
}