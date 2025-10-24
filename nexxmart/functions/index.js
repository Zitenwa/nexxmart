const {onDocumentCreated} = require("firebase-functions/v2/firestore");
const {validateAffiliateLink} = require("./validateAffilatelink");

exports.validateAffiliateLink = onDocumentCreated(
    "affiliate-links/{linkId}",
    validateAffiliateLink,
);
