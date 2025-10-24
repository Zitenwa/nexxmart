const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();

/**
 * Validates affiliate links to ensure they originate from Nexxmart.
 * Deletes invalid links and logs a security notification.
 *
 * @param {import('firebase-functions/v2/firestore').DocumentSnapshot} snap - Firestore snapshot.
 * @param {import('firebase-functions/v2').EventContext} context - Event context with params.
 * @returns {Promise<null>} Returns null after validation completes.
 */
exports.validateAffiliateLink = async (snap, context) => {
  const data = snap.data();
  const {link, affiliateId} = data;
  const validPrefix = "https://nexxmart.com/ref/";

  if (!link.startsWith(validPrefix)) {
    console.warn(`🚨 Invalid affiliate link for user ${affiliateId}: ${link}`);

    // Delete invalid link
    await db
        .collection("affiliate-links")
        .doc(context.params.linkId)
        .delete();

    // Log or notify
    await db.collection("notifications").add({
      userId: affiliateId,
      type: "security",
      message:
        "Invalid affiliate link removed. " +
        "Only Nexxmart links are allowed.",
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    return null;
  }

  console.log(`✅ Valid affiliate link registered for ${affiliateId}`);
  return null;
};
