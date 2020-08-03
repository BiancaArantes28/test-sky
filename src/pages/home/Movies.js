import React, { Component } from 'react';
import ListComponent from '../../components/list/ListComponent';

class Movies extends Component {

    

    render() {
        const { imgs } = this.props;

        return (
            <div>
                {
                    imgs.map(img => {
                        return <ListComponent title={img.type} imgs={img.imgs} pages={img.imgs.length / 8} />
                    })
                }
            </div>
        );
    }
}

export default Movies;