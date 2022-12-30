export const handleTotalExpense = (cart: []) => {
    return cart.reduce((init, item: any) => init = item.price + init, 0)
}