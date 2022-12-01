const botao = document.getElementById("btn")

botao.addEventListener("click",fnValidar)

function fnValidar(){
    

    const email = document.querySelector("#E-mail")
    

   if(email.value == "cliente@gmail.com"){
    
    location.href="../Cliente/cliente.html"
   }

   if(email.value == "funcionario@gmail.com"){
    
    location.href="../Funcionario/funcionario.html"
   }

   
   
    
    
}

