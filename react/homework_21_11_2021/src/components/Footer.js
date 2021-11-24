import React from "react";

class Footer extends React.Component{
    constructor(){
        super();
    }

    render() {
        return(
            <div style={{marginLeft:"30%", display:"flex", width:"50%", height:"300px"}}>
                <div>
                    <h1>Contact Us</h1>
                    <form style={{width:"40%"}}>
                        <label for="name">Full Name</label>
                        <input name="name" type="text" placeholder="What's your full name?"></input>
                        <label for="email">Email address</label>
                        <input name="email" type="email" placeholder="you@example.com"></input>
                        <label for="message">Message</label>
                        <input style={{height:"80px"}} name="message" type="text" placeholder="Write your message here"></input>
                        <button type="submit" style={{width:"94%", height:"30px", background:"#1fb6ff", color:"white"}}>Submit</button>
                    </form>
                </div>
                <img src="https://api.freelogodesign.org/files/dfed3ecdfe774af1a3c7a1762bc4316e/thumb/logo_200x200.png?v=637732439070000000"></img>
            </div>
        )
    }
}

export default Footer;