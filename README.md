# UIO Multilingual Demo

Simple demo of the localization features of the Preferences Framework and some basic support to make multilingual sites using UIO easier.

The demo is viewable via Rawgit at http://rawgit.com/waharnum/uio-multilingual/master/demos/index_fa.html

## Available Languages

* English
* French
* Farsi (a right-to-left script)

### Multilingual Demo Component

The `fluid.uiOptions.prefsEditor.multilingualDemo` component extends fluid.uiOptions.prefsEditor in some useful ways:

* The `multilingualOptions` block lets locale, direction and the ToC heading be specified at top level, then distributes them appropriate using options distributions

* The `fluid.uiOptions.prefsEditor.multilingualDemo.addLanguageAttributesToBody` function adds the `locale` and `dir` attributes to the BODY of the markup in the IFRAME when it is loaded, ensuring appropriate text direction and other language-specific behaviour, and allowing CSS selectors based on language and direction within the frame.

### Handling right-to-left script

* A very helpful Mozilla article: https://hacks.mozilla.org/2015/09/building-rtl-aware-web-apps-and-websites-part-1/
* Some elements need RTL-specific styles to work well, these are demonstrated in various `*-RTL` CSS files in `demos/src/css`

### Handling language-specific styles

* Using language-specific selectors is demonstrated in `demos/src/css/PrefsEditor-LanguageSpecific.css`

### Possible Documentation Issue

What's described at http://docs.fluidproject.org/infusion/development/LocalizationInThePreferencesFramework.html#specifying-a-localization doesn't appear to work for setting the locale. It is necessary to directly address the `messageLoader` locale settings.
