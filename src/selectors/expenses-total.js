export default (expenses) => {
    const arrayOfValues = expenses.map((item) => {
        return item.amount;
    });

    const total = arrayOfValues.reduce((sum, value) => {
        return sum + value;
    }, 0);

    return total;
}