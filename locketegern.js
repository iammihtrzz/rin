var request = $request;
const options = {
    url: "https://api.revenuecat.com/v1/product_entitlement_mapping",
    headers: {
     'Authorization' : request.headers["authorization"],
     'X-Platform' : 'iOS' ,
     'User-Agent' : request.headers["user-agent"]
    }
}
$httpClient.get(options, function(error, newResponse, data){
const ent = JSON.parse(data);
let jsonToUpdate = {
        "request_date_ms": 1696090327000,
        "request_date": "2023-09-30T16:12:07Z",
        "subscriber": {
            "entitlement": {},
            "first_seen": "2023-09-30T16:12:07Z",
            "original_application_version": "1.90.0",
            "last_seen": "2023-09-30T16:12:07Z",
            "other_purchases": {},
            "management_url": null,
            "subscriptions": {},
            "entitlements": {},
            "original_purchase_date": "2023-09-30T16:12:07Z",
            "original_app_user_id": "70B24288-83C4-4035-B001-572285B21AE1",
            "non_subscriptions": {}
        }
    };
const productEntitlementMapping = ent.product_entitlement_mapping
for (const [entitlementId, productInfo] of Object.entries(productEntitlementMapping)) {
  const productIdentifier = productInfo.product_identifier;
  const entitlements = productInfo.entitlements;
  for (const entitlement of entitlements) {
    jsonToUpdate.subscriber.entitlements[entitlement] = {
      "purchase_date": "2023-09-30T16:12:07Z",
      "original_purchase_date": "2023-09-30T16:12:07Z",
      "expires_date": "3009-09-30T16:12:07Z",
      "is_sandbox" : false,
      "ownership_type": "PURCHASED",
      "store": "app_store",
      "product_identifier": productIdentifier
    };
      jsonToUpdate.subscriber.subscriptions[productIdentifier] = {
      "expires_date": "3009-09-30T16:12:07Z",
      "original_purchase_date": "2023-09-30T16:12:07Z",
      "purchase_date": "2023-09-30T16:12:07Z",
      "is_sandbox" : false,
      "ownership_type": "PURCHASED",
      "store": "app_store"
    };
  }
}
body = JSON.stringify(jsonToUpdate);
$done({body});
});
