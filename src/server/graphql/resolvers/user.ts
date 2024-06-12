    
    
// TODO: define resolvers type
const users = async (parent, args, context) => context.dataSources.users.getAllUsers();

const createUser = async (parent, args, context) => {
    const { insertedId } = await context.dataSources.users.createUser(args.input);

    return {
        ...args.input,
        _id: insertedId
    }
}



export const query = {  
    users
};

export const mutation = {
    createUser
};