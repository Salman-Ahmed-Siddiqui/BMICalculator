function Calculate(){
    let height = document.getElementById("h-input").value;
    let weight = document.getElementById("w-input").value;

    let result = parseFloat(weight) /(parseFloat(height)**2);

    if(!isNaN(result)){
        document.getElementById("bmi-output").innerHTML = result;
        if(result <= 18.5){
            document.getElementById("bmi-status").innerHTML = "Underweight";
        }
        else if(result < 25){
            document.getElementById("bmi-status").innerHTML = "Normal";
        }
        else if(result < 30){
            document.getElementById("bmi-status").innerHTML = "Overweight";
        }
        else if(result < 35){
            document.getElementById("bmi-status").innerHTML = "Obesity";
        }
        else{
            document.getElementById("bmi-status").innerHTML = "Extreemly Obesity";
        }
    }
} 