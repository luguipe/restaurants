import { Context } from "@/server/utils";
import { ObjectId } from 'mongodb';


export const shoppingCart = async (_parent, args, {db}: Context) => {
    return await db.shoppingCart.getById(args.id);
}

export const shoppingCartUpdate = async (_parent, args, {db, userId}: Context) => {
    
    if(!userId) {
        throw new Error('Unauthorized');
    }

    const shoppingCart = args.input.id ? 
        await db.shoppingCart.getById(args.input.id) :
        await db.shoppingCart.create({userId, items:[], status: 'OPEN', total: 0, comment: ''})

        console.log(args.input.id);

    if(!shoppingCart) {
        throw new Error('Failed to find or create shopping cart');
    }

    console.log('shoppingCart', shoppingCart);


    // check if menut exists
    const menuItem = await db.menuItem.getById(args.input.menuItemId);

    if(!menuItem) {
        throw new Error('Menu item not found');
    }

    // check if menu is already in the cart
    const existentItem = shoppingCart.items.find(item => item._id === args.input.menuItemId);

    // update  menutItems
    if(!existentItem && args.input.quantity > 0) {
        shoppingCart.items.push({...menuItem, quantity: args.input.quantity});
    }

    // calculate totals 
    const {items, total} = shoppingCart.items.reduce((acc, item) => {
        let quantity = item.quantity;
        
        if(item._id === args.input.menuItemId) {
            if(args.input.quantity === 0) {
                return acc;
            }
            quantity = args.input.quantity;
        }

        acc.items.push({...item, quantity});
        acc.total += item.price * quantity;

        return acc;
    }, {items: [], total: 0});


    // update shopping cart 
    const updatedShooping = {...shoppingCart, total, items};

    
    await db.shoppingCart.update(args.input.id, {items, total});

    return updatedShooping;
}


export const query = {  
    shoppingCart
};

export const mutation = {
    shoppingCartUpdate
};