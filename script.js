const btn = document.getElementById("btn");
const birthday = document.getElementById("birthday");
const result = document.getElementById("result");
result.style.display = 'none';


function calculateAge() {
    const birthdayValue = birthday.value;
    if (birthdayValue === "") {
        alert("Please enter your birthday");
    } else {
        const age = getAge(birthdayValue);

        if (age === null) {
            alert("The child is not born yet.");
            result.style.display = 'none';
        } else {
            result.innerText = `Your age is ${age.years} ${age.years > 1 ? "years" : "year"}, ${age.months} ${age.months > 1 ? "months" : "month"}, and ${age.days} ${age.days > 1 ? "days" : "day"} old.`;
            result.style.display = 'block';
        }
    }
}

function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);

    if (birthdayDate > currentDate) {
        return null;
    }

    let years = currentDate.getFullYear() - birthdayDate.getFullYear();
    let months = currentDate.getMonth() - birthdayDate.getMonth();
    let days = currentDate.getDate() - birthdayDate.getDate();

    if (days < 0) {
        months--;
        const lastDayOfPrevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        days += lastDayOfPrevMonth;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    return { years, months, days };
}

btn.addEventListener("click", calculateAge);
