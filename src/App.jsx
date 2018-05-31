var React = require('react');
var createReactClass = require('create-react-class');
var WizardForm = require('./components/WizardForm')

var App = createReactClass({
    render: function() {
        return <div className = "App">
            <h1>The Wizard</h1>
            <WizardForm />
        </div>
    },
    getInitialState: function () {
        return {
            step: 1
        }
    }
});

module.exports = App
