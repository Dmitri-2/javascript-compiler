"use strict";
var___95__prelude = do_import("standardGrace", gracecode_standardGrace);
function gracecode_confidential__95__test() {
  setModuleName("confidential_test");
  importedModules["confidential_test"] = this;
  var module$confidential__95__test = this;
  this.definitionModule = "confidential_test";
  this.definitionLine = 0;
  var var_prelude = var___95__prelude;
  this.closureKeys = this.closureKeys || [];
  this.closureKeys.push("outer_confidential__95__test_0");
  this.outer_confidential__95__test_0 = var_prelude;
  // Dialect "standardGrace"
  var_prelude = do_import("standardGrace", gracecode_standardGrace);
  this.outer = var_prelude;
  setLineNumber(8);    // compilenode method
  var func0 = function(argcv) {    // method runMe
    var returnTarget = invocationCount;
    invocationCount++;
    setModuleName("confidential_test");
    setLineNumber(9);    // compilenode identifier
    var call1 = Grace_print(var_accessible);
    return call1;
  };    // end of method runMe
  this.methods["runMe"] = func0;
  func0.paramCounts = [0];
  func0.paramNames = [];
  func0.typeParamNames = [];
  func0.definitionLine = 8;
  func0.definitionModule = "confidential_test";
  setLineNumber(12);    // compilenode method
  var func2 = function(argcv) {    // method dontRunMe
    var returnTarget = invocationCount;
    invocationCount++;
    setModuleName("confidential_test");
    setLineNumber(14);    // compilenode string
    var string3 = new GraceString("This should NOT print...");
    var call4 = Grace_print(string3);
    return call4;
  };    // end of method dontRunMe
  func2.confidential = true;
  this.methods["dontRunMe"] = func2;
  func2.paramCounts = [0];
  func2.paramNames = [];
  func2.typeParamNames = [];
  func2.definitionLine = 12;
  func2.definitionModule = "confidential_test";
  setLineNumber(4);    // compilenode string
  var string5 = new GraceString("This should print...");
  var var_accessible = string5;
  var func6 = function(argcv) {     // accessor method accessible
    if (var_accessible === undefined) raiseUninitializedVariable("accessible");
    return var_accessible;
  };    // end of method accessible
  this.methods["accessible"] = func6;
  func6.paramCounts = [0];
  func6.paramNames = [];
  func6.typeParamNames = [];
  func6.definitionLine = 4;
  func6.definitionModule = "confidential_test";
  this.methods["accessible"].debug = "def";
  setLineNumber(5);    // compilenode string
  var string7 = new GraceString("This should NOT print...");
  var var_unaccessible = string7;
  return this;
}
gracecode_confidential__95__test.imports = ["standardGrace"];
if (typeof gctCache !== "undefined")
  gctCache["confidential_test"] = "classes:\nconfidential:\n dontRunMe\ndialect:\n standardGrace\nfresh-methods:\nmodules:\n collectionsPrelude\n standardGrace\npath:\n /Users/Dmitri/LocalMinigrace/modules/confidential_test.grace\npublic:\n accessible\n runMe\ntypes:\n";
if (typeof originalSourceLines !== "undefined") {
  originalSourceLines["confidential_test"] = [
    "",
    "",
    "",
    "def accessible is public = \"This should print...\"",
    "def unaccessible is confidential = \"This should NOT print...\"",
    "",
    "",
    "method runMe {",
    "     print (accessible)",
    "}",
    "",
    "method dontRunMe is confidential",
    "{",
    "     print \"This should NOT print...\"",
    "}" ];
}
if (typeof global !== "undefined")
  global.gracecode_confidential__95__test = gracecode_confidential__95__test;
if (typeof window !== "undefined")
  window.gracecode_confidential__95__test = gracecode_confidential__95__test;
