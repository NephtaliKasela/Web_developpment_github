function check(){
    //let radioButton = document.getElementById("male");
    let res = 0;
    if(document.getElementById("male").checked) 
    {
        res += 5;
    document.getElementById("answer").innerText = "Good job! Your mark is " + res + ".";
    }
    else{
        document.getElementById("answer").innerText = "Not correct";
    }
}
