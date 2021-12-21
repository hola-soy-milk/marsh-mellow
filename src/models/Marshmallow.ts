import CartItemType from "./CartItemType";

export abstract class Marshmallow extends CartItemType {}

class Fluffy extends Marshmallow {
    priceCents() {
        return 99;
    }
    name() {
        return "Caramelo";
    }
}

class NotSoFluffy extends Marshmallow {
    priceCents() {
        return 199;
    }
    name() {
        return "Chocolate";
    }
}

class ExtraFluffy extends Marshmallow {
    priceCents() {
        return 499;
    }
    name() {
        return "Mazapán";
    }
}

export const availableMarshmallows = [
    new Fluffy(),
    new NotSoFluffy(),
    new ExtraFluffy()
]