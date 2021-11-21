import React from "react";
import Employee from "./Employee";

class Employees extends React.Component {
  constructor() {
    super();
  }

  render() {
    const emp1 = {
      img: "https://media.istockphoto.com/photos/portrait-young-confident-smart-asian-businessman-look-at-camera-and-picture-id1288538088?b=1&k=20&m=1288538088&s=170667a&w=0&h=3efMku7kSXUhpVrErAVVgxp6G91tRZ_5seygOn68RnE=",
      name: "Ron",
      roll: "financial director",
    };
    const emp2 = {
      img: "https://media.istockphoto.com/photos/businessman-over-white-background-picture-id685132241?k=20&m=685132241&s=612x612&w=0&h=lQ7jflTz4xsm8mrrdSmSKFxMZDJ0zdxaPEmA9SriFb8=",
      name: "Dan",
      roll: "advertising manager",
    };
    const emp3 = {
      img: "https://media.istockphoto.com/photos/young-attractive-and-beautiful-chinese-woman-with-welcoming-friendly-picture-id151557366?k=20&m=151557366&s=612x612&w=0&h=8xf45Ow7O2oDF13oSCD9k2zN8nfKjchzjSfdZmXhiks=",
      name: "Yam",
      roll: "secretary",
    };
    return (
      <div style={{display:"flex", marginTop:"2%", background:"#1313a1"}}>
        <Employee obj={emp1} />
        <Employee obj={emp2} />
        <Employee obj={emp3} />
      </div>
    );
  }
}

export default Employees;
