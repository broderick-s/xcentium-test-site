import React from 'react';

import ReactTable from "react-table";
import { Carousel } from 'react-bootstrap';

import './Images.css';
import 'react-table/react-table.css';
import 'pure-react-carousel/dist/react-carousel.es.css';

const images = ( props ) => {
    let tableData = props.images.map((val, i) => {
        let imageRef = <a href={val.url}>{val.description || val.name}</a>;
        return { index: i+1, image: imageRef }
    });

    const columns = [{
        Header: '', 
        accessor: 'index',
        maxWidth: 50
    }, {
        Header: 'Description from Alt (If none, Name)',
        accessor: 'image'
    }];

    let slides = props.images.map((val, i) => {
        return (
            <Carousel.Item key={i}>
                <img className="img-responsive center-block" src={val.url} alt={val.name}/>
            </Carousel.Item>
        )
    });

    return (
        <React.Fragment>
            <ReactTable 
                data={tableData} 
                columns={columns}
                defaultPageSize={10}
                showPageSizeOptions={false}
                minRows={1}
                sortable={false}
                className="-striped -highlight table"/>
            <Carousel className="carousel">
                {slides}
            </Carousel>
        </React.Fragment>
    );
};

export default images;