import React, { Component } from "react";

class ErrorBoundary extends Component {
    state = {
        hasError : false,
        errMSG: ''
    }
    //Lifecycle Method - provides info for error thrown by our application.
    componentDidCatch = (error, info) => {
        this.setState({ hasError: true, errMSG: error });
    }

    render(props) {
        if(this.state.hasError) {
            return <h1>Something went wrong!</h1>
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;