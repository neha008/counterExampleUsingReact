
import React from 'react';
import ReactDOM from 'react-dom';
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: props.count
        };

    }

    componentDidMount() {
        try {
            const stringCount = localStorage.getItem('count');
            const count = parseInt(stringCount, 10);
          if(!isNaN(count)){
                this.setState(() => ({ count }));
          }
            
        }
        catch (e) {
            //do nothing
        }

    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count){
            localStorage.setItem('count', this.state.count);
        }
        
    }

    componentWillUnmount() {
        console.log('componentwillunmount');
    }
    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };

        })
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        })
    }
    //passing a function to setState is preffered way
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        })
        // this.setState((prevState)=>{
        //     return{
        //         count : prevState.count+1
        //     }
        // })

        //passing an object to setState is not  preffered way
                //this.setState is asynchronous
               //(it creats problem when we need access to previos state )

        // this.setState({
        //     count:0
        // }
        // )
        // this.setState({
        //     count: this.state.count +1
        // })
    }
    render() {
        return (
            <div>
                <h1>Count : {this.state.count} </h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }

}

Counter.defaultProps={
    count :0
}
//ReactDOM.render(<Counter count={23} />, document.getElementById('app'));
ReactDOM.render(<Counter />, document.getElementById('app'));

