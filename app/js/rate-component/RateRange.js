export class RateRange {
    constructor() {
        this._className = 'range'
        this._currentRate = 'rate1'
        this.elem = null
    }

    get config() {
        return {
            rate1: {
                name: 'start',
                cost: '990',
            },
            rate2: {
                name: 'medium',
                cost: '1990',
            },
            rate3: {
                name: 'pro',
                cost: '2990',
            },
            rate4: {
                name: 'business',
                cost: '3990',
            },
            rate5: {
                name: 'individual',
                cost: '4990',
            },
        }
    }

    defineElem() {
        let {one, three} = this.components.slides.slides

        return {
            range: one.querySelector('#payRange'),
            input: one.querySelector('.payment_input-visitors input'),
            nameRate: {
                nameS1: one.querySelector('.payment_choosed-tarif span'),
                nameS3: three.querySelector('.payment_choosed-tarif-s3')
            },
            costRate: {
                baseCost: one.querySelector('.payment_base-cost span')
            }
        }
    }

    set currentRate(rateName) {
        this._currentRate = rateName
        this.updateData(rateName)
    }

    defineRate(val, type) {
        let {range, input} = this.elem

        switch (true) {
            case type === 'input'
                ? val <= 10000
                : val <= 100:
                this.currentRate = 'rate1'
                type === 'input'
                    ? range.value = val / 100
                    : input.value = val * 100
                break;

            case type === 'input'
                ? val > 10000 && val <= 50000
                : val > 100 && val <= 200:
                this.currentRate = 'rate2'
                type === 'input'
                    ? range.value = ((val - 10000) / 400) + 100
                    : input.value = ((val - 100) * 400) + 10000
                break;

            case type === 'input'
                ? val > 50000 && val <= 150000
                : val > 200 && val <= 300:
                this.currentRate = 'rate3'
                type === 'input'
                    ? range.value = ((val - 50000) / 1000) + 200
                    : input.value = ((val - 200) * 1000) + 50000
                break;

            case type === 'input'
                ? val > 150000 && val <= 300000
                : val > 300 && val <= 400:
                this.currentRate = 'rate4'
                type === 'input'
                    ? range.value = ((val - 150000) / 1500) + 300
                    : input.value = ((val - 300) * 1500) + 150000
                break;

            case type === 'input'
                ? val > 300000
                : val > 400:
                this.currentRate = 'rate5'
                type === 'input'
                    ? range.value = 401
                    : input.value = '300000+'
                break;
        }
    }

    updateData(rateName) {
        let {one, three} = this.components.slides.slides
        let {name, cost} = this.config[rateName]
        let {nameRate: {nameS1, nameS3}, costRate: {baseCost}} = this.elem

        nameS1.innerText = name
        nameS3.innerText = name
        baseCost.innerText = cost
    }

    init() {
        this.elem = this.defineElem()
        this.activeRange()
    }

    activeRange() {
        let {one} = this.components.slides.slides

        let range = one.querySelector('#payRange')
        let input = one.querySelector('.payment_input-visitors input')

        range.oninput = e => {
            this.defineRate(e.target.value, 'range')
        }

        input.oninput = e => {
            this.defineRate(e.target.value, 'input')
        }
    }
}