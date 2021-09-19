function buscarCep(){

    var elemento = document.getElementById("cep");
    if(elemento != null){

        var cep = elemento.value;
        var url = `https://viacep.com.br/ws/${cep}/json/`;
        
        let dados = fazerRequest(url);
        let dadosJson = JSON.parse(dados)
        
        let elementoDiv = document.getElementById("resultado");
        if(elementoDiv != null && !dadosJson.erro){
            elementoDiv.innerHTML = dados        
        }
        else{
           elementoDiv.innerHTML = "Não foi possível encontrar as informaçoes do CEP informado."
        }
    }
}


function fazerRequest(url){

    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();

    return request.responseText;
}