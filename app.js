const texto = {
        'a': '11a22i44g',
        'e': '85nt567er',
        'i': '34m36e7sd',
        'o': '346b657er',
        'u': '636f36a36',
        '?': 'nqqwsaalo'
};

function encriptar(entradaUsuario) {
    let textoEncriptado = "";
    entradaUsuario = entradaUsuario.toLowerCase();

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
    for (const [letra,codigo] of Object.entries(texto)) {
        textoDesencriptado = textoDesencriptado.split(codigo).join(letra);
    }
    return textoDesencriptado;
}

function encriptarTexto(){
    const entrada = document.getElementById("textoEntrada").value;
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