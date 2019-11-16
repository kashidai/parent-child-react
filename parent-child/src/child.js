import React from "react";


class Child extends React.Component{
    constructor(props) {
        super(props);
        this.func = this.func.bind(this);
        console.log(this)
    }

    func(){
        this.props.showText();
    }

    delete=()=>{
        console.log(this);
        this.props.deleteText();

    }

    render() {

        console.log(this.props);
        return (
            <div>
                <button onClick={this.func}>btn</button>
                <button onClick={this.delete}>reset</button>
            </div>
        );
    }
}

export default Child;