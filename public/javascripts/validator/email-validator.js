function EmailValidator(){

    this.loginErrors = $('.modal-alert');

    this.showLoginError = function(t, m)
    {
        $('.modal-alert .modal-header h4').text(t);
        $('.modal-alert .modal-body').html(m);
        this.loginErrors.modal('show');
    }

}

EmailValidator.prototype.validateEmail = function(e)
{
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var result = re.test(e);
    if(!result){
        this.showLoginError('Whoops!', 'Please enter a valid email, example: test@test.com');
    }
    return result;
}