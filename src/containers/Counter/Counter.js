import React, { Component } from 'react';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {connect} from 'react-redux';
import * as counterActions from '../../store/actions/counter';
import * as resultsActions from '../../store/actions/results';

class Counter extends Component {
    state = {
        counter: 0,
        results: [],
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
        counterValue: state.counter.counter,
        storedResults: state.results.results,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch(counterActions.increment()),
        onDecrementCounter: () => dispatch(counterActions.decrement()),
        addValueCounter: () => dispatch(counterActions.addValue(5)),
        subValueCounter: () => dispatch(counterActions.subtractValue(5)),
        resetCounter: () => dispatch(counterActions.reset()),
        storeResult: (counterValue) => dispatch(resultsActions.storeResult(counterValue)),
        deleteResult: (index) => dispatch(resultsActions.deleteResult(index)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
