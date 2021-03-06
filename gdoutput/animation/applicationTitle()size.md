---
title: "Class: applicationTitle()size"
keywords: mydoc
sidebar: grace-doc-sidebar
toc: false
permalink: /applicationTitle()size/
folder: grace-docs
---

### Definition
Class: applicationTitle()size  

### Description
Not currently available...  

### Properties
  
- `element ->`[`Foreign`](/grace-documentation/Foreign)  
- `arrangeHorizontal ->`[`Done`](/grace-documentation/404)  
Arrange the contents of this container along the horizontal axis. Components which exceed the width of the container will wrap around.
- `arrangeVertical ->`[`Done`](/grace-documentation/404)  
Arrange the contents of this container along the vertical axis. Components which exceed the height of the container will wrap around.
- `on ( kind: `[`String`](/grace-documentation/404)`)do ( response: `[`Procedure`](/grace-documentation/Procedure)[`Event`](/grace-documentation/Event)`) ->`[`Done`](/grace-documentation/404)  
Associate response with event kind
- `windowTitle ->`[`String`](/grace-documentation/404)  
The title of the application window.
- `windowTitle:= ( value: `[`String`](/grace-documentation/404)`) ->`[`Done`](/grace-documentation/404)  
Set the title of the application window.
- `width ->`[`Number`](/grace-documentation/404)  
The current width of the window
- `height ->`[`Number`](/grace-documentation/404)  
the current height of the window
- `onMouseEnterDo ( f: `[`MouseResponse`](/grace-documentation/MouseResponse)`) ->`[`Done`](/grace-documentation/404)  
Respond to a mouse entering this window with the response f.
- `onMouseExitDo ( f: `[`MouseResponse`](/grace-documentation/MouseResponse)`) ->`[`Done`](/grace-documentation/404)  
Respond to a mouse exiting this window with the response f.
- `onMouse ( kind: `[`String`](/grace-documentation/404)`)do ( bl: `[`MouseResponse`](/grace-documentation/MouseResponse)`) ->`[`Done`](/grace-documentation/404)  
Respond to mouse action of kind with response bl
- `startApplication ->`[`Done`](/grace-documentation/404)  
Create window with listeners for mouse enter and exit actions
- `stopApplication ->`[`Done`](/grace-documentation/404)  
Close the window
- `asString ->`[`String`](/grace-documentation/404)  
Return string representing the application

### Definitions
- `var isOpened -> `[`Boolean`](/grace-documentation/404)  
whether window is visible
- `var theWindow -> `[`Foreign`](/grace-documentation/Foreign)  
- `var theTitle -> `[`String`](/grace-documentation/404)  
- `var theWidth -> `[`Number`](/grace-documentation/404)  
- `var theHeight -> `[`Number`](/grace-documentation/404)  
- `events -> `  
- `var isHorizontal -> `[`Boolean`](/grace-documentation/404)  
Whether new items are added to window from left to right or top to bottom
