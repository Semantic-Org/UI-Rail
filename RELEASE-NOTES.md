### Version 2.2.0 - June 26, 2016

- **Rail** - Fixed incorrect width for `close rail` and `very close rail` caused by variable addition with mixed units `px` + `em` [#3835](https://github.com/Semantic-Org/Semantic-UI/issues/3835)

### Version 2.0.0 - June 30, 2015

- **Rail** - Rail now uses `border-box` instead of `content-box`. This means manually specified rail widths will now need to account for padding. This was added to fix issues where rail `height: 100%` would incorrectly match content when a rail had padding.
- **Rail** - Rail 100% height now uses `border-box` to ensure exact height match to container

### Version 1.8.0 - January 23, 2015

- **Sticky** - Fixes issue with container size not being set explicitly on rail due to improper method renaming

### Version 0.1.0 - Sep 25, 2013