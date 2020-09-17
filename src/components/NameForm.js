import React, { Component } from 'react'

class NameForm extends Component {
    constructor(props){
        super(props)
        this.state = {value: ''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value:event.target.value});
    }

    handleSubmit(a){
        alert('An essay was submitted:' + this.state.value);
        a.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name
                     <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

export default NameForm