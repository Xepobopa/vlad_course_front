import React, {useEffect, useState} from 'react';
import {Container, Row, Stack} from "react-bootstrap";
import Card from "./Card";
import {ProductType} from "../types";
import axios from "axios";
import {ProductList} from "../style";

const BestDeals = () => {
    const [products, setProducts] = useState<ProductType[]>([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/products/best`)
            .then(res => {
                const arr: any[] = [];
                res.data.map((elem: any) => arr.push(elem));
                setProducts(arr);
            })
    }, []);

    return (
        <div>
            <Container fluid className={'text-start'} style={{padding: 0}}>
                <Stack gap={3}>
                    <Row>
                        <h3 style={{fontWeight: '700'}} id={'bestDeals'}>Best Deals</h3>
                        <p>The coolest, hottest furniture pieces.</p>
                    </Row>
                    {/*Deals*/}
                    <ProductList>
                        {
                            products.map(prod => {
                                console.log(prod)
                                return <Card
                                    id={prod.uuid}
                                    title={prod.title}
                                    price={prod.price}
                                    imgSrc={prod.photo}
                                    discount={prod.discount}/>
                            })
                        }
                    </ProductList>

                </Stack>
            </Container>
        </div>
    )
        ;
};

export default BestDeals;