// function <<nome da função>> (){
//    conteúdo da função
//  }



function login(){
    // Criar uma função que pegue o valor de email e senha e cheque se é igual a login 123456.
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
        resultado_exi.value = resultado;
}
    function updateResultado_exi2(resultado) {
        var resultado_exi2 = document.getElementById("resultado_exi2");
        resultado_exi2.textContent = resultado;
}
    function nmprod(resultado) {
    var nmprod = document.getElementById("nmprod");
    nmprod.textContent = resultado;
}
    function prprod(resultado) {
    var prprod = document.getElementById("prprod");
    prprod.textContent = resultado;
}
    function maprod(resultado) {
    var maprod = document.getElementById("maprod");
    maprod.textContent = resultado;
}
    function exibecar(resultado) {
    var exibecar = document.getElementById("exibecar");
    exibecar.textContent = resultado;
}

    function somar() {
        var n1 = parseInt(prompt("Digite o primeiro número"));
        var n2 = parseInt(prompt("Digite o segundo número"));
        var resultado = n1 + n2;
        updateResultado_exi(resultado);
}

    function subtrair(){
        var  n1 = parseInt(prompt("Digite o primeiro número"))
        var n2 = parseInt(prompt("Digite o segundo número"))
        //console.log(typeof(n1)) essa função devolve o tipo de variavel 
        //console.log(typeof(n2))
        //console.log(typeof(n1))
        var  resultado = n1 - n2
        updateResultado_exi(resultado);
       }

       function dividir(){
        var  n1 = parseInt(prompt("Digite o primeiro número"))
        var n2 = parseInt(prompt("Digite o segundo número"))
        //console.log(typeof(n1)) essa função devolve o tipo de variavel 
        //console.log(typeof(n2))
        //console.log(typeof(n1))
        if (n2 == 0){
            
            updateResultado_exi("Não foi possível dividir o primeiro número por zero.")
        }
        if (n2 != 0){
        var  resultado = n1 / n2
        updateResultado_exi(resultado);
       }
    }

       function multiplicar(){
        var  n1 = parseInt(prompt("Digite o primeiro número"))
        var n2 = parseInt(prompt("Digite o segundo número"))
        //console.log(typeof(n1)) essa função devolve o tipo de variavel 
        //console.log(typeof(n2))
        //console.log(typeof(n1))
        var  resultado = n1 * n2
        updateResultado_exi(resultado);
       }

       function quadrado(){
        var  n1 = parseInt(prompt("Digite um número"))
        
        //console.log(typeof(n1)) essa função devolve o tipo de variavel 
        //console.log(typeof(n2))
        //console.log(typeof(n1))
        var  resultado = n1*n1
        updateResultado_exi(resultado);
       }

       function cubo(){
        var  n1 = parseInt(prompt("Digite um número"))
        
        //console.log(typeof(n1)) essa função devolve o tipo de variavel 
        //console.log(typeof(n2))
        //console.log(typeof(n1))
        var  resultado = n1*n1*n1
        updateResultado_exi(resultado);
       }

       function quad(){
        var  n1 = parseInt(prompt("Digite um número"))
        
        //console.log(typeof(n1)) essa função devolve o tipo de variavel 
        //console.log(typeof(n2))
        //console.log(typeof(n1))
        var  resultado = n1*n1*n1*n1
        updateResultado_exi(resultado);
       }

       function quin(){
        var  n1 = parseInt(prompt("Digite um número"))
        
        //console.log(typeof(n1)) essa função devolve o tipo de variavel 
        //console.log(typeof(n2))
        //console.log(typeof(n1))
        var  resultado = n1*n1*n1*n1*n1
        updateResultado_exi(resultado);
       }

       function raiz(){
        var  n1 = parseInt(prompt("Digite um número"))
        
        //console.log(typeof(n1)) essa função devolve o tipo de variavel 
        //console.log(typeof(n2))
        //console.log(typeof(n1))
        var  resultado = Math.sqrt(n1);
        updateResultado_exi(resultado);
       }

       function media(){
        var  n1 = parseInt(prompt("Digite um número"))
        var  n2 = parseInt(prompt("Digite um número"))
        var  n3 = parseInt(prompt("Digite um número"))
        //console.log(typeof(n1)) essa função devolve o tipo de variavel 
        //console.log(typeof(n2))
        //console.log(typeof(n1))
        var  resultado = (n1+n2+n3)/3
        updateResultado_exi(resultado);
       }
       function pot(){
        var  n1 = parseInt(prompt("Digite a base"))
        var  n2 = parseInt(prompt("Digite o expoente"))
        var  resultado = Math.pow(n1, n2)
        updateResultado_exi(resultado);
          
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
        updateResultado_exi(resultado);
       }

       function listar(){
        let prod = document.getElementById("frmProduto").value
        let li = document.createElement("li")
        li.textContent = prod
        let listaProd = document.getElementById("listaProd")
        listaProd.appendChild(li)
        
        
        

       }

       function objeto(){
        let carrinho_de_compras = []
       // let nome= "arroz"//
        //let preco = 9.99//
        //let marca = "tio joão"//
        //quero juntar tudo em um so, transformamos em objeto//
        let produto = {
    
             nome_prod: "arroz",
             preco_prod: 6.03,
             marca_prod: "camil",
             id: 0o1
    
        }
    
        
       
        let produto2 = {
    
            nome_prod: "feijão",
            preco_prod: 14.35,
            marca_prod: "camil",
            id: 0o2
    
       }
    }
    
    function prodinfo (){
        let carrinho_compras = []   
        let prodnm = document.getElementById("frmProdnm").value
        let prodpr = document.getElementById("frmProdpr").value
        let prodma = document.getElementById("frmProdma").value

        carrinho_compras.push(prodnm)
        carrinho_compras.push(prodpr)
        carrinho_compras.push(prodma)

        nmprod("O nome do produto adicionado é: " +  carrinho_compras[0])                            
        prprod("O preço do produto adicionado é: " + carrinho_compras[1])
        maprod("A marca do produto adicionado é: " + carrinho_compras[2])

        
    }
    
    let carrinho_compras = []; // Mova a declaração do array para o escopo global

    function prodconf() {
        let prodnm = document.getElementById("frmProdnm").value;
        let prodma = document.getElementById("frmProdma").value;
    
        if (prodnm && prodma) {
            carrinho_compras.push(prodnm);
            carrinho_compras.push(prodma);
    
            let mensagem = `O ${prodnm} da marca ${prodma} foi adicionado ao carrinho.`;
            exibecar(mensagem);
    
            console.log("Nome adicionado ao carrinho: " + prodnm);
            console.log("Marca adicionada ao carrinho: " + prodma);
        } else {
            exibecar("Por favor, preencha o nome e a marca do produto antes de adicionar ao carrinho.");
        }
    }
    
    

function prodremv() {
    if (carrinho_compras.length > 0) {
        carrinho_compras.pop(); // Remove o último item do array
        exibecar("O último item foi removido do carrinho.");
    } else {
        exibecar("O carrinho está vazio. Não há itens para remover.");
    }
}

function exibecar(mensagem) {
    let exibecarDiv = document.getElementById("exibecar");
    exibecarDiv.textContent = mensagem;
}



    
    

    
    
    
       
    
    
       
        //  console.log(carrinho_de_compras)
        //  console.log(carrinho_de_compras[0])
        

        
        

      

       

       

    // usando getelementbyid ele retorna uma string!!!