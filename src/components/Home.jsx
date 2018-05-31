var React = require('react');
var createReactClass = require('create-react-class');
var ReactDOM = require('react-dom');

var Home = createReactClass({
    render: function() {
        return (
            <div className = "App">
                <p>Please fill the following:</p>
                    <div className="formValues">
                        <label>Username </label>
                        <input type="text" ref="username" defaultValue = {this.props.formValues.userName}/>
                    </div>
                    <div className="formValues">
                        <label>First Name </label>
                        <input type="text" ref="firstname" defaultValue = {this.props.formValues.firstName}/>
                    </div>
                    <div className="formValues">
                        <label>Last Name </label>
                        <input type="text" ref="lastname" defaultValue = {this.props.formValues.lastName}/>
                    </div>
                    <div className="formValues">
                        <label>Email </label>
                        <input type="text" ref="email" defaultValue = {this.props.formValues.email}/>
                    </div>
                    <div className="formValues">
                        <label>Account Type </label>
                        <input className="account-type" id="standard" type="checkbox" value="Standard"/>
                        <label for="standard">Standard</label>
                        <input className="account-type" id="premium" type="checkbox" value="Premium"/>
                        <label for="premium">Premium</label>
                    </div>
                    <div className="formValues">
                        <input type="button" value="Submit" onClick={this.goNext} />
                    </div>
            </div>
        )
    },
    goNext: function (e) {
        e.preventDefault();
        var data = {
            userName: ReactDOM.findDOMNode(this.refs.username).value,
            firstName: ReactDOM.findDOMNode(this.refs.firstname).value,
            lastName: ReactDOM.findDOMNode(this.refs.lastname).value,
            email: ReactDOM.findDOMNode(this.refs.email).value,
        }
        if (document.querySelector('.account-type:checked') === null) {
            data.accountType = 'Lite'
        } else {
            data.accountType = document.querySelector('.account-type:checked').value
        }
        this.props.goNext(data);
    }
});

module.exports = Home
