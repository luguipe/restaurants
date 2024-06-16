import { Context, compareHash, createHash } from "@/server/utils";


    
    
// TODO: define resolvers type
const users = async (parent, args, context) => context.dataSources.users.getAllUsers();




const userSignUp = async (parent, args, {db}: Context) => {
     
     const existentUser = await db.users.getUserByEmail(args.input.email);

     if(existentUser) {
        throw new Error('User already exists');
     }

     //create pwd hash
     const hash = createHash(args.input.password);

     // In a real scenario, the user should be sent an email with a link to activate the account
     const active = true;
      

    const { insertedId } = await db.users.createUser({...args.input, password: hash, active});

    return {
        ...args.input,
        _id: insertedId
    }
}

const userSignIn = async (parent, args, {db}: Context) => {
    const registeredUser = await db.users.getUserByEmail(args.input.email);
    const errorMessage = 'Email/password invalid'

    if(!registeredUser) {
        console.log('User not found');
        throw new Error(errorMessage);
    }

    const isPasswordValid = compareHash(args.input.password, registeredUser.password);

    if(!isPasswordValid) {
        console.log('Password invalid');
        throw new Error(errorMessage);
    }

    if(!registeredUser.active) {
        throw new Error('User is not active');
    }

    return {
        ...registeredUser,
        password: undefined
    }

};


export const query = {  
    users
};

export const mutation = {
    userSignUp,
    userSignIn
};