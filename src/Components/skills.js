import React from "react";
import { Row, Col } from "react-bootstrap";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { TiPencil } from "react-icons/ti";
import { AiOutlineShop } from "react-icons/ai";
import { RiComputerLine } from "react-icons/ri";
import { TbSpeakerphone } from "react-icons/tb";

function Skills() {
    return (
        <div className="skills">
            <h5>What I Do</h5>
            <div id="progress-bar">
                <ProgressBar now={60} />
            </div>
            <div className="skills-name">
                <Row>
                    <Col>
                        <div className="skill-detail">
                            <div className="skill-icon">
                                <TiPencil />
                            </div>
                            <h6>Copywrite</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus vero quia recusandae, totam molestiae temporibus magni? Assumenda doloribus debitis cupiditate quibusdam dolorum vero laudantium atque molestiae, omnis vitae sequi beatae voluptate corporis quae optio magni inventore numquam rem nihil voluptates.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="skill-detail">
                            <div className="skill-icon">
                                <AiOutlineShop />
                            </div>
                            <h6>Ecommerce</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus vero quia recusandae, totam molestiae temporibus magni? Assumenda doloribus debitis cupiditate quibusdam dolorum vero laudantium atque molestiae, omnis vitae sequi beatae voluptate corporis quae optio magni inventore numquam rem nihil voluptates.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <div className="skill-detail">
                        <div className="skill-icon">
                            <RiComputerLine />
                        </div>
                        <h6>Web Design</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus vero quia recusandae, totam molestiae temporibus magni? Assumenda doloribus debitis cupiditate quibusdam dolorum vero laudantium atque molestiae, omnis vitae sequi beatae voluptate corporis quae optio magni inventore numquam rem nihil voluptates.</p>
                        </div>
                    </Col>
                    <Col>
                    <div className="skill-detail">
                        <div className="skill-icon">
                            <TbSpeakerphone />
                        </div>
                        <h6>Marketing</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus vero quia recusandae, totam molestiae temporibus magni? Assumenda doloribus debitis cupiditate quibusdam dolorum vero laudantium atque molestiae, omnis vitae sequi beatae voluptate corporis quae optio magni inventore numquam rem nihil voluptates.</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
export default Skills;