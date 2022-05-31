let user = prompt("Escriba su nombre de usuario");

while (user != "PerroLoco") {
    switch (user) {
        case "":
            alert("Por favor ingrese un usuario válido");
            break;
        case "perroloco":
            alert("Preste atención a las mayúsculas y minúsculas");
            break;
        case "Perroloco":
            alert("Preste atención a las mayúsculas y minúsculas");
            break;
        default:
            alert(`El usuario "${user}" no existe`);
            break;
    }
    user = prompt("Escriba su nombre de usuario");
}

let contraseña = prompt("Escriba su contraseña");

while (contraseña != "1234") {
    switch (contraseña) {
        case "":
            alert("Por favor ingrese una contraseña válida");
            break;
        default:
            alert("Contraseña incorrecta");
            break;
    }
    contraseña = prompt("Escriba su contraseña");
}