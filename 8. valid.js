function checkPassword(inpPassword) {
    let trimPassword = inpPassword.trim();
    let isValid = true;

    // debugger
    // console.log(trimPassword.indexOf('@') === -1)
    // console.log(trimPassword.indexOf('@') === 0)
    // console.log(trimPassword.indexOf('@') !== trimPassword.lastIndexOf('@'))
    // console.log(trimPassword.indexOf('@') === trimPassword.length - 1)

    // console.log(trimPassword.indexOf('@'))
    // console.log(trimPassword.length - 1)

    if (trimPassword === "" || trimPassword.length === 0) {
        isValid = false;
    } else if (trimPassword.length <= 7) {
        isValid = false;
        console.log("(trimPassword.length <= 7)")
    } else if (!/[A-Z]/.test(trimPassword)) {
        isValid = false;
        console.log("(trimPassword.match(/\b[A-Z]+\b/g))")
    } else if (!/[A-Z]/.test(trimPassword)) {
        isValid = false;
        console.log("!trimPassword.match(/\b[a-z]+\b/g")
    } else if (!/\d/.test(trimPassword)) {
        isValid = false;
        console.log("/\d/.test(trimPassword)")
    } else if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(trimPassword)) {
        isValid = false;
        console.log("[!@#$%^&*()_+\-=\[\]{};':\"\\|,.<>")
    }




    return isValid;

}