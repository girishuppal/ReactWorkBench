import * as React from "react";
import * as ReactDOM from "react-dom";
import  Hello  from './components/Hello'

class Main extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
    };

    render() {
        return (
            <div>
                <h1>I am a parent first component !</h1>
                <Hello/>
                </div>

        );
    };
}

ReactDOM.render(<Main />, document.getElementById("main"));