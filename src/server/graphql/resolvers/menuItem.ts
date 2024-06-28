const menuItem = async (parent, args, context, info) => [
    {
        id: "1",
        name: "Spaghetti Carbonara",
        description: "Classic Italian pasta with pancetta, egg, and cheese.",
        cuisine: "Italian",
        price: 12.99,
        active: true
    }
];

const createDish = async (parent, args, context, info) => {};


export const query = {  
    menuItem
};  

export const mutation = {
    // createDish
};