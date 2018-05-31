var React = require('react');
var createReactClass = require('create-react-class');
var Home = require('./Home');
var Summary = require('./Summary');
var AdditionalInfo = require('./AdditionalInfo');
var ParentsConsent = require('./ParentsConsent');
var CardInfo = require('./CardInfo');

var WizardForm = createReactClass({
    render: function() {
        if (this.state.step === 1) {
            // home page
            return <Home formValues={this.state.formValues}
                goNext={this.goNext}
                saveValues={this.saveValues}/>
        } else if (this.state.step === 2) {
            // Lite - Display Summary
            // Standard/Premium - Check for additional Info
            if (this.state.formValues.accountType === 'Lite') {
                return <Summary formValues={this.state.formValues}
                    goNext={this.goNext}/>
            } else {
                return <AdditionalInfo goNext={this.goNext}
                    getAdditionalInfo={this.getAdditionalInfo}/>
            }
        } else if (this.state.step === 3) {
            // parent's email for consent
            return <ParentsConsent goNext={this.goNext}
                    parentsConsentInfo={this.parentsConsentInfo}/>
        } else if (this.state.step === 4) {
            // Standard - Display Summary
            // Premium - if over 14 then get card info
            if (this.state.additionalInfo.age < 14 || this.state.formValues.accountType === 'Standard') {
                return <Summary formValues={this.state.formValues}
                    parentsConsentInfo={this.state.parentsConsentInfo}
                    goNext={this.goNext}/>
            } else if (this.state.formValues.accountType === 'Premium') {
                return <CardInfo goNext={this.goNext} cardInfo={this.cardInfo}/>
            }
        } else if (this.state.step === 5) {
            // Premium display summary
            return <Summary formValues={this.state.formValues}
                cardInfo={this.state.cardInfo}
                parentsConsentInfo={this.state.parentsConsentInfo}
                goNext={this.goNext}/>
        }
    },
    getInitialState: function () {
        return {
            step: 1,
            formValues: {
                userName: 'john0405',
                firstName: 'John',
                lastName: 'Goel',
                email: 'johngoel@wizard.com',
                accountType: 'Lite'
            }
        }
    },
    parentsConsentInfo: function (parentsConsentInfo) {
        this.setState({
            step: this.state.step + 1,
            parentsConsentInfo: parentsConsentInfo
        })
    },
    getAdditionalInfo: function (additionalInfo) {
        var stepCount = 0;
        if (additionalInfo.age > 14) {
            stepCount = 2
        } else {
            stepCount = 1
        } 
        this.setState({
            step: this.state.step + stepCount,
            additionalInfo: additionalInfo
        })     
    },
    goNext: function (formValues) {
        this.setState({
            step: this.state.step + 1,
            formValues: formValues
        })
    },
    cardInfo: function (cardInfo) {
        this.setState({
            step: this.state.step + 1,
            cardInfo: cardInfo
        })
    },
});

module.exports = WizardForm
