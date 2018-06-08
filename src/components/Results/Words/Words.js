import React from 'react';

import WordCount from './WordCount/WordCount';
import ReactTable from 'react-table';

import './Words.css';
import 'react-table/react-table.css';

const words = (props) => {
    let tableData = props.topWords.map((val, i) => {
        return { rank: i+1, word: val.word, count: val.count }
    });

    const columns = [{
        Header: 'Rank', 
        accessor: 'rank',
        maxWidth: 50
    }, {
        Header: 'Word',
        accessor: 'word'
    }, {
        Header: 'Count',
        accessor: 'count'
    }];

    return (
        <div >
            <WordCount count={props.wordCount}/>
            <ReactTable 
                data={tableData} 
                columns={columns}
                defaultPageSize={10}
                showPageSizeOptions={false}
                minRows={1}
                sortable={false}
                showPagination={false}
                className="-striped -highlight"/>
        </div>
    );
};

export default words;