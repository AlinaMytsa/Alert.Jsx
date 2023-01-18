import React from "react";


class Alert extends React.Component{
  render() {
    const {text, type} = this.props;


    return(
     <div className={"alert alert-" + type} role="alert">
       {text}
     </div>
    )
  }
}

Alert.propTypes = {
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
export default Alert;
