# Style Guide

## Rules
1. Raw Javascript only
2. No syntactic sugar
3. No libraries
4. No compilation
5. Every line must be commented*
6. Avoid "forEach()" when looping, they break scope
7. Break up lines if they go too long
8. Avoid strict `===`/`!==` comparisons, screeps constants do not like them
9. Lines of code do not get line breaks, blocks of code do

\* comments may be omitted on sections of heavily repeated code that all do the exact same thing


## Naming Conventions
Be descriptive, use as many words as absolutely necessary to get the idea across.
We have comments, but we should be able to know what the code does without them 
from variable/class/function names alone.
### snake_case
- variables
- properties
- keys
- arguments
### CapitalCase
- class names
- singletons
- wrappers
### camelCase
- functions
- methods
### filenames
files get name in the format: `scope.name.js`, where `scope` is one of: global, prototype, data, or role.
`main.js` is an exception to this rule as it is main and it's special

## example code

### find
```javascript
let targets = this.find(FIND_MY_STRUCTURES, {
    filter: struct => struct.hits < struct.hitsMax,
});
```

### array for loop
"for each element **of** an array"
```javascript
let names = ["Hanna", "Atlas"];
for (let name of names) {
    console.log(name);
}
```

### object for loop
"for each word **in** a dictionary"
```javascript
let person = {
    id: 1,
    name: "Hanna",
    job: "programmer",
};
for (let prop in person) {
    console.log(prop + ": " + person[prop]);
}
```

## JSDoc Comments

### Class example
```javascript
/**
 * Class representing a dot.
 * @class Dot
 * @extends Point
 */
class Dot extends Point {
    /**
     * Create a dot.
     * @param {number} x - The x value.
     * @param {number} y - The y value.
     * @param {number} width - The width of the dot, in pixels.
     */
    constructor(x, y, width) {
        // ...
    }

    /**
     * Get the dot's width.
     * @return {number} The dot's width, in pixels.
     */
    getWidth() {
        // ...
    }
}
```
### Module example
```javascript
/** @module RoomManager */
```

### Constants
```javascript
/**
 * Enum for tri-state values.
 * @constant {Object} triState
 * @enum {number}
 */
var TRI_STATE = {
        /** The true value */
        TRUE: 1,
        /** The false value */
        FALSE: -1,
        /** The maybe value */
        MAYBE: true
    };
```

### Tags
- @extends - Indicate that a symbol inherits from, and adds to, a parent symbol.
- @class - This function is intended to be called with the "new" keyword.
- @classdesc - Use the following text to describe the entire class.
- @constant - Document an object as a constant.
- @enum - Document a collection of related properties.
- @generator - Indicate that a function is a generator function.
- @global - Document a global object.
- @module - Document a JavaScript module.
- @param - Document the parameter to a function.
- @private - This symbol is meant to be private.
- @returns - Document the return value of a function.
- @static - Document a static member.


# CHANGELOG.md formatting


## Types of changes
- Added: for new features.
- Changed: for changes in existing functionality.
- Removed: for now removed features.
- Fixed: for any bug fixes.

## example
```markdown
# Changelog

## [Unreleased]

### Added

- v1.1 Brazilian Portuguese translation.
- v1.1 German Translation

### Changed

- Use formatter title & description in each language version template
- Replace broken OpenGraph image with an...

### Removed

- Trademark sign previously shown after...

## [1.1.1] - 2023-03-05

### Added

- Arabic translation (#444).
- v1.1 French translation.
- v1.1 Dutch translation (#371).

### Fixed

- Improve French translation (#377).
- Improve id-ID translation (#416).

### Changed

- Upgrade dependencies: Ruby 3.2.1, Middleman, etc.

### Removed

- Unused normalize.css file.
- Identical links assigned in each translation file.
```