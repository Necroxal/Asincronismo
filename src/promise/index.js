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
.catch(err => console.error(err))