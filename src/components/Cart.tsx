import React, {useEffect, useState} from 'react';
import {Col, Offcanvas, Stack} from "react-bootstrap";
import {Order} from "../types";
import CartCard from "./CartCard";
import {Button} from "../style";

type CartProps = {
    handleClose: () => void,
    show: boolean,
    cart: Order[]
}

const Cart = ({handleClose, show, cart}: CartProps) => {
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        // Calculate the total whenever the cart prop changes
        const newTotal = cart.reduce((acc, order) => acc + (order.discount * order.quantity), 0);
        setTotal(newTotal);
    }, [cart]);

    return (
        <div>
            <Offcanvas show={show} onHide={handleClose} placement={'end'}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title><h2 style={{fontWeight: '700'}}>Your Cart</h2></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {
                        cart.map(order => {
                            return <>
                                <CartCard
                                    id={order.id}
                                    title={order.title}
                                    imgSrc={order.photo}
                                    discount={order.discount}
                                    quantity={order.quantity}/>
                            </>
                        })
                    }

                    <Stack gap={3} direction={'horizontal'} style={{
                        backgroundColor: '#e0edf4',
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        left: 0,
                        padding: 10,
                        display: 'flex',
                        justifyContent: 'space-between', // Align items to the start and end of the container
                    }}>
                        <Col>
                            <h4>Subtotal: <h3 style={{fontWeight: 700}}>${total}</h3></h4>
                            <Button className={'text-center'} $dark>Checkout</Button>
                        </Col>
                    </Stack>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};

export default Cart;