import React, {useState} from 'react';
import {Col, Container, FormSelect, Row, Stack} from "react-bootstrap";
import {Button, Input, LineDiver} from "../style";
import Card from "../components/Card";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";

const CreateProduct = () => {
    const notify = (type: 'success' | 'error' | 'warning', message: string) => toast(message, {type})
    const [title, setTitle] = useState<string>('');
    const [url, setUrl] = useState<string>('');
    const [desc, setDesc] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
    const [discount, setDiscount] = useState<number>(0);
    const [type, setType] = useState<string>('');

    const createProduct = () => {
        if (!type) {
            notify("warning", 'Cant create a Product! Please, choose you product type');
            return;
        }

        axios.post('http://localhost:5000/products', {
            price,
            discount,
            desc,
            title,
            type,
            photo: url
        })
            .then(res => notify('success', `Created a new product with id: ${res.data.uuid}`))
            .catch(err => {
                notify('error', `Error: ${err.message}`)
                console.log(err);
            })
    }

    return (
        <Container fluid>
            <Stack gap={4} className={'mt-5'}>
                <Row>
                    <h1 style={{fontWeight: '700', fontSize: 60}}>Create New Product</h1>
                    <p style={{color: 'rgba(0, 0, 0, 0.6)', fontSize: 20, maxWidth: 1000}}>
                        Explore our curated collection, find your favorites, and indulge in a seamless shopping
                        experience.
                        Happy shopping!
                    </p>

                </Row>

                <LineDiver/>

                <Row>
                    <Col>
                        <Stack gap={4}>
                            <Stack gap={2} direction={"horizontal"} className={'align-items-center'}>
                                <h3 style={{fontWeight: '600', margin: 0}}>Type</h3>
                                <FormSelect style={{maxWidth: 275}}
                                            onChange={e => setType(e.target.value)}>
                                    <option value={''}>Choose your product type</option>
                                    <option value={'vacuumcleaner'}>Vacuum Cleaner</option>
                                    <option value={'iron'}>Iron</option>
                                    <option value={'washmachine'}>Washing Machine</option>
                                </FormSelect>
                            </Stack>
                            <Stack gap={2} direction={"horizontal"} className={'align-items-center'}>
                                <h3 style={{fontWeight: '600', margin: 0}}>Product Title</h3>
                                <Input
                                    $border
                                    placeholder={'Vacuum clearer'}
                                    onChange={e => setTitle(e.target.value)}/>
                            </Stack>
                            <Stack gap={2} direction={"horizontal"} className={'align-items-center'}>
                                <h3 style={{fontWeight: '600', margin: 0}}>Description</h3>
                                <Input $border placeholder={'This Vacuum cleaner is awesome!'}
                                       onChange={e => setDesc(e.target.value)}/>
                            </Stack>
                            <Stack gap={2} direction={"horizontal"} className={'align-items-center'}>
                                <h3 style={{fontWeight: '600', margin: 0}}>Photo</h3>
                                <Input $border placeholder={'https://google.com/photo.png'}
                                       onChange={e => setUrl(e.target.value)}/>
                            </Stack>
                            <Stack gap={2} direction={"horizontal"} className={'align-items-center'}>
                                <h3 style={{fontWeight: '600', margin: 0}}>Price</h3>
                                <Input
                                    $border
                                    $maxWidth={"150px"}
                                    type={'number'}
                                    placeholder={"100"}
                                    onChange={e => setPrice(Number(e.target.value))}/>
                            </Stack>
                            <Stack gap={2} direction={"horizontal"} className={'align-items-center'}>
                                <h3 style={{fontWeight: '600', margin: 0}}>Discount</h3>
                                <Input
                                    $border
                                    $maxWidth={"150px"}
                                    type={'number'}
                                    placeholder={"80"}
                                    onChange={e => setDiscount(Number(e.target.value))}/>
                            </Stack>
                            <p>Note! Write new price with discount. So if price 100$ and discount 20% - it will be
                                80$</p>
                        </Stack>

                        <Button $dark style={{float: 'left'}} onClick={() => createProduct()}>Create</Button>
                    </Col>
                    <Col>
                        <Row>
                            <h2 style={{fontWeight: '600'}}>Your product</h2>
                            <Card id={''} title={title} imgSrc={url} price={price} discount={discount} desc={desc}/>
                        </Row>
                    </Col>
                </Row>
            </Stack>
            <ToastContainer/>
        </Container>
    );
};

export default CreateProduct;