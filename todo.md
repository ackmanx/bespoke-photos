# MVP Feature
* Selecting an image will cause:
  * Show info in the sidebar... keywords, date taken

# Next Best Thing
* Show count of images in tree node if possible
* Allow editing of keywords
* Allow editing of date taken
* Video file support

# Nice to have Things
* Allow arrow keys to move the selected image when GalleryView has focus
  * Delete key marks as rejected when there's a selected image and Gallery has focus
* Cmd Delete opens up rejected view at any time
* Allow multi-select
  * Arrow keys work when selecting more than one image
  * What to do with sidebar info when more than one image selected?
* Add/edit directory trees for the folder view and persist
* Be aware that if a photo is deleted the thumbnail stays. If a new file is put in the same spot with the same name, the thumbnail won't match
* Resize thumbnails

# Performance
* Lazy load gallery view
  * Verify this is a problem first
* No-thumb mode
* Warning before opening folder with lots of images and no cache yet
  * Give option to switch to no-thumb mode
