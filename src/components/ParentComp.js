import React, {PureComponent} from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";

class ParentComp extends React.PureComponent{
    constructor(props){
        super(props)

        this.state = ({
            name: 'cyclobold'
        })
    }
    
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name:'cyclobold'
            })
        }, 2000)
    }


    render(){
        console.log('*********** PARENT COMPONENT RENDERED**********')

        return(
            <div>
                Parent Component
                <RegComp name = {this.state.name}/>
                <PureComp name = {this.state.name} />
            </div>
        )
    }
}

export default ParentComp;