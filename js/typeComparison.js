"use strict";
var___95__prelude = do_import("standardGrace", gracecode_standardGrace);
function gracecode_typeComparison() {
  setModuleName("typeComparison");
  importedModules["typeComparison"] = this;
  var module$typeComparison = this;
  this.definitionModule = "typeComparison";
  this.definitionLine = 0;
  var var_prelude = var___95__prelude;
  this.closureKeys = this.closureKeys || [];
  this.closureKeys.push("outer_typeComparison_0");
  this.outer_typeComparison_0 = var_prelude;
  // Dialect "standardGrace"
  var_prelude = do_import("standardGrace", gracecode_standardGrace);
  this.outer = var_prelude;
  setLineNumber(2);    // compilenode import
  // Import of "mirrors" as mirror
  if (typeof gracecode_mirrors == "undefined")
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString("could not find module mirrors"));
  var var_mirror = do_import("mirrors", gracecode_mirrors);
  var func0 = function(argcv) {     // accessor method mirror
    if (var_mirror === undefined) raiseUninitializedVariable("mirror");
    return var_mirror;
  };    // end of method mirror
  this.methods["mirror"] = func0;
  func0.paramCounts = [0];
  func0.paramNames = [];
  func0.typeParamNames = [];
  func0.definitionLine = 2;
  func0.definitionModule = "typeComparison";
  func0.debug = "import";
  func0.confidential = true;
  setModuleName("typeComparison");
  setLineNumber(4);    // compilenode method
  var func1 = function(argcv, var_DesiredType, var_value) {    // method methodsIn(_)missingFrom(_)
    var returnTarget = invocationCount;
    invocationCount++;
    setModuleName("typeComparison");
    setLineNumber(5);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call3 = callmethod(var_mirror, "reflect(1)", [1], var_value);
    var call2 = callmethod(call3, "methodNames", []);
    var var_vMethods = call2;
    setLineNumber(6);    // compilenode member
    // call case 6: other requests
    var call4 = callmethod(var_DesiredType, "methodNames", []);
    var var_tMethods = call4;
    setLineNumber(7);    // compilenode member
    // call case 6: other requests
    var opresult7 = callmethod(var_tMethods, "--(1)", [1], var_vMethods);
    // call case 5: prelude request
    var call6 = callmethod(var_prelude, "list(1)", [1], opresult7);
    var call5 = callmethod(call6, "sort", []);
    var var_missing = call5;
    var if8 = GraceDone;
    setLineNumber(8);    // compilenode member
    // call case 6: other requests
    var call9 = callmethod(var_missing, "size", []);
    var opresult10 = callmethod(call9, "==(1)", [1], new GraceNum(0));
    if (Grace_isTrue(opresult10)) {
      setLineNumber(9);    // compilenode string
      var string12 = new GraceString("");
      // call case 6: other requests
      var call13 = callmethod(var_value, "asDebugString", []);
      var opresult14 = callmethod(string12, "++(1)", [1], call13);
      var string15 = new GraceString(" seems to have all the methods of ");
      var opresult16 = callmethod(opresult14, "++(1)", [1], string15);
      var opresult17 = callmethod(opresult16, "++(1)", [1], var_DesiredType);
      var string18 = new GraceString("");
      var opresult19 = callmethod(opresult17, "++(1)", [1], string18);
      // call case 6: other requests
      // call case 5: prelude request
      var call20 = callmethod(var_prelude, "ProgrammingError", []);
      var call11 = callmethod(call20, "raise(1)", [1], opresult19);
      if8 = call11;
    } else {
      setLineNumber(11);    // compilenode string
      var string21 = new GraceString("");
      var var_s = string21;
      setLineNumber(12);    // compilenode block
      var block23 = new GraceBlock(this, 12, 1);
      setLineNumber(1);    // compilenode identifier
      var matches24 = function(var_each) {
        setModuleName("typeComparison");
        setLineNumber(12);    // block matches function
        return true;
      };
      block23.guard = matches24;
      block23.real = function(var_each) {
        var opresult25 = callmethod(var_s, "++(1)", [1], var_each);
        var_s = opresult25;
        return GraceDone;
      };
      setLineNumber(13);    // compilenode block
      var block26 = new GraceBlock(this, 13, 0);
      var matches27 = function() {
        setModuleName("typeComparison");
        return true;
      };
      block26.guard = matches27;
      block26.real = function() {
        var string28 = new GraceString(", ");
        var opresult29 = callmethod(var_s, "++(1)", [1], string28);
        var_s = opresult29;
        return GraceDone;
      };
      // call case 6: other requests
      setLineNumber(12);    // compilenode identifier
      var call22 = callmethod(var_missing, "do(1)separatedBy(1)", [1, 1], block23, block26);
      setLineNumber(14);    // compilenode identifier
      if8 = var_s;
    }
    return if8;
  };    // end of method methodsIn(_)missingFrom(_)
  this.methods["methodsIn(1)missingFrom(1)"] = func1;
  func1.paramCounts = [1, 1];
  func1.paramNames = ["DesiredType", "value"];
  func1.typeParamNames = [];
  func1.definitionLine = 4;
  func1.definitionModule = "typeComparison";
  setLineNumber(17);    // compilenode method
  var func30 = function(argcv, var_value, var_Q) {    // method protocolOf(_)notCoveredBy(_)
    var returnTarget = invocationCount;
    invocationCount++;
    setModuleName("typeComparison");
    setLineNumber(18);    // compilenode string
    var string31 = new GraceString("");
    var var_s = string31;
    setLineNumber(19);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call34 = callmethod(var_mirror, "reflect(1)", [1], var_value);
    var call33 = callmethod(call34, "methodNames", []);
    // call case 5: prelude request
    var call32 = callmethod(var_prelude, "set(1)", [1], call33);
    var var_vMethods = call32;
    setLineNumber(20);    // compilenode member
    // call case 6: other requests
    var call36 = callmethod(var_Q, "methodNames", []);
    // call case 5: prelude request
    var call35 = callmethod(var_prelude, "set(1)", [1], call36);
    var var_qMethods = call35;
    setLineNumber(22);    // compilenode member
    // call case 6: other requests
    setLineNumber(21);    // compilenode block
    var block40 = new GraceBlock(this, 21, 1);
    setLineNumber(1);    // compilenode identifier
    var matches41 = function(var_m) {
      setModuleName("typeComparison");
      setLineNumber(21);    // block matches function
      return true;
    };
    block40.guard = matches41;
    block40.real = function(var_m) {
      setLineNumber(22);    // compilenode call
      // call case 6: other requests
      var string44 = new GraceString("$");
      // call case 6: other requests
      var call43 = callmethod(var_m, "contains(1)", [1], string44);
      var call42 = callmethod(call43, "prefix!", [0]);
      var string45 = new GraceString("outer");
      var opresult46 = callmethod(var_m, "\u2260(1)", [1], string45);
      var opresult47 = callmethod(call42, "&&(1)", [1], opresult46);
      return opresult47;
    };
    // call case 6: other requests
    setLineNumber(21);    // compilenode identifier
    var opresult48 = callmethod(var_vMethods, "--(1)", [1], var_qMethods);
    var call39 = callmethod(opresult48, "filter(1)", [1], block40);
    // call case 5: prelude request
    var call38 = callmethod(var_prelude, "list(1)", [1], call39);
    var call37 = callmethod(call38, "sort", []);
    var var_missing = call37;
    var if49 = GraceDone;
    setLineNumber(23);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call51 = callmethod(var_missing, "isEmpty", []);
    var call50 = callmethod(call51, "not", []);
    if (Grace_isTrue(call50)) {
      setLineNumber(24);    // compilenode string
      var string52 = new GraceString("");
      var_s = string52;
      setLineNumber(25);    // compilenode block
      var block54 = new GraceBlock(this, 25, 1);
      setLineNumber(1);    // compilenode identifier
      var matches55 = function(var_each) {
        setModuleName("typeComparison");
        setLineNumber(25);    // block matches function
        return true;
      };
      block54.guard = matches55;
      block54.real = function(var_each) {
        var opresult56 = callmethod(var_s, "++(1)", [1], var_each);
        var_s = opresult56;
        return GraceDone;
      };
      setLineNumber(26);    // compilenode block
      var block57 = new GraceBlock(this, 26, 0);
      var matches58 = function() {
        setModuleName("typeComparison");
        return true;
      };
      block57.guard = matches58;
      block57.real = function() {
        var string59 = new GraceString(", ");
        var opresult60 = callmethod(var_s, "++(1)", [1], string59);
        var_s = opresult60;
        return GraceDone;
      };
      // call case 6: other requests
      setLineNumber(25);    // compilenode identifier
      var call53 = callmethod(var_missing, "do(1)separatedBy(1)", [1, 1], block54, block57);
      if49 = call53;
    }
    setLineNumber(28);    // compilenode identifier
    return var_s;
    return undefined;
  };    // end of method protocolOf(_)notCoveredBy(_)
  func30.paramTypes = [];
  func30.paramTypes.push([]);
  func30.paramTypes.push([type_Type, "Q"]);
  this.methods["protocolOf(1)notCoveredBy(1)"] = func30;
  func30.paramCounts = [1, 1];
  func30.paramNames = ["value", "Q"];
  func30.typeParamNames = [];
  func30.definitionLine = 17;
  func30.definitionModule = "typeComparison";
  setLineNumber(31);    // compilenode method
  var func61 = function(argcv, var_name) {    // method canonical(_)
    var returnTarget = invocationCount;
    invocationCount++;
    setModuleName("typeComparison");
    setLineNumber(32);    // compilenode string
    var string63 = new GraceString("(");
    var block64 = new GraceBlock(this, 32, 0);
    var matches65 = function() {
      setModuleName("typeComparison");
      return true;
    };
    block64.guard = matches65;
    block64.real = function() {
      throw new ReturnException(var_name, returnTarget);
      return undefined;
    };
    // call case 6: other requests
    var call62 = callmethod(var_name, "indexOf(1)ifAbsent(1)", [1, 1], string63, block64);
    var var_left1 = call62;
    setLineNumber(33);    // compilenode string
    var string66 = new GraceString("");
    var var_cName = string66;
    setLineNumber(34);    // compilenode vardec
    var var_ch;
    setLineNumber(35);    // compilenode member
    // call case 6: other requests
    var call67 = callmethod(var_name, "iterator", []);
    var var_nameI = call67;
    setLineNumber(36);    // compilenode block
    var block69 = new GraceBlock(this, 36, 0);
    var matches70 = function() {
      setModuleName("typeComparison");
      return true;
    };
    block69.guard = matches70;
    block69.real = function() {
      // call case 6: other requests
      var call71 = callmethod(var_nameI, "hasNext", []);
      return call71;
    };
    var block72 = new GraceBlock(this, 36, 0);
    var matches73 = function() {
      setModuleName("typeComparison");
      return true;
    };
    block72.guard = matches73;
    block72.real = function() {
      setLineNumber(37);    // compilenode member
      // call case 6: other requests
      var call74 = callmethod(var_nameI, "next", []);
      var_ch = call74;
      setLineNumber(38);    // compilenode identifier
      if (var_ch === undefined) raiseUninitializedVariable("ch");
      var opresult75 = callmethod(var_cName, "++(1)", [1], var_ch);
      var_cName = opresult75;
      var if76 = GraceDone;
      setLineNumber(39);    // compilenode string
      var string77 = new GraceString("(");
      var opresult78 = callmethod(var_ch, "==(1)", [1], string77);
      if (Grace_isTrue(opresult78)) {
        setLineNumber(40);    // compilenode member
        // call case 6: other requests
        var call79 = callmethod(var_nameI, "next", []);
        var_ch = call79;
        var if80 = GraceDone;
        setLineNumber(41);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call82 = callmethod(var_ch, "startsWithDigit", []);
        var call81 = callmethod(call82, "not", []);
        if (Grace_isTrue(call81)) {
          setLineNumber(42);    // compilenode string
          var string84 = new GraceString("malformed numeric method name ");
          var opresult85 = callmethod(string84, "++(1)", [1], var_name);
          var string86 = new GraceString("");
          var opresult87 = callmethod(opresult85, "++(1)", [1], string86);
          // call case 6: other requests
          // call case 5: prelude request
          var call88 = callmethod(var_prelude, "RequestError", []);
          var call83 = callmethod(call88, "raise(1)", [1], opresult87);
          if80 = call83;
        }
        setLineNumber(44);    // compilenode member
        // call case 6: other requests
        var call89 = callmethod(var_ch, "asNumber", []);
        var var_n = call89;
        setLineNumber(45);    // compilenode block
        var block91 = new GraceBlock(this, 45, 0);
        var matches92 = function() {
          setModuleName("typeComparison");
          return true;
        };
        block91.guard = matches92;
        block91.real = function() {
          setLineNumber(46);    // compilenode member
          // call case 6: other requests
          var call93 = callmethod(var_nameI, "next", []);
          var_ch = call93;
          setLineNumber(47);    // compilenode member
          // call case 6: other requests
          var call94 = callmethod(var_ch, "startsWithDigit", []);
          return call94;
        };
        setLineNumber(48);    // compilenode block
        var block95 = new GraceBlock(this, 48, 0);
        var matches96 = function() {
          setModuleName("typeComparison");
          return true;
        };
        block95.guard = matches96;
        block95.real = function() {
          setLineNumber(49);    // compilenode num
          var prod97 = callmethod(var_n, "*(1)", [1], new GraceNum(10));
          // call case 6: other requests
          var call98 = callmethod(var_ch, "asNumber", []);
          var sum99 = callmethod(prod97, "+(1)", [1], call98);
          var_n = sum99;
          return GraceDone;
        };
        // call case 5: prelude request
        var call90 = callmethod(var_prelude, "while(1)do(1)", [1, 1], block91, block95);
        setLineNumber(51);    // compilenode string
        var string100 = new GraceString("_");
        var opresult101 = callmethod(var_cName, "++(1)", [1], string100);
        var string102 = new GraceString(",_");
        var diff103 = callmethod(var_n, "-(1)", [1], new GraceNum(1));
        var prod104 = callmethod(string102, "*(1)", [1], diff103);
        var opresult105 = callmethod(opresult101, "++(1)", [1], prod104);
        var string106 = new GraceString(")");
        var opresult107 = callmethod(opresult105, "++(1)", [1], string106);
        var_cName = opresult107;
        var if108 = GraceDone;
        setLineNumber(52);    // compilenode string
        var string109 = new GraceString(")");
        var opresult110 = callmethod(var_ch, "\u2260(1)", [1], string109);
        if (Grace_isTrue(opresult110)) {
          var string112 = new GraceString("malformed numeric method name ");
          var opresult113 = callmethod(string112, "++(1)", [1], var_name);
          var string114 = new GraceString("");
          var opresult115 = callmethod(opresult113, "++(1)", [1], string114);
          // call case 6: other requests
          // call case 5: prelude request
          var call116 = callmethod(var_prelude, "RequestError", []);
          var call111 = callmethod(call116, "raise(1)", [1], opresult115);
          if108 = call111;
        }
        if76 = if108;
      }
      return if76;
    };
    // call case 5: prelude request
    var call68 = callmethod(var_prelude, "while(1)do(1)", [1, 1], block69, block72);
    setLineNumber(55);    // compilenode identifier
    return var_cName;
  };    // end of method canonical(_)
  this.methods["canonical(1)"] = func61;
  func61.paramCounts = [1];
  func61.paramNames = ["name"];
  func61.typeParamNames = [];
  func61.definitionLine = 31;
  func61.definitionModule = "typeComparison";
  return this;
}
gracecode_typeComparison.imports = ["mirrors", "standardGrace"];
if (typeof gctCache !== "undefined")
  gctCache["typeComparison"] = "classes:\nconfidential:\ndialect:\n standardGrace\nfresh-methods:\nmodules:\n collectionsPrelude\n mirrors\n standardGrace\npath:\n /Users/Dmitri/LocalMinigrace/modules/typeComparison.grace\npublic:\n canonical(1)\n methodsIn(1)missingFrom(1)\n protocolOf(1)notCoveredBy(1)\ntypes:\n";
if (typeof originalSourceLines !== "undefined") {
  originalSourceLines["typeComparison"] = [
    "#pragma noTypeChecks",
    "import \"mirrors\" as mirror",
    "",
    "method methodsIn(DesiredType) missingFrom (value) -> String {",
    "    def vMethods = mirror.reflect(value).methodNames",
    "    def tMethods = DesiredType.methodNames",
    "    def missing = list(tMethods -- vMethods).sort",
    "    if (missing.size == 0) then {",
    "        ProgrammingError.raise \"{value.asDebugString} seems to have all the methods of {DesiredType}\"",
    "    } else {",
    "        var s := \"\"",
    "        missing.do { each -> s := s ++ each }",
    "            separatedBy { s := s ++ \", \" }",
    "        s",
    "    }",
    "}",
    "method protocolOf(value) notCoveredBy (Q:Type) -> String  {",
    "    var s := \"\"",
    "    def vMethods = set(mirror.reflect(value).methodNames)",
    "    def qMethods = set(Q.methodNames)",
    "    def missing = list((vMethods -- qMethods).filter{m ->",
    "        (! m.contains \"$\") && (m != \"outer\")}).sort",
    "    if (missing.isEmpty.not) then {",
    "        s := \"\"",
    "        missing.do { each -> s := s ++ each }",
    "            separatedBy { s := s ++ \", \" }",
    "    }",
    "    return s",
    "}",
    "",
    "method canonical(name) -> String {",
    "    def left1 = name.indexOf \"(\" ifAbsent { return name }",
    "    var cName := \"\"",
    "    var ch",
    "    def nameI = name.iterator",
    "    while { nameI.hasNext } do {",
    "        ch := nameI.next",
    "        cName := cName ++ ch",
    "        if (ch == \"(\") then {",
    "            ch := nameI.next",
    "            if (ch.startsWithDigit.not) then {",
    "                RequestError.raise \"malformed numeric method name {name}\"",
    "            }",
    "            var n := ch.asNumber",
    "            while {",
    "                ch := nameI.next",
    "                ch.startsWithDigit",
    "            } do {",
    "                n := (n * 10) + ch.asNumber",
    "            }",
    "            cName := cName ++ \"_\" ++ (\",_\" * (n-1)) ++ \")\"",
    "            if (ch ≠ \")\") then { RequestError.raise \"malformed numeric method name {name}\" }",
    "        }",
    "    }",
    "    cName",
    "}" ];
}
if (typeof global !== "undefined")
  global.gracecode_typeComparison = gracecode_typeComparison;
if (typeof window !== "undefined")
  window.gracecode_typeComparison = gracecode_typeComparison;
