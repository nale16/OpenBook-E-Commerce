import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import { getCart } from "./cartHelpers";
import Card from "./Card";
import Checkout from './Checkout';;
const Cart = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(getCart());
    }, [items]);

    const showItems = items => {
        return (
            <div>
                <h2>Your cart has {`${items.length}`} items</h2>
                <hr />
                {items.map((product, i) => (
                    <Card key={i} removeButton={true} cartButton={false} cartUpdate={true} product={product} />
                ))}
            </div>
        );
    };

    const noItemsMessage = () => (
        <h2>
            Your cart is empty. <br /> <Link to="/shop">Continue shopping</Link>
        </h2>
    );

    return (
        <Layout
            title="Shopping Cart"
            description="Manage your cart items. Add remove checkout or continue shopping."
            className="container-fluid"
        >
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-8 col-xs-12">
                    {items.length > 0 ? showItems(items) : noItemsMessage()}
                </div>

                <div className="col-lg-6 col-md-6 col-sm-8 col-xs-12">
                    <h3>Checkout</h3>
                    <hr/>
                    <Checkout products={items} />
                </div>
            </div>
        </Layout>
    );
};

export default Cart;