import React, { Component } from "react";
import './add-friend.css'
import './list-friend'

class AddFriend extends Component{
    onCloseForm = () =>{
        this.props.onCloseForm();
    }
    render(){
        return(
            <form  className="popup-form fixed-top">
            <div className="auth-inner">
                <label 
                    className="close-btn" 
                    onClick={this.onCloseForm} 
                >&times;</label>
                <h3>Add friends</h3>
                <div className="form-group">
                    <label className="form-label">Email:</label>
                    <input 
                        type="email"
                        className="form-control" 
                        placeholder="email friend"
                        name="mail" 
                       />   
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-block form-btn">Send Email</button>
                </div>
            </div>
        </form>
        );
    }
}
export default AddFriend;