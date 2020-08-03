import React, { Component, Fragment } from 'react';
import './list.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft, faLock, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

class ListComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeIndex: 1,
            pages: Math.round(16 / 8)
        };

        this.nextPage = this.nextPage.bind(this);
    }

    changePage(activeIndex) {

        if (activeIndex > 0) {
            let wrapperVisible = document.querySelectorAll('.wrapperVisible');
            wrapperVisible.forEach((element) => {
                element.classList.add("wraperHide");
                element.classList.remove("wrapperVisible");
            })
            let elements = document.querySelectorAll(".wraperHide");
            elements.forEach((element) => {
                element.classList.remove("wraperHide");
                element.classList.add("wrapperVisible");
            })
        }
    }

    nextPage() {
        const { pages, activeIndex } = this.state;
        if (activeIndex + 1 < pages) {

            this.setState({ activeIndex: activeIndex + 1 });
            this.changePage(activeIndex + 1);
        }
    }

    prevPage() {
        const { activeIndex } = this.state;

        if (activeIndex > 0) {
            this.setState({ activeIndex: activeIndex - 1 });
            this.changePage(activeIndex - 1);
        }
    }

    getImage(imgs) {
        return imgs.images[0].url;
    }

    render() {
        const { title, imgs, pages } = this.props;
        
        let count = 0;

        if(imgs === undefined) {
            return (
                <h1>Carregando...</h1>
            );
        }
        return (
            <div className="wrapper">
                <p className="titleList">{title}</p>
                <div className="slideWrapper">
                    {
                        imgs.map(i => {
                            count++;
                            return (
                                <div className={`wrapperOne ${count <= 8 ? "wrapperVisible" : "wraperHide"}`} style={{ width: 'calc(100%/8)', marginRight: '8px' }}>
                                    <img className="listImgs" src={this.getImage(i)} />
                                    <span>
                                        <FontAwesomeIcon icon={imgs.isBlocked ? faLock : faShoppingCart} />
                                    </span>
                                </div>
                            );
                            
                        })
                    }
                </div>
                {
                    pages > 1 ?
                        <Fragment>
                            <div className="nextButton" onClick={this.nextPage}>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </div>
                            <div className="prevButton">
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </div>
                        </Fragment> : null
                }

            </div>
        );
    }
}

export default ListComponent;