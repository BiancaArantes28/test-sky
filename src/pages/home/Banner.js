import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
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

        if(index === 0) {
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

        if(activeIndex > 0) {
            this.handleImg(activeIndex - 1);
        } else {
            this.handleImg(2);
        }
    }

    clickNext() {
        const { activeIndex } = this.state;

        if(activeIndex + 1 < 3) {
            this.handleImg(activeIndex + 1);
        } else {
            this.handleImg(0);
        }
    }

    render() {
        const { activeIndex } = this.state;

        return (
            <div className="banner">
                <div className="bannerImags">
                    <img src="https://d3bntrzcei186j.cloudfront.net/fit-in/1000x1500/images/sky-content-hub-prd/5afffea9c7c80900d54022c4/5a563880332c65000165b739_3_1000x1500.jpeg" alt="assista o rei leão no sky play" id="img1" className={`imgs-banner firstImg`} />
                    <img src="https://d3bntrzcei186j.cloudfront.net/fit-in/300x450/images/sky-content-hub-prd/5afda2776813b50542cd11df/5a563880332c65000165b739_3_300x450.jpeg" alt="assista o toy story 4 no sky play" id="img2" className={`imgs-banner active`} />
                    <img src="https://d3bntrzcei186j.cloudfront.net/fit-in/300x450/images/sky-content-hub-prd/5ba6a8e25b80edeedc103b79/5a563880332c65000165b739_3_300x450.jpeg" alt="assista o homem-aranha longe de casa no sky play" id="img3" className={`imgs-banner lastImg`} />
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
                <ol className="carousel-indicators">
                    <li className={activeIndex === 0 ? "active" : ""} onClick={() => this.handleImg(0)}></li>
                    <li className={activeIndex === 1 ? "active" : ""} onClick={() => this.handleImg(1)}></li>
                    <li className={activeIndex === 2 ? "active" : ""} onClick={() => this.handleImg(2)}></li>
                </ol>
                </div>
            </div>

        );
    }
}

export default Banner;