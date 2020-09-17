const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('HEYYY');
        } else {
            reject('No se puede ese');
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('True');
            }, 2000)
        } else {
            const error = new Error('No se pudo de neuvo ese');  // Error que nos permite ver en consola más detalles del error
            reject(error);
        }
    });
}

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));

//Correr varias promesas en encadenadas
Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('Array results', response);
    })
    .catch(err => {
        console.error(err);
    })