$(() => {    

    const objAuth = new Autenticacion()
    
    $("#btnRegistroEmail").click(() => {
        const nombres = $('#nombreContactoReg').val();
        const email = $('#emailContactoReg').val();
        const password = $('#passwordReg').val();
        const auth = new Autenticacion()
        auth.crearCuentaEmailPass(email,password,nombres)
        // TODO : LLamar crear cuenta con email
    });
    
    $("#btnInicioEmail").click(() => {
        const email = $('#emailSesion').val();
        const password = $('#passwordSesion').val();
        // TODO : LLamar auth cuenta con email
        const auth = new Autenticacion()
        auth.autEmailPass(email,password)
    });
    
     //TODO: Evento Cambiar Password
     $('#btnChangePassword').click(()=> objAuth.cambiarPassword($('#emailSesion').val()))

    $("#authGoogle").click(() => objAuth.authCuentaGoogle());
    $("#authFB").click(() => objAuth.authCuentaFacebook());

    //$("#authTwitter").click(() => //AUTH con Twitter);

    $('#btnRegistrarse').click(() => {
        $('#modalSesion').modal('close');
        $('#modalRegistro').modal('open');
    });

    $('#btnIniciarSesion').click(() => {
        $('#modalRegistro').modal('close');
        $('#modalSesion').modal('open');
    });

});