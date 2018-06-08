import React, { Component } from 'react';

import { Grid, Row, Alert} from 'react-bootstrap';

import Search from '../../components/Search/Search';
import Results from '../../components/Results/Results';

class Main extends Component {
    constructor() {
        super();
        this.handleInput = this.handleInput.bind(this);
        this.state = {
            searchInput: '',
            searchReturned: false,
            isError: false,
            results: {
                images: [],
                words: {
                    totalCount: 0,
                    topWords: []
                },
                error: ""
            }
        };
    }

    handleInput(input) {
        this.setState({
            searchInput: input,
            searchReturned: false
        });
        this.getResults(input);
    }

    getResults(url) {
        let apiUrl;
        if (process.env.NODE_ENV === 'production') {
            apiUrl = "http://xcentium-test-api.herokuapp.com/api/pageinfo";
        } else {
            apiUrl = "http://localhost:8000/api/pageinfo";
        }

        const apiUrlWithQuery = apiUrl + this.getQuery(url);

        let comp = this;
        fetch(apiUrlWithQuery)
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                if (json.error){
                    comp.setState({
                        isError: true
                    });
                } else {
                    comp.setState({
                        results: json,
                        isError: false,
                        searchReturned: true
                    });
                }
            }).catch(function() {
                comp.setState({
                    isError: true,
                    searchReturned: false
                });
            });

    }

    getQuery(url) {
        return "?url=" + encodeURIComponent(url);
    }

    render() {
        return (
            <Grid>
                <Search handleSearchInput={this.handleInput} />
                {this.state.isError &&
                    <Row>
                        <Alert bsStyle="warning">
                            Sorry! There was an error, try a full URL. (https://news.ycombinator.com/) The site searched for may not exist. 
                        </Alert>
                    </Row>
                }
                {this.state.searchReturned &&
                    <Row>
                        <h2>Results for: {this.state.searchInput}</h2>
                        <Results results={this.state.results} />
                    </Row>
                }
            </Grid>
        );
    }
}

export default Main;