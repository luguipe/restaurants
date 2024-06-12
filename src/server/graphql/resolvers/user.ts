    
    
const users = async (parent, args, context, info) => [
    {
        id: "1",
        firstName: "Luiz",
        lastName: "Perez",
        email: "luiz@test.com",
        age: 30,
        active: true
    },
    {
        id: "2",
        firstName: "Pedro",
        lastName: "Boss",
        email: "pedro@boss.com",
        age: 25,
        active: true
    }
];



export const query = {  
    users
};