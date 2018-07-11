jQuery(document).on("ready", function() {
    if (jQuery("#woocommerce_gtpay_sms").is(":checked")) {
        jQuery("#woocommerce_gtpay_sms_url").prop("disabled", false);
        jQuery("#woocommerce_gtpay_sms_message").prop("disabled", false);
    } else {
        jQuery("#woocommerce_gtpay_sms_url").prop("disabled", true);
        jQuery("#woocommerce_gtpay_sms_message").prop("disabled", true);
    }
    jQuery("#woocommerce_gtpay_sms").on("click", function() {
        if (jQuery(this).is(":checked")) {
            jQuery("#woocommerce_gtpay_sms_url").prop("disabled", false);
            jQuery("#woocommerce_gtpay_sms_message").prop("disabled", false);
        } else {
            jQuery("#woocommerce_gtpay_sms_url").prop("disabled", true);
            jQuery("#woocommerce_gtpay_sms_message").prop("disabled", true);
        }
    });
});