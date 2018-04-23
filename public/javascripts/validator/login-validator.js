function LoginValidator() {

    this.loginErrors = $('.modal-alert');

    this.showLoginError = function(t, m)
    {
        $('.modal-alert .modal-header h4').text(t);
        $('.modal-alert .modal-body').html(m);
        this.loginErrors.modal('show');
    }

}

LoginValidator.prototype.validateForm = function()
{
    if ($('#email').val() == ''){
        this.showLoginError('Whoops!', 'Please enter a valid username');
        return false;
    }	else if ($('#password').val() == ''){
        this.showLoginError('Whoops!', 'Please enter a valid password');
        return false;
    }	else{
        return true;
    }
}