const texto = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat',
        
};

function encriptar(entradaUsuario) {
    let textoEncriptado = "";

    for (let i = 0; i < entradaUsuario.length; i++) {
        const letra = entradaUsuario[i];
        if (texto.hasOwnProperty(letra)) {
            textoEncriptado += texto[letra];
        } else {
            textoEncriptado += letra;
        }
    }
    return textoEncriptado;
} 

function desencriptar(textoEncriptado) {
    let textoDesencriptado = textoEncriptado;
    const ordenadoTexto = Object.entries(texto).sort((a,b) => b[1].length - a[1].length);
    for (const [letra,codigo] of ordenadoTexto) {
        textoDesencriptado = textoDesencriptado.split(codigo).join(letra);
    }
    return textoDesencriptado;
}

function encriptarTexto(){
    const entrada = document.getElementById("textoEntrada").value;
    if (/[^a-z\s\?]/.test(entrada)) {
        alert("La entrada contiene caracteres inválidos, no esta permitido las mayusculas ni acentos.")
        document.getElementById("textoEncriptado").value = "";
        return;
    }
    const resultado = encriptar(entrada);
    document.getElementById("textoEncriptado").value = resultado; 
}




function desencriptarTexto() {
    const entrada = document.getElementById("textoEntrada").value;
    const resultado = desencriptar(entrada);
    document.getElementById("textoEncriptado").value=resultado;
}

function copiarTexto(){
    const textoEncriptado = document.getElementById("textoEncriptado");
    textoEncriptado.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}


function limpiarTexto() {
    document.getElementById("textoEntrada").value = "";
    document.getElementById("textoEncriptado").value = "";
}
