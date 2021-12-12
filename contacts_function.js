// Contacts Function

function validatePhone(sdt) {
  var patternPhone = /^0[1-9][0-9]{8}$/;
  return patternPhone.test(sdt);
}

function validateMail(mail) {
  var patternMail = /^\w+([.]\w)*@\w+([.]\w)*([.][a-z]{2,3})$/;
  return patternMail.test(mail);
}

function checkName(name) {
  if (name == "") {
    document.getElementById('inputName').classList.add('was-validated');
    document.getElementById('invalid-name').style.display = 'block';
    document.getElementById('invalid-name').innerText = 'Vui lòng nhập tên!';
    return false;
  } else {
    document.getElementById('inputName').classList.remove('was-validated');
    document.getElementById('invalid-name').style.display = 'none';
    return true;
  }
}

function checkMail(mail) {
  if (mail != "") {
    if (!validateMail(mail)) {
      document.getElementById('inputMail').classList.add('was-validated');
      document.getElementById('invalid-mail').style.display = 'block';
      document.getElementById('invalid-mail').innerText = 'Email không hợp lệ!';
      return false;
    } else {
      document.getElementById('inputMail').classList.remove('was-validated');
      document.getElementById('invalid-mail').style.display = 'none';
      return true;
    }
  } else {
    document.getElementById('inputMail').classList.add('was-validated');
    document.getElementById('invalid-mail').style.display = 'block';
    document.getElementById('invalid-mail').innerText = 'Vui lòng nhập Email!';
    return false;
  }
}

function checkPhone(phone) {
  if (phone != "") {
    if (!validatePhone(phone)) {
      document.getElementById('inputPhone').classList.add('was-validated');
      document.getElementById('invalid-phone').style.display = 'block';
      document.getElementById('invalid-phone').innerText = 'Số ĐT không hợp lệ! (Format: gồm 10 số)';
      return false;
    } else {
      document.getElementById('inputPhone').classList.remove('was-validated');
      document.getElementById('invalid-phone').style.display = 'none';
      return true;
    }
  } else {
    document.getElementById('inputPhone').classList.add('was-validated');
    document.getElementById('invalid-phone').style.display = 'block';
    document.getElementById('invalid-phone').innerText = 'Vui lòng nhập số điện thoại!';
    return false;
  }
}

function countDown() {
  document.getElementById('alert-message').style.display = 'none';
  document.getElementById('inputName').value = '';
  document.getElementById('inputPhone').value = '';
  document.getElementById('inputMail').value = '';
}

function sendRequest() {
  var name = document.getElementById('inputName').value;
  var phone = document.getElementById('inputPhone').value;
  var mail = document.getElementById('inputMail').value;
  var validForm = false;

  validForm = checkName(name);
  validForm = checkMail(mail);
  validForm = checkPhone(phone);

  if (validForm) {
    document.getElementById('alert-message').style.display = 'block';
    setTimeout(countDown, 3000);
  }
}

function resetForm() {
  document.getElementById('inputName').classList.remove('was-validated');
  document.getElementById('invalid-name').style.display = 'none';
  document.getElementById('inputMail').classList.remove('was-validated');
  document.getElementById('invalid-mail').style.display = 'none';
  document.getElementById('inputPhone').classList.remove('was-validated');
  document.getElementById('invalid-phone').style.display = 'none';
}