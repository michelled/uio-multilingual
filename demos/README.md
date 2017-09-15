# UIO Multilingual Demo

Very simple demo of the localization features of the Preferences Framework.

## Very Fast Notes

### Available Languages

* English
* French (currently using Google Translate)
* Farsi (a right-to-left script)

### Handling right-to-left script

* A very helpful Mozilla article: https://hacks.mozilla.org/2015/09/building-rtl-aware-web-apps-and-websites-part-1/
* Nothing was done except to make a separate `rtl` templates folder and use `<html dir="rtl">` in `SeparatedPanelPrefsEditorFrame.html`

### Handling Language-Specific Styles in the Frame

* It would be nice to use something other than *A* in the contrast panel for non-Latin scripts.
* Language-specific CSS selection is well-supported: https://developer.mozilla.org/en-US/docs/Web/CSS/:lang
* The issue is that with UIO in a frame, it takes its language-specific settings from the HTML in the frame, not the parent
* Possible proposal: when a locale is set, UIO should add an appropriate "lang" attribute to the HTML 
