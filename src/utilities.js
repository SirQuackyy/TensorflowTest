export const drawRect = (detections, ctx) =>{

    detections.forEach(prediction=>{
        const [x,y,width,height] = prediction['bbox'];
        const text = prediction['class'];

        if(text === 'person'){
            return;
        }

        const color = 'green'
        ctx.strokeStyle = color
        ctx.font = '18px Arial'
        ctx.fillStyle = color
        ctx.beginPath()
        ctx.fillText(text, x, y)
        ctx.rect(x, y, width, height)
        ctx.stroke()
        play(text);
    })

    async function play(text) {
        var msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        
        return new Promise(resolve => {
            Audio.onend = resolve;
        });
    }

}