import React from "react";
import Child from "./child";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            test: ""
        };
        this.setTest = this.setTest.bind(this)
    }
    setTest(value) {
        this.setState({
            test: value
        })
    }
    render() {
        let test = this.state.test
        return (
            <div>
                <Child setTest={this.setTest} />
                <p>{ test }</p>
            </div>
        );
    }
}

export default App;