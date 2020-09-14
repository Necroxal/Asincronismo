let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function fetchData(url_api, callback) {
    let xhttp = new XMLHttpRequest(); // Genera la referencia al objeto (instanciar)
    xhttp.open('GET', url_api, true); //hacer llamado a una url y la peticion y que se maneje de forma sicnrona por eso le pasamos el true
    xhttp.onreadystatechange = function (event) { //Si este cambio sucede se jeuta una funcion
        if (xhttp.readyState === 4) { //si el estado en el que se encuentra es igual a 4
            if (xhttp.status === 200) { //si el estado es 200 correcto
                callback(null, JSON.parse(xhttp.responseText)); //El primer valor es el error y el segundo la finomacion y respuesta en texto por eos se tarnforma
            }
            else{
                const error = new Error('Error ' + url_api);// error 
                return callback(error, null); //  retorna callback, pasar error y null porque no se manda ningun resultado
            }
        }
        xhttp.send();
    }
}

