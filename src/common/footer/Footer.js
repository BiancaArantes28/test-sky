import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/fontawesome-free';
import './footer.css';

class Footer extends Component {

    render() {
        return (
            <footer>

                <div className="menuFooter">
                    <Container>
                        <Row>
                            <Col xs={4}>
                                <div className="logoSkyFooter"></div>
                            </Col>
                            <Col xs={8}>
                                <div className="socialNetworkds">
                                    <a href="http://www.facebook.com/pages/SKY-Brasil/85873897214?ref=ts" target="_blank">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="http://twitter.com/skybrasil" target="_blank">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                    <a href="http://www.youtube.com/user/skyhdtv" target="_blank">
                                        <i class="fab fa-youtube"></i>
                                    </a>
                                    <a href="http://instagram.com/skybrasil" target="_blank">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </Container>


                </div>
                <Container>
                    <Row>
                        <Col xs={12} sm={6}>
                            <div className="moreAboutSky">
                                <img className="imgSky" src="https://skyplay.sky.com.br/documents/43573853/43574080/80x80_IMG_SKY_LogoAppSKY_2.png/014dd5ba-449d-6e8a-920b-4f8c0474c94f?t=1590182277505" />
                                <div className="downloadAppMinhaSky">
                                    Baixe no seu celular o app SKY e divirta-se.
                                </div>
                                <div className="clearfix"></div>
                                <div className="logo-store hidden-xs">
                                    <a href="https://apps.apple.com/br/app/minha-sky/id1154049541" className="logo_apple_store" target="_blank" title="Disponível na Apple Store"></a>
                                    <a href="https://play.google.com/store/apps/details?id=br.com.sky.selfcare&referrer=utm_source%3Dsite-opcionais%26utm_medium%3Dbutton%26utm_campaign%3Despn-extra" className="logo_play_store" target="_blank" title="Disponível na Play Store"></a>
                                </div>

                            </div>
                        </Col>
                        <Col className="footer-links" xs={12} sm={6}>
                            <Row>
                                <Col sm={6}>
                                    <button className="group_menu SubHeading" data-toggle="nocollapse">Sobre</button>
                                    <div>
                                        <ul>
                                            <li><a href="https://www.sky.com.br/quem-somos" target="_blank">Nossa história</a></li>
                                            <li><a href="https://www.sky.com.br/sala-imprensa" target="_blank">Imprensa</a></li>
                                            <li><a href="https://www.sky.com.br/premios-conquistados" target="_blank">Prêmios conquistados</a></li>
                                            <li><a href="https://www1.sky.com.br/site/postos-atendimento/?_ga=2.209040850.1150179753.1562761705-493298146.1561749024" target="_blank">Credenciamento</a></li>
                                            <li><a href="https://www.sky.com.br/trabalhe-conosco" target="_blank">Trabalhe conosco</a></li>
                                            <li><a href="https://www.sky.com.br/promocoes" target="_blank">Promoção</a></li>
                                        </ul>
                                    </div>
                                    <hr className="hidden-util-lg hidden-util-md hidden-util-sm hidden-util-xsm"></hr>
                                    <button className="group_menu SubHeading" data-toggle="nocollapse">Sobre</button>
                                    <div>
                                        <ul>
                                            <li><a href="https://www.sky.com.br/central-de-atendimento" target="_blank">Central de ajuda</a></li>
                                        </ul>
                                    </div>
                                    <hr className="hidden-util-lg hidden-util-md hidden-util-sm hidden-util-xsm"></hr>
                                </Col>
                                <Col sm={6}>
                                    <button className="group_menu SubHeading" data-toggle="nocollapse">Sobre</button>
                                    <div>
                                        <ul>
                                            <li><a href="http://www.conselhodeusuariosdasky.com.br/?_ga=2.191810477.662684335.1596328562-1042132280.1595978008" target="_blank">Conselho aos usuários</a></li>
                                            <li><a href="https://www.sky.com.br/pesquisa-para-afericao" target="_blank">Pesquisa Anatel</a></li>
                                            <li><a href="https://www.sky.com.br/documents/1407842/38422061/Relat%C3%B3rio+de+Transpar%C3%AAncia+AT%26T2019.pdf/d609975d-aaad-1a9a-c2cf-c3ec34f8cc04" target="_blank">Relatórios de transparência</a></li>
                                            <li><a href="https://www.sky.com.br/responsabilidade-social" target="_blank">Responsabilidade Social</a></li>
                                            <li><a href="https://www.sky.com.br/acessibilidade-na-sky" target="_blank">Acessibilidade</a></li>
                                        </ul>
                                    </div>
                                    <hr className="hidden-util-lg hidden-util-md hidden-util-sm hidden-util-xsm"></hr>
                                    <div className="SubHeading">
                                        <a href="http://www.skyempresas.com.br/" target="_blank">SKY Empresas</a>
                                    </div>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </Container>
                <div className="link-main bgBox">
                    <Container>
                        <a href="https://skyplay.sky.com.br/" target="_blank" data-gtm="1">Início</a> |
                        <a href="https://www.sky.com.br/politica-de-privacidade" target="_blank" data-gtm="1">Política de Privacidade</a> |
                        <a href="https://www.sky.com.br/contratos" target="_blank" data-gtm="1">Contratos gerais</a> |
                        <a href="https://www.sky.com.br/sky-pre-pago/documentos-juridicos" target="_blank" data-gtm="1">Contratos Pré-pago</a> |
                        <a href="https://www.sky.com.br/minha-sky/cancelar-assinatura" target="_blank" data-gtm="1">Cancelamento</a> |
                        <a href="https://www.sky.com.br/ouvidoria" target="_blank" data-gtm="1">Ouvidoria</a> |
                        <a href="https://www.sky.com.br/minha-sky/consumidor" target="_blank" data-gtm="1">Consumidor.gov</a>
                    </Container>
                </div>
                <Container className="mt-3 mb-4">
                    <Row>
                        <Col xs={12}>
                            <p className="Caption medium">
                                ® Todos os direitos reservados 2018. Todas as marcas SKY e qualquer propriedade intelectual inserida nelas são de propriedade da SKY Internacional AG e usadas pela SKY Serviços de Banda Larga LTDA. mediante licença.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        );
    }
}

export default Footer;
