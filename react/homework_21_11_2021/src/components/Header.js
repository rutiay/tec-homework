import React from "react";

class Header extends React.Component{
    constructor(){
        super();
    }

    render() {
        return(
            <div>
                <header>
                    <nav>
                        <img src="https://api.freelogodesign.org/files/2cb72267f34547e6970498e2b2fe6187/thumb/logo_200x200.png?v=0"></img>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Header;