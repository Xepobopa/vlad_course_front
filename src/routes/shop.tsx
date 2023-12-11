import React, {useEffect, useState} from 'react';
import {Col, Container, Row, Stack} from "react-bootstrap";
import {Button, LineDiver, ProductList} from "../style";
import {Link} from "react-router-dom";
import {ShopEnum} from "../enums";
import axios from "axios";
import Card from "../components/Card";
import {ProductType} from "../types";

type ShopProps = {
    productType: ShopEnum;
}

const Shop = ({productType}: ShopProps) => {
    const [products, setProducts] = useState<ProductType[]>([]);

    useEffect(() => {
        console.log(productType)
        axios.get(`http://localhost:5000/products/get/?type=${productType}`)
            .then(res => {
                const arr: any[] = [];
                res.data.map((elem: any) => arr.push(elem));
                setProducts(arr);
            })
    }, [productType]);

    return (
        <Container fluid>
            <Stack gap={4} className={'mt-5'}>
                <Row>
                    <h1 style={{fontWeight: '700', fontSize: 60}}>Let's Get Shopping</h1>
                    <p style={{color: 'rgba(0, 0, 0, 0.6)', fontSize: 20, maxWidth: 1000}}>
                        Explore our curated collection, find your favorites, and indulge in a seamless shopping
                        experience.
                        Happy shopping!
                    </p>

                    <Stack gap={3} direction={'horizontal'}>
                        <Link
                            to={'/shop/products/product'}
                            style={{textDecoration: 'none'}}>
                            <Button $productType={ShopEnum.ALL} $buttonTitle={productType}>All Products</Button>
                        </Link>
                        <Link
                            to={'/shop/products/vacuumcleaner'}
                            style={{textDecoration: 'none'}}>
                            <Button $productType={ShopEnum.VACUUMCLEANER} $buttonTitle={productType}>Vacuum cleaner</Button>
                        </Link>
                        <Link
                            to={'/shop/products/iron'}
                            style={{textDecoration: 'none'}}>
                            <Button $productType={ShopEnum.IRON} $buttonTitle={productType}>Iron</Button>
                        </Link>
                        <Link
                            to={'/shop/products/washmachine'}
                            style={{textDecoration: 'none'}}>
                            <Button $productType={ShopEnum.WASHMACHINE} $buttonTitle={productType}>Washing machine</Button>
                        </Link>
                    </Stack>
                </Row>

                <LineDiver/>

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
    );
};

export default Shop;