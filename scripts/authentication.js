const login_tab = document.getElementById("login_tab");
const register_tab = document.getElementById("register_tab");
const login_form = document.getElementById("login_form");
const register_form = document.getElementById("register_form");

register_tab.addEventListener("click", function() {
    login_tab.classList.add("active");
    register_tab.classList.remove("active");
    login_form.classList.remove("active");
    register_form.classList.add("active");
});

login_tab.addEventListener("click", function() {
    register_tab.classList.add("active");
    login_tab.classList.remove("active");
    register_form.classList.remove("active");
    login_form.classList.add("active");
});

register_form.addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("register_username").value;
    const password = document.getElementById("register_password").value;

    let users = localStorage.getItem("users");
    users = users ? JSON.parse(users) : {};
    if (users[username]) {
        alert("Username already exists. Please choose a different one.");}
    else {
        users[username] = {
            password: password,
            scores: []
        };
        localStorage.setItem("users", JSON.stringify(users));
        alert("Registration successful!");
        register_form.reset();
        login_tab.click();
    }
});
        
login_form.addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("login_username").value;
    const password = document.getElementById("login_password").value;
    if (username === "admin@quiz" && password === "admin123") {
        localStorage.setItem("current_user", username);
        window.location.href = "dashboard.html";
        return;
    }
    let users = localStorage.getItem("users");
    users = users ? JSON.parse(users) : {};
    if (!users[username]) {
        alert("User does not exist. Please register first.");}
    else if (users[username].password !== password) {
        alert("Incorrect password. Please try again.");}
    else {
        localStorage.setItem("current_user", username);
        window.location.href = "home.html";
    }
});
