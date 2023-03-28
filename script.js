let start = setInterval(()=>{
    let date = new Date();
    let hours = date.getHours()+.5;
    let minuts = date.getMinutes();
    let seconds = date.getSeconds();


    let varkyan = document.querySelector('.varkyan');
        varkyan.style.transform = `rotate(${seconds*6}deg)`
    let rope = document.querySelector('.rope');
        rope.style.transform = `rotate(${minuts*6}deg)`
    let jam = document.querySelector('.jam');
        jam.style.transform = `rotate(${hours*30}deg)`

},1)
