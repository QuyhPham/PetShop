window.addEventListener('DOMContentLoaded', function() {
  var leftElement = document.getElementById('left');
  var rightElement = document.getElementById('right');
  var logoImage = document.querySelector('#logo img');

  function updateLayout() {
    if (window.innerWidth <= 1130) {
      leftElement.id = 'top';
      rightElement.id = 'bottom';
      logoImage.style.maxWidth = '50%';
      logoImage.style.height = 'auto';
    } else {
      leftElement.id = 'left';
      rightElement.id = 'right';
      logoImage.style.maxWidth = '100%';
      logoImage.style.height = 'auto';
    }
  }

  window.addEventListener('resize', updateLayout);
  updateLayout();
});

document.getElementById("form-signup").addEventListener("submit", function(event) {
  var usernameInput = document.getElementById("username");
  var emailInput = document.getElementById("email");
  var passwordInput = document.getElementById("password");

  if (usernameInput.value.trim() === "" || emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
      event.preventDefault(); // Ngăn chặn gửi biểu mẫu

      alert("Vui lòng điền đầy đủ thông tin vào form đăng ký!");
  } else if (!isValidEmail(emailInput.value.trim())) {
      event.preventDefault(); // Ngăn chặn gửi biểu mẫu

      alert("Vui lòng nhập đúng định dạng email!");
  }
});

function isValidEmail(email) {
  var emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}

