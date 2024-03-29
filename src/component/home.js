import React from 'react';
import { Redirect } from 'react-router-dom';
 
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            isValue: false,
            isValid: false,
            firstPage: false,
            error: 'eg. Prakash Gharti'
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(event){
        // var isNameValid = this.state.name.match(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/);
        var isNameValid = this.state.name.match(/^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/);

        if(this.state.name){
            this.setState({isValue: true});
            // alert('A name entered is:' + this.state.name);
            if(isNameValid){
                this.setState({isValid: true});
                this.setState({firstPage: true});
            }
            else{
                this.setState({error: 'Please Enter valid name'});
            }
        }
        else{
            this.setState({error: 'You must enter name to continue'});
        }
        event.preventDefault();
    }
    handleChange(event){
        this.setState({name: event.target.value});
    }
    render(){
        if(this.state.isValue && this.state.isValid){
            return <Redirect to='/more'></Redirect>
        }
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <input name="name" value={this.state.name} onChange={this.handleChange}></input>
                <labe>{this.state.error}</labe>
                <button type="submit">Continue</button>
                </form>
            </div>
        );
    }
}

export default Home;