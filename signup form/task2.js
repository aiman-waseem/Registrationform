
let fullname = document.getElementById("ffullname");
    let email = document.getElementById("femail");
    let pass = document.getElementById("fpass");
    let cpass = document.getElementById("fcpass");
    let flag=1;

    function validateForm() {
        if (fullname.value.length<5){
            document.getElementById("nameerror").innerHTML= "Name is too short";
            flag=0;
          
        }elseif(fullname.value == ""){
            document.getElementById("nameerror").innerHTML="Username is Empty";
            flag=0;
        }
        if (pass.value==""){
            document.getElementById("passerror").innerHTML= "password is empty";
            flag=0;
       
        }
        if (email.value.length>15){
            document.getElementById("emailerror").innerHTML= "password length must be greator than 15";
            flag=0;
        }
        if (cpass.value != pass.value){
            document.getElementById("cpasserror").innerHTML= "password doesnot match";
            flag=0;
        }

        if (flag){
            return true;
        } else{
            return false;
        }
        
    
