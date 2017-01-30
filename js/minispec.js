"use strict";
var___95__prelude = do_import("standardGrace", gracecode_standardGrace);
function gracecode_minispec() {
  setModuleName("minispec");
  importedModules["minispec"] = this;
  var module$minispec = this;
  this.definitionModule = "minispec";
  this.definitionLine = 0;
  var var_prelude = var___95__prelude;
  this.closureKeys = this.closureKeys || [];
  this.closureKeys.push("outer_minispec_0");
  this.outer_minispec_0 = var_prelude;
  // Dialect "standardGrace"
  var_prelude = do_import("standardGrace", gracecode_standardGrace);
  this.outer = var_prelude;
  setLineNumber(1);    // compilenode import
  // Import of "gUnit" as gu
  if (typeof gracecode_gUnit == "undefined")
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString("could not find module gUnit"));
  var var_gu = do_import("gUnit", gracecode_gUnit);
  var func0 = function(argcv) {     // accessor method gu
    if (var_gu === undefined) raiseUninitializedVariable("gu");
    return var_gu;
  };    // end of method gu
  this.methods["gu"] = func0;
  func0.paramCounts = [0];
  func0.paramNames = [];
  func0.typeParamNames = [];
  func0.definitionLine = 1;
  func0.definitionModule = "minispec";
  func0.debug = "import";
  func0.confidential = true;
  setModuleName("minispec");
  setLineNumber(3);    // compilenode identifier
  var initFun1 = callmethod(var_prelude, "methods$build(3)", [null], this, [], []);  // compileReuseCall
  setLineNumber(16);    // compilenode method
  var func2 = function(argcv) {    // method numberOfErrorsToRerun
    var returnTarget = invocationCount;
    invocationCount++;
    setModuleName("minispec");
    // call case 6: other requests
    var call3 = callmethod(var_gu, "numberOfErrorsToRerun", []);
    if (!Grace_isTrue(callmethod(var_Number, "match(1)", [1], call3)))
        raiseTypeError(
            "result of method numberOfErrorsToRerun does not have type" + 
            "Number.", var_Number, call3);
    return call3;
  };    // end of method numberOfErrorsToRerun
  this.methods["numberOfErrorsToRerun"] = func2;
  func2.paramCounts = [0];
  func2.paramNames = [];
  func2.typeParamNames = [];
  func2.definitionLine = 16;
  func2.definitionModule = "minispec";
  setLineNumber(17);    // compilenode method
  var func4 = function(argcv, var_n) {    // method numberOfErrorsToRerun:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    setModuleName("minispec");
    // Start argument type-checks
    if (!Grace_isTrue(callmethod(var_Number, "match(1)",  [1], var_n)))
        raiseTypeError("in request of `numberOfErrorsToRerun:=(_)`, " +
          "argument 1 is not of type " +
          "Number", var_Number, var_n);
    // End argument type-checks
    setLineNumber(18);    // compilenode identifier
    // call case 6: other requests
    var call5 = callmethod(var_gu, "numberOfErrorsToRerun:=(1)", [1], var_n);
    return call5;
  };    // end of method numberOfErrorsToRerun:=(_)
  func4.paramTypes = [];
  func4.paramTypes.push([type_Number, "n"]);
  this.methods["numberOfErrorsToRerun:=(1)"] = func4;
  func4.paramCounts = [1];
  func4.paramNames = ["n"];
  func4.typeParamNames = [];
  func4.definitionLine = 17;
  func4.definitionModule = "minispec";
  setLineNumber(34);    // compilenode method
  var func6 = function(argcv, var_cond, var_complaint) {    // method expect(_)orSay(_)
    var returnTarget = invocationCount;
    invocationCount++;
    setModuleName("minispec");
    // Start argument type-checks
    if (!Grace_isTrue(callmethod(var_Boolean, "match(1)",  [1], var_cond)))
        raiseTypeError("in request of `expect(_)orSay(_)`, " +
          "argument 1 to `expect`  is not of type " +
          "Boolean", var_Boolean, var_cond);
    if (!Grace_isTrue(callmethod(var_String, "match(1)",  [1], var_complaint)))
        raiseTypeError("in request of `expect(_)orSay(_)`, " +
          "argument 1 to `orSay`  is not of type " +
          "String", var_String, var_complaint);
    // End argument type-checks
    setLineNumber(35);    // compilenode identifier
    // call case 6: other requests
    var call7 = callmethod(var_mtAssertion, "assert(1)description(1)", [1, 1], var_cond, var_complaint);
    return call7;
  };    // end of method expect(_)orSay(_)
  func6.paramTypes = [];
  func6.paramTypes.push([type_Boolean, "cond"]);
  func6.paramTypes.push([type_String, "complaint"]);
  this.methods["expect(1)orSay(1)"] = func6;
  func6.paramCounts = [1, 1];
  func6.paramNames = ["cond", "complaint"];
  func6.typeParamNames = [];
  func6.definitionLine = 34;
  func6.definitionModule = "minispec";
  setLineNumber(38);    // compilenode method
  var func8 = function(argcv, var_s1, var_s2) {    // method expect(_)toBe(_)
    var returnTarget = invocationCount;
    invocationCount++;
    setModuleName("minispec");
    // Start argument type-checks
    if (!Grace_isTrue(callmethod(var_Object, "match(1)",  [1], var_s1)))
        raiseTypeError("in request of `expect(_)toBe(_)`, " +
          "argument 1 to `expect`  is not of type " +
          "Object", var_Object, var_s1);
    if (!Grace_isTrue(callmethod(var_Object, "match(1)",  [1], var_s2)))
        raiseTypeError("in request of `expect(_)toBe(_)`, " +
          "argument 1 to `toBe`  is not of type " +
          "Object", var_Object, var_s2);
    // End argument type-checks
    setLineNumber(39);    // compilenode identifier
    // call case 6: other requests
    var call9 = callmethod(var_mtAssertion, "assert(1)shouldBe(1)", [1, 1], var_s1, var_s2);
    return call9;
  };    // end of method expect(_)toBe(_)
  func8.paramTypes = [];
  func8.paramTypes.push([type_Object, "s1"]);
  func8.paramTypes.push([type_Object, "s2"]);
  this.methods["expect(1)toBe(1)"] = func8;
  func8.paramCounts = [1, 1];
  func8.paramNames = ["s1", "s2"];
  func8.typeParamNames = [];
  func8.definitionLine = 38;
  func8.definitionModule = "minispec";
  setLineNumber(42);    // compilenode method
  var func10 = function(argcv, var_s1, var_s2, var_complaint) {    // method expect(_)toBe(_)orSay(_)
    var returnTarget = invocationCount;
    invocationCount++;
    setModuleName("minispec");
    // Start argument type-checks
    if (!Grace_isTrue(callmethod(var_Object, "match(1)",  [1], var_s1)))
        raiseTypeError("in request of `expect(_)toBe(_)orSay(_)`, " +
          "argument 1 to `expect`  is not of type " +
          "Object", var_Object, var_s1);
    if (!Grace_isTrue(callmethod(var_Object, "match(1)",  [1], var_s2)))
        raiseTypeError("in request of `expect(_)toBe(_)orSay(_)`, " +
          "argument 1 to `toBe`  is not of type " +
          "Object", var_Object, var_s2);
    // End argument type-checks
    setLineNumber(43);    // compilenode identifier
    var opresult12 = callmethod(var_s1, "==(1)", [1], var_s2);
    setLineNumber(44);    // compilenode identifier
    // call case 6: other requests
    setLineNumber(43);    // compilenode identifier
    var call11 = callmethod(var_mtAssertion, "assert(1)description(1)", [1, 1], opresult12, var_complaint);
    return call11;
  };    // end of method expect(_)toBe(_)orSay(_)
  func10.paramTypes = [];
  func10.paramTypes.push([type_Object, "s1"]);
  func10.paramTypes.push([type_Object, "s2"]);
  func10.paramTypes.push([]);
  this.methods["expect(1)toBe(1)orSay(1)"] = func10;
  func10.paramCounts = [1, 1, 1];
  func10.paramNames = ["s1", "s2", "complaint"];
  func10.typeParamNames = [];
  func10.definitionLine = 42;
  func10.definitionModule = "minispec";
  setLineNumber(47);    // compilenode method
  var func13 = function(argcv, var_s1, var_s2) {    // method expect(_)notToBe(_)
    var returnTarget = invocationCount;
    invocationCount++;
    setModuleName("minispec");
    // Start argument type-checks
    if (!Grace_isTrue(callmethod(var_Object, "match(1)",  [1], var_s1)))
        raiseTypeError("in request of `expect(_)notToBe(_)`, " +
          "argument 1 to `expect`  is not of type " +
          "Object", var_Object, var_s1);
    if (!Grace_isTrue(callmethod(var_Object, "match(1)",  [1], var_s2)))
        raiseTypeError("in request of `expect(_)notToBe(_)`, " +
          "argument 1 to `notToBe`  is not of type " +
          "Object", var_Object, var_s2);
    // End argument type-checks
    setLineNumber(48);    // compilenode identifier
    // call case 6: other requests
    var call14 = callmethod(var_mtAssertion, "assert(1)shouldntBe(1)", [1, 1], var_s1, var_s2);
    return call14;
  };    // end of method expect(_)notToBe(_)
  func13.paramTypes = [];
  func13.paramTypes.push([type_Object, "s1"]);
  func13.paramTypes.push([type_Object, "s2"]);
  this.methods["expect(1)notToBe(1)"] = func13;
  func13.paramCounts = [1, 1];
  func13.paramNames = ["s1", "s2"];
  func13.typeParamNames = [];
  func13.definitionLine = 47;
  func13.definitionModule = "minispec";
  setLineNumber(51);    // compilenode method
  var func15 = function(argcv, var_s1, var_s2, var_complaint) {    // method expect(_)notToBe(_)orSay(_)
    var returnTarget = invocationCount;
    invocationCount++;
    setModuleName("minispec");
    // Start argument type-checks
    if (!Grace_isTrue(callmethod(var_Object, "match(1)",  [1], var_s1)))
        raiseTypeError("in request of `expect(_)notToBe(_)orSay(_)`, " +
          "argument 1 to `expect`  is not of type " +
          "Object", var_Object, var_s1);
    if (!Grace_isTrue(callmethod(var_Object, "match(1)",  [1], var_s2)))
        raiseTypeError("in request of `expect(_)notToBe(_)orSay(_)`, " +
          "argument 1 to `notToBe`  is not of type " +
          "Object", var_Object, var_s2);
    // End argument type-checks
    setLineNumber(52);    // compilenode identifier
    var opresult17 = callmethod(var_s1, "\u2260(1)", [1], var_s2);
    setLineNumber(53);    // compilenode identifier
    // call case 6: other requests
    setLineNumber(52);    // compilenode identifier
    var call16 = callmethod(var_mtAssertion, "assert(1)description(1)", [1, 1], opresult17, var_complaint);
    return call16;
  };    // end of method expect(_)notToBe(_)orSay(_)
  func15.paramTypes = [];
  func15.paramTypes.push([type_Object, "s1"]);
  func15.paramTypes.push([type_Object, "s2"]);
  func15.paramTypes.push([]);
  this.methods["expect(1)notToBe(1)orSay(1)"] = func15;
  func15.paramCounts = [1, 1, 1];
  func15.paramNames = ["s1", "s2", "complaint"];
  func15.typeParamNames = [];
  func15.definitionLine = 51;
  func15.definitionModule = "minispec";
  setLineNumber(56);    // compilenode method
  var func18 = function(argcv, var_n1, var_n2, var_epsilon) {    // method expect(_)toBe(_)within(_)
    var returnTarget = invocationCount;
    invocationCount++;
    setModuleName("minispec");
    // Start argument type-checks
    if (!Grace_isTrue(callmethod(var_Number, "match(1)",  [1], var_n1)))
        raiseTypeError("in request of `expect(_)toBe(_)within(_)`, " +
          "argument 1 to `expect`  is not of type " +
          "Number", var_Number, var_n1);
    if (!Grace_isTrue(callmethod(var_Number, "match(1)",  [1], var_n2)))
        raiseTypeError("in request of `expect(_)toBe(_)within(_)`, " +
          "argument 1 to `toBe`  is not of type " +
          "Number", var_Number, var_n2);
    if (!Grace_isTrue(callmethod(var_Number, "match(1)",  [1], var_epsilon)))
        raiseTypeError("in request of `expect(_)toBe(_)within(_)`, " +
          "argument 1 to `within`  is not of type " +
          "Number", var_Number, var_epsilon);
    // End argument type-checks
    setLineNumber(57);    // compilenode identifier
    // call case 6: other requests
    var call19 = callmethod(var_mtAssertion, "assert(1)shouldEqual(1)within(1)", [1, 1, 1], var_n1, var_n2, var_epsilon);
    return call19;
  };    // end of method expect(_)toBe(_)within(_)
  func18.paramTypes = [];
  func18.paramTypes.push([type_Number, "n1"]);
  func18.paramTypes.push([type_Number, "n2"]);
  func18.paramTypes.push([type_Number, "epsilon"]);
  this.methods["expect(1)toBe(1)within(1)"] = func18;
  func18.paramCounts = [1, 1, 1];
  func18.paramNames = ["n1", "n2", "epsilon"];
  func18.typeParamNames = [];
  func18.definitionLine = 56;
  func18.definitionModule = "minispec";
  setLineNumber(60);    // compilenode method
  var func20 = function(argcv, var_b, var_desired) {    // method expect(_)toRaise(_)
    var returnTarget = invocationCount;
    invocationCount++;
    setModuleName("minispec");
    // Start argument type-checks
    if (!Grace_isTrue(callmethod(var_Block, "match(1)",  [1], var_b)))
        raiseTypeError("in request of `expect(_)toRaise(_)`, " +
          "argument 1 to `expect`  is not of type " +
          "Block", var_Block, var_b);
    // call case 5: prelude request
    var call21 = callmethod(var_prelude, "ExceptionKind", []);
    if (!Grace_isTrue(callmethod(call21, "match(1)",  [1], var_desired)))
        raiseTypeError("in request of `expect(_)toRaise(_)`, " +
          "argument 1 to `toRaise`  is not of type " +
          "prelude.ExceptionKind", call21, var_desired);
    // End argument type-checks
    setLineNumber(61);    // compilenode identifier
    // call case 6: other requests
    var call22 = callmethod(var_mtAssertion, "assert(1)shouldRaise(1)", [1, 1], var_b, var_desired);
    return call22;
  };    // end of method expect(_)toRaise(_)
  func20.paramTypes = [];
  func20.paramTypes.push([type_Block, "b"]);
  func20.paramTypes.push([]);
  this.methods["expect(1)toRaise(1)"] = func20;
  func20.paramCounts = [1, 1];
  func20.paramNames = ["b", "desired"];
  func20.typeParamNames = [];
  func20.definitionLine = 60;
  func20.definitionModule = "minispec";
  setLineNumber(64);    // compilenode method
  var func23 = function(argcv, var_b, var_undesired) {    // method expect(_)notToRaise(_)
    var returnTarget = invocationCount;
    invocationCount++;
    setModuleName("minispec");
    // Start argument type-checks
    if (!Grace_isTrue(callmethod(var_Block, "match(1)",  [1], var_b)))
        raiseTypeError("in request of `expect(_)notToRaise(_)`, " +
          "argument 1 to `expect`  is not of type " +
          "Block", var_Block, var_b);
    // call case 5: prelude request
    var call24 = callmethod(var_prelude, "ExceptionKind", []);
    if (!Grace_isTrue(callmethod(call24, "match(1)",  [1], var_undesired)))
        raiseTypeError("in request of `expect(_)notToRaise(_)`, " +
          "argument 1 to `notToRaise`  is not of type " +
          "prelude.ExceptionKind", call24, var_undesired);
    // End argument type-checks
    setLineNumber(65);    // compilenode identifier
    // call case 6: other requests
    var call25 = callmethod(var_mtAssertion, "assert(1)shouldntRaise(1)", [1, 1], var_b, var_undesired);
    return call25;
  };    // end of method expect(_)notToRaise(_)
  func23.paramTypes = [];
  func23.paramTypes.push([type_Block, "b"]);
  func23.paramTypes.push([]);
  this.methods["expect(1)notToRaise(1)"] = func23;
  func23.paramCounts = [1, 1];
  func23.paramNames = ["b", "undesired"];
  func23.typeParamNames = [];
  func23.definitionLine = 64;
  func23.definitionModule = "minispec";
  setLineNumber(68);    // compilenode method
  var func26 = function(argcv, var_s, var_desired) {    // method expect(_)toHaveType(_)
    var returnTarget = invocationCount;
    invocationCount++;
    setModuleName("minispec");
    // Start argument type-checks
    if (!Grace_isTrue(callmethod(var_Object, "match(1)",  [1], var_s)))
        raiseTypeError("in request of `expect(_)toHaveType(_)`, " +
          "argument 1 to `expect`  is not of type " +
          "Object", var_Object, var_s);
    if (!Grace_isTrue(callmethod(var_Type, "match(1)",  [1], var_desired)))
        raiseTypeError("in request of `expect(_)toHaveType(_)`, " +
          "argument 1 to `toHaveType`  is not of type " +
          "Type", var_Type, var_desired);
    // End argument type-checks
    setLineNumber(69);    // compilenode identifier
    // call case 6: other requests
    var call27 = callmethod(var_mtAssertion, "assert(1)hasType(1)", [1, 1], var_s, var_desired);
    return call27;
  };    // end of method expect(_)toHaveType(_)
  func26.paramTypes = [];
  func26.paramTypes.push([type_Object, "s"]);
  func26.paramTypes.push([type_Type, "desired"]);
  this.methods["expect(1)toHaveType(1)"] = func26;
  func26.paramCounts = [1, 1];
  func26.paramNames = ["s", "desired"];
  func26.typeParamNames = [];
  func26.definitionLine = 68;
  func26.definitionModule = "minispec";
  setLineNumber(72);    // compilenode method
  var func28 = function(argcv, var_s, var_undesired) {    // method expect(_)notToHaveType(_)
    var returnTarget = invocationCount;
    invocationCount++;
    setModuleName("minispec");
    // Start argument type-checks
    if (!Grace_isTrue(callmethod(var_Object, "match(1)",  [1], var_s)))
        raiseTypeError("in request of `expect(_)notToHaveType(_)`, " +
          "argument 1 to `expect`  is not of type " +
          "Object", var_Object, var_s);
    if (!Grace_isTrue(callmethod(var_Type, "match(1)",  [1], var_undesired)))
        raiseTypeError("in request of `expect(_)notToHaveType(_)`, " +
          "argument 1 to `notToHaveType`  is not of type " +
          "Type", var_Type, var_undesired);
    // End argument type-checks
    setLineNumber(73);    // compilenode identifier
    // call case 6: other requests
    var call29 = callmethod(var_mtAssertion, "deny(1)hasType(1)", [1, 1], var_s, var_undesired);
    return call29;
  };    // end of method expect(_)notToHaveType(_)
  func28.paramTypes = [];
  func28.paramTypes.push([type_Object, "s"]);
  func28.paramTypes.push([type_Type, "undesired"]);
  this.methods["expect(1)notToHaveType(1)"] = func28;
  func28.paramCounts = [1, 1];
  func28.paramNames = ["s", "undesired"];
  func28.typeParamNames = [];
  func28.definitionLine = 72;
  func28.definitionModule = "minispec";
  setLineNumber(76);    // compilenode method
  var func30 = function(argcv, var_reason) {    // method failAndSay(_)
    var returnTarget = invocationCount;
    invocationCount++;
    setModuleName("minispec");
    setLineNumber(77);    // compilenode identifier
    // call case 6: other requests
    var call31 = callmethod(var_mtAssertion, "assert(1)description(1)", [1, 1], GraceFalse, var_reason);
    return call31;
  };    // end of method failAndSay(_)
  this.methods["failAndSay(1)"] = func30;
  func30.paramCounts = [1];
  func30.paramNames = ["reason"];
  func30.typeParamNames = [];
  func30.definitionLine = 76;
  func30.definitionModule = "minispec";
  setLineNumber(80);    // compilenode method
  var func32 = function(argcv, var_name, var_block) {    // method describe(_)with(_)
    var returnTarget = invocationCount;
    invocationCount++;
    setModuleName("minispec");
    // Start argument type-checks
    if (!Grace_isTrue(callmethod(var_String, "match(1)",  [1], var_name)))
        raiseTypeError("in request of `describe(_)with(_)`, " +
          "argument 1 to `describe`  is not of type " +
          "String", var_String, var_name);
    if (!Grace_isTrue(callmethod(var_Block, "match(1)",  [1], var_block)))
        raiseTypeError("in request of `describe(_)with(_)`, " +
          "argument 1 to `with`  is not of type " +
          "Block", var_Block, var_block);
    // End argument type-checks
    var if33 = GraceDone;
    setLineNumber(81);    // compilenode identifier
    if (var_currentTestSuite === undefined) raiseUninitializedVariable("currentTestSuite");
    var opresult34 = callmethod(var_nullSuite, "\u2260(1)", [1], var_currentTestSuite);
    if (Grace_isTrue(opresult34)) {
      setLineNumber(82);    // compilenode string
      var string36 = new GraceString("`describe` cannot be used inside `describe`");
      // call case 6: other requests
      var call35 = callmethod(var_MinispecError, "raise(1)", [1], string36);
      if33 = call35;
    }
    setLineNumber(84);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call38 = callmethod(var_gu, "testSuite", []);
    var call37 = callmethod(call38, "empty", []);
    var_currentTestSuite = call37;
    setLineNumber(85);    // compilenode identifier
    // call case 6: other requests
    var call39 = callmethod(var_currentTestSuite, "name:=(1)", [1], var_name);
    setLineNumber(86);    // compilenode identifier
    var_currentSetupBlock = var_block;
    setLineNumber(87);    // compilenode num
    var_testNumberToRun = new GraceNum(0);
    setLineNumber(88);    // compilenode member
    // call case 6: other requests
    var call40 = callmethod(var_block, "apply", []);
    setLineNumber(89);    // compilenode identifier
    var_currentSetupBlock = var_nullBlock;
    setLineNumber(90);    // compilenode member
    // call case 6: other requests
    var call41 = callmethod(var_currentTestSuite, "runAndPrintResults", []);
    setLineNumber(91);    // compilenode identifier
    var_currentTestSuite = var_nullSuite;
    setLineNumber(92);    // compilenode num
    var_currentTestBlock = new GraceNum(0);
    return GraceDone;
  };    // end of method describe(_)with(_)
  func32.paramTypes = [];
  func32.paramTypes.push([type_String, "name"]);
  func32.paramTypes.push([type_Block, "block"]);
  this.methods["describe(1)with(1)"] = func32;
  func32.paramCounts = [1, 1];
  func32.paramNames = ["name", "block"];
  func32.typeParamNames = [];
  func32.definitionLine = 80;
  func32.definitionModule = "minispec";
  setLineNumber(95);    // compilenode method
  var func42 = function(argcv) {    // method doNotRerunErrors
    var returnTarget = invocationCount;
    invocationCount++;
    setModuleName("minispec");
    var_errorsToBeRerun = GraceFalse;
    return GraceDone;
  };    // end of method doNotRerunErrors
  this.methods["doNotRerunErrors"] = func42;
  func42.paramCounts = [0];
  func42.paramNames = [];
  func42.typeParamNames = [];
  func42.definitionLine = 95;
  func42.definitionModule = "minispec";
  setLineNumber(96);    // compilenode method
  var func43 = function(argcv) {    // method doRerunErrors
    var returnTarget = invocationCount;
    invocationCount++;
    setModuleName("minispec");
    var_errorsToBeRerun = GraceTrue;
    return GraceDone;
  };    // end of method doRerunErrors
  this.methods["doRerunErrors"] = func43;
  func43.paramCounts = [0];
  func43.paramNames = [];
  func43.typeParamNames = [];
  func43.definitionLine = 96;
  func43.definitionModule = "minispec";
  setLineNumber(99);    // compilenode method
  var func44 = function(argcv, var_name, var_block) {    // method specify(_)by(_)
    var returnTarget = invocationCount;
    invocationCount++;
    setModuleName("minispec");
    // Start argument type-checks
    if (!Grace_isTrue(callmethod(var_String, "match(1)",  [1], var_name)))
        raiseTypeError("in request of `specify(_)by(_)`, " +
          "argument 1 to `specify`  is not of type " +
          "String", var_String, var_name);
    if (!Grace_isTrue(callmethod(var_Block, "match(1)",  [1], var_block)))
        raiseTypeError("in request of `specify(_)by(_)`, " +
          "argument 1 to `by`  is not of type " +
          "Block", var_Block, var_block);
    // End argument type-checks
    var if45 = GraceDone;
    setLineNumber(100);    // compilenode identifier
    if (var_currentTestSuite === undefined) raiseUninitializedVariable("currentTestSuite");
    var opresult46 = callmethod(var_nullSuite, "==(1)", [1], var_currentTestSuite);
    if (Grace_isTrue(opresult46)) {
      setLineNumber(101);    // compilenode string
      var string48 = new GraceString("a `specify` can be created only within a `describe`");
      // call case 6: other requests
      var call47 = callmethod(var_MinispecError, "raise(1)", [1], string48);
      if45 = call47;
    }
    setLineNumber(103);    // compilenode num
    var sum49 = callmethod(var_testNumberToRun, "+(1)", [1], new GraceNum(1));
    var_testNumberToRun = sum49;
    var if50 = GraceDone;
    setLineNumber(104);    // compilenode identifier
    if (var_currentSetupBlock === undefined) raiseUninitializedVariable("currentSetupBlock");
    var opresult51 = callmethod(var_nullBlock, "\u2260(1)", [1], var_currentSetupBlock);
    if (Grace_isTrue(opresult51)) {
      setLineNumber(105);    // compilenode identifier
      if (var_currentSetupBlock === undefined) raiseUninitializedVariable("currentSetupBlock");
      setLineNumber(106);    // compilenode identifier
      if (var_testNumberToRun === undefined) raiseUninitializedVariable("testNumberToRun");
      setLineNumber(107);    // compilenode identifier
      // call case 6: other requests
      setLineNumber(0);    // compilenode identifier
      var call53 = selfRequest(importedModules["minispec"], "testCaseNamed(1)setupIn(1)asTestNumber(1)", [1, 1, 1], var_name, var_currentSetupBlock, var_testNumberToRun);
      // call case 6: other requests
      setLineNumber(105);    // compilenode identifier
      var call52 = callmethod(var_currentTestSuite, "add(1)", [1], call53);
      if50 = call52;
    } else {
      var if54 = GraceDone;
      setLineNumber(108);    // compilenode identifier
      if (var_currentTestBlock === undefined) raiseUninitializedVariable("currentTestBlock");
      var opresult55 = callmethod(var_testNumberToRun, "==(1)", [1], var_currentTestBlock);
      if (Grace_isTrue(opresult55)) {
        setLineNumber(109);    // compilenode member
        // call case 6: other requests
        var call56 = callmethod(var_block, "apply", []);
        if54 = call56;
      }
      if50 = if54;
    }
    return if50;
  };    // end of method specify(_)by(_)
  func44.paramTypes = [];
  func44.paramTypes.push([type_String, "name"]);
  func44.paramTypes.push([type_Block, "block"]);
  this.methods["specify(1)by(1)"] = func44;
  func44.paramCounts = [1, 1];
  func44.paramNames = ["name", "block"];
  func44.typeParamNames = [];
  func44.definitionLine = 99;
  func44.definitionModule = "minispec";
  setLineNumber(113);    // compilenode method
  var func57 = function(argcv, var_name__39__, var_setupBlock, var_number) {    // method testCaseNamed(_)setupIn(_)asTestNumber(_)
    var returnTarget = invocationCount;
    invocationCount++;
    setModuleName("minispec");
    var ouc = emptyGraceObject("testCaseNamed(_)setupIn(_)asTestNumber(_)", "minispec", 113);
    var ouc_init = this.methods["testCaseNamed(1)setupIn(1)asTestNumber(1)$build(3)"].call(this, null, var_name__39__, var_setupBlock, var_number, ouc, [], []);
    ouc_init.call(ouc);
    return ouc;
  };    // end of method testCaseNamed(_)setupIn(_)asTestNumber(_)
  func57.confidential = true;
  this.methods["testCaseNamed(1)setupIn(1)asTestNumber(1)"] = func57;
  func57.paramCounts = [1, 1, 1];
  func57.paramNames = ["name'", "setupBlock", "number"];
  func57.typeParamNames = [];
  func57.definitionLine = 113;
  func57.definitionModule = "minispec";
  var func58 = function(argcv, var_name__39__, var_setupBlock, var_number, inheritingObject, aliases, exclusions) {    // method testCaseNamed(_)setupIn(_)asTestNumber(_)$build(_,_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    setModuleName("minispec");
    var obj59_build = function(ignore, var_name__39__, var_setupBlock, var_number, outerObj, aliases, exclusions) {
      this.closureKeys = this.closureKeys || [];
      this.closureKeys.push("outer_minispec_115");
      this.outer_minispec_115 = outerObj;
      var inheritedExclusions = { };
      for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
          var exMeth = exclusions[eix];
          inheritedExclusions[exMeth] = this.methods[exMeth];
      }
      setLineNumber(116);    // compilenode identifier
      var initFun60 = callmethod(var_gu, "testCaseNamed(1)$build(3)", [null], var_name__39__, this, [new Alias("guSetup", "setup")], []);  // compileReuseCall
      var func61 = function(argcv) {    // method setup
        var returnTarget = invocationCount;
        invocationCount++;
        setModuleName("minispec");
        setLineNumber(119);    // compilenode member
        // call case 4: self request
        var call62 = selfRequest(this, "guSetup", []);
        setLineNumber(120);    // compilenode identifier
        var_currentTestBlock = var_number;
        setLineNumber(121);    // compilenode num
        var_testNumberToRun = new GraceNum(0);
        setLineNumber(122);    // compilenode member
        // call case 6: other requests
        var call63 = callmethod(var_setupBlock, "apply", []);
        return call63;
      };    // end of method setup
      this.methods["setup"] = func61;
      func61.paramCounts = [0];
      func61.paramNames = [];
      func61.typeParamNames = [];
      func61.definitionLine = 118;
      func61.definitionModule = "minispec";
      var func64 = function(argcv) {    // method teardown
        var returnTarget = invocationCount;
        invocationCount++;
        setModuleName("minispec");
        setLineNumber(126);    // compilenode num
        var_currentTestBlock = new GraceNum(0);
        return GraceDone;
      };    // end of method teardown
      this.methods["teardown"] = func64;
      func64.paramCounts = [0];
      func64.paramNames = [];
      func64.typeParamNames = [];
      func64.definitionLine = 125;
      func64.definitionModule = "minispec";
      var func65 = function(argcv, var_r) {    // method currentResult:=(_)
        var returnTarget = invocationCount;
        invocationCount++;
        setModuleName("minispec");
        setLineNumber(130);    // compilenode identifier
        // call case 6: other requests
        var call66 = callmethod(var_mtAssertion, "currentResult:=(1)", [1], var_r);
        return call66;
      };    // end of method currentResult:=(_)
      this.methods["currentResult:=(1)"] = func65;
      func65.paramCounts = [1];
      func65.paramNames = ["r"];
      func65.typeParamNames = [];
      func65.definitionLine = 129;
      func65.definitionModule = "minispec";
      var func67 = function(argcv) {    // method runTest
        var returnTarget = invocationCount;
        invocationCount++;
        setModuleName("minispec");
        return GraceDone;
      };    // end of method runTest
      this.methods["runTest"] = func67;
      func67.paramCounts = [0];
      func67.paramNames = [];
      func67.typeParamNames = [];
      func67.definitionLine = 133;
      func67.definitionModule = "minispec";
      for (var aix = 0, aLen = aliases.length; aix < aLen; aix++) {
          var oneAlias = aliases[aix];
          this.methods[oneAlias.newName] = this.methods[oneAlias.oldName];
      }
      for (var exName in inheritedExclusions) {
          if (inheritedExclusions.hasOwnProperty(exName)) {
              if (inheritedExclusions[exName]) {
                  this.methods[exName] = inheritedExclusions[exName];
              } else {
                  delete this.methods[exName];
              }
          }
      }
      var obj59_init = function() {    // init of object on line 115
        initFun60.call(this);
      };
      return obj59_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
    };
    var obj59_init = obj59_build.call(inheritingObject, null, var_name__39__, var_setupBlock, var_number, this, aliases, exclusions);
    return obj59_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
  };    // end of method testCaseNamed(_)setupIn(_)asTestNumber(_)$build(_,_,_)
  func58.confidential = true;
  this.methods["testCaseNamed(1)setupIn(1)asTestNumber(1)$build(3)"] = func58;
  func58.paramCounts = [1, 1, 1];
  func58.paramNames = ["name'", "setupBlock", "number"];
  func58.typeParamNames = [];
  func58.definitionLine = 113;
  func58.definitionModule = "minispec";
  initFun1.call(this);
  setLineNumber(5);    // compilenode string
  var string69 = new GraceString("MinispecError");
  // call case 6: other requests
  // call case 5: prelude request
  var call70 = callmethod(var_prelude, "ProgrammingError", []);
  var call68 = callmethod(call70, "refine(1)", [1], string69);
  var var_MinispecError = call68;
  setLineNumber(7);    // compilenode string
  var string72 = new GraceString("nullSuite");
  // call case 6: other requests
  // call case 5: prelude request
  var call73 = callmethod(var_prelude, "Singleton", []);
  var call71 = callmethod(call73, "named(1)", [1], string72);
  var var_nullSuite = call71;
  setLineNumber(8);    // compilenode string
  var string75 = new GraceString("nullBlock");
  // call case 6: other requests
  // call case 5: prelude request
  var call76 = callmethod(var_prelude, "Singleton", []);
  var call74 = callmethod(call76, "named(1)", [1], string75);
  var var_nullBlock = call74;
  setLineNumber(10);    // compilenode identifier
  var var_currentTestSuite = var_nullSuite;
  setLineNumber(11);    // compilenode identifier
  var var_currentSetupBlock = var_nullBlock;
  setLineNumber(12);    // compilenode num
  var var_currentTestBlock = new GraceNum(0);
  setLineNumber(13);    // compilenode num
  var var_testNumberToRun = new GraceNum(0);
  setLineNumber(14);    // compilenode identifier
  var var_errorsToBeRerun = GraceTrue;
  setLineNumber(21);    // compilenode object
  var obj77_build = function(ignore, outerObj, aliases, exclusions) {
    this.closureKeys = this.closureKeys || [];
    this.closureKeys.push("outer_minispec_21");
    this.outer_minispec_21 = outerObj;
    var inheritedExclusions = { };
    for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
        var exMeth = exclusions[eix];
        inheritedExclusions[exMeth] = this.methods[exMeth];
    }
    setLineNumber(22);    // compilenode identifier
    var initFun78 = callmethod(var_gu, "assertion$build(3)", [null], this, [], []);  // compileReuseCall
    this.data.currentResult = undefined;
    var reader_currentResult79 = function() {  // reader method currentResult
        return this.data.currentResult;
    };
    reader_currentResult79.isVar = true;
    reader_currentResult79.confidential = true;
    this.methods["currentResult"] = reader_currentResult79;
    var writer_currentResult79 = function(argcv, n) {   // writer method currentResult:=(_)
        this.data.currentResult = n;
        return GraceDone;
    };
    this.methods["currentResult:=(1)"] = writer_currentResult79;
    var func80 = function(argcv) {    // method countOneAssertion
      var returnTarget = invocationCount;
      invocationCount++;
      setModuleName("minispec");
      setLineNumber(30);    // compilenode member
      // call case 6: other requests
      // call case 4: self request
      var call82 = selfRequest(this, "currentResult", []);
      var call81 = callmethod(call82, "countOneAssertion", []);
      return call81;
    };    // end of method countOneAssertion
    this.methods["countOneAssertion"] = func80;
    func80.paramCounts = [0];
    func80.paramNames = [];
    func80.typeParamNames = [];
    func80.definitionLine = 29;
    func80.definitionModule = "minispec";
    this.mutable = true;
    for (var aix = 0, aLen = aliases.length; aix < aLen; aix++) {
        var oneAlias = aliases[aix];
        this.methods[oneAlias.newName] = this.methods[oneAlias.oldName];
    }
    for (var exName in inheritedExclusions) {
        if (inheritedExclusions.hasOwnProperty(exName)) {
            if (inheritedExclusions[exName]) {
                this.methods[exName] = inheritedExclusions[exName];
            } else {
                delete this.methods[exName];
            }
        }
    }
    var obj77_init = function() {    // init of object on line 21
      initFun78.call(this);
      setLineNumber(23);    // compilenode object
      var obj83_build = function(ignore, outerObj, aliases, exclusions) {
        this.closureKeys = this.closureKeys || [];
        this.closureKeys.push("outer_minispec_23");
        this.outer_minispec_23 = outerObj;
        var inheritedExclusions = { };
        for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
            var exMeth = exclusions[eix];
            inheritedExclusions[exMeth] = this.methods[exMeth];
        }
        var func84 = function(argcv) {    // method countOneAssertion
          var returnTarget = invocationCount;
          invocationCount++;
          setModuleName("minispec");
          setLineNumber(25);    // compilenode string
          var string85 = new GraceString("countOneAssertion requested on dummy result");
          var call86 = Grace_print(string85);
          return call86;
        };    // end of method countOneAssertion
        this.methods["countOneAssertion"] = func84;
        func84.paramCounts = [0];
        func84.paramNames = [];
        func84.typeParamNames = [];
        func84.definitionLine = 24;
        func84.definitionModule = "minispec";
        for (var aix = 0, aLen = aliases.length; aix < aLen; aix++) {
            var oneAlias = aliases[aix];
            this.methods[oneAlias.newName] = this.methods[oneAlias.oldName];
        }
        for (var exName in inheritedExclusions) {
            if (inheritedExclusions.hasOwnProperty(exName)) {
                if (inheritedExclusions[exName]) {
                    this.methods[exName] = inheritedExclusions[exName];
                } else {
                    delete this.methods[exName];
                }
            }
        }
        var obj83_init = function() {    // init of object on line 23
        };
        return obj83_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
      };
      var obj83 = emptyGraceObject("object", "minispec", 23);
      var obj83_init = obj83_build.call(obj83, null, this, [], []);
      obj83_init.call(obj83);  // end of compileobject
      this.data.currentResult = obj83;
    };
    return obj77_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
  };
  var obj77 = emptyGraceObject("mtAssertion", "minispec", 21);
  var obj77_init = obj77_build.call(obj77, null, this, [], []);
  obj77_init.call(obj77);  // end of compileobject
  var var_mtAssertion = obj77;
  return this;
}
gracecode_minispec.imports = ["gUnit", "standardGrace"];
if (typeof gctCache !== "undefined")
  gctCache["minispec"] = "classes:\nconfidential:\n testCaseNamed(1)setupIn(1)asTestNumber(1)\ndialect:\n standardGrace\nfresh-methods:\n testCaseNamed(1)setupIn(1)asTestNumber(1)\nfresh:testCaseNamed(1)setupIn(1)asTestNumber(1):\n ::(1)\n AssertionFailure\n asDebugString\n asString\n assert(1)\n assert(1)description(1)\n assert(1)hasType(1)\n assert(1)shouldBe(1)\n assert(1)shouldEqual(1)within(1)\n assert(1)shouldRaise(1)\n assert(1)shouldntBe(1)\n assert(1)shouldntRaise(1)\n assertType(1)describes(1)\n basicAsString\n countOneAssertion\n currentResult\n currentResult:=(1)\n debug(1)\n debugAndPrintResults\n deny(1)\n deny(1)description(1)\n deny(1)hasType(1)\n deny(1)shouldBe(1)\n failBecause(1)\n guSetup\n isMe(1)\n methodsIn(1)missingFrom(1)\n name\n printBackTrace(1)limitedTo(1)\n protocolOf(1)notCoveredBy(1)\n run(1)\n runAndPrintResults\n runTest\n setup\n size\n teardown\n \u2260(1)\nmodules:\n collectionsPrelude\n gUnit\n mirrors\n standardGrace\npath:\n /Users/Dmitri/LocalMinigrace/modules/minispec.grace\npublic:\n AndPattern\n BaseType\n BasicPattern\n Binding\n BindingPattern\n Block0\n Block1\n Block2\n Block3\n BoundsError\n Cmd\n Collection\n ConcurrentModification\n Dictionary\n Enumerable\n ExceptionKind\n Expandable\n Extractable\n FailedMatch\n Fun\n Fun2\n Fun3\n Iterable\n Iterator\n IteratorExhausted\n List\n MatchAndDestructuringPattern\n MatchResult\n NoSuchObject\n OrPattern\n Pattern\n Point\n Proc\n Proc2\n Proc3\n RequestError\n Sequence\n Set\n Singleton\n SubobjectResponsibility\n SuccessfulMatch\n TypeIntersection\n TypeSubtraction\n TypeUnion\n TypeVariant\n UninitializedVariable\n VariablePattern\n WildcardPattern\n abstract\n alwaysEqual\n binding\n collection\n collections\n describe(1)with(1)\n dictionary\n dictionary(1)\n do(1)while(1)\n doNotRerunErrors\n doRerunErrors\n emptyDictionary\n emptyList\n emptySequence\n emptySet\n enumerable\n expect(1)notToBe(1)\n expect(1)notToBe(1)orSay(1)\n expect(1)notToHaveType(1)\n expect(1)notToRaise(1)\n expect(1)orSay(1)\n expect(1)toBe(1)\n expect(1)toBe(1)orSay(1)\n expect(1)toBe(1)within(1)\n expect(1)toHaveType(1)\n expect(1)toRaise(1)\n failAndSay(1)\n for(1)and(1)do(1)\n hashCombine(2)\n indexable\n list\n list(1)\n max(2)\n methods\n min(2)\n numberOfErrorsToRerun\n numberOfErrorsToRerun:=(1)\n point2Dx(1)y(1)\n range\n repeat(1)times(1)\n required\n sequence\n sequence(1)\n set\n set(1)\n specify(1)by(1)\n valueOf(1)\ntypes:\n";
if (typeof originalSourceLines !== "undefined") {
  originalSourceLines["minispec"] = [
    "import \"gUnit\" as gu",
    "",
    "inherit prelude.methods",
    "",
    "def MinispecError = prelude.ProgrammingError.refine \"MinispecError\"",
    "",
    "def nullSuite = prelude.Singleton.named \"nullSuite\"",
    "def nullBlock = prelude.Singleton.named \"nullBlock\"",
    "",
    "var currentTestSuite := nullSuite",
    "var currentSetupBlock := nullBlock",
    "var currentTestBlock := 0",
    "var testNumberToRun := 0",
    "var errorsToBeRerun := true",
    "",
    "method numberOfErrorsToRerun -> Number { gu.numberOfErrorsToRerun }",
    "method numberOfErrorsToRerun:=(n:Number) {",
    "    gu.numberOfErrorsToRerun := n",
    "}",
    "",
    "def mtAssertion = object {",
    "    inherit gu.assertion",
    "    var currentResult is writable := object {",
    "        method countOneAssertion {",
    "            print \"countOneAssertion requested on dummy result\"",
    "        }",
    "    }",
    "",
    "    method countOneAssertion {",
    "        currentResult.countOneAssertion",
    "    }",
    "}",
    "",
    "method expect (cond:Boolean) orSay (complaint:String) {",
    "    mtAssertion.assert(cond) description (complaint)",
    "}",
    "",
    "method expect(s1:Object) toBe (s2:Object) {",
    "    mtAssertion.assert(s1) shouldBe (s2)",
    "}",
    "",
    "method expect(s1:Object) toBe (s2:Object) orSay (complaint) {",
    "    mtAssertion.assert(s1 == s2)",
    "        description (complaint)",
    "}",
    "",
    "method expect(s1:Object) notToBe (s2:Object) {",
    "    mtAssertion.assert(s1) shouldntBe (s2)",
    "}",
    "",
    "method expect(s1:Object) notToBe (s2:Object) orSay (complaint) {",
    "    mtAssertion.assert(s1 ≠ s2)",
    "        description (complaint)",
    "}",
    "",
    "method expect(n1:Number) toBe (n2:Number) within (epsilon:Number) {",
    "    mtAssertion.assert(n1) shouldEqual (n2) within (epsilon)",
    "}",
    "",
    "method expect(b:Block) toRaise (desired:prelude.ExceptionKind) {",
    "    mtAssertion.assert(b) shouldRaise (desired)",
    "}",
    "",
    "method expect(b:Block) notToRaise (undesired:prelude.ExceptionKind) {",
    "    mtAssertion.assert(b) shouldntRaise (undesired)",
    "}",
    "",
    "method expect(s:Object) toHaveType (desired:Type) {",
    "    mtAssertion.assert(s) hasType (desired)",
    "}",
    "",
    "method expect(s:Object) notToHaveType (undesired:Type) {",
    "    mtAssertion.deny(s) hasType (undesired)",
    "}",
    "",
    "method failAndSay(reason) {",
    "    mtAssertion.assert(false) description(reason)",
    "}",
    "",
    "method describe (name:String) with (block:Block) {",
    "    if (nullSuite ≠ currentTestSuite) then {",
    "        MinispecError.raise \"`describe` cannot be used inside `describe`\"",
    "    }",
    "    currentTestSuite := gu.testSuite.empty",
    "    currentTestSuite.name := name",
    "    currentSetupBlock := block",
    "    testNumberToRun := 0",
    "    block.apply",
    "    currentSetupBlock := nullBlock",
    "    currentTestSuite.runAndPrintResults",
    "    currentTestSuite := nullSuite",
    "    currentTestBlock := 0",
    "}",
    "",
    "method doNotRerunErrors { errorsToBeRerun := false }",
    "method doRerunErrors { errorsToBeRerun := true }",
    "",
    "",
    "method specify (name:String) by (block:Block) {",
    "    if (nullSuite == currentTestSuite) then {",
    "        MinispecError.raise \"a `specify` can be created only within a `describe`\"",
    "    }",
    "    testNumberToRun := testNumberToRun + 1",
    "    if (nullBlock ≠ currentSetupBlock) then {",
    "        currentTestSuite.add(testCaseNamed(name)",
    "            setupIn(currentSetupBlock)",
    "            asTestNumber(testNumberToRun))",
    "    } elseif { testNumberToRun == currentTestBlock } then {",
    "        block.apply",
    "    }",
    "}",
    "",
    "method testCaseNamed(name') setupIn(setupBlock) asTestNumber(number) -> gu.TestCase",
    "        is confidential {",
    "    object {",
    "        inherit gu.testCaseNamed(name') alias guSetup = setup",
    "",
    "        method setup { ",
    "            guSetup",
    "            currentTestBlock := number",
    "            testNumberToRun := 0",
    "            setupBlock.apply",
    "        }",
    "",
    "        method teardown {",
    "            currentTestBlock := 0",
    "        }",
    "        ",
    "        method currentResult:= (r) is override {",
    "            mtAssertion.currentResult := r",
    "        }",
    "        ",
    "        method runTest is override {",
    "            // for minispec, the test is run in setup",
    "        }",
    "    }",
    "}" ];
}
if (typeof global !== "undefined")
  global.gracecode_minispec = gracecode_minispec;
if (typeof window !== "undefined")
  window.gracecode_minispec = gracecode_minispec;
