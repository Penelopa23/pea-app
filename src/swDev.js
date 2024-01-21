

export default function swDev() {
    let swUrl = `${process.env.PUBLIC_URL}/sw.js`
    //let swUrl = '%PUBLIC_URL%/sw.js';
    console.log(`${process.env.PUBLIC_URL}`)
    navigator.serviceWorker.register(swUrl).then((response) => {
        console.warn("response", response)
    }).catch((e) => {
        console.error(e)
    })
}