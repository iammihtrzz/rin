const mapping = {
    '%E8%BD%A6%E7%A5%A8%E7%A5%A8': ['vip+watch_vip'],
    'Locket': ['Gold']
};
var ua = $request.headers["User-Agent"] || $request.headers["user-agent"],
    obj = JSON.parse($response.body);
obj.Attention = "Chúc mừng bạn đã mở khóa Locket Gold!";
var locket02 = {
        is_sandbox: !1,
        ownership_type: "PURCHASED",
        billing_issues_detected_at: null,
        period_type: "normal",
        expires_date: "3009-09-30T16:12:07Z",
        grace_period_expires_date: null,
        unsubscribe_detected_at: null,
        original_purchase_date: "2023-09-30T16:12:07Z",
        purchase_date: "2023-09-30T16:12:07Z",
        store: "app_store"
    },
    locket01 = {
        grace_period_expires_date: null,
        purchase_date: "2023-09-30T16:12:07Z",
        product_identifier: "com.locket02.premium.yearly",
        expires_date: "3009-09-30T16:12:07Z"
    };
const match = Object.keys(mapping).find(e => ua.includes(e));
if (match) {
    let [e, s] = mapping[match];
    s ? (locket01.product_identifier = s, obj.subscriber.subscriptions[s] = locket02) : obj.subscriber.subscriptions["com.locket02.premium.yearly"] = locket02, obj.subscriber.entitlements[e] = locket01
} else obj.subscriber.subscriptions["com.locket02.premium.yearly"] = locket02, obj.subscriber.entitlements.pro = locket01;
$done({
    body: JSON.stringify(obj)
});
