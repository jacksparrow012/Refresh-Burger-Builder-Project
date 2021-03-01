const INGREDIENT_PRICES = {
    salad: 20,
    cheese: 40,
    meat: 90
}

const INITIAL_STATE = {
    ingredients: [
        { type: "salad", amount: 0 },
        { type: "cheese", amount: 0 },
        { type: "meat", amount: 0 }
    ],
    totalPrice: 80,
    purchasable: false
};

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
}