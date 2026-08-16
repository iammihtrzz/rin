var obj = JSON.parse($response.body);
obj.subscriber.entitlements = {
      "pro":{
              "expires_date":"3009-09-30T16:12:07Z",
              "product_identifier":"cw_1999_1y_3d0",
              "purchase_date":"2023-09-30T16:12:07Z"
      }
  },
obj.subscriber.subscriptions ={
      "cw_1999_1y_3d0":{
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
$done({body: JSON.stringify(obj)});
