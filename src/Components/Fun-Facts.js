import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Row, Col } from "react-bootstrap";
import { BsHeart } from "react-icons/bs";
import { FiWatch  } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";
import { BiCoffeeTogo } from "react-icons/bi";
function FunFacts() {
    return (
        <div className="fun-facts">
            <div id="title">
                <h5>Fun Facts</h5>
                <div id="progress-bar">
                    <ProgressBar now={60} />
                </div>
            </div>
            <div className="fun-item">
                <Row>
                    <Col>
                        <div className="fun-container">
                            <div className="fun-icon">
                                <BsHeart />
                            </div>
                            <b>Happy Clients</b>
                            <div className="numbers">
                                <h1>578</h1>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="fun-container">
                            <div className="fun-icon">
                                <FiWatch />
                            </div>
                            <b>Working Hours</b>
                            <div className="numbers">
                                <h1>4,780</h1>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="fun-container">
                            <div className="fun-icon">
                                <AiOutlineStar/>
                            </div>
                            <b>Awards Won</b>
                            <div className="numbers">
                                <h1>15</h1>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="fun-container">
                            <div className="fun-icon">
                                <BiCoffeeTogo/>
                            </div>
                            <b>Coffee Consumed</b>
                            <div className="numbers">
                                <h1>1,286</h1>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default FunFacts;