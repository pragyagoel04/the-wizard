var React = require('react');
var createReactClass = require('create-react-class');
var ReactDOM = require('react-dom');

var AdditionalInfo = createReactClass({
    render: function() {
        return (
            <div className = "App">
                <div className="formValues">
                    <label>Country </label>
                    <input type="text" ref="country" />
                </div>
                <div className="formValues">
                    <label>Date of Birth </label>
                    <input type="date" id="dob" ref="dob" onChange={this.getAge}/>
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
            country: ReactDOM.findDOMNode(this.refs.country).value,
            age: this.state.age
        }
        this.props.getAdditionalInfo(data);
    },
    getAge: function(e) {
        e.preventDefault();
        var dob = +new Date(document.getElementById('dob').value);
        this.setState ({
            age: ~~ ((Date.now() - dob) / (31557600000))
        })
    },
    getInitialState: function () {
        return {
            age: null
        }
    }
});

module.exports = AdditionalInfo
