/* let check = true;

let promise1 = new Promise((resolve, reject) => {
    if (check) {
        resolve("işlem başarılı");
    }
    reject("işlem başarısız");
})

console.log(promise1);

function createPromise() {
    return new Promise((resolve, reject) => {
        if (check) {
            resolve("Promise de sıkıntı yok.");
        }
        reject("Promise de sıkıntı var");
    }
    )
}
createPromise()
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error)
    })
*/

//Promise + XMLHTTPRequest

function readPersons(url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        try {
            xhr.addEventListener("readystatechange", () => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
            });
        }
        catch (error) {
            console.log("Hata oluştu");
            reject(error);
        }
        xhr.open("GET", url);
        xhr.send();
    }
    );

}
readPersons("example.json")
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });