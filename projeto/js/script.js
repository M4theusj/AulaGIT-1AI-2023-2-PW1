// function <<nome da função>> (){
//    conteúdo da função
//  }



function login(){
    // Criar uma função que pegue o valor de amil e senha e cheque se é igual a login 123456.
    // Se for, exiba a mensagem de login realizado com sucesso.
    // Manipular o DOM
    // Document Object Model
    // O DOM é basicamente um jeito que o JS manipula a pagina HTML
    
    var email = document.getElementById("frmemail").value
    var password = document.getElementById("frmpassword").value
    console.log(email)
    console.log(password)
    if(email == "login" && password == "123456"){
        alert("Login realizado com sucesso!")
    } 
    else{
        alert("Login incorreto!")
    
    }
}
    function updateResultado_exi(resultado) {
        var resultado_exi = document.getElementById("resultado_exi");
        resultado_exi.textContent = resultado;
}
    function updateResultado_exi2(resultado) {
        var resultado_exi2 = document.getElementById("resultado_exi2");
        resultado_exi2.textContent = resultado;
}

    function somar() {
        var n1 = parseInt(prompt("Digite o primeiro número"));
        var n2 = parseInt(prompt("Digite o segundo número"));
        var resultado = n1 + n2;
        updateResultado_exi("Resultado: " + resultado);
}

    function subtrair(){
        var  n1 = parseInt(prompt("Digite o primeiro número"))
        var n2 = parseInt(prompt("Digite o segundo número"))
        //console.log(typeof(n1)) essa função devolve o tipo de variavel 
        //console.log(typeof(n2))
        //console.log(typeof(n1))
        var  resultado = n1 - n2
        updateResultado_exi("Resultado: " + resultado);
       }

       function dividir(){
        var  n1 = parseInt(prompt("Digite o primeiro número"))
        var n2 = parseInt(prompt("Digite o segundo número"))
        //console.log(typeof(n1)) essa função devolve o tipo de variavel 
        //console.log(typeof(n2))
        //console.log(typeof(n1))
        if (n2 == 0){
            
            console.log("Não foi possível dividir o primeiro número por zero.")
        }
        if (n2 != 0){
        var  resultado = n1 / n2
        updateResultado_exi("Resultado: " + resultado);
       }
    }

       function multiplicar(){
        var  n1 = parseInt(prompt("Digite o primeiro número"))
        var n2 = parseInt(prompt("Digite o segundo número"))
        //console.log(typeof(n1)) essa função devolve o tipo de variavel 
        //console.log(typeof(n2))
        //console.log(typeof(n1))
        var  resultado = n1 * n2
        updateResultado_exi("Resultado: " + resultado);
       }

       function quadrado(){
        var  n1 = parseInt(prompt("Digite um número"))
        
        //console.log(typeof(n1)) essa função devolve o tipo de variavel 
        //console.log(typeof(n2))
        //console.log(typeof(n1))
        var  resultado = n1*n1
        updateResultado_exi("Resultado: " + resultado);
       }

       function cubo(){
        var  n1 = parseInt(prompt("Digite um número"))
        
        //console.log(typeof(n1)) essa função devolve o tipo de variavel 
        //console.log(typeof(n2))
        //console.log(typeof(n1))
        var  resultado = n1*n1*n1
        updateResultado_exi("Resultado: " + resultado);
       }

       function quad(){
        var  n1 = parseInt(prompt("Digite um número"))
        
        //console.log(typeof(n1)) essa função devolve o tipo de variavel 
        //console.log(typeof(n2))
        //console.log(typeof(n1))
        var  resultado = n1*n1*n1*n1
        updateResultado_exi("Resultado: " + resultado);
       }

       function quin(){
        var  n1 = parseInt(prompt("Digite um número"))
        
        //console.log(typeof(n1)) essa função devolve o tipo de variavel 
        //console.log(typeof(n2))
        //console.log(typeof(n1))
        var  resultado = n1*n1*n1*n1*n1
        updateResultado_exi("Resultado: " + resultado);
       }

       function raiz(){
        var  n1 = parseInt(prompt("Digite um número"))
        
        //console.log(typeof(n1)) essa função devolve o tipo de variavel 
        //console.log(typeof(n2))
        //console.log(typeof(n1))
        var  resultado = Math.sqrt(n1);
        updateResultado_exi("Resultado: " + resultado);
       }

       function media(){
        var  n1 = parseInt(prompt("Digite um número"))
        var  n2 = parseInt(prompt("Digite um número"))
        var  n3 = parseInt(prompt("Digite um número"))
        //console.log(typeof(n1)) essa função devolve o tipo de variavel 
        //console.log(typeof(n2))
        //console.log(typeof(n1))
        var  resultado = (n1+n2+n3)/3
        updateResultado_exi("Resultado: " + resultado);
       }
       function pot(){
        var  n1 = parseInt(prompt("Digite a base"))
        var  n2 = parseInt(prompt("Digite o expoente"))
        var  resultado = Math.pow(n1, n2)
        updateResultado_exi("Resultado: " + resultado);
          
    }
       function nome(){
        const nome = document.getElementById("frmNome").value
        updateResultado_exi2("Nome: " + nome);
        


       }

       function porc(){
        var  n1 = parseInt(prompt("Digite o número da porcentagem"))
        var  n2 = parseInt(prompt("Digite um número"))
        
        
        //console.log(typeof(n1)) essa função devolve o tipo de variavel 
        //console.log(typeof(n2))
        //console.log(typeof(n1))
        var  resultado = (n1*n2)/100
        updateResultado_exi("Resultado: " + resultado);
       }

       function listar(){
        let prod = document.getElementById("frmProduto").value
        let li = document.createElement("li")
        li.textContent = prod
        let listaProd = document.getElementById("listaProd")
        listaProd.appendChild(li)
        
        
        

       }

       

       

    // usando getelementbyid ele retorna uma string!!!