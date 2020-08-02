import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import './tab.css';

class TabComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeIndex: 0,
        }
    }

    handleTab(activeIndex) {
        this.setState({ activeIndex });
    }

    render() {
        const { activeIndex } = this.state;

        return (
            <div className="tabes">
                <div className="tabes-header">
                    <ul>
                        <li className={activeIndex === 0 ? "active" : ''} onClick={() => this.handleTab(0)}>Filmes</li>
                        <li className={activeIndex === 1 ? "active" : ''} onClick={() => this.handleTab(1)}>Séries</li>
                        <li className={activeIndex === 2 ? "active" : ''} onClick={() => this.handleTab(2)}>Canais</li>
                    </ul>
                </div>
                <Container>
                    <div className={activeIndex === 0 ? "tabes-body" : "hide"}>
                        <h1>Filmes</h1>
                    </div>
                    <div className={activeIndex === 1 ? "tabes-body" : "hide"}>
                        <h1>Séries</h1>
                    </div>
                    <div className={activeIndex === 2 ? "tabes-body" : "hide"}>
                        <h1>Canais</h1>
                    </div>
                </Container>

            </div>
        );
    }
}

export default TabComponent;