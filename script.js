function calculateAge()
{
    const dob = new Date(document.getElementById("dob").value);
    const currentDate = new Date();

    const ageInMilliseconds = currentDate - dob;
    const ageInSeconds = ageInMilliseconds / 1000;
    const ageInMinutes = ageInSeconds / 60;
    const ageInHours = ageInMinutes / 60;
    const ageInDays = ageInHours / 24;

    let  years = Math.floor(ageInDays / 365.25);
    let months = Math.floor((ageInDays % 365.25) / 30);
    let days = Math.floor(ageInDays % 30);

    document.getElementById("years").textContent = `${years}`;
    document.getElementById("months").textContent = `${months}`;
    document.getElementById("days").textContent = `${days}`;
}