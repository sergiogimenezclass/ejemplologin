
let mi_login = function () {
    let clave_guardada = "administrador"
    let usuario_guardado= "Meli"

    let mi_usuario = document.querySelector("#usuario").value
    let mi_clave = document.querySelector("#clave").value
    console.log(mi_usuario, mi_clave)

    if (clave_guardada === mi_clave & usuario_guardado === mi_usuario) {
        // console.log("Pudiste entrar")
        document.querySelector("#mensaje").innerHTML = "Pudiste entrar"
        
    }else{
        document.querySelector("#mensaje").innerHTML = "No, a la cucha!"
        // console.log("No, a la cucha!")
    }
}
