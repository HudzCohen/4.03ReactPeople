
import React from "react";

class PersonForm extends React.Component {

    render() {
        return (
         <div className="row bg-light p-4 rounded mb-3">
            <div className="col-md-3">
                <input type="text"
                 className="form-control" 
                 placeholder="First Name"
                 id="firstName"
                 onChange={this.props.onTextChange}
                 value={this.props.person.firstName}>
                 </input>
            </div>
            <div className="col-md-3">
                <input type="text"
                 className="form-control" 
                 placeholder="Last Name"
                 id="lastName"
                 onChange={this.props.onTextChange}
                 value={this.props.person.lastName}>
                 </input>
            </div>
            <div className="col-md-3">
                <input type="text"
                 className="form-control" 
                 placeholder="Age"
                 id="age"
                 onChange={this.props.onTextChange}
                 value={this.props.person.age}>
                 </input>
            </div>
            <div className="col-md-1">
                <button className="btn btn-dark w-100" onClick={this.props.onAddClick}>Add Person</button>
            </div>
            <div className="col-md-1">
                <button className="btn btn-info w-100" onClick={this.props.onClearClick}>Clear</button>
            </div>
         </div>
        )
    }
}

export default PersonForm;