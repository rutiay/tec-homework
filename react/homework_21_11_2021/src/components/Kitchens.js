import React from "react";
import Kitchen from "./Kitchen";

class Kitchens extends React.Component{
    constructor(){
        super();
    }

    render(){
        const per1 = {img: "https://media.istockphoto.com/photos/learn-to-love-yourself-first-picture-id1291208214?b=1&k=20&m=1291208214&s=170667a&w=0&h=sAq9SonSuefj3d4WKy4KzJvUiLERXge9VgZO-oqKUOo=",
                    name: "Ron", roll: "executive chef"}
        const per2 = {img: "https://media.istockphoto.com/photos/studio-portrait-of-an-africanamerican-woman-posing-against-blue-picture-id1252502755?k=20&m=1252502755&s=612x612&w=0&h=mc1qiv6es2GJqoPC8gXWuBCui-NFRu56T4Gq35S9bC4=",
                    name: "Dana", roll: "restaurant manager"}
        const per3 = {img: "https://media.istockphoto.com/photos/cheerful-woman-standing-against-blue-wall-picture-id638628958?k=20&m=638628958&s=612x612&w=0&h=kudj69wwFxbsTAW3kz-UxQtWTptu2bMCzaL_EK7J3eU=",
                    name: "Mor", roll: "Co-chief"}
        const per4 = {img: "https://media.istockphoto.com/photos/intriguing-african-woman-look-aside-thinking-curious-girl-with-ponder-picture-id1335770127?k=20&m=1335770127&s=612x612&w=0&h=AwDZgahetKhZxknkN1Ter7-G2cf76s-lsviJ3RwOzWs=",
                    name: "Shir", roll: "Co-chief"}
        return(
            <div style={{display:"flex", background:"#b7b0b0", marginTop:"2%"}}>
                <Kitchen obj={per1}/>
                <Kitchen obj={per2}/>
                <Kitchen obj={per3}/>
                <Kitchen obj={per4}/>
            </div>
        )
    }
}

export default Kitchens;