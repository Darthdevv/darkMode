

    const content = document.getElementsByTagName("body")[0];
const darkMode = document.getElementById("dark");

    console.log(darkMode)
    darkMode.addEventListener("click", function () {
    darkMode.classList.toggle("active");
    content.classList.toggle("night");
    });



