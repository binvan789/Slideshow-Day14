var imgFeature = document.querySelector('.img-feature')
var listImg = document.querySelectorAll('.list-image img')
var prevBtn = document.querySelector('.control.prev')
var nextBtn = document.querySelector('.control.next')

var currentIndex = 0;

function updateImgByIndex(index) {
    document.querySelectorAll('.list-image div').forEach(item => {
        item.classList.remove('active')
    })
    currentIndex = index
    imgFeature.src = listImg[currentIndex].getAttribute('src')
    listImg[index].parentElement.classList.add('active')
}


listImg.forEach((item,index) => {
    item.addEventListener('click', e => {
        imgFeature.style.opacity = '0'
        
        setTimeout(() => {
            imgFeature.style.opacity = '1'
            updateImgByIndex(index)
        }, 350)
    })
})

prevBtn.addEventListener('click', e => {
    imgFeature.style.animation = ``
    if (currentIndex == 0) {{
        currentIndex = listImg.length - 1
    }}
    else {
        currentIndex--
    }
    setTimeout(() => {
        updateImgByIndex(currentIndex)
        imgFeature.style.animation = `slideLeft 1s ease-in-out forwards`
    },200)
})

nextBtn.addEventListener('click', e => {
    imgFeature.style.animation = ``
    if (currentIndex == listImg.length - 1) {
        currentIndex = 0
    }
    else {
        currentIndex++
    }
    setTimeout(() => {
        updateImgByIndex(currentIndex)
        imgFeature.style.animation = `slideRight 1s ease-in-out forwards`
    },200)
})

updateImgByIndex(0)