'use strict'

 function regist() {
    var username = document.querySelector('#id_username').value;


     if(email.length == 0 || pass.length == 0) {
        document.querySelector('#txtCorreo').style.backgroundColor = 'rgb(255, 182, 182)';
        document.querySelector('#txtPassword').style.backgroundColor = 'rgb(255, 182, 182)';
        document.querySelector('#alert').style.display = 'block';
        document.querySelector('#alert').innerHTML = 'Debes completar todos los campos'
        return false;
     };
 };


 window.addEventListener('load', () => {
   document.querySelector('#hint_id_username').style.display = 'none';
   document.querySelector('#hint_id_password1').style.display = 'none';
});