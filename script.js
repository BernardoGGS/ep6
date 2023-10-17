function inclui_nome() {
    var nome_variavel = prompt("Coloque seu nome:");
    if(nome_variavel){
        document.getElementById("marcacao_nome").innerHTML = nome_variavel;
    }
    else{
        alert("Nome não atribuido, preencha o nome.");
        inclui_nome();
    }
}


function funcao_resposta(){

    var resp1 = document.querySelector('input[name="quest_1"]:checked');
    var resp2 = document.querySelector('input[name="quest_2"]:checked');
    var resp3 = document.querySelector('input[name="quest_3"]:checked');
    var resp4 = document.querySelector('input[name="quest_4"]:checked');

    var contador = 0;


    if(resposta1 && resposta2 && resposta3 && resposta4){
        if(resposta1.value == "correta"){
            document.getElementById("correta1").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("incorreta").innerHTML = "Errada, pois a soma dos quadrados dos catetos é igual ao quadrada da hipotenusa!"

        }
        if(resposta2.value == "correta"){
            document.getElementById("correta2").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("incorreta").innerHTML = "Errada, pois a soma dos quadrados dos catetos é igual ao quadrada da hipotenusa!"

        }
        if(resposta3.value == "correta"){
            document.getElementById("correta3").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("incorreta").innerHTML = "Errada, pois a soma dos quadrados dos catetos é igual ao quadrada da hipotenusa!"

        }
        if(resposta4.value == "correta"){
            document.getElementById("correta4").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("incorreta").innerHTML = "Errada, pois a soma dos quadrados dos catetos é igual ao quadrada da hipotenusa!"

        }
        document.getElementById("quantos_acertos").innerHTML = "Você acertou " + contador + " questões!";
    }
    else{
        alert("não deixe questões em branco!")
    }

}