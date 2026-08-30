function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme",theme);
    // console.log(document.documentElement);
}

function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme");
    console.log(current);
    if(current === "dark"){
        applyTheme("light");
    } else {
        applyTheme("dark");
    }
}

const btn = document.getElementById("toggle");

btn.addEventListener("click" , toggleTheme);

