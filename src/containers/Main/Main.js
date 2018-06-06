import React, { Component } from 'react';

import { Grid, Row, Col } from 'react-bootstrap';

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
        
        this.setState({
            results: {
                images: [{name: "testname1", url: "https://c-7npsfqifvt34x24dofu5x2edctjtubujdx2edpn.g00.cnet.com/g00/3_c-7x78x78x78.dofu.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fdofu5.dctjtubujd.dpnx2fjnhx2fbe4GvhK2Gb9S1PzIGi1ARs1a51Nx3dx2f205y257x2f3129x2f17x2f15x2fc6gdcd82-dd25-5008-9e7c-369950g8d066x2f3129-17-15-21-66-40.kqhx3fj21d.nbslx3djnbhf_$/$/$/$/$/$/$/$/$"}, {name: "testname2", url: "https://c-7npsfqifvt34x24dofu2x2edctjtubujdx2edpn.g00.cnet.com/g00/3_c-7x78x78x78.dofu.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fdofu2.dctjtubujd.dpnx2fjnhx2f53t59Bf74GCutEGfg94r0dx78-Bwdx3dx2f205y257x2f3129x2f17x2f16x2ff452g921-7215-56f6-c554-fc8f6110g135x2fdppl-doo.kqhx3fj21d.nbslx3djnbhf_$/$/$/$/$/$/$/$/$"}, {name: "testname1", url: "https://c-7npsfqifvt34x24dofu5x2edctjtubujdx2edpn.g00.cnet.com/g00/3_c-7x78x78x78.dofu.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fdofu5.dctjtubujd.dpnx2fjnhx2fTzBf-ca9B-XdR4ASUFjHjbzirJZx3dx2f205y257x2f3129x2f17x2f16x2fd5dd922c-6e77-5cb5-b0g9-3c20db4f094dx2f460519c.kqhx3fj21d.nbslx3djnbhf_$/$/$/$/$/$/$/$/$"}],
                words: {
                    totalCount: 423,
                    topWords: [{ word: "One", count: 55}, { word: "two", count: 42}, { word: "three", count: 35}, { word: "four", count: 22}, { word: "five", count: 5}]
                }
            },
            searchReturned: true
        });
        
    }

    render () {

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