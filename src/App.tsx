import 'bootstrap/dist/css/bootstrap.min.css';

import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header";
import {Container, Offcanvas} from "react-bootstrap";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import Main from "./routes/main";
import Shop from "./routes/shop";
import {ShopEnum} from "./enums";
import CreateProduct from "./routes/createProduct";
import Product from "./routes/product";
import Cart from "./components/Cart";
import {Order, ProductType} from "./types";

function App() {
    const [show, setShow] = useState(false);
    const [cart, setCart] = useState<Order[]>([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container fluid style={{paddingLeft: '10%', paddingRight: '10%'}}>
            <Header offcanvasHandleShow={handleShow}/>

            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/createProduct'} element={<CreateProduct/>}/>
                <Route path={'/shop/products/:productId'} element={<Product addToCart={setCart} cart={cart}/>}/>
                <Route path={'/shop/products/product'} element={<Shop productType={ShopEnum.ALL}/>}/>
                <Route path={'/shop/products/vacuumcleaner'} element={<Shop productType={ShopEnum.VACUUMCLEANER}/>}/>
                <Route path={'/shop/products/iron'} element={<Shop productType={ShopEnum.IRON}/>}/>
                <Route path={'/shop/products/washmachine'} element={<Shop productType={ShopEnum.WASHMACHINE}/>}/>
                <Route path={'*'} element={<Main/>}/>
            </Routes>

            <Cart handleClose={handleClose} show={show} cart={cart}/>

            <Footer/>
        </Container>
    );
}

export default App;
