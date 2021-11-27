import { Component } from "react";
import * as styles from './Gallery.module.css';

class Gallery extends Component {
  state = {
    pictures: [
      "https://cdn.pixabay.com/photo/2015/07/05/13/44/beach-832346__340.jpg",
      "https://cdn.pixabay.com/photo/2014/05/22/16/52/pyrenees-351266__340.jpg",
      "https://cdn.pixabay.com/photo/2016/10/21/09/25/rocks-1757593__340.jpg",
    ],
    index: 0,
    previous: false,
    next: false
  };

  changePicture = (event) => {
    this.setState({index: event.target.id})
  }

  previousPicHandler = () => {
    this.setState({index: this.state.index === 0 ? this.state.pictures.length - 1 : this.state.index - 1})
  }

  nextPicHandler = () => {
    this.setState({index: (this.state.index + 1) % this.state.pictures.length})
  }

  render() {
    return (
        <div className={styles.card}>
            <img src={this.state.pictures[this.state.index]} alt=""></img>
            <input onClick={this.previousPicHandler} type="image" src="https://cdn-icons-png.flaticon.com/512/318/318477.png" alt=""/>
            <input onClick={this.nextPicHandler} type="image" src="https://cdn-icons-png.flaticon.com/512/181/181669.png" alt=""/>
            {this.state.pictures.map((pic, i) => {
                return(
                    <img key={i} id={i} onClick={this.changePicture} src={pic} alt=""></img>
                )
            })}
        </div>);
  }
}

export default Gallery;
