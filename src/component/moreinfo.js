import React from 'react';
import { Redirect } from 'react-router-dom';

class MoreInfo extends React.Component{
    constructor(props){
        super(props);
        alert(this.state);
    }
    render(){
        if(!this.state.firstPage){
            return <Redirect to='/home'></Redirect>
        }
        return(
            <h2> More Info </h2>
        )
    }
}

export default MoreInfo;