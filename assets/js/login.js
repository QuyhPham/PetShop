// $(document).ready(function(){
//     $('#eye').click(function(){
//         $(this).children('i').toggleClass('fa-eye-slash fa-eye');

//     })

// });

window.addEventListener('DOMContentLoaded', function () {
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


document.getElementById("form-login").addEventListener("submit", function (event) {
  var usernameInput = document.getElementById("username");
  var passwordInput = document.getElementById("password");

  if (usernameInput.value === "" || passwordInput.value === "") {
    event.preventDefault(); // Ngăn chặn gửi form

    alert("Vui lòng điền đầy đủ thông tin vào form đăng nhập!");
  }
});


