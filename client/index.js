import './stylesheets/style.css';
import './stylesheets/mystyles.css'

console.log("Webpack");
let show = (m = "hola") => {
    alert(m)
};

show();

function resolveAfter2Seconds(){
    return new Promise(resolve => {
        setTimeout(() =>{
            resolve('resolved')
        }, 2000);
    });
}

async function asyncCall(){
    console.log("Call an async function");
    const result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();