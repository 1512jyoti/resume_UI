import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Row, Col } from "react-bootstrap";
function Clients() {
    return (
        <div className="Clients">
            <div id="title">
                <h5>Clients</h5>
                <div id="progress-bar">
                    <ProgressBar now={60} />
                </div>
            </div>
            <div className="Clients-item">
                <Row>
                    <Col>
                    <b>GOLDEN</b>GRID 
                    </Col>
                    <Col>
                    <b>SWEETY</b> 
                    </Col>
                    <Col>
                    <b>MAGIC FURNITURES</b>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Clients;




