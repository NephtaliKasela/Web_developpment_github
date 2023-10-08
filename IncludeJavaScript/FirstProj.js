
function check()
{
    var maxAge = 65;
    var minAge = 16;
    var age= 23;

    const Name = "Nephtali";
    const ExcellentAge = 25;
    const Birthday = "12.04.2000";

    if(age < minAge || age > maxAge)
    {
        document.getElementById("answer").innerText = "Impossible";
    }
    else if(age == ExcellentAge)
    {
        document.getElementById("answer").innerText = "Excellent";
    }
    else{
        document.getElementById("answer").innerText = "Possible";
    }
}

function Wloop()
{
    let result = "";
    let count = 0;
    while(count < 10)
    {
        result += count.toString();
        count += 1;
    }
    document.getElementById("answer02").innerText = result;
}

function DoWloop()
{
    let result = "";
    let count = 0;
    do{
        result += count.toString();
        count += 1;
    }
    while(count < 10)
    document.getElementById("answer03").innerText = result;
}

function Floop()
{
    let result = "";
    for(let i = 0; i < 10; i++)
    {
        result += count.toString();
    }
    document.getElementById("answer04").innerText = result;
}



