let position = 100
let speed = 25
let top1 = 0
let left = Math.floor(Math.random() * window.innerWidth)
let go = 'bottom'
let side = 'center'
let leftStep = Math.random() * 3

let int;

$('.circle').css('left', left + 'px')


const int2 = setInterval(() => {
  
 

    if (top1>600 && go == 'bottom') {
        if ( (left - position > 0 && left - position < 300)) {
            go = 'top'
            if (left - position < 150 ) {
                console.log('left')
                side = 'left'
            }
            else {
                console.log('right')
              side = 'right'

            }
        }
        else {
            clearInterval(int)
            clearInterval(int2)
        alert('game over you score ' + nemo) 
       location.reload()
        }
    }
    if (top1<0 &&  go == 'top' ) {
            go = 'bottom'
            leftStep =Math.random() * 3

    }
    else if (go == 'bottom') {
        top1++
        if (side == 'left') {
            if (left > 10) {
                left -= leftStep
            } else {
                side = 'right'
            }
        }
        if (side == 'right') {
            if (left < window.innerWidth-40) {
                left += leftStep
            } else {
                side = 'left'
            }
        }
    }
    else if (go == 'top') {
        top1--
        if (side == 'left') {
            left+=leftStep
        }
        if (side == 'right') {
            left-=leftStep
        }
    }

    $('.circle').css('top', top1 + 'px')
    $('.circle').css('left', left + 'px')

}, 10);
let nemo = 0
int = setInterval(() => {
    nemo++ 
    console.log (nemo)
  $('.score').text(nemo)


}, 1000 )




$('body').keydown(function(e){
    console.log(e.key)
    if(e.key == 'ArrowRight'){
        if (position>  window.innerWidth) {
            return
        }
        position+=speed
        $('.plat').css('left', position + 'px')
    }
    if(e.key == 'ArrowLeft'){
        if (position<0) {
            return
        }
        position-=speed
        $('.plat').css('left', position + 'px')
    }

})

//  $('.range').on('change', function(){

//      speed = $(this).val()
//      console.log(speed)
    
//  })