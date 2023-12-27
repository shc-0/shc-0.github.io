'use client';
// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Caml_option from "rescript/lib/es6/caml_option.js";

function useMounted() {
  var match = React.useState(function () {
        return false;
      });
  var setMounted = match[1];
  React.useEffect((function () {
          setMounted(function (param) {
                return true;
              });
        }), undefined);
  return match[0];
}

function useSyncedState(client, server) {
  var initial = server !== undefined ? Caml_option.valFromOption(server) : client;
  var match = React.useState(function () {
        return initial;
      });
  var setState = match[1];
  React.useEffect((function () {
          setState(function (param) {
                return client;
              });
        }), [client]);
  return match[0];
}

export {
  useMounted ,
  useSyncedState ,
}
/* react Not a pure module */
