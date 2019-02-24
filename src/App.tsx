import React, { Component } from 'react';
import moment, { Moment } from 'moment';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Counter />
                </header>
            </div>
        );
    }
}

// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
import { useState, useRef, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const date: Moment = moment();

    useInterval(() => {
        // Your custom logic here
        setCount(count + 1);
    }, 1000);

    return <h1>{date.format('HH:mm:ss')}</h1>;
}

function useInterval(callback: Function, delay: number) {
    const savedCallback: any = useRef();

    // Remember the latest function.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

export default App;
