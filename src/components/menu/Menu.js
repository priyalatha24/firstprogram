import React, {Component} from "react";


class Menu extends Component{
    render(){

        let html;
        html =(
            <div>
                <p>Java</p>
                <ul>
                    <li>OOPS</li>
                    <li>DSA</li>
                </ul>
            </div>
        );
        return html;
    }
    
}

export default Menu;