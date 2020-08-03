import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faPray } from '@fortawesome/free-solid-svg-icons';
import './banner.css';

class Banner extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeIndex: 0,
        };

        this.handleImg = this.handleImg.bind(this);
        this.clickPrev = this.clickPrev.bind(this);
        this.clickNext = this.clickNext.bind(this);
    }

    slider(index) {
        let elements = document.querySelectorAll(".imgs-banner");

        elements.forEach((element) => {
            element.classList.remove("active");
            element.classList.remove("firstImg");
            element.classList.remove("lastImg");
        });

        if (index === 0) {
            let img2 = document.querySelector("#img2");
            img2.classList.add("active");
            let img1 = document.querySelector("#img1");
            img1.classList.add("firstImg");
            let img3 = document.querySelector("#img3");
            img3.classList.add("lastImg");
        } else if (index === 1) {
            let img3 = document.querySelector("#img3");
            img3.classList.add("active");
            let img1 = document.querySelector("#img1");
            img1.classList.add("lastImg");
            let img2 = document.querySelector("#img2");
            img2.classList.add("firstImg");
        } else {
            let img1 = document.querySelector("#img1");
            img1.classList.add("active");
            let img2 = document.querySelector("#img2");
            img2.classList.add("lastImg");
            let img3 = document.querySelector("#img3");
            img3.classList.add("firstImg");
        }
    }

    handleImg(activeIndex) {
        this.setState({ activeIndex });
        this.slider(activeIndex);
    }

    clickPrev() {
        const { activeIndex } = this.state;

        if (activeIndex > 0) {
            this.handleImg(activeIndex - 1);
        } else {
            this.handleImg(2);
        }
    }

    clickNext() {
        const { activeIndex } = this.state;

        if (activeIndex + 1 < 3) {
            this.handleImg(activeIndex + 1);
        } else {
            this.handleImg(0);
        }
    }

    buildImgsArray(index) {
        const { imgs } = this.props;

        return imgs[index].images[0].url;
    }

    buildTitle(index) {
        const { imgs } = this.props;

        return imgs[index].images[0].title;
    }

    render() {
        const { imgs } = this.props;
        const { activeIndex } = this.state;

        let windowWidth = window.innerWidth;
        console.log(windowWidth)

        return (
            <div className="banners">
                <div className="banner">
                    <div className="bannerImags">
                        <img src={this.buildImgsArray(2)} alt={this.buildTitle(2)} title={this.buildTitle(2)} id="img1" className={`imgs-banner firstImg`} />
                        <img src={this.buildImgsArray(0)} alt={this.buildTitle(0)} title={this.buildTitle(0)} id="img2" className={`imgs-banner active`} />
                        <img src={this.buildImgsArray(1)} alt={this.buildTitle(1)} title={this.buildTitle(1)} id="img3" className={`imgs-banner lastImg`} />
                    </div>
                    <div className="arrowLeft" onClick={this.clickPrev}>
                        {/* <span aria-hidden="true" className="carousel-control-prev-icon"></span> */}
                        <span className="iconLeft">
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </span>

                    </div>
                    <div className="arrowRight" onClick={this.clickNext}>
                        <span className="iconRight">
                            <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                    </div>
                    <div>
                        <ol className="banner-sky-carousel-indicators">
                            <li className={activeIndex === 0 ? "active" : ""} onClick={() => this.handleImg(0)}></li>
                            <li className={activeIndex === 1 ? "active" : ""} onClick={() => this.handleImg(1)}></li>
                            <li className={activeIndex === 2 ? "active" : ""} onClick={() => this.handleImg(2)}></li>
                        </ol>
                    </div>
                </div>
                <div className="banner-mobile">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="imgsBannerMobile"
                                src="https://d3bntrzcei186j.cloudfront.net/fit-in/300x450/images/sky-content-hub-prd/5afda2776813b50542cd11df/5a563880332c65000165b739_3_300x450.jpeg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="imgsBannerMobile"
                                src="https://d3bntrzcei186j.cloudfront.net/fit-in/300x450/images/sky-content-hub-prd/5ba6a8e25b80edeedc103b79/5a563880332c65000165b739_3_300x450.jpeg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="imgsBannerMobile"
                                src="https://d3bntrzcei186j.cloudfront.net/fit-in/1000x1500/images/sky-content-hub-prd/5afffea9c7c80900d54022c4/5a563880332c65000165b739_3_1000x1500.jpeg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        );
    }
}

export default Banner;