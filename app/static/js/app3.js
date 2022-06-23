'use strict'
function enviar() {
    var username = document.querySelector('#id_nombreUsuario').value;
    var email = document.querySelector('#id_correoUsuario').value;
    var region = document.querySelector('#id_Region').value;
    var provincia = document.querySelector('#id_Provincia').value;
    var comuna = document.querySelector('#id_Comuna').value;
    var pass1 = document.querySelector('#id_passUsuario').value;
    var pass2 = document.querySelector('#id_confirmPass').value;

    // if(username.length == 0 && email.length == 0 && region == 'Seleccione region' && provincia == 'Seleccione provincia' && comuna == 'Seleccione comuna' && pass1.length == 0 && pass2.length == 0) {
            // document.querySelector('.emptyError').style.display = 'block';
            // document.querySelector('.emptyError').innerHTML = 'Debe rellenar todos los campos';
    //     document.querySelector('#InputUsername').style.backgroundColor = 'rgb(255, 182, 182)';
    //     document.querySelector('#InputRegEmail').style.backgroundColor = 'rgb(255, 182, 182)';
    //     document.querySelector('#regiones').style.backgroundColor = 'rgb(255, 182, 182)';
    //     document.querySelector('#provincia').style.backgroundColor = 'rgb(255, 182, 182)';
    //     document.querySelector('#comunas').style.backgroundColor = 'rgb(255, 182, 182)';
    //     document.querySelector('#InputRegPassword').style.backgroundColor = 'rgb(255, 182, 182)';
    //     document.querySelector('#InputRegPassword2').style.backgroundColor = 'rgb(255, 182, 182)';
    // };

    if(username.length == 0) {
        document.querySelector('#error').style.display = 'block';
        document.querySelector('#errorUsername').style.display = 'block';
        document.querySelector('#errorUsername').innerHTML = 'Debe ingresar nombre de usuario';
    }

    if (/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail|duocuc)\.(?:|com|es|cl)+$/.test(email)){
        return null;
    } else {
        document.querySelector('#error').style.display = 'block';
        document.querySelector('#errorEmail').style.display = 'block';
        document.querySelector('#errorEmail').innerHTML = 'Correo invalido';
    };

    if(region < 1 || region > 16){
        document.querySelector('#error').style.display = 'block';
        document.querySelector('#errorRegion').style.display = 'block';
        document.querySelector('#errorRegion').innerHTML = 'Debe seleccionar la region';
    }

    if(provincia < 1 || provincia > 16){
        document.querySelector('#error').style.display = 'block';
        document.querySelector('#errorProvincia').style.display = 'block';
        document.querySelector('#errorProvincia').innerHTML = 'Debe seleccionar la provincia';
    }

    if(pass1.length == 0 || pass2.length == 0) {
        document.querySelector('#error').style.display = 'block';
        document.querySelector('#errorPassword1').style.display = 'block';
        document.querySelector('#errorPassword1').innerHTML = 'Debe ingresar su contraseña';
    }

    if(pass1.length < 5 && pass2.length < 5) {
        document.querySelector('#error').style.display = 'block';
        document.querySelector('#errorPassword1').style.display = 'block';
        document.querySelector('#errorPassword1').innerHTML = 'Contraseña invalida';
    };
    
    if(pass1 != pass2 || pass2 != pass1) {
        document.querySelector('#error').style.display = 'block';
        document.querySelector('#errorPassword1').style.display = 'block';
        document.querySelector('#errorPassword1').innerHTML = 'Las contraseñas no coinciden';
    }; 
    
    if(pass1.length > 5 && pass2.length > 5) {
        if(pass1 == pass2 || pass2 == pass1) {
            document.querySelector('#error').style.display = 'block';
            document.querySelector('#errorPassword1').style.display = 'block';
            document.querySelector('#errorPassword1').innerHTML = 'Las contraseñas coinciden';
        }
    };
};

function limpiar() {
    document.querySelector('#id_nombreUsuario').value = '';
    document.querySelector('#id_correoUsuario').value = '';
    document.querySelector('#id_Region').value = '---------';
    document.querySelector('#id_Provincia').value = '---------';
    document.querySelector('#id_Comuna').value = '---------';
    document.querySelector('#id_passUsuario').value = '';
    document.querySelector('#id_confirmPass').value = '';
    document.querySelector('#error').style.display = 'none';
    document.querySelector('#errorUsername').style.display = 'none';
    document.querySelector('#errorEmail').style.display = 'none';
    document.querySelector('#errorRegion').style.display = 'none';
    document.querySelector('#errorProvincia').style.display = 'none';
    document.querySelector('#errorComuna').style.display = 'none';
    document.querySelector('#errorPassword1').style.display = 'none';
    document.querySelector('#errorPassword2').style.display = 'none';
}

window.addEventListener('load', () => {
    var enviar = document.querySelector('#btnEnviar');
    document.querySelector('#error').style.display = 'none';
    document.querySelector('#errorUsername').style.display = 'none';
    document.querySelector('#errorEmail').style.display = 'none';
    document.querySelector('#errorRegion').style.display = 'none';
    document.querySelector('#errorProvincia').style.display = 'none';
    document.querySelector('#errorComuna').style.display = 'none';
    document.querySelector('#errorPassword1').style.display = 'none';
    document.querySelector('#errorPassword2').style.display = 'none';
});