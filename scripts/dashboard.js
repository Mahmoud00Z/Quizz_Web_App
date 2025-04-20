document.addEventListener("DOMContentLoaded", function () {
    const user_list = document.getElementById("user_list");
    const logout_btn = document.getElementById("logout_btn");
    const users = JSON.parse(localStorage.getItem("users")) || {};
  
    const title = document.createElement("h2");
    title.textContent = "Registered Users and Scores";
    user_list.appendChild(title);
  
    const list = document.createElement("ul");
    list.className = "user_score_list";
  
    for (let username in users) {
      const user = users[username];
      const item = document.createElement("li");

      let score_text = "No scores yet";
      if (user.scores && user.scores.length > 0) {
        score_text = user.scores
          .map(function (entry) {
            return entry.quiz + ": " + entry.score + "/3";
          })
          .join(" | ");
      }
  
      item.textContent = username + " - " + score_text;
      list.appendChild(item);
    }
    user_list.appendChild(list);
  
    logout_btn.addEventListener("click", function () {
      localStorage.removeItem("current_user");
      window.location.href = "index.html";
    });
  });
  