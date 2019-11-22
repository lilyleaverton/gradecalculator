//fix positioning of error messages

function stringToArray(string) {
    var arr = string.split(",") ;
    for(var i=0; i<arr.length; i++) {
        arr[i] = parseInt(arr[i]) ;
    }
    return arr;
}

function average(arr) {
    var sum = 0;
    var count = 0;
    for(var i=0; i<arr.length; i++) {
        sum += arr[i];
        count += 1;
    }
    var ave = sum/count ;
    return ave;
}

function colorRow(row, grade) {
    if(grade>=90) {
        document.getElementById(row).style.backgroundColor = "green" ;
    }
    if(grade>=80 && grade<90) {
        document.getElementById(row).style.backgroundColor = "yellow" ;
    }
    if(grade>=70 && grade<80) {
        document.getElementById(row).style.backgroundColor = "orange" ;
    }
    if(grade<70) {
        document.getElementById(row).style.backgroundColor = "red" ;
    }
}

function currentGrade() {
    var hwGrades = stringToArray(document.getElementById("hwGrades").value);
    var hwWeight = parseInt(document.getElementById("hwWeight").value);
    var cwGrades = stringToArray(document.getElementById("cwGrades").value);
    var cwWeight = parseInt(document.getElementById("cwWeight").value);
    var testGrades = stringToArray(document.getElementById("testGrades").value);
    var testWeight = parseInt(document.getElementById("testWeight").value);
    var participationGrades = stringToArray(document.getElementById("participationGrades").value);
    var participationWeight = parseInt(document.getElementById("participationWeight").value);
    var projectGrades = stringToArray(document.getElementById("projectGrades").value);
    var projectWeight = parseInt(document.getElementById("projectWeight").value);
    var finalWeight = parseInt(document.getElementById("finalWeight").value);

    var weightSum = hwWeight + cwWeight + testWeight + participationWeight + projectWeight ;
    var weightSumWFinal  = hwWeight + cwWeight + testWeight + participationWeight + projectWeight + finalWeight ;

    var hwWeighted = average(hwGrades) * (hwWeight/100) ;
    var cwWeighted = average(cwGrades) * (cwWeight/100) ;
    var testWeighted = average(testGrades) * (testWeight/100) ;
    var participationWeighted = average(participationGrades) * (participationWeight/100) ;
    var projectWeighted = average(projectGrades) * (projectWeight/100) ;
    var weightedSum = hwWeighted + cwWeighted + testWeighted + participationWeighted + projectWeighted ;

    colorRow(1, average(hwGrades)) ;
    colorRow(2, average(cwGrades)) ;
    colorRow(3, average(testGrades)) ;
    colorRow(4, average(participationGrades)) ;
    colorRow(5, average(projectGrades)) ;

    var message = "" ;
    if( weightSumWFinal != 100 ) {
        message = "ERROR! The percentages you have entered do not add up to 100%. Please enter a valid weight (not including % sign).";
    } else {
        var currentGrade = (weightedSum/weightSum) *100 ;
        var rounded = Math.floor(currentGrade) ;
        if(isNaN(rounded) == true) {
            message = "ERROR! The the values you have entered is are not valid. Please enter valid numbers (without % sign).";
        } else {
            message = "Your current grade is " + rounded + "% ";
        }
    }

    document.getElementById("currentGrade").innerHTML = message ;
    var error = "" ;
    if(average(hwGrades)<0||hwWeight<0||average(cwGrades)<0||cwWeight<0||average(testGrades)<0||testWeight<0||average(participationGrades)<0||participationWeight<0||average(projectGrades)<0||projectWeight<0) {
        error = "WARNING! One or more of your values is less than 0. This may be an error." ;
    }
    if(average(hwGrades)>100||hwWeight>100||average(cwGrades)>100||cwWeight>100||average(testGrades)>100||testWeight>100||average(participationGrades)>100||participationWeight>100||average(projectGrades)>100||projectWeight>100) {
        error = "WARNING! One or more of your values is greater than 100. This may be an error." ;
    }
    document.getElementById("warning").innerHTML = error ;

}

function examGrade() {
    var hwGrades = stringToArray(document.getElementById("hwGrades").value);
    var hwWeight = parseInt(document.getElementById("hwWeight").value);
    var cwGrades = stringToArray(document.getElementById("cwGrades").value);
    var cwWeight = parseInt(document.getElementById("cwWeight").value);
    var testGrades = stringToArray(document.getElementById("testGrades").value);
    var testWeight = parseInt(document.getElementById("testWeight").value);
    var participationGrades = stringToArray(document.getElementById("participationGrades").value);
    var participationWeight = parseInt(document.getElementById("participationWeight").value);
    var projectGrades = stringToArray(document.getElementById("projectGrades").value);
    var projectWeight = parseInt(document.getElementById("projectWeight").value);
    var desiredGrade = parseInt(document.getElementById("desiredGrade").value);
    var finalWeight = parseInt(document.getElementById("finalWeight").value);

    var weightSumWFinal  = hwWeight + cwWeight + testWeight + participationWeight + projectWeight + finalWeight ;

    var hwWeighted = average(hwGrades) * (hwWeight/100) ;
    var cwWeighted = average(cwGrades) * (cwWeight/100) ;
    var testWeighted = average(testGrades) * (testWeight/100) ;
    var participationWeighted = average(participationGrades) * (participationWeight/100) ;
    var projectWeighted = average(projectGrades) * (projectWeight/100) ;
    var weightedSum = hwWeighted + cwWeighted + testWeighted + participationWeighted + projectWeighted ;


    var message = "" ;
    if(weightSumWFinal != 100) {
        message = "ERROR! The percentages you have entered do not add up to 100%. Please enter a valid weight.";
    } else {
        var one = desiredGrade - weightedSum ;
        var two = one / finalWeight ;
        var three = two *100 ;
        var exam = Math.ceil(three) ;
        if(isNaN(exam) == true) {
            message = "ERROR! The the values you have entered is are not valid. Please enter valid numbers (without % sign).";
        } else {
            message = "You need to get " + exam + "% on the final exam to finish with " + desiredGrade + "% in the class." ;
        }

    }

    document.getElementById("examGrade").innerHTML = message ;
}







