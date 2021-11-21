import React from "react";
import Food from "./Food";

class Foods extends React.Component{
    constructor(){
        super();
    }

    render() {
        const food1 = {title: "pizza", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        img: "https://cdn.pixabay.com/photo/2017/02/15/10/57/pizza-2068272__340.jpg"}
        const food2 = {title: "salads", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        img: "https://cdn.pixabay.com/photo/2015/05/31/13/59/salad-791891__340.jpg"}
        const food3 = {title: "desserts", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        img: "https://cdn.pixabay.com/photo/2019/11/03/14/32/milk-4598829__340.jpg"}
        return(
            <div style={{display:"flex",  background:"#b7b0b0", marginTop:"2%"}}>
                <Food obj={food1}/>
                <Food obj={food2}/>
                <Food obj={food3}/>
            </div>
        )
    }
}

export default Foods;