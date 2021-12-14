export default class ShoppingCart {
    items?: any[];

    constructor() {
        this.items = [];
    }

    addItem(item: any): any {
        if (this.items !== undefined) {
            this.items = [...this.items, item]
        }
        return this;
    }

    total(): any {
        if (this.items !== undefined) {
            return this.items.reduce((x, y) => x + y.priceCents, 0);
        } else {
            return 0;
        }
    }
}