import React, {useState} from 'react';
import {Container, Offcanvas, Stack} from "react-bootstrap";
import {Button} from '../style';
import BestDeals from "../components/BestDeals";
import {Link} from "react-router-dom";
import background from '../assets/img/img.png';


const Main = () => {
    return (
        <Stack gap={4} className={'text-center'}>
            <Stack gap={4} style={{marginTop: 250, marginBottom: 250}}>
                <h1 style={{fontWeight: 700, fontSize: '3.5rem'}}>TECH HEAVEN UA</h1>
                <p style={{fontSize: 14, color: 'gray', fontWeight: 300, maxWidth: '70%', alignSelf: 'center'}}>
                    Guiding you through the ever-evolving landscape of the future, diligently paving the way for
                    innovation to unfold,
                    as we embark on a transformative journey where cutting-edge solutions and technological marvels
                    seamlessly come together
                    to redefine possibilities and shape the course of progress.
                </p>

                <Container>
                    <Stack gap={2} direction={"horizontal"} className={'justify-content-center'}>
                        <Link to={'/shop/products/product'} style={{ textDecoration: 'none' }}>
                            <Button $dark>Buy Now</Button>
                        </Link>
                        <a className="nav-link" href="#bestDeals"><Button $light>View Best</Button></a>
                    </Stack>
                </Container>
            </Stack>

            <img
                src={background}
                alt={'title'}/>

            <BestDeals/>
        </Stack>
    );
};

export default Main;