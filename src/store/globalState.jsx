import storeContext from "./storeContext"
import { useState } from 'react';
import Product from './../components/product';

const GlobalState = (props) => {
    
    const [myCart, setMyCart] = useState([]);
    const [theUser, setTheUser] = useState({});

    const myAddToCart = (product) =>{

        let copy = [...myCart];
        copy.push(product);
        setMyCart(copy);

    };

    const myremoveProductFromCart = (productId) => {

    };

    return(

        <storeContext.Provider 

        value={{
    
            cart: myCart,
            user:theUser,
            addProductToCart: myAddToCart,
            removeProductFromCart: myremoveProductFromCart
    
        }}>
    
            {props.children}
    
        </storeContext.Provider>
    
    );

};

export default GlobalState;