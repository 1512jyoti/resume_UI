import React,{useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import { Row, Col} from 'react-bootstrap';
import { hasPointerEvents } from '@testing-library/user-event/dist/utils';

function Card1() {

  return (
    <div className="header-container"> 
      <Row>
        <Col id='col1'>
            <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" />
        </Col>
        <Col id='col2'>
          <div id="position">
            <h6>Frontend-developer</h6>
	  <h2>For testing</h2>
          </div>
          <div id="name">
            <h2>Alex Smith</h2>
            
          </div>
          <div id="data">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat impedit, molestias reprehenderit, eligendi ipsam culpa quas sequi vero iusto itaque sapiente deleniti quidem veniam natus dignissimos, quo minus. Sunt ipsa reiciendis dignissimos sint? Consequuntur minus deleniti atque voluptatibus repellendus molestiae?</p>
          </div>
          <div id="buttongroup">
            <div id="download-button">
              <Button variant="outline-primary">Download CV</Button>{' '}
            </div>
            <div id="contact-button">
              <Button variant="outline-light">Contact</Button>{' '}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default Card1




  
