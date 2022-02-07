const cripto = document.querySelector("#btn-crip");
const descripto = document.querySelector("#btn-descrip");
const copia = document.querySelector("#btn-copiar");
let resposta = document.querySelector("#resposta");
let mensagem = document.querySelector("#mensagem")

cripto.addEventListener('click', clickCripto);
descripto.addEventListener('click', clickDescripto);
copia.addEventListener('click', clickCop);

mensagem.addEventListener('keypress', function(e)
{

    const keyCode = (e.keyCode ? e.keyCode : e.wich);

    if(keyCode > 47 && keyCode < 58){
        e.preventDefault();
    }
});

// Função para criptografar texto

function criptografa(mensagem) 
{
    let texto = mensagem
        .replaceAll(/e/gi, 'enter')
        .replaceAll(/i/gi, 'imes')
        .replaceAll(/a/gi, 'ai')
        .replaceAll(/o/gi, 'ober')
        .replaceAll(/u/gi, 'ufat')
    return texto;
}

// Função para descriptografar texto

function descriptografa(mensagem) 
{
    let textoDescrip = mensagem
        .replaceAll(/enter/gi, 'e')
        .replaceAll(/imes/gi, 'i')
        .replaceAll(/ai/gi, 'a')
        .replaceAll(/ober/gi, 'o')
        .replaceAll(/ufat/gi, 'u')
    return textoDescrip;
}

function caracteres(mensagem) 
{
    if (!regex.texto(mensagem)) {
        alert("Caracter inválido!")
    } else {
        return mensagem;
    }
}

function clickDescripto() 
{
    const saveInput = mensagem.value;
    resposta.value = descriptografa(saveInput);
    mensagem.value = '';
}

function clickCripto() 
{
    const saveInput = mensagem.value;
    resposta.value = criptografa(saveInput);
    mensagem.value = '';
}

function clickCop() 
{
    resposta.select();
    resposta.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(resposta.value);
}