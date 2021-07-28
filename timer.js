function cronometro(){
    const timer = document.querySelector('._timer');
    let seconds = 0;
    let iniciaRelogio;

    function FormataRelogio(){
       const data = new Date(seconds * 1000);
       return data.toLocaleTimeString('pt-BR',{
           hour12: false,
           timeZone:"GMT"
       }) 
    };

    document.addEventListener('click',function(e){
        const el = e.target;

        if(el.classList.contains('start')){
            clearInterval(iniciaRelogio);
            timer.classList.remove('_timer')
            iniciaRelogio = setInterval(function(){
                seconds++
                timer.innerHTML = FormataRelogio(seconds);
            },1000);
        }
        if(el.classList.contains('pause')){
            timer.classList.add('_timer')
            clearInterval(iniciaRelogio);
        }
        if(el.classList.contains('stop')){
            clearInterval(iniciaRelogio);
            timer.innerHTML = '00:00:00'
            seconds = 0
        }
    })   
}

cronometro();