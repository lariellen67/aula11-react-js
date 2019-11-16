import React from 'react';
import './Screen.css';


export default class Screen extends React.Component{
    render(){
        return(
            
            <div >
                <nav id="menu">
                    <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="cursos.html">Cursos</a></li>
                    <li><a href="fotos.html">Fotos</a></li>
                    <li><a href="login.html">Login</a></li>
                    <li><a href="contato.html">Fale Conosco</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}
    

