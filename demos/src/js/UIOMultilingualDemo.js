(function ($, fluid) {

    fluid.defaults("fluid.uiOptions.prefsEditor.multilingualDemo", {
        gradeNames: ["fluid.uiOptions.prefsEditor"],
        terms: {
            "messagePrefix": "./src/messages",
            "templatePrefix": "./src/html"
        },
        "tocTemplate": "src/js/lib/infusion/src/components/tableOfContents/html/TableOfContents.html",
        "ignoreForToC": {
            "overviewPanel": ".flc-overviewPanel"
        },
        // For the distributeOptions block
        multilingualOptions: {
            locale: "en",
            tocHeader: "Table of Contents",
            direction: "ltr"
        },
        listeners: {
            "onPrefsEditorReady.addLanguageAttributesToBody": {
                func: "fluid.uiOptions.prefsEditor.multilingualDemo.addLanguageAttributesToBody",
                args: ["{that}", "{that}.options.multilingualOptions.locale", "{that}.options.multilingualOptions.direction"]
            }
        },
        distributeOptions: {
            tocHeader: {
                target: "{that fluid.tableOfContents}.options.strings.tocHeader",
                source: "{that}.options.multilingualOptions.tocHeader"
            },
            locale: {
                target: "{that prefsEditorLoader}.options.components.messageLoader.options.locale",
                source: "{that}.options.multilingualOptions.locale"
            }
        }
    });

    // Adds the locale and direction to the BODY in the IFRAME to enable CSS
    // based on the locale and direction
    fluid.uiOptions.prefsEditor.multilingualDemo.addLanguageAttributesToBody = function (that, locale, direction) {
        that.prefsEditorLoader.prefsEditor.container.attr("lang", locale);
        that.prefsEditorLoader.prefsEditor.container.attr("dir", direction);
    };

})(jQuery, fluid);
