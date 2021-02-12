import {RateComponent} from "./RateComponent.js";

export class RateMask extends RateComponent {
    static classBlock = 'payment-mask'

    constructor($root) {
        super($root)
        this._className = 'mask'
        this._status = 'one' /*'one' - hide, 'two' - 1/3, 'three' - 2/3 */
    }

    set status(val) {
        this._status = val

        const config = {
            one: '0%',
            two: '33.33%',
            three: '66.66%'
        }

        this.$root.style.width = config[val]
    }
}