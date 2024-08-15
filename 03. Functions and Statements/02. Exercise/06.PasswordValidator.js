function passwordValidator(password) {
    let isValid = true;

    // Length check
    if (password.length < 6 || password.length > 10) {
        console.log("Password must be between 6 and 10 characters");
        isValid = false;
    }

    // Character composition check
    if (!password.match(/^[a-zA-Z0-9]+$/)) {
        console.log("Password must consist only of letters and digits");
        isValid = false;
    }

    // Digits count check
    let digitCount = 0;
    for (let char of password) {
        if (/\d/.test(char)) {
            digitCount++;
        }
    }
    if (digitCount < 2) {
        console.log("Password must have at least 2 digits");
        isValid = false;
    }

    // Valid Output 
    if (isValid) {
        console.log("Password is valid");
    }
}