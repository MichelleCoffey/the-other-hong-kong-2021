window.onload = function() {
    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault();
        

    emailjs.sendForm('service_951emqu', 'template_upi7stc', this)
       .then(function() {
                console.log('SUCCESS!',);
            }, function(error) {
                console.log('FAILED...', error);
            });
    });

}
