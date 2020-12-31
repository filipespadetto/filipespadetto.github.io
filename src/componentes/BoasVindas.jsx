import React from 'react'
import linkedin from '../linkedin.svg'
import github from '../github.svg'
import youtube from '../youtube.svg'
import { Row, Col, Container, Jumbotron } from 'react-bootstrap'

function BoasVindas() {
    return (      
        <Jumbotron>
            <Container>
                <Row>
                    <Col>
                    
                        <h1>Filipe <br></br> Spadetto.</h1>
                        <br></br>
                        <a href="https://www.linkedin.com/in/filipespadetto">
                            <img src={linkedin} width="20" alt="LinkdIn logo"/>
                        </a>
                        &nbsp;&nbsp;&nbsp;
                        <a href="https://www.github.com/filipespadetto">
                            <img src={github} width="23" alt="Github logo"/>
                        </a>
                        &nbsp;&nbsp;&nbsp;
                        <a href="https://www.youtube.com/channel/UCLO87AHr6Ey49zwjA44017A">
                            <img src={youtube} width="25" alt="YouTube logo"/>
                        </a>
                    </Col>
                    <Col>
                        <p>- Introdução</p>
                        <h4>
                            Analista de sistemas &<br></br>
                            Desenvolvedor full-stack
                        </h4>
                        <p>
                            Meu objetivo como desenvolvedor é trazer soluções e reduzir custos
                            através de códigos e ferramentas em todos os projetos que participo.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default BoasVindas