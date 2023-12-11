import React, {FunctionComponent} from 'react';
import {Row, Stack} from "react-bootstrap";
import {Link} from "react-router-dom";

type CardProps = {
    id: string,
    title: string,
    imgSrc: string,
    price: number,
    discount: number,
    desc?: string
}

const Card: FunctionComponent<CardProps> = ({id, imgSrc, price, title, discount, desc}) => {
    return (
        <Link to={id ? `/shop/products/${id}` : ''} style={{color: '#212529', textDecoration: "none"}}>
            <Stack gap={2}>
                <Row>
                    <img src={imgSrc} style={{height: "23rem", width: "20rem", objectFit: "cover"}}/>
                </Row>
                <Row>
                    {
                        discount ?
                            <>
                                <p style={{textDecoration: 'line-through', fontSize: 14}}>$ {price.toString()} USD</p>
                                <p style={{color: 'rgba(0, 0, 255, 0.3)', fontSize: 19, fontWeight: '500'}}>$ {discount.toString()} USD</p>
                            </>
                            :
                            <p>$ {price.toString()} USD</p>
                    }
                    <h5 style={{fontWeight: '600'}}>{title}</h5>
                    <p>{desc}</p>
                </Row>
            </Stack>
        </Link>
    );
};

export default Card;