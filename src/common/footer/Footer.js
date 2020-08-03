import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/fontawesome-free';
import './footer.css';

class Footer extends Component {

    render() {
        return (
            <footer>
                <div className="menuFooter">
                    <div className="logoSkyFooter"></div>
                    <div className="socialNetworkds">

                    </div>
                </div>
                <div className="moreAboutSky">
                    <img className="imgSky" src="https://skyplay.sky.com.br/documents/43573853/43574080/80x80_IMG_SKY_LogoAppSKY_2.png/014dd5ba-449d-6e8a-920b-4f8c0474c94f?t=1590182277505" />
                    <div className="downloadAppMinhaSky">
                        Baixe no seu celular o app SKY e divirta-se.
                    </div>

                </div>
                <div className="logo-store hidden-xs">
                    <a href="https://apps.apple.com/br/app/minha-sky/id1154049541" class="logo_apple_store" target="_blank" title="Disponível na Apple Store" data-gtm="1"></a>
                </div>
            </footer>
        );
    }
}

export default Footer;
