var React = require('react');
var createReactClass = require('create-react-class');
var ReactDOM = require('react-dom');

var CardInfo = createReactClass({
    render: function() {
        return (
            <div className = "App">
                <p>Credit Card Info</p>
                <div className="formValues">
                    <label>Credit card number </label>
                    <input type="text" ref="ccnum" />
                </div>
                <div className="formValues">
                    <label>Date of expiration </label>
                    <input type="date" ref="expDate" />
                </div>
                <div className="formValues">
                    <label>CVV </label>
                    <input type="text" ref="cvv" />
                </div>
                <div className="formValues">
                    <input type="button" value="Continue" onClick={this.goNext} />
                </div>
            </div>
        )
    },
    goNext: function (e) {
        e.preventDefault();
        var data = {
            ccnum: ReactDOM.findDOMNode(this.refs.ccnum).value,
            expDate: ReactDOM.findDOMNode(this.refs.expDate).value,
            cvv: ReactDOM.findDOMNode(this.refs.cvv).value
        }
        this.props.cardInfo(data);
    }
});

module.exports = CardInfo
