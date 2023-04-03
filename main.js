$(document).ready(function() {
    const form = $('#form1');
    const lista1 = $('#lista');

    form.submit(function(event) {
        event.preventDefault();

        const textoInput = $('#textInput').val();

        if(textoInput !== '') {
            const tarefaAdd = $('<li>').text(textoInput);
            lista1.append(tarefaAdd);
            $('#textInput').val('');
        };

        lista1.on('click', function() {
            $(this).toggleClass('riscado');
        });
    })
});

