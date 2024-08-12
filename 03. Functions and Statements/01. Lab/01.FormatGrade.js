function formatGrade(grade) {

    function printGrade(gradeName, grade) {
        if (grade == 2) {
            console.log(`${gradeName} (${grade})`);
        } else {
            console.log(`${gradeName} (${grade.toFixed(2)})`);
        }
    }

    if (grade < 3) {
        printGrade('Fail', 2);
    } else if (grade >= 3 && grade < 3.5) {
        printGrade('Poor', grade);
    } else if (grade >= 3.5 && grade < 4.5) {
        printGrade('Good', grade);
    } else if (grade >= 4.5 && grade < 5.5) {
        printGrade('Very good', grade);
    } else {
        printGrade('Excellent', grade);
    }
}