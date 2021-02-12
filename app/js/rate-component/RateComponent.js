export class RateComponent {
    constructor($root) {
        this.$root = $root
        this._components = null
    }

    set components(val) {
        if (this._components !== null) return
        this._components = val
    }

    get components() {
        return this._components
    }

    toHTML() {
        return ''
    }

    init() {
        return true
    }
}