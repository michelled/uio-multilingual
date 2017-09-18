# UIO Multilingual Demo

Simple demo of the localization features of the Preferences Framework.

## Available Languages

* English
* French 
* Farsi (a right-to-left script)

### Notes

### Handling right-to-left script

* A very helpful Mozilla article: https://hacks.mozilla.org/2015/09/building-rtl-aware-web-apps-and-websites-part-1/
* Markup - make a separate `rtl` templates folder and use `<html dir="rtl">` in `SeparatedPanelPrefsEditorFrame.html`
* Style sheets - some elements need RTL-specific styles to work well, these are demonstrated in various `*-RTL` CSS files in `demos/src/css`

### Handling Language-Specific Styles in the Frame

* It would be nice to use something other than *A* in the contrast panel for non-Latin scripts.
* Language-specific CSS selection is well-supported: https://developer.mozilla.org/en-US/docs/Web/CSS/:lang
* The issue is that with UIO in a frame, it takes its language-specific settings from the HTML in the frame, not the parent
* Possible proposal: when a locale is set, UIO should add an appropriate "lang" attribute to the HTML

### Possible Documentation Issue

What's described at http://docs.fluidproject.org/infusion/development/LocalizationInThePreferencesFramework.html#specifying-a-localization doesn't appear to work for setting the locale; see `index_fr.html` for some further notes.
