import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListComponent from '../../components/list/ListComponent';
import { getImgs, getStatusMovies } from '../../store/selectors/movies/moviesSelectors';
import { fetchMovies } from '../../store/actions/movies/moviesActions';
import Movies from './Movies';
import { STATUS } from '../../const/status';

class MoviesContainer extends Component {

    componentDidMount() {
        this.props.fetchMovies('Suspense');
        this.props.fetchMovies('Infantil');
        this.props.fetchMovies('Terror');
        this.props.fetchMovies('Comédia');
    }

    render() {
        const { status } = this.props;
        
        if(status !== STATUS.FETCHED) {
            return (<h1>Carregando...</h1>);
        }

        return (
            <Movies imgs={this.props.imgs} fetchMovies={this.props.fetchMovies} />
        );
    }
}

const mapStateToProps = (state) => ({
    imgs: getImgs(state),
    status: getStatusMovies(state),
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovies: (category) => dispatch(fetchMovies(category)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);