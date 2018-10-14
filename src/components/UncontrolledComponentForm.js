import React, {Component} from 'react';
import {
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl,
  Button
} from 'react-bootstrap';

class UncontrolledComponentForm extends Component {
  constructor(props) {
    super(props);
    this.refName = React.createRef();
  }
  handleSubmit = () => {
    const name = this.refName.current.value;
    if (name.length > 0) {
      alert(`Username ${name} is approved`);
    } else {
      alert('Validation error: Username cannot be empty');
    }
  }
  render() {
    return (
      <div>
        <Row>
          <Col md={12}>
            <FormGroup>
              <ControlLabel>Username</ControlLabel>
              <input
                ref={this.refName}
                type="text"
                placeholder="Name"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Button bsStyle="primary" onClick={this.handleSubmit}>Submit</Button>
          </Col>
        </Row>
      </div>
    );
  }

}

export default UncontrolledComponentForm;
