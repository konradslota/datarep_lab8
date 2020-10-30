import React from 'react';
import { Movies } from './movies';
import axios from 'axios';

export class Read extends React.Component {

    state = {
        //Movie Json Data
        movies: []
    };

    //fethcing jsonblob link API
    componentDidMount() {
        axios.get('https://jsonblob.com/api/jsonblob/520c3b5e-0312-11eb-a6af-cbf00d776032')
            .then(
                (response) => {
                    this.setState({ movies: response.data.Search })
                })
            .catch((error) => {
                console.log(error)
            });
    }

    render() {
        return (
            //Passing movies object from component
            <div>
                <h1>This is the read component</h1>
                <Movies movies={this.state.movies}></Movies>
            </div>
        );
    }
}