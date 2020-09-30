import React, { Component } from 'react';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {connect} from 'react-redux';

class Counter extends Component {
    state = {
        counter: 0,
        results: [],
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
            default:
                ;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.counterValue} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.addValueCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.subValueCounter}  />
                <CounterControl label="Reset" clicked={this.props.resetCounter}  />
                <hr />
                <button onClick={() => this.props.storeResult(this.props.counterValue)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map((result, index) =>
                        <li key={index} onClick={() => this.props.deleteResult(index)}>{result}</li>)
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        counterValue: state.counter,
        storedResults: state.results,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        addValueCounter: () => dispatch({type: 'ADD', value: 5}),
        subValueCounter: () => dispatch({type: 'SUBTRACT', value: 5}),
        storeResult: (counterValue) => dispatch({type: 'STORE_RESULT', value: counterValue}),
        deleteResult: (index) => dispatch({type: 'DELETE_RESULT', value: index}),
        resetCounter: () => dispatch({type: 'RESET'}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
