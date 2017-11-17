'use strict';

var Block       = require("bs-platform/lib/js/block.js");
var Curry       = require("bs-platform/lib/js/curry.js");
var React       = require("react");
var ReasonReact = require("reason-react/lib/js/src/ReasonReact.js");

var component = ReasonReact.reducerComponent("Counter");

function make() {
  var newrecord = component.slice();
  newrecord[/* didMount */4] = (function (self) {
      self[/* state */2][/* timerId */1][0] = /* Some */[setInterval(Curry._1(self[/* reduce */1], (function () {
                    return /* Tick */0;
                  })), 1000)];
      return /* NoUpdate */0;
    });
  newrecord[/* willUnmount */6] = (function (param) {
      var match = param[/* state */2][/* timerId */1][0];
      if (match) {
        clearInterval(match[0]);
        return /* () */0;
      } else {
        return /* () */0;
      }
    });
  newrecord[/* render */9] = (function (param) {
      var count = param[/* state */2][/* count */0];
      var match = +(count === 1);
      var timesMessage = match !== 0 ? "second" : "seconds";
      var greeting = "You\'ve spent " + (String(count) + (" " + (String(timesMessage) + " on this page!")));
      return React.createElement("div", undefined, greeting);
    });
  newrecord[/* initialState */10] = (function () {
      return /* record */[
              /* count */0,
              /* timerId */[/* None */0]
            ];
    });
  newrecord[/* reducer */12] = (function (_, state) {
      return /* Update */Block.__(0, [/* record */[
                  /* count */state[/* count */0] + 1 | 0,
                  /* timerId */state[/* timerId */1]
                ]]);
    });
  return newrecord;
}

exports.component = component;
exports.make      = make;
/* component Not a pure module */