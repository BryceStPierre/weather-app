import React, { Component } from 'react';
import { Navbar, NavbarBrand, Row, Col, Jumbotron, Button, InputGroup, FormGroup, Input, InputGroupAddon } from 'reactstrap';

import './App.css';

const options = [
  'Toronto',
  'Vancouver',
  'Montreal',
  'Halifax'
];

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      newCity: '',
      city: null
    }
  }

  handleNewCityChange = (e) => {
    this.setState({ newCity: e.target.value });
    console.log(e.target.value);
  }

  handleChangeCity = (e) => {
    this.setState({ city: e.target.value });
    console.log(e.target.value);
  }
  
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Navbar color="dark" dark>
          <NavbarBrand href="/">MyWeather</NavbarBrand>
        </Navbar>
        <Row>
          <Col>
            <Jumbotron>
              <h1 className="display-3">MyWeather</h1>
              <p className="lead">The current weather for your favorite cities!</p>

                <InputGroup style={{ width: '275px', margin: '0 auto' }}>
                  <Input 
                    value={this.state.newCity}
                    onChange={this.handleNewCityChange}
                    placeholder="City name..." 
                  />
                  <InputGroupAddon addonType="append">
                    <Button color="primary">Add City</Button>
                  </InputGroupAddon>
                </InputGroup>

            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-5">Current Weather</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup style={{ width: '275px', margin: '0 auto' }}>
              <Input type="select" onChange={this.handleCity}>
              { options.length === 0 && <option>No cities added yet.</option> }
              { options.map(option => <option key={option}>{option}</option>) }
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
          
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
