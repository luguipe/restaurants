const restaurants = async (parent, args, context, info) => [
    {
        id: "1",
        name: "DokoDemo",
        location: "1234 Main St",
        cuisine: "Fast Food",
        openningTime: "08:00",
        closingTime: "22:00",
        active: true
    },
    {
        id: "2",
        name: "Grassfed",
        location: "5678 Elm St",
        cuisine: "Fast Food",
        openningTime: "08:00",
        closingTime: "22:00",
        active: true
    }
];

const createRestaurant = async (parent, args, context, info) => {};


export const query = {  
    restaurants
};  

export const mutation = {
    // createRestaurant
};