function PaymayaSDK() {

	this.ENVIRONMENT = {
		PRODUCTION: "PRODUCTION",
		SANDBOX: "SANDBOX"
	};
}

PaymayaSDK.prototype = {

	initCheckout: function(publicApiKey, secretApiKey, environment) {
		this._checkoutPublicApiKey = publicApiKey;
		this._checkoutSecretApiKey = secretApiKey;
		this._checkoutEnvironment = environment;
	},

	initPayments: function(publicApiKey, secretApiKey, environment) {
		this._paymentsPublicApiKey = publicApiKey;
		this._paymentsSecretApiKey = secretApiKey;
		this._paymentsEnvironment = environment;
	},

	initCardVault	: function(publicApiKey, secretApiKey, environment) {
		this._cardVaultPublicApiKey = publicApiKey;
		this._cardVaultSecretApiKey = secretApiKey;
		this._cardVaultEnvironment = environment;
	},

	getCheckoutPublicApiKey: function() {
		return this._checkoutPublicApiKey;
	},

	getCheckoutSecretApiKey: function() {
		return this._checkoutSecretApiKey;
	},

	getCheckoutEnvironment: function() {
		return this._checkoutEnvironment;
	},

	getPaymentsPublicApiKey: function() {
		return this._paymentsPublicApiKey;
	},

	getPaymentsSecretApiKey: function() {
		return this._paymentsSecretApiKey;
	},

	getPaymentsEnvironment: function() {
		return this._paymentsEnvironment;
	},

	getCardVaultPublicApiKey: function() {
		return this._cardVaultPublicApiKey;
	},

	getCardVaultSecretApiKey: function() {
		return this._cardVaultSecretApiKey;
	},

	getCardVaultEnvironment: function() {
		return this._cardVaultEnvironment;
	},

}

module.exports = new PaymayaSDK();
