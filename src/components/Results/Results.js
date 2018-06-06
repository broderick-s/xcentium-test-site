import React, { Component } from 'react';

import Images from './Images/Images';
import Words from './Words/Words';

class Results extends Component {
    constructor(props) {
        super(props);
    }
  
    render() {
        return (
            <React.Fragment>
                <Images images={this.props.results.images} />
                <Words 
                    wordCount={this.props.results.words.totalCount} 
                    topWords={this.props.results.words.topWords}/>
            </React.Fragment>
        );
    }
}

export default Results;