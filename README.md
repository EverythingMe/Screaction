You scroll - elements react. Simple and lightweight.

Installation
------------

1. [Download](https://github.com/doat/Screaction/downloads) or fork.
2. Call it from the page `<script src="Screaction.min.js"></script>`
3. Prepare a configuration object.
4. Call `Screaction.init(cfg)` when DOM is ready.

Example usage
----------

```
// configuraition object
var cfg = {
    "scrollRange": "0-400",
    "items": [{
        "element": document.getElementById("el"),
        "props": [{
            "name": "height",
            "start": 100,
            "end": 200
        }]
    }]
};

// load it
window.onload = function(){
    Screaction.init(cfg);
}
```

Simple configuration
--------------------

*scrollRange*
Defines the start and end scrollbar position (in pixels) in which you desire the animations to occur.

*items*
A list of items and their animation properties.

*item*
An element and it's animation properties.

```
{
  "element": document.getElementById("el"),
  "props": [{
    "name": {style property name}, // any element.style key
    "start": {start value}, // numeric
    "end": {end value} // numeric
  }]
}
```





