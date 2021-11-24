import React from "react";

class Header extends React.Component{
    constructor(){
        super();
    }

    render() {
        return(
            <div>
                <header>
                    <nav style={{display:"flex", alignItems:"center", background:"black"}}>
                        <img style={{borderRadius:"50%", width:"170px", height:"170px"}} src="https://api.freelogodesign.org/files/dfed3ecdfe774af1a3c7a1762bc4316e/thumb/logo_200x200.png?v=637732438010000000"></img>
                        <h1 style={{marginLeft:"27%", fontSize:"40px", color:"#eda336"}}>Ruti Ayaso</h1>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Header;