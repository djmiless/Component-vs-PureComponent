import React, { Component } from "react";

class RegComp extends React.Component{

    render(){

        console.log('Regular component Rendered')
        return(
            <div>
                Regular Component {this.props.name}
            </div>
        )
    }
}

export default RegComp;