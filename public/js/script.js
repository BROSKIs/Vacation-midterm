document.getElementById("theForm").onsubmit = validate;

function validate(){
    clearErrors();
    isValid = true;

    let dest = document.getElementById("dest").value;
    if(dest=="none" || !dest){
        isValid = false;
        document.getElementById("dest-error").style.display = "inline-block";
    }

    let date = document.getElementById("date").value;
    if(!date){
        isValid = false;
        document.getElementById("date-error").style.display = "inline-block";
    }
    let num = document.getElementById("travlers-number").value;
    if(num <=0){
        isValid = false;
        document.getElementById("number-error").style.display = "inline-block";
    }
    return isValid;
}

function clearErrors(){
    let errors = document.getElementsByClassName("err");
    for(let i=0; i<errors.length; i++){
        errors[i].style.display = "none";
    }
}