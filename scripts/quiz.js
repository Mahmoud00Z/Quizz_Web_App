document.addEventListener("DOMContentLoaded", function () {
    const quiz_title = document.getElementById("quiz_title");
    const questions_container = document.getElementById("questions_container");
    const quiz_form = document.getElementById("quiz_form");
    const submit_btn = document.getElementById("submit_btn");
    const score_section = document.getElementById("score_section");
    const score_display = document.getElementById("score_display");

    const params = new URLSearchParams(window.location.search);
    const quiz_name = params.get("quiz");
    quiz_title.textContent = quiz_name.toUpperCase() + " Quiz";

    const quizzes = JSON.parse(localStorage.getItem("quizzes"));
    const current_quiz = quizzes[quiz_name];
  
    for (let i = 0; i < current_quiz.length; i++) {
      const q = current_quiz[i];
      const question_div = document.createElement("div");
      question_div.className = "question_block";
  
      const question_label = document.createElement("p");
      question_label.textContent = (i + 1) + ". " + q.question;
      question_div.appendChild(question_label);
  
      for (let j = 0; j < q.options.length; j++) {
        const option_label = document.createElement("label");
        option_label.className = "option_label";
  
        const option_input = document.createElement("input");
        option_input.type = "radio";
        option_input.name = "question_" + i;
        option_input.value = q.options[j];
  
        option_label.appendChild(option_input);
        option_label.appendChild(document.createTextNode(q.options[j]));
        question_div.appendChild(option_label);
      }
  
      questions_container.appendChild(question_div);
    }
quiz_form.addEventListener("submit", function (e) {
      e.preventDefault();
      let score = 0;
      for (let i = 0; i < current_quiz.length; i++) {
        const selected = document.querySelector("input[name='question_" + i + "']:checked");
        if (selected && selected.value === current_quiz[i].answer) {
          score++;
        }
      }
      score_display.textContent = score;
      score_section.classList.remove("hidden");

      const current_user = localStorage.getItem("current_user");
      const users = JSON.parse(localStorage.getItem("users"));
      if (current_user && users[current_user]) {
        users[current_user].scores.push({ quiz: quiz_name, score: score });
        localStorage.setItem("users", JSON.stringify(users));
      }

      const all_radios = document.querySelectorAll("input[type='radio']");
      for (let k = 0; k < all_radios.length; k++) {
        all_radios[k].disabled = true;
      }
      submit_btn.disabled = true;
    });
  });
  