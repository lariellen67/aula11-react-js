import React from 'react';
import './Screen.css';

export default class Principal extends React.Component{
    render(){
        return(
            
            <div>
                <section id="corpicho">
		            <article id="noticia-principal">
			        <header id="cabecalho-artigo">
                        <hgroup>
                        <h3>Página Inicial > &nbsp; IFSP</h3>
                        <h1>Saiba tudo sobre o Instituto Federal</h1>
                        <h3 class="direita">Atualizado em 16/11/2019</h3>
                        </hgroup>
                    </header>

                    <h2>O que é?</h2>
                    <p>Instituto Federal de Educação, Ciência e Tecnologia, no Brasil, é uma instituição de educação superior, básica e profissional, pluricurricular e multicampi, especializada na oferta de educação profissional e tecnológica nas diferentes modalidades de ensino, com base na conjugação de conhecimentos técnicos e tecnológicos às suas práticas pedagógicas. Os institutos federais compõem a Rede Federal de Educação Profissional, Científica e Tecnológica.</p>

                    <h2>Criação</h2>
                    <p>O presidente Luiz Inácio Lula da Silva assinou dia 16 de julho de 2008 o Projeto de Lei 3775/2008 que cria 38 institutos federais de educação, ciência e tecnologia no país. A matéria seguiu para aprovação no Congresso Nacional e em 29 de dezembro de 2008 foi sancionada pelo presidente. Os institutos deverão ter forte inserção na área de pesquisa e extensão, visando estimular o desenvolvimento de soluções técnicas e tecnológicas e estendendo seus benefícios à comunidade.</p>

                    <h2>Como entrar no IF?</h2>
                    <p>A forma de seleção é decidida pela gestão de cada campus, em parceria com a Pró-reitoria de Ensino. Para verificar como ingressar em cada campus, fique atento ao lançamento dos editais. Para os cursos superiores, a seleção se dá pelo  <a href="http://sisu.mec.gov.br/" target="_blank">Sistema Único de Seleção (Sisu)</a>.</p>
                    </article>
                </section>
            </div>
        );
    }
}