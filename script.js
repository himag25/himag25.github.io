document.addEventListener("DOMContentLoaded", function () {
    // Load header and footer
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        });

    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });

    // Feedback form submission
    let feedbackForm = document.getElementById("feedbackForm");
    if (feedbackForm) {
        feedbackForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let name = document.getElementById("name").value;
            let message = document.getElementById("message").value;

            if (name.trim() === "" || message.trim() === "") {
                alert("Please fill in all fields.");
                return;
            }

            let feedbackResponse = document.getElementById("feedbackResponse");
            feedbackResponse.innerHTML = `<p>Thank you, <strong>${name}</strong>! Your feedback has been received.</p>`;
            feedbackResponse.style.display = "block";

            feedbackForm.reset();
        });
    }
});
