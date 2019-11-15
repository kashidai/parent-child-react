import React from "react";


class Child extends React.Component{
    constructor(props) {
        super(props);
        this.func = this.func.bind(this);
    }
    func() {
        this.props.setTest(' HELLOOOOOOOOOOOOOOOOOOO')
    }
    render() {
        return (
            <button onClick={this.func}>btn</button>
        );
    }
}

export default Child;