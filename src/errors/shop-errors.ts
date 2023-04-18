
abstract class ShopError extends Error {

    constructor(message: string) {
        super(message);
    }
}

// Stripe

export class FailedToRequestStripeClient extends ShopError {
    constructor() {
        super('FailedToRequestStripeClient: Failed to get stripe client');
    }
}

export class StripeClientIsNull extends ShopError {
    constructor() {
        super('StripeClientIsNull: Stripe client returned in null');
    }
}

export class FailedToRedirectToCheckout extends ShopError {

    reason: Error;

    constructor(reason: Error) {
        super('StripeClientIsNull: Stripe client returned in null');
        this.reason = reason;
    }

}

// Getting available items

export class FailedToQueryForAvailableItems extends ShopError {
    constructor() {
        super('FailedToQueryForAvailableItems: Unable to query for available items');
    }
}

// Getting shop item from database or cache

export class FailedToGetShopItemWithId extends ShopError {

    reason: Error;

    constructor(reason: Error) {
        super(`FailedToGetShopItemWithId: Unable to get shop item by id: ${Error.name}`);
        this.reason = reason;
    }
}

// Request shop item by id from firebase
export class FailedToRequestShopItem extends ShopError {
    constructor() {
        super('FailedToQueryForShopItem: Unable to query for shop items');
    }

}

export class DatabaseDoesNotContainShopIdWithId extends ShopError {

    id: string;

    constructor(id: string) {
        super(`ShopItemWithIdDoesNotExist: Shop item with the following id does not exist in database: ${id}`);
        this.id = id;
    }
}