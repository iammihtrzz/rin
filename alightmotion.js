var objc = JSON.parse($response.body);
objc = {
  "result": {
    "result": "success",
    "msTime": 1696065127000,
    "accountCreatedMillis": null,
    "licenses": [
      {
        "benefits": [
          "RemoveWatermark",
          "MemberEffects",
          "ProjectPackageSharing",
          "FutureMemberFeatures",
          "AdvancedEasing",
          "CameraObjects",
          "LayerParenting",
          "CloudStorageLowTier"
        ],
        "type": "subscription",
        "store": "apple_app_store",
        "autoRenewing": true,
        "orderNumber": "16120730110719",
        "productId": "alightcreative.motion.3009y_t60_1w",
        "period": "3009y",
        "label": null,
        "details": null,
        "expires": 32811210727000,
        "valid": true,
        "linkStatus": "linked-current"
      }
    ],
    "warnings": []
  }
}
$done({ body: JSON.stringify(objc) });
