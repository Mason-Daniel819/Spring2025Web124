//Daniel Mason 03/30/2025
document.addEventListener("DOMContentLoaded", function () {
    // Get the forms and tables
    const userForm = document.getElementById("userForm");
    const friendForm = document.getElementById("friendForm");
    const userTable = document.getElementById("userTable");
    const friendTable = document.getElementById("friendTable");

    // Create an array to store friend's data objects
    let friendsData = [];

    // Handle user data form submission
    userForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const yourName = document.getElementById("yourName").value.trim();
        console.log(yourName);
        const yourSalary = document.getElementById("yourSalary").value.trim();
        console.log(yourSalary);
        const isVeteran = document.getElementById("isVeteran").checked ? "Veteran" : "Not a Veteran";
        console.log(isVeteran);

        if (!yourName || !yourSalary) {
            alert("Please fill out all fields for your information.");
            return;
        }

        // Create a new row for the user's data
        const userRow = document.createElement("tr");
        userRow.innerHTML = `
            <td>${yourName}</td>
            <td>${yourSalary}</td>
            <td>${isVeteran}</td>
        `;
        userTable.appendChild(userRow);

        // Clear user input fields
        document.getElementById("yourName").value = "";
        document.getElementById("yourSalary").value = "";
        document.getElementById("isVeteran").checked = false;
    });

    // Handle friend's data form submission
    friendForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const fullName = document.getElementById("friendName").value.trim();
        console.log(fullName)
        const friendSalary = document.getElementById("friendSalary").value.trim();
        console.log(friendSalary);

        if (!fullName || !friendSalary) {
            alert("Please fill out all fields for your friend's information.");
            return;
        }

        // Split the full name into first and last names
        const [firstName, lastName] = fullName.split(' ');

        // Create a literal object for the friend and store it in the array
        const friendObject = {
            firstName: firstName,
            lastName: lastName,
            salary: friendSalary
        };
        console.log(friendObject);

        // Add the friend's data object to the array
        friendsData.push(friendObject);

        // Create a new row for the friend's data
        const friendRow = document.createElement("tr");
        friendRow.innerHTML = `
            <td>${friendObject.firstName} ${friendObject.lastName}</td>
            <td>${friendObject.salary}</td>
        `;
        friendTable.appendChild(friendRow);

        // Clear friend's input fields
        document.getElementById("friendName").value = "";
        document.getElementById("friendSalary").value = "";
    });
});
