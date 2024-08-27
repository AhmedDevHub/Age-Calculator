// Lottie animation loading
var animation = lottie.loadAnimation({
    container: document.getElementById('animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './js/AnimationCulc.json' // Actual path to your JSON file
});

function calculateAge() {
    const dobInput = document.getElementById('dob').value;
    const dob = new Date(dobInput);
    const today = new Date();

    if (dobInput === '') {
        document.getElementById('result').innerText = "Please select a date of birth.";
        return;
    }

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    // Adjust if the current date is before the birth date in the current year
    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); // days in previous month
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById('result').innerHTML = `Hey!! You are <span>${years}</span> years, <span>${months}</span> months, and <span>${days}</span> days old.`;
}

