export default class ShoppingCart {
    items?;

    constructor() {
        this.items = [];
    }

    addItem(item) {
        if (this.items !== undefined) {
            this.items = [...this.items, item]
        }
        return this;
    }

    groupedItems() {
        if (this.items) {
            return this
        } else {
            return [];
        }
        
    }

    total() {
        if (this.items) {
            return this.items.reduce((x, y) => x + y.priceCents(), 0);
        } else {
            return 0;
        }
    }
}