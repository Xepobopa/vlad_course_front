import React, {useState} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import {Col, Container, Row, Stack} from "react-bootstrap";
import logo from "../assets/img/dark-logo.png";
import {ReactComponent as Facebook} from '../assets/img/facebook.svg';
import {ReactComponent as Youtube} from '../assets/img/youtube.svg';
import {ReactComponent as Dev} from '../assets/img/dev.svg';
import {Button, Input, LineDiver} from "../style";
import {toast, ToastContainer} from "react-toastify";

const Footer = () => {
    const notify = (email: string) => toast(`User ${email} has been subscribed!`, { type: 'success' })
    const [email, setEmail] = useState('');

    return (
        <div style={{backgroundColor: '#e0edf4', position: 'absolute', right: 0, left: 0}} className={'mt-5'}>
            <Container fluid style={{paddingTop: "3rem", paddingBottom: '3rem', paddingLeft: '10%', paddingRight: '10%'}}>
                <Stack gap={3}>
                    <Row>
                        <Col>
                            <img src={logo} height={'55px'} width={'110px'} alt={'logo'}/>
                        </Col>
                        <Col>
                            <h5 style={{fontWeight: '700'}}>Shopping</h5>
                            <p>All Products</p>
                            <p>Vacuum cleaner</p>
                            <p>Iron</p>
                            <p>Washing machine</p>
                        </Col>
                        <Col>
                            <h5 style={{fontWeight: '700'}}>Our Social Media</h5>
                            <a href={'https://www.facebook.com/'} target="_blank">
                                <Facebook fill={'#212529'} height={40} width={40} style={{display: "block"}}/>
                            </a>
                            <a href={'https://www.youtube.com/'} target="_blank">
                                <Youtube fill={'#212529'} height={40} width={40} style={{display: "block"}}/>
                            </a>
                            <a href={'https://dev.to/'} target="_blank">
                                <Dev fill={'#212529'} height={40} width={40} style={{display: "block"}}/>
                            </a>
                        </Col>
                        <Col>
                            <h5 style={{fontWeight: '700'}}>Subscribe</h5>
                            <p>Join our newsletter to stay up to date on new features and releases.</p>
                            <Row>
                                <Stack gap={2} direction={"horizontal"}>
                                    <Input onChange={e => setEmail(e.target.value)}/>
                                    <Button onClick={() => notify(email)} $dark>Subscribe</Button>
                                </Stack>
                            </Row>
                        </Col>

                        <LineDiver/>

                        <Row className={'mt-3'}>
                            <p>Created by: <b>Iorin Vladislav</b></p>
                        </Row>
                    </Row>
                </Stack>
            </Container>
            <ToastContainer/>
        </div>
    );
};

export default Footer;