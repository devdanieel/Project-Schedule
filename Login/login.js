function entrar(){
    let usuario = document.getElementById('login').value
    let password = document.getElementById('senha').value
    
    if (usuario === 'ADMIN' && password === '123') {

        window.location.href = 'file:///C:/Users/user/Desktop/Project%20Schedule/Index/index.html'
        return

    } 
    else if(usuario != 'ADMIN'){

        alert('Usuário inválido!')         
        login.focus()
    
    }
    else{

        alert('Senha inválida!')        
        senha.focus()
        
    }

    
}
 