import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Row, Col } from "react-bootstrap";
function Testimonials() {
    return (
        <div className="Testimonials">
            <div id="title">
                <h5>Testimonials</h5>
            </div>
            <div id="progress-bar">
                <ProgressBar now={60} />
            </div>
            <div className="Testimonials-item">
                <Row>
                    <Col>
                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" />
                        <div className="Testimonials-data">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sunt neque culpa similique eligendi fugiat quia explicabo quisquam voluptatem consectetur at dicta ullam, ducimus temporibus et dolores inventore eum repudiandae.</p>
                            <div className="Testimonials-name">
                            <b>Billy Adams</b>
                            </div>
                            <p>Rolling Thunder</p>
                        </div>
                    </Col>
                    <Col>
                        <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" />
                        <div className="Testimonials-data">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sunt neque culpa similique eligendi fugiat quia explicabo quisquam voluptatem consectetur at dicta ullam, ducimus temporibus et dolores inventore eum repudiandae.</p>
                            <div className="Testimonials-name">
                            <b>Gary Johnson</b>
                            </div>
                            <p>Locost Accessories</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Testimonials;