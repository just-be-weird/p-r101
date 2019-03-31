// import React from 'react';

// //Functional HOC
// const withClass = (WrappedComponent, className) => {
//     return (props) => (<div className={className}>
//                             <WrappedComponent 
//                                 {...props}/>
//                         </div>);
// }

// //Statefull HOC

import React, { Component } from 'react';

const withClass = (WrappedComponent, className) => {
    const WithClass = class extends Component {
        render() {
            return (<div className={className}>
                <WrappedComponent
                    {...this.props}
                    ref={this.props.forwardedRef}//need to forward ref to wrapping component so that wrapping should work
                />
            </div>);
        }
    }
    return React.forwardRef((props, ref) => {
        return <WithClass {...props} forwardedRef={ref} />
    });
}
export default withClass;