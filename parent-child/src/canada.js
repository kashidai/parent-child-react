import React from 'react';
import Child from './child';

class App extends React.Component {

    constructor(props){
        super (props);
        this.state = {
            name:"",
            OnOff: false,

        }
    };


    handleClick　= (e) => {
        console.log(e.target.type);
        this.setState({name: e.target.value});
    };

    toggleButton = () =>{
        this.setState({OnOff:true});
    };

    deleteButton = () =>{
        this.setState({name:""});
    }


    render(){
        // let show;
        //
        // if(this.state.OnOff === false){
        //      show = "";
        // }else{
        //     show = this.state.name;
        // }

        return(
            <div>
                <form>
                    <input
                        type="text"
                        value={this.state.name}
                        placeholder="Input here"
                        onChange={this.handleClick}/>
                </form>
                <Child
                    showText={this.toggleButton}
                    test="test"
                    onoff={this.state.OnOff}
                    deleteText={this.deleteButton}
                />

                {this.state.OnOff === false ? "" : this.state.name }




            </div>
        )
    }



}


export default App;
