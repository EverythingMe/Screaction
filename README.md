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
    "scrollRange": "50-300",
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

**scrollRange** - 
Defines the start and end scrollbar position (in pixels) in which you desire the animations to occur. (optional. Default is "0-400")

**items** - 
A list of items and their animation properties.

**item** - 
An element and it's animation properties.

```
{
      "element": {DOM element},
      "props": [{
        "name": {style property name}, // any element.style key
        "start": {start value}, // numeric
        "end": {end value} // numeric
      }]
}
```

Advanced
--------

By default, all start/end values are post fixed with a "px" unit. It can be overriden using a template definition:

```
{
      "element": document.getElementById("el"),
      "props": [{
        "name": "width",
        "valueTemplate": "{value}%"
        "start": 100,
        "end": 200
      }]
}
```

Here's another example, with two values per property:
```
{
    "element": document.getElementById("el"),
    "props": [{
        "name": "backgroundSize",
        "valueTemplate": "{value}% {value}%"
        "start": [100, 100],
        "end": [200, 200]
    }]
}
```

If a single element has multiple properties to be influenced, you can use shorthand:
```
{
    "element": document.getElementById("el"),
    "props": [{
        "name": "top",
        "start": 50,
        "end": 10
    }, {
        "name": "left",
        "start": 20,
        "end": 75
    }, {
        "name": "opacity",
        "start": 1,
        "end": 0.5
    }]
}
```