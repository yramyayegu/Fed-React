import React  from "react";

function Image(props){
    const {image,language} = props;
    let imgstyle = {width: "250px", height: "200px"}
    return(
        <div>
            <img src={image} style={imgstyle} className="App-logo" alt="logo" />
            <p>{language}</p>
        </div>
    )
}


export default Image;



