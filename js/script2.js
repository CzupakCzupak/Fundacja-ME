const splideHero = new Splide( '.splide-hero', {
    type   : 'loop',
    focus: 'center',
    arrowPath: 'M2 2L26 26.6956L2 51.3913'
} );
splideHero.mount()

const onlineRaise = new Splide( '.online-raise', {
    perPage: 3,
    rewind : true,
    gap: '32px',
} );
onlineRaise.mount()

const showBtn = document.querySelectorAll(".show-all")
showBtn.forEach(item =>{
    item.addEventListener('click', (e)=>{
        const allCont = e.target.closest('.all-cont')
        const eventContainer = allCont.querySelector(".events-container")
        eventContainer.classList.toggle('active')
        if(eventContainer.classList.contains('active')){
            e.target.innerHTML = 'Zobacz&nbsp;mniej'
        }else{
            e.target.innerHTML = 'Zobacz&nbsp;wszystko'
        }
    })
})