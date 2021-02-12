export class Slides {
    constructor() {
        this._className = 'slides'
        this._currentSlide = 'one'
        this.components = null
        this.slides = null
    }

    currentSlide(slide, size) {
        this._currentSlide = slide

        if (size === 'middle') {
            this.components.builder.setBgMiddle(slide)
        }

        if (size === 'large') {
            this.components.mask.status = slide
            this.components.builder.setBgLarge(slide)
        }
    }

    init() {
        let parent = this.components.builder.$root

        this.slides = {
            one: parent.querySelector('.payment_slide-one'),
            two: parent.querySelector('.payment_slide-two'),
            three: parent.querySelector('.payment_slide-three')
        }

        this.activeNavigation()
        $(window).resize(() => this.activeNavigation())
    }

    toogleSlide(arr) {
        arr.map(item => {
            let [slide, value = 'flex'] = item
            slide.style.display = value
        })
    }

    activeNavigation() {
        let {one, two, three} = this.slides

        if (window.matchMedia('screen and (max-width: 575px)').matches) {
            one.querySelector('.navigation_next').onclick = () => {
                this.toogleSlide([[one, 'none'], [two]])
                this.currentSlide('two', 'small')
            }
            two.querySelector('.navigation_next').onclick = () => {
                this.toogleSlide([[two, 'none'], [three]])
                this.currentSlide('three', 'small')
            }
            two.querySelector('.navigation_back').onclick = () => {
                this.toogleSlide([[two, 'none'], [one]])
                this.currentSlide('one', 'small')
            }
            three.querySelector('.navigation_back').onclick = () => {
                this.toogleSlide([[three, 'none'], [two]])
                this.currentSlide('two', 'small')
            }
        }
        else if (window.matchMedia('screen and (min-width: 576px) and (max-width: 991px)').matches) {
            one.querySelector('.navigation_next').onclick = () => {
                this.toogleSlide([[one, 'none'], [two]])
                this.currentSlide('two', 'middle')
            }
            two.querySelector('.navigation_next').onclick = () => {
                this.toogleSlide([[two, 'none'], [three]])
                this.currentSlide('three', 'middle')
            }
            two.querySelector('.navigation_back').onclick = () => {
                this.toogleSlide([[two, 'none'], [one]])
                this.currentSlide('one', 'middle')
            }
            three.querySelector('.navigation_back').onclick = () => {
                this.toogleSlide([[three, 'none'], [two]])
                this.currentSlide('two', 'middle')
            }
        }
        else {
            this.toogleSlide([[one], [two, 'none'], [three, 'none']])
            this.currentSlide('one', 'large')

            one.querySelector('.navigation_next').onclick = () => {
                this.toogleSlide([[one], [two]])
                this.currentSlide('two', 'large')
            }
            two.querySelector('.navigation_next').onclick = () => {
                this.toogleSlide([[two], [three]])
                this.currentSlide('three', 'large')
            }
            two.querySelector('.navigation_back').onclick = () => {
                this.toogleSlide([[two, 'none']])
                this.currentSlide('one', 'large')
            }
            three.querySelector('.navigation_back').onclick = () => {
                this.toogleSlide([[three, 'none']])
                this.currentSlide('two', 'large')
            }
        }
    }
}