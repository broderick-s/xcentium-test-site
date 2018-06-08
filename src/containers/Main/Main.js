import React, { Component } from 'react';

import { Grid, Row} from 'react-bootstrap';

import Search from '../../components/Search/Search';
import Results from '../../components/Results/Results';

class Main extends Component {
    constructor() {
        super();
        this.handleInput = this.handleInput.bind(this);
        this.state = {
            searchInput: '',
            searchReturned: false,
            results: {
                images: [],
                words: {
                    totalCount: 0,
                    topWords: []
                }
            }
        };
    }

    handleInput(input) {
        this.setState({
            searchInput: input
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
                console.log(json)
                comp.setState({
                    results: json,
                    searchReturned: true
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