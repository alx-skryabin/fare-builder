import {RateTemplates} from "../rate-templates/RateTemplates.js";
import {RateComponent} from "./RateComponent.js";

export class RateBuilder extends RateComponent {
    static classBlock = 'payment-content'

    constructor($root) {
        super($root)
        this._className = 'builder'
    }

    toHTML() {
        return `
		${RateTemplates.slideOne()}
		${RateTemplates.slideTwo()}
		${RateTemplates.slideThree()}`
    }

    init() {
        $('.promocode_button button').on('click', () => {
            console.log('#58E579')
            $('.promocode_input input').css({
                'border-color':'tomato'
            });
        })
    }

    setBgMiddle(slide) {
        const config = {
            one: 'right center',
            two: 'center center',
            three: 'left center'
        }

        this.$root.style.backgroundPosition = config[slide]
    }

    setBgLarge(slide) {
        /*image position / size*/
        const config = {
            one: 'url(img/bg-payment-1.png) 90% center/contain',
            two: 'url(img/bg-payment-2.png) right center/35%',
            three: 'none',
        }

        this.$root.style.background = config[slide]
    }
}