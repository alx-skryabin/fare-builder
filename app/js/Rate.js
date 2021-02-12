import {RateBuilder} from "./rate-component/RateBuilder.js"
import {RateMask} from "./rate-component/RateMask.js"
import {Slides} from "./rate-component/Slides.js"
import {RateRange} from "./rate-component/RateRange.js"

const ModuleRate = [RateMask, RateBuilder, Slides, RateRange]

export class Rate {
    constructor(selector) {
        this.$root = document.querySelector(selector);
        this.components = {};
    }

    getBlocks() {
        return this.components = ModuleRate.reduce((all, Component) => {
            let component = null

            if (Component.classBlock) {
                const $el = document.createElement('div', Component.classBlock)
                $el.classList.add(Component.classBlock)
                component = new Component($el)

                $el.innerHTML = component.toHTML()
                this.$root.append($el)
            }
            else component = new Component()

            return {...all, [component._className]: component}
        }, {})
    }

    render() {
        Object.values(this.getBlocks())
            .map(item => {
                item.components = this.components
                return item
            })
            .map(item => item.init())
    }
}