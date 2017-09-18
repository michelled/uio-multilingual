(function ($, fluid) {

    fluid.defaults("fluid.uiOptions.prefsEditor.multilingualDemo", {
        gradeNames: ["fluid.uiOptions.prefsEditor"],
        terms: {
            "messagePrefix": "./src/messages"
        },
        "tocTemplate": "src/js/lib/infusion/src/components/tableOfContents/html/TableOfContents.html",
        "ignoreForToC": {
            "overviewPanel": ".flc-overviewPanel"
        },
        // For the distributeOptions block
        multilingualOptions: {
            locale: "en",
            tocHeader: "Table of Contents"
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

    fluid.defaults("fluid.uiOptions.prefsEditor.multilingualDemo.ltr", {
        gradeNames: ["fluid.uiOptions.prefsEditor.multilingualDemo"],
        terms: {
            "templatePrefix": "./src/html/ltr",
        }
    });

    fluid.defaults("fluid.uiOptions.prefsEditor.multilingualDemo.rtl", {
        gradeNames: ["fluid.uiOptions.prefsEditor.multilingualDemo"],
        terms: {
            "templatePrefix": "./src/html/rtl",
        }
    });

})(jQuery, fluid);
