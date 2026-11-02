var body = $response.body;
var obj = JSON.parse(body);
obj.subscriber.entitlements = {
      "Premium":{
              "expires_date":"3009-09-30T16:12:07Z",
              "product_identifier":"PremiumMonthly",
              "purchase_date":"2023-09-30T16:12:07Z"
      }
  },
obj.subscriber.subscriptions ={
      "PremiumMonthly":{
              "billing_issues_detected_at":null,
              "expires_date":"3009-09-30T16:12:07Z",
              "is_sandbox":false,
              "original_purchase_date":"2023-09-30T16:12:07Z",
              "period_type":"normal",
              "purchase_date":"2023-09-30T16:12:07Z",
              "store":"app_store",
              "unsubscribe_detected_at":null
      }
  }
body = JSON.stringify(obj);
$done({body});
