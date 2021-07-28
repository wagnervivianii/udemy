//const div = document.querySelector('.bar');


function showHour(){
    const data = new Date();
    return data.toLocaleTimeString()
}
const inicio = Date.now();

const timer = setInterval(function(){
    console.log(showHour());
},1000);

setTimeout(function() {
    clearTimeout(timer);
},10000)

