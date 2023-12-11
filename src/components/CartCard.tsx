import React, {FunctionComponent} from 'react';
import {Col, Row, Stack} from "react-bootstrap";
import {Input} from "../style";

type CartCardProps = {
    id: string,
    title: string,
    imgSrc: string,
    discount: number,
    quantity: number
}

const CartCard: FunctionComponent<CartCardProps> = ({id, imgSrc, title, discount, quantity}) => {
    return (
        <Stack gap={1}>
            <Row className={'d-flex'}>
                <img src={imgSrc} style={{width: "6.5rem", objectFit: "contain"}}/>
                <Col>
                    <p>$ {discount.toString()} USD</p>
                    <h5 style={{fontWeight: '600'}}>{title}</h5>
                    <Input $border min={1} value={quantity} type={'number'} disabled $maxWidth={'100px'}/>
                </Col>
            </Row>
        </Stack>
    );
};

export default CartCard;