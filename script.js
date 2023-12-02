card1 = document.querySelector('.card1');
card2 = document.querySelector('.card2');
card3 = document.querySelector('.card3');





function wrapper() {
    let count = 0
    card1.addEventListener('click', function () {
        count += 1
        console.log('click1')
        if (count %2== 1) {
            card1.style.width = '50%'
            card2.style.width = '23%'
            card3.style.width = '23%'
        }
        else if(count%2==0){
            card1.style.width = '32%'
            card2.style.width = '32%'
            card3.style.width = '32%'
        }
    })
}
function wrapper2() {
    let count = 0
    card2.addEventListener('click', function () {
        count += 1
        console.log('click2')
        if (count %2== 1) {
            card1.style.width = '23%'
            card2.style.width = '50%'
            card3.style.width = '23%'
        }
        else if(count%2==0){
            card1.style.width = '32%'
            card2.style.width = '32%'
            card3.style.width = '32%'
        }
    })
}
function wrapper3() {
    let count = 0
    card3.addEventListener('click', function () {
        count += 1
        console.log('click3')
        if (count %2== 1) {
            card1.style.width = '23%'
            card2.style.width = '23%'
            card3.style.width = '50%'
        }
        else if(count%2==0){
            card1.style.width = '32%'
            card2.style.width = '32%'
            card3.style.width = '32%'
        }
    })
}



card1.addEventListener('click',wrapper())
card2.addEventListener('click',wrapper2())
card3.addEventListener('click',wrapper3())

