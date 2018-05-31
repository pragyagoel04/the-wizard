var React = require('react');
var createReactClass = require('create-react-class');
var ReactDOM = require('react-dom');

var AdditionalInfo = createReactClass({
    render: function() {
        return (
            <div className = "App">
                <p>Parents Consent Info</p>
                <div className="formValues">
                    <label>Parents Email </label>
                    <input type="text" ref="parentsEmail" />
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
            parentsEmail: ReactDOM.findDOMNode(this.refs.parentsEmail).value
        }
        this.props.parentsConsentInfo(data);
    }
});

module.exports = AdditionalInfo
