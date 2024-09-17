function deleteByEmail() {
    const inputText = document.querySelector("input");
    const emails = Array.from(document.querySelectorAll("td:nth-child(even)"));
    const result = document.querySelector("#result");

    result.textContent = '';

    for (const emailElement of emails) {
        if (emailElement.textContent === inputText.value) {
            emailElement.parentElement.remove(emailElement);
            result.textContent = "Deleted.";
        }
          
        if (result.textContent !== "Deleted.") {
            result.textContent = "Not found.";
        }
    }
}