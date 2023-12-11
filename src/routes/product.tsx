import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {Order, ProductType} from "../types";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import {Accordion, Breadcrumb, Col, Container, Row, Stack} from "react-bootstrap";
import {Button, Input} from "../style";

type ProductProps = {
    addToCart: (order: Order[]) => void,
    cart: Order[]
}

const Product = ({addToCart, cart}: ProductProps) => {
    const notify = (type: 'success' | 'error' | 'warning', message: string) => toast(message, {type})
    const [product, setProduct] = useState<ProductType>(null!);
    const [quantity, setQuantity] = useState<number>(1);
    const params = useParams();
    const navigate = useNavigate();
    const id = params?.productId;

    useEffect(() => {
        axios.get(`http://localhost:5000/products/${id}`)
            .then(res => {
                setProduct(res.data);
                console.log(res.data)
            })
            .catch(err => notify('error', `Can't find user with id '${id}'`))
    }, []);

    function capitalize(string: string) {
        if (!string)
            return ''
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const deleteProduct = (id: string | undefined) => {
        if (!id)
            return;
        axios.delete(`http://localhost:5000/products/${id}`)
            .then(res => notify('success', `Product has been successful deleted!`));
        navigate(-1);
    }

    const handleSubmit = () => {
        addToCart([...cart, {...product, quantity}]);
    }

    const onQuantityChange = (value: string) => {
        setQuantity(Number(value))
    }

    return (
        <Container fluid>
            <Row className={'mt-5'}>
                <Breadcrumb>
                    <Breadcrumb.Item href="/" style={{color: '#333', textDecoration: "none"}}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item
                        href={`/shop/products/${product?.type}`}
                        style={{color: '#333', textDecoration: "none"}}>
                        {capitalize(product?.type)}
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active style={{
                        color: '#4f4f4f',
                        textDecoration: "none"
                    }}>{product?.title}</Breadcrumb.Item>
                </Breadcrumb>
            </Row>
            <Stack gap={4} direction={'horizontal'} style={{alignItems: 'normal'}}>
                <Col>
                    <Row>
                        <img src={product?.photo} style={{width: '40rem'}}/>
                    </Row>
                </Col>
                <Col>
                    <Stack direction={'horizontal'} style={{justifyContent: 'space-between'}}>
                        <h1 style={{fontWeight: 700}}>{product?.title}</h1>
                        <Button $dark onClick={() => deleteProduct(id)}>Delete</Button>
                    </Stack>
                    {
                        product?.discount ?
                            <>
                                <p style={{
                                    textDecoration: 'line-through',
                                    fontSize: 16
                                }}>$ {product?.price?.toString()} USD</p>
                                <p style={{
                                    color: 'rgba(0, 0, 255, 0.3)',
                                    fontSize: 21,
                                    fontWeight: '700'
                                }}>$ {product?.discount?.toString()} USD</p>
                            </>
                            :
                            <p>$ {product?.price.toString()} USD</p>
                    }
                    <h5>{product?.desc}</h5>

                    <h5 className={'mt-4'}>Quantity</h5>
                    <Input $border $maxWidth={"100px"} type={'number'} placeholder={"1"} min={1}
                           onChange={(e) => onQuantityChange(e.target.value)}/>

                    <Button $dark className={'mt-3 text-center'} onClick={handleSubmit}>Add to card</Button>

                    <Accordion flush className={'mt-4'}>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h6 style={{fontWeight: '600'}}>Shipping</h6></Accordion.Header>
                            <Accordion.Body>
                                We understand that getting your purchases promptly is essential. Here's what you need to
                                know about our shipping process:

                                Shipping Options
                                Choose the shipping option that best suits your needs during the checkout process. We
                                offer a range of shipping methods to accommodate different timelines and budgets.

                                Processing Time
                                Our team works diligently to process and dispatch orders as quickly as possible. Please
                                allow 1-2 business days for order processing before your items are shipped.

                                Estimated Delivery Times
                                The estimated delivery times vary based on your location and the shipping method
                                selected. You can view the estimated delivery date during the checkout process.

                                Order Tracking
                                Once your order is shipped, you'll receive a confirmation email with tracking
                                information. Use this information to track your package and stay informed about its
                                delivery status.

                                International Shipping
                                We offer international shipping to bring our products to customers around the world.
                                International shipping times may vary, so please check the estimated delivery date
                                during checkout.

                                Shipping Costs
                                Shipping costs are calculated based on the selected shipping method and your delivery
                                address. You can view the shipping costs before completing your purchase.

                                Contact Us
                                If you have any questions or concerns about shipping, feel free to contact our customer
                                support team. We're here to help make your shopping experience seamless.

                                Thank you for choosing us for your shopping needs!
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header><h6 style={{fontWeight: '600'}}>Returns</h6></Accordion.Header>
                            <Accordion.Body>
                                We want you to love your purchase, but we understand that sometimes things don't work
                                out as planned. If you need to return an item, we've made the process simple and
                                straightforward.

                                Return Policy
                                Our return policy allows you to return items within 30 days of receiving your order. To
                                be eligible for a return, the item must be unused and in the same condition that you
                                received it. It must also be in the original packaging.

                                Initiate a Return
                                To initiate a return, log in to your account and go to the order history section. Select
                                the item you wish to return and follow the provided instructions. If you checked out as
                                a guest, please contact our customer support to initiate the return process.

                                Return Shipping
                                Customers are responsible for return shipping costs unless the return is due to a defect
                                or an error on our part. We recommend using a trackable shipping service to ensure your
                                return is received.

                                Refund Process
                                Once your return is received and inspected, we will send you an email to notify you that
                                we have received your returned item. If the return is approved, your refund will be
                                processed, and a credit will automatically be applied to your original method of
                                payment.

                                Exchanges
                                If you need to exchange an item for a different size or color, please initiate a return
                                for the original item and place a new order for the desired item.

                                Contact Us
                                If you have any questions or need assistance with the return process, contact our
                                customer support. We're here to help make your return experience hassle-free.

                                Thank you for shopping with us!
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><h6 style={{fontWeight: '600'}}>Policy</h6></Accordion.Header>
                            <Accordion.Body>
                                Protecting your privacy is important to us. Our Privacy Policy outlines how we collect,
                                use, disclose, and manage your personal information. We encourage you to review our
                                Privacy Policy to understand how your data is handled.

                                Terms of Service
                                By using our website, you agree to abide by our Terms of Service. This includes terms
                                and conditions related to your use of the site, product purchases, and interactions with
                                our services. Please read our Terms of Service carefully.

                                Shipping Policy
                                Learn about our shipping procedures, estimated delivery times, and shipping costs by
                                reviewing our Shipping Policy. We aim to provide clear information about our shipping
                                process to ensure a smooth shopping experience.

                                Return and Refund Policy
                                Our Return and Refund Policy details the process for returning items, eligibility
                                criteria, and how refunds are processed. We want you to be satisfied with your purchase,
                                and our return policy is designed to make the process easy for you.

                                Cookies Policy
                                We use cookies to enhance your browsing experience. Our Cookies Policy explains how we
                                use cookies and similar technologies on our site. By continuing to use our website, you
                                consent to the use of cookies as outlined in this policy.

                                Contact Us
                                If you have any questions or concerns about our policies, please don't hesitate to
                                contact our customer support. We're here to assist you and ensure that your experience
                                with us is positive.

                                Thank you for choosing us for your shopping needs. Your satisfaction is our priority!
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Stack>
            <ToastContainer/>
        </Container>
    );
};

export default Product;