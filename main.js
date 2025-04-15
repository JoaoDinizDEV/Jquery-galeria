$(document).ready(function(){
    $('header button').click(function(){
    $('form').slideDown(); //Expandir o botão de nova imagem//
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp() //Recolher o botão de cancelar//
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereço-imagem-nova').val(); //Criamos uma variavel e um id para o input do formulario//
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem)
        $(`
            <div class="overlay-imagem-link">
            <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagens em tamanho real
                    Ver imagem em tamanho real
            </a>
            </div>
            
        `).appendTo(novoItem)
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereço-imagem-nova').val('')//Para limpar o conteudo na pagina//
            
    })
    
})