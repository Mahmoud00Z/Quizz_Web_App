document.addEventListener("DOMContentLoaded", function () {
  const quiz_data = {
    mysql: [
      {
        question: "What does SQL stand for?",
        options: ["Structured Query Language", "Strong Question Logic", "Simple Query Language"],
        answer: "Structured Query Language"
      },
      {
        question: "Which command is used to retrieve data?",
        options: ["GET", "SELECT", "FETCH"],
        answer: "SELECT"
      },
      {
        question: "Which MySQL function is used to count rows?",
        options: ["SUM()", "COUNT()", "TOTAL()"],
        answer: "COUNT()"
      }
    ],
    python: [
      {
        question: "What is the correct file extension for Python files?",
        options: [".pt", ".py", ".pyt"],
        answer: ".py"
      },
      {
        question: "How do you start a comment in Python?",
        options: ["//", "#", "/*"],
        answer: "#"
      },
      {
        question: "Which keyword is used to define a function?",
        options: ["def", "func", "function"],
        answer: "def"
      }
    ],
    javascript: [
      {
        question: "Which keyword is used to declare a variable?",
        options: ["var", "let", "Both"],
        answer: "Both"
      },
      {
        question: "How do you write a comment in JavaScript?",
        options: ["<!-- -->", "//", "##"],
        answer: "//"
      },
      {
        question: "What is used to parse JSON in JS?",
        options: ["JSON.parse()", "parse.JSON()", "JSON.convert()"],
        answer: "JSON.parse()"
      }
    ],
    html: [
      {
        question: "What does HTML stand for?",
        options: ["HyperText Markup Language", "HighText Machine Language", "HyperTool Multi Language"],
        answer: "HyperText Markup Language"
      },
      {
        question: "Which tag is used to define a paragraph?",
        options: ["<p>", "<para>", "<text>"],
        answer: "<p>"
      },
      {
        question: "Which tag is used to insert an image?",
        options: ["<img>", "<image>", "<pic>"],
        answer: "<img>"
      }
    ],
    css: [
      {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Creative Style System", "Computer Style Sheet"],
        answer: "Cascading Style Sheets"
      },
      {
        question: "Which property changes text color?",
        options: ["font-color", "text-color", "color"],
        answer: "color"
      },
      {
        question: "Which symbol is used for classes in CSS?",
        options: ["#", ".", "&"],
        answer: "."
      }
    ]
  };

  if (!localStorage.getItem("quizzes")) {
    localStorage.setItem("quizzes", JSON.stringify(quiz_data));
  }
  const quiz_cards = document.querySelectorAll(".quiz_card");
  quiz_cards.forEach(function (card) {
    const quiz_name = card.getAttribute("data-quiz");
    card.addEventListener("click", function () {
      window.location.href = "quiz.html?quiz=" + encodeURIComponent(quiz_name);
    });
  });
});