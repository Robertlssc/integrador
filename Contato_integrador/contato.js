function validaFormulario(){
    const nome = document.getElementById ("name").value;
    const email = document.querySelector ("#email").value;
    const message = document.getElementById ("message").value;
    
    /*
    validação dos campos preenchidos
    */
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(nome == "" || email == "" || message == ""){
        alert("Por favor, preencha os campos")
    }else if(!emailRegex.test(email)){
            alert("Por favor, insira um e-mail válido!")
            return
        } 
    //validação da senha
    if(message.length < 10){
        alert("Mensagem muito curta!")
        return
    }
    
}