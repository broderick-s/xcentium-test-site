import React, { Component } from 'react';

import { Row, Col, Button, FormGroup, FormControl, ControlLabel, Alert } from 'react-bootstrap';

import './Search.css'

class Search extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.state = {
            searchInput: '',
            isError: false
        };
    }
    
    submitHandler(evt) {
        evt.preventDefault();
        if (this.isValidUrl(this.state.searchInput)){
            this.setState({
                isError: false
            });
            this.props.handleSearchInput(this.normalizeHttp(this.state.searchInput));
        } else {
            this.setState({
                isError: true
            });
        }
    }
    
    handleChange(event) {
        this.setState({
            searchInput: event.target.value
        });
    }

    isValidUrl(str) {
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return pattern.test(str);
      }

    normalizeHttp(url) {
        if (url.toLowerCase().startsWith('http://') || url.toLowerCase().startsWith('https://')){
            return url;
        } else {
            return "https://" + url;
        }
    }
  
    render() {
        return (
            <React.Fragment>
                <Row className="search">
                    <Col xs={10} xsOffset={1} md={8} mdOffset={2} lg={6} lgOffset={3}>
                        <form onSubmit={this.submitHandler}>
                            <FormGroup bsSize="large">
                                <ControlLabel>Enter a website:</ControlLabel>
                                <FormControl 
                                    type="text" 
                                    id="search"
                                    className="search-bar" 
                                    value={this.state.searchInput} 
                                    onChange={this.handleChange} 
                                    placeholder="https://www.Google.com" />
                                <Button type="submit">Search</Button>
                            </FormGroup>
                        </form>
                    </Col>
                </Row>
                {this.state.isError &&
                    <Row>
                        <Alert bsStyle="warning">
                            Sorry! There was an error, try a full URL. (https://news.ycombinator.com/)
                        </Alert>
                    </Row>
                }
            </React.Fragment>
        );
    }
}

export default Search;