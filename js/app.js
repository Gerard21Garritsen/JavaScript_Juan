//This file has all code in order to get PWA
if('serviceWorker' in navigator)
{
    navigator.serviceWorker.register("js/SW.js")
    .then(registro => console.log("SW registrado", registro))
    .catch(error => console.log(error));
    
}
else
    console.log("El navegador no soporta SW"); 
