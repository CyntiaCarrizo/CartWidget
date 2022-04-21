

let is_ok = true;


const customFetch = (time,product) => {
    return new Promise((resolve, reject) => {
        if (is_ok) {
            setTimeout(() => {
                resolve(product)
                console.log(product)
            }, time);
        } else {
            reject("Error")
        }
    });
}

export default customFetch