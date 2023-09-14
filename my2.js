let login = prompt('Enter:');
let message = (login == 'Employee') ?
    'Hello' :
    (login == 'Director') ?
        'Greating' :
        (login == '') ?
            'No login' :
            '';
alert(message)