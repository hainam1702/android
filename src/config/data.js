import products from "./products";

const categories = [
    {
        id: 1,
        title: "Women",
        product: [...products.slice(0, 2)],
    },
    {
        id: 2,
        title: "Man",
        product: [...products.slice(2, 4)],
    },
    {
        id: 3,
        title: "Kids",
        product: [...products.slice(4, 6)],
    },
];

export default categories;