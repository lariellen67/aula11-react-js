import React from 'react';
import morenews from './images/morenews.JPG'
import './Screen.css';

export default class Aside extends React.Component{
    render(){
        return(
            
            <div>
                <aside id="lateral">
                    <h1>Outras notícias</h1>
                    <h2>Vídeo mais recente</h2>

                    <video width="350" height="200" controls>
                        <source src="InstitucionalIFSP.mp4" type="video/mp4">
                        </source>
                    </video>
    
                    <h2>Novidades no IF</h2>
                    <img src={morenews} alt="Noticias IFSP" width="350" height="250" ></img>
                </aside>
            </div>
        );
    }
}