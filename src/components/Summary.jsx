var React = require('react');
var createReactClass = require('create-react-class');
var ReactDOM = require('react-dom');

var Summary = createReactClass({
    render: function() {
        return (
            <div className = "App">
                {this.consentInfo()}
                <p>Your account type is {this.props.formValues.accountType}</p>
                <p>First Name: {this.props.formValues.firstName}</p>
                <p>Last Name: {this.props.formValues.lastName}</p>
                <p>User Name: {this.props.formValues.userName}</p>
                <p>Email: {this.props.formValues.email}</p>
                {this.cardInfo()}
            </div>
        )
    },
    cardInfo: function () {
        if (this.props.cardInfo) {
            return (
                <div className = "App">
                    <p>Card Number: {this.props.cardInfo.ccnum}</p>
                    <p>CVV: {this.props.cardInfo.cvv}</p>
                    <p>Expiration Date: {this.props.cardInfo.expDate}</p>
                </div>
            )
        }
    },
    consentInfo: function () {
        if (this.props.parentsConsentInfo) {
            return (
                <div className = "App">
                    An email has been sent to {this.props.parentsConsentInfo.parentsEmail}
                </div>
            )
        }
    },
    goNext: function (e) {
        e.preventDefault();
        this.props.goNext();
    }
});

module.exports = Summary
