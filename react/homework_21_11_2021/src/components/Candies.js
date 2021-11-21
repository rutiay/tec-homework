import React from "react";
import Candy from "./Candy";

class Candies extends React.Component{
    constructor(){
        super();
    }

    render() {
        const cat1 = {link: "https://www.clipartmax.com/png/full/13-134506_candy-clip-art-at-clker-vector-clip-art-free-clipartix-black-candy.png",
                    title:"Candies", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
        const cat2 = {link: "https://www.clipartmax.com/png/full/56-567092_cake-slice-piece-of-cake-silhouette.png",
                    title:"Cake", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
        const cat3 = {link: "https://www.seekpng.com/png/full/188-1884591_png-file-svg-biscuit-vector-png.png",
                    title:"Biscuit", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
        const cat4 = {link: "https://www.clipartmax.com/png/full/238-2386618_bread-icon-bread.png",
                    title:"Bread", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
        const cat5 = {link: "https://www.clipartmax.com/png/full/29-293846_croissant-bakery-pretzel-breakfast-clip-art-croissant-icon.png",
                    title:"Croissant", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
        const cat6 = {link: "https://www.clipartmax.com/png/full/290-2909568_lollipop-icon-cute-black-and-white-cartoon-lollipop.png",
                    title:"Lollipop", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}            
        return(
            <div style={{display:"flex", flexWrap:"wrap", background:" #282727"}}>
                <Candy obj={cat1}/>
                <Candy obj={cat2}/>
                <Candy obj={cat3}/>
                <Candy obj={cat4}/>
                <Candy obj={cat5}/>
                <Candy obj={cat6}/>
            </div>
        )
    }
}

export default Candies;