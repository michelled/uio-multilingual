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
        listeners: {
            "onPrefsEditorReady.addLanguageToMarkup": {
                func: "fluid.uiOptions.prefsEditor.multilingualDemo.addLanguageToBody",
                args: ["{that}", "{that}.options.multilingualOptions.locale"]
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

    // Adds the locale to the BODY in the IFRAME to enable CSS selectors
    // based on the locale
    fluid.uiOptions.prefsEditor.multilingualDemo.addLanguageToBody = function (that, locale) {
        that.prefsEditorLoader.prefsEditor.container.attr("lang", locale);
    };

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
