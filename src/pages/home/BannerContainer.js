import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getImgs, getBannerStatus } from '../../store/selectors/movies/bannerSelectors';
import { fetchBanner } from '../../store/actions/movies/bannerActions';
import { fetchMovies } from '../../store/actions/movies/moviesActions';
import { STATUS } from '../../const/status';
import Banner from './Banner';

class BannerContainer extends Component {
    
    componentDidMount() {
        if(this.props.status === STATUS.NOT_FETCHED) {
            this.props.fetchBanner();
        }
    }

    render() {
        const { status, imgs } = this.props;

        if(status !== STATUS.FETCHED) {
            return (
                <h1>Carregando...</h1>
            );
        }
        return (
            <Banner imgs={imgs} />
        );
    }
}

const mapStateToProps = (state) => ({
    imgs: getImgs(state),
    status: getBannerStatus(state),
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBanner: () => dispatch(fetchBanner()),
        fetchMovies: (category) => dispatch(fetchMovies(category)),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(BannerContainer);