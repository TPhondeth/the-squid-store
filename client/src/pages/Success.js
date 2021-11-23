import React, { useEffect } from "react";
import { useMutation } from '@apollo/client';
import { ADD_ORDER } from "../utils/mutations";
import { idbPromise } from "../utils/helpers";

function Success() {
    const [addOrder] = useMutation(ADD_ORDER);

    useEffect(() => {
        async function saveOrder() {
        const cart = await idbPromise('cart', 'get');
        const products = cart.map(item => item._id);
        
        if (products.length) {
            const { data } = await addOrder({ variables: { products } });
            const productData = data.addOrder.products;
        
            productData.forEach((item) => {
            idbPromise('cart', 'delete', item);
            });
        }
            
        setTimeout(() => {
            window.location.assign('/');
        }, 3000);
        }

        saveOrder();
    }, [addOrder]);

    return (
        <div>
        {/* <Jumbotron> */}
            <h3>THANK YOU!</h3>
            <h3>
                Your order will be shipped within the next 48hrs!
            </h3>
            <h3>
                You are now being redirected to the home page!
            </h3>
        {/* </Jumbotron> */}
        </div>
    );
};

export default Success;