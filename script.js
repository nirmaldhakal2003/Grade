document.getElementById("mybutton").onclick = function() {
    let grade = document.getElementById("grade").value.toUpperCase(); // Convert input to uppercase to handle lowercase inputs
    switch (grade) {
        case "A":
            document.getElementById("output").innerHTML = "You have got Excellent Grade";
            break;
        case "B":
            document.getElementById("output").innerHTML = "You have got Good Grade";
            break;
        case "C":
            document.getElementById("output").innerHTML = "You have got Average Grade";
            break;
        case "D":
            document.getElementById("output").innerHTML = "You have Barely Passed";
            break;
        case "E":
            document.getElementById("output").innerHTML = "You failed!!!";
            break;
        default:
            // document.querySelector("h2").innerHTML = "Enter the letter A to E or a to e"; yo gare ni vayo natra
            document.getElementsByTagName("h2")[0].innerHTML = "Enter the letter A to E or a to e";
            // kura same ho ,getElementById garda chai hamro html file ma dherai h2 huna shakxan,,
            //  so kun chai h2 ma output dini ho specify garnu parni haixa 
            break;
    }
};
