const splideHero = new Splide( '.splide-hero', {
    type   : 'loop',
    focus: 'center',
    autoplay: true,
} );
splideHero.mount()

const onlineRaise = new Splide( '.online-raise', {
    perPage: 3,
    rewind : true,
    gap: '32px',
    breakpoints: {
		1195: {
            type: 'loop',
			perPage: 2,
		},
        700:{
            perPage: 1,
        },
  }
} );
onlineRaise.mount()



