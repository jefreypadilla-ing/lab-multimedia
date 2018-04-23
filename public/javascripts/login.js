$(document).ready(function(){

    $('#email').focus();

    var lv = new LoginValidator();
    var ev = new EmailValidator();

    $('#form-login').ajaxForm({
        beforeSubmit : function(formData, jqForm, options){
            if(!lv.validateForm()){
                return false;
            } else {
                return ev.validateEmail($('#email').val());
            }
        },
        success : function(responseText, status, xhr, form){
            if(status == 'success') window.location.href = '/?email=' + $('#email').val();
        },
        error : function(e){
            lv.showLoginError('Login Failure', 'Please check your username and/or password');
        }
    });

});
