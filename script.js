

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const correctUsername = 'admin';
    const correctPassword = 'VGhpcyBpcyBwYXNzd29yZA';

    if (username === correctUsername && password === correctPassword) {
      alert('เข้าสู่ระบบสำเร็จ');
      window.location.href ="welcome.html";
    } else {
      alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
    }
  });

