import React from 'react';
import { Movies } from './movies';
import axios from 'axios';

export class Read extends React.Component {

    state = {
        //Movie Json Data
        movies: []
    };

    //API Data link
    componentDidMount() {
        axios.get('http://localhost:4000/api/movies')
            .then(
                (response) => {
                    this.setState({ movies: response.data })
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