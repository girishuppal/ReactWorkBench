import * as React from "react";

export default class Hello extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <div style={{ backgroundColor: 'Gray' }}>
                <h1>I am a child small component</h1>
            </div>
        );
    }
}