(function () {
    var selectedType = "default";
    var color = "white";
    var eventType = "click";
    var count = 1;
    var easing = "linear";
    var size = 120;
    var sample = {
        white: {
            default: {
                color: "#666"
            },
            ripple3: {
                color: "#666",
                count: 3
            },
            rect: {
                color: "#666",
                radius: 0
            },
            easing: {
                color: "#666",
                easing: "easeOutBounce"
            },
            blur: {
                color: "#666",
                width: 0,
                background: "rgba(0,0,0,0.2)",
                boxShadow: "6px 6px 6px rgba(0,0,0,0.2),6px 6px 6px rgba(0,0,0,0.2) inset"
            }
        },
        black: {
            default: {},
            ripple3: {
                count: 3
            },
            rect: {
                radius: 0
            },
            easing: {
                easing: "easeOutBounce"
            },
            blur: {
                width: 0,
                background: "rgba(255,255,255,0.2)",
                boxShadow: "6px 6px 6px rgba(255,255,255,0.2),6px 6px 6px rgba(255,255,255,0.2) inset"
            }
        }
    };

    function exeRipple(e) {
        var opt = {
            x: e.pageX,
            y: e.pageY,
            count: count,
            easing: easing,
            zIndex: 99,
            size: size
        };
        var options = jQuery.extend({}, opt, sample[color][selectedType]);
        new Ripple(options);
    }

    jQuery("#count").change(function () {
        count = $(this).val();
    });
    jQuery("#size").change(function () {
        size = parseInt($(this).val());
    });
    jQuery("#sample").change(function () {
        selectedType = $(this).val();
    });
    jQuery("#easing").change(function () {
        easing = $(this).val();
    });
    jQuery("#bgcolor").change(function () {
        color = $(this).val();
        $(document.body).css("backgroundColor", color);
        if (color === "white") {
            $(document.body).css("color", "black");
        } else {
            $(document.body).css("color", "white");
        }
    });
    jQuery("#event").change(function () {
        var event = $(this).val();
        jQuery(document.body).off(eventType, exeRipple);
        jQuery(document.body).on(event, exeRipple);
        eventType = event;
    });

    jQuery(document.body).on("click", exeRipple);
})();