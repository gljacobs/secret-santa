import React from 'react';

class SSInput extends React.Component {
    state = {
        value: ""
    }
    handleChange = (event) => {
        this.setState({value: event.target.value});
    }
    handleClick = (input) => {
        this.props.handleAddSanta(input);
        this.setState({value: ""})
    }
    render() {
        return (
            <div className="input-group mb-3">
                <input id="ssIn" type="text" className="form-control" placeholder="Enter a participant for Secret Santa..." value={this.state.value} onChange={this.handleChange}/>
                <div className="input-group-append">
                    <button className="btn btn-success" type="button" id="button-addon2" onClick={() => this.handleClick(this.state.value)}>+</button>
                </div>
            </div>
        );
    }
}

export default SSInput;