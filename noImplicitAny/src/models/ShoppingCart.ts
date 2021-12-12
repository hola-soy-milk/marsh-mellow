export default class ShoppingCart {
    items?: any[];

    constructor() {
        this.items = [];
    }

    addItem(item: any) {
        this.items = [...this.items, item]
        return this;
    }

    total() {
        return this.items.reduce((x, y) => x + y.priceCents, 0);
    }
}