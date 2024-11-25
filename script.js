// 1. Write code to allow visitors of the page to customize it to their liking. There is a
// form on the page that accepts a name (to be used in a greeting when the user visits
// the page) and a color picker to allow the user to choose their preferred background
// color/foreground color combination. Write the necessary code to capture these values
// when the form is submitted (prevent the default action on the form submission button to
// achieve this) and store these values in localStorage (so that it persists on the user’s
// computer and their preferences are saved indefinitely). Next, write a function to apply
// the preferences if they have been set and call it each time the page loads. You may
// also want to call this function again when the user saves their preferences to
// immediately apply them. Make sure you also notify the user somehow that the preferences
// were saved. 

// Add event listener to the preferences form for submission
document.getElementById('preferences-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Retrieve values from form inputs
    const userName = document.getElementById('name').value; // User's name
    const bgColor = document.getElementById('background-color').value; // Preferred background color
    const fgColor = document.getElementById('foreground-color').value; // Preferred text color

    // Save values to localStorage
    localStorage.setItem('userName', userName); // Save user's name
    localStorage.setItem('bgColor', bgColor); // Save background color
    localStorage.setItem('fgColor', fgColor); // Save text color

    // Notify user that preferences saved
    alert('Preferences Saved!');

    // Apply preferences after saving
    applyPreferences();
});

// Define function to apply saved preferences
function applyPreferences() {
    // Retrieve saved preferences from localStorage
    const savedName = localStorage.getItem('userName'); // User's name
    const savedBgColor = localStorage.getItem('bgColor'); // Background color
    const savedFgColor = localStorage.getItem('fgColor'); // Text color

    // Check if preferences exist, then apply them
    if (savedName) {
        document.getElementById('greeting').textContent = `Welcome, ${savedName}!`; // Set the greeting
    }
    if (savedBgColor && savedFgColor) {
        document.body.style.backgroundColor = savedBgColor; // Set background color
        document.body.style.color = savedFgColor; // Set text color
    }
}

// Call the applyPreferences function when the page loads
document.addEventListener('DOMContentLoaded', applyPreferences);
