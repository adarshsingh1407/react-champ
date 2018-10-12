import React, {Component} from 'react';
import {
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl,
  Radio,
  Checkbox,
  Button
} from 'react-bootstrap';
import {GENDER_LIST, SOCIAL_MEDIA_LIST} from '../const/ControlledConstants';

class ControlledComponentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: 26,
      selectedGender: '',
      socialMedia: [...SOCIAL_MEDIA_LIST]
    };
  }
  handleChange = (value, key) => {
    this.setState({
      [key]: value
    }, () => {
      console.log('State: ', JSON.stringify(this.state));
    });
  }
  handleSocialMediaChange = (index) => {
    let {socialMedia} = this.state;
    socialMedia[index]['selected'] = !socialMedia[index]['selected'];
    this.handleChange([...socialMedia], 'socialMedia');
  }
  handleSubmit = () => {
    const {
      name, age, selectedGender, socialMedia
    } = this.state;
    const formData = {
      name,
      age,
      gender: selectedGender,
      socialMedia: socialMedia.map(socialMediaItem => socialMediaItem.id)
    }
    console.log('Post Form Data: ', JSON.stringify(formData));
  }
  render() {
    const {name, age, selectedGender} = this.state;
    return (<div>
      <Row>
        <Col md={12}>
          <FormGroup>
            <ControlLabel>Name</ControlLabel>
            <FormControl type="text" value={name} placeholder="Name" onChange={(e) => this.handleChange(e.target.value, 'name')}/>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <FormGroup>
            <ControlLabel>Gender</ControlLabel>
            <br />
            {
              GENDER_LIST && GENDER_LIST.map(gender => {
                return (<Radio
                  key={gender.id}
                  inline={true}
                  onChange={() => this.handleChange(gender.id, 'selectedGender')}
                  checked={selectedGender === gender.id}>
                  {gender.name}
                </Radio>)
              })
            }
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <FormGroup>
            <ControlLabel>Age</ControlLabel>
            <FormControl type="number" min={1} value={age} placeholder="Age" onChange={(e) => this.handleChange(e.target.value, 'age')}/>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <FormGroup>
            <ControlLabel>Social Media</ControlLabel>
            <br />
            {
              SOCIAL_MEDIA_LIST && SOCIAL_MEDIA_LIST.map((socialMedia, socialMediaIndex) => {
                return (<Checkbox
                  key={socialMedia.id}
                  inline={true}
                  onChange={() => this.handleSocialMediaChange(socialMediaIndex)}
                  checked={socialMedia.selected}>
                  {socialMedia.name}
                </Checkbox>)
              })
            }
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Button bsStyle="primary" onClick={this.handleSubmit}>Submit</Button>
        </Col>
      </Row>
    </div>);
  }

}

export default ControlledComponentForm;
