
import React from 'react';
import { Button, Card, Accordion, Form } from 'react-bootstrap';


function SideFilter(props) {


  return (
    <div className="card sticky-top" style={{border:'none'}}>
    <main role="main">
      <div className="album py-5">

        <div className="container">

          <div className="row" >
    <div className="container">
      <Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      Categories
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>

      <Form>
         {props.items.map((type) => (
          <div key={`default-${type}`} className="mb-3">

            <Form.Check
              type={`checkbox`}
              id={`default-${type}`}
              label={type}
              value={type}
              onClick={props.filterByCategory}
            />

        </div>
        ))}
</Form>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
     Destinations
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
      <Form>
         {['checkbox'].map((type) => (
    <div key={`default-${type}`} className="mb-3">

      <Form.Check
        type={type}
        id={`default-${type}`}
        label={`Amazon`}
      />
    </div>
  ))}
</Form>
      </Card.Body>
    </Accordion.Collapse>
  </Card>

</Accordion>
   </div>
   </div>
   </div>
   </div>
   </main>
   </div>
  );
}

export default SideFilter;
