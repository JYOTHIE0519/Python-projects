// STUDENT GRADE CALCULATION
document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let marks = document.querySelectorAll(".marks");
    let total = 0;
    for (let i = 0; i < marks.length; i++) {
        total = total + Number(marks[i].value);
    }
    let percentage = (total / 600) * 100;
    document.getElementById("total").innerHTML = total;
    document.getElementById("percentage").innerHTML = percentage.toFixed(2);
    alert("Result calculated successfully!");
});

// CONTACT FORM
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("contactName").value;
    document.getElementById("contactResult").innerHTML =
    "Thank you " + name + "! Your message has been submitted successfully.";
    document.getElementById("contactForm").reset();
});
