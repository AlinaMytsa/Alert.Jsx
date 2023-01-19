import React from "react";


class AlertExample extends React.Component{
  render() {
    const {text, type} = this.props;


    return(
     <div className={"alert alert-" + type} role="alert">
       {text}
     </div>
    )
  }
}

AlertExample.propTypes = {
  type: [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ],
}
export default AlertExample;
