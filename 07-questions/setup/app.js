//using selectors inside the element=====================
//target elements
const questions = document.querySelectorAll('.question');

//loop over them
questions.forEach(function (question) {
  //   console.log(question);
  //targeting within element not whole document
  const btn = question.querySelector('.question-btn');
  //   console.log(btn);
  btn.addEventListener('click', function () {
    //functinlaity to close other questions
    questions.forEach(function (item) {
      if (item != question) {
        item.classList.remove('show-text');
      }
    });
    question.classList.toggle('show-text');
  });
});

// // traversing the dom====================================
// //select target elements
// const btns = document.querySelectorAll('.question-btn');

// //loop over all btns and event listen, using event object, and traversing dom
// btns.forEach(function (btn) {
//   btn.addEventListener('click', function (e) {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle('show-text');
//   });
// });
