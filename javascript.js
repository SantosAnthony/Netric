
const nome = document.getElementById("name")
const email = document.getElementById("number")
nome.value = ""
email.value = ""

function clicar(){
    if(nome.value !== "" && email.value !== "" ){
        nome.value = ""
        email.value = ""
        Swal.fire({
            icon:"success",
            title: "Enviado",
            background: " #0b0e18",
            color:"#fff",
            text:"Obrigado pela preferência",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
    }else{
        Swal.fire({
            icon:"error",
            title: "Houve um pequeno erro...",
            background: " #0b0e18",
            color:"#fff",
            text:"Preencha todos os campos antes de continuar",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
    }
    
}



