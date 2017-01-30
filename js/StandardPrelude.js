"use strict";
function gracecode_StandardPrelude() {
  setModuleName("StandardPrelude");
  this.definitionModule = "StandardPrelude";
  this.definitionLine = 0;
  var var_prelude = var___95__prelude;
  this.outer = var_prelude;
  var reader_StandardPrelude_outer0 = function() {
    return this.outer;
  };
  this.methods["outer"] = reader_StandardPrelude_outer0;
  setLineNumber(24);    // compilenode method
  var func1 = function(argcv) {    // method abstract
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("StandardPrelude");
    setLineNumber(25);    // compilenode string
    var string3 = new GraceString("abstract method not overriden by subobject");
    // call case 6: other requests
    var call4 = callmethodChecked(var_SubobjectResponsibility, "raise(1)", [1], string3);
    return call4;
  };
  func1.paramCounts = [0];
  this.methods["abstract"] = func1;
  func1.definitionLine = 24;
  func1.definitionModule = "StandardPrelude";
  setLineNumber(29);    // compilenode method
  var func5 = function(argcv) {    // method required
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("StandardPrelude");
    setLineNumber(30);    // compilenode string
    var string7 = new GraceString("required method not overriden by subobject");
    // call case 6: other requests
    var call8 = callmethodChecked(var_SubobjectResponsibility, "raise(1)", [1], string7);
    return call8;
  };
  func5.paramCounts = [0];
  this.methods["required"] = func5;
  func5.definitionLine = 29;
  func5.definitionModule = "StandardPrelude";
  setLineNumber(33);    // compilenode method
  var func9 = function(argcv) {    // method do(_)while(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_action = arguments[curarg];
    curarg++;
    var var_condition = arguments[curarg];
    curarg++;
    setModuleName("StandardPrelude");
    setLineNumber(34);    // compilenode block
    var block11 = new GraceBlock(this, 34, 0);
    block11.real = function() {
      setLineNumber(35);    // compilenode member
      // call case 6: other requests
      var call13 = callmethodChecked(var_action, "apply", []);
      setLineNumber(36);    // compilenode member
      // call case 6: other requests
      var call15 = callmethodChecked(var_condition, "apply", []);
      return call15;
    };
    setLineNumber(37);    // compilenode block
    var block16 = new GraceBlock(this, 37, 0);
    block16.real = function() {
      return GraceDone;
    };
    // call case 5: prelude request
    var call17 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block11, block16);
    return call17;
  };
  func9.paramCounts = [1, 1];
  this.methods["do(1)while(1)"] = func9;
  func9.definitionLine = 33;
  func9.definitionModule = "StandardPrelude";
  setLineNumber(40);    // compilenode method
  var func18 = function(argcv) {    // method repeat(_)times(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_n = arguments[curarg];
    curarg++;
    var var_action = arguments[curarg];
    curarg++;
    setModuleName("StandardPrelude");
    setLineNumber(41);    // compilenode identifier
    var var_ix = var_n;
    setLineNumber(42);    // compilenode block
    var block20 = new GraceBlock(this, 42, 0);
    block20.real = function() {
      var opresult23 = callmethodChecked(var_ix, ">(1)", [1], new GraceNum(0));
      return opresult23;
    };
    var block24 = new GraceBlock(this, 42, 0);
    block24.real = function() {
      setLineNumber(43);    // compilenode identifier
      var diff27 = callmethodChecked(var_ix, "-(1)", [1], new GraceNum(1));
      var_ix = diff27;
      setLineNumber(44);    // compilenode member
      // call case 6: other requests
      var call29 = callmethodChecked(var_action, "apply", []);
      return call29;
    };
    // call case 5: prelude request
    var call30 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block20, block24);
    return call30;
  };
  func18.paramCounts = [1, 1];
  this.methods["repeat(1)times(1)"] = func18;
  func18.definitionLine = 40;
  func18.definitionModule = "StandardPrelude";
  setLineNumber(48);    // compilenode method
  var func31 = function(argcv) {    // method for(_)and(_)do(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_cs = arguments[curarg];
    curarg++;
    var var_ds = arguments[curarg];
    curarg++;
    var var_action = arguments[curarg];
    curarg++;
    setModuleName("StandardPrelude");
    setLineNumber(49);    // compilenode member
    // call case 6: other requests
    var call33 = callmethodChecked(var_ds, "iterator", []);
    var var_dIter = call33;
    setLineNumber(50);    // compilenode block
    var block35 = new GraceBlock(this, 50, 1);
    setLineNumber(1);    // compilenode identifier
    block35.real = function(var_c) {
      var if36 = GraceDone;
      setLineNumber(51);    // compilenode member
      // call case 6: other requests
      var call38 = callmethodChecked(var_dIter, "hasNext", []);
      if (Grace_isTrue(call38)) {
        setLineNumber(52);    // compilenode member
        // call case 6: other requests
        var call41 = callmethodChecked(var_dIter, "next", []);
        // call case 6: other requests
        var call42 = callmethodChecked(var_action, "apply(2)", [2], var_c, call41);
        if36 = call42;
      } else {
        setLineNumber(55);    // compilenode identifier
        throw new ReturnException(var_done, returnTarget);
      }
      return if36;
    };
    // call case 6: other requests
    setLineNumber(50);    // compilenode identifier
    var call43 = callmethodChecked(var_cs, "do(1)", [1], block35);
    if (!Grace_isTrue(callmethod(var_Done, "match(1)", [1], call43)))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("result of method for(_)and(_)do(_) does not have " + 
                callmethod(var_Done, "asString", [0])._value + "."));
    return call43;
  };
  func31.paramCounts = [1, 1, 1];
  this.methods["for(1)and(1)do(1)"] = func31;
  func31.definitionLine = 48;
  func31.definitionModule = "StandardPrelude";
  setLineNumber(59);    // compilenode method
  var func44 = function(argcv) {    // method min(_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_a = arguments[curarg];
    curarg++;
    var var_b = arguments[curarg];
    curarg++;
    setModuleName("StandardPrelude");
    var if45 = GraceDone;
    setLineNumber(60);    // compilenode identifier
    var opresult48 = callmethodChecked(var_a, "<(1)", [1], var_b);
    if (Grace_isTrue(opresult48)) {
      if45 = var_a;
    } else {
      if45 = var_b;
    }
    return if45;
  };
  func44.paramCounts = [2];
  this.methods["min(2)"] = func44;
  func44.definitionLine = 59;
  func44.definitionModule = "StandardPrelude";
  setLineNumber(63);    // compilenode method
  var func49 = function(argcv) {    // method max(_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_a = arguments[curarg];
    curarg++;
    var var_b = arguments[curarg];
    curarg++;
    setModuleName("StandardPrelude");
    var if50 = GraceDone;
    setLineNumber(64);    // compilenode identifier
    var opresult53 = callmethodChecked(var_a, ">(1)", [1], var_b);
    if (Grace_isTrue(opresult53)) {
      if50 = var_a;
    } else {
      if50 = var_b;
    }
    return if50;
  };
  func49.paramCounts = [2];
  this.methods["max(2)"] = func49;
  func49.definitionLine = 63;
  func49.definitionModule = "StandardPrelude";
  setLineNumber(67);    // compilenode method
  var func54 = function(argcv) {    // method valueOf(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_nullaryBlock = arguments[curarg];
    curarg++;
    setModuleName("StandardPrelude");
    setLineNumber(68);    // compilenode member
    // call case 6: other requests
    var call56 = callmethodChecked(var_nullaryBlock, "apply", []);
    return call56;
  };
  func54.paramCounts = [1];
  this.methods["valueOf(1)"] = func54;
  func54.definitionLine = 67;
  func54.definitionModule = "StandardPrelude";
  setLineNumber(373);    // compilenode method
  var func57 = function(argcv) {    // method alwaysEqual
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("StandardPrelude");
    var obj58 = Grace_allocObject(GraceObject, "alwaysEqual");
    obj58.definitionModule = "StandardPrelude";
    obj58.definitionLine = 373;
    obj58.outer = this;
    var reader_StandardPrelude_outer59 = function() {
      return this.outer;
    };
    obj58.methods["outer"] = reader_StandardPrelude_outer59;
    var obj_init_58 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj58;
      var func60 = function(argcv) {    // method ==(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_other = arguments[curarg];
        curarg++;
        setModuleName("StandardPrelude");
        setLineNumber(375);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call62 = callmethodChecked(this, "isMe(1)", [1], var_other);
        return call62;
      };
      func60.paramCounts = [1];
      obj58.methods["==(1)"] = func60;
      func60.definitionLine = 374;
      func60.definitionModule = "StandardPrelude";
      superDepth = origSuperDepth;
    };
    obj_init_58.apply(obj58, []);
    return obj58;
  };
  func57.paramCounts = [0];
  this.methods["alwaysEqual"] = func57;
  func57.definitionLine = 373;
  func57.definitionModule = "StandardPrelude";
    var func63 = function(argcv) {    // method alwaysEqual$object(_)
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      // Start argument processing
      curarg = 1;
      // End argument processing
      setModuleName("StandardPrelude");
      var returnTarget = invocationCount;
      invocationCount++;
      var obj64 = Grace_allocObject(GraceObject, "alwaysEqual");
      obj64.definitionModule = "StandardPrelude";
      obj64.definitionLine = 373;
      var inho64 = inheritingObject;
      while (inho64.superobj) inho64 = inho64.superobj;
      inho64.superobj = obj64;
      obj64.data = inheritingObject.data;
      if (inheritingObject.hasOwnProperty('_value'))
        obj64._value = inheritingObject._value;
      obj64.outer = this;
      var reader_StandardPrelude_outer65 = function() {
        return this.outer;
      };
      obj64.methods["outer"] = reader_StandardPrelude_outer65;
      var obj_init_64 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj64;
        var func66 = function(argcv) {    // method ==(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_other = arguments[curarg];
          curarg++;
          setModuleName("StandardPrelude");
          // call case 4: self request
          onSelf = true;
          var call68 = callmethodChecked(this, "isMe(1)", [1], var_other);
          return call68;
        };
        func66.paramCounts = [1];
        obj64.methods["==(1)"] = func66;
        func66.definitionLine = 374;
        func66.definitionModule = "StandardPrelude";
        superDepth = origSuperDepth;
      };
      obj_init_64.apply(inheritingObject, []);
      return obj64;
      };
      this.methods["alwaysEqual$object(1)"] = func63;
    setLineNumber(379);    // compilenode method
    var func69 = function(argcv) {    // method point2Dx(_)y(_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      setModuleName("StandardPrelude");
      var obj70 = Grace_allocObject(GraceObject, "point2Dx(_)y(_)");
      obj70.definitionModule = "StandardPrelude";
      obj70.definitionLine = 379;
      obj70.outer = this;
      var reader_StandardPrelude_outer71 = function() {
        return this.outer;
      };
      obj70.methods["outer"] = reader_StandardPrelude_outer71;
      var obj_init_70 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj70;
        var func72 = function(argcv) {    // method asString
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("StandardPrelude");
          setLineNumber(382);    // compilenode string
          var string73 = new GraceString(")");
          // call case 4: self request
          onSelf = true;
          var call76 = callmethodChecked(this, "y", []);
          var string78 = new GraceString("@");
          // call case 4: self request
          onSelf = true;
          var call81 = callmethodChecked(this, "x", []);
          var string83 = new GraceString("(");
          var opresult85 = callmethodChecked(string83, "++(1)", [1], call81);
          var opresult87 = callmethodChecked(opresult85, "++(1)", [1], string78);
          var opresult89 = callmethodChecked(opresult87, "++(1)", [1], call76);
          var opresult91 = callmethodChecked(opresult89, "++(1)", [1], string73);
          return opresult91;
        };
        func72.paramCounts = [0];
        obj70.methods["asString"] = func72;
        func72.definitionLine = 382;
        func72.definitionModule = "StandardPrelude";
        var func92 = function(argcv) {    // method asDebugString
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("StandardPrelude");
          setLineNumber(383);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call94 = callmethodChecked(this, "asString", []);
          return call94;
        };
        func92.paramCounts = [0];
        obj70.methods["asDebugString"] = func92;
        func92.definitionLine = 383;
        func92.definitionModule = "StandardPrelude";
        var func95 = function(argcv) {    // method distanceTo(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_other = arguments[curarg];
          curarg++;
          // Start argument checking
          curarg = 1;
          setLineNumber(384);    // compilenode identifier
          if (!Grace_isTrue(callmethod(var_Point, "match(1)",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in distanceTo (arg list 1), which corresponds to parameter other, does not have " + 
                      callmethod(var_Point, "asString", [0])._value + "."));
          curarg++;
          // End argument checking
          setModuleName("StandardPrelude");
          // call case 6: other requests
          var call99 = callmethodChecked(var_other, "y", []);
          // call case 4: self request
          onSelf = true;
          var call102 = callmethodChecked(this, "y", []);
          var diff104 = callmethodChecked(call102, "-(1)", [1], call99);
          var opresult106 = callmethodChecked(diff104, "^(1)", [1], new GraceNum(2));
          // call case 6: other requests
          var call110 = callmethodChecked(var_other, "x", []);
          // call case 4: self request
          onSelf = true;
          var call113 = callmethodChecked(this, "x", []);
          var diff115 = callmethodChecked(call113, "-(1)", [1], call110);
          var opresult117 = callmethodChecked(diff115, "^(1)", [1], new GraceNum(2));
          var opresult119 = callmethodChecked(opresult117, "+(1)", [1], opresult106);
          var opresult121 = callmethodChecked(opresult119, "^(1)", [1], new GraceNum(0.5));
          return opresult121;
        };
        func95.paramTypes = [];
        func95.paramTypes.push([]);
        func95.paramCounts = [1];
        obj70.methods["distanceTo(1)"] = func95;
        func95.definitionLine = 384;
        func95.definitionModule = "StandardPrelude";
        var func122 = function(argcv) {    // method -(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_other = arguments[curarg];
          curarg++;
          // Start argument checking
          curarg = 1;
          setLineNumber(385);    // compilenode identifier
          if (!Grace_isTrue(callmethod(var_Point, "match(1)",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in - (arg list 1), which corresponds to parameter other, does not have " + 
                      callmethod(var_Point, "asString", [0])._value + "."));
          curarg++;
          // End argument checking
          setModuleName("StandardPrelude");
          // call case 6: other requests
          var call125 = callmethodChecked(var_other, "x", []);
          // call case 4: self request
          onSelf = true;
          var call128 = callmethodChecked(this, "x", []);
          var diff130 = callmethodChecked(call128, "-(1)", [1], call125);
          // call case 6: other requests
          var call132 = callmethodChecked(var_other, "y", []);
          // call case 4: self request
          onSelf = true;
          var call135 = callmethodChecked(this, "y", []);
          var diff137 = callmethodChecked(call135, "-(1)", [1], call132);
          // call case 6: other requests
          // call case 3: self.outer request
          var call139 = callmethodChecked(superDepth, "outer", [0]);
          onSelf = true;
          var call140 = callmethodChecked(call139, "point2Dx(1)y(1)", [1, 1], diff130, diff137);
          return call140;
        };
        func122.paramTypes = [];
        func122.paramTypes.push([]);
        func122.paramCounts = [1];
        obj70.methods["-(1)"] = func122;
        func122.definitionLine = 385;
        func122.definitionModule = "StandardPrelude";
        var func141 = function(argcv) {    // method +(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_other = arguments[curarg];
          curarg++;
          // Start argument checking
          curarg = 1;
          setLineNumber(386);    // compilenode identifier
          if (!Grace_isTrue(callmethod(var_Point, "match(1)",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in + (arg list 1), which corresponds to parameter other, does not have " + 
                      callmethod(var_Point, "asString", [0])._value + "."));
          curarg++;
          // End argument checking
          setModuleName("StandardPrelude");
          // call case 6: other requests
          var call144 = callmethodChecked(var_other, "x", []);
          // call case 4: self request
          onSelf = true;
          var call147 = callmethodChecked(this, "x", []);
          var opresult149 = callmethodChecked(call147, "+(1)", [1], call144);
          // call case 6: other requests
          var call151 = callmethodChecked(var_other, "y", []);
          // call case 4: self request
          onSelf = true;
          var call154 = callmethodChecked(this, "y", []);
          var opresult156 = callmethodChecked(call154, "+(1)", [1], call151);
          // call case 6: other requests
          // call case 3: self.outer request
          var call158 = callmethodChecked(superDepth, "outer", [0]);
          onSelf = true;
          var call159 = callmethodChecked(call158, "point2Dx(1)y(1)", [1, 1], opresult149, opresult156);
          return call159;
        };
        func141.paramTypes = [];
        func141.paramTypes.push([]);
        func141.paramCounts = [1];
        obj70.methods["+(1)"] = func141;
        func141.definitionLine = 386;
        func141.definitionModule = "StandardPrelude";
        var func160 = function(argcv) {    // method /(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_other = arguments[curarg];
          curarg++;
          // Start argument checking
          curarg = 1;
          setLineNumber(387);    // compilenode identifier
          if (!Grace_isTrue(callmethod(var_Number, "match(1)",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in / (arg list 1), which corresponds to parameter other, does not have " + 
                      callmethod(var_Number, "asString", [0])._value + "."));
          curarg++;
          // End argument checking
          setModuleName("StandardPrelude");
          // call case 4: self request
          onSelf = true;
          var call164 = callmethodChecked(this, "x", []);
          var quotient166 = callmethodChecked(call164, "/(1)", [1], var_other);
          // call case 4: self request
          onSelf = true;
          var call169 = callmethodChecked(this, "y", []);
          var quotient171 = callmethodChecked(call169, "/(1)", [1], var_other);
          // call case 6: other requests
          // call case 3: self.outer request
          var call173 = callmethodChecked(superDepth, "outer", [0]);
          onSelf = true;
          var call174 = callmethodChecked(call173, "point2Dx(1)y(1)", [1, 1], quotient166, quotient171);
          return call174;
        };
        func160.paramTypes = [];
        func160.paramTypes.push([type_Number, "other"]);
        func160.paramCounts = [1];
        obj70.methods["/(1)"] = func160;
        func160.definitionLine = 387;
        func160.definitionModule = "StandardPrelude";
        var func175 = function(argcv) {    // method *(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_other = arguments[curarg];
          curarg++;
          // Start argument checking
          curarg = 1;
          setLineNumber(388);    // compilenode identifier
          if (!Grace_isTrue(callmethod(var_Number, "match(1)",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in * (arg list 1), which corresponds to parameter other, does not have " + 
                      callmethod(var_Number, "asString", [0])._value + "."));
          curarg++;
          // End argument checking
          setModuleName("StandardPrelude");
          // call case 4: self request
          onSelf = true;
          var call179 = callmethodChecked(this, "x", []);
          var prod181 = callmethodChecked(call179, "*(1)", [1], var_other);
          // call case 4: self request
          onSelf = true;
          var call184 = callmethodChecked(this, "y", []);
          var prod186 = callmethodChecked(call184, "*(1)", [1], var_other);
          // call case 6: other requests
          // call case 3: self.outer request
          var call188 = callmethodChecked(superDepth, "outer", [0]);
          onSelf = true;
          var call189 = callmethodChecked(call188, "point2Dx(1)y(1)", [1, 1], prod181, prod186);
          return call189;
        };
        func175.paramTypes = [];
        func175.paramTypes.push([type_Number, "other"]);
        func175.paramCounts = [1];
        obj70.methods["*(1)"] = func175;
        func175.definitionLine = 388;
        func175.definitionModule = "StandardPrelude";
        var func190 = function(argcv) {    // method length
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("StandardPrelude");
          setLineNumber(389);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call194 = callmethodChecked(this, "y", []);
          var opresult196 = callmethodChecked(call194, "^(1)", [1], new GraceNum(2));
          // call case 4: self request
          onSelf = true;
          var call200 = callmethodChecked(this, "x", []);
          var opresult202 = callmethodChecked(call200, "^(1)", [1], new GraceNum(2));
          var opresult204 = callmethodChecked(opresult202, "+(1)", [1], opresult196);
          var opresult206 = callmethodChecked(opresult204, "^(1)", [1], new GraceNum(0.5));
          return opresult206;
        };
        func190.paramCounts = [0];
        obj70.methods["length"] = func190;
        func190.definitionLine = 389;
        func190.definitionModule = "StandardPrelude";
        var func207 = function(argcv) {    // method ==(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_other = arguments[curarg];
          curarg++;
          setModuleName("StandardPrelude");
          setLineNumber(391);    // compilenode identifier
          var cases208 = [];
          setLineNumber(392);    // compilenode block
          var block209 = new GraceBlock(this, 392, 1);
          setLineNumber(0);    // compilenode string
          var string212 = new GraceString("o");
          // call case 6: other requests
          // call case 5: prelude request
          var call214 = callmethodChecked(var_prelude, "VariablePattern", []);
          var call215 = callmethodChecked(call214, "new(1)", [1], string212);
          setLineNumber(392);    // compilenode identifier
          // call case 6: other requests
          setLineNumber(0);    // compilenode member
          // call case 5: prelude request
          var call217 = callmethodChecked(var_prelude, "AndPattern", []);
          var call218 = callmethodChecked(call217, "new(2)", [2], call215, var_Point);
          block209.pattern = call218;
          setLineNumber(392);    // compilenode identifier
          block209.paramTypes = [var_Point];
          block209.real = function(var_o) {
            // call case 6: other requests
            var call220 = callmethodChecked(var_o, "y", []);
            // call case 4: self request
            onSelf = true;
            var call223 = callmethodChecked(this, "y", []);
            var opresult225 = callmethodChecked(call223, "==(1)", [1], call220);
            // call case 6: other requests
            var call228 = callmethodChecked(var_o, "x", []);
            // call case 4: self request
            onSelf = true;
            var call231 = callmethodChecked(this, "x", []);
            var opresult233 = callmethodChecked(call231, "==(1)", [1], call228);
            var opresult235 = callmethodChecked(opresult233, "&&(1)", [1], opresult225);
            return opresult235;
          };
          cases208.push(block209);
          setLineNumber(393);    // compilenode block
          var block236 = new GraceBlock(this, 393, 1);
          setLineNumber(1);    // compilenode identifier
          block236.real = function(var___95____95__5) {
            setLineNumber(393);    // compilenode identifier
            return GraceFalse;
          };
          cases208.push(block236);
          setLineNumber(391);    // compilematchcase
          var matchres208 = matchCase(var_other,cases208,false);
          setModuleName("StandardPrelude");
          return matchres208;
        };
        func207.paramCounts = [1];
        obj70.methods["==(1)"] = func207;
        func207.definitionLine = 390;
        func207.definitionModule = "StandardPrelude";
        var func237 = function(argcv) {    // method prefix-
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("StandardPrelude");
          setLineNumber(395);    // compilenode call
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call241 = callmethodChecked(this, "x", []);
          var call242 = callmethodChecked(call241, "prefix-", [0]);
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call245 = callmethodChecked(this, "y", []);
          var call246 = callmethodChecked(call245, "prefix-", [0]);
          // call case 6: other requests
          // call case 3: self.outer request
          var call248 = callmethodChecked(superDepth, "outer", [0]);
          onSelf = true;
          var call249 = callmethodChecked(call248, "point2Dx(1)y(1)", [1, 1], call242, call246);
          return call249;
        };
        func237.paramCounts = [0];
        obj70.methods["prefix-"] = func237;
        func237.definitionLine = 395;
        func237.definitionModule = "StandardPrelude";
        var func250 = function(argcv) {    // method dot(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_other = arguments[curarg];
          curarg++;
          // Start argument checking
          curarg = 1;
          setLineNumber(396);    // compilenode identifier
          if (!Grace_isTrue(callmethod(var_Point, "match(1)",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in dot (arg list 1), which corresponds to parameter other, does not have " + 
                      callmethod(var_Point, "asString", [0])._value + "."));
          curarg++;
          // End argument checking
          setModuleName("StandardPrelude");
          setLineNumber(398);    // compilenode member
          // call case 6: other requests
          var call252 = callmethodChecked(var_other, "y", []);
          // call case 4: self request
          onSelf = true;
          var call255 = callmethodChecked(this, "y", []);
          var prod257 = callmethodChecked(call255, "*(1)", [1], call252);
          // call case 6: other requests
          var call260 = callmethodChecked(var_other, "x", []);
          // call case 4: self request
          onSelf = true;
          var call263 = callmethodChecked(this, "x", []);
          var prod265 = callmethodChecked(call263, "*(1)", [1], call260);
          var opresult267 = callmethodChecked(prod265, "+(1)", [1], prod257);
          if (!Grace_isTrue(callmethod(var_Number, "match(1)", [1], opresult267)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method dot(_) does not have " + 
                      callmethod(var_Number, "asString", [0])._value + "."));
          return opresult267;
        };
        func250.paramTypes = [];
        func250.paramTypes.push([]);
        func250.paramCounts = [1];
        obj70.methods["dot(1)"] = func250;
        func250.definitionLine = 396;
        func250.definitionModule = "StandardPrelude";
        var func268 = function(argcv) {    // method ⋅(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_other = arguments[curarg];
          curarg++;
          // Start argument checking
          curarg = 1;
          setLineNumber(400);    // compilenode identifier
          if (!Grace_isTrue(callmethod(var_Point, "match(1)",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in ⋅ (arg list 1), which corresponds to parameter other, does not have " + 
                      callmethod(var_Point, "asString", [0])._value + "."));
          curarg++;
          // End argument checking
          setModuleName("StandardPrelude");
          setLineNumber(402);    // compilenode member
          // call case 6: other requests
          var call270 = callmethodChecked(var_other, "y", []);
          // call case 4: self request
          onSelf = true;
          var call273 = callmethodChecked(this, "y", []);
          var prod275 = callmethodChecked(call273, "*(1)", [1], call270);
          // call case 6: other requests
          var call278 = callmethodChecked(var_other, "x", []);
          // call case 4: self request
          onSelf = true;
          var call281 = callmethodChecked(this, "x", []);
          var prod283 = callmethodChecked(call281, "*(1)", [1], call278);
          var opresult285 = callmethodChecked(prod283, "+(1)", [1], prod275);
          if (!Grace_isTrue(callmethod(var_Number, "match(1)", [1], opresult285)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method ⋅(_) does not have " + 
                      callmethod(var_Number, "asString", [0])._value + "."));
          return opresult285;
        };
        func268.paramTypes = [];
        func268.paramTypes.push([]);
        func268.paramCounts = [1];
        obj70.methods["\u22c5(1)"] = func268;
        func268.definitionLine = 400;
        func268.definitionModule = "StandardPrelude";
        var func286 = function(argcv) {    // method reverseTimesNumber(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_n = arguments[curarg];
          curarg++;
          setModuleName("StandardPrelude");
          setLineNumber(404);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call289 = callmethodChecked(this, "x", []);
          var prod292 = callmethodChecked(var_n, "*(1)", [1], call289);
          // call case 4: self request
          onSelf = true;
          var call294 = callmethodChecked(this, "x", []);
          var prod297 = callmethodChecked(var_n, "*(1)", [1], call294);
          // call case 6: other requests
          // call case 3: self.outer request
          var call299 = callmethodChecked(superDepth, "outer", [0]);
          onSelf = true;
          var call300 = callmethodChecked(call299, "point2Dx(1)y(1)", [1, 1], prod292, prod297);
          return call300;
        };
        func286.paramCounts = [1];
        obj70.methods["reverseTimesNumber(1)"] = func286;
        func286.definitionLine = 404;
        func286.definitionModule = "StandardPrelude";
        var func301 = function(argcv) {    // method reversePlusNumber(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_n = arguments[curarg];
          curarg++;
          setModuleName("StandardPrelude");
          setLineNumber(405);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call304 = callmethodChecked(this, "x", []);
          var opresult307 = callmethodChecked(var_n, "+(1)", [1], call304);
          // call case 4: self request
          onSelf = true;
          var call309 = callmethodChecked(this, "x", []);
          var opresult312 = callmethodChecked(var_n, "+(1)", [1], call309);
          // call case 6: other requests
          // call case 3: self.outer request
          var call314 = callmethodChecked(superDepth, "outer", [0]);
          onSelf = true;
          var call315 = callmethodChecked(call314, "point2Dx(1)y(1)", [1, 1], opresult307, opresult312);
          return call315;
        };
        func301.paramCounts = [1];
        obj70.methods["reversePlusNumber(1)"] = func301;
        func301.definitionLine = 405;
        func301.definitionModule = "StandardPrelude";
        var func316 = function(argcv) {    // method reverseDivideNumber(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_n = arguments[curarg];
          curarg++;
          setModuleName("StandardPrelude");
          setLineNumber(406);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call319 = callmethodChecked(this, "x", []);
          var quotient322 = callmethodChecked(var_n, "/(1)", [1], call319);
          // call case 4: self request
          onSelf = true;
          var call324 = callmethodChecked(this, "x", []);
          var quotient327 = callmethodChecked(var_n, "/(1)", [1], call324);
          // call case 6: other requests
          // call case 3: self.outer request
          var call329 = callmethodChecked(superDepth, "outer", [0]);
          onSelf = true;
          var call330 = callmethodChecked(call329, "point2Dx(1)y(1)", [1, 1], quotient322, quotient327);
          return call330;
        };
        func316.paramCounts = [1];
        obj70.methods["reverseDivideNumber(1)"] = func316;
        func316.definitionLine = 406;
        func316.definitionModule = "StandardPrelude";
        var func331 = function(argcv) {    // method reverseMinusNumber(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_n = arguments[curarg];
          curarg++;
          setModuleName("StandardPrelude");
          setLineNumber(407);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call334 = callmethodChecked(this, "x", []);
          var diff337 = callmethodChecked(var_n, "-(1)", [1], call334);
          // call case 4: self request
          onSelf = true;
          var call339 = callmethodChecked(this, "x", []);
          var diff342 = callmethodChecked(var_n, "-(1)", [1], call339);
          // call case 6: other requests
          // call case 3: self.outer request
          var call344 = callmethodChecked(superDepth, "outer", [0]);
          onSelf = true;
          var call345 = callmethodChecked(call344, "point2Dx(1)y(1)", [1, 1], diff337, diff342);
          return call345;
        };
        func331.paramCounts = [1];
        obj70.methods["reverseMinusNumber(1)"] = func331;
        func331.definitionLine = 407;
        func331.definitionModule = "StandardPrelude";
        var func346 = function(argcv) {    // method norm
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("StandardPrelude");
          setLineNumber(408);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call348 = callmethodChecked(this, "length", []);
          var quotient351 = callmethodChecked(this, "/(1)", [1], call348);
          return quotient351;
        };
        func346.paramCounts = [0];
        obj70.methods["norm"] = func346;
        func346.definitionLine = 408;
        func346.definitionModule = "StandardPrelude";
        setLineNumber(380);    // compilenode identifier
        obj70.data["x"] = var_x__39__;
        var reader_StandardPrelude_x352 = function() {
          return this.data["x"];
        };
        reader_StandardPrelude_x352.def = true;
        obj70.methods["x"] = reader_StandardPrelude_x352;
        setLineNumber(381);    // compilenode identifier
        obj70.data["y"] = var_y__39__;
        var reader_StandardPrelude_y353 = function() {
          return this.data["y"];
        };
        reader_StandardPrelude_y353.def = true;
        obj70.methods["y"] = reader_StandardPrelude_y353;
        superDepth = origSuperDepth;
      };
      obj_init_70.apply(obj70, []);
      return obj70;
    };
    func69.paramCounts = [1, 1];
    this.methods["point2Dx(1)y(1)"] = func69;
    func69.definitionLine = 379;
    func69.definitionModule = "StandardPrelude";
      var func354 = function(argcv) {    // method point2Dx(_)y(_)$object(_)
        var curarg = 1;
        var var_x__39__ = arguments[curarg];
        curarg++;
        var var_y__39__ = arguments[curarg];
        curarg++;
        var inheritingObject = arguments[curarg++];
        // Start argument processing
        curarg = 1;
        curarg++;
        curarg++;
        // End argument processing
        setModuleName("StandardPrelude");
        var returnTarget = invocationCount;
        invocationCount++;
        var obj355 = Grace_allocObject(GraceObject, "point2Dx(1)y(1)");
        obj355.definitionModule = "StandardPrelude";
        obj355.definitionLine = 379;
        var inho355 = inheritingObject;
        while (inho355.superobj) inho355 = inho355.superobj;
        inho355.superobj = obj355;
        obj355.data = inheritingObject.data;
        if (inheritingObject.hasOwnProperty('_value'))
          obj355._value = inheritingObject._value;
        obj355.outer = this;
        var reader_StandardPrelude_outer356 = function() {
          return this.outer;
        };
        obj355.methods["outer"] = reader_StandardPrelude_outer356;
        var obj_init_355 = function() {
          var origSuperDepth = superDepth;
          superDepth = obj355;
          var func357 = function(argcv) {    // method asString
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            setModuleName("StandardPrelude");
            setLineNumber(382);    // compilenode string
            var string358 = new GraceString(")");
            // call case 4: self request
            onSelf = true;
            var call361 = callmethodChecked(this, "y", []);
            var string363 = new GraceString("@");
            // call case 4: self request
            onSelf = true;
            var call366 = callmethodChecked(this, "x", []);
            var string368 = new GraceString("(");
            var opresult370 = callmethodChecked(string368, "++(1)", [1], call366);
            var opresult372 = callmethodChecked(opresult370, "++(1)", [1], string363);
            var opresult374 = callmethodChecked(opresult372, "++(1)", [1], call361);
            var opresult376 = callmethodChecked(opresult374, "++(1)", [1], string358);
            return opresult376;
          };
          func357.paramCounts = [0];
          obj355.methods["asString"] = func357;
          func357.definitionLine = 382;
          func357.definitionModule = "StandardPrelude";
          var func377 = function(argcv) {    // method asDebugString
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            setModuleName("StandardPrelude");
            setLineNumber(383);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call379 = callmethodChecked(this, "asString", []);
            return call379;
          };
          func377.paramCounts = [0];
          obj355.methods["asDebugString"] = func377;
          func377.definitionLine = 383;
          func377.definitionModule = "StandardPrelude";
          var func380 = function(argcv) {    // method distanceTo(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            // Start argument checking
            curarg = 1;
            setLineNumber(384);    // compilenode identifier
            if (!Grace_isTrue(callmethod(var_Point, "match(1)",  [1], arguments[curarg])))
                throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("argument 1 in distanceTo (arg list 1), which corresponds to parameter other, does not have " + 
                        callmethod(var_Point, "asString", [0])._value + "."));
            curarg++;
            // End argument checking
            setModuleName("StandardPrelude");
            // call case 6: other requests
            var call384 = callmethodChecked(var_other, "y", []);
            // call case 4: self request
            onSelf = true;
            var call387 = callmethodChecked(this, "y", []);
            var diff389 = callmethodChecked(call387, "-(1)", [1], call384);
            var opresult391 = callmethodChecked(diff389, "^(1)", [1], new GraceNum(2));
            // call case 6: other requests
            var call395 = callmethodChecked(var_other, "x", []);
            // call case 4: self request
            onSelf = true;
            var call398 = callmethodChecked(this, "x", []);
            var diff400 = callmethodChecked(call398, "-(1)", [1], call395);
            var opresult402 = callmethodChecked(diff400, "^(1)", [1], new GraceNum(2));
            var opresult404 = callmethodChecked(opresult402, "+(1)", [1], opresult391);
            var opresult406 = callmethodChecked(opresult404, "^(1)", [1], new GraceNum(0.5));
            return opresult406;
          };
          func380.paramTypes = [];
          func380.paramTypes.push([]);
          func380.paramCounts = [1];
          obj355.methods["distanceTo(1)"] = func380;
          func380.definitionLine = 384;
          func380.definitionModule = "StandardPrelude";
          var func407 = function(argcv) {    // method -(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            // Start argument checking
            curarg = 1;
            setLineNumber(385);    // compilenode identifier
            if (!Grace_isTrue(callmethod(var_Point, "match(1)",  [1], arguments[curarg])))
                throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("argument 1 in - (arg list 1), which corresponds to parameter other, does not have " + 
                        callmethod(var_Point, "asString", [0])._value + "."));
            curarg++;
            // End argument checking
            setModuleName("StandardPrelude");
            // call case 6: other requests
            var call410 = callmethodChecked(var_other, "x", []);
            // call case 4: self request
            onSelf = true;
            var call413 = callmethodChecked(this, "x", []);
            var diff415 = callmethodChecked(call413, "-(1)", [1], call410);
            // call case 6: other requests
            var call417 = callmethodChecked(var_other, "y", []);
            // call case 4: self request
            onSelf = true;
            var call420 = callmethodChecked(this, "y", []);
            var diff422 = callmethodChecked(call420, "-(1)", [1], call417);
            // call case 6: other requests
            // call case 3: self.outer request
            var call424 = callmethodChecked(superDepth, "outer", [0]);
            onSelf = true;
            var call425 = callmethodChecked(call424, "point2Dx(1)y(1)", [1, 1], diff415, diff422);
            return call425;
          };
          func407.paramTypes = [];
          func407.paramTypes.push([]);
          func407.paramCounts = [1];
          obj355.methods["-(1)"] = func407;
          func407.definitionLine = 385;
          func407.definitionModule = "StandardPrelude";
          var func426 = function(argcv) {    // method +(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            // Start argument checking
            curarg = 1;
            setLineNumber(386);    // compilenode identifier
            if (!Grace_isTrue(callmethod(var_Point, "match(1)",  [1], arguments[curarg])))
                throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("argument 1 in + (arg list 1), which corresponds to parameter other, does not have " + 
                        callmethod(var_Point, "asString", [0])._value + "."));
            curarg++;
            // End argument checking
            setModuleName("StandardPrelude");
            // call case 6: other requests
            var call429 = callmethodChecked(var_other, "x", []);
            // call case 4: self request
            onSelf = true;
            var call432 = callmethodChecked(this, "x", []);
            var opresult434 = callmethodChecked(call432, "+(1)", [1], call429);
            // call case 6: other requests
            var call436 = callmethodChecked(var_other, "y", []);
            // call case 4: self request
            onSelf = true;
            var call439 = callmethodChecked(this, "y", []);
            var opresult441 = callmethodChecked(call439, "+(1)", [1], call436);
            // call case 6: other requests
            // call case 3: self.outer request
            var call443 = callmethodChecked(superDepth, "outer", [0]);
            onSelf = true;
            var call444 = callmethodChecked(call443, "point2Dx(1)y(1)", [1, 1], opresult434, opresult441);
            return call444;
          };
          func426.paramTypes = [];
          func426.paramTypes.push([]);
          func426.paramCounts = [1];
          obj355.methods["+(1)"] = func426;
          func426.definitionLine = 386;
          func426.definitionModule = "StandardPrelude";
          var func445 = function(argcv) {    // method /(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            // Start argument checking
            curarg = 1;
            setLineNumber(387);    // compilenode identifier
            if (!Grace_isTrue(callmethod(var_Number, "match(1)",  [1], arguments[curarg])))
                throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("argument 1 in / (arg list 1), which corresponds to parameter other, does not have " + 
                        callmethod(var_Number, "asString", [0])._value + "."));
            curarg++;
            // End argument checking
            setModuleName("StandardPrelude");
            // call case 4: self request
            onSelf = true;
            var call449 = callmethodChecked(this, "x", []);
            var quotient451 = callmethodChecked(call449, "/(1)", [1], var_other);
            // call case 4: self request
            onSelf = true;
            var call454 = callmethodChecked(this, "y", []);
            var quotient456 = callmethodChecked(call454, "/(1)", [1], var_other);
            // call case 6: other requests
            // call case 3: self.outer request
            var call458 = callmethodChecked(superDepth, "outer", [0]);
            onSelf = true;
            var call459 = callmethodChecked(call458, "point2Dx(1)y(1)", [1, 1], quotient451, quotient456);
            return call459;
          };
          func445.paramTypes = [];
          func445.paramTypes.push([type_Number, "other"]);
          func445.paramCounts = [1];
          obj355.methods["/(1)"] = func445;
          func445.definitionLine = 387;
          func445.definitionModule = "StandardPrelude";
          var func460 = function(argcv) {    // method *(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            // Start argument checking
            curarg = 1;
            setLineNumber(388);    // compilenode identifier
            if (!Grace_isTrue(callmethod(var_Number, "match(1)",  [1], arguments[curarg])))
                throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("argument 1 in * (arg list 1), which corresponds to parameter other, does not have " + 
                        callmethod(var_Number, "asString", [0])._value + "."));
            curarg++;
            // End argument checking
            setModuleName("StandardPrelude");
            // call case 4: self request
            onSelf = true;
            var call464 = callmethodChecked(this, "x", []);
            var prod466 = callmethodChecked(call464, "*(1)", [1], var_other);
            // call case 4: self request
            onSelf = true;
            var call469 = callmethodChecked(this, "y", []);
            var prod471 = callmethodChecked(call469, "*(1)", [1], var_other);
            // call case 6: other requests
            // call case 3: self.outer request
            var call473 = callmethodChecked(superDepth, "outer", [0]);
            onSelf = true;
            var call474 = callmethodChecked(call473, "point2Dx(1)y(1)", [1, 1], prod466, prod471);
            return call474;
          };
          func460.paramTypes = [];
          func460.paramTypes.push([type_Number, "other"]);
          func460.paramCounts = [1];
          obj355.methods["*(1)"] = func460;
          func460.definitionLine = 388;
          func460.definitionModule = "StandardPrelude";
          var func475 = function(argcv) {    // method length
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            setModuleName("StandardPrelude");
            setLineNumber(389);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call479 = callmethodChecked(this, "y", []);
            var opresult481 = callmethodChecked(call479, "^(1)", [1], new GraceNum(2));
            // call case 4: self request
            onSelf = true;
            var call485 = callmethodChecked(this, "x", []);
            var opresult487 = callmethodChecked(call485, "^(1)", [1], new GraceNum(2));
            var opresult489 = callmethodChecked(opresult487, "+(1)", [1], opresult481);
            var opresult491 = callmethodChecked(opresult489, "^(1)", [1], new GraceNum(0.5));
            return opresult491;
          };
          func475.paramCounts = [0];
          obj355.methods["length"] = func475;
          func475.definitionLine = 389;
          func475.definitionModule = "StandardPrelude";
          var func492 = function(argcv) {    // method ==(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            setModuleName("StandardPrelude");
            setLineNumber(391);    // compilenode identifier
            var cases493 = [];
            setLineNumber(392);    // compilenode block
            var block494 = new GraceBlock(this, 392, 1);
            setLineNumber(0);    // compilenode string
            var string497 = new GraceString("o");
            // call case 6: other requests
            // call case 5: prelude request
            var call499 = callmethodChecked(var_prelude, "VariablePattern", []);
            var call500 = callmethodChecked(call499, "new(1)", [1], string497);
            setLineNumber(392);    // compilenode identifier
            // call case 6: other requests
            setLineNumber(0);    // compilenode member
            // call case 5: prelude request
            var call502 = callmethodChecked(var_prelude, "AndPattern", []);
            var call503 = callmethodChecked(call502, "new(2)", [2], call500, var_Point);
            block494.pattern = call503;
            setLineNumber(392);    // compilenode identifier
            block494.paramTypes = [var_Point];
            block494.real = function(var_o) {
              // call case 6: other requests
              var call505 = callmethodChecked(var_o, "y", []);
              // call case 4: self request
              onSelf = true;
              var call508 = callmethodChecked(this, "y", []);
              var opresult510 = callmethodChecked(call508, "==(1)", [1], call505);
              // call case 6: other requests
              var call513 = callmethodChecked(var_o, "x", []);
              // call case 4: self request
              onSelf = true;
              var call516 = callmethodChecked(this, "x", []);
              var opresult518 = callmethodChecked(call516, "==(1)", [1], call513);
              var opresult520 = callmethodChecked(opresult518, "&&(1)", [1], opresult510);
              return opresult520;
            };
            cases493.push(block494);
            setLineNumber(393);    // compilenode block
            var block521 = new GraceBlock(this, 393, 1);
            setLineNumber(1);    // compilenode identifier
            block521.real = function(var___95____95__5) {
              setLineNumber(393);    // compilenode identifier
              return GraceFalse;
            };
            cases493.push(block521);
            setLineNumber(391);    // compilematchcase
            var matchres493 = matchCase(var_other,cases493,false);
            setModuleName("StandardPrelude");
            return matchres493;
          };
          func492.paramCounts = [1];
          obj355.methods["==(1)"] = func492;
          func492.definitionLine = 390;
          func492.definitionModule = "StandardPrelude";
          var func522 = function(argcv) {    // method prefix-
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            setModuleName("StandardPrelude");
            setLineNumber(395);    // compilenode call
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call526 = callmethodChecked(this, "x", []);
            var call527 = callmethodChecked(call526, "prefix-", [0]);
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call530 = callmethodChecked(this, "y", []);
            var call531 = callmethodChecked(call530, "prefix-", [0]);
            // call case 6: other requests
            // call case 3: self.outer request
            var call533 = callmethodChecked(superDepth, "outer", [0]);
            onSelf = true;
            var call534 = callmethodChecked(call533, "point2Dx(1)y(1)", [1, 1], call527, call531);
            return call534;
          };
          func522.paramCounts = [0];
          obj355.methods["prefix-"] = func522;
          func522.definitionLine = 395;
          func522.definitionModule = "StandardPrelude";
          var func535 = function(argcv) {    // method dot(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            // Start argument checking
            curarg = 1;
            setLineNumber(396);    // compilenode identifier
            if (!Grace_isTrue(callmethod(var_Point, "match(1)",  [1], arguments[curarg])))
                throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("argument 1 in dot (arg list 1), which corresponds to parameter other, does not have " + 
                        callmethod(var_Point, "asString", [0])._value + "."));
            curarg++;
            // End argument checking
            setModuleName("StandardPrelude");
            setLineNumber(398);    // compilenode member
            // call case 6: other requests
            var call537 = callmethodChecked(var_other, "y", []);
            // call case 4: self request
            onSelf = true;
            var call540 = callmethodChecked(this, "y", []);
            var prod542 = callmethodChecked(call540, "*(1)", [1], call537);
            // call case 6: other requests
            var call545 = callmethodChecked(var_other, "x", []);
            // call case 4: self request
            onSelf = true;
            var call548 = callmethodChecked(this, "x", []);
            var prod550 = callmethodChecked(call548, "*(1)", [1], call545);
            var opresult552 = callmethodChecked(prod550, "+(1)", [1], prod542);
            if (!Grace_isTrue(callmethod(var_Number, "match(1)", [1], opresult552)))
                throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("result of method dot(_) does not have " + 
                        callmethod(var_Number, "asString", [0])._value + "."));
            return opresult552;
          };
          func535.paramTypes = [];
          func535.paramTypes.push([]);
          func535.paramCounts = [1];
          obj355.methods["dot(1)"] = func535;
          func535.definitionLine = 396;
          func535.definitionModule = "StandardPrelude";
          var func553 = function(argcv) {    // method ⋅(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            // Start argument checking
            curarg = 1;
            setLineNumber(400);    // compilenode identifier
            if (!Grace_isTrue(callmethod(var_Point, "match(1)",  [1], arguments[curarg])))
                throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("argument 1 in ⋅ (arg list 1), which corresponds to parameter other, does not have " + 
                        callmethod(var_Point, "asString", [0])._value + "."));
            curarg++;
            // End argument checking
            setModuleName("StandardPrelude");
            setLineNumber(402);    // compilenode member
            // call case 6: other requests
            var call555 = callmethodChecked(var_other, "y", []);
            // call case 4: self request
            onSelf = true;
            var call558 = callmethodChecked(this, "y", []);
            var prod560 = callmethodChecked(call558, "*(1)", [1], call555);
            // call case 6: other requests
            var call563 = callmethodChecked(var_other, "x", []);
            // call case 4: self request
            onSelf = true;
            var call566 = callmethodChecked(this, "x", []);
            var prod568 = callmethodChecked(call566, "*(1)", [1], call563);
            var opresult570 = callmethodChecked(prod568, "+(1)", [1], prod560);
            if (!Grace_isTrue(callmethod(var_Number, "match(1)", [1], opresult570)))
                throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("result of method ⋅(_) does not have " + 
                        callmethod(var_Number, "asString", [0])._value + "."));
            return opresult570;
          };
          func553.paramTypes = [];
          func553.paramTypes.push([]);
          func553.paramCounts = [1];
          obj355.methods["\u22c5(1)"] = func553;
          func553.definitionLine = 400;
          func553.definitionModule = "StandardPrelude";
          var func571 = function(argcv) {    // method reverseTimesNumber(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_n = arguments[curarg];
            curarg++;
            setModuleName("StandardPrelude");
            setLineNumber(404);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call574 = callmethodChecked(this, "x", []);
            var prod577 = callmethodChecked(var_n, "*(1)", [1], call574);
            // call case 4: self request
            onSelf = true;
            var call579 = callmethodChecked(this, "x", []);
            var prod582 = callmethodChecked(var_n, "*(1)", [1], call579);
            // call case 6: other requests
            // call case 3: self.outer request
            var call584 = callmethodChecked(superDepth, "outer", [0]);
            onSelf = true;
            var call585 = callmethodChecked(call584, "point2Dx(1)y(1)", [1, 1], prod577, prod582);
            return call585;
          };
          func571.paramCounts = [1];
          obj355.methods["reverseTimesNumber(1)"] = func571;
          func571.definitionLine = 404;
          func571.definitionModule = "StandardPrelude";
          var func586 = function(argcv) {    // method reversePlusNumber(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_n = arguments[curarg];
            curarg++;
            setModuleName("StandardPrelude");
            setLineNumber(405);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call589 = callmethodChecked(this, "x", []);
            var opresult592 = callmethodChecked(var_n, "+(1)", [1], call589);
            // call case 4: self request
            onSelf = true;
            var call594 = callmethodChecked(this, "x", []);
            var opresult597 = callmethodChecked(var_n, "+(1)", [1], call594);
            // call case 6: other requests
            // call case 3: self.outer request
            var call599 = callmethodChecked(superDepth, "outer", [0]);
            onSelf = true;
            var call600 = callmethodChecked(call599, "point2Dx(1)y(1)", [1, 1], opresult592, opresult597);
            return call600;
          };
          func586.paramCounts = [1];
          obj355.methods["reversePlusNumber(1)"] = func586;
          func586.definitionLine = 405;
          func586.definitionModule = "StandardPrelude";
          var func601 = function(argcv) {    // method reverseDivideNumber(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_n = arguments[curarg];
            curarg++;
            setModuleName("StandardPrelude");
            setLineNumber(406);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call604 = callmethodChecked(this, "x", []);
            var quotient607 = callmethodChecked(var_n, "/(1)", [1], call604);
            // call case 4: self request
            onSelf = true;
            var call609 = callmethodChecked(this, "x", []);
            var quotient612 = callmethodChecked(var_n, "/(1)", [1], call609);
            // call case 6: other requests
            // call case 3: self.outer request
            var call614 = callmethodChecked(superDepth, "outer", [0]);
            onSelf = true;
            var call615 = callmethodChecked(call614, "point2Dx(1)y(1)", [1, 1], quotient607, quotient612);
            return call615;
          };
          func601.paramCounts = [1];
          obj355.methods["reverseDivideNumber(1)"] = func601;
          func601.definitionLine = 406;
          func601.definitionModule = "StandardPrelude";
          var func616 = function(argcv) {    // method reverseMinusNumber(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_n = arguments[curarg];
            curarg++;
            setModuleName("StandardPrelude");
            setLineNumber(407);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call619 = callmethodChecked(this, "x", []);
            var diff622 = callmethodChecked(var_n, "-(1)", [1], call619);
            // call case 4: self request
            onSelf = true;
            var call624 = callmethodChecked(this, "x", []);
            var diff627 = callmethodChecked(var_n, "-(1)", [1], call624);
            // call case 6: other requests
            // call case 3: self.outer request
            var call629 = callmethodChecked(superDepth, "outer", [0]);
            onSelf = true;
            var call630 = callmethodChecked(call629, "point2Dx(1)y(1)", [1, 1], diff622, diff627);
            return call630;
          };
          func616.paramCounts = [1];
          obj355.methods["reverseMinusNumber(1)"] = func616;
          func616.definitionLine = 407;
          func616.definitionModule = "StandardPrelude";
          var func631 = function(argcv) {    // method norm
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            setModuleName("StandardPrelude");
            setLineNumber(408);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call633 = callmethodChecked(this, "length", []);
            var quotient636 = callmethodChecked(this, "/(1)", [1], call633);
            return quotient636;
          };
          func631.paramCounts = [0];
          obj355.methods["norm"] = func631;
          func631.definitionLine = 408;
          func631.definitionModule = "StandardPrelude";
          setLineNumber(380);    // compilenode identifier
          obj355.data["x"] = var_x__39__;
          var reader_StandardPrelude_x637 = function() {
            return this.data["x"];
          };
          reader_StandardPrelude_x637.def = true;
          obj355.methods["x"] = reader_StandardPrelude_x637;
          setLineNumber(381);    // compilenode identifier
          obj355.data["y"] = var_y__39__;
          var reader_StandardPrelude_y638 = function() {
            return this.data["y"];
          };
          reader_StandardPrelude_y638.def = true;
          obj355.methods["y"] = reader_StandardPrelude_y638;
          superDepth = origSuperDepth;
        };
        obj_init_355.apply(inheritingObject, []);
        return obj355;
        };
        this.methods["point2Dx(1)y(1)$object(1)"] = func354;
      setLineNumber(456);    // compilenode method
      var func639 = function(argcv) {    // method sequence(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_arg = arguments[curarg];
        curarg++;
        // Start type arguments
        var var_T = var_Unknown;
        if (argcv.length == 2) {
          if (argcv[1] !== 1) {
            throw new GraceExceptionPacket(ProgrammingErrorObject, 
                new GraceString("wrong number of type arguments for sequence(_)"));
          }
          var_T = arguments[curarg++];
        }
        // End type arguments
        setModuleName("StandardPrelude");
        setLineNumber(457);    // compilenode identifier
        // call case 6: other requests
        // call case 6: other requests
        var call642 = callmethodChecked(var_collections, "sequence", []);
        var call643 = callmethodChecked(call642, "withAll(1)", [1], var_arg);
        return call643;
      };
      func639.paramCounts = [1];
      this.methods["sequence(1)"] = func639;
      func639.definitionLine = 456;
      func639.definitionModule = "StandardPrelude";
      setLineNumber(462);    // compilenode method
      var func644 = function(argcv) {    // method list(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_arg = arguments[curarg];
        curarg++;
        // Start type arguments
        var var_T = var_Unknown;
        if (argcv.length == 2) {
          if (argcv[1] !== 1) {
            throw new GraceExceptionPacket(ProgrammingErrorObject, 
                new GraceString("wrong number of type arguments for list(_)"));
          }
          var_T = arguments[curarg++];
        }
        // End type arguments
        setModuleName("StandardPrelude");
        setLineNumber(463);    // compilenode identifier
        // call case 6: other requests
        // call case 6: other requests
        var call647 = callmethodChecked(var_collections, "list", []);
        var call648 = callmethodChecked(call647, "withAll(1)", [1], var_arg);
        return call648;
      };
      func644.paramCounts = [1];
      this.methods["list(1)"] = func644;
      func644.definitionLine = 462;
      func644.definitionModule = "StandardPrelude";
      setLineNumber(465);    // compilenode method
      var func649 = function(argcv) {    // method emptyList
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("StandardPrelude");
        // call case 6: other requests
        // call case 6: other requests
        var call652 = callmethodChecked(var_collections, "list", []);
        var call653 = callmethodChecked(call652, "empty", []);
        return call653;
      };
      func649.paramCounts = [0];
      this.methods["emptyList"] = func649;
      func649.definitionLine = 465;
      func649.definitionModule = "StandardPrelude";
      setLineNumber(467);    // compilenode method
      var func654 = function(argcv) {    // method set(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_arg = arguments[curarg];
        curarg++;
        // Start type arguments
        var var_T = var_Unknown;
        if (argcv.length == 2) {
          if (argcv[1] !== 1) {
            throw new GraceExceptionPacket(ProgrammingErrorObject, 
                new GraceString("wrong number of type arguments for set(_)"));
          }
          var_T = arguments[curarg++];
        }
        // End type arguments
        setModuleName("StandardPrelude");
        setLineNumber(468);    // compilenode identifier
        // call case 6: other requests
        // call case 6: other requests
        var call657 = callmethodChecked(var_collections, "set", []);
        var call658 = callmethodChecked(call657, "withAll(1)", [1], var_arg);
        return call658;
      };
      func654.paramCounts = [1];
      this.methods["set(1)"] = func654;
      func654.definitionLine = 467;
      func654.definitionModule = "StandardPrelude";
      setLineNumber(470);    // compilenode method
      var func659 = function(argcv) {    // method emptySet
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("StandardPrelude");
        // call case 6: other requests
        // call case 6: other requests
        var call662 = callmethodChecked(var_collections, "set", []);
        var call663 = callmethodChecked(call662, "empty", []);
        return call663;
      };
      func659.paramCounts = [0];
      this.methods["emptySet"] = func659;
      func659.definitionLine = 470;
      func659.definitionModule = "StandardPrelude";
      setLineNumber(472);    // compilenode method
      var func664 = function(argcv) {    // method dictionary(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_arg = arguments[curarg];
        curarg++;
        // Start type arguments
        var var_K = var_Unknown;
        var var_T = var_Unknown;
        if (argcv.length == 2) {
          if (argcv[1] !== 2) {
            throw new GraceExceptionPacket(ProgrammingErrorObject, 
                new GraceString("wrong number of type arguments for dictionary(_)"));
          }
          var_K = arguments[curarg++];
          var_T = arguments[curarg++];
        }
        // End type arguments
        setModuleName("StandardPrelude");
        setLineNumber(473);    // compilenode identifier
        // call case 6: other requests
        // call case 6: other requests
        var call667 = callmethodChecked(var_collections, "dictionary", []);
        var call668 = callmethodChecked(call667, "withAll(1)", [1], var_arg);
        return call668;
      };
      func664.paramCounts = [1];
      this.methods["dictionary(1)"] = func664;
      func664.definitionLine = 472;
      func664.definitionModule = "StandardPrelude";
      setLineNumber(475);    // compilenode method
      var func669 = function(argcv) {    // method emptyDictionary
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("StandardPrelude");
        // call case 6: other requests
        // call case 6: other requests
        var call672 = callmethodChecked(var_collections, "dictionary", []);
        var call673 = callmethodChecked(call672, "empty", []);
        return call673;
      };
      func669.paramCounts = [0];
      this.methods["emptyDictionary"] = func669;
      func669.definitionLine = 475;
      func669.definitionModule = "StandardPrelude";
      setLineNumber(480);    // compilenode method
      var func674 = function(argcv) {    // method methods
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("StandardPrelude");
        setLineNumber(481);    // compilenode identifier
        // call case 5: prelude request
        var call676 = callmethodChecked(var_prelude, "clone(1)", [1], this);
        return call676;
      };
      func674.paramCounts = [0];
      this.methods["methods"] = func674;
      func674.definitionLine = 480;
      func674.definitionModule = "StandardPrelude";
        var func677 = function(argcv) {    // method methods$object(_)
          var curarg = 1;
          var inheritingObject = arguments[curarg++];
          // Start argument processing
          curarg = 1;
          // End argument processing
          setModuleName("StandardPrelude");
          var returnTarget = invocationCount;
          invocationCount++;
          // call case 5: prelude request
          var call679 = callmethodChecked(var_prelude, "clone(1)", [1], this);
          return call679;
          };
          this.methods["methods$object(1)"] = func677;
        setLineNumber(4);    // compilenode identifier
        var var_isStandardPrelude = GraceTrue;
        setLineNumber(1);    // compilenode method
        var func680 = function(argcv) {    // method isStandardPrelude
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("StandardPrelude");
          // isStandardPrelude is a simple accessor - elide try ... catch
          setLineNumber(4);    // compilenode identifier
          return var_isStandardPrelude;
        };
        func680.paramCounts = [0];
        this.methods["isStandardPrelude"] = func680;
        func680.definitionLine = 1;
        func680.definitionModule = "StandardPrelude";
        setLineNumber(1);    // compilenode method
        var func681 = function(argcv) {    // method isStandardPrelude:=(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var___95__var__95__assign__95__tmp = arguments[curarg];
          curarg++;
          setModuleName("StandardPrelude");
          var_isStandardPrelude = var___95__var__95__assign__95__tmp;
          return GraceDone;
        };
        func681.paramCounts = [1];
        this.methods["isStandardPrelude:=(1)"] = func681;
        func681.definitionLine = 1;
        func681.definitionModule = "StandardPrelude";
        this.methods["isStandardPrelude"].debug = "var";
        setLineNumber(6);    // compilenode object
        var obj682 = Grace_allocObject(GraceObject, "SuccessfulMatch");
        obj682.definitionModule = "StandardPrelude";
        obj682.definitionLine = 6;
        obj682.outer = this;
        var reader_StandardPrelude_outer683 = function() {
          return this.outer;
        };
        obj682.methods["outer"] = reader_StandardPrelude_outer683;
        var obj_init_682 = function() {
          var origSuperDepth = superDepth;
          superDepth = obj682;
          var func684 = function(argcv) {    // method new(_,_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_result__39__ = arguments[curarg];
            curarg++;
            var var_bindings__39__ = arguments[curarg];
            curarg++;
            setModuleName("StandardPrelude");
            var obj685 = Grace_allocObject(null, "SuccessfulMatch.SuccessfulMatch.new(_,_)");
            obj685.definitionModule = "StandardPrelude";
            obj685.definitionLine = 6;
            obj685.outer = this;
            var reader_StandardPrelude_outer686 = function() {
              return this.outer;
            };
            obj685.methods["outer"] = reader_StandardPrelude_outer686;
            var obj_init_685 = function() {
              var origSuperDepth = superDepth;
              superDepth = obj685;
              var func687 = function(argcv) {    // method result
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                setModuleName("StandardPrelude");
                // result is a simple accessor - elide try ... catch
                setLineNumber(8);    // compilenode identifier
                return var_result__39__;
              };
              func687.paramCounts = [0];
              obj685.methods["result"] = func687;
              func687.definitionLine = 8;
              func687.definitionModule = "StandardPrelude";
              var func688 = function(argcv) {    // method bindings
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                setModuleName("StandardPrelude");
                // bindings is a simple accessor - elide try ... catch
                setLineNumber(9);    // compilenode identifier
                return var_bindings__39__;
              };
              func688.paramCounts = [0];
              obj685.methods["bindings"] = func688;
              func688.definitionLine = 9;
              func688.definitionModule = "StandardPrelude";
              var func689 = function(argcv) {    // method asString
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                setModuleName("StandardPrelude");
                setLineNumber(11);    // compilenode string
                var string690 = new GraceString(")");
                // call case 4: self request
                onSelf = true;
                var call693 = callmethodChecked(this, "bindings", []);
                var string695 = new GraceString(", bindings = ");
                // call case 4: self request
                onSelf = true;
                var call698 = callmethodChecked(this, "result", []);
                var string700 = new GraceString("SuccessfulMatch(result = ");
                var opresult702 = callmethodChecked(string700, "++(1)", [1], call698);
                var opresult704 = callmethodChecked(opresult702, "++(1)", [1], string695);
                var opresult706 = callmethodChecked(opresult704, "++(1)", [1], call693);
                var opresult708 = callmethodChecked(opresult706, "++(1)", [1], string690);
                return opresult708;
              };
              func689.paramCounts = [0];
              obj685.methods["asString"] = func689;
              func689.definitionLine = 10;
              func689.definitionModule = "StandardPrelude";
              setLineNumber(7);    // compilenode identifier
              obj685.superobj = GraceTrue;
              if (GraceTrue.data) obj685.data = GraceTrue.data;
              if (GraceTrue.hasOwnProperty('_value'))
                  obj685._value = GraceTrue._value;
              superDepth = origSuperDepth;
            };
            obj_init_685.apply(obj685, []);
            return obj685;
          };
          func684.paramCounts = [2];
          obj682.methods["new(2)"] = func684;
          func684.definitionLine = 6;
          func684.definitionModule = "StandardPrelude";
            var func709 = function(argcv) {    // method new(_,_)$object(_)
              var curarg = 1;
              var var_result__39__ = arguments[curarg];
              curarg++;
              var var_bindings__39__ = arguments[curarg];
              curarg++;
              var inheritingObject = arguments[curarg++];
              // Start argument processing
              curarg = 1;
              curarg++;
              curarg++;
              // End argument processing
              setModuleName("StandardPrelude");
              var returnTarget = invocationCount;
              invocationCount++;
              var obj710 = Grace_allocObject(null, "new(2)");
              obj710.definitionModule = "StandardPrelude";
              obj710.definitionLine = 6;
              var inho710 = inheritingObject;
              while (inho710.superobj) inho710 = inho710.superobj;
              inho710.superobj = obj710;
              obj710.data = inheritingObject.data;
              if (inheritingObject.hasOwnProperty('_value'))
                obj710._value = inheritingObject._value;
              obj710.outer = this;
              var reader_StandardPrelude_outer711 = function() {
                return this.outer;
              };
              obj710.methods["outer"] = reader_StandardPrelude_outer711;
              var obj_init_710 = function() {
                var origSuperDepth = superDepth;
                superDepth = obj710;
                var func712 = function(argcv) {    // method result
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  setModuleName("StandardPrelude");
                  // result is a simple accessor - elide try ... catch
                  setLineNumber(8);    // compilenode identifier
                  return var_result__39__;
                };
                func712.paramCounts = [0];
                obj710.methods["result"] = func712;
                func712.definitionLine = 8;
                func712.definitionModule = "StandardPrelude";
                var func713 = function(argcv) {    // method bindings
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  setModuleName("StandardPrelude");
                  // bindings is a simple accessor - elide try ... catch
                  setLineNumber(9);    // compilenode identifier
                  return var_bindings__39__;
                };
                func713.paramCounts = [0];
                obj710.methods["bindings"] = func713;
                func713.definitionLine = 9;
                func713.definitionModule = "StandardPrelude";
                var func714 = function(argcv) {    // method asString
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  setModuleName("StandardPrelude");
                  setLineNumber(11);    // compilenode string
                  var string715 = new GraceString(")");
                  // call case 4: self request
                  onSelf = true;
                  var call718 = callmethodChecked(this, "bindings", []);
                  var string720 = new GraceString(", bindings = ");
                  // call case 4: self request
                  onSelf = true;
                  var call723 = callmethodChecked(this, "result", []);
                  var string725 = new GraceString("SuccessfulMatch(result = ");
                  var opresult727 = callmethodChecked(string725, "++(1)", [1], call723);
                  var opresult729 = callmethodChecked(opresult727, "++(1)", [1], string720);
                  var opresult731 = callmethodChecked(opresult729, "++(1)", [1], call718);
                  var opresult733 = callmethodChecked(opresult731, "++(1)", [1], string715);
                  return opresult733;
                };
                func714.paramCounts = [0];
                obj710.methods["asString"] = func714;
                func714.definitionLine = 10;
                func714.definitionModule = "StandardPrelude";
                setLineNumber(7);    // compilenode identifier
                obj710.superobj = GraceTrue;
                if (GraceTrue.data) obj710.data = GraceTrue.data;
                if (GraceTrue.hasOwnProperty('_value'))
                    obj710._value = GraceTrue._value;
                superDepth = origSuperDepth;
              };
              obj_init_710.apply(inheritingObject, []);
              return obj710;
              };
              obj682.methods["new(2)$object(1)"] = func709;
            var func734 = function(argcv) {    // method asString
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("StandardPrelude");
              setLineNumber(6);    // compilenode string
              var string735 = new GraceString("class SuccessfulMatch");
              return string735;
            };
            func734.paramCounts = [0];
            obj682.methods["asString"] = func734;
            func734.definitionLine = 6;
            func734.definitionModule = "StandardPrelude";
            superDepth = origSuperDepth;
          };
          obj_init_682.apply(obj682, []);
          var var_SuccessfulMatch = obj682;
          setLineNumber(1);    // compilenode method
          var func736 = function(argcv) {    // method SuccessfulMatch
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            setModuleName("StandardPrelude");
            // SuccessfulMatch is a simple accessor - elide try ... catch
            setLineNumber(6);    // compilenode identifier
            return var_SuccessfulMatch;
          };
          func736.paramCounts = [0];
          this.methods["SuccessfulMatch"] = func736;
          func736.definitionLine = 1;
          func736.definitionModule = "StandardPrelude";
          this.methods["SuccessfulMatch"].debug = "def";
          setLineNumber(15);    // compilenode object
          var obj737 = Grace_allocObject(GraceObject, "FailedMatch");
          obj737.definitionModule = "StandardPrelude";
          obj737.definitionLine = 15;
          obj737.outer = this;
          var reader_StandardPrelude_outer738 = function() {
            return this.outer;
          };
          obj737.methods["outer"] = reader_StandardPrelude_outer738;
          var obj_init_737 = function() {
            var origSuperDepth = superDepth;
            superDepth = obj737;
            var func739 = function(argcv) {    // method new(_)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_result__39__ = arguments[curarg];
              curarg++;
              setModuleName("StandardPrelude");
              var obj740 = Grace_allocObject(null, "FailedMatch.FailedMatch.new(_)");
              obj740.definitionModule = "StandardPrelude";
              obj740.definitionLine = 15;
              obj740.outer = this;
              var reader_StandardPrelude_outer741 = function() {
                return this.outer;
              };
              obj740.methods["outer"] = reader_StandardPrelude_outer741;
              var obj_init_740 = function() {
                var origSuperDepth = superDepth;
                superDepth = obj740;
                var func742 = function(argcv) {    // method result
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  setModuleName("StandardPrelude");
                  // result is a simple accessor - elide try ... catch
                  setLineNumber(17);    // compilenode identifier
                  return var_result__39__;
                };
                func742.paramCounts = [0];
                obj740.methods["result"] = func742;
                func742.definitionLine = 17;
                func742.definitionModule = "StandardPrelude";
                var func743 = function(argcv) {    // method bindings
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  setModuleName("StandardPrelude");
                  // bindings is a simple accessor - elide try ... catch
                  setLineNumber(18);    // compilenode identifier
                  return var_emptySequence;
                };
                func743.paramCounts = [0];
                obj740.methods["bindings"] = func743;
                func743.definitionLine = 18;
                func743.definitionModule = "StandardPrelude";
                var func744 = function(argcv) {    // method asString
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  setModuleName("StandardPrelude");
                  setLineNumber(20);    // compilenode string
                  var string745 = new GraceString(")");
                  // call case 4: self request
                  onSelf = true;
                  var call748 = callmethodChecked(this, "result", []);
                  var string750 = new GraceString("FailedMatch(result = ");
                  var opresult752 = callmethodChecked(string750, "++(1)", [1], call748);
                  var opresult754 = callmethodChecked(opresult752, "++(1)", [1], string745);
                  return opresult754;
                };
                func744.paramCounts = [0];
                obj740.methods["asString"] = func744;
                func744.definitionLine = 19;
                func744.definitionModule = "StandardPrelude";
                setLineNumber(16);    // compilenode identifier
                obj740.superobj = GraceFalse;
                if (GraceFalse.data) obj740.data = GraceFalse.data;
                if (GraceFalse.hasOwnProperty('_value'))
                    obj740._value = GraceFalse._value;
                superDepth = origSuperDepth;
              };
              obj_init_740.apply(obj740, []);
              return obj740;
            };
            func739.paramCounts = [1];
            obj737.methods["new(1)"] = func739;
            func739.definitionLine = 15;
            func739.definitionModule = "StandardPrelude";
              var func755 = function(argcv) {    // method new(_)$object(_)
                var curarg = 1;
                var var_result__39__ = arguments[curarg];
                curarg++;
                var inheritingObject = arguments[curarg++];
                // Start argument processing
                curarg = 1;
                curarg++;
                // End argument processing
                setModuleName("StandardPrelude");
                var returnTarget = invocationCount;
                invocationCount++;
                var obj756 = Grace_allocObject(null, "new(1)");
                obj756.definitionModule = "StandardPrelude";
                obj756.definitionLine = 15;
                var inho756 = inheritingObject;
                while (inho756.superobj) inho756 = inho756.superobj;
                inho756.superobj = obj756;
                obj756.data = inheritingObject.data;
                if (inheritingObject.hasOwnProperty('_value'))
                  obj756._value = inheritingObject._value;
                obj756.outer = this;
                var reader_StandardPrelude_outer757 = function() {
                  return this.outer;
                };
                obj756.methods["outer"] = reader_StandardPrelude_outer757;
                var obj_init_756 = function() {
                  var origSuperDepth = superDepth;
                  superDepth = obj756;
                  var func758 = function(argcv) {    // method result
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    setModuleName("StandardPrelude");
                    // result is a simple accessor - elide try ... catch
                    setLineNumber(17);    // compilenode identifier
                    return var_result__39__;
                  };
                  func758.paramCounts = [0];
                  obj756.methods["result"] = func758;
                  func758.definitionLine = 17;
                  func758.definitionModule = "StandardPrelude";
                  var func759 = function(argcv) {    // method bindings
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    setModuleName("StandardPrelude");
                    // bindings is a simple accessor - elide try ... catch
                    setLineNumber(18);    // compilenode identifier
                    return var_emptySequence;
                  };
                  func759.paramCounts = [0];
                  obj756.methods["bindings"] = func759;
                  func759.definitionLine = 18;
                  func759.definitionModule = "StandardPrelude";
                  var func760 = function(argcv) {    // method asString
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    setModuleName("StandardPrelude");
                    setLineNumber(20);    // compilenode string
                    var string761 = new GraceString(")");
                    // call case 4: self request
                    onSelf = true;
                    var call764 = callmethodChecked(this, "result", []);
                    var string766 = new GraceString("FailedMatch(result = ");
                    var opresult768 = callmethodChecked(string766, "++(1)", [1], call764);
                    var opresult770 = callmethodChecked(opresult768, "++(1)", [1], string761);
                    return opresult770;
                  };
                  func760.paramCounts = [0];
                  obj756.methods["asString"] = func760;
                  func760.definitionLine = 19;
                  func760.definitionModule = "StandardPrelude";
                  setLineNumber(16);    // compilenode identifier
                  obj756.superobj = GraceFalse;
                  if (GraceFalse.data) obj756.data = GraceFalse.data;
                  if (GraceFalse.hasOwnProperty('_value'))
                      obj756._value = GraceFalse._value;
                  superDepth = origSuperDepth;
                };
                obj_init_756.apply(inheritingObject, []);
                return obj756;
                };
                obj737.methods["new(1)$object(1)"] = func755;
              var func771 = function(argcv) {    // method asString
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                setModuleName("StandardPrelude");
                setLineNumber(15);    // compilenode string
                var string772 = new GraceString("class FailedMatch");
                return string772;
              };
              func771.paramCounts = [0];
              obj737.methods["asString"] = func771;
              func771.definitionLine = 15;
              func771.definitionModule = "StandardPrelude";
              superDepth = origSuperDepth;
            };
            obj_init_737.apply(obj737, []);
            var var_FailedMatch = obj737;
            setLineNumber(1);    // compilenode method
            var func773 = function(argcv) {    // method FailedMatch
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("StandardPrelude");
              // FailedMatch is a simple accessor - elide try ... catch
              setLineNumber(15);    // compilenode identifier
              return var_FailedMatch;
            };
            func773.paramCounts = [0];
            this.methods["FailedMatch"] = func773;
            func773.definitionLine = 1;
            func773.definitionModule = "StandardPrelude";
            this.methods["FailedMatch"].debug = "def";
            setLineNumber(71);    // compilenode object
            var obj774 = Grace_allocObject(GraceObject, "BasicPattern");
            obj774.definitionModule = "StandardPrelude";
            obj774.definitionLine = 71;
            obj774.outer = this;
            var reader_StandardPrelude_outer775 = function() {
              return this.outer;
            };
            obj774.methods["outer"] = reader_StandardPrelude_outer775;
            var obj_init_774 = function() {
              var origSuperDepth = superDepth;
              superDepth = obj774;
              var func776 = function(argcv) {    // method new
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                setModuleName("StandardPrelude");
                var obj777 = Grace_allocObject(GraceObject, "BasicPattern.BasicPattern.new");
                obj777.definitionModule = "StandardPrelude";
                obj777.definitionLine = 71;
                obj777.outer = this;
                var reader_StandardPrelude_outer778 = function() {
                  return this.outer;
                };
                obj777.methods["outer"] = reader_StandardPrelude_outer778;
                var obj_init_777 = function() {
                  var origSuperDepth = superDepth;
                  superDepth = obj777;
                  var func779 = function(argcv) {    // method &(_)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_o = arguments[curarg];
                    curarg++;
                    setModuleName("StandardPrelude");
                    setLineNumber(73);    // compilenode identifier
                    // call case 6: other requests
                    var call781 = callmethodChecked(var_AndPattern, "new(2)", [2], this, var_o);
                    return call781;
                  };
                  func779.paramCounts = [1];
                  obj777.methods["&(1)"] = func779;
                  func779.definitionLine = 72;
                  func779.definitionModule = "StandardPrelude";
                  var func782 = function(argcv) {    // method |(_)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_o = arguments[curarg];
                    curarg++;
                    setModuleName("StandardPrelude");
                    setLineNumber(76);    // compilenode identifier
                    // call case 6: other requests
                    var call784 = callmethodChecked(var_OrPattern, "new(2)", [2], this, var_o);
                    return call784;
                  };
                  func782.paramCounts = [1];
                  obj777.methods["|(1)"] = func782;
                  func782.definitionLine = 75;
                  func782.definitionModule = "StandardPrelude";
                  superDepth = origSuperDepth;
                };
                obj_init_777.apply(obj777, []);
                return obj777;
              };
              func776.paramCounts = [0];
              obj774.methods["new"] = func776;
              func776.definitionLine = 71;
              func776.definitionModule = "StandardPrelude";
                var func785 = function(argcv) {    // method new$object(_)
                  var curarg = 1;
                  var inheritingObject = arguments[curarg++];
                  // Start argument processing
                  curarg = 1;
                  // End argument processing
                  setModuleName("StandardPrelude");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var obj786 = Grace_allocObject(GraceObject, "new");
                  obj786.definitionModule = "StandardPrelude";
                  obj786.definitionLine = 71;
                  var inho786 = inheritingObject;
                  while (inho786.superobj) inho786 = inho786.superobj;
                  inho786.superobj = obj786;
                  obj786.data = inheritingObject.data;
                  if (inheritingObject.hasOwnProperty('_value'))
                    obj786._value = inheritingObject._value;
                  obj786.outer = this;
                  var reader_StandardPrelude_outer787 = function() {
                    return this.outer;
                  };
                  obj786.methods["outer"] = reader_StandardPrelude_outer787;
                  var obj_init_786 = function() {
                    var origSuperDepth = superDepth;
                    superDepth = obj786;
                    var func788 = function(argcv) {    // method &(_)
                      var returnTarget = invocationCount;
                      invocationCount++;
                      var curarg = 1;
                      var var_o = arguments[curarg];
                      curarg++;
                      setModuleName("StandardPrelude");
                      setLineNumber(73);    // compilenode identifier
                      // call case 6: other requests
                      var call790 = callmethodChecked(var_AndPattern, "new(2)", [2], this, var_o);
                      return call790;
                    };
                    func788.paramCounts = [1];
                    obj786.methods["&(1)"] = func788;
                    func788.definitionLine = 72;
                    func788.definitionModule = "StandardPrelude";
                    var func791 = function(argcv) {    // method |(_)
                      var returnTarget = invocationCount;
                      invocationCount++;
                      var curarg = 1;
                      var var_o = arguments[curarg];
                      curarg++;
                      setModuleName("StandardPrelude");
                      setLineNumber(76);    // compilenode identifier
                      // call case 6: other requests
                      var call793 = callmethodChecked(var_OrPattern, "new(2)", [2], this, var_o);
                      return call793;
                    };
                    func791.paramCounts = [1];
                    obj786.methods["|(1)"] = func791;
                    func791.definitionLine = 75;
                    func791.definitionModule = "StandardPrelude";
                    superDepth = origSuperDepth;
                  };
                  obj_init_786.apply(inheritingObject, []);
                  return obj786;
                  };
                  obj774.methods["new$object(1)"] = func785;
                var func794 = function(argcv) {    // method asString
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  setModuleName("StandardPrelude");
                  setLineNumber(71);    // compilenode string
                  var string795 = new GraceString("class BasicPattern");
                  return string795;
                };
                func794.paramCounts = [0];
                obj774.methods["asString"] = func794;
                func794.definitionLine = 71;
                func794.definitionModule = "StandardPrelude";
                superDepth = origSuperDepth;
              };
              obj_init_774.apply(obj774, []);
              var var_BasicPattern = obj774;
              setLineNumber(1);    // compilenode method
              var func796 = function(argcv) {    // method BasicPattern
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                setModuleName("StandardPrelude");
                // BasicPattern is a simple accessor - elide try ... catch
                setLineNumber(71);    // compilenode identifier
                return var_BasicPattern;
              };
              func796.paramCounts = [0];
              this.methods["BasicPattern"] = func796;
              func796.definitionLine = 1;
              func796.definitionModule = "StandardPrelude";
              this.methods["BasicPattern"].debug = "def";
              setLineNumber(79);    // compilenode object
              var obj797 = Grace_allocObject(GraceObject, "MatchAndDestructuringPattern");
              obj797.definitionModule = "StandardPrelude";
              obj797.definitionLine = 79;
              obj797.outer = this;
              var reader_StandardPrelude_outer798 = function() {
                return this.outer;
              };
              obj797.methods["outer"] = reader_StandardPrelude_outer798;
              var obj_init_797 = function() {
                var origSuperDepth = superDepth;
                superDepth = obj797;
                var func799 = function(argcv) {    // method new(_,_)
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  var var_pat = arguments[curarg];
                  curarg++;
                  var var_items__39__ = arguments[curarg];
                  curarg++;
                  setModuleName("StandardPrelude");
                  var obj800 = Grace_allocObject(null, "MatchAndDestructuringPattern.MatchAndDestructuringPattern.new(_,_)");
                  obj800.definitionModule = "StandardPrelude";
                  obj800.definitionLine = 79;
                  obj800.outer = this;
                  var reader_StandardPrelude_outer801 = function() {
                    return this.outer;
                  };
                  obj800.methods["outer"] = reader_StandardPrelude_outer801;
                  var obj_init_800 = function() {
                    var origSuperDepth = superDepth;
                    superDepth = obj800;
                    var func802 = function(argcv) {    // method match(_)
                      var returnTarget = invocationCount;
                      invocationCount++;
                      var curarg = 1;
                      var var_o = arguments[curarg];
                      curarg++;
                      setModuleName("StandardPrelude");
                      setLineNumber(84);    // compilenode identifier
                      // call case 6: other requests
                      var call804 = callmethodChecked(var_pat, "match(1)", [1], var_o);
                      var var_m = call804;
                      var if805 = GraceDone;
                      setLineNumber(85);    // compilenode identifier
                      if (Grace_isTrue(var_m)) {
                        setLineNumber(86);    // compilenode member
                        // call case 6: other requests
                        var call807 = callmethodChecked(var_m, "bindings", []);
                        var var_mbindings = call807;
                        setLineNumber(87);    // compilenode array
                        var array808 = new PrimitiveGraceList([]);
                        var var_bindings = array808;
                        var if809 = GraceDone;
                        setLineNumber(88);    // compilenode member
                        // call case 6: other requests
                        // call case 4: self request
                        onSelf = true;
                        var call812 = callmethodChecked(this, "items", []);
                        var call813 = callmethodChecked(call812, "size", []);
                        // call case 6: other requests
                        var call816 = callmethodChecked(var_mbindings, "size", []);
                        var opresult818 = callmethodChecked(call816, "<(1)", [1], call813);
                        if (Grace_isTrue(opresult818)) {
                          var if819 = GraceDone;
                          setLineNumber(89);    // compilenode identifier
                          // call case 6: other requests
                          var call821 = callmethodChecked(var_Extractable, "match(1)", [1], var_o);
                          if (Grace_isTrue(call821)) {
                            setLineNumber(90);    // compilenode member
                            // call case 6: other requests
                            var call823 = callmethodChecked(var_o, "extract", []);
                            var_mbindings = call823;
                            if819 = GraceDone;
                          } else {
                            setLineNumber(92);    // compilenode identifier
                            // call case 6: other requests
                            var call825 = callmethodChecked(var_FailedMatch, "new(1)", [1], var_o);
                            return call825;
                          }
                          if809 = if819;
                        }
                        setLineNumber(95);    // compilenode member
                        // call case 6: other requests
                        // call case 4: self request
                        onSelf = true;
                        var call829 = callmethodChecked(this, "items", []);
                        var call830 = callmethodChecked(call829, "indices", []);
                        var block831 = new GraceBlock(this, 95, 1);
                        setLineNumber(1);    // compilenode identifier
                        block831.real = function(var_i) {
                          setLineNumber(96);    // compilenode identifier
                          // call case 6: other requests
                          var call834 = callmethodChecked(var_mbindings, "at(1)", [1], var_i);
                          // call case 6: other requests
                          // call case 6: other requests
                          // call case 4: self request
                          onSelf = true;
                          var call837 = callmethodChecked(this, "items", []);
                          var call838 = callmethodChecked(call837, "at(1)", [1], var_i);
                          var call839 = callmethodChecked(call838, "match(1)", [1], call834);
                          var var_b = call839;
                          var if840 = GraceDone;
                          setLineNumber(97);    // compilenode call
                          // call case 6: other requests
                          var call842 = callmethodChecked(var_b, "prefix!", [0]);
                          if (Grace_isTrue(call842)) {
                            setLineNumber(98);    // compilenode identifier
                            // call case 6: other requests
                            var call844 = callmethodChecked(var_FailedMatch, "new(1)", [1], var_o);
                            throw new ReturnException(call844, returnTarget);
                          }
                          setLineNumber(100);    // compilenode member
                          // call case 6: other requests
                          var call847 = callmethodChecked(var_b, "bindings", []);
                          var block848 = new GraceBlock(this, 100, 1);
                          setLineNumber(1);    // compilenode identifier
                          block848.real = function(var_bb) {
                            setLineNumber(101);    // compilenode identifier
                            // call case 6: other requests
                            var call850 = callmethodChecked(var_bindings, "push(1)", [1], var_bb);
                            return call850;
                          };
                          // call case 5: prelude request
                          var call851 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call847, block848);
                          return call851;
                        };
                        // call case 5: prelude request
                        var call852 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call830, block831);
                        setLineNumber(104);    // compilenode identifier
                        // call case 6: other requests
                        var call854 = callmethodChecked(var_SuccessfulMatch, "new(2)", [2], var_o, var_bindings);
                        if805 = call854;
                      } else {
                        setLineNumber(106);    // compilenode identifier
                        // call case 6: other requests
                        var call856 = callmethodChecked(var_FailedMatch, "new(1)", [1], var_o);
                        if805 = call856;
                      }
                      return if805;
                    };
                    func802.paramCounts = [1];
                    obj800.methods["match(1)"] = func802;
                    func802.definitionLine = 83;
                    func802.definitionModule = "StandardPrelude";
                    setLineNumber(80);    // compilenode identifier
                    // call case 6: other requests
                    var call858 = callmethodChecked(var_BasicPattern, "new$object(1)", [0, 1], this);
                    obj800.superobj = call858;
                    if (call858.data) obj800.data = call858.data;
                    if (call858.hasOwnProperty('_value'))
                        obj800._value = call858._value;
                    setLineNumber(81);    // compilenode identifier
                    obj800.data["pattern"] = var_pat;
                    var reader_StandardPrelude_pattern859 = function() {
                      return this.data["pattern"];
                    };
                    reader_StandardPrelude_pattern859.def = true;
                    reader_StandardPrelude_pattern859.confidential = true;
                    obj800.methods["pattern"] = reader_StandardPrelude_pattern859;
                    setLineNumber(82);    // compilenode identifier
                    obj800.data["items"] = var_items__39__;
                    var reader_StandardPrelude_items860 = function() {
                      return this.data["items"];
                    };
                    reader_StandardPrelude_items860.def = true;
                    reader_StandardPrelude_items860.confidential = true;
                    obj800.methods["items"] = reader_StandardPrelude_items860;
                    superDepth = origSuperDepth;
                  };
                  obj_init_800.apply(obj800, []);
                  return obj800;
                };
                func799.paramCounts = [2];
                obj797.methods["new(2)"] = func799;
                func799.definitionLine = 79;
                func799.definitionModule = "StandardPrelude";
                  var func861 = function(argcv) {    // method new(_,_)$object(_)
                    var curarg = 1;
                    var var_pat = arguments[curarg];
                    curarg++;
                    var var_items__39__ = arguments[curarg];
                    curarg++;
                    var inheritingObject = arguments[curarg++];
                    // Start argument processing
                    curarg = 1;
                    curarg++;
                    curarg++;
                    // End argument processing
                    setModuleName("StandardPrelude");
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var obj862 = Grace_allocObject(null, "new(2)");
                    obj862.definitionModule = "StandardPrelude";
                    obj862.definitionLine = 79;
                    var inho862 = inheritingObject;
                    while (inho862.superobj) inho862 = inho862.superobj;
                    inho862.superobj = obj862;
                    obj862.data = inheritingObject.data;
                    if (inheritingObject.hasOwnProperty('_value'))
                      obj862._value = inheritingObject._value;
                    obj862.outer = this;
                    var reader_StandardPrelude_outer863 = function() {
                      return this.outer;
                    };
                    obj862.methods["outer"] = reader_StandardPrelude_outer863;
                    var obj_init_862 = function() {
                      var origSuperDepth = superDepth;
                      superDepth = obj862;
                      var func864 = function(argcv) {    // method match(_)
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var curarg = 1;
                        var var_o = arguments[curarg];
                        curarg++;
                        setModuleName("StandardPrelude");
                        setLineNumber(84);    // compilenode identifier
                        // call case 6: other requests
                        var call866 = callmethodChecked(var_pat, "match(1)", [1], var_o);
                        var var_m = call866;
                        var if867 = GraceDone;
                        setLineNumber(85);    // compilenode identifier
                        if (Grace_isTrue(var_m)) {
                          setLineNumber(86);    // compilenode member
                          // call case 6: other requests
                          var call869 = callmethodChecked(var_m, "bindings", []);
                          var var_mbindings = call869;
                          setLineNumber(87);    // compilenode array
                          var array870 = new PrimitiveGraceList([]);
                          var var_bindings = array870;
                          var if871 = GraceDone;
                          setLineNumber(88);    // compilenode member
                          // call case 6: other requests
                          // call case 4: self request
                          onSelf = true;
                          var call874 = callmethodChecked(this, "items", []);
                          var call875 = callmethodChecked(call874, "size", []);
                          // call case 6: other requests
                          var call878 = callmethodChecked(var_mbindings, "size", []);
                          var opresult880 = callmethodChecked(call878, "<(1)", [1], call875);
                          if (Grace_isTrue(opresult880)) {
                            var if881 = GraceDone;
                            setLineNumber(89);    // compilenode identifier
                            // call case 6: other requests
                            var call883 = callmethodChecked(var_Extractable, "match(1)", [1], var_o);
                            if (Grace_isTrue(call883)) {
                              setLineNumber(90);    // compilenode member
                              // call case 6: other requests
                              var call885 = callmethodChecked(var_o, "extract", []);
                              var_mbindings = call885;
                              if881 = GraceDone;
                            } else {
                              setLineNumber(92);    // compilenode identifier
                              // call case 6: other requests
                              var call887 = callmethodChecked(var_FailedMatch, "new(1)", [1], var_o);
                              return call887;
                            }
                            if871 = if881;
                          }
                          setLineNumber(95);    // compilenode member
                          // call case 6: other requests
                          // call case 4: self request
                          onSelf = true;
                          var call891 = callmethodChecked(this, "items", []);
                          var call892 = callmethodChecked(call891, "indices", []);
                          var block893 = new GraceBlock(this, 95, 1);
                          setLineNumber(1);    // compilenode identifier
                          block893.real = function(var_i) {
                            setLineNumber(96);    // compilenode identifier
                            // call case 6: other requests
                            var call896 = callmethodChecked(var_mbindings, "at(1)", [1], var_i);
                            // call case 6: other requests
                            // call case 6: other requests
                            // call case 4: self request
                            onSelf = true;
                            var call899 = callmethodChecked(this, "items", []);
                            var call900 = callmethodChecked(call899, "at(1)", [1], var_i);
                            var call901 = callmethodChecked(call900, "match(1)", [1], call896);
                            var var_b = call901;
                            var if902 = GraceDone;
                            setLineNumber(97);    // compilenode call
                            // call case 6: other requests
                            var call904 = callmethodChecked(var_b, "prefix!", [0]);
                            if (Grace_isTrue(call904)) {
                              setLineNumber(98);    // compilenode identifier
                              // call case 6: other requests
                              var call906 = callmethodChecked(var_FailedMatch, "new(1)", [1], var_o);
                              throw new ReturnException(call906, returnTarget);
                            }
                            setLineNumber(100);    // compilenode member
                            // call case 6: other requests
                            var call909 = callmethodChecked(var_b, "bindings", []);
                            var block910 = new GraceBlock(this, 100, 1);
                            setLineNumber(1);    // compilenode identifier
                            block910.real = function(var_bb) {
                              setLineNumber(101);    // compilenode identifier
                              // call case 6: other requests
                              var call912 = callmethodChecked(var_bindings, "push(1)", [1], var_bb);
                              return call912;
                            };
                            // call case 5: prelude request
                            var call913 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call909, block910);
                            return call913;
                          };
                          // call case 5: prelude request
                          var call914 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call892, block893);
                          setLineNumber(104);    // compilenode identifier
                          // call case 6: other requests
                          var call916 = callmethodChecked(var_SuccessfulMatch, "new(2)", [2], var_o, var_bindings);
                          if867 = call916;
                        } else {
                          setLineNumber(106);    // compilenode identifier
                          // call case 6: other requests
                          var call918 = callmethodChecked(var_FailedMatch, "new(1)", [1], var_o);
                          if867 = call918;
                        }
                        return if867;
                      };
                      func864.paramCounts = [1];
                      obj862.methods["match(1)"] = func864;
                      func864.definitionLine = 83;
                      func864.definitionModule = "StandardPrelude";
                      setLineNumber(80);    // compilenode identifier
                      // call case 6: other requests
                      var call920 = callmethodChecked(var_BasicPattern, "new$object(1)", [0, 1], this);
                      obj862.superobj = call920;
                      if (call920.data) obj862.data = call920.data;
                      if (call920.hasOwnProperty('_value'))
                          obj862._value = call920._value;
                      setLineNumber(81);    // compilenode identifier
                      obj862.data["pattern"] = var_pat;
                      var reader_StandardPrelude_pattern921 = function() {
                        return this.data["pattern"];
                      };
                      reader_StandardPrelude_pattern921.def = true;
                      reader_StandardPrelude_pattern921.confidential = true;
                      obj862.methods["pattern"] = reader_StandardPrelude_pattern921;
                      setLineNumber(82);    // compilenode identifier
                      obj862.data["items"] = var_items__39__;
                      var reader_StandardPrelude_items922 = function() {
                        return this.data["items"];
                      };
                      reader_StandardPrelude_items922.def = true;
                      reader_StandardPrelude_items922.confidential = true;
                      obj862.methods["items"] = reader_StandardPrelude_items922;
                      superDepth = origSuperDepth;
                    };
                    obj_init_862.apply(inheritingObject, []);
                    return obj862;
                    };
                    obj797.methods["new(2)$object(1)"] = func861;
                  var func923 = function(argcv) {    // method asString
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    setModuleName("StandardPrelude");
                    setLineNumber(79);    // compilenode string
                    var string924 = new GraceString("class MatchAndDestructuringPattern");
                    return string924;
                  };
                  func923.paramCounts = [0];
                  obj797.methods["asString"] = func923;
                  func923.definitionLine = 79;
                  func923.definitionModule = "StandardPrelude";
                  superDepth = origSuperDepth;
                };
                obj_init_797.apply(obj797, []);
                var var_MatchAndDestructuringPattern = obj797;
                setLineNumber(1);    // compilenode method
                var func925 = function(argcv) {    // method MatchAndDestructuringPattern
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  setModuleName("StandardPrelude");
                  // MatchAndDestructuringPattern is a simple accessor - elide try ... catch
                  setLineNumber(79);    // compilenode identifier
                  return var_MatchAndDestructuringPattern;
                };
                func925.paramCounts = [0];
                this.methods["MatchAndDestructuringPattern"] = func925;
                func925.definitionLine = 1;
                func925.definitionModule = "StandardPrelude";
                this.methods["MatchAndDestructuringPattern"].debug = "def";
                setLineNumber(111);    // compilenode object
                var obj926 = Grace_allocObject(GraceObject, "VariablePattern");
                obj926.definitionModule = "StandardPrelude";
                obj926.definitionLine = 111;
                obj926.outer = this;
                var reader_StandardPrelude_outer927 = function() {
                  return this.outer;
                };
                obj926.methods["outer"] = reader_StandardPrelude_outer927;
                var obj_init_926 = function() {
                  var origSuperDepth = superDepth;
                  superDepth = obj926;
                  var func928 = function(argcv) {    // method new(_)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_nm = arguments[curarg];
                    curarg++;
                    setModuleName("StandardPrelude");
                    var obj929 = Grace_allocObject(null, "VariablePattern.VariablePattern.new(_)");
                    obj929.definitionModule = "StandardPrelude";
                    obj929.definitionLine = 111;
                    obj929.outer = this;
                    var reader_StandardPrelude_outer930 = function() {
                      return this.outer;
                    };
                    obj929.methods["outer"] = reader_StandardPrelude_outer930;
                    var obj_init_929 = function() {
                      var origSuperDepth = superDepth;
                      superDepth = obj929;
                      var func931 = function(argcv) {    // method match(_)
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var curarg = 1;
                        var var_o = arguments[curarg];
                        curarg++;
                        setModuleName("StandardPrelude");
                        setLineNumber(114);    // compilenode identifier
                        var array933 = new PrimitiveGraceList([var_o]);
                        // call case 6: other requests
                        var call934 = callmethodChecked(var_SuccessfulMatch, "new(2)", [2], var_o, array933);
                        return call934;
                      };
                      func931.paramCounts = [1];
                      obj929.methods["match(1)"] = func931;
                      func931.definitionLine = 113;
                      func931.definitionModule = "StandardPrelude";
                      setLineNumber(112);    // compilenode identifier
                      // call case 6: other requests
                      var call936 = callmethodChecked(var_BasicPattern, "new$object(1)", [0, 1], this);
                      obj929.superobj = call936;
                      if (call936.data) obj929.data = call936.data;
                      if (call936.hasOwnProperty('_value'))
                          obj929._value = call936._value;
                      superDepth = origSuperDepth;
                    };
                    obj_init_929.apply(obj929, []);
                    return obj929;
                  };
                  func928.paramCounts = [1];
                  obj926.methods["new(1)"] = func928;
                  func928.definitionLine = 111;
                  func928.definitionModule = "StandardPrelude";
                    var func937 = function(argcv) {    // method new(_)$object(_)
                      var curarg = 1;
                      var var_nm = arguments[curarg];
                      curarg++;
                      var inheritingObject = arguments[curarg++];
                      // Start argument processing
                      curarg = 1;
                      curarg++;
                      // End argument processing
                      setModuleName("StandardPrelude");
                      var returnTarget = invocationCount;
                      invocationCount++;
                      var obj938 = Grace_allocObject(null, "new(1)");
                      obj938.definitionModule = "StandardPrelude";
                      obj938.definitionLine = 111;
                      var inho938 = inheritingObject;
                      while (inho938.superobj) inho938 = inho938.superobj;
                      inho938.superobj = obj938;
                      obj938.data = inheritingObject.data;
                      if (inheritingObject.hasOwnProperty('_value'))
                        obj938._value = inheritingObject._value;
                      obj938.outer = this;
                      var reader_StandardPrelude_outer939 = function() {
                        return this.outer;
                      };
                      obj938.methods["outer"] = reader_StandardPrelude_outer939;
                      var obj_init_938 = function() {
                        var origSuperDepth = superDepth;
                        superDepth = obj938;
                        var func940 = function(argcv) {    // method match(_)
                          var returnTarget = invocationCount;
                          invocationCount++;
                          var curarg = 1;
                          var var_o = arguments[curarg];
                          curarg++;
                          setModuleName("StandardPrelude");
                          setLineNumber(114);    // compilenode identifier
                          var array942 = new PrimitiveGraceList([var_o]);
                          // call case 6: other requests
                          var call943 = callmethodChecked(var_SuccessfulMatch, "new(2)", [2], var_o, array942);
                          return call943;
                        };
                        func940.paramCounts = [1];
                        obj938.methods["match(1)"] = func940;
                        func940.definitionLine = 113;
                        func940.definitionModule = "StandardPrelude";
                        setLineNumber(112);    // compilenode identifier
                        // call case 6: other requests
                        var call945 = callmethodChecked(var_BasicPattern, "new$object(1)", [0, 1], this);
                        obj938.superobj = call945;
                        if (call945.data) obj938.data = call945.data;
                        if (call945.hasOwnProperty('_value'))
                            obj938._value = call945._value;
                        superDepth = origSuperDepth;
                      };
                      obj_init_938.apply(inheritingObject, []);
                      return obj938;
                      };
                      obj926.methods["new(1)$object(1)"] = func937;
                    var func946 = function(argcv) {    // method asString
                      var returnTarget = invocationCount;
                      invocationCount++;
                      var curarg = 1;
                      setModuleName("StandardPrelude");
                      setLineNumber(111);    // compilenode string
                      var string947 = new GraceString("class VariablePattern");
                      return string947;
                    };
                    func946.paramCounts = [0];
                    obj926.methods["asString"] = func946;
                    func946.definitionLine = 111;
                    func946.definitionModule = "StandardPrelude";
                    superDepth = origSuperDepth;
                  };
                  obj_init_926.apply(obj926, []);
                  var var_VariablePattern = obj926;
                  setLineNumber(1);    // compilenode method
                  var func948 = function(argcv) {    // method VariablePattern
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    setModuleName("StandardPrelude");
                    // VariablePattern is a simple accessor - elide try ... catch
                    setLineNumber(111);    // compilenode identifier
                    return var_VariablePattern;
                  };
                  func948.paramCounts = [0];
                  this.methods["VariablePattern"] = func948;
                  func948.definitionLine = 1;
                  func948.definitionModule = "StandardPrelude";
                  this.methods["VariablePattern"].debug = "def";
                  setLineNumber(118);    // compilenode object
                  var obj949 = Grace_allocObject(GraceObject, "BindingPattern");
                  obj949.definitionModule = "StandardPrelude";
                  obj949.definitionLine = 118;
                  obj949.outer = this;
                  var reader_StandardPrelude_outer950 = function() {
                    return this.outer;
                  };
                  obj949.methods["outer"] = reader_StandardPrelude_outer950;
                  var obj_init_949 = function() {
                    var origSuperDepth = superDepth;
                    superDepth = obj949;
                    var func951 = function(argcv) {    // method new(_)
                      var returnTarget = invocationCount;
                      invocationCount++;
                      var curarg = 1;
                      var var_pat = arguments[curarg];
                      curarg++;
                      setModuleName("StandardPrelude");
                      var obj952 = Grace_allocObject(null, "BindingPattern.BindingPattern.new(_)");
                      obj952.definitionModule = "StandardPrelude";
                      obj952.definitionLine = 118;
                      obj952.outer = this;
                      var reader_StandardPrelude_outer953 = function() {
                        return this.outer;
                      };
                      obj952.methods["outer"] = reader_StandardPrelude_outer953;
                      var obj_init_952 = function() {
                        var origSuperDepth = superDepth;
                        superDepth = obj952;
                        var func954 = function(argcv) {    // method match(_)
                          var returnTarget = invocationCount;
                          invocationCount++;
                          var curarg = 1;
                          var var_o = arguments[curarg];
                          curarg++;
                          setModuleName("StandardPrelude");
                          setLineNumber(121);    // compilenode identifier
                          var array955 = new PrimitiveGraceList([var_o]);
                          var var_bindings = array955;
                          setLineNumber(122);    // compilenode identifier
                          // call case 6: other requests
                          var call957 = callmethodChecked(var_pat, "match(1)", [1], var_o);
                          var var_m = call957;
                          var if958 = GraceDone;
                          setLineNumber(123);    // compilenode call
                          // call case 6: other requests
                          var call960 = callmethodChecked(var_m, "prefix!", [0]);
                          if (Grace_isTrue(call960)) {
                            setLineNumber(124);    // compilenode identifier
                            return var_m;
                          }
                          setLineNumber(126);    // compilenode member
                          // call case 6: other requests
                          var call963 = callmethodChecked(var_m, "bindings", []);
                          var block964 = new GraceBlock(this, 126, 1);
                          setLineNumber(1);    // compilenode identifier
                          block964.real = function(var_b) {
                            setLineNumber(127);    // compilenode identifier
                            // call case 6: other requests
                            var call966 = callmethodChecked(var_bindings, "push(1)", [1], var_b);
                            return call966;
                          };
                          // call case 5: prelude request
                          var call967 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call963, block964);
                          setLineNumber(129);    // compilenode identifier
                          // call case 6: other requests
                          var call969 = callmethodChecked(var_SuccessfulMatch, "new(2)", [2], var_o, var_bindings);
                          return call969;
                        };
                        func954.paramCounts = [1];
                        obj952.methods["match(1)"] = func954;
                        func954.definitionLine = 120;
                        func954.definitionModule = "StandardPrelude";
                        setLineNumber(119);    // compilenode identifier
                        // call case 6: other requests
                        var call971 = callmethodChecked(var_BasicPattern, "new$object(1)", [0, 1], this);
                        obj952.superobj = call971;
                        if (call971.data) obj952.data = call971.data;
                        if (call971.hasOwnProperty('_value'))
                            obj952._value = call971._value;
                        superDepth = origSuperDepth;
                      };
                      obj_init_952.apply(obj952, []);
                      return obj952;
                    };
                    func951.paramCounts = [1];
                    obj949.methods["new(1)"] = func951;
                    func951.definitionLine = 118;
                    func951.definitionModule = "StandardPrelude";
                      var func972 = function(argcv) {    // method new(_)$object(_)
                        var curarg = 1;
                        var var_pat = arguments[curarg];
                        curarg++;
                        var inheritingObject = arguments[curarg++];
                        // Start argument processing
                        curarg = 1;
                        curarg++;
                        // End argument processing
                        setModuleName("StandardPrelude");
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var obj973 = Grace_allocObject(null, "new(1)");
                        obj973.definitionModule = "StandardPrelude";
                        obj973.definitionLine = 118;
                        var inho973 = inheritingObject;
                        while (inho973.superobj) inho973 = inho973.superobj;
                        inho973.superobj = obj973;
                        obj973.data = inheritingObject.data;
                        if (inheritingObject.hasOwnProperty('_value'))
                          obj973._value = inheritingObject._value;
                        obj973.outer = this;
                        var reader_StandardPrelude_outer974 = function() {
                          return this.outer;
                        };
                        obj973.methods["outer"] = reader_StandardPrelude_outer974;
                        var obj_init_973 = function() {
                          var origSuperDepth = superDepth;
                          superDepth = obj973;
                          var func975 = function(argcv) {    // method match(_)
                            var returnTarget = invocationCount;
                            invocationCount++;
                            var curarg = 1;
                            var var_o = arguments[curarg];
                            curarg++;
                            setModuleName("StandardPrelude");
                            setLineNumber(121);    // compilenode identifier
                            var array976 = new PrimitiveGraceList([var_o]);
                            var var_bindings = array976;
                            setLineNumber(122);    // compilenode identifier
                            // call case 6: other requests
                            var call978 = callmethodChecked(var_pat, "match(1)", [1], var_o);
                            var var_m = call978;
                            var if979 = GraceDone;
                            setLineNumber(123);    // compilenode call
                            // call case 6: other requests
                            var call981 = callmethodChecked(var_m, "prefix!", [0]);
                            if (Grace_isTrue(call981)) {
                              setLineNumber(124);    // compilenode identifier
                              return var_m;
                            }
                            setLineNumber(126);    // compilenode member
                            // call case 6: other requests
                            var call984 = callmethodChecked(var_m, "bindings", []);
                            var block985 = new GraceBlock(this, 126, 1);
                            setLineNumber(1);    // compilenode identifier
                            block985.real = function(var_b) {
                              setLineNumber(127);    // compilenode identifier
                              // call case 6: other requests
                              var call987 = callmethodChecked(var_bindings, "push(1)", [1], var_b);
                              return call987;
                            };
                            // call case 5: prelude request
                            var call988 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call984, block985);
                            setLineNumber(129);    // compilenode identifier
                            // call case 6: other requests
                            var call990 = callmethodChecked(var_SuccessfulMatch, "new(2)", [2], var_o, var_bindings);
                            return call990;
                          };
                          func975.paramCounts = [1];
                          obj973.methods["match(1)"] = func975;
                          func975.definitionLine = 120;
                          func975.definitionModule = "StandardPrelude";
                          setLineNumber(119);    // compilenode identifier
                          // call case 6: other requests
                          var call992 = callmethodChecked(var_BasicPattern, "new$object(1)", [0, 1], this);
                          obj973.superobj = call992;
                          if (call992.data) obj973.data = call992.data;
                          if (call992.hasOwnProperty('_value'))
                              obj973._value = call992._value;
                          superDepth = origSuperDepth;
                        };
                        obj_init_973.apply(inheritingObject, []);
                        return obj973;
                        };
                        obj949.methods["new(1)$object(1)"] = func972;
                      var func993 = function(argcv) {    // method asString
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var curarg = 1;
                        setModuleName("StandardPrelude");
                        setLineNumber(118);    // compilenode string
                        var string994 = new GraceString("class BindingPattern");
                        return string994;
                      };
                      func993.paramCounts = [0];
                      obj949.methods["asString"] = func993;
                      func993.definitionLine = 118;
                      func993.definitionModule = "StandardPrelude";
                      superDepth = origSuperDepth;
                    };
                    obj_init_949.apply(obj949, []);
                    var var_BindingPattern = obj949;
                    setLineNumber(1);    // compilenode method
                    var func995 = function(argcv) {    // method BindingPattern
                      var returnTarget = invocationCount;
                      invocationCount++;
                      var curarg = 1;
                      setModuleName("StandardPrelude");
                      // BindingPattern is a simple accessor - elide try ... catch
                      setLineNumber(118);    // compilenode identifier
                      return var_BindingPattern;
                    };
                    func995.paramCounts = [0];
                    this.methods["BindingPattern"] = func995;
                    func995.definitionLine = 1;
                    func995.definitionModule = "StandardPrelude";
                    this.methods["BindingPattern"].debug = "def";
                    setLineNumber(133);    // compilenode object
                    var obj996 = Grace_allocObject(GraceObject, "WildcardPattern");
                    obj996.definitionModule = "StandardPrelude";
                    obj996.definitionLine = 133;
                    obj996.outer = this;
                    var reader_StandardPrelude_outer997 = function() {
                      return this.outer;
                    };
                    obj996.methods["outer"] = reader_StandardPrelude_outer997;
                    var obj_init_996 = function() {
                      var origSuperDepth = superDepth;
                      superDepth = obj996;
                      var func998 = function(argcv) {    // method new
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var curarg = 1;
                        setModuleName("StandardPrelude");
                        var obj999 = Grace_allocObject(null, "WildcardPattern.WildcardPattern.new");
                        obj999.definitionModule = "StandardPrelude";
                        obj999.definitionLine = 133;
                        obj999.outer = this;
                        var reader_StandardPrelude_outer1000 = function() {
                          return this.outer;
                        };
                        obj999.methods["outer"] = reader_StandardPrelude_outer1000;
                        var obj_init_999 = function() {
                          var origSuperDepth = superDepth;
                          superDepth = obj999;
                          var func1001 = function(argcv) {    // method match(_)
                            var returnTarget = invocationCount;
                            invocationCount++;
                            var curarg = 1;
                            var var_o = arguments[curarg];
                            curarg++;
                            setModuleName("StandardPrelude");
                            setLineNumber(136);    // compilenode array
                            var array1003 = new PrimitiveGraceList([]);
                            // call case 6: other requests
                            var call1004 = callmethodChecked(var_SuccessfulMatch, "new(2)", [2], var_done, array1003);
                            return call1004;
                          };
                          func1001.paramCounts = [1];
                          obj999.methods["match(1)"] = func1001;
                          func1001.definitionLine = 135;
                          func1001.definitionModule = "StandardPrelude";
                          setLineNumber(134);    // compilenode identifier
                          // call case 6: other requests
                          var call1006 = callmethodChecked(var_BasicPattern, "new$object(1)", [0, 1], this);
                          obj999.superobj = call1006;
                          if (call1006.data) obj999.data = call1006.data;
                          if (call1006.hasOwnProperty('_value'))
                              obj999._value = call1006._value;
                          superDepth = origSuperDepth;
                        };
                        obj_init_999.apply(obj999, []);
                        return obj999;
                      };
                      func998.paramCounts = [0];
                      obj996.methods["new"] = func998;
                      func998.definitionLine = 133;
                      func998.definitionModule = "StandardPrelude";
                        var func1007 = function(argcv) {    // method new$object(_)
                          var curarg = 1;
                          var inheritingObject = arguments[curarg++];
                          // Start argument processing
                          curarg = 1;
                          // End argument processing
                          setModuleName("StandardPrelude");
                          var returnTarget = invocationCount;
                          invocationCount++;
                          var obj1008 = Grace_allocObject(null, "new");
                          obj1008.definitionModule = "StandardPrelude";
                          obj1008.definitionLine = 133;
                          var inho1008 = inheritingObject;
                          while (inho1008.superobj) inho1008 = inho1008.superobj;
                          inho1008.superobj = obj1008;
                          obj1008.data = inheritingObject.data;
                          if (inheritingObject.hasOwnProperty('_value'))
                            obj1008._value = inheritingObject._value;
                          obj1008.outer = this;
                          var reader_StandardPrelude_outer1009 = function() {
                            return this.outer;
                          };
                          obj1008.methods["outer"] = reader_StandardPrelude_outer1009;
                          var obj_init_1008 = function() {
                            var origSuperDepth = superDepth;
                            superDepth = obj1008;
                            var func1010 = function(argcv) {    // method match(_)
                              var returnTarget = invocationCount;
                              invocationCount++;
                              var curarg = 1;
                              var var_o = arguments[curarg];
                              curarg++;
                              setModuleName("StandardPrelude");
                              setLineNumber(136);    // compilenode array
                              var array1012 = new PrimitiveGraceList([]);
                              // call case 6: other requests
                              var call1013 = callmethodChecked(var_SuccessfulMatch, "new(2)", [2], var_done, array1012);
                              return call1013;
                            };
                            func1010.paramCounts = [1];
                            obj1008.methods["match(1)"] = func1010;
                            func1010.definitionLine = 135;
                            func1010.definitionModule = "StandardPrelude";
                            setLineNumber(134);    // compilenode identifier
                            // call case 6: other requests
                            var call1015 = callmethodChecked(var_BasicPattern, "new$object(1)", [0, 1], this);
                            obj1008.superobj = call1015;
                            if (call1015.data) obj1008.data = call1015.data;
                            if (call1015.hasOwnProperty('_value'))
                                obj1008._value = call1015._value;
                            superDepth = origSuperDepth;
                          };
                          obj_init_1008.apply(inheritingObject, []);
                          return obj1008;
                          };
                          obj996.methods["new$object(1)"] = func1007;
                        var func1016 = function(argcv) {    // method asString
                          var returnTarget = invocationCount;
                          invocationCount++;
                          var curarg = 1;
                          setModuleName("StandardPrelude");
                          setLineNumber(133);    // compilenode string
                          var string1017 = new GraceString("class WildcardPattern");
                          return string1017;
                        };
                        func1016.paramCounts = [0];
                        obj996.methods["asString"] = func1016;
                        func1016.definitionLine = 133;
                        func1016.definitionModule = "StandardPrelude";
                        superDepth = origSuperDepth;
                      };
                      obj_init_996.apply(obj996, []);
                      var var_WildcardPattern = obj996;
                      setLineNumber(1);    // compilenode method
                      var func1018 = function(argcv) {    // method WildcardPattern
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var curarg = 1;
                        setModuleName("StandardPrelude");
                        // WildcardPattern is a simple accessor - elide try ... catch
                        setLineNumber(133);    // compilenode identifier
                        return var_WildcardPattern;
                      };
                      func1018.paramCounts = [0];
                      this.methods["WildcardPattern"] = func1018;
                      func1018.definitionLine = 1;
                      func1018.definitionModule = "StandardPrelude";
                      this.methods["WildcardPattern"].debug = "def";
                      setLineNumber(140);    // compilenode object
                      var obj1019 = Grace_allocObject(GraceObject, "AndPattern");
                      obj1019.definitionModule = "StandardPrelude";
                      obj1019.definitionLine = 140;
                      obj1019.outer = this;
                      var reader_StandardPrelude_outer1020 = function() {
                        return this.outer;
                      };
                      obj1019.methods["outer"] = reader_StandardPrelude_outer1020;
                      var obj_init_1019 = function() {
                        var origSuperDepth = superDepth;
                        superDepth = obj1019;
                        var func1021 = function(argcv) {    // method new(_,_)
                          var returnTarget = invocationCount;
                          invocationCount++;
                          var curarg = 1;
                          var var_p1 = arguments[curarg];
                          curarg++;
                          var var_p2 = arguments[curarg];
                          curarg++;
                          setModuleName("StandardPrelude");
                          var obj1022 = Grace_allocObject(null, "AndPattern.AndPattern.new(_,_)");
                          obj1022.definitionModule = "StandardPrelude";
                          obj1022.definitionLine = 140;
                          obj1022.outer = this;
                          var reader_StandardPrelude_outer1023 = function() {
                            return this.outer;
                          };
                          obj1022.methods["outer"] = reader_StandardPrelude_outer1023;
                          var obj_init_1022 = function() {
                            var origSuperDepth = superDepth;
                            superDepth = obj1022;
                            var func1024 = function(argcv) {    // method match(_)
                              var returnTarget = invocationCount;
                              invocationCount++;
                              var curarg = 1;
                              var var_o = arguments[curarg];
                              curarg++;
                              setModuleName("StandardPrelude");
                              setLineNumber(143);    // compilenode identifier
                              // call case 6: other requests
                              var call1026 = callmethodChecked(var_p1, "match(1)", [1], var_o);
                              var var_m1 = call1026;
                              var if1027 = GraceDone;
                              setLineNumber(144);    // compilenode call
                              // call case 6: other requests
                              var call1029 = callmethodChecked(var_m1, "prefix!", [0]);
                              if (Grace_isTrue(call1029)) {
                                setLineNumber(145);    // compilenode identifier
                                return var_m1;
                              }
                              setLineNumber(147);    // compilenode identifier
                              // call case 6: other requests
                              var call1031 = callmethodChecked(var_p2, "match(1)", [1], var_o);
                              var var_m2 = call1031;
                              var if1032 = GraceDone;
                              setLineNumber(148);    // compilenode call
                              // call case 6: other requests
                              var call1034 = callmethodChecked(var_m2, "prefix!", [0]);
                              if (Grace_isTrue(call1034)) {
                                setLineNumber(149);    // compilenode identifier
                                return var_m2;
                              }
                              setLineNumber(151);    // compilenode array
                              var array1035 = new PrimitiveGraceList([]);
                              var var_bindings = array1035;
                              setLineNumber(152);    // compilenode member
                              // call case 6: other requests
                              var call1038 = callmethodChecked(var_m1, "bindings", []);
                              var block1039 = new GraceBlock(this, 152, 1);
                              setLineNumber(1);    // compilenode identifier
                              block1039.real = function(var_b) {
                                setLineNumber(153);    // compilenode identifier
                                // call case 6: other requests
                                var call1041 = callmethodChecked(var_bindings, "push(1)", [1], var_b);
                                return call1041;
                              };
                              // call case 5: prelude request
                              var call1042 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1038, block1039);
                              setLineNumber(155);    // compilenode member
                              // call case 6: other requests
                              var call1045 = callmethodChecked(var_m2, "bindings", []);
                              var block1046 = new GraceBlock(this, 155, 1);
                              setLineNumber(1);    // compilenode identifier
                              block1046.real = function(var_b) {
                                setLineNumber(156);    // compilenode identifier
                                // call case 6: other requests
                                var call1048 = callmethodChecked(var_bindings, "push(1)", [1], var_b);
                                return call1048;
                              };
                              // call case 5: prelude request
                              var call1049 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1045, block1046);
                              setLineNumber(158);    // compilenode identifier
                              // call case 6: other requests
                              var call1051 = callmethodChecked(var_SuccessfulMatch, "new(2)", [2], var_o, var_bindings);
                              return call1051;
                            };
                            func1024.paramCounts = [1];
                            obj1022.methods["match(1)"] = func1024;
                            func1024.definitionLine = 142;
                            func1024.definitionModule = "StandardPrelude";
                            setLineNumber(141);    // compilenode identifier
                            // call case 6: other requests
                            var call1053 = callmethodChecked(var_BasicPattern, "new$object(1)", [0, 1], this);
                            obj1022.superobj = call1053;
                            if (call1053.data) obj1022.data = call1053.data;
                            if (call1053.hasOwnProperty('_value'))
                                obj1022._value = call1053._value;
                            superDepth = origSuperDepth;
                          };
                          obj_init_1022.apply(obj1022, []);
                          return obj1022;
                        };
                        func1021.paramCounts = [2];
                        obj1019.methods["new(2)"] = func1021;
                        func1021.definitionLine = 140;
                        func1021.definitionModule = "StandardPrelude";
                          var func1054 = function(argcv) {    // method new(_,_)$object(_)
                            var curarg = 1;
                            var var_p1 = arguments[curarg];
                            curarg++;
                            var var_p2 = arguments[curarg];
                            curarg++;
                            var inheritingObject = arguments[curarg++];
                            // Start argument processing
                            curarg = 1;
                            curarg++;
                            curarg++;
                            // End argument processing
                            setModuleName("StandardPrelude");
                            var returnTarget = invocationCount;
                            invocationCount++;
                            var obj1055 = Grace_allocObject(null, "new(2)");
                            obj1055.definitionModule = "StandardPrelude";
                            obj1055.definitionLine = 140;
                            var inho1055 = inheritingObject;
                            while (inho1055.superobj) inho1055 = inho1055.superobj;
                            inho1055.superobj = obj1055;
                            obj1055.data = inheritingObject.data;
                            if (inheritingObject.hasOwnProperty('_value'))
                              obj1055._value = inheritingObject._value;
                            obj1055.outer = this;
                            var reader_StandardPrelude_outer1056 = function() {
                              return this.outer;
                            };
                            obj1055.methods["outer"] = reader_StandardPrelude_outer1056;
                            var obj_init_1055 = function() {
                              var origSuperDepth = superDepth;
                              superDepth = obj1055;
                              var func1057 = function(argcv) {    // method match(_)
                                var returnTarget = invocationCount;
                                invocationCount++;
                                var curarg = 1;
                                var var_o = arguments[curarg];
                                curarg++;
                                setModuleName("StandardPrelude");
                                setLineNumber(143);    // compilenode identifier
                                // call case 6: other requests
                                var call1059 = callmethodChecked(var_p1, "match(1)", [1], var_o);
                                var var_m1 = call1059;
                                var if1060 = GraceDone;
                                setLineNumber(144);    // compilenode call
                                // call case 6: other requests
                                var call1062 = callmethodChecked(var_m1, "prefix!", [0]);
                                if (Grace_isTrue(call1062)) {
                                  setLineNumber(145);    // compilenode identifier
                                  return var_m1;
                                }
                                setLineNumber(147);    // compilenode identifier
                                // call case 6: other requests
                                var call1064 = callmethodChecked(var_p2, "match(1)", [1], var_o);
                                var var_m2 = call1064;
                                var if1065 = GraceDone;
                                setLineNumber(148);    // compilenode call
                                // call case 6: other requests
                                var call1067 = callmethodChecked(var_m2, "prefix!", [0]);
                                if (Grace_isTrue(call1067)) {
                                  setLineNumber(149);    // compilenode identifier
                                  return var_m2;
                                }
                                setLineNumber(151);    // compilenode array
                                var array1068 = new PrimitiveGraceList([]);
                                var var_bindings = array1068;
                                setLineNumber(152);    // compilenode member
                                // call case 6: other requests
                                var call1071 = callmethodChecked(var_m1, "bindings", []);
                                var block1072 = new GraceBlock(this, 152, 1);
                                setLineNumber(1);    // compilenode identifier
                                block1072.real = function(var_b) {
                                  setLineNumber(153);    // compilenode identifier
                                  // call case 6: other requests
                                  var call1074 = callmethodChecked(var_bindings, "push(1)", [1], var_b);
                                  return call1074;
                                };
                                // call case 5: prelude request
                                var call1075 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1071, block1072);
                                setLineNumber(155);    // compilenode member
                                // call case 6: other requests
                                var call1078 = callmethodChecked(var_m2, "bindings", []);
                                var block1079 = new GraceBlock(this, 155, 1);
                                setLineNumber(1);    // compilenode identifier
                                block1079.real = function(var_b) {
                                  setLineNumber(156);    // compilenode identifier
                                  // call case 6: other requests
                                  var call1081 = callmethodChecked(var_bindings, "push(1)", [1], var_b);
                                  return call1081;
                                };
                                // call case 5: prelude request
                                var call1082 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1078, block1079);
                                setLineNumber(158);    // compilenode identifier
                                // call case 6: other requests
                                var call1084 = callmethodChecked(var_SuccessfulMatch, "new(2)", [2], var_o, var_bindings);
                                return call1084;
                              };
                              func1057.paramCounts = [1];
                              obj1055.methods["match(1)"] = func1057;
                              func1057.definitionLine = 142;
                              func1057.definitionModule = "StandardPrelude";
                              setLineNumber(141);    // compilenode identifier
                              // call case 6: other requests
                              var call1086 = callmethodChecked(var_BasicPattern, "new$object(1)", [0, 1], this);
                              obj1055.superobj = call1086;
                              if (call1086.data) obj1055.data = call1086.data;
                              if (call1086.hasOwnProperty('_value'))
                                  obj1055._value = call1086._value;
                              superDepth = origSuperDepth;
                            };
                            obj_init_1055.apply(inheritingObject, []);
                            return obj1055;
                            };
                            obj1019.methods["new(2)$object(1)"] = func1054;
                          var func1087 = function(argcv) {    // method asString
                            var returnTarget = invocationCount;
                            invocationCount++;
                            var curarg = 1;
                            setModuleName("StandardPrelude");
                            setLineNumber(140);    // compilenode string
                            var string1088 = new GraceString("class AndPattern");
                            return string1088;
                          };
                          func1087.paramCounts = [0];
                          obj1019.methods["asString"] = func1087;
                          func1087.definitionLine = 140;
                          func1087.definitionModule = "StandardPrelude";
                          superDepth = origSuperDepth;
                        };
                        obj_init_1019.apply(obj1019, []);
                        var var_AndPattern = obj1019;
                        setLineNumber(1);    // compilenode method
                        var func1089 = function(argcv) {    // method AndPattern
                          var returnTarget = invocationCount;
                          invocationCount++;
                          var curarg = 1;
                          setModuleName("StandardPrelude");
                          // AndPattern is a simple accessor - elide try ... catch
                          setLineNumber(140);    // compilenode identifier
                          return var_AndPattern;
                        };
                        func1089.paramCounts = [0];
                        this.methods["AndPattern"] = func1089;
                        func1089.definitionLine = 1;
                        func1089.definitionModule = "StandardPrelude";
                        this.methods["AndPattern"].debug = "def";
                        setLineNumber(162);    // compilenode object
                        var obj1090 = Grace_allocObject(GraceObject, "OrPattern");
                        obj1090.definitionModule = "StandardPrelude";
                        obj1090.definitionLine = 162;
                        obj1090.outer = this;
                        var reader_StandardPrelude_outer1091 = function() {
                          return this.outer;
                        };
                        obj1090.methods["outer"] = reader_StandardPrelude_outer1091;
                        var obj_init_1090 = function() {
                          var origSuperDepth = superDepth;
                          superDepth = obj1090;
                          var func1092 = function(argcv) {    // method new(_,_)
                            var returnTarget = invocationCount;
                            invocationCount++;
                            var curarg = 1;
                            var var_p1 = arguments[curarg];
                            curarg++;
                            var var_p2 = arguments[curarg];
                            curarg++;
                            setModuleName("StandardPrelude");
                            var obj1093 = Grace_allocObject(null, "OrPattern.OrPattern.new(_,_)");
                            obj1093.definitionModule = "StandardPrelude";
                            obj1093.definitionLine = 162;
                            obj1093.outer = this;
                            var reader_StandardPrelude_outer1094 = function() {
                              return this.outer;
                            };
                            obj1093.methods["outer"] = reader_StandardPrelude_outer1094;
                            var obj_init_1093 = function() {
                              var origSuperDepth = superDepth;
                              superDepth = obj1093;
                              var func1095 = function(argcv) {    // method match(_)
                                var returnTarget = invocationCount;
                                invocationCount++;
                                var curarg = 1;
                                var var_o = arguments[curarg];
                                curarg++;
                                setModuleName("StandardPrelude");
                                var if1096 = GraceDone;
                                setLineNumber(165);    // compilenode identifier
                                // call case 6: other requests
                                var call1098 = callmethodChecked(var_p1, "match(1)", [1], var_o);
                                if (Grace_isTrue(call1098)) {
                                  setLineNumber(166);    // compilenode array
                                  var array1100 = new PrimitiveGraceList([]);
                                  // call case 6: other requests
                                  var call1101 = callmethodChecked(var_SuccessfulMatch, "new(2)", [2], var_o, array1100);
                                  return call1101;
                                }
                                var if1102 = GraceDone;
                                setLineNumber(168);    // compilenode identifier
                                // call case 6: other requests
                                var call1104 = callmethodChecked(var_p2, "match(1)", [1], var_o);
                                if (Grace_isTrue(call1104)) {
                                  setLineNumber(169);    // compilenode array
                                  var array1106 = new PrimitiveGraceList([]);
                                  // call case 6: other requests
                                  var call1107 = callmethodChecked(var_SuccessfulMatch, "new(2)", [2], var_o, array1106);
                                  return call1107;
                                }
                                setLineNumber(171);    // compilenode identifier
                                // call case 6: other requests
                                var call1109 = callmethodChecked(var_FailedMatch, "new(1)", [1], var_o);
                                return call1109;
                              };
                              func1095.paramCounts = [1];
                              obj1093.methods["match(1)"] = func1095;
                              func1095.definitionLine = 164;
                              func1095.definitionModule = "StandardPrelude";
                              setLineNumber(163);    // compilenode identifier
                              // call case 6: other requests
                              var call1111 = callmethodChecked(var_BasicPattern, "new$object(1)", [0, 1], this);
                              obj1093.superobj = call1111;
                              if (call1111.data) obj1093.data = call1111.data;
                              if (call1111.hasOwnProperty('_value'))
                                  obj1093._value = call1111._value;
                              superDepth = origSuperDepth;
                            };
                            obj_init_1093.apply(obj1093, []);
                            return obj1093;
                          };
                          func1092.paramCounts = [2];
                          obj1090.methods["new(2)"] = func1092;
                          func1092.definitionLine = 162;
                          func1092.definitionModule = "StandardPrelude";
                            var func1112 = function(argcv) {    // method new(_,_)$object(_)
                              var curarg = 1;
                              var var_p1 = arguments[curarg];
                              curarg++;
                              var var_p2 = arguments[curarg];
                              curarg++;
                              var inheritingObject = arguments[curarg++];
                              // Start argument processing
                              curarg = 1;
                              curarg++;
                              curarg++;
                              // End argument processing
                              setModuleName("StandardPrelude");
                              var returnTarget = invocationCount;
                              invocationCount++;
                              var obj1113 = Grace_allocObject(null, "new(2)");
                              obj1113.definitionModule = "StandardPrelude";
                              obj1113.definitionLine = 162;
                              var inho1113 = inheritingObject;
                              while (inho1113.superobj) inho1113 = inho1113.superobj;
                              inho1113.superobj = obj1113;
                              obj1113.data = inheritingObject.data;
                              if (inheritingObject.hasOwnProperty('_value'))
                                obj1113._value = inheritingObject._value;
                              obj1113.outer = this;
                              var reader_StandardPrelude_outer1114 = function() {
                                return this.outer;
                              };
                              obj1113.methods["outer"] = reader_StandardPrelude_outer1114;
                              var obj_init_1113 = function() {
                                var origSuperDepth = superDepth;
                                superDepth = obj1113;
                                var func1115 = function(argcv) {    // method match(_)
                                  var returnTarget = invocationCount;
                                  invocationCount++;
                                  var curarg = 1;
                                  var var_o = arguments[curarg];
                                  curarg++;
                                  setModuleName("StandardPrelude");
                                  var if1116 = GraceDone;
                                  setLineNumber(165);    // compilenode identifier
                                  // call case 6: other requests
                                  var call1118 = callmethodChecked(var_p1, "match(1)", [1], var_o);
                                  if (Grace_isTrue(call1118)) {
                                    setLineNumber(166);    // compilenode array
                                    var array1120 = new PrimitiveGraceList([]);
                                    // call case 6: other requests
                                    var call1121 = callmethodChecked(var_SuccessfulMatch, "new(2)", [2], var_o, array1120);
                                    return call1121;
                                  }
                                  var if1122 = GraceDone;
                                  setLineNumber(168);    // compilenode identifier
                                  // call case 6: other requests
                                  var call1124 = callmethodChecked(var_p2, "match(1)", [1], var_o);
                                  if (Grace_isTrue(call1124)) {
                                    setLineNumber(169);    // compilenode array
                                    var array1126 = new PrimitiveGraceList([]);
                                    // call case 6: other requests
                                    var call1127 = callmethodChecked(var_SuccessfulMatch, "new(2)", [2], var_o, array1126);
                                    return call1127;
                                  }
                                  setLineNumber(171);    // compilenode identifier
                                  // call case 6: other requests
                                  var call1129 = callmethodChecked(var_FailedMatch, "new(1)", [1], var_o);
                                  return call1129;
                                };
                                func1115.paramCounts = [1];
                                obj1113.methods["match(1)"] = func1115;
                                func1115.definitionLine = 164;
                                func1115.definitionModule = "StandardPrelude";
                                setLineNumber(163);    // compilenode identifier
                                // call case 6: other requests
                                var call1131 = callmethodChecked(var_BasicPattern, "new$object(1)", [0, 1], this);
                                obj1113.superobj = call1131;
                                if (call1131.data) obj1113.data = call1131.data;
                                if (call1131.hasOwnProperty('_value'))
                                    obj1113._value = call1131._value;
                                superDepth = origSuperDepth;
                              };
                              obj_init_1113.apply(inheritingObject, []);
                              return obj1113;
                              };
                              obj1090.methods["new(2)$object(1)"] = func1112;
                            var func1132 = function(argcv) {    // method asString
                              var returnTarget = invocationCount;
                              invocationCount++;
                              var curarg = 1;
                              setModuleName("StandardPrelude");
                              setLineNumber(162);    // compilenode string
                              var string1133 = new GraceString("class OrPattern");
                              return string1133;
                            };
                            func1132.paramCounts = [0];
                            obj1090.methods["asString"] = func1132;
                            func1132.definitionLine = 162;
                            func1132.definitionModule = "StandardPrelude";
                            superDepth = origSuperDepth;
                          };
                          obj_init_1090.apply(obj1090, []);
                          var var_OrPattern = obj1090;
                          setLineNumber(1);    // compilenode method
                          var func1134 = function(argcv) {    // method OrPattern
                            var returnTarget = invocationCount;
                            invocationCount++;
                            var curarg = 1;
                            setModuleName("StandardPrelude");
                            // OrPattern is a simple accessor - elide try ... catch
                            setLineNumber(162);    // compilenode identifier
                            return var_OrPattern;
                          };
                          func1134.paramCounts = [0];
                          this.methods["OrPattern"] = func1134;
                          func1134.definitionLine = 1;
                          func1134.definitionModule = "StandardPrelude";
                          this.methods["OrPattern"].debug = "def";
                          setLineNumber(175);    // compilenode object
                          var obj1135 = Grace_allocObject(GraceObject, "Singleton");
                          obj1135.definitionModule = "StandardPrelude";
                          obj1135.definitionLine = 175;
                          obj1135.outer = this;
                          var reader_StandardPrelude_outer1136 = function() {
                            return this.outer;
                          };
                          obj1135.methods["outer"] = reader_StandardPrelude_outer1136;
                          var obj_init_1135 = function() {
                            var origSuperDepth = superDepth;
                            superDepth = obj1135;
                            var func1137 = function(argcv) {    // method new
                              var returnTarget = invocationCount;
                              invocationCount++;
                              var curarg = 1;
                              setModuleName("StandardPrelude");
                              setLineNumber(176);    // compilenode object
                              var obj1138 = Grace_allocObject(null, "Singleton.new");
                              obj1138.definitionModule = "StandardPrelude";
                              obj1138.definitionLine = 176;
                              obj1138.outer = this;
                              var reader_StandardPrelude_outer1139 = function() {
                                return this.outer;
                              };
                              obj1138.methods["outer"] = reader_StandardPrelude_outer1139;
                              var obj_init_1138 = function() {
                                var origSuperDepth = superDepth;
                                superDepth = obj1138;
                                var func1140 = function(argcv) {    // method match(_)
                                  var returnTarget = invocationCount;
                                  invocationCount++;
                                  var curarg = 1;
                                  var var_other = arguments[curarg];
                                  curarg++;
                                  setModuleName("StandardPrelude");
                                  var if1141 = GraceDone;
                                  setLineNumber(179);    // compilenode identifier
                                  // call case 4: self request
                                  onSelf = true;
                                  var call1143 = callmethodChecked(this, "isMe(1)", [1], var_other);
                                  if (Grace_isTrue(call1143)) {
                                    setLineNumber(180);    // compilenode array
                                    var array1145 = new PrimitiveGraceList([]);
                                    // call case 6: other requests
                                    var call1146 = callmethodChecked(var_SuccessfulMatch, "new(2)", [2], var_other, array1145);
                                    if1141 = call1146;
                                  } else {
                                    setLineNumber(182);    // compilenode identifier
                                    // call case 6: other requests
                                    var call1148 = callmethodChecked(var_FailedMatch, "new(1)", [1], var_other);
                                    if1141 = call1148;
                                  }
                                  return if1141;
                                };
                                func1140.paramCounts = [1];
                                obj1138.methods["match(1)"] = func1140;
                                func1140.definitionLine = 178;
                                func1140.definitionModule = "StandardPrelude";
                                var func1149 = function(argcv) {    // method ==(_)
                                  var returnTarget = invocationCount;
                                  invocationCount++;
                                  var curarg = 1;
                                  var var_other = arguments[curarg];
                                  curarg++;
                                  setModuleName("StandardPrelude");
                                  setLineNumber(185);    // compilenode identifier
                                  // call case 4: self request
                                  onSelf = true;
                                  var call1151 = callmethodChecked(this, "isMe(1)", [1], var_other);
                                  return call1151;
                                };
                                func1149.paramCounts = [1];
                                obj1138.methods["==(1)"] = func1149;
                                func1149.definitionLine = 185;
                                func1149.definitionModule = "StandardPrelude";
                                setLineNumber(177);    // compilenode identifier
                                // call case 6: other requests
                                var call1153 = callmethodChecked(var_BasicPattern, "new$object(1)", [0, 1], this);
                                obj1138.superobj = call1153;
                                if (call1153.data) obj1138.data = call1153.data;
                                if (call1153.hasOwnProperty('_value'))
                                    obj1138._value = call1153._value;
                                superDepth = origSuperDepth;
                              };
                              obj_init_1138.apply(obj1138, []);
                              return obj1138;
                            };
                            func1137.paramCounts = [0];
                            obj1135.methods["new"] = func1137;
                            func1137.definitionLine = 176;
                            func1137.definitionModule = "StandardPrelude";
                              var func1154 = function(argcv) {    // method new$object(_)
                                var curarg = 1;
                                var inheritingObject = arguments[curarg++];
                                // Start argument processing
                                curarg = 1;
                                // End argument processing
                                setModuleName("StandardPrelude");
                                var returnTarget = invocationCount;
                                invocationCount++;
                                var obj1155 = Grace_allocObject(null, "new");
                                obj1155.definitionModule = "StandardPrelude";
                                obj1155.definitionLine = 176;
                                var inho1155 = inheritingObject;
                                while (inho1155.superobj) inho1155 = inho1155.superobj;
                                inho1155.superobj = obj1155;
                                obj1155.data = inheritingObject.data;
                                if (inheritingObject.hasOwnProperty('_value'))
                                  obj1155._value = inheritingObject._value;
                                obj1155.outer = this;
                                var reader_StandardPrelude_outer1156 = function() {
                                  return this.outer;
                                };
                                obj1155.methods["outer"] = reader_StandardPrelude_outer1156;
                                var obj_init_1155 = function() {
                                  var origSuperDepth = superDepth;
                                  superDepth = obj1155;
                                  var func1157 = function(argcv) {    // method match(_)
                                    var returnTarget = invocationCount;
                                    invocationCount++;
                                    var curarg = 1;
                                    var var_other = arguments[curarg];
                                    curarg++;
                                    setModuleName("StandardPrelude");
                                    var if1158 = GraceDone;
                                    setLineNumber(179);    // compilenode identifier
                                    // call case 4: self request
                                    onSelf = true;
                                    var call1160 = callmethodChecked(this, "isMe(1)", [1], var_other);
                                    if (Grace_isTrue(call1160)) {
                                      setLineNumber(180);    // compilenode array
                                      var array1162 = new PrimitiveGraceList([]);
                                      // call case 6: other requests
                                      var call1163 = callmethodChecked(var_SuccessfulMatch, "new(2)", [2], var_other, array1162);
                                      if1158 = call1163;
                                    } else {
                                      setLineNumber(182);    // compilenode identifier
                                      // call case 6: other requests
                                      var call1165 = callmethodChecked(var_FailedMatch, "new(1)", [1], var_other);
                                      if1158 = call1165;
                                    }
                                    return if1158;
                                  };
                                  func1157.paramCounts = [1];
                                  obj1155.methods["match(1)"] = func1157;
                                  func1157.definitionLine = 178;
                                  func1157.definitionModule = "StandardPrelude";
                                  var func1166 = function(argcv) {    // method ==(_)
                                    var returnTarget = invocationCount;
                                    invocationCount++;
                                    var curarg = 1;
                                    var var_other = arguments[curarg];
                                    curarg++;
                                    setModuleName("StandardPrelude");
                                    setLineNumber(185);    // compilenode identifier
                                    // call case 4: self request
                                    onSelf = true;
                                    var call1168 = callmethodChecked(this, "isMe(1)", [1], var_other);
                                    return call1168;
                                  };
                                  func1166.paramCounts = [1];
                                  obj1155.methods["==(1)"] = func1166;
                                  func1166.definitionLine = 185;
                                  func1166.definitionModule = "StandardPrelude";
                                  setLineNumber(177);    // compilenode identifier
                                  // call case 6: other requests
                                  var call1170 = callmethodChecked(var_BasicPattern, "new$object(1)", [0, 1], this);
                                  obj1155.superobj = call1170;
                                  if (call1170.data) obj1155.data = call1170.data;
                                  if (call1170.hasOwnProperty('_value'))
                                      obj1155._value = call1170._value;
                                  superDepth = origSuperDepth;
                                };
                                obj_init_1155.apply(inheritingObject, []);
                                return obj1155;
                                };
                                obj1135.methods["new$object(1)"] = func1154;
                              var func1171 = function(argcv) {    // method named(_)
                                var returnTarget = invocationCount;
                                invocationCount++;
                                var curarg = 1;
                                var var_printString = arguments[curarg];
                                curarg++;
                                setModuleName("StandardPrelude");
                                setLineNumber(187);    // compilenode object
                                var obj1172 = Grace_allocObject(null, "Singleton.named(_)");
                                obj1172.definitionModule = "StandardPrelude";
                                obj1172.definitionLine = 187;
                                obj1172.outer = this;
                                var reader_StandardPrelude_outer1173 = function() {
                                  return this.outer;
                                };
                                obj1172.methods["outer"] = reader_StandardPrelude_outer1173;
                                var obj_init_1172 = function() {
                                  var origSuperDepth = superDepth;
                                  superDepth = obj1172;
                                  var func1174 = function(argcv) {    // method asString
                                    var returnTarget = invocationCount;
                                    invocationCount++;
                                    var curarg = 1;
                                    setModuleName("StandardPrelude");
                                    // asString is a simple accessor - elide try ... catch
                                    setLineNumber(189);    // compilenode identifier
                                    return var_printString;
                                  };
                                  func1174.paramCounts = [0];
                                  obj1172.methods["asString"] = func1174;
                                  func1174.definitionLine = 189;
                                  func1174.definitionModule = "StandardPrelude";
                                  setLineNumber(188);    // compilenode identifier
                                  // call case 6: other requests
                                  var call1176 = callmethodChecked(var_Singleton, "new$object(1)", [0, 1], this);
                                  obj1172.superobj = call1176;
                                  if (call1176.data) obj1172.data = call1176.data;
                                  if (call1176.hasOwnProperty('_value'))
                                      obj1172._value = call1176._value;
                                  superDepth = origSuperDepth;
                                };
                                obj_init_1172.apply(obj1172, []);
                                return obj1172;
                              };
                              func1171.paramCounts = [1];
                              obj1135.methods["named(1)"] = func1171;
                              func1171.definitionLine = 187;
                              func1171.definitionModule = "StandardPrelude";
                                var func1177 = function(argcv) {    // method named(_)$object(_)
                                  var curarg = 1;
                                  var var_printString = arguments[curarg];
                                  curarg++;
                                  var inheritingObject = arguments[curarg++];
                                  // Start argument processing
                                  curarg = 1;
                                  curarg++;
                                  // End argument processing
                                  setModuleName("StandardPrelude");
                                  var returnTarget = invocationCount;
                                  invocationCount++;
                                  var obj1178 = Grace_allocObject(null, "named(1)");
                                  obj1178.definitionModule = "StandardPrelude";
                                  obj1178.definitionLine = 187;
                                  var inho1178 = inheritingObject;
                                  while (inho1178.superobj) inho1178 = inho1178.superobj;
                                  inho1178.superobj = obj1178;
                                  obj1178.data = inheritingObject.data;
                                  if (inheritingObject.hasOwnProperty('_value'))
                                    obj1178._value = inheritingObject._value;
                                  obj1178.outer = this;
                                  var reader_StandardPrelude_outer1179 = function() {
                                    return this.outer;
                                  };
                                  obj1178.methods["outer"] = reader_StandardPrelude_outer1179;
                                  var obj_init_1178 = function() {
                                    var origSuperDepth = superDepth;
                                    superDepth = obj1178;
                                    var func1180 = function(argcv) {    // method asString
                                      var returnTarget = invocationCount;
                                      invocationCount++;
                                      var curarg = 1;
                                      setModuleName("StandardPrelude");
                                      // asString is a simple accessor - elide try ... catch
                                      setLineNumber(189);    // compilenode identifier
                                      return var_printString;
                                    };
                                    func1180.paramCounts = [0];
                                    obj1178.methods["asString"] = func1180;
                                    func1180.definitionLine = 189;
                                    func1180.definitionModule = "StandardPrelude";
                                    setLineNumber(188);    // compilenode identifier
                                    // call case 6: other requests
                                    var call1182 = callmethodChecked(var_Singleton, "new$object(1)", [0, 1], this);
                                    obj1178.superobj = call1182;
                                    if (call1182.data) obj1178.data = call1182.data;
                                    if (call1182.hasOwnProperty('_value'))
                                        obj1178._value = call1182._value;
                                    superDepth = origSuperDepth;
                                  };
                                  obj_init_1178.apply(inheritingObject, []);
                                  return obj1178;
                                  };
                                  obj1135.methods["named(1)$object(1)"] = func1177;
                                superDepth = origSuperDepth;
                              };
                              obj_init_1135.apply(obj1135, []);
                              var var_Singleton = obj1135;
                              setLineNumber(1);    // compilenode method
                              var func1183 = function(argcv) {    // method Singleton
                                var returnTarget = invocationCount;
                                invocationCount++;
                                var curarg = 1;
                                setModuleName("StandardPrelude");
                                // Singleton is a simple accessor - elide try ... catch
                                setLineNumber(175);    // compilenode identifier
                                return var_Singleton;
                              };
                              func1183.paramCounts = [0];
                              this.methods["Singleton"] = func1183;
                              func1183.definitionLine = 1;
                              func1183.definitionModule = "StandardPrelude";
                              this.methods["Singleton"].debug = "def";
                              setLineNumber(193);    // compilenode object
                              var obj1184 = Grace_allocObject(GraceObject, "BaseType");
                              obj1184.definitionModule = "StandardPrelude";
                              obj1184.definitionLine = 193;
                              obj1184.outer = this;
                              var reader_StandardPrelude_outer1185 = function() {
                                return this.outer;
                              };
                              obj1184.methods["outer"] = reader_StandardPrelude_outer1185;
                              var obj_init_1184 = function() {
                                var origSuperDepth = superDepth;
                                superDepth = obj1184;
                                var func1186 = function(argcv) {    // method new(_)
                                  var returnTarget = invocationCount;
                                  invocationCount++;
                                  var curarg = 1;
                                  var var_name = arguments[curarg];
                                  curarg++;
                                  setModuleName("StandardPrelude");
                                  var obj1187 = Grace_allocObject(GraceObject, "BaseType.BaseType.new(_)");
                                  obj1187.definitionModule = "StandardPrelude";
                                  obj1187.definitionLine = 193;
                                  obj1187.outer = this;
                                  var reader_StandardPrelude_outer1188 = function() {
                                    return this.outer;
                                  };
                                  obj1187.methods["outer"] = reader_StandardPrelude_outer1188;
                                  var obj_init_1187 = function() {
                                    var origSuperDepth = superDepth;
                                    superDepth = obj1187;
                                    var func1189 = function(argcv) {    // method &(_)
                                      var returnTarget = invocationCount;
                                      invocationCount++;
                                      var curarg = 1;
                                      var var_o = arguments[curarg];
                                      curarg++;
                                      setModuleName("StandardPrelude");
                                      setLineNumber(195);    // compilenode identifier
                                      // call case 6: other requests
                                      var call1191 = callmethodChecked(var_TypeIntersection, "new(2)", [2], this, var_o);
                                      return call1191;
                                    };
                                    func1189.paramCounts = [1];
                                    obj1187.methods["&(1)"] = func1189;
                                    func1189.definitionLine = 194;
                                    func1189.definitionModule = "StandardPrelude";
                                    var func1192 = function(argcv) {    // method |(_)
                                      var returnTarget = invocationCount;
                                      invocationCount++;
                                      var curarg = 1;
                                      var var_o = arguments[curarg];
                                      curarg++;
                                      setModuleName("StandardPrelude");
                                      setLineNumber(198);    // compilenode identifier
                                      // call case 6: other requests
                                      var call1194 = callmethodChecked(var_TypeVariant, "new(2)", [2], this, var_o);
                                      return call1194;
                                    };
                                    func1192.paramCounts = [1];
                                    obj1187.methods["|(1)"] = func1192;
                                    func1192.definitionLine = 197;
                                    func1192.definitionModule = "StandardPrelude";
                                    var func1195 = function(argcv) {    // method +(_)
                                      var returnTarget = invocationCount;
                                      invocationCount++;
                                      var curarg = 1;
                                      var var_o = arguments[curarg];
                                      curarg++;
                                      setModuleName("StandardPrelude");
                                      setLineNumber(201);    // compilenode identifier
                                      // call case 6: other requests
                                      var call1197 = callmethodChecked(var_TypeUnion, "new(2)", [2], this, var_o);
                                      return call1197;
                                    };
                                    func1195.paramCounts = [1];
                                    obj1187.methods["+(1)"] = func1195;
                                    func1195.definitionLine = 200;
                                    func1195.definitionModule = "StandardPrelude";
                                    var func1198 = function(argcv) {    // method -(_)
                                      var returnTarget = invocationCount;
                                      invocationCount++;
                                      var curarg = 1;
                                      var var_o = arguments[curarg];
                                      curarg++;
                                      setModuleName("StandardPrelude");
                                      setLineNumber(204);    // compilenode identifier
                                      // call case 6: other requests
                                      var call1200 = callmethodChecked(var_TypeSubtraction, "new(2)", [2], this, var_o);
                                      return call1200;
                                    };
                                    func1198.paramCounts = [1];
                                    obj1187.methods["-(1)"] = func1198;
                                    func1198.definitionLine = 203;
                                    func1198.definitionModule = "StandardPrelude";
                                    var func1201 = function(argcv) {    // method asString
                                      var returnTarget = invocationCount;
                                      invocationCount++;
                                      var curarg = 1;
                                      setModuleName("StandardPrelude");
                                      var if1202 = GraceDone;
                                      setLineNumber(207);    // compilenode string
                                      var string1203 = new GraceString("");
                                      var opresult1206 = callmethodChecked(var_name, "==(1)", [1], string1203);
                                      if (Grace_isTrue(opresult1206)) {
                                        var string1207 = new GraceString("type \u2039anon\u203a");
                                        if1202 = string1207;
                                      } else {
                                        setLineNumber(208);    // compilenode string
                                        var string1208 = new GraceString("");
                                        var string1211 = new GraceString("type ");
                                        var opresult1213 = callmethodChecked(string1211, "++(1)", [1], var_name);
                                        var opresult1215 = callmethodChecked(opresult1213, "++(1)", [1], string1208);
                                        if1202 = opresult1215;
                                      }
                                      return if1202;
                                    };
                                    func1201.paramCounts = [0];
                                    obj1187.methods["asString"] = func1201;
                                    func1201.definitionLine = 206;
                                    func1201.definitionModule = "StandardPrelude";
                                    superDepth = origSuperDepth;
                                  };
                                  obj_init_1187.apply(obj1187, []);
                                  return obj1187;
                                };
                                func1186.paramCounts = [1];
                                obj1184.methods["new(1)"] = func1186;
                                func1186.definitionLine = 193;
                                func1186.definitionModule = "StandardPrelude";
                                  var func1216 = function(argcv) {    // method new(_)$object(_)
                                    var curarg = 1;
                                    var var_name = arguments[curarg];
                                    curarg++;
                                    var inheritingObject = arguments[curarg++];
                                    // Start argument processing
                                    curarg = 1;
                                    curarg++;
                                    // End argument processing
                                    setModuleName("StandardPrelude");
                                    var returnTarget = invocationCount;
                                    invocationCount++;
                                    var obj1217 = Grace_allocObject(GraceObject, "new(1)");
                                    obj1217.definitionModule = "StandardPrelude";
                                    obj1217.definitionLine = 193;
                                    var inho1217 = inheritingObject;
                                    while (inho1217.superobj) inho1217 = inho1217.superobj;
                                    inho1217.superobj = obj1217;
                                    obj1217.data = inheritingObject.data;
                                    if (inheritingObject.hasOwnProperty('_value'))
                                      obj1217._value = inheritingObject._value;
                                    obj1217.outer = this;
                                    var reader_StandardPrelude_outer1218 = function() {
                                      return this.outer;
                                    };
                                    obj1217.methods["outer"] = reader_StandardPrelude_outer1218;
                                    var obj_init_1217 = function() {
                                      var origSuperDepth = superDepth;
                                      superDepth = obj1217;
                                      var func1219 = function(argcv) {    // method &(_)
                                        var returnTarget = invocationCount;
                                        invocationCount++;
                                        var curarg = 1;
                                        var var_o = arguments[curarg];
                                        curarg++;
                                        setModuleName("StandardPrelude");
                                        setLineNumber(195);    // compilenode identifier
                                        // call case 6: other requests
                                        var call1221 = callmethodChecked(var_TypeIntersection, "new(2)", [2], this, var_o);
                                        return call1221;
                                      };
                                      func1219.paramCounts = [1];
                                      obj1217.methods["&(1)"] = func1219;
                                      func1219.definitionLine = 194;
                                      func1219.definitionModule = "StandardPrelude";
                                      var func1222 = function(argcv) {    // method |(_)
                                        var returnTarget = invocationCount;
                                        invocationCount++;
                                        var curarg = 1;
                                        var var_o = arguments[curarg];
                                        curarg++;
                                        setModuleName("StandardPrelude");
                                        setLineNumber(198);    // compilenode identifier
                                        // call case 6: other requests
                                        var call1224 = callmethodChecked(var_TypeVariant, "new(2)", [2], this, var_o);
                                        return call1224;
                                      };
                                      func1222.paramCounts = [1];
                                      obj1217.methods["|(1)"] = func1222;
                                      func1222.definitionLine = 197;
                                      func1222.definitionModule = "StandardPrelude";
                                      var func1225 = function(argcv) {    // method +(_)
                                        var returnTarget = invocationCount;
                                        invocationCount++;
                                        var curarg = 1;
                                        var var_o = arguments[curarg];
                                        curarg++;
                                        setModuleName("StandardPrelude");
                                        setLineNumber(201);    // compilenode identifier
                                        // call case 6: other requests
                                        var call1227 = callmethodChecked(var_TypeUnion, "new(2)", [2], this, var_o);
                                        return call1227;
                                      };
                                      func1225.paramCounts = [1];
                                      obj1217.methods["+(1)"] = func1225;
                                      func1225.definitionLine = 200;
                                      func1225.definitionModule = "StandardPrelude";
                                      var func1228 = function(argcv) {    // method -(_)
                                        var returnTarget = invocationCount;
                                        invocationCount++;
                                        var curarg = 1;
                                        var var_o = arguments[curarg];
                                        curarg++;
                                        setModuleName("StandardPrelude");
                                        setLineNumber(204);    // compilenode identifier
                                        // call case 6: other requests
                                        var call1230 = callmethodChecked(var_TypeSubtraction, "new(2)", [2], this, var_o);
                                        return call1230;
                                      };
                                      func1228.paramCounts = [1];
                                      obj1217.methods["-(1)"] = func1228;
                                      func1228.definitionLine = 203;
                                      func1228.definitionModule = "StandardPrelude";
                                      var func1231 = function(argcv) {    // method asString
                                        var returnTarget = invocationCount;
                                        invocationCount++;
                                        var curarg = 1;
                                        setModuleName("StandardPrelude");
                                        var if1232 = GraceDone;
                                        setLineNumber(207);    // compilenode string
                                        var string1233 = new GraceString("");
                                        var opresult1236 = callmethodChecked(var_name, "==(1)", [1], string1233);
                                        if (Grace_isTrue(opresult1236)) {
                                          var string1237 = new GraceString("type \u2039anon\u203a");
                                          if1232 = string1237;
                                        } else {
                                          setLineNumber(208);    // compilenode string
                                          var string1238 = new GraceString("");
                                          var string1241 = new GraceString("type ");
                                          var opresult1243 = callmethodChecked(string1241, "++(1)", [1], var_name);
                                          var opresult1245 = callmethodChecked(opresult1243, "++(1)", [1], string1238);
                                          if1232 = opresult1245;
                                        }
                                        return if1232;
                                      };
                                      func1231.paramCounts = [0];
                                      obj1217.methods["asString"] = func1231;
                                      func1231.definitionLine = 206;
                                      func1231.definitionModule = "StandardPrelude";
                                      superDepth = origSuperDepth;
                                    };
                                    obj_init_1217.apply(inheritingObject, []);
                                    return obj1217;
                                    };
                                    obj1184.methods["new(1)$object(1)"] = func1216;
                                  var func1246 = function(argcv) {    // method asString
                                    var returnTarget = invocationCount;
                                    invocationCount++;
                                    var curarg = 1;
                                    setModuleName("StandardPrelude");
                                    setLineNumber(193);    // compilenode string
                                    var string1247 = new GraceString("class BaseType");
                                    return string1247;
                                  };
                                  func1246.paramCounts = [0];
                                  obj1184.methods["asString"] = func1246;
                                  func1246.definitionLine = 193;
                                  func1246.definitionModule = "StandardPrelude";
                                  superDepth = origSuperDepth;
                                };
                                obj_init_1184.apply(obj1184, []);
                                var var_BaseType = obj1184;
                                setLineNumber(1);    // compilenode method
                                var func1248 = function(argcv) {    // method BaseType
                                  var returnTarget = invocationCount;
                                  invocationCount++;
                                  var curarg = 1;
                                  setModuleName("StandardPrelude");
                                  // BaseType is a simple accessor - elide try ... catch
                                  setLineNumber(193);    // compilenode identifier
                                  return var_BaseType;
                                };
                                func1248.paramCounts = [0];
                                this.methods["BaseType"] = func1248;
                                func1248.definitionLine = 1;
                                func1248.definitionModule = "StandardPrelude";
                                this.methods["BaseType"].debug = "def";
                                setLineNumber(212);    // compilenode object
                                var obj1249 = Grace_allocObject(GraceObject, "TypeIntersection");
                                obj1249.definitionModule = "StandardPrelude";
                                obj1249.definitionLine = 212;
                                obj1249.outer = this;
                                var reader_StandardPrelude_outer1250 = function() {
                                  return this.outer;
                                };
                                obj1249.methods["outer"] = reader_StandardPrelude_outer1250;
                                var obj_init_1249 = function() {
                                  var origSuperDepth = superDepth;
                                  superDepth = obj1249;
                                  var func1251 = function(argcv) {    // method new(_,_)
                                    var returnTarget = invocationCount;
                                    invocationCount++;
                                    var curarg = 1;
                                    var var_t1 = arguments[curarg];
                                    curarg++;
                                    var var_t2 = arguments[curarg];
                                    curarg++;
                                    setModuleName("StandardPrelude");
                                    var obj1252 = Grace_allocObject(null, "TypeIntersection.TypeIntersection.new(_,_)");
                                    obj1252.definitionModule = "StandardPrelude";
                                    obj1252.definitionLine = 212;
                                    obj1252.outer = this;
                                    var reader_StandardPrelude_outer1253 = function() {
                                      return this.outer;
                                    };
                                    obj1252.methods["outer"] = reader_StandardPrelude_outer1253;
                                    var obj_init_1252 = function() {
                                      var origSuperDepth = superDepth;
                                      superDepth = obj1252;
                                      var func1254 = function(argcv) {    // method &(_)
                                        var returnTarget = invocationCount;
                                        invocationCount++;
                                        var curarg = 1;
                                        var var_o = arguments[curarg];
                                        curarg++;
                                        setModuleName("StandardPrelude");
                                        setLineNumber(216);    // compilenode identifier
                                        // call case 6: other requests
                                        var call1256 = callmethodChecked(var_TypeIntersection, "new(2)", [2], this, var_o);
                                        return call1256;
                                      };
                                      func1254.paramCounts = [1];
                                      obj1252.methods["&(1)"] = func1254;
                                      func1254.definitionLine = 215;
                                      func1254.definitionModule = "StandardPrelude";
                                      var func1257 = function(argcv) {    // method |(_)
                                        var returnTarget = invocationCount;
                                        invocationCount++;
                                        var curarg = 1;
                                        var var_o = arguments[curarg];
                                        curarg++;
                                        setModuleName("StandardPrelude");
                                        setLineNumber(219);    // compilenode identifier
                                        // call case 6: other requests
                                        var call1259 = callmethodChecked(var_TypeVariant, "new(2)", [2], this, var_o);
                                        return call1259;
                                      };
                                      func1257.paramCounts = [1];
                                      obj1252.methods["|(1)"] = func1257;
                                      func1257.definitionLine = 218;
                                      func1257.definitionModule = "StandardPrelude";
                                      var func1260 = function(argcv) {    // method +(_)
                                        var returnTarget = invocationCount;
                                        invocationCount++;
                                        var curarg = 1;
                                        var var_o = arguments[curarg];
                                        curarg++;
                                        setModuleName("StandardPrelude");
                                        setLineNumber(222);    // compilenode identifier
                                        // call case 6: other requests
                                        var call1262 = callmethodChecked(var_TypeUnion, "new(2)", [2], this, var_o);
                                        return call1262;
                                      };
                                      func1260.paramCounts = [1];
                                      obj1252.methods["+(1)"] = func1260;
                                      func1260.definitionLine = 221;
                                      func1260.definitionModule = "StandardPrelude";
                                      var func1263 = function(argcv) {    // method -(_)
                                        var returnTarget = invocationCount;
                                        invocationCount++;
                                        var curarg = 1;
                                        var var_o = arguments[curarg];
                                        curarg++;
                                        setModuleName("StandardPrelude");
                                        setLineNumber(225);    // compilenode identifier
                                        // call case 6: other requests
                                        var call1265 = callmethodChecked(var_TypeSubtraction, "new(2)", [2], this, var_o);
                                        return call1265;
                                      };
                                      func1263.paramCounts = [1];
                                      obj1252.methods["-(1)"] = func1263;
                                      func1263.definitionLine = 224;
                                      func1263.definitionModule = "StandardPrelude";
                                      var func1266 = function(argcv) {    // method methodNames
                                        var returnTarget = invocationCount;
                                        invocationCount++;
                                        var curarg = 1;
                                        setModuleName("StandardPrelude");
                                        setLineNumber(228);    // compilenode member
                                        // call case 6: other requests
                                        var call1269 = callmethodChecked(var_t2, "methodNames", []);
                                        // call case 6: other requests
                                        // call case 6: other requests
                                        var call1271 = callmethodChecked(var_t1, "methodNames", []);
                                        var call1272 = callmethodChecked(call1271, "addAll(1)", [1], call1269);
                                        return call1272;
                                      };
                                      func1266.paramCounts = [0];
                                      obj1252.methods["methodNames"] = func1266;
                                      func1266.definitionLine = 227;
                                      func1266.definitionModule = "StandardPrelude";
                                      var func1273 = function(argcv) {    // method asString
                                        var returnTarget = invocationCount;
                                        invocationCount++;
                                        var curarg = 1;
                                        setModuleName("StandardPrelude");
                                        setLineNumber(230);    // compilenode string
                                        var string1274 = new GraceString(")");
                                        var string1277 = new GraceString(" & ");
                                        var string1280 = new GraceString("(");
                                        var opresult1282 = callmethodChecked(string1280, "++(1)", [1], var_t1);
                                        var opresult1284 = callmethodChecked(opresult1282, "++(1)", [1], string1277);
                                        var opresult1286 = callmethodChecked(opresult1284, "++(1)", [1], var_t2);
                                        var opresult1288 = callmethodChecked(opresult1286, "++(1)", [1], string1274);
                                        return opresult1288;
                                      };
                                      func1273.paramCounts = [0];
                                      obj1252.methods["asString"] = func1273;
                                      func1273.definitionLine = 230;
                                      func1273.definitionModule = "StandardPrelude";
                                      setLineNumber(213);    // compilenode identifier
                                      // call case 6: other requests
                                      var call1290 = callmethodChecked(var_AndPattern, "new(2)$object(1)", [2, 1], var_t1, var_t2, this);
                                      obj1252.superobj = call1290;
                                      if (call1290.data) obj1252.data = call1290.data;
                                      if (call1290.hasOwnProperty('_value'))
                                          obj1252._value = call1290._value;
                                      superDepth = origSuperDepth;
                                    };
                                    obj_init_1252.apply(obj1252, []);
                                    return obj1252;
                                  };
                                  func1251.paramCounts = [2];
                                  obj1249.methods["new(2)"] = func1251;
                                  func1251.definitionLine = 212;
                                  func1251.definitionModule = "StandardPrelude";
                                    var func1291 = function(argcv) {    // method new(_,_)$object(_)
                                      var curarg = 1;
                                      var var_t1 = arguments[curarg];
                                      curarg++;
                                      var var_t2 = arguments[curarg];
                                      curarg++;
                                      var inheritingObject = arguments[curarg++];
                                      // Start argument processing
                                      curarg = 1;
                                      curarg++;
                                      curarg++;
                                      // End argument processing
                                      setModuleName("StandardPrelude");
                                      var returnTarget = invocationCount;
                                      invocationCount++;
                                      var obj1292 = Grace_allocObject(null, "new(2)");
                                      obj1292.definitionModule = "StandardPrelude";
                                      obj1292.definitionLine = 212;
                                      var inho1292 = inheritingObject;
                                      while (inho1292.superobj) inho1292 = inho1292.superobj;
                                      inho1292.superobj = obj1292;
                                      obj1292.data = inheritingObject.data;
                                      if (inheritingObject.hasOwnProperty('_value'))
                                        obj1292._value = inheritingObject._value;
                                      obj1292.outer = this;
                                      var reader_StandardPrelude_outer1293 = function() {
                                        return this.outer;
                                      };
                                      obj1292.methods["outer"] = reader_StandardPrelude_outer1293;
                                      var obj_init_1292 = function() {
                                        var origSuperDepth = superDepth;
                                        superDepth = obj1292;
                                        var func1294 = function(argcv) {    // method &(_)
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          var var_o = arguments[curarg];
                                          curarg++;
                                          setModuleName("StandardPrelude");
                                          setLineNumber(216);    // compilenode identifier
                                          // call case 6: other requests
                                          var call1296 = callmethodChecked(var_TypeIntersection, "new(2)", [2], this, var_o);
                                          return call1296;
                                        };
                                        func1294.paramCounts = [1];
                                        obj1292.methods["&(1)"] = func1294;
                                        func1294.definitionLine = 215;
                                        func1294.definitionModule = "StandardPrelude";
                                        var func1297 = function(argcv) {    // method |(_)
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          var var_o = arguments[curarg];
                                          curarg++;
                                          setModuleName("StandardPrelude");
                                          setLineNumber(219);    // compilenode identifier
                                          // call case 6: other requests
                                          var call1299 = callmethodChecked(var_TypeVariant, "new(2)", [2], this, var_o);
                                          return call1299;
                                        };
                                        func1297.paramCounts = [1];
                                        obj1292.methods["|(1)"] = func1297;
                                        func1297.definitionLine = 218;
                                        func1297.definitionModule = "StandardPrelude";
                                        var func1300 = function(argcv) {    // method +(_)
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          var var_o = arguments[curarg];
                                          curarg++;
                                          setModuleName("StandardPrelude");
                                          setLineNumber(222);    // compilenode identifier
                                          // call case 6: other requests
                                          var call1302 = callmethodChecked(var_TypeUnion, "new(2)", [2], this, var_o);
                                          return call1302;
                                        };
                                        func1300.paramCounts = [1];
                                        obj1292.methods["+(1)"] = func1300;
                                        func1300.definitionLine = 221;
                                        func1300.definitionModule = "StandardPrelude";
                                        var func1303 = function(argcv) {    // method -(_)
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          var var_o = arguments[curarg];
                                          curarg++;
                                          setModuleName("StandardPrelude");
                                          setLineNumber(225);    // compilenode identifier
                                          // call case 6: other requests
                                          var call1305 = callmethodChecked(var_TypeSubtraction, "new(2)", [2], this, var_o);
                                          return call1305;
                                        };
                                        func1303.paramCounts = [1];
                                        obj1292.methods["-(1)"] = func1303;
                                        func1303.definitionLine = 224;
                                        func1303.definitionModule = "StandardPrelude";
                                        var func1306 = function(argcv) {    // method methodNames
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          setModuleName("StandardPrelude");
                                          setLineNumber(228);    // compilenode member
                                          // call case 6: other requests
                                          var call1309 = callmethodChecked(var_t2, "methodNames", []);
                                          // call case 6: other requests
                                          // call case 6: other requests
                                          var call1311 = callmethodChecked(var_t1, "methodNames", []);
                                          var call1312 = callmethodChecked(call1311, "addAll(1)", [1], call1309);
                                          return call1312;
                                        };
                                        func1306.paramCounts = [0];
                                        obj1292.methods["methodNames"] = func1306;
                                        func1306.definitionLine = 227;
                                        func1306.definitionModule = "StandardPrelude";
                                        var func1313 = function(argcv) {    // method asString
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          setModuleName("StandardPrelude");
                                          setLineNumber(230);    // compilenode string
                                          var string1314 = new GraceString(")");
                                          var string1317 = new GraceString(" & ");
                                          var string1320 = new GraceString("(");
                                          var opresult1322 = callmethodChecked(string1320, "++(1)", [1], var_t1);
                                          var opresult1324 = callmethodChecked(opresult1322, "++(1)", [1], string1317);
                                          var opresult1326 = callmethodChecked(opresult1324, "++(1)", [1], var_t2);
                                          var opresult1328 = callmethodChecked(opresult1326, "++(1)", [1], string1314);
                                          return opresult1328;
                                        };
                                        func1313.paramCounts = [0];
                                        obj1292.methods["asString"] = func1313;
                                        func1313.definitionLine = 230;
                                        func1313.definitionModule = "StandardPrelude";
                                        setLineNumber(213);    // compilenode identifier
                                        // call case 6: other requests
                                        var call1330 = callmethodChecked(var_AndPattern, "new(2)$object(1)", [2, 1], var_t1, var_t2, this);
                                        obj1292.superobj = call1330;
                                        if (call1330.data) obj1292.data = call1330.data;
                                        if (call1330.hasOwnProperty('_value'))
                                            obj1292._value = call1330._value;
                                        superDepth = origSuperDepth;
                                      };
                                      obj_init_1292.apply(inheritingObject, []);
                                      return obj1292;
                                      };
                                      obj1249.methods["new(2)$object(1)"] = func1291;
                                    var func1331 = function(argcv) {    // method asString
                                      var returnTarget = invocationCount;
                                      invocationCount++;
                                      var curarg = 1;
                                      setModuleName("StandardPrelude");
                                      setLineNumber(212);    // compilenode string
                                      var string1332 = new GraceString("class TypeIntersection");
                                      return string1332;
                                    };
                                    func1331.paramCounts = [0];
                                    obj1249.methods["asString"] = func1331;
                                    func1331.definitionLine = 212;
                                    func1331.definitionModule = "StandardPrelude";
                                    superDepth = origSuperDepth;
                                  };
                                  obj_init_1249.apply(obj1249, []);
                                  var var_TypeIntersection = obj1249;
                                  setLineNumber(1);    // compilenode method
                                  var func1333 = function(argcv) {    // method TypeIntersection
                                    var returnTarget = invocationCount;
                                    invocationCount++;
                                    var curarg = 1;
                                    setModuleName("StandardPrelude");
                                    // TypeIntersection is a simple accessor - elide try ... catch
                                    setLineNumber(212);    // compilenode identifier
                                    return var_TypeIntersection;
                                  };
                                  func1333.paramCounts = [0];
                                  this.methods["TypeIntersection"] = func1333;
                                  func1333.definitionLine = 1;
                                  func1333.definitionModule = "StandardPrelude";
                                  this.methods["TypeIntersection"].debug = "def";
                                  setLineNumber(233);    // compilenode object
                                  var obj1334 = Grace_allocObject(GraceObject, "TypeVariant");
                                  obj1334.definitionModule = "StandardPrelude";
                                  obj1334.definitionLine = 233;
                                  obj1334.outer = this;
                                  var reader_StandardPrelude_outer1335 = function() {
                                    return this.outer;
                                  };
                                  obj1334.methods["outer"] = reader_StandardPrelude_outer1335;
                                  var obj_init_1334 = function() {
                                    var origSuperDepth = superDepth;
                                    superDepth = obj1334;
                                    var func1336 = function(argcv) {    // method new(_,_)
                                      var returnTarget = invocationCount;
                                      invocationCount++;
                                      var curarg = 1;
                                      var var_t1 = arguments[curarg];
                                      curarg++;
                                      var var_t2 = arguments[curarg];
                                      curarg++;
                                      setModuleName("StandardPrelude");
                                      var obj1337 = Grace_allocObject(null, "TypeVariant.TypeVariant.new(_,_)");
                                      obj1337.definitionModule = "StandardPrelude";
                                      obj1337.definitionLine = 233;
                                      obj1337.outer = this;
                                      var reader_StandardPrelude_outer1338 = function() {
                                        return this.outer;
                                      };
                                      obj1337.methods["outer"] = reader_StandardPrelude_outer1338;
                                      var obj_init_1337 = function() {
                                        var origSuperDepth = superDepth;
                                        superDepth = obj1337;
                                        var func1339 = function(argcv) {    // method &(_)
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          var var_o = arguments[curarg];
                                          curarg++;
                                          setModuleName("StandardPrelude");
                                          setLineNumber(237);    // compilenode identifier
                                          // call case 6: other requests
                                          var call1341 = callmethodChecked(var_TypeIntersection, "new(2)", [2], this, var_o);
                                          return call1341;
                                        };
                                        func1339.paramCounts = [1];
                                        obj1337.methods["&(1)"] = func1339;
                                        func1339.definitionLine = 236;
                                        func1339.definitionModule = "StandardPrelude";
                                        var func1342 = function(argcv) {    // method |(_)
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          var var_o = arguments[curarg];
                                          curarg++;
                                          setModuleName("StandardPrelude");
                                          setLineNumber(240);    // compilenode identifier
                                          // call case 6: other requests
                                          var call1344 = callmethodChecked(var_TypeVariant, "new(2)", [2], this, var_o);
                                          return call1344;
                                        };
                                        func1342.paramCounts = [1];
                                        obj1337.methods["|(1)"] = func1342;
                                        func1342.definitionLine = 239;
                                        func1342.definitionModule = "StandardPrelude";
                                        var func1345 = function(argcv) {    // method +(_)
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          var var_o = arguments[curarg];
                                          curarg++;
                                          setModuleName("StandardPrelude");
                                          setLineNumber(243);    // compilenode identifier
                                          // call case 6: other requests
                                          var call1347 = callmethodChecked(var_TypeUnion, "new(2)", [2], this, var_o);
                                          return call1347;
                                        };
                                        func1345.paramCounts = [1];
                                        obj1337.methods["+(1)"] = func1345;
                                        func1345.definitionLine = 242;
                                        func1345.definitionModule = "StandardPrelude";
                                        var func1348 = function(argcv) {    // method -(_)
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          var var_o = arguments[curarg];
                                          curarg++;
                                          setModuleName("StandardPrelude");
                                          setLineNumber(246);    // compilenode identifier
                                          // call case 6: other requests
                                          var call1350 = callmethodChecked(var_TypeSubtraction, "new(2)", [2], this, var_o);
                                          return call1350;
                                        };
                                        func1348.paramCounts = [1];
                                        obj1337.methods["-(1)"] = func1348;
                                        func1348.definitionLine = 245;
                                        func1348.definitionModule = "StandardPrelude";
                                        var func1351 = function(argcv) {    // method methodNames
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          setModuleName("StandardPrelude");
                                          setLineNumber(249);    // compilenode member
                                          // call case 4: self request
                                          onSelf = true;
                                          var call1353 = callmethodChecked(this, "TypeVariantsCannotBeCharacterizedByASetOfMethods", []);
                                          return call1353;
                                        };
                                        func1351.paramCounts = [0];
                                        obj1337.methods["methodNames"] = func1351;
                                        func1351.definitionLine = 248;
                                        func1351.definitionModule = "StandardPrelude";
                                        var func1354 = function(argcv) {    // method asString
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          setModuleName("StandardPrelude");
                                          setLineNumber(251);    // compilenode string
                                          var string1355 = new GraceString(")");
                                          var string1358 = new GraceString(" | ");
                                          var string1361 = new GraceString("(");
                                          var opresult1363 = callmethodChecked(string1361, "++(1)", [1], var_t1);
                                          var opresult1365 = callmethodChecked(opresult1363, "++(1)", [1], string1358);
                                          var opresult1367 = callmethodChecked(opresult1365, "++(1)", [1], var_t2);
                                          var opresult1369 = callmethodChecked(opresult1367, "++(1)", [1], string1355);
                                          return opresult1369;
                                        };
                                        func1354.paramCounts = [0];
                                        obj1337.methods["asString"] = func1354;
                                        func1354.definitionLine = 251;
                                        func1354.definitionModule = "StandardPrelude";
                                        setLineNumber(234);    // compilenode identifier
                                        // call case 6: other requests
                                        var call1371 = callmethodChecked(var_OrPattern, "new(2)$object(1)", [2, 1], var_t1, var_t2, this);
                                        obj1337.superobj = call1371;
                                        if (call1371.data) obj1337.data = call1371.data;
                                        if (call1371.hasOwnProperty('_value'))
                                            obj1337._value = call1371._value;
                                        superDepth = origSuperDepth;
                                      };
                                      obj_init_1337.apply(obj1337, []);
                                      return obj1337;
                                    };
                                    func1336.paramCounts = [2];
                                    obj1334.methods["new(2)"] = func1336;
                                    func1336.definitionLine = 233;
                                    func1336.definitionModule = "StandardPrelude";
                                      var func1372 = function(argcv) {    // method new(_,_)$object(_)
                                        var curarg = 1;
                                        var var_t1 = arguments[curarg];
                                        curarg++;
                                        var var_t2 = arguments[curarg];
                                        curarg++;
                                        var inheritingObject = arguments[curarg++];
                                        // Start argument processing
                                        curarg = 1;
                                        curarg++;
                                        curarg++;
                                        // End argument processing
                                        setModuleName("StandardPrelude");
                                        var returnTarget = invocationCount;
                                        invocationCount++;
                                        var obj1373 = Grace_allocObject(null, "new(2)");
                                        obj1373.definitionModule = "StandardPrelude";
                                        obj1373.definitionLine = 233;
                                        var inho1373 = inheritingObject;
                                        while (inho1373.superobj) inho1373 = inho1373.superobj;
                                        inho1373.superobj = obj1373;
                                        obj1373.data = inheritingObject.data;
                                        if (inheritingObject.hasOwnProperty('_value'))
                                          obj1373._value = inheritingObject._value;
                                        obj1373.outer = this;
                                        var reader_StandardPrelude_outer1374 = function() {
                                          return this.outer;
                                        };
                                        obj1373.methods["outer"] = reader_StandardPrelude_outer1374;
                                        var obj_init_1373 = function() {
                                          var origSuperDepth = superDepth;
                                          superDepth = obj1373;
                                          var func1375 = function(argcv) {    // method &(_)
                                            var returnTarget = invocationCount;
                                            invocationCount++;
                                            var curarg = 1;
                                            var var_o = arguments[curarg];
                                            curarg++;
                                            setModuleName("StandardPrelude");
                                            setLineNumber(237);    // compilenode identifier
                                            // call case 6: other requests
                                            var call1377 = callmethodChecked(var_TypeIntersection, "new(2)", [2], this, var_o);
                                            return call1377;
                                          };
                                          func1375.paramCounts = [1];
                                          obj1373.methods["&(1)"] = func1375;
                                          func1375.definitionLine = 236;
                                          func1375.definitionModule = "StandardPrelude";
                                          var func1378 = function(argcv) {    // method |(_)
                                            var returnTarget = invocationCount;
                                            invocationCount++;
                                            var curarg = 1;
                                            var var_o = arguments[curarg];
                                            curarg++;
                                            setModuleName("StandardPrelude");
                                            setLineNumber(240);    // compilenode identifier
                                            // call case 6: other requests
                                            var call1380 = callmethodChecked(var_TypeVariant, "new(2)", [2], this, var_o);
                                            return call1380;
                                          };
                                          func1378.paramCounts = [1];
                                          obj1373.methods["|(1)"] = func1378;
                                          func1378.definitionLine = 239;
                                          func1378.definitionModule = "StandardPrelude";
                                          var func1381 = function(argcv) {    // method +(_)
                                            var returnTarget = invocationCount;
                                            invocationCount++;
                                            var curarg = 1;
                                            var var_o = arguments[curarg];
                                            curarg++;
                                            setModuleName("StandardPrelude");
                                            setLineNumber(243);    // compilenode identifier
                                            // call case 6: other requests
                                            var call1383 = callmethodChecked(var_TypeUnion, "new(2)", [2], this, var_o);
                                            return call1383;
                                          };
                                          func1381.paramCounts = [1];
                                          obj1373.methods["+(1)"] = func1381;
                                          func1381.definitionLine = 242;
                                          func1381.definitionModule = "StandardPrelude";
                                          var func1384 = function(argcv) {    // method -(_)
                                            var returnTarget = invocationCount;
                                            invocationCount++;
                                            var curarg = 1;
                                            var var_o = arguments[curarg];
                                            curarg++;
                                            setModuleName("StandardPrelude");
                                            setLineNumber(246);    // compilenode identifier
                                            // call case 6: other requests
                                            var call1386 = callmethodChecked(var_TypeSubtraction, "new(2)", [2], this, var_o);
                                            return call1386;
                                          };
                                          func1384.paramCounts = [1];
                                          obj1373.methods["-(1)"] = func1384;
                                          func1384.definitionLine = 245;
                                          func1384.definitionModule = "StandardPrelude";
                                          var func1387 = function(argcv) {    // method methodNames
                                            var returnTarget = invocationCount;
                                            invocationCount++;
                                            var curarg = 1;
                                            setModuleName("StandardPrelude");
                                            setLineNumber(249);    // compilenode member
                                            // call case 4: self request
                                            onSelf = true;
                                            var call1389 = callmethodChecked(this, "TypeVariantsCannotBeCharacterizedByASetOfMethods", []);
                                            return call1389;
                                          };
                                          func1387.paramCounts = [0];
                                          obj1373.methods["methodNames"] = func1387;
                                          func1387.definitionLine = 248;
                                          func1387.definitionModule = "StandardPrelude";
                                          var func1390 = function(argcv) {    // method asString
                                            var returnTarget = invocationCount;
                                            invocationCount++;
                                            var curarg = 1;
                                            setModuleName("StandardPrelude");
                                            setLineNumber(251);    // compilenode string
                                            var string1391 = new GraceString(")");
                                            var string1394 = new GraceString(" | ");
                                            var string1397 = new GraceString("(");
                                            var opresult1399 = callmethodChecked(string1397, "++(1)", [1], var_t1);
                                            var opresult1401 = callmethodChecked(opresult1399, "++(1)", [1], string1394);
                                            var opresult1403 = callmethodChecked(opresult1401, "++(1)", [1], var_t2);
                                            var opresult1405 = callmethodChecked(opresult1403, "++(1)", [1], string1391);
                                            return opresult1405;
                                          };
                                          func1390.paramCounts = [0];
                                          obj1373.methods["asString"] = func1390;
                                          func1390.definitionLine = 251;
                                          func1390.definitionModule = "StandardPrelude";
                                          setLineNumber(234);    // compilenode identifier
                                          // call case 6: other requests
                                          var call1407 = callmethodChecked(var_OrPattern, "new(2)$object(1)", [2, 1], var_t1, var_t2, this);
                                          obj1373.superobj = call1407;
                                          if (call1407.data) obj1373.data = call1407.data;
                                          if (call1407.hasOwnProperty('_value'))
                                              obj1373._value = call1407._value;
                                          superDepth = origSuperDepth;
                                        };
                                        obj_init_1373.apply(inheritingObject, []);
                                        return obj1373;
                                        };
                                        obj1334.methods["new(2)$object(1)"] = func1372;
                                      var func1408 = function(argcv) {    // method asString
                                        var returnTarget = invocationCount;
                                        invocationCount++;
                                        var curarg = 1;
                                        setModuleName("StandardPrelude");
                                        setLineNumber(233);    // compilenode string
                                        var string1409 = new GraceString("class TypeVariant");
                                        return string1409;
                                      };
                                      func1408.paramCounts = [0];
                                      obj1334.methods["asString"] = func1408;
                                      func1408.definitionLine = 233;
                                      func1408.definitionModule = "StandardPrelude";
                                      superDepth = origSuperDepth;
                                    };
                                    obj_init_1334.apply(obj1334, []);
                                    var var_TypeVariant = obj1334;
                                    setLineNumber(1);    // compilenode method
                                    var func1410 = function(argcv) {    // method TypeVariant
                                      var returnTarget = invocationCount;
                                      invocationCount++;
                                      var curarg = 1;
                                      setModuleName("StandardPrelude");
                                      // TypeVariant is a simple accessor - elide try ... catch
                                      setLineNumber(233);    // compilenode identifier
                                      return var_TypeVariant;
                                    };
                                    func1410.paramCounts = [0];
                                    this.methods["TypeVariant"] = func1410;
                                    func1410.definitionLine = 1;
                                    func1410.definitionModule = "StandardPrelude";
                                    this.methods["TypeVariant"].debug = "def";
                                    setLineNumber(254);    // compilenode object
                                    var obj1411 = Grace_allocObject(GraceObject, "TypeUnion");
                                    obj1411.definitionModule = "StandardPrelude";
                                    obj1411.definitionLine = 254;
                                    obj1411.outer = this;
                                    var reader_StandardPrelude_outer1412 = function() {
                                      return this.outer;
                                    };
                                    obj1411.methods["outer"] = reader_StandardPrelude_outer1412;
                                    var obj_init_1411 = function() {
                                      var origSuperDepth = superDepth;
                                      superDepth = obj1411;
                                      var func1413 = function(argcv) {    // method new(_,_)
                                        var returnTarget = invocationCount;
                                        invocationCount++;
                                        var curarg = 1;
                                        var var_t1 = arguments[curarg];
                                        curarg++;
                                        var var_t2 = arguments[curarg];
                                        curarg++;
                                        setModuleName("StandardPrelude");
                                        var obj1414 = Grace_allocObject(null, "TypeUnion.TypeUnion.new(_,_)");
                                        obj1414.definitionModule = "StandardPrelude";
                                        obj1414.definitionLine = 254;
                                        obj1414.outer = this;
                                        var reader_StandardPrelude_outer1415 = function() {
                                          return this.outer;
                                        };
                                        obj1414.methods["outer"] = reader_StandardPrelude_outer1415;
                                        var obj_init_1414 = function() {
                                          var origSuperDepth = superDepth;
                                          superDepth = obj1414;
                                          var func1416 = function(argcv) {    // method &(_)
                                            var returnTarget = invocationCount;
                                            invocationCount++;
                                            var curarg = 1;
                                            var var_o = arguments[curarg];
                                            curarg++;
                                            setModuleName("StandardPrelude");
                                            setLineNumber(258);    // compilenode identifier
                                            // call case 6: other requests
                                            var call1418 = callmethodChecked(var_TypeIntersection, "new(2)", [2], this, var_o);
                                            return call1418;
                                          };
                                          func1416.paramCounts = [1];
                                          obj1414.methods["&(1)"] = func1416;
                                          func1416.definitionLine = 257;
                                          func1416.definitionModule = "StandardPrelude";
                                          var func1419 = function(argcv) {    // method |(_)
                                            var returnTarget = invocationCount;
                                            invocationCount++;
                                            var curarg = 1;
                                            var var_o = arguments[curarg];
                                            curarg++;
                                            setModuleName("StandardPrelude");
                                            setLineNumber(261);    // compilenode identifier
                                            // call case 6: other requests
                                            var call1421 = callmethodChecked(var_TypeVariant, "new(2)", [2], this, var_o);
                                            return call1421;
                                          };
                                          func1419.paramCounts = [1];
                                          obj1414.methods["|(1)"] = func1419;
                                          func1419.definitionLine = 260;
                                          func1419.definitionModule = "StandardPrelude";
                                          var func1422 = function(argcv) {    // method +(_)
                                            var returnTarget = invocationCount;
                                            invocationCount++;
                                            var curarg = 1;
                                            var var_o = arguments[curarg];
                                            curarg++;
                                            setModuleName("StandardPrelude");
                                            setLineNumber(264);    // compilenode identifier
                                            // call case 6: other requests
                                            var call1424 = callmethodChecked(var_TypeUnion, "new(2)", [2], this, var_o);
                                            return call1424;
                                          };
                                          func1422.paramCounts = [1];
                                          obj1414.methods["+(1)"] = func1422;
                                          func1422.definitionLine = 263;
                                          func1422.definitionModule = "StandardPrelude";
                                          var func1425 = function(argcv) {    // method -(_)
                                            var returnTarget = invocationCount;
                                            invocationCount++;
                                            var curarg = 1;
                                            var var_o = arguments[curarg];
                                            curarg++;
                                            setModuleName("StandardPrelude");
                                            setLineNumber(267);    // compilenode identifier
                                            // call case 6: other requests
                                            var call1427 = callmethodChecked(var_TypeSubtraction, "new(2)", [2], this, var_o);
                                            return call1427;
                                          };
                                          func1425.paramCounts = [1];
                                          obj1414.methods["-(1)"] = func1425;
                                          func1425.definitionLine = 266;
                                          func1425.definitionModule = "StandardPrelude";
                                          var func1428 = function(argcv) {    // method methodNames
                                            var returnTarget = invocationCount;
                                            invocationCount++;
                                            var curarg = 1;
                                            setModuleName("StandardPrelude");
                                            setLineNumber(270);    // compilenode member
                                            // call case 6: other requests
                                            var call1430 = callmethodChecked(var_t2, "methodNames", []);
                                            // call case 6: other requests
                                            var call1433 = callmethodChecked(var_t1, "methodNames", []);
                                            var opresult1435 = callmethodChecked(call1433, "**(1)", [1], call1430);
                                            return opresult1435;
                                          };
                                          func1428.paramCounts = [0];
                                          obj1414.methods["methodNames"] = func1428;
                                          func1428.definitionLine = 269;
                                          func1428.definitionModule = "StandardPrelude";
                                          var func1436 = function(argcv) {    // method match(_)
                                            var returnTarget = invocationCount;
                                            invocationCount++;
                                            var curarg = 1;
                                            var var_o = arguments[curarg];
                                            curarg++;
                                            setModuleName("StandardPrelude");
                                            setLineNumber(273);    // compilenode string
                                            var string1438 = new GraceString("matching against a TypeUnion not yet implemented");
                                            // call case 6: other requests
                                            // call case 5: prelude request
                                            var call1440 = callmethodChecked(var_prelude, "ResourceException", []);
                                            var call1441 = callmethodChecked(call1440, "raise(1)", [1], string1438);
                                            setLineNumber(276);    // compilenode identifier
                                            var var_mirror = ellipsis;
                                            setLineNumber(277);    // compilenode member
                                            // call case 6: other requests
                                            // call case 6: other requests
                                            var call1444 = callmethodChecked(var_mirror, "reflect(1)", [1], var_o);
                                            var call1445 = callmethodChecked(call1444, "methodNames", []);
                                            var var_oMethodNames = call1445;
                                            setLineNumber(278);    // compilenode member
                                            // call case 4: self request
                                            onSelf = true;
                                            var call1448 = callmethodChecked(this, "methodNames", []);
                                            var block1449 = new GraceBlock(this, 278, 1);
                                            setLineNumber(1);    // compilenode identifier
                                            block1449.real = function(var_each) {
                                              var if1450 = GraceDone;
                                              setLineNumber(279);    // compilenode call
                                              // call case 6: other requests
                                              // call case 6: other requests
                                              var call1453 = callmethodChecked(var_oMethodNames, "contains(1)", [1], var_each);
                                              var call1454 = callmethodChecked(call1453, "prefix!", [0]);
                                              if (Grace_isTrue(call1454)) {
                                                setLineNumber(280);    // compilenode identifier
                                                // call case 6: other requests
                                                var call1456 = callmethodChecked(var_FailedMatch, "new(1)", [1], var_o);
                                                throw new ReturnException(call1456, returnTarget);
                                              }
                                              return if1450;
                                            };
                                            // call case 5: prelude request
                                            var call1457 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1448, block1449);
                                            setLineNumber(283);    // compilenode array
                                            var array1459 = new PrimitiveGraceList([]);
                                            // call case 6: other requests
                                            var call1460 = callmethodChecked(var_SuccessfulMatch, "new(2)", [2], var_o, array1459);
                                            return call1460;
                                          };
                                          func1436.paramCounts = [1];
                                          obj1414.methods["match(1)"] = func1436;
                                          func1436.definitionLine = 272;
                                          func1436.definitionModule = "StandardPrelude";
                                          var func1461 = function(argcv) {    // method asString
                                            var returnTarget = invocationCount;
                                            invocationCount++;
                                            var curarg = 1;
                                            setModuleName("StandardPrelude");
                                            setLineNumber(285);    // compilenode string
                                            var string1462 = new GraceString(")");
                                            var string1465 = new GraceString(" + ");
                                            var string1468 = new GraceString("(");
                                            var opresult1470 = callmethodChecked(string1468, "++(1)", [1], var_t1);
                                            var opresult1472 = callmethodChecked(opresult1470, "++(1)", [1], string1465);
                                            var opresult1474 = callmethodChecked(opresult1472, "++(1)", [1], var_t2);
                                            var opresult1476 = callmethodChecked(opresult1474, "++(1)", [1], string1462);
                                            return opresult1476;
                                          };
                                          func1461.paramCounts = [0];
                                          obj1414.methods["asString"] = func1461;
                                          func1461.definitionLine = 285;
                                          func1461.definitionModule = "StandardPrelude";
                                          setLineNumber(255);    // compilenode identifier
                                          // call case 6: other requests
                                          var call1478 = callmethodChecked(var_BasicPattern, "new$object(1)", [0, 1], this);
                                          obj1414.superobj = call1478;
                                          if (call1478.data) obj1414.data = call1478.data;
                                          if (call1478.hasOwnProperty('_value'))
                                              obj1414._value = call1478._value;
                                          superDepth = origSuperDepth;
                                        };
                                        obj_init_1414.apply(obj1414, []);
                                        return obj1414;
                                      };
                                      func1413.paramCounts = [2];
                                      obj1411.methods["new(2)"] = func1413;
                                      func1413.definitionLine = 254;
                                      func1413.definitionModule = "StandardPrelude";
                                        var func1479 = function(argcv) {    // method new(_,_)$object(_)
                                          var curarg = 1;
                                          var var_t1 = arguments[curarg];
                                          curarg++;
                                          var var_t2 = arguments[curarg];
                                          curarg++;
                                          var inheritingObject = arguments[curarg++];
                                          // Start argument processing
                                          curarg = 1;
                                          curarg++;
                                          curarg++;
                                          // End argument processing
                                          setModuleName("StandardPrelude");
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var obj1480 = Grace_allocObject(null, "new(2)");
                                          obj1480.definitionModule = "StandardPrelude";
                                          obj1480.definitionLine = 254;
                                          var inho1480 = inheritingObject;
                                          while (inho1480.superobj) inho1480 = inho1480.superobj;
                                          inho1480.superobj = obj1480;
                                          obj1480.data = inheritingObject.data;
                                          if (inheritingObject.hasOwnProperty('_value'))
                                            obj1480._value = inheritingObject._value;
                                          obj1480.outer = this;
                                          var reader_StandardPrelude_outer1481 = function() {
                                            return this.outer;
                                          };
                                          obj1480.methods["outer"] = reader_StandardPrelude_outer1481;
                                          var obj_init_1480 = function() {
                                            var origSuperDepth = superDepth;
                                            superDepth = obj1480;
                                            var func1482 = function(argcv) {    // method &(_)
                                              var returnTarget = invocationCount;
                                              invocationCount++;
                                              var curarg = 1;
                                              var var_o = arguments[curarg];
                                              curarg++;
                                              setModuleName("StandardPrelude");
                                              setLineNumber(258);    // compilenode identifier
                                              // call case 6: other requests
                                              var call1484 = callmethodChecked(var_TypeIntersection, "new(2)", [2], this, var_o);
                                              return call1484;
                                            };
                                            func1482.paramCounts = [1];
                                            obj1480.methods["&(1)"] = func1482;
                                            func1482.definitionLine = 257;
                                            func1482.definitionModule = "StandardPrelude";
                                            var func1485 = function(argcv) {    // method |(_)
                                              var returnTarget = invocationCount;
                                              invocationCount++;
                                              var curarg = 1;
                                              var var_o = arguments[curarg];
                                              curarg++;
                                              setModuleName("StandardPrelude");
                                              setLineNumber(261);    // compilenode identifier
                                              // call case 6: other requests
                                              var call1487 = callmethodChecked(var_TypeVariant, "new(2)", [2], this, var_o);
                                              return call1487;
                                            };
                                            func1485.paramCounts = [1];
                                            obj1480.methods["|(1)"] = func1485;
                                            func1485.definitionLine = 260;
                                            func1485.definitionModule = "StandardPrelude";
                                            var func1488 = function(argcv) {    // method +(_)
                                              var returnTarget = invocationCount;
                                              invocationCount++;
                                              var curarg = 1;
                                              var var_o = arguments[curarg];
                                              curarg++;
                                              setModuleName("StandardPrelude");
                                              setLineNumber(264);    // compilenode identifier
                                              // call case 6: other requests
                                              var call1490 = callmethodChecked(var_TypeUnion, "new(2)", [2], this, var_o);
                                              return call1490;
                                            };
                                            func1488.paramCounts = [1];
                                            obj1480.methods["+(1)"] = func1488;
                                            func1488.definitionLine = 263;
                                            func1488.definitionModule = "StandardPrelude";
                                            var func1491 = function(argcv) {    // method -(_)
                                              var returnTarget = invocationCount;
                                              invocationCount++;
                                              var curarg = 1;
                                              var var_o = arguments[curarg];
                                              curarg++;
                                              setModuleName("StandardPrelude");
                                              setLineNumber(267);    // compilenode identifier
                                              // call case 6: other requests
                                              var call1493 = callmethodChecked(var_TypeSubtraction, "new(2)", [2], this, var_o);
                                              return call1493;
                                            };
                                            func1491.paramCounts = [1];
                                            obj1480.methods["-(1)"] = func1491;
                                            func1491.definitionLine = 266;
                                            func1491.definitionModule = "StandardPrelude";
                                            var func1494 = function(argcv) {    // method methodNames
                                              var returnTarget = invocationCount;
                                              invocationCount++;
                                              var curarg = 1;
                                              setModuleName("StandardPrelude");
                                              setLineNumber(270);    // compilenode member
                                              // call case 6: other requests
                                              var call1496 = callmethodChecked(var_t2, "methodNames", []);
                                              // call case 6: other requests
                                              var call1499 = callmethodChecked(var_t1, "methodNames", []);
                                              var opresult1501 = callmethodChecked(call1499, "**(1)", [1], call1496);
                                              return opresult1501;
                                            };
                                            func1494.paramCounts = [0];
                                            obj1480.methods["methodNames"] = func1494;
                                            func1494.definitionLine = 269;
                                            func1494.definitionModule = "StandardPrelude";
                                            var func1502 = function(argcv) {    // method match(_)
                                              var returnTarget = invocationCount;
                                              invocationCount++;
                                              var curarg = 1;
                                              var var_o = arguments[curarg];
                                              curarg++;
                                              setModuleName("StandardPrelude");
                                              setLineNumber(273);    // compilenode string
                                              var string1504 = new GraceString("matching against a TypeUnion not yet implemented");
                                              // call case 6: other requests
                                              // call case 5: prelude request
                                              var call1506 = callmethodChecked(var_prelude, "ResourceException", []);
                                              var call1507 = callmethodChecked(call1506, "raise(1)", [1], string1504);
                                              setLineNumber(276);    // compilenode identifier
                                              var var_mirror = ellipsis;
                                              setLineNumber(277);    // compilenode member
                                              // call case 6: other requests
                                              // call case 6: other requests
                                              var call1510 = callmethodChecked(var_mirror, "reflect(1)", [1], var_o);
                                              var call1511 = callmethodChecked(call1510, "methodNames", []);
                                              var var_oMethodNames = call1511;
                                              setLineNumber(278);    // compilenode member
                                              // call case 4: self request
                                              onSelf = true;
                                              var call1514 = callmethodChecked(this, "methodNames", []);
                                              var block1515 = new GraceBlock(this, 278, 1);
                                              setLineNumber(1);    // compilenode identifier
                                              block1515.real = function(var_each) {
                                                var if1516 = GraceDone;
                                                setLineNumber(279);    // compilenode call
                                                // call case 6: other requests
                                                // call case 6: other requests
                                                var call1519 = callmethodChecked(var_oMethodNames, "contains(1)", [1], var_each);
                                                var call1520 = callmethodChecked(call1519, "prefix!", [0]);
                                                if (Grace_isTrue(call1520)) {
                                                  setLineNumber(280);    // compilenode identifier
                                                  // call case 6: other requests
                                                  var call1522 = callmethodChecked(var_FailedMatch, "new(1)", [1], var_o);
                                                  throw new ReturnException(call1522, returnTarget);
                                                }
                                                return if1516;
                                              };
                                              // call case 5: prelude request
                                              var call1523 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1514, block1515);
                                              setLineNumber(283);    // compilenode array
                                              var array1525 = new PrimitiveGraceList([]);
                                              // call case 6: other requests
                                              var call1526 = callmethodChecked(var_SuccessfulMatch, "new(2)", [2], var_o, array1525);
                                              return call1526;
                                            };
                                            func1502.paramCounts = [1];
                                            obj1480.methods["match(1)"] = func1502;
                                            func1502.definitionLine = 272;
                                            func1502.definitionModule = "StandardPrelude";
                                            var func1527 = function(argcv) {    // method asString
                                              var returnTarget = invocationCount;
                                              invocationCount++;
                                              var curarg = 1;
                                              setModuleName("StandardPrelude");
                                              setLineNumber(285);    // compilenode string
                                              var string1528 = new GraceString(")");
                                              var string1531 = new GraceString(" + ");
                                              var string1534 = new GraceString("(");
                                              var opresult1536 = callmethodChecked(string1534, "++(1)", [1], var_t1);
                                              var opresult1538 = callmethodChecked(opresult1536, "++(1)", [1], string1531);
                                              var opresult1540 = callmethodChecked(opresult1538, "++(1)", [1], var_t2);
                                              var opresult1542 = callmethodChecked(opresult1540, "++(1)", [1], string1528);
                                              return opresult1542;
                                            };
                                            func1527.paramCounts = [0];
                                            obj1480.methods["asString"] = func1527;
                                            func1527.definitionLine = 285;
                                            func1527.definitionModule = "StandardPrelude";
                                            setLineNumber(255);    // compilenode identifier
                                            // call case 6: other requests
                                            var call1544 = callmethodChecked(var_BasicPattern, "new$object(1)", [0, 1], this);
                                            obj1480.superobj = call1544;
                                            if (call1544.data) obj1480.data = call1544.data;
                                            if (call1544.hasOwnProperty('_value'))
                                                obj1480._value = call1544._value;
                                            superDepth = origSuperDepth;
                                          };
                                          obj_init_1480.apply(inheritingObject, []);
                                          return obj1480;
                                          };
                                          obj1411.methods["new(2)$object(1)"] = func1479;
                                        var func1545 = function(argcv) {    // method asString
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          setModuleName("StandardPrelude");
                                          setLineNumber(254);    // compilenode string
                                          var string1546 = new GraceString("class TypeUnion");
                                          return string1546;
                                        };
                                        func1545.paramCounts = [0];
                                        obj1411.methods["asString"] = func1545;
                                        func1545.definitionLine = 254;
                                        func1545.definitionModule = "StandardPrelude";
                                        superDepth = origSuperDepth;
                                      };
                                      obj_init_1411.apply(obj1411, []);
                                      var var_TypeUnion = obj1411;
                                      setLineNumber(1);    // compilenode method
                                      var func1547 = function(argcv) {    // method TypeUnion
                                        var returnTarget = invocationCount;
                                        invocationCount++;
                                        var curarg = 1;
                                        setModuleName("StandardPrelude");
                                        // TypeUnion is a simple accessor - elide try ... catch
                                        setLineNumber(254);    // compilenode identifier
                                        return var_TypeUnion;
                                      };
                                      func1547.paramCounts = [0];
                                      this.methods["TypeUnion"] = func1547;
                                      func1547.definitionLine = 1;
                                      func1547.definitionModule = "StandardPrelude";
                                      this.methods["TypeUnion"].debug = "def";
                                      setLineNumber(288);    // compilenode object
                                      var obj1548 = Grace_allocObject(GraceObject, "TypeSubtraction");
                                      obj1548.definitionModule = "StandardPrelude";
                                      obj1548.definitionLine = 288;
                                      obj1548.outer = this;
                                      var reader_StandardPrelude_outer1549 = function() {
                                        return this.outer;
                                      };
                                      obj1548.methods["outer"] = reader_StandardPrelude_outer1549;
                                      var obj_init_1548 = function() {
                                        var origSuperDepth = superDepth;
                                        superDepth = obj1548;
                                        var func1550 = function(argcv) {    // method new(_,_)
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          var var_t1 = arguments[curarg];
                                          curarg++;
                                          var var_t2 = arguments[curarg];
                                          curarg++;
                                          setModuleName("StandardPrelude");
                                          var obj1551 = Grace_allocObject(null, "TypeSubtraction.TypeSubtraction.new(_,_)");
                                          obj1551.definitionModule = "StandardPrelude";
                                          obj1551.definitionLine = 288;
                                          obj1551.outer = this;
                                          var reader_StandardPrelude_outer1552 = function() {
                                            return this.outer;
                                          };
                                          obj1551.methods["outer"] = reader_StandardPrelude_outer1552;
                                          var obj_init_1551 = function() {
                                            var origSuperDepth = superDepth;
                                            superDepth = obj1551;
                                            var func1553 = function(argcv) {    // method &(_)
                                              var returnTarget = invocationCount;
                                              invocationCount++;
                                              var curarg = 1;
                                              var var_o = arguments[curarg];
                                              curarg++;
                                              setModuleName("StandardPrelude");
                                              setLineNumber(291);    // compilenode identifier
                                              // call case 6: other requests
                                              var call1555 = callmethodChecked(var_TypeIntersection, "new(2)", [2], this, var_o);
                                              return call1555;
                                            };
                                            func1553.paramCounts = [1];
                                            obj1551.methods["&(1)"] = func1553;
                                            func1553.definitionLine = 290;
                                            func1553.definitionModule = "StandardPrelude";
                                            var func1556 = function(argcv) {    // method |(_)
                                              var returnTarget = invocationCount;
                                              invocationCount++;
                                              var curarg = 1;
                                              var var_o = arguments[curarg];
                                              curarg++;
                                              setModuleName("StandardPrelude");
                                              setLineNumber(294);    // compilenode identifier
                                              // call case 6: other requests
                                              var call1558 = callmethodChecked(var_TypeVariant, "new(2)", [2], this, var_o);
                                              return call1558;
                                            };
                                            func1556.paramCounts = [1];
                                            obj1551.methods["|(1)"] = func1556;
                                            func1556.definitionLine = 293;
                                            func1556.definitionModule = "StandardPrelude";
                                            var func1559 = function(argcv) {    // method +(_)
                                              var returnTarget = invocationCount;
                                              invocationCount++;
                                              var curarg = 1;
                                              var var_o = arguments[curarg];
                                              curarg++;
                                              setModuleName("StandardPrelude");
                                              setLineNumber(297);    // compilenode identifier
                                              // call case 6: other requests
                                              var call1561 = callmethodChecked(var_TypeUnion, "new(2)", [2], this, var_o);
                                              return call1561;
                                            };
                                            func1559.paramCounts = [1];
                                            obj1551.methods["+(1)"] = func1559;
                                            func1559.definitionLine = 296;
                                            func1559.definitionModule = "StandardPrelude";
                                            var func1562 = function(argcv) {    // method -(_)
                                              var returnTarget = invocationCount;
                                              invocationCount++;
                                              var curarg = 1;
                                              var var_o = arguments[curarg];
                                              curarg++;
                                              setModuleName("StandardPrelude");
                                              setLineNumber(300);    // compilenode identifier
                                              // call case 6: other requests
                                              var call1564 = callmethodChecked(var_TypeSubtraction, "new(2)", [2], this, var_o);
                                              return call1564;
                                            };
                                            func1562.paramCounts = [1];
                                            obj1551.methods["-(1)"] = func1562;
                                            func1562.definitionLine = 299;
                                            func1562.definitionModule = "StandardPrelude";
                                            var func1565 = function(argcv) {    // method methodNames
                                              var returnTarget = invocationCount;
                                              invocationCount++;
                                              var curarg = 1;
                                              setModuleName("StandardPrelude");
                                              setLineNumber(303);    // compilenode member
                                              // call case 6: other requests
                                              var call1568 = callmethodChecked(var_t2, "methodNames", []);
                                              // call case 6: other requests
                                              // call case 6: other requests
                                              var call1570 = callmethodChecked(var_t1, "methodNames", []);
                                              var call1571 = callmethodChecked(call1570, "removeAll(1)", [1], call1568);
                                              return call1571;
                                            };
                                            func1565.paramCounts = [0];
                                            obj1551.methods["methodNames"] = func1565;
                                            func1565.definitionLine = 302;
                                            func1565.definitionModule = "StandardPrelude";
                                            var func1572 = function(argcv) {    // method asString
                                              var returnTarget = invocationCount;
                                              invocationCount++;
                                              var curarg = 1;
                                              setModuleName("StandardPrelude");
                                              setLineNumber(305);    // compilenode string
                                              var string1573 = new GraceString(")");
                                              var string1576 = new GraceString(" - ");
                                              var string1579 = new GraceString("(");
                                              var opresult1581 = callmethodChecked(string1579, "++(1)", [1], var_t1);
                                              var opresult1583 = callmethodChecked(opresult1581, "++(1)", [1], string1576);
                                              var opresult1585 = callmethodChecked(opresult1583, "++(1)", [1], var_t2);
                                              var opresult1587 = callmethodChecked(opresult1585, "++(1)", [1], string1573);
                                              return opresult1587;
                                            };
                                            func1572.paramCounts = [0];
                                            obj1551.methods["asString"] = func1572;
                                            func1572.definitionLine = 305;
                                            func1572.definitionModule = "StandardPrelude";
                                            setLineNumber(289);    // compilenode identifier
                                            // call case 6: other requests
                                            var call1589 = callmethodChecked(var_BasicPattern, "new$object(1)", [0, 1], this);
                                            obj1551.superobj = call1589;
                                            if (call1589.data) obj1551.data = call1589.data;
                                            if (call1589.hasOwnProperty('_value'))
                                                obj1551._value = call1589._value;
                                            superDepth = origSuperDepth;
                                          };
                                          obj_init_1551.apply(obj1551, []);
                                          return obj1551;
                                        };
                                        func1550.paramCounts = [2];
                                        obj1548.methods["new(2)"] = func1550;
                                        func1550.definitionLine = 288;
                                        func1550.definitionModule = "StandardPrelude";
                                          var func1590 = function(argcv) {    // method new(_,_)$object(_)
                                            var curarg = 1;
                                            var var_t1 = arguments[curarg];
                                            curarg++;
                                            var var_t2 = arguments[curarg];
                                            curarg++;
                                            var inheritingObject = arguments[curarg++];
                                            // Start argument processing
                                            curarg = 1;
                                            curarg++;
                                            curarg++;
                                            // End argument processing
                                            setModuleName("StandardPrelude");
                                            var returnTarget = invocationCount;
                                            invocationCount++;
                                            var obj1591 = Grace_allocObject(null, "new(2)");
                                            obj1591.definitionModule = "StandardPrelude";
                                            obj1591.definitionLine = 288;
                                            var inho1591 = inheritingObject;
                                            while (inho1591.superobj) inho1591 = inho1591.superobj;
                                            inho1591.superobj = obj1591;
                                            obj1591.data = inheritingObject.data;
                                            if (inheritingObject.hasOwnProperty('_value'))
                                              obj1591._value = inheritingObject._value;
                                            obj1591.outer = this;
                                            var reader_StandardPrelude_outer1592 = function() {
                                              return this.outer;
                                            };
                                            obj1591.methods["outer"] = reader_StandardPrelude_outer1592;
                                            var obj_init_1591 = function() {
                                              var origSuperDepth = superDepth;
                                              superDepth = obj1591;
                                              var func1593 = function(argcv) {    // method &(_)
                                                var returnTarget = invocationCount;
                                                invocationCount++;
                                                var curarg = 1;
                                                var var_o = arguments[curarg];
                                                curarg++;
                                                setModuleName("StandardPrelude");
                                                setLineNumber(291);    // compilenode identifier
                                                // call case 6: other requests
                                                var call1595 = callmethodChecked(var_TypeIntersection, "new(2)", [2], this, var_o);
                                                return call1595;
                                              };
                                              func1593.paramCounts = [1];
                                              obj1591.methods["&(1)"] = func1593;
                                              func1593.definitionLine = 290;
                                              func1593.definitionModule = "StandardPrelude";
                                              var func1596 = function(argcv) {    // method |(_)
                                                var returnTarget = invocationCount;
                                                invocationCount++;
                                                var curarg = 1;
                                                var var_o = arguments[curarg];
                                                curarg++;
                                                setModuleName("StandardPrelude");
                                                setLineNumber(294);    // compilenode identifier
                                                // call case 6: other requests
                                                var call1598 = callmethodChecked(var_TypeVariant, "new(2)", [2], this, var_o);
                                                return call1598;
                                              };
                                              func1596.paramCounts = [1];
                                              obj1591.methods["|(1)"] = func1596;
                                              func1596.definitionLine = 293;
                                              func1596.definitionModule = "StandardPrelude";
                                              var func1599 = function(argcv) {    // method +(_)
                                                var returnTarget = invocationCount;
                                                invocationCount++;
                                                var curarg = 1;
                                                var var_o = arguments[curarg];
                                                curarg++;
                                                setModuleName("StandardPrelude");
                                                setLineNumber(297);    // compilenode identifier
                                                // call case 6: other requests
                                                var call1601 = callmethodChecked(var_TypeUnion, "new(2)", [2], this, var_o);
                                                return call1601;
                                              };
                                              func1599.paramCounts = [1];
                                              obj1591.methods["+(1)"] = func1599;
                                              func1599.definitionLine = 296;
                                              func1599.definitionModule = "StandardPrelude";
                                              var func1602 = function(argcv) {    // method -(_)
                                                var returnTarget = invocationCount;
                                                invocationCount++;
                                                var curarg = 1;
                                                var var_o = arguments[curarg];
                                                curarg++;
                                                setModuleName("StandardPrelude");
                                                setLineNumber(300);    // compilenode identifier
                                                // call case 6: other requests
                                                var call1604 = callmethodChecked(var_TypeSubtraction, "new(2)", [2], this, var_o);
                                                return call1604;
                                              };
                                              func1602.paramCounts = [1];
                                              obj1591.methods["-(1)"] = func1602;
                                              func1602.definitionLine = 299;
                                              func1602.definitionModule = "StandardPrelude";
                                              var func1605 = function(argcv) {    // method methodNames
                                                var returnTarget = invocationCount;
                                                invocationCount++;
                                                var curarg = 1;
                                                setModuleName("StandardPrelude");
                                                setLineNumber(303);    // compilenode member
                                                // call case 6: other requests
                                                var call1608 = callmethodChecked(var_t2, "methodNames", []);
                                                // call case 6: other requests
                                                // call case 6: other requests
                                                var call1610 = callmethodChecked(var_t1, "methodNames", []);
                                                var call1611 = callmethodChecked(call1610, "removeAll(1)", [1], call1608);
                                                return call1611;
                                              };
                                              func1605.paramCounts = [0];
                                              obj1591.methods["methodNames"] = func1605;
                                              func1605.definitionLine = 302;
                                              func1605.definitionModule = "StandardPrelude";
                                              var func1612 = function(argcv) {    // method asString
                                                var returnTarget = invocationCount;
                                                invocationCount++;
                                                var curarg = 1;
                                                setModuleName("StandardPrelude");
                                                setLineNumber(305);    // compilenode string
                                                var string1613 = new GraceString(")");
                                                var string1616 = new GraceString(" - ");
                                                var string1619 = new GraceString("(");
                                                var opresult1621 = callmethodChecked(string1619, "++(1)", [1], var_t1);
                                                var opresult1623 = callmethodChecked(opresult1621, "++(1)", [1], string1616);
                                                var opresult1625 = callmethodChecked(opresult1623, "++(1)", [1], var_t2);
                                                var opresult1627 = callmethodChecked(opresult1625, "++(1)", [1], string1613);
                                                return opresult1627;
                                              };
                                              func1612.paramCounts = [0];
                                              obj1591.methods["asString"] = func1612;
                                              func1612.definitionLine = 305;
                                              func1612.definitionModule = "StandardPrelude";
                                              setLineNumber(289);    // compilenode identifier
                                              // call case 6: other requests
                                              var call1629 = callmethodChecked(var_BasicPattern, "new$object(1)", [0, 1], this);
                                              obj1591.superobj = call1629;
                                              if (call1629.data) obj1591.data = call1629.data;
                                              if (call1629.hasOwnProperty('_value'))
                                                  obj1591._value = call1629._value;
                                              superDepth = origSuperDepth;
                                            };
                                            obj_init_1591.apply(inheritingObject, []);
                                            return obj1591;
                                            };
                                            obj1548.methods["new(2)$object(1)"] = func1590;
                                          var func1630 = function(argcv) {    // method asString
                                            var returnTarget = invocationCount;
                                            invocationCount++;
                                            var curarg = 1;
                                            setModuleName("StandardPrelude");
                                            setLineNumber(288);    // compilenode string
                                            var string1631 = new GraceString("class TypeSubtraction");
                                            return string1631;
                                          };
                                          func1630.paramCounts = [0];
                                          obj1548.methods["asString"] = func1630;
                                          func1630.definitionLine = 288;
                                          func1630.definitionModule = "StandardPrelude";
                                          superDepth = origSuperDepth;
                                        };
                                        obj_init_1548.apply(obj1548, []);
                                        var var_TypeSubtraction = obj1548;
                                        setLineNumber(1);    // compilenode method
                                        var func1632 = function(argcv) {    // method TypeSubtraction
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          setModuleName("StandardPrelude");
                                          // TypeSubtraction is a simple accessor - elide try ... catch
                                          setLineNumber(288);    // compilenode identifier
                                          return var_TypeSubtraction;
                                        };
                                        func1632.paramCounts = [0];
                                        this.methods["TypeSubtraction"] = func1632;
                                        func1632.definitionLine = 1;
                                        func1632.definitionModule = "StandardPrelude";
                                        this.methods["TypeSubtraction"].debug = "def";
                                        setLineNumber(311);    // compilenode typedec
                                        // Type decl Extractable
                                        //   Type literal 
                                        var type1634 = new GraceType("Extractable");
                                        type1634.typeMethods.push("extract");
                                        var var_Extractable = type1634;
                                        setLineNumber(1);    // compilenode method
                                        var func1635 = function(argcv) {    // method Extractable
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          setModuleName("StandardPrelude");
                                          // Extractable is a simple accessor - elide try ... catch
                                          setLineNumber(311);    // compilenode identifier
                                          return var_Extractable;
                                        };
                                        func1635.paramCounts = [0];
                                        this.methods["Extractable"] = func1635;
                                        func1635.definitionLine = 1;
                                        func1635.definitionModule = "StandardPrelude";
                                        setLineNumber(315);    // compilenode typedec
                                        // Type decl MatchResult
                                        //   Type literal 
                                        var type1637 = new GraceType("\u2039anon\u203a");
                                        type1637.typeMethods.push("result");
                                        type1637.typeMethods.push("bindings");
                                        var opresult1640 = callmethodChecked(var_Boolean, "&(1)", [1], type1637);
                                        var var_MatchResult = opresult1640;
                                        setLineNumber(1);    // compilenode method
                                        var func1641 = function(argcv) {    // method MatchResult
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          setModuleName("StandardPrelude");
                                          // MatchResult is a simple accessor - elide try ... catch
                                          setLineNumber(315);    // compilenode identifier
                                          return var_MatchResult;
                                        };
                                        func1641.paramCounts = [0];
                                        this.methods["MatchResult"] = func1641;
                                        func1641.definitionLine = 1;
                                        func1641.definitionModule = "StandardPrelude";
                                        setLineNumber(320);    // compilenode typedec
                                        // Type decl Pattern
                                        //   Type literal 
                                        var type1643 = new GraceType("Pattern");
                                        type1643.typeMethods.push("&(1)");
                                        type1643.typeMethods.push("|(1)");
                                        type1643.typeMethods.push("match(1)");
                                        var var_Pattern = type1643;
                                        setLineNumber(1);    // compilenode method
                                        var func1644 = function(argcv) {    // method Pattern
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          setModuleName("StandardPrelude");
                                          // Pattern is a simple accessor - elide try ... catch
                                          setLineNumber(320);    // compilenode identifier
                                          return var_Pattern;
                                        };
                                        func1644.paramCounts = [0];
                                        this.methods["Pattern"] = func1644;
                                        func1644.definitionLine = 1;
                                        func1644.definitionModule = "StandardPrelude";
                                        setLineNumber(326);    // compilenode typedec
                                        // Type decl ExceptionKind
                                        //   Type literal 
                                        var type1646 = new GraceType("\u2039anon\u203a");
                                        type1646.typeMethods.push("refine(1)");
                                        type1646.typeMethods.push("parent");
                                        type1646.typeMethods.push("raise(1)");
                                        type1646.typeMethods.push("raise(1)with(1)");
                                        var opresult1649 = callmethodChecked(var_Pattern, "&(1)", [1], type1646);
                                        var var_ExceptionKind = opresult1649;
                                        setLineNumber(1);    // compilenode method
                                        var func1650 = function(argcv) {    // method ExceptionKind
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          setModuleName("StandardPrelude");
                                          // ExceptionKind is a simple accessor - elide try ... catch
                                          setLineNumber(326);    // compilenode identifier
                                          return var_ExceptionKind;
                                        };
                                        func1650.paramCounts = [0];
                                        this.methods["ExceptionKind"] = func1650;
                                        func1650.definitionLine = 1;
                                        func1650.definitionModule = "StandardPrelude";
                                        setLineNumber(333);    // compilenode typedec
                                        // Type decl Point
                                        //   Type literal 
                                        var type1652 = new GraceType("Point");
                                        type1652.typeMethods.push("x");
                                        type1652.typeMethods.push("y");
                                        type1652.typeMethods.push("==(1)");
                                        type1652.typeMethods.push("+(1)");
                                        type1652.typeMethods.push("-(1)");
                                        type1652.typeMethods.push("prefix-");
                                        type1652.typeMethods.push("*(1)");
                                        type1652.typeMethods.push("/(1)");
                                        type1652.typeMethods.push("length");
                                        type1652.typeMethods.push("distanceTo(1)");
                                        type1652.typeMethods.push("dot(1)");
                                        type1652.typeMethods.push("\u22c5(1)");
                                        type1652.typeMethods.push("norm");
                                        var var_Point = type1652;
                                        setLineNumber(1);    // compilenode method
                                        var func1653 = function(argcv) {    // method Point
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          setModuleName("StandardPrelude");
                                          // Point is a simple accessor - elide try ... catch
                                          setLineNumber(333);    // compilenode identifier
                                          return var_Point;
                                        };
                                        func1653.paramCounts = [0];
                                        this.methods["Point"] = func1653;
                                        func1653.definitionLine = 1;
                                        func1653.definitionModule = "StandardPrelude";
                                        setLineNumber(411);    // compilenode import
                                        // Import of collectionsPrelude as coll
                                        if (typeof gracecode_collectionsPrelude == 'undefined')
                                          throw new GraceExceptionPacket(EnvironmentExceptionObject, 
                                            new GraceString('could not find module collectionsPrelude'));
                                        var var_coll = do_import("collectionsPrelude", gracecode_collectionsPrelude);
                                        var func1654 = function(argcv) {    // method coll
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          setModuleName("StandardPrelude");
                                          // coll is a simple accessor - elide try ... catch
                                          return var_coll;
                                        };
                                        func1654.paramCounts = [0];
                                        this.methods["coll"] = func1654;
                                        func1654.definitionLine = 411;
                                        func1654.definitionModule = "StandardPrelude";
                                        func1654.debug = "import";
                                        func1654.confidential = true;
                                        setModuleName("StandardPrelude");
                                        setLineNumber(417);    // compilenode identifier
                                        var var_collections = var_coll;
                                        setLineNumber(1);    // compilenode method
                                        var func1655 = function(argcv) {    // method collections
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          setModuleName("StandardPrelude");
                                          // collections is a simple accessor - elide try ... catch
                                          setLineNumber(417);    // compilenode identifier
                                          return var_collections;
                                        };
                                        func1655.paramCounts = [0];
                                        this.methods["collections"] = func1655;
                                        func1655.definitionLine = 1;
                                        func1655.definitionModule = "StandardPrelude";
                                        this.methods["collections"].debug = "def";
                                        setLineNumber(419);    // compilenode typedec
                                        // Type decl Block0
                                        // call case 6: other requests
                                        var call1658 = callmethodChecked(var_collections, "Block0", []);
                                        var var_Block0 = call1658;
                                        setLineNumber(1);    // compilenode method
                                        var func1659 = function(argcv) {    // method Block0
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          setModuleName("StandardPrelude");
                                          // Block0 is a simple accessor - elide try ... catch
                                          setLineNumber(419);    // compilenode identifier
                                          return var_Block0;
                                        };
                                        func1659.paramCounts = [0];
                                        this.methods["Block0"] = func1659;
                                        func1659.definitionLine = 1;
                                        func1659.definitionModule = "StandardPrelude";
                                        setLineNumber(420);    // compilenode typedec
                                        // Type decl Block1
                                        // call case 6: other requests
                                        var call1662 = callmethodChecked(var_collections, "Block1", []);
                                        var var_Block1 = call1662;
                                        setLineNumber(1);    // compilenode method
                                        var func1663 = function(argcv) {    // method Block1
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          setModuleName("StandardPrelude");
                                          // Block1 is a simple accessor - elide try ... catch
                                          setLineNumber(420);    // compilenode identifier
                                          return var_Block1;
                                        };
                                        func1663.paramCounts = [0];
                                        this.methods["Block1"] = func1663;
                                        func1663.definitionLine = 1;
                                        func1663.definitionModule = "StandardPrelude";
                                        setLineNumber(421);    // compilenode typedec
                                        // Type decl Block2
                                        // call case 6: other requests
                                        var call1666 = callmethodChecked(var_collections, "Block2", []);
                                        var var_Block2 = call1666;
                                        setLineNumber(1);    // compilenode method
                                        var func1667 = function(argcv) {    // method Block2
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          setModuleName("StandardPrelude");
                                          // Block2 is a simple accessor - elide try ... catch
                                          setLineNumber(421);    // compilenode identifier
                                          return var_Block2;
                                        };
                                        func1667.paramCounts = [0];
                                        this.methods["Block2"] = func1667;
                                        func1667.definitionLine = 1;
                                        func1667.definitionModule = "StandardPrelude";
                                        setLineNumber(422);    // compilenode typedec
                                        // Type decl Block3
                                        //   Type literal 
                                        var type1669 = new GraceType("Block3");
                                        type1669.typeMethods.push("apply(3)");
                                        var var_Block3 = type1669;
                                        setLineNumber(1);    // compilenode method
                                        var func1670 = function(argcv) {    // method Block3
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          setModuleName("StandardPrelude");
                                          // Block3 is a simple accessor - elide try ... catch
                                          setLineNumber(422);    // compilenode identifier
                                          return var_Block3;
                                        };
                                        func1670.paramCounts = [0];
                                        this.methods["Block3"] = func1670;
                                        func1670.definitionLine = 1;
                                        func1670.definitionModule = "StandardPrelude";
                                        setLineNumber(425);    // compilenode typedec
                                        // Type decl Cmd
                                        var var_Cmd = var_Block0;
                                        setLineNumber(1);    // compilenode method
                                        var func1672 = function(argcv) {    // method Cmd
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          setModuleName("StandardPrelude");
                                          // Cmd is a simple accessor - elide try ... catch
                                          setLineNumber(425);    // compilenode identifier
                                          return var_Cmd;
                                        };
                                        func1672.paramCounts = [0];
                                        this.methods["Cmd"] = func1672;
                                        func1672.definitionLine = 1;
                                        func1672.definitionModule = "StandardPrelude";
                                        setLineNumber(426);    // compilenode typedec
                                        // Type decl Fun
                                        var var_Fun = var_Block1;
                                        setLineNumber(1);    // compilenode method
                                        var func1674 = function(argcv) {    // method Fun
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          setModuleName("StandardPrelude");
                                          // Fun is a simple accessor - elide try ... catch
                                          setLineNumber(426);    // compilenode identifier
                                          return var_Fun;
                                        };
                                        func1674.paramCounts = [0];
                                        this.methods["Fun"] = func1674;
                                        func1674.definitionLine = 1;
                                        func1674.definitionModule = "StandardPrelude";
                                        setLineNumber(427);    // compilenode typedec
                                        // Type decl Fun2
                                        var var_Fun2 = var_Block2;
                                        setLineNumber(1);    // compilenode method
                                        var func1676 = function(argcv) {    // method Fun2
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          setModuleName("StandardPrelude");
                                          // Fun2 is a simple accessor - elide try ... catch
                                          setLineNumber(427);    // compilenode identifier
                                          return var_Fun2;
                                        };
                                        func1676.paramCounts = [0];
                                        this.methods["Fun2"] = func1676;
                                        func1676.definitionLine = 1;
                                        func1676.definitionModule = "StandardPrelude";
                                        setLineNumber(428);    // compilenode typedec
                                        // Type decl Fun3
                                        var var_Fun3 = var_Block3;
                                        setLineNumber(1);    // compilenode method
                                        var func1678 = function(argcv) {    // method Fun3
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          setModuleName("StandardPrelude");
                                          // Fun3 is a simple accessor - elide try ... catch
                                          setLineNumber(428);    // compilenode identifier
                                          return var_Fun3;
                                        };
                                        func1678.paramCounts = [0];
                                        this.methods["Fun3"] = func1678;
                                        func1678.definitionLine = 1;
                                        func1678.definitionModule = "StandardPrelude";
                                        setLineNumber(429);    // compilenode typedec
                                        // Type decl Proc
                                        var var_Proc = var_Block1;
                                        setLineNumber(1);    // compilenode method
                                        var func1680 = function(argcv) {    // method Proc
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          setModuleName("StandardPrelude");
                                          // Proc is a simple accessor - elide try ... catch
                                          setLineNumber(429);    // compilenode identifier
                                          return var_Proc;
                                        };
                                        func1680.paramCounts = [0];
                                        this.methods["Proc"] = func1680;
                                        func1680.definitionLine = 1;
                                        func1680.definitionModule = "StandardPrelude";
                                        setLineNumber(430);    // compilenode typedec
                                        // Type decl Proc2
                                        var var_Proc2 = var_Block2;
                                        setLineNumber(1);    // compilenode method
                                        var func1682 = function(argcv) {    // method Proc2
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          setModuleName("StandardPrelude");
                                          // Proc2 is a simple accessor - elide try ... catch
                                          setLineNumber(430);    // compilenode identifier
                                          return var_Proc2;
                                        };
                                        func1682.paramCounts = [0];
                                        this.methods["Proc2"] = func1682;
                                        func1682.definitionLine = 1;
                                        func1682.definitionModule = "StandardPrelude";
                                        setLineNumber(431);    // compilenode typedec
                                        // Type decl Proc3
                                        var var_Proc3 = var_Block3;
                                        setLineNumber(1);    // compilenode method
                                        var func1684 = function(argcv) {    // method Proc3
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          setModuleName("StandardPrelude");
                                          // Proc3 is a simple accessor - elide try ... catch
                                          setLineNumber(431);    // compilenode identifier
                                          return var_Proc3;
                                        };
                                        func1684.paramCounts = [0];
                                        this.methods["Proc3"] = func1684;
                                        func1684.definitionLine = 1;
                                        func1684.definitionModule = "StandardPrelude";
                                        setLineNumber(433);    // compilenode typedec
                                        // Type decl Collection
                                        // call case 6: other requests
                                        var call1687 = callmethodChecked(var_collections, "Collection", []);
                                        var var_Collection = call1687;
                                        setLineNumber(1);    // compilenode method
                                        var func1688 = function(argcv) {    // method Collection
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          setModuleName("StandardPrelude");
                                          // Collection is a simple accessor - elide try ... catch
                                          setLineNumber(433);    // compilenode identifier
                                          return var_Collection;
                                        };
                                        func1688.paramCounts = [0];
                                        this.methods["Collection"] = func1688;
                                        func1688.definitionLine = 1;
                                        func1688.definitionModule = "StandardPrelude";
                                        setLineNumber(434);    // compilenode typedec
                                        // Type decl Iterable
                                        // call case 6: other requests
                                        var call1691 = callmethodChecked(var_collections, "Iterable", []);
                                        var var_Iterable = call1691;
                                        setLineNumber(1);    // compilenode method
                                        var func1692 = function(argcv) {    // method Iterable
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          setModuleName("StandardPrelude");
                                          // Iterable is a simple accessor - elide try ... catch
                                          setLineNumber(434);    // compilenode identifier
                                          return var_Iterable;
                                        };
                                        func1692.paramCounts = [0];
                                        this.methods["Iterable"] = func1692;
                                        func1692.definitionLine = 1;
                                        func1692.definitionModule = "StandardPrelude";
                                        setLineNumber(435);    // compilenode typedec
                                        // Type decl Expandable
                                        // call case 6: other requests
                                        var call1695 = callmethodChecked(var_collections, "Expandable", []);
                                        var var_Expandable = call1695;
                                        setLineNumber(1);    // compilenode method
                                        var func1696 = function(argcv) {    // method Expandable
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          setModuleName("StandardPrelude");
                                          // Expandable is a simple accessor - elide try ... catch
                                          setLineNumber(435);    // compilenode identifier
                                          return var_Expandable;
                                        };
                                        func1696.paramCounts = [0];
                                        this.methods["Expandable"] = func1696;
                                        func1696.definitionLine = 1;
                                        func1696.definitionModule = "StandardPrelude";
                                        setLineNumber(436);    // compilenode typedec
                                        // Type decl Enumerable
                                        // call case 6: other requests
                                        var call1699 = callmethodChecked(var_collections, "Enumerable", []);
                                        var var_Enumerable = call1699;
                                        setLineNumber(1);    // compilenode method
                                        var func1700 = function(argcv) {    // method Enumerable
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          setModuleName("StandardPrelude");
                                          // Enumerable is a simple accessor - elide try ... catch
                                          setLineNumber(436);    // compilenode identifier
                                          return var_Enumerable;
                                        };
                                        func1700.paramCounts = [0];
                                        this.methods["Enumerable"] = func1700;
                                        func1700.definitionLine = 1;
                                        func1700.definitionModule = "StandardPrelude";
                                        setLineNumber(437);    // compilenode typedec
                                        // Type decl Binding
                                        // call case 6: other requests
                                        var call1703 = callmethodChecked(var_collections, "Binding", []);
                                        var var_Binding = call1703;
                                        setLineNumber(1);    // compilenode method
                                        var func1704 = function(argcv) {    // method Binding
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          setModuleName("StandardPrelude");
                                          // Binding is a simple accessor - elide try ... catch
                                          setLineNumber(437);    // compilenode identifier
                                          return var_Binding;
                                        };
                                        func1704.paramCounts = [0];
                                        this.methods["Binding"] = func1704;
                                        func1704.definitionLine = 1;
                                        func1704.definitionModule = "StandardPrelude";
                                        setLineNumber(438);    // compilenode typedec
                                        // Type decl Iterator
                                        // call case 6: other requests
                                        var call1707 = callmethodChecked(var_collections, "Iterator", []);
                                        var var_Iterator = call1707;
                                        setLineNumber(1);    // compilenode method
                                        var func1708 = function(argcv) {    // method Iterator
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          setModuleName("StandardPrelude");
                                          // Iterator is a simple accessor - elide try ... catch
                                          setLineNumber(438);    // compilenode identifier
                                          return var_Iterator;
                                        };
                                        func1708.paramCounts = [0];
                                        this.methods["Iterator"] = func1708;
                                        func1708.definitionLine = 1;
                                        func1708.definitionModule = "StandardPrelude";
                                        setLineNumber(439);    // compilenode typedec
                                        // Type decl Sequence
                                        // call case 6: other requests
                                        var call1711 = callmethodChecked(var_collections, "Sequence", []);
                                        var var_Sequence = call1711;
                                        setLineNumber(1);    // compilenode method
                                        var func1712 = function(argcv) {    // method Sequence
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          setModuleName("StandardPrelude");
                                          // Sequence is a simple accessor - elide try ... catch
                                          setLineNumber(439);    // compilenode identifier
                                          return var_Sequence;
                                        };
                                        func1712.paramCounts = [0];
                                        this.methods["Sequence"] = func1712;
                                        func1712.definitionLine = 1;
                                        func1712.definitionModule = "StandardPrelude";
                                        setLineNumber(440);    // compilenode typedec
                                        // Type decl List
                                        // call case 6: other requests
                                        var call1715 = callmethodChecked(var_collections, "List", []);
                                        var var_List = call1715;
                                        setLineNumber(1);    // compilenode method
                                        var func1716 = function(argcv) {    // method List
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          setModuleName("StandardPrelude");
                                          // List is a simple accessor - elide try ... catch
                                          setLineNumber(440);    // compilenode identifier
                                          return var_List;
                                        };
                                        func1716.paramCounts = [0];
                                        this.methods["List"] = func1716;
                                        func1716.definitionLine = 1;
                                        func1716.definitionModule = "StandardPrelude";
                                        setLineNumber(441);    // compilenode typedec
                                        // Type decl Set
                                        // call case 6: other requests
                                        var call1719 = callmethodChecked(var_collections, "Set", []);
                                        var var_Set = call1719;
                                        setLineNumber(1);    // compilenode method
                                        var func1720 = function(argcv) {    // method Set
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          setModuleName("StandardPrelude");
                                          // Set is a simple accessor - elide try ... catch
                                          setLineNumber(441);    // compilenode identifier
                                          return var_Set;
                                        };
                                        func1720.paramCounts = [0];
                                        this.methods["Set"] = func1720;
                                        func1720.definitionLine = 1;
                                        func1720.definitionModule = "StandardPrelude";
                                        setLineNumber(442);    // compilenode typedec
                                        // Type decl Dictionary
                                        // call case 6: other requests
                                        var call1723 = callmethodChecked(var_collections, "Dictionary", []);
                                        var var_Dictionary = call1723;
                                        setLineNumber(1);    // compilenode method
                                        var func1724 = function(argcv) {    // method Dictionary
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          setModuleName("StandardPrelude");
                                          // Dictionary is a simple accessor - elide try ... catch
                                          setLineNumber(442);    // compilenode identifier
                                          return var_Dictionary;
                                        };
                                        func1724.paramCounts = [0];
                                        this.methods["Dictionary"] = func1724;
                                        func1724.definitionLine = 1;
                                        func1724.definitionModule = "StandardPrelude";
                                        setLineNumber(444);    // compilenode member
                                        // call case 6: other requests
                                        var call1726 = callmethodChecked(var_collections, "BoundsError", []);
                                        var var_BoundsError = call1726;
                                        setLineNumber(1);    // compilenode method
                                        var func1727 = function(argcv) {    // method BoundsError
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          setModuleName("StandardPrelude");
                                          // BoundsError is a simple accessor - elide try ... catch
                                          setLineNumber(444);    // compilenode identifier
                                          return var_BoundsError;
                                        };
                                        func1727.paramCounts = [0];
                                        this.methods["BoundsError"] = func1727;
                                        func1727.definitionLine = 1;
                                        func1727.definitionModule = "StandardPrelude";
                                        this.methods["BoundsError"].debug = "def";
                                        setLineNumber(445);    // compilenode member
                                        // call case 6: other requests
                                        var call1729 = callmethodChecked(var_collections, "IteratorExhausted", []);
                                        var var_IteratorExhausted = call1729;
                                        setLineNumber(1);    // compilenode method
                                        var func1730 = function(argcv) {    // method IteratorExhausted
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          setModuleName("StandardPrelude");
                                          // IteratorExhausted is a simple accessor - elide try ... catch
                                          setLineNumber(445);    // compilenode identifier
                                          return var_IteratorExhausted;
                                        };
                                        func1730.paramCounts = [0];
                                        this.methods["IteratorExhausted"] = func1730;
                                        func1730.definitionLine = 1;
                                        func1730.definitionModule = "StandardPrelude";
                                        this.methods["IteratorExhausted"].debug = "def";
                                        setLineNumber(446);    // compilenode member
                                        // call case 6: other requests
                                        var call1732 = callmethodChecked(var_collections, "NoSuchObject", []);
                                        var var_NoSuchObject = call1732;
                                        setLineNumber(1);    // compilenode method
                                        var func1733 = function(argcv) {    // method NoSuchObject
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          setModuleName("StandardPrelude");
                                          // NoSuchObject is a simple accessor - elide try ... catch
                                          setLineNumber(446);    // compilenode identifier
                                          return var_NoSuchObject;
                                        };
                                        func1733.paramCounts = [0];
                                        this.methods["NoSuchObject"] = func1733;
                                        func1733.definitionLine = 1;
                                        func1733.definitionModule = "StandardPrelude";
                                        this.methods["NoSuchObject"].debug = "def";
                                        setLineNumber(447);    // compilenode member
                                        // call case 6: other requests
                                        var call1735 = callmethodChecked(var_collections, "RequestError", []);
                                        var var_RequestError = call1735;
                                        setLineNumber(1);    // compilenode method
                                        var func1736 = function(argcv) {    // method RequestError
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          setModuleName("StandardPrelude");
                                          // RequestError is a simple accessor - elide try ... catch
                                          setLineNumber(447);    // compilenode identifier
                                          return var_RequestError;
                                        };
                                        func1736.paramCounts = [0];
                                        this.methods["RequestError"] = func1736;
                                        func1736.definitionLine = 1;
                                        func1736.definitionModule = "StandardPrelude";
                                        this.methods["RequestError"].debug = "def";
                                        setLineNumber(448);    // compilenode member
                                        // call case 6: other requests
                                        var call1738 = callmethodChecked(var_collections, "SubobjectResponsibility", []);
                                        var var_SubobjectResponsibility = call1738;
                                        setLineNumber(1);    // compilenode method
                                        var func1739 = function(argcv) {    // method SubobjectResponsibility
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          setModuleName("StandardPrelude");
                                          // SubobjectResponsibility is a simple accessor - elide try ... catch
                                          setLineNumber(448);    // compilenode identifier
                                          return var_SubobjectResponsibility;
                                        };
                                        func1739.paramCounts = [0];
                                        this.methods["SubobjectResponsibility"] = func1739;
                                        func1739.definitionLine = 1;
                                        func1739.definitionModule = "StandardPrelude";
                                        this.methods["SubobjectResponsibility"].debug = "def";
                                        setLineNumber(449);    // compilenode member
                                        // call case 6: other requests
                                        var call1741 = callmethodChecked(var_collections, "ConcurrentModification", []);
                                        var var_ConcurrentModification = call1741;
                                        setLineNumber(1);    // compilenode method
                                        var func1742 = function(argcv) {    // method ConcurrentModification
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          setModuleName("StandardPrelude");
                                          // ConcurrentModification is a simple accessor - elide try ... catch
                                          setLineNumber(449);    // compilenode identifier
                                          return var_ConcurrentModification;
                                        };
                                        func1742.paramCounts = [0];
                                        this.methods["ConcurrentModification"] = func1742;
                                        func1742.definitionLine = 1;
                                        func1742.definitionModule = "StandardPrelude";
                                        this.methods["ConcurrentModification"].debug = "def";
                                        setLineNumber(450);    // compilenode string
                                        var string1744 = new GraceString("UninitializedVariable");
                                        // call case 6: other requests
                                        // call case 5: prelude request
                                        var call1746 = callmethodChecked(var_prelude, "ProgrammingError", []);
                                        var call1747 = callmethodChecked(call1746, "refine(1)", [1], string1744);
                                        var var_UninitializedVariable = call1747;
                                        setLineNumber(1);    // compilenode method
                                        var func1748 = function(argcv) {    // method UninitializedVariable
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          setModuleName("StandardPrelude");
                                          // UninitializedVariable is a simple accessor - elide try ... catch
                                          setLineNumber(450);    // compilenode identifier
                                          return var_UninitializedVariable;
                                        };
                                        func1748.paramCounts = [0];
                                        this.methods["UninitializedVariable"] = func1748;
                                        func1748.definitionLine = 1;
                                        func1748.definitionModule = "StandardPrelude";
                                        this.methods["UninitializedVariable"].debug = "def";
                                        setLineNumber(452);    // compilenode member
                                        // call case 6: other requests
                                        var call1750 = callmethodChecked(var_collections, "collection", []);
                                        var var_collection = call1750;
                                        setLineNumber(1);    // compilenode method
                                        var func1751 = function(argcv) {    // method collection
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          setModuleName("StandardPrelude");
                                          // collection is a simple accessor - elide try ... catch
                                          setLineNumber(452);    // compilenode identifier
                                          return var_collection;
                                        };
                                        func1751.paramCounts = [0];
                                        this.methods["collection"] = func1751;
                                        func1751.definitionLine = 1;
                                        func1751.definitionModule = "StandardPrelude";
                                        this.methods["collection"].debug = "def";
                                        setLineNumber(453);    // compilenode member
                                        // call case 6: other requests
                                        var call1753 = callmethodChecked(var_collections, "enumerable", []);
                                        var var_enumerable = call1753;
                                        setLineNumber(1);    // compilenode method
                                        var func1754 = function(argcv) {    // method enumerable
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          setModuleName("StandardPrelude");
                                          // enumerable is a simple accessor - elide try ... catch
                                          setLineNumber(453);    // compilenode identifier
                                          return var_enumerable;
                                        };
                                        func1754.paramCounts = [0];
                                        this.methods["enumerable"] = func1754;
                                        func1754.definitionLine = 1;
                                        func1754.definitionModule = "StandardPrelude";
                                        this.methods["enumerable"].debug = "def";
                                        setLineNumber(454);    // compilenode member
                                        // call case 6: other requests
                                        var call1756 = callmethodChecked(var_collections, "indexable", []);
                                        var var_indexable = call1756;
                                        setLineNumber(1);    // compilenode method
                                        var func1757 = function(argcv) {    // method indexable
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          setModuleName("StandardPrelude");
                                          // indexable is a simple accessor - elide try ... catch
                                          setLineNumber(454);    // compilenode identifier
                                          return var_indexable;
                                        };
                                        func1757.paramCounts = [0];
                                        this.methods["indexable"] = func1757;
                                        func1757.definitionLine = 1;
                                        func1757.definitionModule = "StandardPrelude";
                                        this.methods["indexable"].debug = "def";
                                        setLineNumber(460);    // compilenode member
                                        // call case 6: other requests
                                        // call case 6: other requests
                                        var call1760 = callmethodChecked(var_collections, "sequence", []);
                                        var call1761 = callmethodChecked(call1760, "empty", []);
                                        var var_emptySequence = call1761;
                                        setLineNumber(1);    // compilenode method
                                        var func1762 = function(argcv) {    // method emptySequence
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          setModuleName("StandardPrelude");
                                          // emptySequence is a simple accessor - elide try ... catch
                                          setLineNumber(460);    // compilenode identifier
                                          return var_emptySequence;
                                        };
                                        func1762.paramCounts = [0];
                                        this.methods["emptySequence"] = func1762;
                                        func1762.definitionLine = 1;
                                        func1762.definitionModule = "StandardPrelude";
                                        this.methods["emptySequence"].debug = "def";
                                        setLineNumber(477);    // compilenode member
                                        // call case 6: other requests
                                        var call1764 = callmethodChecked(var_collections, "binding", []);
                                        var var_binding = call1764;
                                        setLineNumber(1);    // compilenode method
                                        var func1765 = function(argcv) {    // method binding
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          setModuleName("StandardPrelude");
                                          // binding is a simple accessor - elide try ... catch
                                          setLineNumber(477);    // compilenode identifier
                                          return var_binding;
                                        };
                                        func1765.paramCounts = [0];
                                        this.methods["binding"] = func1765;
                                        func1765.definitionLine = 1;
                                        func1765.definitionModule = "StandardPrelude";
                                        this.methods["binding"].debug = "def";
                                        setLineNumber(478);    // compilenode member
                                        // call case 6: other requests
                                        var call1767 = callmethodChecked(var_collections, "range", []);
                                        var var_range = call1767;
                                        setLineNumber(1);    // compilenode method
                                        var func1768 = function(argcv) {    // method range
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          setModuleName("StandardPrelude");
                                          // range is a simple accessor - elide try ... catch
                                          setLineNumber(478);    // compilenode identifier
                                          return var_range;
                                        };
                                        func1768.paramCounts = [0];
                                        this.methods["range"] = func1768;
                                        func1768.definitionLine = 1;
                                        func1768.definitionModule = "StandardPrelude";
                                        this.methods["range"].debug = "def";
                                        setLineNumber(4);    // compilenode identifier
                                        var var_isStandardPrelude = GraceTrue;
                                        setLineNumber(1);    // compilenode method
                                        var func1769 = function(argcv) {    // method isStandardPrelude
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          setModuleName("StandardPrelude");
                                          // isStandardPrelude is a simple accessor - elide try ... catch
                                          setLineNumber(4);    // compilenode identifier
                                          return var_isStandardPrelude;
                                        };
                                        func1769.paramCounts = [0];
                                        this.methods["isStandardPrelude"] = func1769;
                                        func1769.definitionLine = 1;
                                        func1769.definitionModule = "StandardPrelude";
                                        setLineNumber(1);    // compilenode method
                                        var func1770 = function(argcv) {    // method isStandardPrelude:=(_)
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          var var___95__var__95__assign__95__tmp = arguments[curarg];
                                          curarg++;
                                          setModuleName("StandardPrelude");
                                          var_isStandardPrelude = var___95__var__95__assign__95__tmp;
                                          return GraceDone;
                                        };
                                        func1770.paramCounts = [1];
                                        this.methods["isStandardPrelude:=(1)"] = func1770;
                                        func1770.definitionLine = 1;
                                        func1770.definitionModule = "StandardPrelude";
                                        this.methods["isStandardPrelude"].debug = "var";
                                        setLineNumber(6);    // compilenode object
                                        var obj1771 = Grace_allocObject(GraceObject, "SuccessfulMatch");
                                        obj1771.definitionModule = "StandardPrelude";
                                        obj1771.definitionLine = 6;
                                        obj1771.outer = this;
                                        var reader_StandardPrelude_outer1772 = function() {
                                          return this.outer;
                                        };
                                        obj1771.methods["outer"] = reader_StandardPrelude_outer1772;
                                        var obj_init_1771 = function() {
                                          var origSuperDepth = superDepth;
                                          superDepth = obj1771;
                                          var func1773 = function(argcv) {    // method new(_,_)
                                            var returnTarget = invocationCount;
                                            invocationCount++;
                                            var curarg = 1;
                                            var var_result__39__ = arguments[curarg];
                                            curarg++;
                                            var var_bindings__39__ = arguments[curarg];
                                            curarg++;
                                            setModuleName("StandardPrelude");
                                            var obj1774 = Grace_allocObject(null, "new(2)");
                                            obj1774.definitionModule = "StandardPrelude";
                                            obj1774.definitionLine = 6;
                                            obj1774.outer = this;
                                            var reader_StandardPrelude_outer1775 = function() {
                                              return this.outer;
                                            };
                                            obj1774.methods["outer"] = reader_StandardPrelude_outer1775;
                                            var obj_init_1774 = function() {
                                              var origSuperDepth = superDepth;
                                              superDepth = obj1774;
                                              var func1776 = function(argcv) {    // method result
                                                var returnTarget = invocationCount;
                                                invocationCount++;
                                                var curarg = 1;
                                                setModuleName("StandardPrelude");
                                                // result is a simple accessor - elide try ... catch
                                                setLineNumber(8);    // compilenode identifier
                                                return var_result__39__;
                                              };
                                              func1776.paramCounts = [0];
                                              obj1774.methods["result"] = func1776;
                                              func1776.definitionLine = 8;
                                              func1776.definitionModule = "StandardPrelude";
                                              var func1777 = function(argcv) {    // method bindings
                                                var returnTarget = invocationCount;
                                                invocationCount++;
                                                var curarg = 1;
                                                setModuleName("StandardPrelude");
                                                // bindings is a simple accessor - elide try ... catch
                                                setLineNumber(9);    // compilenode identifier
                                                return var_bindings__39__;
                                              };
                                              func1777.paramCounts = [0];
                                              obj1774.methods["bindings"] = func1777;
                                              func1777.definitionLine = 9;
                                              func1777.definitionModule = "StandardPrelude";
                                              var func1778 = function(argcv) {    // method asString
                                                var returnTarget = invocationCount;
                                                invocationCount++;
                                                var curarg = 1;
                                                setModuleName("StandardPrelude");
                                                setLineNumber(11);    // compilenode string
                                                var string1779 = new GraceString(")");
                                                // call case 4: self request
                                                onSelf = true;
                                                var call1782 = callmethodChecked(this, "bindings", []);
                                                var string1784 = new GraceString(", bindings = ");
                                                // call case 4: self request
                                                onSelf = true;
                                                var call1787 = callmethodChecked(this, "result", []);
                                                var string1789 = new GraceString("SuccessfulMatch(result = ");
                                                var opresult1791 = callmethodChecked(string1789, "++(1)", [1], call1787);
                                                var opresult1793 = callmethodChecked(opresult1791, "++(1)", [1], string1784);
                                                var opresult1795 = callmethodChecked(opresult1793, "++(1)", [1], call1782);
                                                var opresult1797 = callmethodChecked(opresult1795, "++(1)", [1], string1779);
                                                return opresult1797;
                                              };
                                              func1778.paramCounts = [0];
                                              obj1774.methods["asString"] = func1778;
                                              func1778.definitionLine = 10;
                                              func1778.definitionModule = "StandardPrelude";
                                              setLineNumber(7);    // compilenode identifier
                                              obj1774.superobj = GraceTrue;
                                              if (GraceTrue.data) obj1774.data = GraceTrue.data;
                                              if (GraceTrue.hasOwnProperty('_value'))
                                                  obj1774._value = GraceTrue._value;
                                              superDepth = origSuperDepth;
                                            };
                                            obj_init_1774.apply(obj1774, []);
                                            return obj1774;
                                          };
                                          func1773.paramCounts = [2];
                                          obj1771.methods["new(2)"] = func1773;
                                          func1773.definitionLine = 6;
                                          func1773.definitionModule = "StandardPrelude";
                                            var func1798 = function(argcv) {    // method new(_,_)$object(_)
                                              var curarg = 1;
                                              var var_result__39__ = arguments[curarg];
                                              curarg++;
                                              var var_bindings__39__ = arguments[curarg];
                                              curarg++;
                                              var inheritingObject = arguments[curarg++];
                                              // Start argument processing
                                              curarg = 1;
                                              curarg++;
                                              curarg++;
                                              // End argument processing
                                              setModuleName("StandardPrelude");
                                              var returnTarget = invocationCount;
                                              invocationCount++;
                                              var obj1799 = Grace_allocObject(null, "new(2)");
                                              obj1799.definitionModule = "StandardPrelude";
                                              obj1799.definitionLine = 6;
                                              var inho1799 = inheritingObject;
                                              while (inho1799.superobj) inho1799 = inho1799.superobj;
                                              inho1799.superobj = obj1799;
                                              obj1799.data = inheritingObject.data;
                                              if (inheritingObject.hasOwnProperty('_value'))
                                                obj1799._value = inheritingObject._value;
                                              obj1799.outer = this;
                                              var reader_StandardPrelude_outer1800 = function() {
                                                return this.outer;
                                              };
                                              obj1799.methods["outer"] = reader_StandardPrelude_outer1800;
                                              var obj_init_1799 = function() {
                                                var origSuperDepth = superDepth;
                                                superDepth = obj1799;
                                                var func1801 = function(argcv) {    // method result
                                                  var returnTarget = invocationCount;
                                                  invocationCount++;
                                                  var curarg = 1;
                                                  setModuleName("StandardPrelude");
                                                  // result is a simple accessor - elide try ... catch
                                                  setLineNumber(8);    // compilenode identifier
                                                  return var_result__39__;
                                                };
                                                func1801.paramCounts = [0];
                                                obj1799.methods["result"] = func1801;
                                                func1801.definitionLine = 8;
                                                func1801.definitionModule = "StandardPrelude";
                                                var func1802 = function(argcv) {    // method bindings
                                                  var returnTarget = invocationCount;
                                                  invocationCount++;
                                                  var curarg = 1;
                                                  setModuleName("StandardPrelude");
                                                  // bindings is a simple accessor - elide try ... catch
                                                  setLineNumber(9);    // compilenode identifier
                                                  return var_bindings__39__;
                                                };
                                                func1802.paramCounts = [0];
                                                obj1799.methods["bindings"] = func1802;
                                                func1802.definitionLine = 9;
                                                func1802.definitionModule = "StandardPrelude";
                                                var func1803 = function(argcv) {    // method asString
                                                  var returnTarget = invocationCount;
                                                  invocationCount++;
                                                  var curarg = 1;
                                                  setModuleName("StandardPrelude");
                                                  setLineNumber(11);    // compilenode string
                                                  var string1804 = new GraceString(")");
                                                  // call case 4: self request
                                                  onSelf = true;
                                                  var call1807 = callmethodChecked(this, "bindings", []);
                                                  var string1809 = new GraceString(", bindings = ");
                                                  // call case 4: self request
                                                  onSelf = true;
                                                  var call1812 = callmethodChecked(this, "result", []);
                                                  var string1814 = new GraceString("SuccessfulMatch(result = ");
                                                  var opresult1816 = callmethodChecked(string1814, "++(1)", [1], call1812);
                                                  var opresult1818 = callmethodChecked(opresult1816, "++(1)", [1], string1809);
                                                  var opresult1820 = callmethodChecked(opresult1818, "++(1)", [1], call1807);
                                                  var opresult1822 = callmethodChecked(opresult1820, "++(1)", [1], string1804);
                                                  return opresult1822;
                                                };
                                                func1803.paramCounts = [0];
                                                obj1799.methods["asString"] = func1803;
                                                func1803.definitionLine = 10;
                                                func1803.definitionModule = "StandardPrelude";
                                                setLineNumber(7);    // compilenode identifier
                                                obj1799.superobj = GraceTrue;
                                                if (GraceTrue.data) obj1799.data = GraceTrue.data;
                                                if (GraceTrue.hasOwnProperty('_value'))
                                                    obj1799._value = GraceTrue._value;
                                                superDepth = origSuperDepth;
                                              };
                                              obj_init_1799.apply(inheritingObject, []);
                                              return obj1799;
                                              };
                                              obj1771.methods["new(2)$object(1)"] = func1798;
                                            var func1823 = function(argcv) {    // method asString
                                              var returnTarget = invocationCount;
                                              invocationCount++;
                                              var curarg = 1;
                                              setModuleName("StandardPrelude");
                                              setLineNumber(6);    // compilenode string
                                              var string1824 = new GraceString("class SuccessfulMatch");
                                              return string1824;
                                            };
                                            func1823.paramCounts = [0];
                                            obj1771.methods["asString"] = func1823;
                                            func1823.definitionLine = 6;
                                            func1823.definitionModule = "StandardPrelude";
                                            superDepth = origSuperDepth;
                                          };
                                          obj_init_1771.apply(obj1771, []);
                                          var var_SuccessfulMatch = obj1771;
                                          setLineNumber(1);    // compilenode method
                                          var func1825 = function(argcv) {    // method SuccessfulMatch
                                            var returnTarget = invocationCount;
                                            invocationCount++;
                                            var curarg = 1;
                                            setModuleName("StandardPrelude");
                                            // SuccessfulMatch is a simple accessor - elide try ... catch
                                            setLineNumber(6);    // compilenode identifier
                                            return var_SuccessfulMatch;
                                          };
                                          func1825.paramCounts = [0];
                                          this.methods["SuccessfulMatch"] = func1825;
                                          func1825.definitionLine = 1;
                                          func1825.definitionModule = "StandardPrelude";
                                          this.methods["SuccessfulMatch"].debug = "def";
                                          setLineNumber(15);    // compilenode object
                                          var obj1826 = Grace_allocObject(GraceObject, "FailedMatch");
                                          obj1826.definitionModule = "StandardPrelude";
                                          obj1826.definitionLine = 15;
                                          obj1826.outer = this;
                                          var reader_StandardPrelude_outer1827 = function() {
                                            return this.outer;
                                          };
                                          obj1826.methods["outer"] = reader_StandardPrelude_outer1827;
                                          var obj_init_1826 = function() {
                                            var origSuperDepth = superDepth;
                                            superDepth = obj1826;
                                            var func1828 = function(argcv) {    // method new(_)
                                              var returnTarget = invocationCount;
                                              invocationCount++;
                                              var curarg = 1;
                                              var var_result__39__ = arguments[curarg];
                                              curarg++;
                                              setModuleName("StandardPrelude");
                                              var obj1829 = Grace_allocObject(null, "new(1)");
                                              obj1829.definitionModule = "StandardPrelude";
                                              obj1829.definitionLine = 15;
                                              obj1829.outer = this;
                                              var reader_StandardPrelude_outer1830 = function() {
                                                return this.outer;
                                              };
                                              obj1829.methods["outer"] = reader_StandardPrelude_outer1830;
                                              var obj_init_1829 = function() {
                                                var origSuperDepth = superDepth;
                                                superDepth = obj1829;
                                                var func1831 = function(argcv) {    // method result
                                                  var returnTarget = invocationCount;
                                                  invocationCount++;
                                                  var curarg = 1;
                                                  setModuleName("StandardPrelude");
                                                  // result is a simple accessor - elide try ... catch
                                                  setLineNumber(17);    // compilenode identifier
                                                  return var_result__39__;
                                                };
                                                func1831.paramCounts = [0];
                                                obj1829.methods["result"] = func1831;
                                                func1831.definitionLine = 17;
                                                func1831.definitionModule = "StandardPrelude";
                                                var func1832 = function(argcv) {    // method bindings
                                                  var returnTarget = invocationCount;
                                                  invocationCount++;
                                                  var curarg = 1;
                                                  setModuleName("StandardPrelude");
                                                  // bindings is a simple accessor - elide try ... catch
                                                  setLineNumber(18);    // compilenode identifier
                                                  return var_emptySequence;
                                                };
                                                func1832.paramCounts = [0];
                                                obj1829.methods["bindings"] = func1832;
                                                func1832.definitionLine = 18;
                                                func1832.definitionModule = "StandardPrelude";
                                                var func1833 = function(argcv) {    // method asString
                                                  var returnTarget = invocationCount;
                                                  invocationCount++;
                                                  var curarg = 1;
                                                  setModuleName("StandardPrelude");
                                                  setLineNumber(20);    // compilenode string
                                                  var string1834 = new GraceString(")");
                                                  // call case 4: self request
                                                  onSelf = true;
                                                  var call1837 = callmethodChecked(this, "result", []);
                                                  var string1839 = new GraceString("FailedMatch(result = ");
                                                  var opresult1841 = callmethodChecked(string1839, "++(1)", [1], call1837);
                                                  var opresult1843 = callmethodChecked(opresult1841, "++(1)", [1], string1834);
                                                  return opresult1843;
                                                };
                                                func1833.paramCounts = [0];
                                                obj1829.methods["asString"] = func1833;
                                                func1833.definitionLine = 19;
                                                func1833.definitionModule = "StandardPrelude";
                                                setLineNumber(16);    // compilenode identifier
                                                obj1829.superobj = GraceFalse;
                                                if (GraceFalse.data) obj1829.data = GraceFalse.data;
                                                if (GraceFalse.hasOwnProperty('_value'))
                                                    obj1829._value = GraceFalse._value;
                                                superDepth = origSuperDepth;
                                              };
                                              obj_init_1829.apply(obj1829, []);
                                              return obj1829;
                                            };
                                            func1828.paramCounts = [1];
                                            obj1826.methods["new(1)"] = func1828;
                                            func1828.definitionLine = 15;
                                            func1828.definitionModule = "StandardPrelude";
                                              var func1844 = function(argcv) {    // method new(_)$object(_)
                                                var curarg = 1;
                                                var var_result__39__ = arguments[curarg];
                                                curarg++;
                                                var inheritingObject = arguments[curarg++];
                                                // Start argument processing
                                                curarg = 1;
                                                curarg++;
                                                // End argument processing
                                                setModuleName("StandardPrelude");
                                                var returnTarget = invocationCount;
                                                invocationCount++;
                                                var obj1845 = Grace_allocObject(null, "new(1)");
                                                obj1845.definitionModule = "StandardPrelude";
                                                obj1845.definitionLine = 15;
                                                var inho1845 = inheritingObject;
                                                while (inho1845.superobj) inho1845 = inho1845.superobj;
                                                inho1845.superobj = obj1845;
                                                obj1845.data = inheritingObject.data;
                                                if (inheritingObject.hasOwnProperty('_value'))
                                                  obj1845._value = inheritingObject._value;
                                                obj1845.outer = this;
                                                var reader_StandardPrelude_outer1846 = function() {
                                                  return this.outer;
                                                };
                                                obj1845.methods["outer"] = reader_StandardPrelude_outer1846;
                                                var obj_init_1845 = function() {
                                                  var origSuperDepth = superDepth;
                                                  superDepth = obj1845;
                                                  var func1847 = function(argcv) {    // method result
                                                    var returnTarget = invocationCount;
                                                    invocationCount++;
                                                    var curarg = 1;
                                                    setModuleName("StandardPrelude");
                                                    // result is a simple accessor - elide try ... catch
                                                    setLineNumber(17);    // compilenode identifier
                                                    return var_result__39__;
                                                  };
                                                  func1847.paramCounts = [0];
                                                  obj1845.methods["result"] = func1847;
                                                  func1847.definitionLine = 17;
                                                  func1847.definitionModule = "StandardPrelude";
                                                  var func1848 = function(argcv) {    // method bindings
                                                    var returnTarget = invocationCount;
                                                    invocationCount++;
                                                    var curarg = 1;
                                                    setModuleName("StandardPrelude");
                                                    // bindings is a simple accessor - elide try ... catch
                                                    setLineNumber(18);    // compilenode identifier
                                                    return var_emptySequence;
                                                  };
                                                  func1848.paramCounts = [0];
                                                  obj1845.methods["bindings"] = func1848;
                                                  func1848.definitionLine = 18;
                                                  func1848.definitionModule = "StandardPrelude";
                                                  var func1849 = function(argcv) {    // method asString
                                                    var returnTarget = invocationCount;
                                                    invocationCount++;
                                                    var curarg = 1;
                                                    setModuleName("StandardPrelude");
                                                    setLineNumber(20);    // compilenode string
                                                    var string1850 = new GraceString(")");
                                                    // call case 4: self request
                                                    onSelf = true;
                                                    var call1853 = callmethodChecked(this, "result", []);
                                                    var string1855 = new GraceString("FailedMatch(result = ");
                                                    var opresult1857 = callmethodChecked(string1855, "++(1)", [1], call1853);
                                                    var opresult1859 = callmethodChecked(opresult1857, "++(1)", [1], string1850);
                                                    return opresult1859;
                                                  };
                                                  func1849.paramCounts = [0];
                                                  obj1845.methods["asString"] = func1849;
                                                  func1849.definitionLine = 19;
                                                  func1849.definitionModule = "StandardPrelude";
                                                  setLineNumber(16);    // compilenode identifier
                                                  obj1845.superobj = GraceFalse;
                                                  if (GraceFalse.data) obj1845.data = GraceFalse.data;
                                                  if (GraceFalse.hasOwnProperty('_value'))
                                                      obj1845._value = GraceFalse._value;
                                                  superDepth = origSuperDepth;
                                                };
                                                obj_init_1845.apply(inheritingObject, []);
                                                return obj1845;
                                                };
                                                obj1826.methods["new(1)$object(1)"] = func1844;
                                              var func1860 = function(argcv) {    // method asString
                                                var returnTarget = invocationCount;
                                                invocationCount++;
                                                var curarg = 1;
                                                setModuleName("StandardPrelude");
                                                setLineNumber(15);    // compilenode string
                                                var string1861 = new GraceString("class FailedMatch");
                                                return string1861;
                                              };
                                              func1860.paramCounts = [0];
                                              obj1826.methods["asString"] = func1860;
                                              func1860.definitionLine = 15;
                                              func1860.definitionModule = "StandardPrelude";
                                              superDepth = origSuperDepth;
                                            };
                                            obj_init_1826.apply(obj1826, []);
                                            var var_FailedMatch = obj1826;
                                            setLineNumber(1);    // compilenode method
                                            var func1862 = function(argcv) {    // method FailedMatch
                                              var returnTarget = invocationCount;
                                              invocationCount++;
                                              var curarg = 1;
                                              setModuleName("StandardPrelude");
                                              // FailedMatch is a simple accessor - elide try ... catch
                                              setLineNumber(15);    // compilenode identifier
                                              return var_FailedMatch;
                                            };
                                            func1862.paramCounts = [0];
                                            this.methods["FailedMatch"] = func1862;
                                            func1862.definitionLine = 1;
                                            func1862.definitionModule = "StandardPrelude";
                                            this.methods["FailedMatch"].debug = "def";
                                            setLineNumber(71);    // compilenode object
                                            var obj1863 = Grace_allocObject(GraceObject, "BasicPattern");
                                            obj1863.definitionModule = "StandardPrelude";
                                            obj1863.definitionLine = 71;
                                            obj1863.outer = this;
                                            var reader_StandardPrelude_outer1864 = function() {
                                              return this.outer;
                                            };
                                            obj1863.methods["outer"] = reader_StandardPrelude_outer1864;
                                            var obj_init_1863 = function() {
                                              var origSuperDepth = superDepth;
                                              superDepth = obj1863;
                                              var func1865 = function(argcv) {    // method new
                                                var returnTarget = invocationCount;
                                                invocationCount++;
                                                var curarg = 1;
                                                setModuleName("StandardPrelude");
                                                var obj1866 = Grace_allocObject(GraceObject, "new");
                                                obj1866.definitionModule = "StandardPrelude";
                                                obj1866.definitionLine = 71;
                                                obj1866.outer = this;
                                                var reader_StandardPrelude_outer1867 = function() {
                                                  return this.outer;
                                                };
                                                obj1866.methods["outer"] = reader_StandardPrelude_outer1867;
                                                var obj_init_1866 = function() {
                                                  var origSuperDepth = superDepth;
                                                  superDepth = obj1866;
                                                  var func1868 = function(argcv) {    // method &(_)
                                                    var returnTarget = invocationCount;
                                                    invocationCount++;
                                                    var curarg = 1;
                                                    var var_o = arguments[curarg];
                                                    curarg++;
                                                    setModuleName("StandardPrelude");
                                                    setLineNumber(73);    // compilenode identifier
                                                    // call case 6: other requests
                                                    var call1870 = callmethodChecked(var_AndPattern, "new(2)", [2], this, var_o);
                                                    return call1870;
                                                  };
                                                  func1868.paramCounts = [1];
                                                  obj1866.methods["&(1)"] = func1868;
                                                  func1868.definitionLine = 72;
                                                  func1868.definitionModule = "StandardPrelude";
                                                  var func1871 = function(argcv) {    // method |(_)
                                                    var returnTarget = invocationCount;
                                                    invocationCount++;
                                                    var curarg = 1;
                                                    var var_o = arguments[curarg];
                                                    curarg++;
                                                    setModuleName("StandardPrelude");
                                                    setLineNumber(76);    // compilenode identifier
                                                    // call case 6: other requests
                                                    var call1873 = callmethodChecked(var_OrPattern, "new(2)", [2], this, var_o);
                                                    return call1873;
                                                  };
                                                  func1871.paramCounts = [1];
                                                  obj1866.methods["|(1)"] = func1871;
                                                  func1871.definitionLine = 75;
                                                  func1871.definitionModule = "StandardPrelude";
                                                  superDepth = origSuperDepth;
                                                };
                                                obj_init_1866.apply(obj1866, []);
                                                return obj1866;
                                              };
                                              func1865.paramCounts = [0];
                                              obj1863.methods["new"] = func1865;
                                              func1865.definitionLine = 71;
                                              func1865.definitionModule = "StandardPrelude";
                                                var func1874 = function(argcv) {    // method new$object(_)
                                                  var curarg = 1;
                                                  var inheritingObject = arguments[curarg++];
                                                  // Start argument processing
                                                  curarg = 1;
                                                  // End argument processing
                                                  setModuleName("StandardPrelude");
                                                  var returnTarget = invocationCount;
                                                  invocationCount++;
                                                  var obj1875 = Grace_allocObject(GraceObject, "new");
                                                  obj1875.definitionModule = "StandardPrelude";
                                                  obj1875.definitionLine = 71;
                                                  var inho1875 = inheritingObject;
                                                  while (inho1875.superobj) inho1875 = inho1875.superobj;
                                                  inho1875.superobj = obj1875;
                                                  obj1875.data = inheritingObject.data;
                                                  if (inheritingObject.hasOwnProperty('_value'))
                                                    obj1875._value = inheritingObject._value;
                                                  obj1875.outer = this;
                                                  var reader_StandardPrelude_outer1876 = function() {
                                                    return this.outer;
                                                  };
                                                  obj1875.methods["outer"] = reader_StandardPrelude_outer1876;
                                                  var obj_init_1875 = function() {
                                                    var origSuperDepth = superDepth;
                                                    superDepth = obj1875;
                                                    var func1877 = function(argcv) {    // method &(_)
                                                      var returnTarget = invocationCount;
                                                      invocationCount++;
                                                      var curarg = 1;
                                                      var var_o = arguments[curarg];
                                                      curarg++;
                                                      setModuleName("StandardPrelude");
                                                      setLineNumber(73);    // compilenode identifier
                                                      // call case 6: other requests
                                                      var call1879 = callmethodChecked(var_AndPattern, "new(2)", [2], this, var_o);
                                                      return call1879;
                                                    };
                                                    func1877.paramCounts = [1];
                                                    obj1875.methods["&(1)"] = func1877;
                                                    func1877.definitionLine = 72;
                                                    func1877.definitionModule = "StandardPrelude";
                                                    var func1880 = function(argcv) {    // method |(_)
                                                      var returnTarget = invocationCount;
                                                      invocationCount++;
                                                      var curarg = 1;
                                                      var var_o = arguments[curarg];
                                                      curarg++;
                                                      setModuleName("StandardPrelude");
                                                      setLineNumber(76);    // compilenode identifier
                                                      // call case 6: other requests
                                                      var call1882 = callmethodChecked(var_OrPattern, "new(2)", [2], this, var_o);
                                                      return call1882;
                                                    };
                                                    func1880.paramCounts = [1];
                                                    obj1875.methods["|(1)"] = func1880;
                                                    func1880.definitionLine = 75;
                                                    func1880.definitionModule = "StandardPrelude";
                                                    superDepth = origSuperDepth;
                                                  };
                                                  obj_init_1875.apply(inheritingObject, []);
                                                  return obj1875;
                                                  };
                                                  obj1863.methods["new$object(1)"] = func1874;
                                                var func1883 = function(argcv) {    // method asString
                                                  var returnTarget = invocationCount;
                                                  invocationCount++;
                                                  var curarg = 1;
                                                  setModuleName("StandardPrelude");
                                                  setLineNumber(71);    // compilenode string
                                                  var string1884 = new GraceString("class BasicPattern");
                                                  return string1884;
                                                };
                                                func1883.paramCounts = [0];
                                                obj1863.methods["asString"] = func1883;
                                                func1883.definitionLine = 71;
                                                func1883.definitionModule = "StandardPrelude";
                                                superDepth = origSuperDepth;
                                              };
                                              obj_init_1863.apply(obj1863, []);
                                              var var_BasicPattern = obj1863;
                                              setLineNumber(1);    // compilenode method
                                              var func1885 = function(argcv) {    // method BasicPattern
                                                var returnTarget = invocationCount;
                                                invocationCount++;
                                                var curarg = 1;
                                                setModuleName("StandardPrelude");
                                                // BasicPattern is a simple accessor - elide try ... catch
                                                setLineNumber(71);    // compilenode identifier
                                                return var_BasicPattern;
                                              };
                                              func1885.paramCounts = [0];
                                              this.methods["BasicPattern"] = func1885;
                                              func1885.definitionLine = 1;
                                              func1885.definitionModule = "StandardPrelude";
                                              this.methods["BasicPattern"].debug = "def";
                                              setLineNumber(79);    // compilenode object
                                              var obj1886 = Grace_allocObject(GraceObject, "MatchAndDestructuringPattern");
                                              obj1886.definitionModule = "StandardPrelude";
                                              obj1886.definitionLine = 79;
                                              obj1886.outer = this;
                                              var reader_StandardPrelude_outer1887 = function() {
                                                return this.outer;
                                              };
                                              obj1886.methods["outer"] = reader_StandardPrelude_outer1887;
                                              var obj_init_1886 = function() {
                                                var origSuperDepth = superDepth;
                                                superDepth = obj1886;
                                                var func1888 = function(argcv) {    // method new(_,_)
                                                  var returnTarget = invocationCount;
                                                  invocationCount++;
                                                  var curarg = 1;
                                                  var var_pat = arguments[curarg];
                                                  curarg++;
                                                  var var_items__39__ = arguments[curarg];
                                                  curarg++;
                                                  setModuleName("StandardPrelude");
                                                  var obj1889 = Grace_allocObject(null, "new(2)");
                                                  obj1889.definitionModule = "StandardPrelude";
                                                  obj1889.definitionLine = 79;
                                                  obj1889.outer = this;
                                                  var reader_StandardPrelude_outer1890 = function() {
                                                    return this.outer;
                                                  };
                                                  obj1889.methods["outer"] = reader_StandardPrelude_outer1890;
                                                  var obj_init_1889 = function() {
                                                    var origSuperDepth = superDepth;
                                                    superDepth = obj1889;
                                                    var func1891 = function(argcv) {    // method match(_)
                                                      var returnTarget = invocationCount;
                                                      invocationCount++;
                                                      var curarg = 1;
                                                      var var_o = arguments[curarg];
                                                      curarg++;
                                                      setModuleName("StandardPrelude");
                                                      setLineNumber(84);    // compilenode identifier
                                                      // call case 6: other requests
                                                      var call1893 = callmethodChecked(var_pat, "match(1)", [1], var_o);
                                                      var var_m = call1893;
                                                      var if1894 = GraceDone;
                                                      setLineNumber(85);    // compilenode identifier
                                                      if (Grace_isTrue(var_m)) {
                                                        setLineNumber(86);    // compilenode member
                                                        // call case 6: other requests
                                                        var call1896 = callmethodChecked(var_m, "bindings", []);
                                                        var var_mbindings = call1896;
                                                        setLineNumber(87);    // compilenode array
                                                        var array1897 = new PrimitiveGraceList([]);
                                                        var var_bindings = array1897;
                                                        var if1898 = GraceDone;
                                                        setLineNumber(88);    // compilenode member
                                                        // call case 6: other requests
                                                        // call case 4: self request
                                                        onSelf = true;
                                                        var call1901 = callmethodChecked(this, "items", []);
                                                        var call1902 = callmethodChecked(call1901, "size", []);
                                                        // call case 6: other requests
                                                        var call1905 = callmethodChecked(var_mbindings, "size", []);
                                                        var opresult1907 = callmethodChecked(call1905, "<(1)", [1], call1902);
                                                        if (Grace_isTrue(opresult1907)) {
                                                          var if1908 = GraceDone;
                                                          setLineNumber(89);    // compilenode identifier
                                                          // call case 6: other requests
                                                          var call1910 = callmethodChecked(var_Extractable, "match(1)", [1], var_o);
                                                          if (Grace_isTrue(call1910)) {
                                                            setLineNumber(90);    // compilenode member
                                                            // call case 6: other requests
                                                            var call1912 = callmethodChecked(var_o, "extract", []);
                                                            var_mbindings = call1912;
                                                            if1908 = GraceDone;
                                                          } else {
                                                            setLineNumber(92);    // compilenode identifier
                                                            // call case 6: other requests
                                                            var call1914 = callmethodChecked(var_FailedMatch, "new(1)", [1], var_o);
                                                            return call1914;
                                                          }
                                                          if1898 = if1908;
                                                        }
                                                        setLineNumber(95);    // compilenode member
                                                        // call case 6: other requests
                                                        // call case 4: self request
                                                        onSelf = true;
                                                        var call1918 = callmethodChecked(this, "items", []);
                                                        var call1919 = callmethodChecked(call1918, "indices", []);
                                                        var block1920 = new GraceBlock(this, 95, 1);
                                                        setLineNumber(1);    // compilenode identifier
                                                        block1920.real = function(var_i) {
                                                          setLineNumber(96);    // compilenode identifier
                                                          // call case 6: other requests
                                                          var call1923 = callmethodChecked(var_mbindings, "at(1)", [1], var_i);
                                                          // call case 6: other requests
                                                          // call case 6: other requests
                                                          // call case 4: self request
                                                          onSelf = true;
                                                          var call1926 = callmethodChecked(this, "items", []);
                                                          var call1927 = callmethodChecked(call1926, "at(1)", [1], var_i);
                                                          var call1928 = callmethodChecked(call1927, "match(1)", [1], call1923);
                                                          var var_b = call1928;
                                                          var if1929 = GraceDone;
                                                          setLineNumber(97);    // compilenode call
                                                          // call case 6: other requests
                                                          var call1931 = callmethodChecked(var_b, "prefix!", [0]);
                                                          if (Grace_isTrue(call1931)) {
                                                            setLineNumber(98);    // compilenode identifier
                                                            // call case 6: other requests
                                                            var call1933 = callmethodChecked(var_FailedMatch, "new(1)", [1], var_o);
                                                            throw new ReturnException(call1933, returnTarget);
                                                          }
                                                          setLineNumber(100);    // compilenode member
                                                          // call case 6: other requests
                                                          var call1936 = callmethodChecked(var_b, "bindings", []);
                                                          var block1937 = new GraceBlock(this, 100, 1);
                                                          setLineNumber(1);    // compilenode identifier
                                                          block1937.real = function(var_bb) {
                                                            setLineNumber(101);    // compilenode identifier
                                                            // call case 6: other requests
                                                            var call1939 = callmethodChecked(var_bindings, "push(1)", [1], var_bb);
                                                            return call1939;
                                                          };
                                                          // call case 5: prelude request
                                                          var call1940 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1936, block1937);
                                                          return call1940;
                                                        };
                                                        // call case 5: prelude request
                                                        var call1941 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1919, block1920);
                                                        setLineNumber(104);    // compilenode identifier
                                                        // call case 6: other requests
                                                        var call1943 = callmethodChecked(var_SuccessfulMatch, "new(2)", [2], var_o, var_bindings);
                                                        if1894 = call1943;
                                                      } else {
                                                        setLineNumber(106);    // compilenode identifier
                                                        // call case 6: other requests
                                                        var call1945 = callmethodChecked(var_FailedMatch, "new(1)", [1], var_o);
                                                        if1894 = call1945;
                                                      }
                                                      return if1894;
                                                    };
                                                    func1891.paramCounts = [1];
                                                    obj1889.methods["match(1)"] = func1891;
                                                    func1891.definitionLine = 83;
                                                    func1891.definitionModule = "StandardPrelude";
                                                    setLineNumber(80);    // compilenode identifier
                                                    // call case 6: other requests
                                                    var call1947 = callmethodChecked(var_BasicPattern, "new$object(1)", [0, 1], this);
                                                    obj1889.superobj = call1947;
                                                    if (call1947.data) obj1889.data = call1947.data;
                                                    if (call1947.hasOwnProperty('_value'))
                                                        obj1889._value = call1947._value;
                                                    setLineNumber(81);    // compilenode identifier
                                                    obj1889.data["pattern"] = var_pat;
                                                    var reader_StandardPrelude_pattern1948 = function() {
                                                      return this.data["pattern"];
                                                    };
                                                    reader_StandardPrelude_pattern1948.def = true;
                                                    reader_StandardPrelude_pattern1948.confidential = true;
                                                    obj1889.methods["pattern"] = reader_StandardPrelude_pattern1948;
                                                    setLineNumber(82);    // compilenode identifier
                                                    obj1889.data["items"] = var_items__39__;
                                                    var reader_StandardPrelude_items1949 = function() {
                                                      return this.data["items"];
                                                    };
                                                    reader_StandardPrelude_items1949.def = true;
                                                    reader_StandardPrelude_items1949.confidential = true;
                                                    obj1889.methods["items"] = reader_StandardPrelude_items1949;
                                                    superDepth = origSuperDepth;
                                                  };
                                                  obj_init_1889.apply(obj1889, []);
                                                  return obj1889;
                                                };
                                                func1888.paramCounts = [2];
                                                obj1886.methods["new(2)"] = func1888;
                                                func1888.definitionLine = 79;
                                                func1888.definitionModule = "StandardPrelude";
                                                  var func1950 = function(argcv) {    // method new(_,_)$object(_)
                                                    var curarg = 1;
                                                    var var_pat = arguments[curarg];
                                                    curarg++;
                                                    var var_items__39__ = arguments[curarg];
                                                    curarg++;
                                                    var inheritingObject = arguments[curarg++];
                                                    // Start argument processing
                                                    curarg = 1;
                                                    curarg++;
                                                    curarg++;
                                                    // End argument processing
                                                    setModuleName("StandardPrelude");
                                                    var returnTarget = invocationCount;
                                                    invocationCount++;
                                                    var obj1951 = Grace_allocObject(null, "new(2)");
                                                    obj1951.definitionModule = "StandardPrelude";
                                                    obj1951.definitionLine = 79;
                                                    var inho1951 = inheritingObject;
                                                    while (inho1951.superobj) inho1951 = inho1951.superobj;
                                                    inho1951.superobj = obj1951;
                                                    obj1951.data = inheritingObject.data;
                                                    if (inheritingObject.hasOwnProperty('_value'))
                                                      obj1951._value = inheritingObject._value;
                                                    obj1951.outer = this;
                                                    var reader_StandardPrelude_outer1952 = function() {
                                                      return this.outer;
                                                    };
                                                    obj1951.methods["outer"] = reader_StandardPrelude_outer1952;
                                                    var obj_init_1951 = function() {
                                                      var origSuperDepth = superDepth;
                                                      superDepth = obj1951;
                                                      var func1953 = function(argcv) {    // method match(_)
                                                        var returnTarget = invocationCount;
                                                        invocationCount++;
                                                        var curarg = 1;
                                                        var var_o = arguments[curarg];
                                                        curarg++;
                                                        setModuleName("StandardPrelude");
                                                        setLineNumber(84);    // compilenode identifier
                                                        // call case 6: other requests
                                                        var call1955 = callmethodChecked(var_pat, "match(1)", [1], var_o);
                                                        var var_m = call1955;
                                                        var if1956 = GraceDone;
                                                        setLineNumber(85);    // compilenode identifier
                                                        if (Grace_isTrue(var_m)) {
                                                          setLineNumber(86);    // compilenode member
                                                          // call case 6: other requests
                                                          var call1958 = callmethodChecked(var_m, "bindings", []);
                                                          var var_mbindings = call1958;
                                                          setLineNumber(87);    // compilenode array
                                                          var array1959 = new PrimitiveGraceList([]);
                                                          var var_bindings = array1959;
                                                          var if1960 = GraceDone;
                                                          setLineNumber(88);    // compilenode member
                                                          // call case 6: other requests
                                                          // call case 4: self request
                                                          onSelf = true;
                                                          var call1963 = callmethodChecked(this, "items", []);
                                                          var call1964 = callmethodChecked(call1963, "size", []);
                                                          // call case 6: other requests
                                                          var call1967 = callmethodChecked(var_mbindings, "size", []);
                                                          var opresult1969 = callmethodChecked(call1967, "<(1)", [1], call1964);
                                                          if (Grace_isTrue(opresult1969)) {
                                                            var if1970 = GraceDone;
                                                            setLineNumber(89);    // compilenode identifier
                                                            // call case 6: other requests
                                                            var call1972 = callmethodChecked(var_Extractable, "match(1)", [1], var_o);
                                                            if (Grace_isTrue(call1972)) {
                                                              setLineNumber(90);    // compilenode member
                                                              // call case 6: other requests
                                                              var call1974 = callmethodChecked(var_o, "extract", []);
                                                              var_mbindings = call1974;
                                                              if1970 = GraceDone;
                                                            } else {
                                                              setLineNumber(92);    // compilenode identifier
                                                              // call case 6: other requests
                                                              var call1976 = callmethodChecked(var_FailedMatch, "new(1)", [1], var_o);
                                                              return call1976;
                                                            }
                                                            if1960 = if1970;
                                                          }
                                                          setLineNumber(95);    // compilenode member
                                                          // call case 6: other requests
                                                          // call case 4: self request
                                                          onSelf = true;
                                                          var call1980 = callmethodChecked(this, "items", []);
                                                          var call1981 = callmethodChecked(call1980, "indices", []);
                                                          var block1982 = new GraceBlock(this, 95, 1);
                                                          setLineNumber(1);    // compilenode identifier
                                                          block1982.real = function(var_i) {
                                                            setLineNumber(96);    // compilenode identifier
                                                            // call case 6: other requests
                                                            var call1985 = callmethodChecked(var_mbindings, "at(1)", [1], var_i);
                                                            // call case 6: other requests
                                                            // call case 6: other requests
                                                            // call case 4: self request
                                                            onSelf = true;
                                                            var call1988 = callmethodChecked(this, "items", []);
                                                            var call1989 = callmethodChecked(call1988, "at(1)", [1], var_i);
                                                            var call1990 = callmethodChecked(call1989, "match(1)", [1], call1985);
                                                            var var_b = call1990;
                                                            var if1991 = GraceDone;
                                                            setLineNumber(97);    // compilenode call
                                                            // call case 6: other requests
                                                            var call1993 = callmethodChecked(var_b, "prefix!", [0]);
                                                            if (Grace_isTrue(call1993)) {
                                                              setLineNumber(98);    // compilenode identifier
                                                              // call case 6: other requests
                                                              var call1995 = callmethodChecked(var_FailedMatch, "new(1)", [1], var_o);
                                                              throw new ReturnException(call1995, returnTarget);
                                                            }
                                                            setLineNumber(100);    // compilenode member
                                                            // call case 6: other requests
                                                            var call1998 = callmethodChecked(var_b, "bindings", []);
                                                            var block1999 = new GraceBlock(this, 100, 1);
                                                            setLineNumber(1);    // compilenode identifier
                                                            block1999.real = function(var_bb) {
                                                              setLineNumber(101);    // compilenode identifier
                                                              // call case 6: other requests
                                                              var call2001 = callmethodChecked(var_bindings, "push(1)", [1], var_bb);
                                                              return call2001;
                                                            };
                                                            // call case 5: prelude request
                                                            var call2002 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1998, block1999);
                                                            return call2002;
                                                          };
                                                          // call case 5: prelude request
                                                          var call2003 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1981, block1982);
                                                          setLineNumber(104);    // compilenode identifier
                                                          // call case 6: other requests
                                                          var call2005 = callmethodChecked(var_SuccessfulMatch, "new(2)", [2], var_o, var_bindings);
                                                          if1956 = call2005;
                                                        } else {
                                                          setLineNumber(106);    // compilenode identifier
                                                          // call case 6: other requests
                                                          var call2007 = callmethodChecked(var_FailedMatch, "new(1)", [1], var_o);
                                                          if1956 = call2007;
                                                        }
                                                        return if1956;
                                                      };
                                                      func1953.paramCounts = [1];
                                                      obj1951.methods["match(1)"] = func1953;
                                                      func1953.definitionLine = 83;
                                                      func1953.definitionModule = "StandardPrelude";
                                                      setLineNumber(80);    // compilenode identifier
                                                      // call case 6: other requests
                                                      var call2009 = callmethodChecked(var_BasicPattern, "new$object(1)", [0, 1], this);
                                                      obj1951.superobj = call2009;
                                                      if (call2009.data) obj1951.data = call2009.data;
                                                      if (call2009.hasOwnProperty('_value'))
                                                          obj1951._value = call2009._value;
                                                      setLineNumber(81);    // compilenode identifier
                                                      obj1951.data["pattern"] = var_pat;
                                                      var reader_StandardPrelude_pattern2010 = function() {
                                                        return this.data["pattern"];
                                                      };
                                                      reader_StandardPrelude_pattern2010.def = true;
                                                      reader_StandardPrelude_pattern2010.confidential = true;
                                                      obj1951.methods["pattern"] = reader_StandardPrelude_pattern2010;
                                                      setLineNumber(82);    // compilenode identifier
                                                      obj1951.data["items"] = var_items__39__;
                                                      var reader_StandardPrelude_items2011 = function() {
                                                        return this.data["items"];
                                                      };
                                                      reader_StandardPrelude_items2011.def = true;
                                                      reader_StandardPrelude_items2011.confidential = true;
                                                      obj1951.methods["items"] = reader_StandardPrelude_items2011;
                                                      superDepth = origSuperDepth;
                                                    };
                                                    obj_init_1951.apply(inheritingObject, []);
                                                    return obj1951;
                                                    };
                                                    obj1886.methods["new(2)$object(1)"] = func1950;
                                                  var func2012 = function(argcv) {    // method asString
                                                    var returnTarget = invocationCount;
                                                    invocationCount++;
                                                    var curarg = 1;
                                                    setModuleName("StandardPrelude");
                                                    setLineNumber(79);    // compilenode string
                                                    var string2013 = new GraceString("class MatchAndDestructuringPattern");
                                                    return string2013;
                                                  };
                                                  func2012.paramCounts = [0];
                                                  obj1886.methods["asString"] = func2012;
                                                  func2012.definitionLine = 79;
                                                  func2012.definitionModule = "StandardPrelude";
                                                  superDepth = origSuperDepth;
                                                };
                                                obj_init_1886.apply(obj1886, []);
                                                var var_MatchAndDestructuringPattern = obj1886;
                                                setLineNumber(1);    // compilenode method
                                                var func2014 = function(argcv) {    // method MatchAndDestructuringPattern
                                                  var returnTarget = invocationCount;
                                                  invocationCount++;
                                                  var curarg = 1;
                                                  setModuleName("StandardPrelude");
                                                  // MatchAndDestructuringPattern is a simple accessor - elide try ... catch
                                                  setLineNumber(79);    // compilenode identifier
                                                  return var_MatchAndDestructuringPattern;
                                                };
                                                func2014.paramCounts = [0];
                                                this.methods["MatchAndDestructuringPattern"] = func2014;
                                                func2014.definitionLine = 1;
                                                func2014.definitionModule = "StandardPrelude";
                                                this.methods["MatchAndDestructuringPattern"].debug = "def";
                                                setLineNumber(111);    // compilenode object
                                                var obj2015 = Grace_allocObject(GraceObject, "VariablePattern");
                                                obj2015.definitionModule = "StandardPrelude";
                                                obj2015.definitionLine = 111;
                                                obj2015.outer = this;
                                                var reader_StandardPrelude_outer2016 = function() {
                                                  return this.outer;
                                                };
                                                obj2015.methods["outer"] = reader_StandardPrelude_outer2016;
                                                var obj_init_2015 = function() {
                                                  var origSuperDepth = superDepth;
                                                  superDepth = obj2015;
                                                  var func2017 = function(argcv) {    // method new(_)
                                                    var returnTarget = invocationCount;
                                                    invocationCount++;
                                                    var curarg = 1;
                                                    var var_nm = arguments[curarg];
                                                    curarg++;
                                                    setModuleName("StandardPrelude");
                                                    var obj2018 = Grace_allocObject(null, "new(1)");
                                                    obj2018.definitionModule = "StandardPrelude";
                                                    obj2018.definitionLine = 111;
                                                    obj2018.outer = this;
                                                    var reader_StandardPrelude_outer2019 = function() {
                                                      return this.outer;
                                                    };
                                                    obj2018.methods["outer"] = reader_StandardPrelude_outer2019;
                                                    var obj_init_2018 = function() {
                                                      var origSuperDepth = superDepth;
                                                      superDepth = obj2018;
                                                      var func2020 = function(argcv) {    // method match(_)
                                                        var returnTarget = invocationCount;
                                                        invocationCount++;
                                                        var curarg = 1;
                                                        var var_o = arguments[curarg];
                                                        curarg++;
                                                        setModuleName("StandardPrelude");
                                                        setLineNumber(114);    // compilenode identifier
                                                        var array2022 = new PrimitiveGraceList([var_o]);
                                                        // call case 6: other requests
                                                        var call2023 = callmethodChecked(var_SuccessfulMatch, "new(2)", [2], var_o, array2022);
                                                        return call2023;
                                                      };
                                                      func2020.paramCounts = [1];
                                                      obj2018.methods["match(1)"] = func2020;
                                                      func2020.definitionLine = 113;
                                                      func2020.definitionModule = "StandardPrelude";
                                                      setLineNumber(112);    // compilenode identifier
                                                      // call case 6: other requests
                                                      var call2025 = callmethodChecked(var_BasicPattern, "new$object(1)", [0, 1], this);
                                                      obj2018.superobj = call2025;
                                                      if (call2025.data) obj2018.data = call2025.data;
                                                      if (call2025.hasOwnProperty('_value'))
                                                          obj2018._value = call2025._value;
                                                      superDepth = origSuperDepth;
                                                    };
                                                    obj_init_2018.apply(obj2018, []);
                                                    return obj2018;
                                                  };
                                                  func2017.paramCounts = [1];
                                                  obj2015.methods["new(1)"] = func2017;
                                                  func2017.definitionLine = 111;
                                                  func2017.definitionModule = "StandardPrelude";
                                                    var func2026 = function(argcv) {    // method new(_)$object(_)
                                                      var curarg = 1;
                                                      var var_nm = arguments[curarg];
                                                      curarg++;
                                                      var inheritingObject = arguments[curarg++];
                                                      // Start argument processing
                                                      curarg = 1;
                                                      curarg++;
                                                      // End argument processing
                                                      setModuleName("StandardPrelude");
                                                      var returnTarget = invocationCount;
                                                      invocationCount++;
                                                      var obj2027 = Grace_allocObject(null, "new(1)");
                                                      obj2027.definitionModule = "StandardPrelude";
                                                      obj2027.definitionLine = 111;
                                                      var inho2027 = inheritingObject;
                                                      while (inho2027.superobj) inho2027 = inho2027.superobj;
                                                      inho2027.superobj = obj2027;
                                                      obj2027.data = inheritingObject.data;
                                                      if (inheritingObject.hasOwnProperty('_value'))
                                                        obj2027._value = inheritingObject._value;
                                                      obj2027.outer = this;
                                                      var reader_StandardPrelude_outer2028 = function() {
                                                        return this.outer;
                                                      };
                                                      obj2027.methods["outer"] = reader_StandardPrelude_outer2028;
                                                      var obj_init_2027 = function() {
                                                        var origSuperDepth = superDepth;
                                                        superDepth = obj2027;
                                                        var func2029 = function(argcv) {    // method match(_)
                                                          var returnTarget = invocationCount;
                                                          invocationCount++;
                                                          var curarg = 1;
                                                          var var_o = arguments[curarg];
                                                          curarg++;
                                                          setModuleName("StandardPrelude");
                                                          setLineNumber(114);    // compilenode identifier
                                                          var array2031 = new PrimitiveGraceList([var_o]);
                                                          // call case 6: other requests
                                                          var call2032 = callmethodChecked(var_SuccessfulMatch, "new(2)", [2], var_o, array2031);
                                                          return call2032;
                                                        };
                                                        func2029.paramCounts = [1];
                                                        obj2027.methods["match(1)"] = func2029;
                                                        func2029.definitionLine = 113;
                                                        func2029.definitionModule = "StandardPrelude";
                                                        setLineNumber(112);    // compilenode identifier
                                                        // call case 6: other requests
                                                        var call2034 = callmethodChecked(var_BasicPattern, "new$object(1)", [0, 1], this);
                                                        obj2027.superobj = call2034;
                                                        if (call2034.data) obj2027.data = call2034.data;
                                                        if (call2034.hasOwnProperty('_value'))
                                                            obj2027._value = call2034._value;
                                                        superDepth = origSuperDepth;
                                                      };
                                                      obj_init_2027.apply(inheritingObject, []);
                                                      return obj2027;
                                                      };
                                                      obj2015.methods["new(1)$object(1)"] = func2026;
                                                    var func2035 = function(argcv) {    // method asString
                                                      var returnTarget = invocationCount;
                                                      invocationCount++;
                                                      var curarg = 1;
                                                      setModuleName("StandardPrelude");
                                                      setLineNumber(111);    // compilenode string
                                                      var string2036 = new GraceString("class VariablePattern");
                                                      return string2036;
                                                    };
                                                    func2035.paramCounts = [0];
                                                    obj2015.methods["asString"] = func2035;
                                                    func2035.definitionLine = 111;
                                                    func2035.definitionModule = "StandardPrelude";
                                                    superDepth = origSuperDepth;
                                                  };
                                                  obj_init_2015.apply(obj2015, []);
                                                  var var_VariablePattern = obj2015;
                                                  setLineNumber(1);    // compilenode method
                                                  var func2037 = function(argcv) {    // method VariablePattern
                                                    var returnTarget = invocationCount;
                                                    invocationCount++;
                                                    var curarg = 1;
                                                    setModuleName("StandardPrelude");
                                                    // VariablePattern is a simple accessor - elide try ... catch
                                                    setLineNumber(111);    // compilenode identifier
                                                    return var_VariablePattern;
                                                  };
                                                  func2037.paramCounts = [0];
                                                  this.methods["VariablePattern"] = func2037;
                                                  func2037.definitionLine = 1;
                                                  func2037.definitionModule = "StandardPrelude";
                                                  this.methods["VariablePattern"].debug = "def";
                                                  setLineNumber(118);    // compilenode object
                                                  var obj2038 = Grace_allocObject(GraceObject, "BindingPattern");
                                                  obj2038.definitionModule = "StandardPrelude";
                                                  obj2038.definitionLine = 118;
                                                  obj2038.outer = this;
                                                  var reader_StandardPrelude_outer2039 = function() {
                                                    return this.outer;
                                                  };
                                                  obj2038.methods["outer"] = reader_StandardPrelude_outer2039;
                                                  var obj_init_2038 = function() {
                                                    var origSuperDepth = superDepth;
                                                    superDepth = obj2038;
                                                    var func2040 = function(argcv) {    // method new(_)
                                                      var returnTarget = invocationCount;
                                                      invocationCount++;
                                                      var curarg = 1;
                                                      var var_pat = arguments[curarg];
                                                      curarg++;
                                                      setModuleName("StandardPrelude");
                                                      var obj2041 = Grace_allocObject(null, "new(1)");
                                                      obj2041.definitionModule = "StandardPrelude";
                                                      obj2041.definitionLine = 118;
                                                      obj2041.outer = this;
                                                      var reader_StandardPrelude_outer2042 = function() {
                                                        return this.outer;
                                                      };
                                                      obj2041.methods["outer"] = reader_StandardPrelude_outer2042;
                                                      var obj_init_2041 = function() {
                                                        var origSuperDepth = superDepth;
                                                        superDepth = obj2041;
                                                        var func2043 = function(argcv) {    // method match(_)
                                                          var returnTarget = invocationCount;
                                                          invocationCount++;
                                                          var curarg = 1;
                                                          var var_o = arguments[curarg];
                                                          curarg++;
                                                          setModuleName("StandardPrelude");
                                                          setLineNumber(121);    // compilenode identifier
                                                          var array2044 = new PrimitiveGraceList([var_o]);
                                                          var var_bindings = array2044;
                                                          setLineNumber(122);    // compilenode identifier
                                                          // call case 6: other requests
                                                          var call2046 = callmethodChecked(var_pat, "match(1)", [1], var_o);
                                                          var var_m = call2046;
                                                          var if2047 = GraceDone;
                                                          setLineNumber(123);    // compilenode call
                                                          // call case 6: other requests
                                                          var call2049 = callmethodChecked(var_m, "prefix!", [0]);
                                                          if (Grace_isTrue(call2049)) {
                                                            setLineNumber(124);    // compilenode identifier
                                                            return var_m;
                                                          }
                                                          setLineNumber(126);    // compilenode member
                                                          // call case 6: other requests
                                                          var call2052 = callmethodChecked(var_m, "bindings", []);
                                                          var block2053 = new GraceBlock(this, 126, 1);
                                                          setLineNumber(1);    // compilenode identifier
                                                          block2053.real = function(var_b) {
                                                            setLineNumber(127);    // compilenode identifier
                                                            // call case 6: other requests
                                                            var call2055 = callmethodChecked(var_bindings, "push(1)", [1], var_b);
                                                            return call2055;
                                                          };
                                                          // call case 5: prelude request
                                                          var call2056 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call2052, block2053);
                                                          setLineNumber(129);    // compilenode identifier
                                                          // call case 6: other requests
                                                          var call2058 = callmethodChecked(var_SuccessfulMatch, "new(2)", [2], var_o, var_bindings);
                                                          return call2058;
                                                        };
                                                        func2043.paramCounts = [1];
                                                        obj2041.methods["match(1)"] = func2043;
                                                        func2043.definitionLine = 120;
                                                        func2043.definitionModule = "StandardPrelude";
                                                        setLineNumber(119);    // compilenode identifier
                                                        // call case 6: other requests
                                                        var call2060 = callmethodChecked(var_BasicPattern, "new$object(1)", [0, 1], this);
                                                        obj2041.superobj = call2060;
                                                        if (call2060.data) obj2041.data = call2060.data;
                                                        if (call2060.hasOwnProperty('_value'))
                                                            obj2041._value = call2060._value;
                                                        superDepth = origSuperDepth;
                                                      };
                                                      obj_init_2041.apply(obj2041, []);
                                                      return obj2041;
                                                    };
                                                    func2040.paramCounts = [1];
                                                    obj2038.methods["new(1)"] = func2040;
                                                    func2040.definitionLine = 118;
                                                    func2040.definitionModule = "StandardPrelude";
                                                      var func2061 = function(argcv) {    // method new(_)$object(_)
                                                        var curarg = 1;
                                                        var var_pat = arguments[curarg];
                                                        curarg++;
                                                        var inheritingObject = arguments[curarg++];
                                                        // Start argument processing
                                                        curarg = 1;
                                                        curarg++;
                                                        // End argument processing
                                                        setModuleName("StandardPrelude");
                                                        var returnTarget = invocationCount;
                                                        invocationCount++;
                                                        var obj2062 = Grace_allocObject(null, "new(1)");
                                                        obj2062.definitionModule = "StandardPrelude";
                                                        obj2062.definitionLine = 118;
                                                        var inho2062 = inheritingObject;
                                                        while (inho2062.superobj) inho2062 = inho2062.superobj;
                                                        inho2062.superobj = obj2062;
                                                        obj2062.data = inheritingObject.data;
                                                        if (inheritingObject.hasOwnProperty('_value'))
                                                          obj2062._value = inheritingObject._value;
                                                        obj2062.outer = this;
                                                        var reader_StandardPrelude_outer2063 = function() {
                                                          return this.outer;
                                                        };
                                                        obj2062.methods["outer"] = reader_StandardPrelude_outer2063;
                                                        var obj_init_2062 = function() {
                                                          var origSuperDepth = superDepth;
                                                          superDepth = obj2062;
                                                          var func2064 = function(argcv) {    // method match(_)
                                                            var returnTarget = invocationCount;
                                                            invocationCount++;
                                                            var curarg = 1;
                                                            var var_o = arguments[curarg];
                                                            curarg++;
                                                            setModuleName("StandardPrelude");
                                                            setLineNumber(121);    // compilenode identifier
                                                            var array2065 = new PrimitiveGraceList([var_o]);
                                                            var var_bindings = array2065;
                                                            setLineNumber(122);    // compilenode identifier
                                                            // call case 6: other requests
                                                            var call2067 = callmethodChecked(var_pat, "match(1)", [1], var_o);
                                                            var var_m = call2067;
                                                            var if2068 = GraceDone;
                                                            setLineNumber(123);    // compilenode call
                                                            // call case 6: other requests
                                                            var call2070 = callmethodChecked(var_m, "prefix!", [0]);
                                                            if (Grace_isTrue(call2070)) {
                                                              setLineNumber(124);    // compilenode identifier
                                                              return var_m;
                                                            }
                                                            setLineNumber(126);    // compilenode member
                                                            // call case 6: other requests
                                                            var call2073 = callmethodChecked(var_m, "bindings", []);
                                                            var block2074 = new GraceBlock(this, 126, 1);
                                                            setLineNumber(1);    // compilenode identifier
                                                            block2074.real = function(var_b) {
                                                              setLineNumber(127);    // compilenode identifier
                                                              // call case 6: other requests
                                                              var call2076 = callmethodChecked(var_bindings, "push(1)", [1], var_b);
                                                              return call2076;
                                                            };
                                                            // call case 5: prelude request
                                                            var call2077 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call2073, block2074);
                                                            setLineNumber(129);    // compilenode identifier
                                                            // call case 6: other requests
                                                            var call2079 = callmethodChecked(var_SuccessfulMatch, "new(2)", [2], var_o, var_bindings);
                                                            return call2079;
                                                          };
                                                          func2064.paramCounts = [1];
                                                          obj2062.methods["match(1)"] = func2064;
                                                          func2064.definitionLine = 120;
                                                          func2064.definitionModule = "StandardPrelude";
                                                          setLineNumber(119);    // compilenode identifier
                                                          // call case 6: other requests
                                                          var call2081 = callmethodChecked(var_BasicPattern, "new$object(1)", [0, 1], this);
                                                          obj2062.superobj = call2081;
                                                          if (call2081.data) obj2062.data = call2081.data;
                                                          if (call2081.hasOwnProperty('_value'))
                                                              obj2062._value = call2081._value;
                                                          superDepth = origSuperDepth;
                                                        };
                                                        obj_init_2062.apply(inheritingObject, []);
                                                        return obj2062;
                                                        };
                                                        obj2038.methods["new(1)$object(1)"] = func2061;
                                                      var func2082 = function(argcv) {    // method asString
                                                        var returnTarget = invocationCount;
                                                        invocationCount++;
                                                        var curarg = 1;
                                                        setModuleName("StandardPrelude");
                                                        setLineNumber(118);    // compilenode string
                                                        var string2083 = new GraceString("class BindingPattern");
                                                        return string2083;
                                                      };
                                                      func2082.paramCounts = [0];
                                                      obj2038.methods["asString"] = func2082;
                                                      func2082.definitionLine = 118;
                                                      func2082.definitionModule = "StandardPrelude";
                                                      superDepth = origSuperDepth;
                                                    };
                                                    obj_init_2038.apply(obj2038, []);
                                                    var var_BindingPattern = obj2038;
                                                    setLineNumber(1);    // compilenode method
                                                    var func2084 = function(argcv) {    // method BindingPattern
                                                      var returnTarget = invocationCount;
                                                      invocationCount++;
                                                      var curarg = 1;
                                                      setModuleName("StandardPrelude");
                                                      // BindingPattern is a simple accessor - elide try ... catch
                                                      setLineNumber(118);    // compilenode identifier
                                                      return var_BindingPattern;
                                                    };
                                                    func2084.paramCounts = [0];
                                                    this.methods["BindingPattern"] = func2084;
                                                    func2084.definitionLine = 1;
                                                    func2084.definitionModule = "StandardPrelude";
                                                    this.methods["BindingPattern"].debug = "def";
                                                    setLineNumber(133);    // compilenode object
                                                    var obj2085 = Grace_allocObject(GraceObject, "WildcardPattern");
                                                    obj2085.definitionModule = "StandardPrelude";
                                                    obj2085.definitionLine = 133;
                                                    obj2085.outer = this;
                                                    var reader_StandardPrelude_outer2086 = function() {
                                                      return this.outer;
                                                    };
                                                    obj2085.methods["outer"] = reader_StandardPrelude_outer2086;
                                                    var obj_init_2085 = function() {
                                                      var origSuperDepth = superDepth;
                                                      superDepth = obj2085;
                                                      var func2087 = function(argcv) {    // method new
                                                        var returnTarget = invocationCount;
                                                        invocationCount++;
                                                        var curarg = 1;
                                                        setModuleName("StandardPrelude");
                                                        var obj2088 = Grace_allocObject(null, "new");
                                                        obj2088.definitionModule = "StandardPrelude";
                                                        obj2088.definitionLine = 133;
                                                        obj2088.outer = this;
                                                        var reader_StandardPrelude_outer2089 = function() {
                                                          return this.outer;
                                                        };
                                                        obj2088.methods["outer"] = reader_StandardPrelude_outer2089;
                                                        var obj_init_2088 = function() {
                                                          var origSuperDepth = superDepth;
                                                          superDepth = obj2088;
                                                          var func2090 = function(argcv) {    // method match(_)
                                                            var returnTarget = invocationCount;
                                                            invocationCount++;
                                                            var curarg = 1;
                                                            var var_o = arguments[curarg];
                                                            curarg++;
                                                            setModuleName("StandardPrelude");
                                                            setLineNumber(136);    // compilenode array
                                                            var array2092 = new PrimitiveGraceList([]);
                                                            // call case 6: other requests
                                                            var call2093 = callmethodChecked(var_SuccessfulMatch, "new(2)", [2], var_done, array2092);
                                                            return call2093;
                                                          };
                                                          func2090.paramCounts = [1];
                                                          obj2088.methods["match(1)"] = func2090;
                                                          func2090.definitionLine = 135;
                                                          func2090.definitionModule = "StandardPrelude";
                                                          setLineNumber(134);    // compilenode identifier
                                                          // call case 6: other requests
                                                          var call2095 = callmethodChecked(var_BasicPattern, "new$object(1)", [0, 1], this);
                                                          obj2088.superobj = call2095;
                                                          if (call2095.data) obj2088.data = call2095.data;
                                                          if (call2095.hasOwnProperty('_value'))
                                                              obj2088._value = call2095._value;
                                                          superDepth = origSuperDepth;
                                                        };
                                                        obj_init_2088.apply(obj2088, []);
                                                        return obj2088;
                                                      };
                                                      func2087.paramCounts = [0];
                                                      obj2085.methods["new"] = func2087;
                                                      func2087.definitionLine = 133;
                                                      func2087.definitionModule = "StandardPrelude";
                                                        var func2096 = function(argcv) {    // method new$object(_)
                                                          var curarg = 1;
                                                          var inheritingObject = arguments[curarg++];
                                                          // Start argument processing
                                                          curarg = 1;
                                                          // End argument processing
                                                          setModuleName("StandardPrelude");
                                                          var returnTarget = invocationCount;
                                                          invocationCount++;
                                                          var obj2097 = Grace_allocObject(null, "new");
                                                          obj2097.definitionModule = "StandardPrelude";
                                                          obj2097.definitionLine = 133;
                                                          var inho2097 = inheritingObject;
                                                          while (inho2097.superobj) inho2097 = inho2097.superobj;
                                                          inho2097.superobj = obj2097;
                                                          obj2097.data = inheritingObject.data;
                                                          if (inheritingObject.hasOwnProperty('_value'))
                                                            obj2097._value = inheritingObject._value;
                                                          obj2097.outer = this;
                                                          var reader_StandardPrelude_outer2098 = function() {
                                                            return this.outer;
                                                          };
                                                          obj2097.methods["outer"] = reader_StandardPrelude_outer2098;
                                                          var obj_init_2097 = function() {
                                                            var origSuperDepth = superDepth;
                                                            superDepth = obj2097;
                                                            var func2099 = function(argcv) {    // method match(_)
                                                              var returnTarget = invocationCount;
                                                              invocationCount++;
                                                              var curarg = 1;
                                                              var var_o = arguments[curarg];
                                                              curarg++;
                                                              setModuleName("StandardPrelude");
                                                              setLineNumber(136);    // compilenode array
                                                              var array2101 = new PrimitiveGraceList([]);
                                                              // call case 6: other requests
                                                              var call2102 = callmethodChecked(var_SuccessfulMatch, "new(2)", [2], var_done, array2101);
                                                              return call2102;
                                                            };
                                                            func2099.paramCounts = [1];
                                                            obj2097.methods["match(1)"] = func2099;
                                                            func2099.definitionLine = 135;
                                                            func2099.definitionModule = "StandardPrelude";
                                                            setLineNumber(134);    // compilenode identifier
                                                            // call case 6: other requests
                                                            var call2104 = callmethodChecked(var_BasicPattern, "new$object(1)", [0, 1], this);
                                                            obj2097.superobj = call2104;
                                                            if (call2104.data) obj2097.data = call2104.data;
                                                            if (call2104.hasOwnProperty('_value'))
                                                                obj2097._value = call2104._value;
                                                            superDepth = origSuperDepth;
                                                          };
                                                          obj_init_2097.apply(inheritingObject, []);
                                                          return obj2097;
                                                          };
                                                          obj2085.methods["new$object(1)"] = func2096;
                                                        var func2105 = function(argcv) {    // method asString
                                                          var returnTarget = invocationCount;
                                                          invocationCount++;
                                                          var curarg = 1;
                                                          setModuleName("StandardPrelude");
                                                          setLineNumber(133);    // compilenode string
                                                          var string2106 = new GraceString("class WildcardPattern");
                                                          return string2106;
                                                        };
                                                        func2105.paramCounts = [0];
                                                        obj2085.methods["asString"] = func2105;
                                                        func2105.definitionLine = 133;
                                                        func2105.definitionModule = "StandardPrelude";
                                                        superDepth = origSuperDepth;
                                                      };
                                                      obj_init_2085.apply(obj2085, []);
                                                      var var_WildcardPattern = obj2085;
                                                      setLineNumber(1);    // compilenode method
                                                      var func2107 = function(argcv) {    // method WildcardPattern
                                                        var returnTarget = invocationCount;
                                                        invocationCount++;
                                                        var curarg = 1;
                                                        setModuleName("StandardPrelude");
                                                        // WildcardPattern is a simple accessor - elide try ... catch
                                                        setLineNumber(133);    // compilenode identifier
                                                        return var_WildcardPattern;
                                                      };
                                                      func2107.paramCounts = [0];
                                                      this.methods["WildcardPattern"] = func2107;
                                                      func2107.definitionLine = 1;
                                                      func2107.definitionModule = "StandardPrelude";
                                                      this.methods["WildcardPattern"].debug = "def";
                                                      setLineNumber(140);    // compilenode object
                                                      var obj2108 = Grace_allocObject(GraceObject, "AndPattern");
                                                      obj2108.definitionModule = "StandardPrelude";
                                                      obj2108.definitionLine = 140;
                                                      obj2108.outer = this;
                                                      var reader_StandardPrelude_outer2109 = function() {
                                                        return this.outer;
                                                      };
                                                      obj2108.methods["outer"] = reader_StandardPrelude_outer2109;
                                                      var obj_init_2108 = function() {
                                                        var origSuperDepth = superDepth;
                                                        superDepth = obj2108;
                                                        var func2110 = function(argcv) {    // method new(_,_)
                                                          var returnTarget = invocationCount;
                                                          invocationCount++;
                                                          var curarg = 1;
                                                          var var_p1 = arguments[curarg];
                                                          curarg++;
                                                          var var_p2 = arguments[curarg];
                                                          curarg++;
                                                          setModuleName("StandardPrelude");
                                                          var obj2111 = Grace_allocObject(null, "new(2)");
                                                          obj2111.definitionModule = "StandardPrelude";
                                                          obj2111.definitionLine = 140;
                                                          obj2111.outer = this;
                                                          var reader_StandardPrelude_outer2112 = function() {
                                                            return this.outer;
                                                          };
                                                          obj2111.methods["outer"] = reader_StandardPrelude_outer2112;
                                                          var obj_init_2111 = function() {
                                                            var origSuperDepth = superDepth;
                                                            superDepth = obj2111;
                                                            var func2113 = function(argcv) {    // method match(_)
                                                              var returnTarget = invocationCount;
                                                              invocationCount++;
                                                              var curarg = 1;
                                                              var var_o = arguments[curarg];
                                                              curarg++;
                                                              setModuleName("StandardPrelude");
                                                              setLineNumber(143);    // compilenode identifier
                                                              // call case 6: other requests
                                                              var call2115 = callmethodChecked(var_p1, "match(1)", [1], var_o);
                                                              var var_m1 = call2115;
                                                              var if2116 = GraceDone;
                                                              setLineNumber(144);    // compilenode call
                                                              // call case 6: other requests
                                                              var call2118 = callmethodChecked(var_m1, "prefix!", [0]);
                                                              if (Grace_isTrue(call2118)) {
                                                                setLineNumber(145);    // compilenode identifier
                                                                return var_m1;
                                                              }
                                                              setLineNumber(147);    // compilenode identifier
                                                              // call case 6: other requests
                                                              var call2120 = callmethodChecked(var_p2, "match(1)", [1], var_o);
                                                              var var_m2 = call2120;
                                                              var if2121 = GraceDone;
                                                              setLineNumber(148);    // compilenode call
                                                              // call case 6: other requests
                                                              var call2123 = callmethodChecked(var_m2, "prefix!", [0]);
                                                              if (Grace_isTrue(call2123)) {
                                                                setLineNumber(149);    // compilenode identifier
                                                                return var_m2;
                                                              }
                                                              setLineNumber(151);    // compilenode array
                                                              var array2124 = new PrimitiveGraceList([]);
                                                              var var_bindings = array2124;
                                                              setLineNumber(152);    // compilenode member
                                                              // call case 6: other requests
                                                              var call2127 = callmethodChecked(var_m1, "bindings", []);
                                                              var block2128 = new GraceBlock(this, 152, 1);
                                                              setLineNumber(1);    // compilenode identifier
                                                              block2128.real = function(var_b) {
                                                                setLineNumber(153);    // compilenode identifier
                                                                // call case 6: other requests
                                                                var call2130 = callmethodChecked(var_bindings, "push(1)", [1], var_b);
                                                                return call2130;
                                                              };
                                                              // call case 5: prelude request
                                                              var call2131 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call2127, block2128);
                                                              setLineNumber(155);    // compilenode member
                                                              // call case 6: other requests
                                                              var call2134 = callmethodChecked(var_m2, "bindings", []);
                                                              var block2135 = new GraceBlock(this, 155, 1);
                                                              setLineNumber(1);    // compilenode identifier
                                                              block2135.real = function(var_b) {
                                                                setLineNumber(156);    // compilenode identifier
                                                                // call case 6: other requests
                                                                var call2137 = callmethodChecked(var_bindings, "push(1)", [1], var_b);
                                                                return call2137;
                                                              };
                                                              // call case 5: prelude request
                                                              var call2138 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call2134, block2135);
                                                              setLineNumber(158);    // compilenode identifier
                                                              // call case 6: other requests
                                                              var call2140 = callmethodChecked(var_SuccessfulMatch, "new(2)", [2], var_o, var_bindings);
                                                              return call2140;
                                                            };
                                                            func2113.paramCounts = [1];
                                                            obj2111.methods["match(1)"] = func2113;
                                                            func2113.definitionLine = 142;
                                                            func2113.definitionModule = "StandardPrelude";
                                                            setLineNumber(141);    // compilenode identifier
                                                            // call case 6: other requests
                                                            var call2142 = callmethodChecked(var_BasicPattern, "new$object(1)", [0, 1], this);
                                                            obj2111.superobj = call2142;
                                                            if (call2142.data) obj2111.data = call2142.data;
                                                            if (call2142.hasOwnProperty('_value'))
                                                                obj2111._value = call2142._value;
                                                            superDepth = origSuperDepth;
                                                          };
                                                          obj_init_2111.apply(obj2111, []);
                                                          return obj2111;
                                                        };
                                                        func2110.paramCounts = [2];
                                                        obj2108.methods["new(2)"] = func2110;
                                                        func2110.definitionLine = 140;
                                                        func2110.definitionModule = "StandardPrelude";
                                                          var func2143 = function(argcv) {    // method new(_,_)$object(_)
                                                            var curarg = 1;
                                                            var var_p1 = arguments[curarg];
                                                            curarg++;
                                                            var var_p2 = arguments[curarg];
                                                            curarg++;
                                                            var inheritingObject = arguments[curarg++];
                                                            // Start argument processing
                                                            curarg = 1;
                                                            curarg++;
                                                            curarg++;
                                                            // End argument processing
                                                            setModuleName("StandardPrelude");
                                                            var returnTarget = invocationCount;
                                                            invocationCount++;
                                                            var obj2144 = Grace_allocObject(null, "new(2)");
                                                            obj2144.definitionModule = "StandardPrelude";
                                                            obj2144.definitionLine = 140;
                                                            var inho2144 = inheritingObject;
                                                            while (inho2144.superobj) inho2144 = inho2144.superobj;
                                                            inho2144.superobj = obj2144;
                                                            obj2144.data = inheritingObject.data;
                                                            if (inheritingObject.hasOwnProperty('_value'))
                                                              obj2144._value = inheritingObject._value;
                                                            obj2144.outer = this;
                                                            var reader_StandardPrelude_outer2145 = function() {
                                                              return this.outer;
                                                            };
                                                            obj2144.methods["outer"] = reader_StandardPrelude_outer2145;
                                                            var obj_init_2144 = function() {
                                                              var origSuperDepth = superDepth;
                                                              superDepth = obj2144;
                                                              var func2146 = function(argcv) {    // method match(_)
                                                                var returnTarget = invocationCount;
                                                                invocationCount++;
                                                                var curarg = 1;
                                                                var var_o = arguments[curarg];
                                                                curarg++;
                                                                setModuleName("StandardPrelude");
                                                                setLineNumber(143);    // compilenode identifier
                                                                // call case 6: other requests
                                                                var call2148 = callmethodChecked(var_p1, "match(1)", [1], var_o);
                                                                var var_m1 = call2148;
                                                                var if2149 = GraceDone;
                                                                setLineNumber(144);    // compilenode call
                                                                // call case 6: other requests
                                                                var call2151 = callmethodChecked(var_m1, "prefix!", [0]);
                                                                if (Grace_isTrue(call2151)) {
                                                                  setLineNumber(145);    // compilenode identifier
                                                                  return var_m1;
                                                                }
                                                                setLineNumber(147);    // compilenode identifier
                                                                // call case 6: other requests
                                                                var call2153 = callmethodChecked(var_p2, "match(1)", [1], var_o);
                                                                var var_m2 = call2153;
                                                                var if2154 = GraceDone;
                                                                setLineNumber(148);    // compilenode call
                                                                // call case 6: other requests
                                                                var call2156 = callmethodChecked(var_m2, "prefix!", [0]);
                                                                if (Grace_isTrue(call2156)) {
                                                                  setLineNumber(149);    // compilenode identifier
                                                                  return var_m2;
                                                                }
                                                                setLineNumber(151);    // compilenode array
                                                                var array2157 = new PrimitiveGraceList([]);
                                                                var var_bindings = array2157;
                                                                setLineNumber(152);    // compilenode member
                                                                // call case 6: other requests
                                                                var call2160 = callmethodChecked(var_m1, "bindings", []);
                                                                var block2161 = new GraceBlock(this, 152, 1);
                                                                setLineNumber(1);    // compilenode identifier
                                                                block2161.real = function(var_b) {
                                                                  setLineNumber(153);    // compilenode identifier
                                                                  // call case 6: other requests
                                                                  var call2163 = callmethodChecked(var_bindings, "push(1)", [1], var_b);
                                                                  return call2163;
                                                                };
                                                                // call case 5: prelude request
                                                                var call2164 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call2160, block2161);
                                                                setLineNumber(155);    // compilenode member
                                                                // call case 6: other requests
                                                                var call2167 = callmethodChecked(var_m2, "bindings", []);
                                                                var block2168 = new GraceBlock(this, 155, 1);
                                                                setLineNumber(1);    // compilenode identifier
                                                                block2168.real = function(var_b) {
                                                                  setLineNumber(156);    // compilenode identifier
                                                                  // call case 6: other requests
                                                                  var call2170 = callmethodChecked(var_bindings, "push(1)", [1], var_b);
                                                                  return call2170;
                                                                };
                                                                // call case 5: prelude request
                                                                var call2171 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call2167, block2168);
                                                                setLineNumber(158);    // compilenode identifier
                                                                // call case 6: other requests
                                                                var call2173 = callmethodChecked(var_SuccessfulMatch, "new(2)", [2], var_o, var_bindings);
                                                                return call2173;
                                                              };
                                                              func2146.paramCounts = [1];
                                                              obj2144.methods["match(1)"] = func2146;
                                                              func2146.definitionLine = 142;
                                                              func2146.definitionModule = "StandardPrelude";
                                                              setLineNumber(141);    // compilenode identifier
                                                              // call case 6: other requests
                                                              var call2175 = callmethodChecked(var_BasicPattern, "new$object(1)", [0, 1], this);
                                                              obj2144.superobj = call2175;
                                                              if (call2175.data) obj2144.data = call2175.data;
                                                              if (call2175.hasOwnProperty('_value'))
                                                                  obj2144._value = call2175._value;
                                                              superDepth = origSuperDepth;
                                                            };
                                                            obj_init_2144.apply(inheritingObject, []);
                                                            return obj2144;
                                                            };
                                                            obj2108.methods["new(2)$object(1)"] = func2143;
                                                          var func2176 = function(argcv) {    // method asString
                                                            var returnTarget = invocationCount;
                                                            invocationCount++;
                                                            var curarg = 1;
                                                            setModuleName("StandardPrelude");
                                                            setLineNumber(140);    // compilenode string
                                                            var string2177 = new GraceString("class AndPattern");
                                                            return string2177;
                                                          };
                                                          func2176.paramCounts = [0];
                                                          obj2108.methods["asString"] = func2176;
                                                          func2176.definitionLine = 140;
                                                          func2176.definitionModule = "StandardPrelude";
                                                          superDepth = origSuperDepth;
                                                        };
                                                        obj_init_2108.apply(obj2108, []);
                                                        var var_AndPattern = obj2108;
                                                        setLineNumber(1);    // compilenode method
                                                        var func2178 = function(argcv) {    // method AndPattern
                                                          var returnTarget = invocationCount;
                                                          invocationCount++;
                                                          var curarg = 1;
                                                          setModuleName("StandardPrelude");
                                                          // AndPattern is a simple accessor - elide try ... catch
                                                          setLineNumber(140);    // compilenode identifier
                                                          return var_AndPattern;
                                                        };
                                                        func2178.paramCounts = [0];
                                                        this.methods["AndPattern"] = func2178;
                                                        func2178.definitionLine = 1;
                                                        func2178.definitionModule = "StandardPrelude";
                                                        this.methods["AndPattern"].debug = "def";
                                                        setLineNumber(162);    // compilenode object
                                                        var obj2179 = Grace_allocObject(GraceObject, "OrPattern");
                                                        obj2179.definitionModule = "StandardPrelude";
                                                        obj2179.definitionLine = 162;
                                                        obj2179.outer = this;
                                                        var reader_StandardPrelude_outer2180 = function() {
                                                          return this.outer;
                                                        };
                                                        obj2179.methods["outer"] = reader_StandardPrelude_outer2180;
                                                        var obj_init_2179 = function() {
                                                          var origSuperDepth = superDepth;
                                                          superDepth = obj2179;
                                                          var func2181 = function(argcv) {    // method new(_,_)
                                                            var returnTarget = invocationCount;
                                                            invocationCount++;
                                                            var curarg = 1;
                                                            var var_p1 = arguments[curarg];
                                                            curarg++;
                                                            var var_p2 = arguments[curarg];
                                                            curarg++;
                                                            setModuleName("StandardPrelude");
                                                            var obj2182 = Grace_allocObject(null, "new(2)");
                                                            obj2182.definitionModule = "StandardPrelude";
                                                            obj2182.definitionLine = 162;
                                                            obj2182.outer = this;
                                                            var reader_StandardPrelude_outer2183 = function() {
                                                              return this.outer;
                                                            };
                                                            obj2182.methods["outer"] = reader_StandardPrelude_outer2183;
                                                            var obj_init_2182 = function() {
                                                              var origSuperDepth = superDepth;
                                                              superDepth = obj2182;
                                                              var func2184 = function(argcv) {    // method match(_)
                                                                var returnTarget = invocationCount;
                                                                invocationCount++;
                                                                var curarg = 1;
                                                                var var_o = arguments[curarg];
                                                                curarg++;
                                                                setModuleName("StandardPrelude");
                                                                var if2185 = GraceDone;
                                                                setLineNumber(165);    // compilenode identifier
                                                                // call case 6: other requests
                                                                var call2187 = callmethodChecked(var_p1, "match(1)", [1], var_o);
                                                                if (Grace_isTrue(call2187)) {
                                                                  setLineNumber(166);    // compilenode array
                                                                  var array2189 = new PrimitiveGraceList([]);
                                                                  // call case 6: other requests
                                                                  var call2190 = callmethodChecked(var_SuccessfulMatch, "new(2)", [2], var_o, array2189);
                                                                  return call2190;
                                                                }
                                                                var if2191 = GraceDone;
                                                                setLineNumber(168);    // compilenode identifier
                                                                // call case 6: other requests
                                                                var call2193 = callmethodChecked(var_p2, "match(1)", [1], var_o);
                                                                if (Grace_isTrue(call2193)) {
                                                                  setLineNumber(169);    // compilenode array
                                                                  var array2195 = new PrimitiveGraceList([]);
                                                                  // call case 6: other requests
                                                                  var call2196 = callmethodChecked(var_SuccessfulMatch, "new(2)", [2], var_o, array2195);
                                                                  return call2196;
                                                                }
                                                                setLineNumber(171);    // compilenode identifier
                                                                // call case 6: other requests
                                                                var call2198 = callmethodChecked(var_FailedMatch, "new(1)", [1], var_o);
                                                                return call2198;
                                                              };
                                                              func2184.paramCounts = [1];
                                                              obj2182.methods["match(1)"] = func2184;
                                                              func2184.definitionLine = 164;
                                                              func2184.definitionModule = "StandardPrelude";
                                                              setLineNumber(163);    // compilenode identifier
                                                              // call case 6: other requests
                                                              var call2200 = callmethodChecked(var_BasicPattern, "new$object(1)", [0, 1], this);
                                                              obj2182.superobj = call2200;
                                                              if (call2200.data) obj2182.data = call2200.data;
                                                              if (call2200.hasOwnProperty('_value'))
                                                                  obj2182._value = call2200._value;
                                                              superDepth = origSuperDepth;
                                                            };
                                                            obj_init_2182.apply(obj2182, []);
                                                            return obj2182;
                                                          };
                                                          func2181.paramCounts = [2];
                                                          obj2179.methods["new(2)"] = func2181;
                                                          func2181.definitionLine = 162;
                                                          func2181.definitionModule = "StandardPrelude";
                                                            var func2201 = function(argcv) {    // method new(_,_)$object(_)
                                                              var curarg = 1;
                                                              var var_p1 = arguments[curarg];
                                                              curarg++;
                                                              var var_p2 = arguments[curarg];
                                                              curarg++;
                                                              var inheritingObject = arguments[curarg++];
                                                              // Start argument processing
                                                              curarg = 1;
                                                              curarg++;
                                                              curarg++;
                                                              // End argument processing
                                                              setModuleName("StandardPrelude");
                                                              var returnTarget = invocationCount;
                                                              invocationCount++;
                                                              var obj2202 = Grace_allocObject(null, "new(2)");
                                                              obj2202.definitionModule = "StandardPrelude";
                                                              obj2202.definitionLine = 162;
                                                              var inho2202 = inheritingObject;
                                                              while (inho2202.superobj) inho2202 = inho2202.superobj;
                                                              inho2202.superobj = obj2202;
                                                              obj2202.data = inheritingObject.data;
                                                              if (inheritingObject.hasOwnProperty('_value'))
                                                                obj2202._value = inheritingObject._value;
                                                              obj2202.outer = this;
                                                              var reader_StandardPrelude_outer2203 = function() {
                                                                return this.outer;
                                                              };
                                                              obj2202.methods["outer"] = reader_StandardPrelude_outer2203;
                                                              var obj_init_2202 = function() {
                                                                var origSuperDepth = superDepth;
                                                                superDepth = obj2202;
                                                                var func2204 = function(argcv) {    // method match(_)
                                                                  var returnTarget = invocationCount;
                                                                  invocationCount++;
                                                                  var curarg = 1;
                                                                  var var_o = arguments[curarg];
                                                                  curarg++;
                                                                  setModuleName("StandardPrelude");
                                                                  var if2205 = GraceDone;
                                                                  setLineNumber(165);    // compilenode identifier
                                                                  // call case 6: other requests
                                                                  var call2207 = callmethodChecked(var_p1, "match(1)", [1], var_o);
                                                                  if (Grace_isTrue(call2207)) {
                                                                    setLineNumber(166);    // compilenode array
                                                                    var array2209 = new PrimitiveGraceList([]);
                                                                    // call case 6: other requests
                                                                    var call2210 = callmethodChecked(var_SuccessfulMatch, "new(2)", [2], var_o, array2209);
                                                                    return call2210;
                                                                  }
                                                                  var if2211 = GraceDone;
                                                                  setLineNumber(168);    // compilenode identifier
                                                                  // call case 6: other requests
                                                                  var call2213 = callmethodChecked(var_p2, "match(1)", [1], var_o);
                                                                  if (Grace_isTrue(call2213)) {
                                                                    setLineNumber(169);    // compilenode array
                                                                    var array2215 = new PrimitiveGraceList([]);
                                                                    // call case 6: other requests
                                                                    var call2216 = callmethodChecked(var_SuccessfulMatch, "new(2)", [2], var_o, array2215);
                                                                    return call2216;
                                                                  }
                                                                  setLineNumber(171);    // compilenode identifier
                                                                  // call case 6: other requests
                                                                  var call2218 = callmethodChecked(var_FailedMatch, "new(1)", [1], var_o);
                                                                  return call2218;
                                                                };
                                                                func2204.paramCounts = [1];
                                                                obj2202.methods["match(1)"] = func2204;
                                                                func2204.definitionLine = 164;
                                                                func2204.definitionModule = "StandardPrelude";
                                                                setLineNumber(163);    // compilenode identifier
                                                                // call case 6: other requests
                                                                var call2220 = callmethodChecked(var_BasicPattern, "new$object(1)", [0, 1], this);
                                                                obj2202.superobj = call2220;
                                                                if (call2220.data) obj2202.data = call2220.data;
                                                                if (call2220.hasOwnProperty('_value'))
                                                                    obj2202._value = call2220._value;
                                                                superDepth = origSuperDepth;
                                                              };
                                                              obj_init_2202.apply(inheritingObject, []);
                                                              return obj2202;
                                                              };
                                                              obj2179.methods["new(2)$object(1)"] = func2201;
                                                            var func2221 = function(argcv) {    // method asString
                                                              var returnTarget = invocationCount;
                                                              invocationCount++;
                                                              var curarg = 1;
                                                              setModuleName("StandardPrelude");
                                                              setLineNumber(162);    // compilenode string
                                                              var string2222 = new GraceString("class OrPattern");
                                                              return string2222;
                                                            };
                                                            func2221.paramCounts = [0];
                                                            obj2179.methods["asString"] = func2221;
                                                            func2221.definitionLine = 162;
                                                            func2221.definitionModule = "StandardPrelude";
                                                            superDepth = origSuperDepth;
                                                          };
                                                          obj_init_2179.apply(obj2179, []);
                                                          var var_OrPattern = obj2179;
                                                          setLineNumber(1);    // compilenode method
                                                          var func2223 = function(argcv) {    // method OrPattern
                                                            var returnTarget = invocationCount;
                                                            invocationCount++;
                                                            var curarg = 1;
                                                            setModuleName("StandardPrelude");
                                                            // OrPattern is a simple accessor - elide try ... catch
                                                            setLineNumber(162);    // compilenode identifier
                                                            return var_OrPattern;
                                                          };
                                                          func2223.paramCounts = [0];
                                                          this.methods["OrPattern"] = func2223;
                                                          func2223.definitionLine = 1;
                                                          func2223.definitionModule = "StandardPrelude";
                                                          this.methods["OrPattern"].debug = "def";
                                                          setLineNumber(175);    // compilenode object
                                                          var obj2224 = Grace_allocObject(GraceObject, "Singleton");
                                                          obj2224.definitionModule = "StandardPrelude";
                                                          obj2224.definitionLine = 175;
                                                          obj2224.outer = this;
                                                          var reader_StandardPrelude_outer2225 = function() {
                                                            return this.outer;
                                                          };
                                                          obj2224.methods["outer"] = reader_StandardPrelude_outer2225;
                                                          var obj_init_2224 = function() {
                                                            var origSuperDepth = superDepth;
                                                            superDepth = obj2224;
                                                            var func2226 = function(argcv) {    // method new
                                                              var returnTarget = invocationCount;
                                                              invocationCount++;
                                                              var curarg = 1;
                                                              setModuleName("StandardPrelude");
                                                              setLineNumber(176);    // compilenode object
                                                              var obj2227 = Grace_allocObject(null, "new");
                                                              obj2227.definitionModule = "StandardPrelude";
                                                              obj2227.definitionLine = 176;
                                                              obj2227.outer = this;
                                                              var reader_StandardPrelude_outer2228 = function() {
                                                                return this.outer;
                                                              };
                                                              obj2227.methods["outer"] = reader_StandardPrelude_outer2228;
                                                              var obj_init_2227 = function() {
                                                                var origSuperDepth = superDepth;
                                                                superDepth = obj2227;
                                                                var func2229 = function(argcv) {    // method match(_)
                                                                  var returnTarget = invocationCount;
                                                                  invocationCount++;
                                                                  var curarg = 1;
                                                                  var var_other = arguments[curarg];
                                                                  curarg++;
                                                                  setModuleName("StandardPrelude");
                                                                  var if2230 = GraceDone;
                                                                  setLineNumber(179);    // compilenode identifier
                                                                  // call case 4: self request
                                                                  onSelf = true;
                                                                  var call2232 = callmethodChecked(this, "isMe(1)", [1], var_other);
                                                                  if (Grace_isTrue(call2232)) {
                                                                    setLineNumber(180);    // compilenode array
                                                                    var array2234 = new PrimitiveGraceList([]);
                                                                    // call case 6: other requests
                                                                    var call2235 = callmethodChecked(var_SuccessfulMatch, "new(2)", [2], var_other, array2234);
                                                                    if2230 = call2235;
                                                                  } else {
                                                                    setLineNumber(182);    // compilenode identifier
                                                                    // call case 6: other requests
                                                                    var call2237 = callmethodChecked(var_FailedMatch, "new(1)", [1], var_other);
                                                                    if2230 = call2237;
                                                                  }
                                                                  return if2230;
                                                                };
                                                                func2229.paramCounts = [1];
                                                                obj2227.methods["match(1)"] = func2229;
                                                                func2229.definitionLine = 178;
                                                                func2229.definitionModule = "StandardPrelude";
                                                                var func2238 = function(argcv) {    // method ==(_)
                                                                  var returnTarget = invocationCount;
                                                                  invocationCount++;
                                                                  var curarg = 1;
                                                                  var var_other = arguments[curarg];
                                                                  curarg++;
                                                                  setModuleName("StandardPrelude");
                                                                  setLineNumber(185);    // compilenode identifier
                                                                  // call case 4: self request
                                                                  onSelf = true;
                                                                  var call2240 = callmethodChecked(this, "isMe(1)", [1], var_other);
                                                                  return call2240;
                                                                };
                                                                func2238.paramCounts = [1];
                                                                obj2227.methods["==(1)"] = func2238;
                                                                func2238.definitionLine = 185;
                                                                func2238.definitionModule = "StandardPrelude";
                                                                setLineNumber(177);    // compilenode identifier
                                                                // call case 6: other requests
                                                                var call2242 = callmethodChecked(var_BasicPattern, "new$object(1)", [0, 1], this);
                                                                obj2227.superobj = call2242;
                                                                if (call2242.data) obj2227.data = call2242.data;
                                                                if (call2242.hasOwnProperty('_value'))
                                                                    obj2227._value = call2242._value;
                                                                superDepth = origSuperDepth;
                                                              };
                                                              obj_init_2227.apply(obj2227, []);
                                                              return obj2227;
                                                            };
                                                            func2226.paramCounts = [0];
                                                            obj2224.methods["new"] = func2226;
                                                            func2226.definitionLine = 176;
                                                            func2226.definitionModule = "StandardPrelude";
                                                              var func2243 = function(argcv) {    // method new$object(_)
                                                                var curarg = 1;
                                                                var inheritingObject = arguments[curarg++];
                                                                // Start argument processing
                                                                curarg = 1;
                                                                // End argument processing
                                                                setModuleName("StandardPrelude");
                                                                var returnTarget = invocationCount;
                                                                invocationCount++;
                                                                var obj2244 = Grace_allocObject(null, "new");
                                                                obj2244.definitionModule = "StandardPrelude";
                                                                obj2244.definitionLine = 176;
                                                                var inho2244 = inheritingObject;
                                                                while (inho2244.superobj) inho2244 = inho2244.superobj;
                                                                inho2244.superobj = obj2244;
                                                                obj2244.data = inheritingObject.data;
                                                                if (inheritingObject.hasOwnProperty('_value'))
                                                                  obj2244._value = inheritingObject._value;
                                                                obj2244.outer = this;
                                                                var reader_StandardPrelude_outer2245 = function() {
                                                                  return this.outer;
                                                                };
                                                                obj2244.methods["outer"] = reader_StandardPrelude_outer2245;
                                                                var obj_init_2244 = function() {
                                                                  var origSuperDepth = superDepth;
                                                                  superDepth = obj2244;
                                                                  var func2246 = function(argcv) {    // method match(_)
                                                                    var returnTarget = invocationCount;
                                                                    invocationCount++;
                                                                    var curarg = 1;
                                                                    var var_other = arguments[curarg];
                                                                    curarg++;
                                                                    setModuleName("StandardPrelude");
                                                                    var if2247 = GraceDone;
                                                                    setLineNumber(179);    // compilenode identifier
                                                                    // call case 4: self request
                                                                    onSelf = true;
                                                                    var call2249 = callmethodChecked(this, "isMe(1)", [1], var_other);
                                                                    if (Grace_isTrue(call2249)) {
                                                                      setLineNumber(180);    // compilenode array
                                                                      var array2251 = new PrimitiveGraceList([]);
                                                                      // call case 6: other requests
                                                                      var call2252 = callmethodChecked(var_SuccessfulMatch, "new(2)", [2], var_other, array2251);
                                                                      if2247 = call2252;
                                                                    } else {
                                                                      setLineNumber(182);    // compilenode identifier
                                                                      // call case 6: other requests
                                                                      var call2254 = callmethodChecked(var_FailedMatch, "new(1)", [1], var_other);
                                                                      if2247 = call2254;
                                                                    }
                                                                    return if2247;
                                                                  };
                                                                  func2246.paramCounts = [1];
                                                                  obj2244.methods["match(1)"] = func2246;
                                                                  func2246.definitionLine = 178;
                                                                  func2246.definitionModule = "StandardPrelude";
                                                                  var func2255 = function(argcv) {    // method ==(_)
                                                                    var returnTarget = invocationCount;
                                                                    invocationCount++;
                                                                    var curarg = 1;
                                                                    var var_other = arguments[curarg];
                                                                    curarg++;
                                                                    setModuleName("StandardPrelude");
                                                                    setLineNumber(185);    // compilenode identifier
                                                                    // call case 4: self request
                                                                    onSelf = true;
                                                                    var call2257 = callmethodChecked(this, "isMe(1)", [1], var_other);
                                                                    return call2257;
                                                                  };
                                                                  func2255.paramCounts = [1];
                                                                  obj2244.methods["==(1)"] = func2255;
                                                                  func2255.definitionLine = 185;
                                                                  func2255.definitionModule = "StandardPrelude";
                                                                  setLineNumber(177);    // compilenode identifier
                                                                  // call case 6: other requests
                                                                  var call2259 = callmethodChecked(var_BasicPattern, "new$object(1)", [0, 1], this);
                                                                  obj2244.superobj = call2259;
                                                                  if (call2259.data) obj2244.data = call2259.data;
                                                                  if (call2259.hasOwnProperty('_value'))
                                                                      obj2244._value = call2259._value;
                                                                  superDepth = origSuperDepth;
                                                                };
                                                                obj_init_2244.apply(inheritingObject, []);
                                                                return obj2244;
                                                                };
                                                                obj2224.methods["new$object(1)"] = func2243;
                                                              var func2260 = function(argcv) {    // method named(_)
                                                                var returnTarget = invocationCount;
                                                                invocationCount++;
                                                                var curarg = 1;
                                                                var var_printString = arguments[curarg];
                                                                curarg++;
                                                                setModuleName("StandardPrelude");
                                                                setLineNumber(187);    // compilenode object
                                                                var obj2261 = Grace_allocObject(null, "named(1)");
                                                                obj2261.definitionModule = "StandardPrelude";
                                                                obj2261.definitionLine = 187;
                                                                obj2261.outer = this;
                                                                var reader_StandardPrelude_outer2262 = function() {
                                                                  return this.outer;
                                                                };
                                                                obj2261.methods["outer"] = reader_StandardPrelude_outer2262;
                                                                var obj_init_2261 = function() {
                                                                  var origSuperDepth = superDepth;
                                                                  superDepth = obj2261;
                                                                  var func2263 = function(argcv) {    // method asString
                                                                    var returnTarget = invocationCount;
                                                                    invocationCount++;
                                                                    var curarg = 1;
                                                                    setModuleName("StandardPrelude");
                                                                    // asString is a simple accessor - elide try ... catch
                                                                    setLineNumber(189);    // compilenode identifier
                                                                    return var_printString;
                                                                  };
                                                                  func2263.paramCounts = [0];
                                                                  obj2261.methods["asString"] = func2263;
                                                                  func2263.definitionLine = 189;
                                                                  func2263.definitionModule = "StandardPrelude";
                                                                  setLineNumber(188);    // compilenode identifier
                                                                  // call case 6: other requests
                                                                  var call2265 = callmethodChecked(var_Singleton, "new$object(1)", [0, 1], this);
                                                                  obj2261.superobj = call2265;
                                                                  if (call2265.data) obj2261.data = call2265.data;
                                                                  if (call2265.hasOwnProperty('_value'))
                                                                      obj2261._value = call2265._value;
                                                                  superDepth = origSuperDepth;
                                                                };
                                                                obj_init_2261.apply(obj2261, []);
                                                                return obj2261;
                                                              };
                                                              func2260.paramCounts = [1];
                                                              obj2224.methods["named(1)"] = func2260;
                                                              func2260.definitionLine = 187;
                                                              func2260.definitionModule = "StandardPrelude";
                                                                var func2266 = function(argcv) {    // method named(_)$object(_)
                                                                  var curarg = 1;
                                                                  var var_printString = arguments[curarg];
                                                                  curarg++;
                                                                  var inheritingObject = arguments[curarg++];
                                                                  // Start argument processing
                                                                  curarg = 1;
                                                                  curarg++;
                                                                  // End argument processing
                                                                  setModuleName("StandardPrelude");
                                                                  var returnTarget = invocationCount;
                                                                  invocationCount++;
                                                                  var obj2267 = Grace_allocObject(null, "named(1)");
                                                                  obj2267.definitionModule = "StandardPrelude";
                                                                  obj2267.definitionLine = 187;
                                                                  var inho2267 = inheritingObject;
                                                                  while (inho2267.superobj) inho2267 = inho2267.superobj;
                                                                  inho2267.superobj = obj2267;
                                                                  obj2267.data = inheritingObject.data;
                                                                  if (inheritingObject.hasOwnProperty('_value'))
                                                                    obj2267._value = inheritingObject._value;
                                                                  obj2267.outer = this;
                                                                  var reader_StandardPrelude_outer2268 = function() {
                                                                    return this.outer;
                                                                  };
                                                                  obj2267.methods["outer"] = reader_StandardPrelude_outer2268;
                                                                  var obj_init_2267 = function() {
                                                                    var origSuperDepth = superDepth;
                                                                    superDepth = obj2267;
                                                                    var func2269 = function(argcv) {    // method asString
                                                                      var returnTarget = invocationCount;
                                                                      invocationCount++;
                                                                      var curarg = 1;
                                                                      setModuleName("StandardPrelude");
                                                                      // asString is a simple accessor - elide try ... catch
                                                                      setLineNumber(189);    // compilenode identifier
                                                                      return var_printString;
                                                                    };
                                                                    func2269.paramCounts = [0];
                                                                    obj2267.methods["asString"] = func2269;
                                                                    func2269.definitionLine = 189;
                                                                    func2269.definitionModule = "StandardPrelude";
                                                                    setLineNumber(188);    // compilenode identifier
                                                                    // call case 6: other requests
                                                                    var call2271 = callmethodChecked(var_Singleton, "new$object(1)", [0, 1], this);
                                                                    obj2267.superobj = call2271;
                                                                    if (call2271.data) obj2267.data = call2271.data;
                                                                    if (call2271.hasOwnProperty('_value'))
                                                                        obj2267._value = call2271._value;
                                                                    superDepth = origSuperDepth;
                                                                  };
                                                                  obj_init_2267.apply(inheritingObject, []);
                                                                  return obj2267;
                                                                  };
                                                                  obj2224.methods["named(1)$object(1)"] = func2266;
                                                                superDepth = origSuperDepth;
                                                              };
                                                              obj_init_2224.apply(obj2224, []);
                                                              var var_Singleton = obj2224;
                                                              setLineNumber(1);    // compilenode method
                                                              var func2272 = function(argcv) {    // method Singleton
                                                                var returnTarget = invocationCount;
                                                                invocationCount++;
                                                                var curarg = 1;
                                                                setModuleName("StandardPrelude");
                                                                // Singleton is a simple accessor - elide try ... catch
                                                                setLineNumber(175);    // compilenode identifier
                                                                return var_Singleton;
                                                              };
                                                              func2272.paramCounts = [0];
                                                              this.methods["Singleton"] = func2272;
                                                              func2272.definitionLine = 1;
                                                              func2272.definitionModule = "StandardPrelude";
                                                              this.methods["Singleton"].debug = "def";
                                                              setLineNumber(193);    // compilenode object
                                                              var obj2273 = Grace_allocObject(GraceObject, "BaseType");
                                                              obj2273.definitionModule = "StandardPrelude";
                                                              obj2273.definitionLine = 193;
                                                              obj2273.outer = this;
                                                              var reader_StandardPrelude_outer2274 = function() {
                                                                return this.outer;
                                                              };
                                                              obj2273.methods["outer"] = reader_StandardPrelude_outer2274;
                                                              var obj_init_2273 = function() {
                                                                var origSuperDepth = superDepth;
                                                                superDepth = obj2273;
                                                                var func2275 = function(argcv) {    // method new(_)
                                                                  var returnTarget = invocationCount;
                                                                  invocationCount++;
                                                                  var curarg = 1;
                                                                  var var_name = arguments[curarg];
                                                                  curarg++;
                                                                  setModuleName("StandardPrelude");
                                                                  var obj2276 = Grace_allocObject(GraceObject, "new(1)");
                                                                  obj2276.definitionModule = "StandardPrelude";
                                                                  obj2276.definitionLine = 193;
                                                                  obj2276.outer = this;
                                                                  var reader_StandardPrelude_outer2277 = function() {
                                                                    return this.outer;
                                                                  };
                                                                  obj2276.methods["outer"] = reader_StandardPrelude_outer2277;
                                                                  var obj_init_2276 = function() {
                                                                    var origSuperDepth = superDepth;
                                                                    superDepth = obj2276;
                                                                    var func2278 = function(argcv) {    // method &(_)
                                                                      var returnTarget = invocationCount;
                                                                      invocationCount++;
                                                                      var curarg = 1;
                                                                      var var_o = arguments[curarg];
                                                                      curarg++;
                                                                      setModuleName("StandardPrelude");
                                                                      setLineNumber(195);    // compilenode identifier
                                                                      // call case 6: other requests
                                                                      var call2280 = callmethodChecked(var_TypeIntersection, "new(2)", [2], this, var_o);
                                                                      return call2280;
                                                                    };
                                                                    func2278.paramCounts = [1];
                                                                    obj2276.methods["&(1)"] = func2278;
                                                                    func2278.definitionLine = 194;
                                                                    func2278.definitionModule = "StandardPrelude";
                                                                    var func2281 = function(argcv) {    // method |(_)
                                                                      var returnTarget = invocationCount;
                                                                      invocationCount++;
                                                                      var curarg = 1;
                                                                      var var_o = arguments[curarg];
                                                                      curarg++;
                                                                      setModuleName("StandardPrelude");
                                                                      setLineNumber(198);    // compilenode identifier
                                                                      // call case 6: other requests
                                                                      var call2283 = callmethodChecked(var_TypeVariant, "new(2)", [2], this, var_o);
                                                                      return call2283;
                                                                    };
                                                                    func2281.paramCounts = [1];
                                                                    obj2276.methods["|(1)"] = func2281;
                                                                    func2281.definitionLine = 197;
                                                                    func2281.definitionModule = "StandardPrelude";
                                                                    var func2284 = function(argcv) {    // method +(_)
                                                                      var returnTarget = invocationCount;
                                                                      invocationCount++;
                                                                      var curarg = 1;
                                                                      var var_o = arguments[curarg];
                                                                      curarg++;
                                                                      setModuleName("StandardPrelude");
                                                                      setLineNumber(201);    // compilenode identifier
                                                                      // call case 6: other requests
                                                                      var call2286 = callmethodChecked(var_TypeUnion, "new(2)", [2], this, var_o);
                                                                      return call2286;
                                                                    };
                                                                    func2284.paramCounts = [1];
                                                                    obj2276.methods["+(1)"] = func2284;
                                                                    func2284.definitionLine = 200;
                                                                    func2284.definitionModule = "StandardPrelude";
                                                                    var func2287 = function(argcv) {    // method -(_)
                                                                      var returnTarget = invocationCount;
                                                                      invocationCount++;
                                                                      var curarg = 1;
                                                                      var var_o = arguments[curarg];
                                                                      curarg++;
                                                                      setModuleName("StandardPrelude");
                                                                      setLineNumber(204);    // compilenode identifier
                                                                      // call case 6: other requests
                                                                      var call2289 = callmethodChecked(var_TypeSubtraction, "new(2)", [2], this, var_o);
                                                                      return call2289;
                                                                    };
                                                                    func2287.paramCounts = [1];
                                                                    obj2276.methods["-(1)"] = func2287;
                                                                    func2287.definitionLine = 203;
                                                                    func2287.definitionModule = "StandardPrelude";
                                                                    var func2290 = function(argcv) {    // method asString
                                                                      var returnTarget = invocationCount;
                                                                      invocationCount++;
                                                                      var curarg = 1;
                                                                      setModuleName("StandardPrelude");
                                                                      var if2291 = GraceDone;
                                                                      setLineNumber(207);    // compilenode string
                                                                      var string2292 = new GraceString("");
                                                                      var opresult2295 = callmethodChecked(var_name, "==(1)", [1], string2292);
                                                                      if (Grace_isTrue(opresult2295)) {
                                                                        var string2296 = new GraceString("type \u2039anon\u203a");
                                                                        if2291 = string2296;
                                                                      } else {
                                                                        setLineNumber(208);    // compilenode string
                                                                        var string2297 = new GraceString("");
                                                                        var string2300 = new GraceString("type ");
                                                                        var opresult2302 = callmethodChecked(string2300, "++(1)", [1], var_name);
                                                                        var opresult2304 = callmethodChecked(opresult2302, "++(1)", [1], string2297);
                                                                        if2291 = opresult2304;
                                                                      }
                                                                      return if2291;
                                                                    };
                                                                    func2290.paramCounts = [0];
                                                                    obj2276.methods["asString"] = func2290;
                                                                    func2290.definitionLine = 206;
                                                                    func2290.definitionModule = "StandardPrelude";
                                                                    superDepth = origSuperDepth;
                                                                  };
                                                                  obj_init_2276.apply(obj2276, []);
                                                                  return obj2276;
                                                                };
                                                                func2275.paramCounts = [1];
                                                                obj2273.methods["new(1)"] = func2275;
                                                                func2275.definitionLine = 193;
                                                                func2275.definitionModule = "StandardPrelude";
                                                                  var func2305 = function(argcv) {    // method new(_)$object(_)
                                                                    var curarg = 1;
                                                                    var var_name = arguments[curarg];
                                                                    curarg++;
                                                                    var inheritingObject = arguments[curarg++];
                                                                    // Start argument processing
                                                                    curarg = 1;
                                                                    curarg++;
                                                                    // End argument processing
                                                                    setModuleName("StandardPrelude");
                                                                    var returnTarget = invocationCount;
                                                                    invocationCount++;
                                                                    var obj2306 = Grace_allocObject(GraceObject, "new(1)");
                                                                    obj2306.definitionModule = "StandardPrelude";
                                                                    obj2306.definitionLine = 193;
                                                                    var inho2306 = inheritingObject;
                                                                    while (inho2306.superobj) inho2306 = inho2306.superobj;
                                                                    inho2306.superobj = obj2306;
                                                                    obj2306.data = inheritingObject.data;
                                                                    if (inheritingObject.hasOwnProperty('_value'))
                                                                      obj2306._value = inheritingObject._value;
                                                                    obj2306.outer = this;
                                                                    var reader_StandardPrelude_outer2307 = function() {
                                                                      return this.outer;
                                                                    };
                                                                    obj2306.methods["outer"] = reader_StandardPrelude_outer2307;
                                                                    var obj_init_2306 = function() {
                                                                      var origSuperDepth = superDepth;
                                                                      superDepth = obj2306;
                                                                      var func2308 = function(argcv) {    // method &(_)
                                                                        var returnTarget = invocationCount;
                                                                        invocationCount++;
                                                                        var curarg = 1;
                                                                        var var_o = arguments[curarg];
                                                                        curarg++;
                                                                        setModuleName("StandardPrelude");
                                                                        setLineNumber(195);    // compilenode identifier
                                                                        // call case 6: other requests
                                                                        var call2310 = callmethodChecked(var_TypeIntersection, "new(2)", [2], this, var_o);
                                                                        return call2310;
                                                                      };
                                                                      func2308.paramCounts = [1];
                                                                      obj2306.methods["&(1)"] = func2308;
                                                                      func2308.definitionLine = 194;
                                                                      func2308.definitionModule = "StandardPrelude";
                                                                      var func2311 = function(argcv) {    // method |(_)
                                                                        var returnTarget = invocationCount;
                                                                        invocationCount++;
                                                                        var curarg = 1;
                                                                        var var_o = arguments[curarg];
                                                                        curarg++;
                                                                        setModuleName("StandardPrelude");
                                                                        setLineNumber(198);    // compilenode identifier
                                                                        // call case 6: other requests
                                                                        var call2313 = callmethodChecked(var_TypeVariant, "new(2)", [2], this, var_o);
                                                                        return call2313;
                                                                      };
                                                                      func2311.paramCounts = [1];
                                                                      obj2306.methods["|(1)"] = func2311;
                                                                      func2311.definitionLine = 197;
                                                                      func2311.definitionModule = "StandardPrelude";
                                                                      var func2314 = function(argcv) {    // method +(_)
                                                                        var returnTarget = invocationCount;
                                                                        invocationCount++;
                                                                        var curarg = 1;
                                                                        var var_o = arguments[curarg];
                                                                        curarg++;
                                                                        setModuleName("StandardPrelude");
                                                                        setLineNumber(201);    // compilenode identifier
                                                                        // call case 6: other requests
                                                                        var call2316 = callmethodChecked(var_TypeUnion, "new(2)", [2], this, var_o);
                                                                        return call2316;
                                                                      };
                                                                      func2314.paramCounts = [1];
                                                                      obj2306.methods["+(1)"] = func2314;
                                                                      func2314.definitionLine = 200;
                                                                      func2314.definitionModule = "StandardPrelude";
                                                                      var func2317 = function(argcv) {    // method -(_)
                                                                        var returnTarget = invocationCount;
                                                                        invocationCount++;
                                                                        var curarg = 1;
                                                                        var var_o = arguments[curarg];
                                                                        curarg++;
                                                                        setModuleName("StandardPrelude");
                                                                        setLineNumber(204);    // compilenode identifier
                                                                        // call case 6: other requests
                                                                        var call2319 = callmethodChecked(var_TypeSubtraction, "new(2)", [2], this, var_o);
                                                                        return call2319;
                                                                      };
                                                                      func2317.paramCounts = [1];
                                                                      obj2306.methods["-(1)"] = func2317;
                                                                      func2317.definitionLine = 203;
                                                                      func2317.definitionModule = "StandardPrelude";
                                                                      var func2320 = function(argcv) {    // method asString
                                                                        var returnTarget = invocationCount;
                                                                        invocationCount++;
                                                                        var curarg = 1;
                                                                        setModuleName("StandardPrelude");
                                                                        var if2321 = GraceDone;
                                                                        setLineNumber(207);    // compilenode string
                                                                        var string2322 = new GraceString("");
                                                                        var opresult2325 = callmethodChecked(var_name, "==(1)", [1], string2322);
                                                                        if (Grace_isTrue(opresult2325)) {
                                                                          var string2326 = new GraceString("type \u2039anon\u203a");
                                                                          if2321 = string2326;
                                                                        } else {
                                                                          setLineNumber(208);    // compilenode string
                                                                          var string2327 = new GraceString("");
                                                                          var string2330 = new GraceString("type ");
                                                                          var opresult2332 = callmethodChecked(string2330, "++(1)", [1], var_name);
                                                                          var opresult2334 = callmethodChecked(opresult2332, "++(1)", [1], string2327);
                                                                          if2321 = opresult2334;
                                                                        }
                                                                        return if2321;
                                                                      };
                                                                      func2320.paramCounts = [0];
                                                                      obj2306.methods["asString"] = func2320;
                                                                      func2320.definitionLine = 206;
                                                                      func2320.definitionModule = "StandardPrelude";
                                                                      superDepth = origSuperDepth;
                                                                    };
                                                                    obj_init_2306.apply(inheritingObject, []);
                                                                    return obj2306;
                                                                    };
                                                                    obj2273.methods["new(1)$object(1)"] = func2305;
                                                                  var func2335 = function(argcv) {    // method asString
                                                                    var returnTarget = invocationCount;
                                                                    invocationCount++;
                                                                    var curarg = 1;
                                                                    setModuleName("StandardPrelude");
                                                                    setLineNumber(193);    // compilenode string
                                                                    var string2336 = new GraceString("class BaseType");
                                                                    return string2336;
                                                                  };
                                                                  func2335.paramCounts = [0];
                                                                  obj2273.methods["asString"] = func2335;
                                                                  func2335.definitionLine = 193;
                                                                  func2335.definitionModule = "StandardPrelude";
                                                                  superDepth = origSuperDepth;
                                                                };
                                                                obj_init_2273.apply(obj2273, []);
                                                                var var_BaseType = obj2273;
                                                                setLineNumber(1);    // compilenode method
                                                                var func2337 = function(argcv) {    // method BaseType
                                                                  var returnTarget = invocationCount;
                                                                  invocationCount++;
                                                                  var curarg = 1;
                                                                  setModuleName("StandardPrelude");
                                                                  // BaseType is a simple accessor - elide try ... catch
                                                                  setLineNumber(193);    // compilenode identifier
                                                                  return var_BaseType;
                                                                };
                                                                func2337.paramCounts = [0];
                                                                this.methods["BaseType"] = func2337;
                                                                func2337.definitionLine = 1;
                                                                func2337.definitionModule = "StandardPrelude";
                                                                this.methods["BaseType"].debug = "def";
                                                                setLineNumber(212);    // compilenode object
                                                                var obj2338 = Grace_allocObject(GraceObject, "TypeIntersection");
                                                                obj2338.definitionModule = "StandardPrelude";
                                                                obj2338.definitionLine = 212;
                                                                obj2338.outer = this;
                                                                var reader_StandardPrelude_outer2339 = function() {
                                                                  return this.outer;
                                                                };
                                                                obj2338.methods["outer"] = reader_StandardPrelude_outer2339;
                                                                var obj_init_2338 = function() {
                                                                  var origSuperDepth = superDepth;
                                                                  superDepth = obj2338;
                                                                  var func2340 = function(argcv) {    // method new(_,_)
                                                                    var returnTarget = invocationCount;
                                                                    invocationCount++;
                                                                    var curarg = 1;
                                                                    var var_t1 = arguments[curarg];
                                                                    curarg++;
                                                                    var var_t2 = arguments[curarg];
                                                                    curarg++;
                                                                    setModuleName("StandardPrelude");
                                                                    var obj2341 = Grace_allocObject(null, "new(2)");
                                                                    obj2341.definitionModule = "StandardPrelude";
                                                                    obj2341.definitionLine = 212;
                                                                    obj2341.outer = this;
                                                                    var reader_StandardPrelude_outer2342 = function() {
                                                                      return this.outer;
                                                                    };
                                                                    obj2341.methods["outer"] = reader_StandardPrelude_outer2342;
                                                                    var obj_init_2341 = function() {
                                                                      var origSuperDepth = superDepth;
                                                                      superDepth = obj2341;
                                                                      var func2343 = function(argcv) {    // method &(_)
                                                                        var returnTarget = invocationCount;
                                                                        invocationCount++;
                                                                        var curarg = 1;
                                                                        var var_o = arguments[curarg];
                                                                        curarg++;
                                                                        setModuleName("StandardPrelude");
                                                                        setLineNumber(216);    // compilenode identifier
                                                                        // call case 6: other requests
                                                                        var call2345 = callmethodChecked(var_TypeIntersection, "new(2)", [2], this, var_o);
                                                                        return call2345;
                                                                      };
                                                                      func2343.paramCounts = [1];
                                                                      obj2341.methods["&(1)"] = func2343;
                                                                      func2343.definitionLine = 215;
                                                                      func2343.definitionModule = "StandardPrelude";
                                                                      var func2346 = function(argcv) {    // method |(_)
                                                                        var returnTarget = invocationCount;
                                                                        invocationCount++;
                                                                        var curarg = 1;
                                                                        var var_o = arguments[curarg];
                                                                        curarg++;
                                                                        setModuleName("StandardPrelude");
                                                                        setLineNumber(219);    // compilenode identifier
                                                                        // call case 6: other requests
                                                                        var call2348 = callmethodChecked(var_TypeVariant, "new(2)", [2], this, var_o);
                                                                        return call2348;
                                                                      };
                                                                      func2346.paramCounts = [1];
                                                                      obj2341.methods["|(1)"] = func2346;
                                                                      func2346.definitionLine = 218;
                                                                      func2346.definitionModule = "StandardPrelude";
                                                                      var func2349 = function(argcv) {    // method +(_)
                                                                        var returnTarget = invocationCount;
                                                                        invocationCount++;
                                                                        var curarg = 1;
                                                                        var var_o = arguments[curarg];
                                                                        curarg++;
                                                                        setModuleName("StandardPrelude");
                                                                        setLineNumber(222);    // compilenode identifier
                                                                        // call case 6: other requests
                                                                        var call2351 = callmethodChecked(var_TypeUnion, "new(2)", [2], this, var_o);
                                                                        return call2351;
                                                                      };
                                                                      func2349.paramCounts = [1];
                                                                      obj2341.methods["+(1)"] = func2349;
                                                                      func2349.definitionLine = 221;
                                                                      func2349.definitionModule = "StandardPrelude";
                                                                      var func2352 = function(argcv) {    // method -(_)
                                                                        var returnTarget = invocationCount;
                                                                        invocationCount++;
                                                                        var curarg = 1;
                                                                        var var_o = arguments[curarg];
                                                                        curarg++;
                                                                        setModuleName("StandardPrelude");
                                                                        setLineNumber(225);    // compilenode identifier
                                                                        // call case 6: other requests
                                                                        var call2354 = callmethodChecked(var_TypeSubtraction, "new(2)", [2], this, var_o);
                                                                        return call2354;
                                                                      };
                                                                      func2352.paramCounts = [1];
                                                                      obj2341.methods["-(1)"] = func2352;
                                                                      func2352.definitionLine = 224;
                                                                      func2352.definitionModule = "StandardPrelude";
                                                                      var func2355 = function(argcv) {    // method methodNames
                                                                        var returnTarget = invocationCount;
                                                                        invocationCount++;
                                                                        var curarg = 1;
                                                                        setModuleName("StandardPrelude");
                                                                        setLineNumber(228);    // compilenode member
                                                                        // call case 6: other requests
                                                                        var call2358 = callmethodChecked(var_t2, "methodNames", []);
                                                                        // call case 6: other requests
                                                                        // call case 6: other requests
                                                                        var call2360 = callmethodChecked(var_t1, "methodNames", []);
                                                                        var call2361 = callmethodChecked(call2360, "addAll(1)", [1], call2358);
                                                                        return call2361;
                                                                      };
                                                                      func2355.paramCounts = [0];
                                                                      obj2341.methods["methodNames"] = func2355;
                                                                      func2355.definitionLine = 227;
                                                                      func2355.definitionModule = "StandardPrelude";
                                                                      var func2362 = function(argcv) {    // method asString
                                                                        var returnTarget = invocationCount;
                                                                        invocationCount++;
                                                                        var curarg = 1;
                                                                        setModuleName("StandardPrelude");
                                                                        setLineNumber(230);    // compilenode string
                                                                        var string2363 = new GraceString(")");
                                                                        var string2366 = new GraceString(" & ");
                                                                        var string2369 = new GraceString("(");
                                                                        var opresult2371 = callmethodChecked(string2369, "++(1)", [1], var_t1);
                                                                        var opresult2373 = callmethodChecked(opresult2371, "++(1)", [1], string2366);
                                                                        var opresult2375 = callmethodChecked(opresult2373, "++(1)", [1], var_t2);
                                                                        var opresult2377 = callmethodChecked(opresult2375, "++(1)", [1], string2363);
                                                                        return opresult2377;
                                                                      };
                                                                      func2362.paramCounts = [0];
                                                                      obj2341.methods["asString"] = func2362;
                                                                      func2362.definitionLine = 230;
                                                                      func2362.definitionModule = "StandardPrelude";
                                                                      setLineNumber(213);    // compilenode identifier
                                                                      // call case 6: other requests
                                                                      var call2379 = callmethodChecked(var_AndPattern, "new(2)$object(1)", [2, 1], var_t1, var_t2, this);
                                                                      obj2341.superobj = call2379;
                                                                      if (call2379.data) obj2341.data = call2379.data;
                                                                      if (call2379.hasOwnProperty('_value'))
                                                                          obj2341._value = call2379._value;
                                                                      superDepth = origSuperDepth;
                                                                    };
                                                                    obj_init_2341.apply(obj2341, []);
                                                                    return obj2341;
                                                                  };
                                                                  func2340.paramCounts = [2];
                                                                  obj2338.methods["new(2)"] = func2340;
                                                                  func2340.definitionLine = 212;
                                                                  func2340.definitionModule = "StandardPrelude";
                                                                    var func2380 = function(argcv) {    // method new(_,_)$object(_)
                                                                      var curarg = 1;
                                                                      var var_t1 = arguments[curarg];
                                                                      curarg++;
                                                                      var var_t2 = arguments[curarg];
                                                                      curarg++;
                                                                      var inheritingObject = arguments[curarg++];
                                                                      // Start argument processing
                                                                      curarg = 1;
                                                                      curarg++;
                                                                      curarg++;
                                                                      // End argument processing
                                                                      setModuleName("StandardPrelude");
                                                                      var returnTarget = invocationCount;
                                                                      invocationCount++;
                                                                      var obj2381 = Grace_allocObject(null, "new(2)");
                                                                      obj2381.definitionModule = "StandardPrelude";
                                                                      obj2381.definitionLine = 212;
                                                                      var inho2381 = inheritingObject;
                                                                      while (inho2381.superobj) inho2381 = inho2381.superobj;
                                                                      inho2381.superobj = obj2381;
                                                                      obj2381.data = inheritingObject.data;
                                                                      if (inheritingObject.hasOwnProperty('_value'))
                                                                        obj2381._value = inheritingObject._value;
                                                                      obj2381.outer = this;
                                                                      var reader_StandardPrelude_outer2382 = function() {
                                                                        return this.outer;
                                                                      };
                                                                      obj2381.methods["outer"] = reader_StandardPrelude_outer2382;
                                                                      var obj_init_2381 = function() {
                                                                        var origSuperDepth = superDepth;
                                                                        superDepth = obj2381;
                                                                        var func2383 = function(argcv) {    // method &(_)
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          var var_o = arguments[curarg];
                                                                          curarg++;
                                                                          setModuleName("StandardPrelude");
                                                                          setLineNumber(216);    // compilenode identifier
                                                                          // call case 6: other requests
                                                                          var call2385 = callmethodChecked(var_TypeIntersection, "new(2)", [2], this, var_o);
                                                                          return call2385;
                                                                        };
                                                                        func2383.paramCounts = [1];
                                                                        obj2381.methods["&(1)"] = func2383;
                                                                        func2383.definitionLine = 215;
                                                                        func2383.definitionModule = "StandardPrelude";
                                                                        var func2386 = function(argcv) {    // method |(_)
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          var var_o = arguments[curarg];
                                                                          curarg++;
                                                                          setModuleName("StandardPrelude");
                                                                          setLineNumber(219);    // compilenode identifier
                                                                          // call case 6: other requests
                                                                          var call2388 = callmethodChecked(var_TypeVariant, "new(2)", [2], this, var_o);
                                                                          return call2388;
                                                                        };
                                                                        func2386.paramCounts = [1];
                                                                        obj2381.methods["|(1)"] = func2386;
                                                                        func2386.definitionLine = 218;
                                                                        func2386.definitionModule = "StandardPrelude";
                                                                        var func2389 = function(argcv) {    // method +(_)
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          var var_o = arguments[curarg];
                                                                          curarg++;
                                                                          setModuleName("StandardPrelude");
                                                                          setLineNumber(222);    // compilenode identifier
                                                                          // call case 6: other requests
                                                                          var call2391 = callmethodChecked(var_TypeUnion, "new(2)", [2], this, var_o);
                                                                          return call2391;
                                                                        };
                                                                        func2389.paramCounts = [1];
                                                                        obj2381.methods["+(1)"] = func2389;
                                                                        func2389.definitionLine = 221;
                                                                        func2389.definitionModule = "StandardPrelude";
                                                                        var func2392 = function(argcv) {    // method -(_)
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          var var_o = arguments[curarg];
                                                                          curarg++;
                                                                          setModuleName("StandardPrelude");
                                                                          setLineNumber(225);    // compilenode identifier
                                                                          // call case 6: other requests
                                                                          var call2394 = callmethodChecked(var_TypeSubtraction, "new(2)", [2], this, var_o);
                                                                          return call2394;
                                                                        };
                                                                        func2392.paramCounts = [1];
                                                                        obj2381.methods["-(1)"] = func2392;
                                                                        func2392.definitionLine = 224;
                                                                        func2392.definitionModule = "StandardPrelude";
                                                                        var func2395 = function(argcv) {    // method methodNames
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          setModuleName("StandardPrelude");
                                                                          setLineNumber(228);    // compilenode member
                                                                          // call case 6: other requests
                                                                          var call2398 = callmethodChecked(var_t2, "methodNames", []);
                                                                          // call case 6: other requests
                                                                          // call case 6: other requests
                                                                          var call2400 = callmethodChecked(var_t1, "methodNames", []);
                                                                          var call2401 = callmethodChecked(call2400, "addAll(1)", [1], call2398);
                                                                          return call2401;
                                                                        };
                                                                        func2395.paramCounts = [0];
                                                                        obj2381.methods["methodNames"] = func2395;
                                                                        func2395.definitionLine = 227;
                                                                        func2395.definitionModule = "StandardPrelude";
                                                                        var func2402 = function(argcv) {    // method asString
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          setModuleName("StandardPrelude");
                                                                          setLineNumber(230);    // compilenode string
                                                                          var string2403 = new GraceString(")");
                                                                          var string2406 = new GraceString(" & ");
                                                                          var string2409 = new GraceString("(");
                                                                          var opresult2411 = callmethodChecked(string2409, "++(1)", [1], var_t1);
                                                                          var opresult2413 = callmethodChecked(opresult2411, "++(1)", [1], string2406);
                                                                          var opresult2415 = callmethodChecked(opresult2413, "++(1)", [1], var_t2);
                                                                          var opresult2417 = callmethodChecked(opresult2415, "++(1)", [1], string2403);
                                                                          return opresult2417;
                                                                        };
                                                                        func2402.paramCounts = [0];
                                                                        obj2381.methods["asString"] = func2402;
                                                                        func2402.definitionLine = 230;
                                                                        func2402.definitionModule = "StandardPrelude";
                                                                        setLineNumber(213);    // compilenode identifier
                                                                        // call case 6: other requests
                                                                        var call2419 = callmethodChecked(var_AndPattern, "new(2)$object(1)", [2, 1], var_t1, var_t2, this);
                                                                        obj2381.superobj = call2419;
                                                                        if (call2419.data) obj2381.data = call2419.data;
                                                                        if (call2419.hasOwnProperty('_value'))
                                                                            obj2381._value = call2419._value;
                                                                        superDepth = origSuperDepth;
                                                                      };
                                                                      obj_init_2381.apply(inheritingObject, []);
                                                                      return obj2381;
                                                                      };
                                                                      obj2338.methods["new(2)$object(1)"] = func2380;
                                                                    var func2420 = function(argcv) {    // method asString
                                                                      var returnTarget = invocationCount;
                                                                      invocationCount++;
                                                                      var curarg = 1;
                                                                      setModuleName("StandardPrelude");
                                                                      setLineNumber(212);    // compilenode string
                                                                      var string2421 = new GraceString("class TypeIntersection");
                                                                      return string2421;
                                                                    };
                                                                    func2420.paramCounts = [0];
                                                                    obj2338.methods["asString"] = func2420;
                                                                    func2420.definitionLine = 212;
                                                                    func2420.definitionModule = "StandardPrelude";
                                                                    superDepth = origSuperDepth;
                                                                  };
                                                                  obj_init_2338.apply(obj2338, []);
                                                                  var var_TypeIntersection = obj2338;
                                                                  setLineNumber(1);    // compilenode method
                                                                  var func2422 = function(argcv) {    // method TypeIntersection
                                                                    var returnTarget = invocationCount;
                                                                    invocationCount++;
                                                                    var curarg = 1;
                                                                    setModuleName("StandardPrelude");
                                                                    // TypeIntersection is a simple accessor - elide try ... catch
                                                                    setLineNumber(212);    // compilenode identifier
                                                                    return var_TypeIntersection;
                                                                  };
                                                                  func2422.paramCounts = [0];
                                                                  this.methods["TypeIntersection"] = func2422;
                                                                  func2422.definitionLine = 1;
                                                                  func2422.definitionModule = "StandardPrelude";
                                                                  this.methods["TypeIntersection"].debug = "def";
                                                                  setLineNumber(233);    // compilenode object
                                                                  var obj2423 = Grace_allocObject(GraceObject, "TypeVariant");
                                                                  obj2423.definitionModule = "StandardPrelude";
                                                                  obj2423.definitionLine = 233;
                                                                  obj2423.outer = this;
                                                                  var reader_StandardPrelude_outer2424 = function() {
                                                                    return this.outer;
                                                                  };
                                                                  obj2423.methods["outer"] = reader_StandardPrelude_outer2424;
                                                                  var obj_init_2423 = function() {
                                                                    var origSuperDepth = superDepth;
                                                                    superDepth = obj2423;
                                                                    var func2425 = function(argcv) {    // method new(_,_)
                                                                      var returnTarget = invocationCount;
                                                                      invocationCount++;
                                                                      var curarg = 1;
                                                                      var var_t1 = arguments[curarg];
                                                                      curarg++;
                                                                      var var_t2 = arguments[curarg];
                                                                      curarg++;
                                                                      setModuleName("StandardPrelude");
                                                                      var obj2426 = Grace_allocObject(null, "new(2)");
                                                                      obj2426.definitionModule = "StandardPrelude";
                                                                      obj2426.definitionLine = 233;
                                                                      obj2426.outer = this;
                                                                      var reader_StandardPrelude_outer2427 = function() {
                                                                        return this.outer;
                                                                      };
                                                                      obj2426.methods["outer"] = reader_StandardPrelude_outer2427;
                                                                      var obj_init_2426 = function() {
                                                                        var origSuperDepth = superDepth;
                                                                        superDepth = obj2426;
                                                                        var func2428 = function(argcv) {    // method &(_)
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          var var_o = arguments[curarg];
                                                                          curarg++;
                                                                          setModuleName("StandardPrelude");
                                                                          setLineNumber(237);    // compilenode identifier
                                                                          // call case 6: other requests
                                                                          var call2430 = callmethodChecked(var_TypeIntersection, "new(2)", [2], this, var_o);
                                                                          return call2430;
                                                                        };
                                                                        func2428.paramCounts = [1];
                                                                        obj2426.methods["&(1)"] = func2428;
                                                                        func2428.definitionLine = 236;
                                                                        func2428.definitionModule = "StandardPrelude";
                                                                        var func2431 = function(argcv) {    // method |(_)
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          var var_o = arguments[curarg];
                                                                          curarg++;
                                                                          setModuleName("StandardPrelude");
                                                                          setLineNumber(240);    // compilenode identifier
                                                                          // call case 6: other requests
                                                                          var call2433 = callmethodChecked(var_TypeVariant, "new(2)", [2], this, var_o);
                                                                          return call2433;
                                                                        };
                                                                        func2431.paramCounts = [1];
                                                                        obj2426.methods["|(1)"] = func2431;
                                                                        func2431.definitionLine = 239;
                                                                        func2431.definitionModule = "StandardPrelude";
                                                                        var func2434 = function(argcv) {    // method +(_)
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          var var_o = arguments[curarg];
                                                                          curarg++;
                                                                          setModuleName("StandardPrelude");
                                                                          setLineNumber(243);    // compilenode identifier
                                                                          // call case 6: other requests
                                                                          var call2436 = callmethodChecked(var_TypeUnion, "new(2)", [2], this, var_o);
                                                                          return call2436;
                                                                        };
                                                                        func2434.paramCounts = [1];
                                                                        obj2426.methods["+(1)"] = func2434;
                                                                        func2434.definitionLine = 242;
                                                                        func2434.definitionModule = "StandardPrelude";
                                                                        var func2437 = function(argcv) {    // method -(_)
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          var var_o = arguments[curarg];
                                                                          curarg++;
                                                                          setModuleName("StandardPrelude");
                                                                          setLineNumber(246);    // compilenode identifier
                                                                          // call case 6: other requests
                                                                          var call2439 = callmethodChecked(var_TypeSubtraction, "new(2)", [2], this, var_o);
                                                                          return call2439;
                                                                        };
                                                                        func2437.paramCounts = [1];
                                                                        obj2426.methods["-(1)"] = func2437;
                                                                        func2437.definitionLine = 245;
                                                                        func2437.definitionModule = "StandardPrelude";
                                                                        var func2440 = function(argcv) {    // method methodNames
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          setModuleName("StandardPrelude");
                                                                          setLineNumber(249);    // compilenode member
                                                                          // call case 4: self request
                                                                          onSelf = true;
                                                                          var call2442 = callmethodChecked(this, "TypeVariantsCannotBeCharacterizedByASetOfMethods", []);
                                                                          return call2442;
                                                                        };
                                                                        func2440.paramCounts = [0];
                                                                        obj2426.methods["methodNames"] = func2440;
                                                                        func2440.definitionLine = 248;
                                                                        func2440.definitionModule = "StandardPrelude";
                                                                        var func2443 = function(argcv) {    // method asString
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          setModuleName("StandardPrelude");
                                                                          setLineNumber(251);    // compilenode string
                                                                          var string2444 = new GraceString(")");
                                                                          var string2447 = new GraceString(" | ");
                                                                          var string2450 = new GraceString("(");
                                                                          var opresult2452 = callmethodChecked(string2450, "++(1)", [1], var_t1);
                                                                          var opresult2454 = callmethodChecked(opresult2452, "++(1)", [1], string2447);
                                                                          var opresult2456 = callmethodChecked(opresult2454, "++(1)", [1], var_t2);
                                                                          var opresult2458 = callmethodChecked(opresult2456, "++(1)", [1], string2444);
                                                                          return opresult2458;
                                                                        };
                                                                        func2443.paramCounts = [0];
                                                                        obj2426.methods["asString"] = func2443;
                                                                        func2443.definitionLine = 251;
                                                                        func2443.definitionModule = "StandardPrelude";
                                                                        setLineNumber(234);    // compilenode identifier
                                                                        // call case 6: other requests
                                                                        var call2460 = callmethodChecked(var_OrPattern, "new(2)$object(1)", [2, 1], var_t1, var_t2, this);
                                                                        obj2426.superobj = call2460;
                                                                        if (call2460.data) obj2426.data = call2460.data;
                                                                        if (call2460.hasOwnProperty('_value'))
                                                                            obj2426._value = call2460._value;
                                                                        superDepth = origSuperDepth;
                                                                      };
                                                                      obj_init_2426.apply(obj2426, []);
                                                                      return obj2426;
                                                                    };
                                                                    func2425.paramCounts = [2];
                                                                    obj2423.methods["new(2)"] = func2425;
                                                                    func2425.definitionLine = 233;
                                                                    func2425.definitionModule = "StandardPrelude";
                                                                      var func2461 = function(argcv) {    // method new(_,_)$object(_)
                                                                        var curarg = 1;
                                                                        var var_t1 = arguments[curarg];
                                                                        curarg++;
                                                                        var var_t2 = arguments[curarg];
                                                                        curarg++;
                                                                        var inheritingObject = arguments[curarg++];
                                                                        // Start argument processing
                                                                        curarg = 1;
                                                                        curarg++;
                                                                        curarg++;
                                                                        // End argument processing
                                                                        setModuleName("StandardPrelude");
                                                                        var returnTarget = invocationCount;
                                                                        invocationCount++;
                                                                        var obj2462 = Grace_allocObject(null, "new(2)");
                                                                        obj2462.definitionModule = "StandardPrelude";
                                                                        obj2462.definitionLine = 233;
                                                                        var inho2462 = inheritingObject;
                                                                        while (inho2462.superobj) inho2462 = inho2462.superobj;
                                                                        inho2462.superobj = obj2462;
                                                                        obj2462.data = inheritingObject.data;
                                                                        if (inheritingObject.hasOwnProperty('_value'))
                                                                          obj2462._value = inheritingObject._value;
                                                                        obj2462.outer = this;
                                                                        var reader_StandardPrelude_outer2463 = function() {
                                                                          return this.outer;
                                                                        };
                                                                        obj2462.methods["outer"] = reader_StandardPrelude_outer2463;
                                                                        var obj_init_2462 = function() {
                                                                          var origSuperDepth = superDepth;
                                                                          superDepth = obj2462;
                                                                          var func2464 = function(argcv) {    // method &(_)
                                                                            var returnTarget = invocationCount;
                                                                            invocationCount++;
                                                                            var curarg = 1;
                                                                            var var_o = arguments[curarg];
                                                                            curarg++;
                                                                            setModuleName("StandardPrelude");
                                                                            setLineNumber(237);    // compilenode identifier
                                                                            // call case 6: other requests
                                                                            var call2466 = callmethodChecked(var_TypeIntersection, "new(2)", [2], this, var_o);
                                                                            return call2466;
                                                                          };
                                                                          func2464.paramCounts = [1];
                                                                          obj2462.methods["&(1)"] = func2464;
                                                                          func2464.definitionLine = 236;
                                                                          func2464.definitionModule = "StandardPrelude";
                                                                          var func2467 = function(argcv) {    // method |(_)
                                                                            var returnTarget = invocationCount;
                                                                            invocationCount++;
                                                                            var curarg = 1;
                                                                            var var_o = arguments[curarg];
                                                                            curarg++;
                                                                            setModuleName("StandardPrelude");
                                                                            setLineNumber(240);    // compilenode identifier
                                                                            // call case 6: other requests
                                                                            var call2469 = callmethodChecked(var_TypeVariant, "new(2)", [2], this, var_o);
                                                                            return call2469;
                                                                          };
                                                                          func2467.paramCounts = [1];
                                                                          obj2462.methods["|(1)"] = func2467;
                                                                          func2467.definitionLine = 239;
                                                                          func2467.definitionModule = "StandardPrelude";
                                                                          var func2470 = function(argcv) {    // method +(_)
                                                                            var returnTarget = invocationCount;
                                                                            invocationCount++;
                                                                            var curarg = 1;
                                                                            var var_o = arguments[curarg];
                                                                            curarg++;
                                                                            setModuleName("StandardPrelude");
                                                                            setLineNumber(243);    // compilenode identifier
                                                                            // call case 6: other requests
                                                                            var call2472 = callmethodChecked(var_TypeUnion, "new(2)", [2], this, var_o);
                                                                            return call2472;
                                                                          };
                                                                          func2470.paramCounts = [1];
                                                                          obj2462.methods["+(1)"] = func2470;
                                                                          func2470.definitionLine = 242;
                                                                          func2470.definitionModule = "StandardPrelude";
                                                                          var func2473 = function(argcv) {    // method -(_)
                                                                            var returnTarget = invocationCount;
                                                                            invocationCount++;
                                                                            var curarg = 1;
                                                                            var var_o = arguments[curarg];
                                                                            curarg++;
                                                                            setModuleName("StandardPrelude");
                                                                            setLineNumber(246);    // compilenode identifier
                                                                            // call case 6: other requests
                                                                            var call2475 = callmethodChecked(var_TypeSubtraction, "new(2)", [2], this, var_o);
                                                                            return call2475;
                                                                          };
                                                                          func2473.paramCounts = [1];
                                                                          obj2462.methods["-(1)"] = func2473;
                                                                          func2473.definitionLine = 245;
                                                                          func2473.definitionModule = "StandardPrelude";
                                                                          var func2476 = function(argcv) {    // method methodNames
                                                                            var returnTarget = invocationCount;
                                                                            invocationCount++;
                                                                            var curarg = 1;
                                                                            setModuleName("StandardPrelude");
                                                                            setLineNumber(249);    // compilenode member
                                                                            // call case 4: self request
                                                                            onSelf = true;
                                                                            var call2478 = callmethodChecked(this, "TypeVariantsCannotBeCharacterizedByASetOfMethods", []);
                                                                            return call2478;
                                                                          };
                                                                          func2476.paramCounts = [0];
                                                                          obj2462.methods["methodNames"] = func2476;
                                                                          func2476.definitionLine = 248;
                                                                          func2476.definitionModule = "StandardPrelude";
                                                                          var func2479 = function(argcv) {    // method asString
                                                                            var returnTarget = invocationCount;
                                                                            invocationCount++;
                                                                            var curarg = 1;
                                                                            setModuleName("StandardPrelude");
                                                                            setLineNumber(251);    // compilenode string
                                                                            var string2480 = new GraceString(")");
                                                                            var string2483 = new GraceString(" | ");
                                                                            var string2486 = new GraceString("(");
                                                                            var opresult2488 = callmethodChecked(string2486, "++(1)", [1], var_t1);
                                                                            var opresult2490 = callmethodChecked(opresult2488, "++(1)", [1], string2483);
                                                                            var opresult2492 = callmethodChecked(opresult2490, "++(1)", [1], var_t2);
                                                                            var opresult2494 = callmethodChecked(opresult2492, "++(1)", [1], string2480);
                                                                            return opresult2494;
                                                                          };
                                                                          func2479.paramCounts = [0];
                                                                          obj2462.methods["asString"] = func2479;
                                                                          func2479.definitionLine = 251;
                                                                          func2479.definitionModule = "StandardPrelude";
                                                                          setLineNumber(234);    // compilenode identifier
                                                                          // call case 6: other requests
                                                                          var call2496 = callmethodChecked(var_OrPattern, "new(2)$object(1)", [2, 1], var_t1, var_t2, this);
                                                                          obj2462.superobj = call2496;
                                                                          if (call2496.data) obj2462.data = call2496.data;
                                                                          if (call2496.hasOwnProperty('_value'))
                                                                              obj2462._value = call2496._value;
                                                                          superDepth = origSuperDepth;
                                                                        };
                                                                        obj_init_2462.apply(inheritingObject, []);
                                                                        return obj2462;
                                                                        };
                                                                        obj2423.methods["new(2)$object(1)"] = func2461;
                                                                      var func2497 = function(argcv) {    // method asString
                                                                        var returnTarget = invocationCount;
                                                                        invocationCount++;
                                                                        var curarg = 1;
                                                                        setModuleName("StandardPrelude");
                                                                        setLineNumber(233);    // compilenode string
                                                                        var string2498 = new GraceString("class TypeVariant");
                                                                        return string2498;
                                                                      };
                                                                      func2497.paramCounts = [0];
                                                                      obj2423.methods["asString"] = func2497;
                                                                      func2497.definitionLine = 233;
                                                                      func2497.definitionModule = "StandardPrelude";
                                                                      superDepth = origSuperDepth;
                                                                    };
                                                                    obj_init_2423.apply(obj2423, []);
                                                                    var var_TypeVariant = obj2423;
                                                                    setLineNumber(1);    // compilenode method
                                                                    var func2499 = function(argcv) {    // method TypeVariant
                                                                      var returnTarget = invocationCount;
                                                                      invocationCount++;
                                                                      var curarg = 1;
                                                                      setModuleName("StandardPrelude");
                                                                      // TypeVariant is a simple accessor - elide try ... catch
                                                                      setLineNumber(233);    // compilenode identifier
                                                                      return var_TypeVariant;
                                                                    };
                                                                    func2499.paramCounts = [0];
                                                                    this.methods["TypeVariant"] = func2499;
                                                                    func2499.definitionLine = 1;
                                                                    func2499.definitionModule = "StandardPrelude";
                                                                    this.methods["TypeVariant"].debug = "def";
                                                                    setLineNumber(254);    // compilenode object
                                                                    var obj2500 = Grace_allocObject(GraceObject, "TypeUnion");
                                                                    obj2500.definitionModule = "StandardPrelude";
                                                                    obj2500.definitionLine = 254;
                                                                    obj2500.outer = this;
                                                                    var reader_StandardPrelude_outer2501 = function() {
                                                                      return this.outer;
                                                                    };
                                                                    obj2500.methods["outer"] = reader_StandardPrelude_outer2501;
                                                                    var obj_init_2500 = function() {
                                                                      var origSuperDepth = superDepth;
                                                                      superDepth = obj2500;
                                                                      var func2502 = function(argcv) {    // method new(_,_)
                                                                        var returnTarget = invocationCount;
                                                                        invocationCount++;
                                                                        var curarg = 1;
                                                                        var var_t1 = arguments[curarg];
                                                                        curarg++;
                                                                        var var_t2 = arguments[curarg];
                                                                        curarg++;
                                                                        setModuleName("StandardPrelude");
                                                                        var obj2503 = Grace_allocObject(null, "new(2)");
                                                                        obj2503.definitionModule = "StandardPrelude";
                                                                        obj2503.definitionLine = 254;
                                                                        obj2503.outer = this;
                                                                        var reader_StandardPrelude_outer2504 = function() {
                                                                          return this.outer;
                                                                        };
                                                                        obj2503.methods["outer"] = reader_StandardPrelude_outer2504;
                                                                        var obj_init_2503 = function() {
                                                                          var origSuperDepth = superDepth;
                                                                          superDepth = obj2503;
                                                                          var func2505 = function(argcv) {    // method &(_)
                                                                            var returnTarget = invocationCount;
                                                                            invocationCount++;
                                                                            var curarg = 1;
                                                                            var var_o = arguments[curarg];
                                                                            curarg++;
                                                                            setModuleName("StandardPrelude");
                                                                            setLineNumber(258);    // compilenode identifier
                                                                            // call case 6: other requests
                                                                            var call2507 = callmethodChecked(var_TypeIntersection, "new(2)", [2], this, var_o);
                                                                            return call2507;
                                                                          };
                                                                          func2505.paramCounts = [1];
                                                                          obj2503.methods["&(1)"] = func2505;
                                                                          func2505.definitionLine = 257;
                                                                          func2505.definitionModule = "StandardPrelude";
                                                                          var func2508 = function(argcv) {    // method |(_)
                                                                            var returnTarget = invocationCount;
                                                                            invocationCount++;
                                                                            var curarg = 1;
                                                                            var var_o = arguments[curarg];
                                                                            curarg++;
                                                                            setModuleName("StandardPrelude");
                                                                            setLineNumber(261);    // compilenode identifier
                                                                            // call case 6: other requests
                                                                            var call2510 = callmethodChecked(var_TypeVariant, "new(2)", [2], this, var_o);
                                                                            return call2510;
                                                                          };
                                                                          func2508.paramCounts = [1];
                                                                          obj2503.methods["|(1)"] = func2508;
                                                                          func2508.definitionLine = 260;
                                                                          func2508.definitionModule = "StandardPrelude";
                                                                          var func2511 = function(argcv) {    // method +(_)
                                                                            var returnTarget = invocationCount;
                                                                            invocationCount++;
                                                                            var curarg = 1;
                                                                            var var_o = arguments[curarg];
                                                                            curarg++;
                                                                            setModuleName("StandardPrelude");
                                                                            setLineNumber(264);    // compilenode identifier
                                                                            // call case 6: other requests
                                                                            var call2513 = callmethodChecked(var_TypeUnion, "new(2)", [2], this, var_o);
                                                                            return call2513;
                                                                          };
                                                                          func2511.paramCounts = [1];
                                                                          obj2503.methods["+(1)"] = func2511;
                                                                          func2511.definitionLine = 263;
                                                                          func2511.definitionModule = "StandardPrelude";
                                                                          var func2514 = function(argcv) {    // method -(_)
                                                                            var returnTarget = invocationCount;
                                                                            invocationCount++;
                                                                            var curarg = 1;
                                                                            var var_o = arguments[curarg];
                                                                            curarg++;
                                                                            setModuleName("StandardPrelude");
                                                                            setLineNumber(267);    // compilenode identifier
                                                                            // call case 6: other requests
                                                                            var call2516 = callmethodChecked(var_TypeSubtraction, "new(2)", [2], this, var_o);
                                                                            return call2516;
                                                                          };
                                                                          func2514.paramCounts = [1];
                                                                          obj2503.methods["-(1)"] = func2514;
                                                                          func2514.definitionLine = 266;
                                                                          func2514.definitionModule = "StandardPrelude";
                                                                          var func2517 = function(argcv) {    // method methodNames
                                                                            var returnTarget = invocationCount;
                                                                            invocationCount++;
                                                                            var curarg = 1;
                                                                            setModuleName("StandardPrelude");
                                                                            setLineNumber(270);    // compilenode member
                                                                            // call case 6: other requests
                                                                            var call2519 = callmethodChecked(var_t2, "methodNames", []);
                                                                            // call case 6: other requests
                                                                            var call2522 = callmethodChecked(var_t1, "methodNames", []);
                                                                            var opresult2524 = callmethodChecked(call2522, "**(1)", [1], call2519);
                                                                            return opresult2524;
                                                                          };
                                                                          func2517.paramCounts = [0];
                                                                          obj2503.methods["methodNames"] = func2517;
                                                                          func2517.definitionLine = 269;
                                                                          func2517.definitionModule = "StandardPrelude";
                                                                          var func2525 = function(argcv) {    // method match(_)
                                                                            var returnTarget = invocationCount;
                                                                            invocationCount++;
                                                                            var curarg = 1;
                                                                            var var_o = arguments[curarg];
                                                                            curarg++;
                                                                            setModuleName("StandardPrelude");
                                                                            setLineNumber(273);    // compilenode string
                                                                            var string2527 = new GraceString("matching against a TypeUnion not yet implemented");
                                                                            // call case 6: other requests
                                                                            // call case 5: prelude request
                                                                            var call2529 = callmethodChecked(var_prelude, "ResourceException", []);
                                                                            var call2530 = callmethodChecked(call2529, "raise(1)", [1], string2527);
                                                                            setLineNumber(276);    // compilenode identifier
                                                                            var var_mirror = ellipsis;
                                                                            setLineNumber(277);    // compilenode member
                                                                            // call case 6: other requests
                                                                            // call case 6: other requests
                                                                            var call2533 = callmethodChecked(var_mirror, "reflect(1)", [1], var_o);
                                                                            var call2534 = callmethodChecked(call2533, "methodNames", []);
                                                                            var var_oMethodNames = call2534;
                                                                            setLineNumber(278);    // compilenode member
                                                                            // call case 4: self request
                                                                            onSelf = true;
                                                                            var call2537 = callmethodChecked(this, "methodNames", []);
                                                                            var block2538 = new GraceBlock(this, 278, 1);
                                                                            setLineNumber(1);    // compilenode identifier
                                                                            block2538.real = function(var_each) {
                                                                              var if2539 = GraceDone;
                                                                              setLineNumber(279);    // compilenode call
                                                                              // call case 6: other requests
                                                                              // call case 6: other requests
                                                                              var call2542 = callmethodChecked(var_oMethodNames, "contains(1)", [1], var_each);
                                                                              var call2543 = callmethodChecked(call2542, "prefix!", [0]);
                                                                              if (Grace_isTrue(call2543)) {
                                                                                setLineNumber(280);    // compilenode identifier
                                                                                // call case 6: other requests
                                                                                var call2545 = callmethodChecked(var_FailedMatch, "new(1)", [1], var_o);
                                                                                throw new ReturnException(call2545, returnTarget);
                                                                              }
                                                                              return if2539;
                                                                            };
                                                                            // call case 5: prelude request
                                                                            var call2546 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call2537, block2538);
                                                                            setLineNumber(283);    // compilenode array
                                                                            var array2548 = new PrimitiveGraceList([]);
                                                                            // call case 6: other requests
                                                                            var call2549 = callmethodChecked(var_SuccessfulMatch, "new(2)", [2], var_o, array2548);
                                                                            return call2549;
                                                                          };
                                                                          func2525.paramCounts = [1];
                                                                          obj2503.methods["match(1)"] = func2525;
                                                                          func2525.definitionLine = 272;
                                                                          func2525.definitionModule = "StandardPrelude";
                                                                          var func2550 = function(argcv) {    // method asString
                                                                            var returnTarget = invocationCount;
                                                                            invocationCount++;
                                                                            var curarg = 1;
                                                                            setModuleName("StandardPrelude");
                                                                            setLineNumber(285);    // compilenode string
                                                                            var string2551 = new GraceString(")");
                                                                            var string2554 = new GraceString(" + ");
                                                                            var string2557 = new GraceString("(");
                                                                            var opresult2559 = callmethodChecked(string2557, "++(1)", [1], var_t1);
                                                                            var opresult2561 = callmethodChecked(opresult2559, "++(1)", [1], string2554);
                                                                            var opresult2563 = callmethodChecked(opresult2561, "++(1)", [1], var_t2);
                                                                            var opresult2565 = callmethodChecked(opresult2563, "++(1)", [1], string2551);
                                                                            return opresult2565;
                                                                          };
                                                                          func2550.paramCounts = [0];
                                                                          obj2503.methods["asString"] = func2550;
                                                                          func2550.definitionLine = 285;
                                                                          func2550.definitionModule = "StandardPrelude";
                                                                          setLineNumber(255);    // compilenode identifier
                                                                          // call case 6: other requests
                                                                          var call2567 = callmethodChecked(var_BasicPattern, "new$object(1)", [0, 1], this);
                                                                          obj2503.superobj = call2567;
                                                                          if (call2567.data) obj2503.data = call2567.data;
                                                                          if (call2567.hasOwnProperty('_value'))
                                                                              obj2503._value = call2567._value;
                                                                          superDepth = origSuperDepth;
                                                                        };
                                                                        obj_init_2503.apply(obj2503, []);
                                                                        return obj2503;
                                                                      };
                                                                      func2502.paramCounts = [2];
                                                                      obj2500.methods["new(2)"] = func2502;
                                                                      func2502.definitionLine = 254;
                                                                      func2502.definitionModule = "StandardPrelude";
                                                                        var func2568 = function(argcv) {    // method new(_,_)$object(_)
                                                                          var curarg = 1;
                                                                          var var_t1 = arguments[curarg];
                                                                          curarg++;
                                                                          var var_t2 = arguments[curarg];
                                                                          curarg++;
                                                                          var inheritingObject = arguments[curarg++];
                                                                          // Start argument processing
                                                                          curarg = 1;
                                                                          curarg++;
                                                                          curarg++;
                                                                          // End argument processing
                                                                          setModuleName("StandardPrelude");
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var obj2569 = Grace_allocObject(null, "new(2)");
                                                                          obj2569.definitionModule = "StandardPrelude";
                                                                          obj2569.definitionLine = 254;
                                                                          var inho2569 = inheritingObject;
                                                                          while (inho2569.superobj) inho2569 = inho2569.superobj;
                                                                          inho2569.superobj = obj2569;
                                                                          obj2569.data = inheritingObject.data;
                                                                          if (inheritingObject.hasOwnProperty('_value'))
                                                                            obj2569._value = inheritingObject._value;
                                                                          obj2569.outer = this;
                                                                          var reader_StandardPrelude_outer2570 = function() {
                                                                            return this.outer;
                                                                          };
                                                                          obj2569.methods["outer"] = reader_StandardPrelude_outer2570;
                                                                          var obj_init_2569 = function() {
                                                                            var origSuperDepth = superDepth;
                                                                            superDepth = obj2569;
                                                                            var func2571 = function(argcv) {    // method &(_)
                                                                              var returnTarget = invocationCount;
                                                                              invocationCount++;
                                                                              var curarg = 1;
                                                                              var var_o = arguments[curarg];
                                                                              curarg++;
                                                                              setModuleName("StandardPrelude");
                                                                              setLineNumber(258);    // compilenode identifier
                                                                              // call case 6: other requests
                                                                              var call2573 = callmethodChecked(var_TypeIntersection, "new(2)", [2], this, var_o);
                                                                              return call2573;
                                                                            };
                                                                            func2571.paramCounts = [1];
                                                                            obj2569.methods["&(1)"] = func2571;
                                                                            func2571.definitionLine = 257;
                                                                            func2571.definitionModule = "StandardPrelude";
                                                                            var func2574 = function(argcv) {    // method |(_)
                                                                              var returnTarget = invocationCount;
                                                                              invocationCount++;
                                                                              var curarg = 1;
                                                                              var var_o = arguments[curarg];
                                                                              curarg++;
                                                                              setModuleName("StandardPrelude");
                                                                              setLineNumber(261);    // compilenode identifier
                                                                              // call case 6: other requests
                                                                              var call2576 = callmethodChecked(var_TypeVariant, "new(2)", [2], this, var_o);
                                                                              return call2576;
                                                                            };
                                                                            func2574.paramCounts = [1];
                                                                            obj2569.methods["|(1)"] = func2574;
                                                                            func2574.definitionLine = 260;
                                                                            func2574.definitionModule = "StandardPrelude";
                                                                            var func2577 = function(argcv) {    // method +(_)
                                                                              var returnTarget = invocationCount;
                                                                              invocationCount++;
                                                                              var curarg = 1;
                                                                              var var_o = arguments[curarg];
                                                                              curarg++;
                                                                              setModuleName("StandardPrelude");
                                                                              setLineNumber(264);    // compilenode identifier
                                                                              // call case 6: other requests
                                                                              var call2579 = callmethodChecked(var_TypeUnion, "new(2)", [2], this, var_o);
                                                                              return call2579;
                                                                            };
                                                                            func2577.paramCounts = [1];
                                                                            obj2569.methods["+(1)"] = func2577;
                                                                            func2577.definitionLine = 263;
                                                                            func2577.definitionModule = "StandardPrelude";
                                                                            var func2580 = function(argcv) {    // method -(_)
                                                                              var returnTarget = invocationCount;
                                                                              invocationCount++;
                                                                              var curarg = 1;
                                                                              var var_o = arguments[curarg];
                                                                              curarg++;
                                                                              setModuleName("StandardPrelude");
                                                                              setLineNumber(267);    // compilenode identifier
                                                                              // call case 6: other requests
                                                                              var call2582 = callmethodChecked(var_TypeSubtraction, "new(2)", [2], this, var_o);
                                                                              return call2582;
                                                                            };
                                                                            func2580.paramCounts = [1];
                                                                            obj2569.methods["-(1)"] = func2580;
                                                                            func2580.definitionLine = 266;
                                                                            func2580.definitionModule = "StandardPrelude";
                                                                            var func2583 = function(argcv) {    // method methodNames
                                                                              var returnTarget = invocationCount;
                                                                              invocationCount++;
                                                                              var curarg = 1;
                                                                              setModuleName("StandardPrelude");
                                                                              setLineNumber(270);    // compilenode member
                                                                              // call case 6: other requests
                                                                              var call2585 = callmethodChecked(var_t2, "methodNames", []);
                                                                              // call case 6: other requests
                                                                              var call2588 = callmethodChecked(var_t1, "methodNames", []);
                                                                              var opresult2590 = callmethodChecked(call2588, "**(1)", [1], call2585);
                                                                              return opresult2590;
                                                                            };
                                                                            func2583.paramCounts = [0];
                                                                            obj2569.methods["methodNames"] = func2583;
                                                                            func2583.definitionLine = 269;
                                                                            func2583.definitionModule = "StandardPrelude";
                                                                            var func2591 = function(argcv) {    // method match(_)
                                                                              var returnTarget = invocationCount;
                                                                              invocationCount++;
                                                                              var curarg = 1;
                                                                              var var_o = arguments[curarg];
                                                                              curarg++;
                                                                              setModuleName("StandardPrelude");
                                                                              setLineNumber(273);    // compilenode string
                                                                              var string2593 = new GraceString("matching against a TypeUnion not yet implemented");
                                                                              // call case 6: other requests
                                                                              // call case 5: prelude request
                                                                              var call2595 = callmethodChecked(var_prelude, "ResourceException", []);
                                                                              var call2596 = callmethodChecked(call2595, "raise(1)", [1], string2593);
                                                                              setLineNumber(276);    // compilenode identifier
                                                                              var var_mirror = ellipsis;
                                                                              setLineNumber(277);    // compilenode member
                                                                              // call case 6: other requests
                                                                              // call case 6: other requests
                                                                              var call2599 = callmethodChecked(var_mirror, "reflect(1)", [1], var_o);
                                                                              var call2600 = callmethodChecked(call2599, "methodNames", []);
                                                                              var var_oMethodNames = call2600;
                                                                              setLineNumber(278);    // compilenode member
                                                                              // call case 4: self request
                                                                              onSelf = true;
                                                                              var call2603 = callmethodChecked(this, "methodNames", []);
                                                                              var block2604 = new GraceBlock(this, 278, 1);
                                                                              setLineNumber(1);    // compilenode identifier
                                                                              block2604.real = function(var_each) {
                                                                                var if2605 = GraceDone;
                                                                                setLineNumber(279);    // compilenode call
                                                                                // call case 6: other requests
                                                                                // call case 6: other requests
                                                                                var call2608 = callmethodChecked(var_oMethodNames, "contains(1)", [1], var_each);
                                                                                var call2609 = callmethodChecked(call2608, "prefix!", [0]);
                                                                                if (Grace_isTrue(call2609)) {
                                                                                  setLineNumber(280);    // compilenode identifier
                                                                                  // call case 6: other requests
                                                                                  var call2611 = callmethodChecked(var_FailedMatch, "new(1)", [1], var_o);
                                                                                  throw new ReturnException(call2611, returnTarget);
                                                                                }
                                                                                return if2605;
                                                                              };
                                                                              // call case 5: prelude request
                                                                              var call2612 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call2603, block2604);
                                                                              setLineNumber(283);    // compilenode array
                                                                              var array2614 = new PrimitiveGraceList([]);
                                                                              // call case 6: other requests
                                                                              var call2615 = callmethodChecked(var_SuccessfulMatch, "new(2)", [2], var_o, array2614);
                                                                              return call2615;
                                                                            };
                                                                            func2591.paramCounts = [1];
                                                                            obj2569.methods["match(1)"] = func2591;
                                                                            func2591.definitionLine = 272;
                                                                            func2591.definitionModule = "StandardPrelude";
                                                                            var func2616 = function(argcv) {    // method asString
                                                                              var returnTarget = invocationCount;
                                                                              invocationCount++;
                                                                              var curarg = 1;
                                                                              setModuleName("StandardPrelude");
                                                                              setLineNumber(285);    // compilenode string
                                                                              var string2617 = new GraceString(")");
                                                                              var string2620 = new GraceString(" + ");
                                                                              var string2623 = new GraceString("(");
                                                                              var opresult2625 = callmethodChecked(string2623, "++(1)", [1], var_t1);
                                                                              var opresult2627 = callmethodChecked(opresult2625, "++(1)", [1], string2620);
                                                                              var opresult2629 = callmethodChecked(opresult2627, "++(1)", [1], var_t2);
                                                                              var opresult2631 = callmethodChecked(opresult2629, "++(1)", [1], string2617);
                                                                              return opresult2631;
                                                                            };
                                                                            func2616.paramCounts = [0];
                                                                            obj2569.methods["asString"] = func2616;
                                                                            func2616.definitionLine = 285;
                                                                            func2616.definitionModule = "StandardPrelude";
                                                                            setLineNumber(255);    // compilenode identifier
                                                                            // call case 6: other requests
                                                                            var call2633 = callmethodChecked(var_BasicPattern, "new$object(1)", [0, 1], this);
                                                                            obj2569.superobj = call2633;
                                                                            if (call2633.data) obj2569.data = call2633.data;
                                                                            if (call2633.hasOwnProperty('_value'))
                                                                                obj2569._value = call2633._value;
                                                                            superDepth = origSuperDepth;
                                                                          };
                                                                          obj_init_2569.apply(inheritingObject, []);
                                                                          return obj2569;
                                                                          };
                                                                          obj2500.methods["new(2)$object(1)"] = func2568;
                                                                        var func2634 = function(argcv) {    // method asString
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          setModuleName("StandardPrelude");
                                                                          setLineNumber(254);    // compilenode string
                                                                          var string2635 = new GraceString("class TypeUnion");
                                                                          return string2635;
                                                                        };
                                                                        func2634.paramCounts = [0];
                                                                        obj2500.methods["asString"] = func2634;
                                                                        func2634.definitionLine = 254;
                                                                        func2634.definitionModule = "StandardPrelude";
                                                                        superDepth = origSuperDepth;
                                                                      };
                                                                      obj_init_2500.apply(obj2500, []);
                                                                      var var_TypeUnion = obj2500;
                                                                      setLineNumber(1);    // compilenode method
                                                                      var func2636 = function(argcv) {    // method TypeUnion
                                                                        var returnTarget = invocationCount;
                                                                        invocationCount++;
                                                                        var curarg = 1;
                                                                        setModuleName("StandardPrelude");
                                                                        // TypeUnion is a simple accessor - elide try ... catch
                                                                        setLineNumber(254);    // compilenode identifier
                                                                        return var_TypeUnion;
                                                                      };
                                                                      func2636.paramCounts = [0];
                                                                      this.methods["TypeUnion"] = func2636;
                                                                      func2636.definitionLine = 1;
                                                                      func2636.definitionModule = "StandardPrelude";
                                                                      this.methods["TypeUnion"].debug = "def";
                                                                      setLineNumber(288);    // compilenode object
                                                                      var obj2637 = Grace_allocObject(GraceObject, "TypeSubtraction");
                                                                      obj2637.definitionModule = "StandardPrelude";
                                                                      obj2637.definitionLine = 288;
                                                                      obj2637.outer = this;
                                                                      var reader_StandardPrelude_outer2638 = function() {
                                                                        return this.outer;
                                                                      };
                                                                      obj2637.methods["outer"] = reader_StandardPrelude_outer2638;
                                                                      var obj_init_2637 = function() {
                                                                        var origSuperDepth = superDepth;
                                                                        superDepth = obj2637;
                                                                        var func2639 = function(argcv) {    // method new(_,_)
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          var var_t1 = arguments[curarg];
                                                                          curarg++;
                                                                          var var_t2 = arguments[curarg];
                                                                          curarg++;
                                                                          setModuleName("StandardPrelude");
                                                                          var obj2640 = Grace_allocObject(null, "new(2)");
                                                                          obj2640.definitionModule = "StandardPrelude";
                                                                          obj2640.definitionLine = 288;
                                                                          obj2640.outer = this;
                                                                          var reader_StandardPrelude_outer2641 = function() {
                                                                            return this.outer;
                                                                          };
                                                                          obj2640.methods["outer"] = reader_StandardPrelude_outer2641;
                                                                          var obj_init_2640 = function() {
                                                                            var origSuperDepth = superDepth;
                                                                            superDepth = obj2640;
                                                                            var func2642 = function(argcv) {    // method &(_)
                                                                              var returnTarget = invocationCount;
                                                                              invocationCount++;
                                                                              var curarg = 1;
                                                                              var var_o = arguments[curarg];
                                                                              curarg++;
                                                                              setModuleName("StandardPrelude");
                                                                              setLineNumber(291);    // compilenode identifier
                                                                              // call case 6: other requests
                                                                              var call2644 = callmethodChecked(var_TypeIntersection, "new(2)", [2], this, var_o);
                                                                              return call2644;
                                                                            };
                                                                            func2642.paramCounts = [1];
                                                                            obj2640.methods["&(1)"] = func2642;
                                                                            func2642.definitionLine = 290;
                                                                            func2642.definitionModule = "StandardPrelude";
                                                                            var func2645 = function(argcv) {    // method |(_)
                                                                              var returnTarget = invocationCount;
                                                                              invocationCount++;
                                                                              var curarg = 1;
                                                                              var var_o = arguments[curarg];
                                                                              curarg++;
                                                                              setModuleName("StandardPrelude");
                                                                              setLineNumber(294);    // compilenode identifier
                                                                              // call case 6: other requests
                                                                              var call2647 = callmethodChecked(var_TypeVariant, "new(2)", [2], this, var_o);
                                                                              return call2647;
                                                                            };
                                                                            func2645.paramCounts = [1];
                                                                            obj2640.methods["|(1)"] = func2645;
                                                                            func2645.definitionLine = 293;
                                                                            func2645.definitionModule = "StandardPrelude";
                                                                            var func2648 = function(argcv) {    // method +(_)
                                                                              var returnTarget = invocationCount;
                                                                              invocationCount++;
                                                                              var curarg = 1;
                                                                              var var_o = arguments[curarg];
                                                                              curarg++;
                                                                              setModuleName("StandardPrelude");
                                                                              setLineNumber(297);    // compilenode identifier
                                                                              // call case 6: other requests
                                                                              var call2650 = callmethodChecked(var_TypeUnion, "new(2)", [2], this, var_o);
                                                                              return call2650;
                                                                            };
                                                                            func2648.paramCounts = [1];
                                                                            obj2640.methods["+(1)"] = func2648;
                                                                            func2648.definitionLine = 296;
                                                                            func2648.definitionModule = "StandardPrelude";
                                                                            var func2651 = function(argcv) {    // method -(_)
                                                                              var returnTarget = invocationCount;
                                                                              invocationCount++;
                                                                              var curarg = 1;
                                                                              var var_o = arguments[curarg];
                                                                              curarg++;
                                                                              setModuleName("StandardPrelude");
                                                                              setLineNumber(300);    // compilenode identifier
                                                                              // call case 6: other requests
                                                                              var call2653 = callmethodChecked(var_TypeSubtraction, "new(2)", [2], this, var_o);
                                                                              return call2653;
                                                                            };
                                                                            func2651.paramCounts = [1];
                                                                            obj2640.methods["-(1)"] = func2651;
                                                                            func2651.definitionLine = 299;
                                                                            func2651.definitionModule = "StandardPrelude";
                                                                            var func2654 = function(argcv) {    // method methodNames
                                                                              var returnTarget = invocationCount;
                                                                              invocationCount++;
                                                                              var curarg = 1;
                                                                              setModuleName("StandardPrelude");
                                                                              setLineNumber(303);    // compilenode member
                                                                              // call case 6: other requests
                                                                              var call2657 = callmethodChecked(var_t2, "methodNames", []);
                                                                              // call case 6: other requests
                                                                              // call case 6: other requests
                                                                              var call2659 = callmethodChecked(var_t1, "methodNames", []);
                                                                              var call2660 = callmethodChecked(call2659, "removeAll(1)", [1], call2657);
                                                                              return call2660;
                                                                            };
                                                                            func2654.paramCounts = [0];
                                                                            obj2640.methods["methodNames"] = func2654;
                                                                            func2654.definitionLine = 302;
                                                                            func2654.definitionModule = "StandardPrelude";
                                                                            var func2661 = function(argcv) {    // method asString
                                                                              var returnTarget = invocationCount;
                                                                              invocationCount++;
                                                                              var curarg = 1;
                                                                              setModuleName("StandardPrelude");
                                                                              setLineNumber(305);    // compilenode string
                                                                              var string2662 = new GraceString(")");
                                                                              var string2665 = new GraceString(" - ");
                                                                              var string2668 = new GraceString("(");
                                                                              var opresult2670 = callmethodChecked(string2668, "++(1)", [1], var_t1);
                                                                              var opresult2672 = callmethodChecked(opresult2670, "++(1)", [1], string2665);
                                                                              var opresult2674 = callmethodChecked(opresult2672, "++(1)", [1], var_t2);
                                                                              var opresult2676 = callmethodChecked(opresult2674, "++(1)", [1], string2662);
                                                                              return opresult2676;
                                                                            };
                                                                            func2661.paramCounts = [0];
                                                                            obj2640.methods["asString"] = func2661;
                                                                            func2661.definitionLine = 305;
                                                                            func2661.definitionModule = "StandardPrelude";
                                                                            setLineNumber(289);    // compilenode identifier
                                                                            // call case 6: other requests
                                                                            var call2678 = callmethodChecked(var_BasicPattern, "new$object(1)", [0, 1], this);
                                                                            obj2640.superobj = call2678;
                                                                            if (call2678.data) obj2640.data = call2678.data;
                                                                            if (call2678.hasOwnProperty('_value'))
                                                                                obj2640._value = call2678._value;
                                                                            superDepth = origSuperDepth;
                                                                          };
                                                                          obj_init_2640.apply(obj2640, []);
                                                                          return obj2640;
                                                                        };
                                                                        func2639.paramCounts = [2];
                                                                        obj2637.methods["new(2)"] = func2639;
                                                                        func2639.definitionLine = 288;
                                                                        func2639.definitionModule = "StandardPrelude";
                                                                          var func2679 = function(argcv) {    // method new(_,_)$object(_)
                                                                            var curarg = 1;
                                                                            var var_t1 = arguments[curarg];
                                                                            curarg++;
                                                                            var var_t2 = arguments[curarg];
                                                                            curarg++;
                                                                            var inheritingObject = arguments[curarg++];
                                                                            // Start argument processing
                                                                            curarg = 1;
                                                                            curarg++;
                                                                            curarg++;
                                                                            // End argument processing
                                                                            setModuleName("StandardPrelude");
                                                                            var returnTarget = invocationCount;
                                                                            invocationCount++;
                                                                            var obj2680 = Grace_allocObject(null, "new(2)");
                                                                            obj2680.definitionModule = "StandardPrelude";
                                                                            obj2680.definitionLine = 288;
                                                                            var inho2680 = inheritingObject;
                                                                            while (inho2680.superobj) inho2680 = inho2680.superobj;
                                                                            inho2680.superobj = obj2680;
                                                                            obj2680.data = inheritingObject.data;
                                                                            if (inheritingObject.hasOwnProperty('_value'))
                                                                              obj2680._value = inheritingObject._value;
                                                                            obj2680.outer = this;
                                                                            var reader_StandardPrelude_outer2681 = function() {
                                                                              return this.outer;
                                                                            };
                                                                            obj2680.methods["outer"] = reader_StandardPrelude_outer2681;
                                                                            var obj_init_2680 = function() {
                                                                              var origSuperDepth = superDepth;
                                                                              superDepth = obj2680;
                                                                              var func2682 = function(argcv) {    // method &(_)
                                                                                var returnTarget = invocationCount;
                                                                                invocationCount++;
                                                                                var curarg = 1;
                                                                                var var_o = arguments[curarg];
                                                                                curarg++;
                                                                                setModuleName("StandardPrelude");
                                                                                setLineNumber(291);    // compilenode identifier
                                                                                // call case 6: other requests
                                                                                var call2684 = callmethodChecked(var_TypeIntersection, "new(2)", [2], this, var_o);
                                                                                return call2684;
                                                                              };
                                                                              func2682.paramCounts = [1];
                                                                              obj2680.methods["&(1)"] = func2682;
                                                                              func2682.definitionLine = 290;
                                                                              func2682.definitionModule = "StandardPrelude";
                                                                              var func2685 = function(argcv) {    // method |(_)
                                                                                var returnTarget = invocationCount;
                                                                                invocationCount++;
                                                                                var curarg = 1;
                                                                                var var_o = arguments[curarg];
                                                                                curarg++;
                                                                                setModuleName("StandardPrelude");
                                                                                setLineNumber(294);    // compilenode identifier
                                                                                // call case 6: other requests
                                                                                var call2687 = callmethodChecked(var_TypeVariant, "new(2)", [2], this, var_o);
                                                                                return call2687;
                                                                              };
                                                                              func2685.paramCounts = [1];
                                                                              obj2680.methods["|(1)"] = func2685;
                                                                              func2685.definitionLine = 293;
                                                                              func2685.definitionModule = "StandardPrelude";
                                                                              var func2688 = function(argcv) {    // method +(_)
                                                                                var returnTarget = invocationCount;
                                                                                invocationCount++;
                                                                                var curarg = 1;
                                                                                var var_o = arguments[curarg];
                                                                                curarg++;
                                                                                setModuleName("StandardPrelude");
                                                                                setLineNumber(297);    // compilenode identifier
                                                                                // call case 6: other requests
                                                                                var call2690 = callmethodChecked(var_TypeUnion, "new(2)", [2], this, var_o);
                                                                                return call2690;
                                                                              };
                                                                              func2688.paramCounts = [1];
                                                                              obj2680.methods["+(1)"] = func2688;
                                                                              func2688.definitionLine = 296;
                                                                              func2688.definitionModule = "StandardPrelude";
                                                                              var func2691 = function(argcv) {    // method -(_)
                                                                                var returnTarget = invocationCount;
                                                                                invocationCount++;
                                                                                var curarg = 1;
                                                                                var var_o = arguments[curarg];
                                                                                curarg++;
                                                                                setModuleName("StandardPrelude");
                                                                                setLineNumber(300);    // compilenode identifier
                                                                                // call case 6: other requests
                                                                                var call2693 = callmethodChecked(var_TypeSubtraction, "new(2)", [2], this, var_o);
                                                                                return call2693;
                                                                              };
                                                                              func2691.paramCounts = [1];
                                                                              obj2680.methods["-(1)"] = func2691;
                                                                              func2691.definitionLine = 299;
                                                                              func2691.definitionModule = "StandardPrelude";
                                                                              var func2694 = function(argcv) {    // method methodNames
                                                                                var returnTarget = invocationCount;
                                                                                invocationCount++;
                                                                                var curarg = 1;
                                                                                setModuleName("StandardPrelude");
                                                                                setLineNumber(303);    // compilenode member
                                                                                // call case 6: other requests
                                                                                var call2697 = callmethodChecked(var_t2, "methodNames", []);
                                                                                // call case 6: other requests
                                                                                // call case 6: other requests
                                                                                var call2699 = callmethodChecked(var_t1, "methodNames", []);
                                                                                var call2700 = callmethodChecked(call2699, "removeAll(1)", [1], call2697);
                                                                                return call2700;
                                                                              };
                                                                              func2694.paramCounts = [0];
                                                                              obj2680.methods["methodNames"] = func2694;
                                                                              func2694.definitionLine = 302;
                                                                              func2694.definitionModule = "StandardPrelude";
                                                                              var func2701 = function(argcv) {    // method asString
                                                                                var returnTarget = invocationCount;
                                                                                invocationCount++;
                                                                                var curarg = 1;
                                                                                setModuleName("StandardPrelude");
                                                                                setLineNumber(305);    // compilenode string
                                                                                var string2702 = new GraceString(")");
                                                                                var string2705 = new GraceString(" - ");
                                                                                var string2708 = new GraceString("(");
                                                                                var opresult2710 = callmethodChecked(string2708, "++(1)", [1], var_t1);
                                                                                var opresult2712 = callmethodChecked(opresult2710, "++(1)", [1], string2705);
                                                                                var opresult2714 = callmethodChecked(opresult2712, "++(1)", [1], var_t2);
                                                                                var opresult2716 = callmethodChecked(opresult2714, "++(1)", [1], string2702);
                                                                                return opresult2716;
                                                                              };
                                                                              func2701.paramCounts = [0];
                                                                              obj2680.methods["asString"] = func2701;
                                                                              func2701.definitionLine = 305;
                                                                              func2701.definitionModule = "StandardPrelude";
                                                                              setLineNumber(289);    // compilenode identifier
                                                                              // call case 6: other requests
                                                                              var call2718 = callmethodChecked(var_BasicPattern, "new$object(1)", [0, 1], this);
                                                                              obj2680.superobj = call2718;
                                                                              if (call2718.data) obj2680.data = call2718.data;
                                                                              if (call2718.hasOwnProperty('_value'))
                                                                                  obj2680._value = call2718._value;
                                                                              superDepth = origSuperDepth;
                                                                            };
                                                                            obj_init_2680.apply(inheritingObject, []);
                                                                            return obj2680;
                                                                            };
                                                                            obj2637.methods["new(2)$object(1)"] = func2679;
                                                                          var func2719 = function(argcv) {    // method asString
                                                                            var returnTarget = invocationCount;
                                                                            invocationCount++;
                                                                            var curarg = 1;
                                                                            setModuleName("StandardPrelude");
                                                                            setLineNumber(288);    // compilenode string
                                                                            var string2720 = new GraceString("class TypeSubtraction");
                                                                            return string2720;
                                                                          };
                                                                          func2719.paramCounts = [0];
                                                                          obj2637.methods["asString"] = func2719;
                                                                          func2719.definitionLine = 288;
                                                                          func2719.definitionModule = "StandardPrelude";
                                                                          superDepth = origSuperDepth;
                                                                        };
                                                                        obj_init_2637.apply(obj2637, []);
                                                                        var var_TypeSubtraction = obj2637;
                                                                        setLineNumber(1);    // compilenode method
                                                                        var func2721 = function(argcv) {    // method TypeSubtraction
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          setModuleName("StandardPrelude");
                                                                          // TypeSubtraction is a simple accessor - elide try ... catch
                                                                          setLineNumber(288);    // compilenode identifier
                                                                          return var_TypeSubtraction;
                                                                        };
                                                                        func2721.paramCounts = [0];
                                                                        this.methods["TypeSubtraction"] = func2721;
                                                                        func2721.definitionLine = 1;
                                                                        func2721.definitionModule = "StandardPrelude";
                                                                        this.methods["TypeSubtraction"].debug = "def";
                                                                        setLineNumber(311);    // compilenode typedec
                                                                        // Type decl Extractable
                                                                        //   Type literal 
                                                                        var type2723 = new GraceType("Extractable");
                                                                        type2723.typeMethods.push("extract");
                                                                        var var_Extractable = type2723;
                                                                        setLineNumber(1);    // compilenode method
                                                                        var func2724 = function(argcv) {    // method Extractable
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          setModuleName("StandardPrelude");
                                                                          // Extractable is a simple accessor - elide try ... catch
                                                                          setLineNumber(311);    // compilenode identifier
                                                                          return var_Extractable;
                                                                        };
                                                                        func2724.paramCounts = [0];
                                                                        this.methods["Extractable"] = func2724;
                                                                        func2724.definitionLine = 1;
                                                                        func2724.definitionModule = "StandardPrelude";
                                                                        setLineNumber(315);    // compilenode typedec
                                                                        // Type decl MatchResult
                                                                        //   Type literal 
                                                                        var type2726 = new GraceType("\u2039anon\u203a");
                                                                        type2726.typeMethods.push("result");
                                                                        type2726.typeMethods.push("bindings");
                                                                        var opresult2729 = callmethodChecked(var_Boolean, "&(1)", [1], type2726);
                                                                        var var_MatchResult = opresult2729;
                                                                        setLineNumber(1);    // compilenode method
                                                                        var func2730 = function(argcv) {    // method MatchResult
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          setModuleName("StandardPrelude");
                                                                          // MatchResult is a simple accessor - elide try ... catch
                                                                          setLineNumber(315);    // compilenode identifier
                                                                          return var_MatchResult;
                                                                        };
                                                                        func2730.paramCounts = [0];
                                                                        this.methods["MatchResult"] = func2730;
                                                                        func2730.definitionLine = 1;
                                                                        func2730.definitionModule = "StandardPrelude";
                                                                        setLineNumber(320);    // compilenode typedec
                                                                        // Type decl Pattern
                                                                        //   Type literal 
                                                                        var type2732 = new GraceType("Pattern");
                                                                        type2732.typeMethods.push("&(1)");
                                                                        type2732.typeMethods.push("|(1)");
                                                                        type2732.typeMethods.push("match(1)");
                                                                        var var_Pattern = type2732;
                                                                        setLineNumber(1);    // compilenode method
                                                                        var func2733 = function(argcv) {    // method Pattern
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          setModuleName("StandardPrelude");
                                                                          // Pattern is a simple accessor - elide try ... catch
                                                                          setLineNumber(320);    // compilenode identifier
                                                                          return var_Pattern;
                                                                        };
                                                                        func2733.paramCounts = [0];
                                                                        this.methods["Pattern"] = func2733;
                                                                        func2733.definitionLine = 1;
                                                                        func2733.definitionModule = "StandardPrelude";
                                                                        setLineNumber(326);    // compilenode typedec
                                                                        // Type decl ExceptionKind
                                                                        //   Type literal 
                                                                        var type2735 = new GraceType("\u2039anon\u203a");
                                                                        type2735.typeMethods.push("refine(1)");
                                                                        type2735.typeMethods.push("parent");
                                                                        type2735.typeMethods.push("raise(1)");
                                                                        type2735.typeMethods.push("raise(1)with(1)");
                                                                        var opresult2738 = callmethodChecked(var_Pattern, "&(1)", [1], type2735);
                                                                        var var_ExceptionKind = opresult2738;
                                                                        setLineNumber(1);    // compilenode method
                                                                        var func2739 = function(argcv) {    // method ExceptionKind
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          setModuleName("StandardPrelude");
                                                                          // ExceptionKind is a simple accessor - elide try ... catch
                                                                          setLineNumber(326);    // compilenode identifier
                                                                          return var_ExceptionKind;
                                                                        };
                                                                        func2739.paramCounts = [0];
                                                                        this.methods["ExceptionKind"] = func2739;
                                                                        func2739.definitionLine = 1;
                                                                        func2739.definitionModule = "StandardPrelude";
                                                                        setLineNumber(333);    // compilenode typedec
                                                                        // Type decl Point
                                                                        //   Type literal 
                                                                        var type2741 = new GraceType("Point");
                                                                        type2741.typeMethods.push("x");
                                                                        type2741.typeMethods.push("y");
                                                                        type2741.typeMethods.push("==(1)");
                                                                        type2741.typeMethods.push("+(1)");
                                                                        type2741.typeMethods.push("-(1)");
                                                                        type2741.typeMethods.push("prefix-");
                                                                        type2741.typeMethods.push("*(1)");
                                                                        type2741.typeMethods.push("/(1)");
                                                                        type2741.typeMethods.push("length");
                                                                        type2741.typeMethods.push("distanceTo(1)");
                                                                        type2741.typeMethods.push("dot(1)");
                                                                        type2741.typeMethods.push("\u22c5(1)");
                                                                        type2741.typeMethods.push("norm");
                                                                        var var_Point = type2741;
                                                                        setLineNumber(1);    // compilenode method
                                                                        var func2742 = function(argcv) {    // method Point
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          setModuleName("StandardPrelude");
                                                                          // Point is a simple accessor - elide try ... catch
                                                                          setLineNumber(333);    // compilenode identifier
                                                                          return var_Point;
                                                                        };
                                                                        func2742.paramCounts = [0];
                                                                        this.methods["Point"] = func2742;
                                                                        func2742.definitionLine = 1;
                                                                        func2742.definitionModule = "StandardPrelude";
                                                                        setLineNumber(417);    // compilenode identifier
                                                                        var var_collections = var_coll;
                                                                        setLineNumber(1);    // compilenode method
                                                                        var func2743 = function(argcv) {    // method collections
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          setModuleName("StandardPrelude");
                                                                          // collections is a simple accessor - elide try ... catch
                                                                          setLineNumber(417);    // compilenode identifier
                                                                          return var_collections;
                                                                        };
                                                                        func2743.paramCounts = [0];
                                                                        this.methods["collections"] = func2743;
                                                                        func2743.definitionLine = 1;
                                                                        func2743.definitionModule = "StandardPrelude";
                                                                        this.methods["collections"].debug = "def";
                                                                        setLineNumber(419);    // compilenode typedec
                                                                        // Type decl Block0
                                                                        // call case 6: other requests
                                                                        var call2746 = callmethodChecked(var_collections, "Block0", []);
                                                                        var var_Block0 = call2746;
                                                                        setLineNumber(1);    // compilenode method
                                                                        var func2747 = function(argcv) {    // method Block0
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          setModuleName("StandardPrelude");
                                                                          // Block0 is a simple accessor - elide try ... catch
                                                                          setLineNumber(419);    // compilenode identifier
                                                                          return var_Block0;
                                                                        };
                                                                        func2747.paramCounts = [0];
                                                                        this.methods["Block0"] = func2747;
                                                                        func2747.definitionLine = 1;
                                                                        func2747.definitionModule = "StandardPrelude";
                                                                        setLineNumber(420);    // compilenode typedec
                                                                        // Type decl Block1
                                                                        // call case 6: other requests
                                                                        var call2750 = callmethodChecked(var_collections, "Block1", []);
                                                                        var var_Block1 = call2750;
                                                                        setLineNumber(1);    // compilenode method
                                                                        var func2751 = function(argcv) {    // method Block1
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          setModuleName("StandardPrelude");
                                                                          // Block1 is a simple accessor - elide try ... catch
                                                                          setLineNumber(420);    // compilenode identifier
                                                                          return var_Block1;
                                                                        };
                                                                        func2751.paramCounts = [0];
                                                                        this.methods["Block1"] = func2751;
                                                                        func2751.definitionLine = 1;
                                                                        func2751.definitionModule = "StandardPrelude";
                                                                        setLineNumber(421);    // compilenode typedec
                                                                        // Type decl Block2
                                                                        // call case 6: other requests
                                                                        var call2754 = callmethodChecked(var_collections, "Block2", []);
                                                                        var var_Block2 = call2754;
                                                                        setLineNumber(1);    // compilenode method
                                                                        var func2755 = function(argcv) {    // method Block2
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          setModuleName("StandardPrelude");
                                                                          // Block2 is a simple accessor - elide try ... catch
                                                                          setLineNumber(421);    // compilenode identifier
                                                                          return var_Block2;
                                                                        };
                                                                        func2755.paramCounts = [0];
                                                                        this.methods["Block2"] = func2755;
                                                                        func2755.definitionLine = 1;
                                                                        func2755.definitionModule = "StandardPrelude";
                                                                        setLineNumber(422);    // compilenode typedec
                                                                        // Type decl Block3
                                                                        //   Type literal 
                                                                        var type2757 = new GraceType("Block3");
                                                                        type2757.typeMethods.push("apply(3)");
                                                                        var var_Block3 = type2757;
                                                                        setLineNumber(1);    // compilenode method
                                                                        var func2758 = function(argcv) {    // method Block3
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          setModuleName("StandardPrelude");
                                                                          // Block3 is a simple accessor - elide try ... catch
                                                                          setLineNumber(422);    // compilenode identifier
                                                                          return var_Block3;
                                                                        };
                                                                        func2758.paramCounts = [0];
                                                                        this.methods["Block3"] = func2758;
                                                                        func2758.definitionLine = 1;
                                                                        func2758.definitionModule = "StandardPrelude";
                                                                        setLineNumber(425);    // compilenode typedec
                                                                        // Type decl Cmd
                                                                        var var_Cmd = var_Block0;
                                                                        setLineNumber(1);    // compilenode method
                                                                        var func2760 = function(argcv) {    // method Cmd
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          setModuleName("StandardPrelude");
                                                                          // Cmd is a simple accessor - elide try ... catch
                                                                          setLineNumber(425);    // compilenode identifier
                                                                          return var_Cmd;
                                                                        };
                                                                        func2760.paramCounts = [0];
                                                                        this.methods["Cmd"] = func2760;
                                                                        func2760.definitionLine = 1;
                                                                        func2760.definitionModule = "StandardPrelude";
                                                                        setLineNumber(426);    // compilenode typedec
                                                                        // Type decl Fun
                                                                        var var_Fun = var_Block1;
                                                                        setLineNumber(1);    // compilenode method
                                                                        var func2762 = function(argcv) {    // method Fun
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          setModuleName("StandardPrelude");
                                                                          // Fun is a simple accessor - elide try ... catch
                                                                          setLineNumber(426);    // compilenode identifier
                                                                          return var_Fun;
                                                                        };
                                                                        func2762.paramCounts = [0];
                                                                        this.methods["Fun"] = func2762;
                                                                        func2762.definitionLine = 1;
                                                                        func2762.definitionModule = "StandardPrelude";
                                                                        setLineNumber(427);    // compilenode typedec
                                                                        // Type decl Fun2
                                                                        var var_Fun2 = var_Block2;
                                                                        setLineNumber(1);    // compilenode method
                                                                        var func2764 = function(argcv) {    // method Fun2
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          setModuleName("StandardPrelude");
                                                                          // Fun2 is a simple accessor - elide try ... catch
                                                                          setLineNumber(427);    // compilenode identifier
                                                                          return var_Fun2;
                                                                        };
                                                                        func2764.paramCounts = [0];
                                                                        this.methods["Fun2"] = func2764;
                                                                        func2764.definitionLine = 1;
                                                                        func2764.definitionModule = "StandardPrelude";
                                                                        setLineNumber(428);    // compilenode typedec
                                                                        // Type decl Fun3
                                                                        var var_Fun3 = var_Block3;
                                                                        setLineNumber(1);    // compilenode method
                                                                        var func2766 = function(argcv) {    // method Fun3
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          setModuleName("StandardPrelude");
                                                                          // Fun3 is a simple accessor - elide try ... catch
                                                                          setLineNumber(428);    // compilenode identifier
                                                                          return var_Fun3;
                                                                        };
                                                                        func2766.paramCounts = [0];
                                                                        this.methods["Fun3"] = func2766;
                                                                        func2766.definitionLine = 1;
                                                                        func2766.definitionModule = "StandardPrelude";
                                                                        setLineNumber(429);    // compilenode typedec
                                                                        // Type decl Proc
                                                                        var var_Proc = var_Block1;
                                                                        setLineNumber(1);    // compilenode method
                                                                        var func2768 = function(argcv) {    // method Proc
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          setModuleName("StandardPrelude");
                                                                          // Proc is a simple accessor - elide try ... catch
                                                                          setLineNumber(429);    // compilenode identifier
                                                                          return var_Proc;
                                                                        };
                                                                        func2768.paramCounts = [0];
                                                                        this.methods["Proc"] = func2768;
                                                                        func2768.definitionLine = 1;
                                                                        func2768.definitionModule = "StandardPrelude";
                                                                        setLineNumber(430);    // compilenode typedec
                                                                        // Type decl Proc2
                                                                        var var_Proc2 = var_Block2;
                                                                        setLineNumber(1);    // compilenode method
                                                                        var func2770 = function(argcv) {    // method Proc2
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          setModuleName("StandardPrelude");
                                                                          // Proc2 is a simple accessor - elide try ... catch
                                                                          setLineNumber(430);    // compilenode identifier
                                                                          return var_Proc2;
                                                                        };
                                                                        func2770.paramCounts = [0];
                                                                        this.methods["Proc2"] = func2770;
                                                                        func2770.definitionLine = 1;
                                                                        func2770.definitionModule = "StandardPrelude";
                                                                        setLineNumber(431);    // compilenode typedec
                                                                        // Type decl Proc3
                                                                        var var_Proc3 = var_Block3;
                                                                        setLineNumber(1);    // compilenode method
                                                                        var func2772 = function(argcv) {    // method Proc3
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          setModuleName("StandardPrelude");
                                                                          // Proc3 is a simple accessor - elide try ... catch
                                                                          setLineNumber(431);    // compilenode identifier
                                                                          return var_Proc3;
                                                                        };
                                                                        func2772.paramCounts = [0];
                                                                        this.methods["Proc3"] = func2772;
                                                                        func2772.definitionLine = 1;
                                                                        func2772.definitionModule = "StandardPrelude";
                                                                        setLineNumber(433);    // compilenode typedec
                                                                        // Type decl Collection
                                                                        // call case 6: other requests
                                                                        var call2775 = callmethodChecked(var_collections, "Collection", []);
                                                                        var var_Collection = call2775;
                                                                        setLineNumber(1);    // compilenode method
                                                                        var func2776 = function(argcv) {    // method Collection
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          setModuleName("StandardPrelude");
                                                                          // Collection is a simple accessor - elide try ... catch
                                                                          setLineNumber(433);    // compilenode identifier
                                                                          return var_Collection;
                                                                        };
                                                                        func2776.paramCounts = [0];
                                                                        this.methods["Collection"] = func2776;
                                                                        func2776.definitionLine = 1;
                                                                        func2776.definitionModule = "StandardPrelude";
                                                                        setLineNumber(434);    // compilenode typedec
                                                                        // Type decl Iterable
                                                                        // call case 6: other requests
                                                                        var call2779 = callmethodChecked(var_collections, "Iterable", []);
                                                                        var var_Iterable = call2779;
                                                                        setLineNumber(1);    // compilenode method
                                                                        var func2780 = function(argcv) {    // method Iterable
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          setModuleName("StandardPrelude");
                                                                          // Iterable is a simple accessor - elide try ... catch
                                                                          setLineNumber(434);    // compilenode identifier
                                                                          return var_Iterable;
                                                                        };
                                                                        func2780.paramCounts = [0];
                                                                        this.methods["Iterable"] = func2780;
                                                                        func2780.definitionLine = 1;
                                                                        func2780.definitionModule = "StandardPrelude";
                                                                        setLineNumber(435);    // compilenode typedec
                                                                        // Type decl Expandable
                                                                        // call case 6: other requests
                                                                        var call2783 = callmethodChecked(var_collections, "Expandable", []);
                                                                        var var_Expandable = call2783;
                                                                        setLineNumber(1);    // compilenode method
                                                                        var func2784 = function(argcv) {    // method Expandable
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          setModuleName("StandardPrelude");
                                                                          // Expandable is a simple accessor - elide try ... catch
                                                                          setLineNumber(435);    // compilenode identifier
                                                                          return var_Expandable;
                                                                        };
                                                                        func2784.paramCounts = [0];
                                                                        this.methods["Expandable"] = func2784;
                                                                        func2784.definitionLine = 1;
                                                                        func2784.definitionModule = "StandardPrelude";
                                                                        setLineNumber(436);    // compilenode typedec
                                                                        // Type decl Enumerable
                                                                        // call case 6: other requests
                                                                        var call2787 = callmethodChecked(var_collections, "Enumerable", []);
                                                                        var var_Enumerable = call2787;
                                                                        setLineNumber(1);    // compilenode method
                                                                        var func2788 = function(argcv) {    // method Enumerable
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          setModuleName("StandardPrelude");
                                                                          // Enumerable is a simple accessor - elide try ... catch
                                                                          setLineNumber(436);    // compilenode identifier
                                                                          return var_Enumerable;
                                                                        };
                                                                        func2788.paramCounts = [0];
                                                                        this.methods["Enumerable"] = func2788;
                                                                        func2788.definitionLine = 1;
                                                                        func2788.definitionModule = "StandardPrelude";
                                                                        setLineNumber(437);    // compilenode typedec
                                                                        // Type decl Binding
                                                                        // call case 6: other requests
                                                                        var call2791 = callmethodChecked(var_collections, "Binding", []);
                                                                        var var_Binding = call2791;
                                                                        setLineNumber(1);    // compilenode method
                                                                        var func2792 = function(argcv) {    // method Binding
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          setModuleName("StandardPrelude");
                                                                          // Binding is a simple accessor - elide try ... catch
                                                                          setLineNumber(437);    // compilenode identifier
                                                                          return var_Binding;
                                                                        };
                                                                        func2792.paramCounts = [0];
                                                                        this.methods["Binding"] = func2792;
                                                                        func2792.definitionLine = 1;
                                                                        func2792.definitionModule = "StandardPrelude";
                                                                        setLineNumber(438);    // compilenode typedec
                                                                        // Type decl Iterator
                                                                        // call case 6: other requests
                                                                        var call2795 = callmethodChecked(var_collections, "Iterator", []);
                                                                        var var_Iterator = call2795;
                                                                        setLineNumber(1);    // compilenode method
                                                                        var func2796 = function(argcv) {    // method Iterator
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          setModuleName("StandardPrelude");
                                                                          // Iterator is a simple accessor - elide try ... catch
                                                                          setLineNumber(438);    // compilenode identifier
                                                                          return var_Iterator;
                                                                        };
                                                                        func2796.paramCounts = [0];
                                                                        this.methods["Iterator"] = func2796;
                                                                        func2796.definitionLine = 1;
                                                                        func2796.definitionModule = "StandardPrelude";
                                                                        setLineNumber(439);    // compilenode typedec
                                                                        // Type decl Sequence
                                                                        // call case 6: other requests
                                                                        var call2799 = callmethodChecked(var_collections, "Sequence", []);
                                                                        var var_Sequence = call2799;
                                                                        setLineNumber(1);    // compilenode method
                                                                        var func2800 = function(argcv) {    // method Sequence
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          setModuleName("StandardPrelude");
                                                                          // Sequence is a simple accessor - elide try ... catch
                                                                          setLineNumber(439);    // compilenode identifier
                                                                          return var_Sequence;
                                                                        };
                                                                        func2800.paramCounts = [0];
                                                                        this.methods["Sequence"] = func2800;
                                                                        func2800.definitionLine = 1;
                                                                        func2800.definitionModule = "StandardPrelude";
                                                                        setLineNumber(440);    // compilenode typedec
                                                                        // Type decl List
                                                                        // call case 6: other requests
                                                                        var call2803 = callmethodChecked(var_collections, "List", []);
                                                                        var var_List = call2803;
                                                                        setLineNumber(1);    // compilenode method
                                                                        var func2804 = function(argcv) {    // method List
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          setModuleName("StandardPrelude");
                                                                          // List is a simple accessor - elide try ... catch
                                                                          setLineNumber(440);    // compilenode identifier
                                                                          return var_List;
                                                                        };
                                                                        func2804.paramCounts = [0];
                                                                        this.methods["List"] = func2804;
                                                                        func2804.definitionLine = 1;
                                                                        func2804.definitionModule = "StandardPrelude";
                                                                        setLineNumber(441);    // compilenode typedec
                                                                        // Type decl Set
                                                                        // call case 6: other requests
                                                                        var call2807 = callmethodChecked(var_collections, "Set", []);
                                                                        var var_Set = call2807;
                                                                        setLineNumber(1);    // compilenode method
                                                                        var func2808 = function(argcv) {    // method Set
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          setModuleName("StandardPrelude");
                                                                          // Set is a simple accessor - elide try ... catch
                                                                          setLineNumber(441);    // compilenode identifier
                                                                          return var_Set;
                                                                        };
                                                                        func2808.paramCounts = [0];
                                                                        this.methods["Set"] = func2808;
                                                                        func2808.definitionLine = 1;
                                                                        func2808.definitionModule = "StandardPrelude";
                                                                        setLineNumber(442);    // compilenode typedec
                                                                        // Type decl Dictionary
                                                                        // call case 6: other requests
                                                                        var call2811 = callmethodChecked(var_collections, "Dictionary", []);
                                                                        var var_Dictionary = call2811;
                                                                        setLineNumber(1);    // compilenode method
                                                                        var func2812 = function(argcv) {    // method Dictionary
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          setModuleName("StandardPrelude");
                                                                          // Dictionary is a simple accessor - elide try ... catch
                                                                          setLineNumber(442);    // compilenode identifier
                                                                          return var_Dictionary;
                                                                        };
                                                                        func2812.paramCounts = [0];
                                                                        this.methods["Dictionary"] = func2812;
                                                                        func2812.definitionLine = 1;
                                                                        func2812.definitionModule = "StandardPrelude";
                                                                        setLineNumber(444);    // compilenode member
                                                                        // call case 6: other requests
                                                                        var call2814 = callmethodChecked(var_collections, "BoundsError", []);
                                                                        var var_BoundsError = call2814;
                                                                        setLineNumber(1);    // compilenode method
                                                                        var func2815 = function(argcv) {    // method BoundsError
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          setModuleName("StandardPrelude");
                                                                          // BoundsError is a simple accessor - elide try ... catch
                                                                          setLineNumber(444);    // compilenode identifier
                                                                          return var_BoundsError;
                                                                        };
                                                                        func2815.paramCounts = [0];
                                                                        this.methods["BoundsError"] = func2815;
                                                                        func2815.definitionLine = 1;
                                                                        func2815.definitionModule = "StandardPrelude";
                                                                        this.methods["BoundsError"].debug = "def";
                                                                        setLineNumber(445);    // compilenode member
                                                                        // call case 6: other requests
                                                                        var call2817 = callmethodChecked(var_collections, "IteratorExhausted", []);
                                                                        var var_IteratorExhausted = call2817;
                                                                        setLineNumber(1);    // compilenode method
                                                                        var func2818 = function(argcv) {    // method IteratorExhausted
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          setModuleName("StandardPrelude");
                                                                          // IteratorExhausted is a simple accessor - elide try ... catch
                                                                          setLineNumber(445);    // compilenode identifier
                                                                          return var_IteratorExhausted;
                                                                        };
                                                                        func2818.paramCounts = [0];
                                                                        this.methods["IteratorExhausted"] = func2818;
                                                                        func2818.definitionLine = 1;
                                                                        func2818.definitionModule = "StandardPrelude";
                                                                        this.methods["IteratorExhausted"].debug = "def";
                                                                        setLineNumber(446);    // compilenode member
                                                                        // call case 6: other requests
                                                                        var call2820 = callmethodChecked(var_collections, "NoSuchObject", []);
                                                                        var var_NoSuchObject = call2820;
                                                                        setLineNumber(1);    // compilenode method
                                                                        var func2821 = function(argcv) {    // method NoSuchObject
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          setModuleName("StandardPrelude");
                                                                          // NoSuchObject is a simple accessor - elide try ... catch
                                                                          setLineNumber(446);    // compilenode identifier
                                                                          return var_NoSuchObject;
                                                                        };
                                                                        func2821.paramCounts = [0];
                                                                        this.methods["NoSuchObject"] = func2821;
                                                                        func2821.definitionLine = 1;
                                                                        func2821.definitionModule = "StandardPrelude";
                                                                        this.methods["NoSuchObject"].debug = "def";
                                                                        setLineNumber(447);    // compilenode member
                                                                        // call case 6: other requests
                                                                        var call2823 = callmethodChecked(var_collections, "RequestError", []);
                                                                        var var_RequestError = call2823;
                                                                        setLineNumber(1);    // compilenode method
                                                                        var func2824 = function(argcv) {    // method RequestError
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          setModuleName("StandardPrelude");
                                                                          // RequestError is a simple accessor - elide try ... catch
                                                                          setLineNumber(447);    // compilenode identifier
                                                                          return var_RequestError;
                                                                        };
                                                                        func2824.paramCounts = [0];
                                                                        this.methods["RequestError"] = func2824;
                                                                        func2824.definitionLine = 1;
                                                                        func2824.definitionModule = "StandardPrelude";
                                                                        this.methods["RequestError"].debug = "def";
                                                                        setLineNumber(448);    // compilenode member
                                                                        // call case 6: other requests
                                                                        var call2826 = callmethodChecked(var_collections, "SubobjectResponsibility", []);
                                                                        var var_SubobjectResponsibility = call2826;
                                                                        setLineNumber(1);    // compilenode method
                                                                        var func2827 = function(argcv) {    // method SubobjectResponsibility
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          setModuleName("StandardPrelude");
                                                                          // SubobjectResponsibility is a simple accessor - elide try ... catch
                                                                          setLineNumber(448);    // compilenode identifier
                                                                          return var_SubobjectResponsibility;
                                                                        };
                                                                        func2827.paramCounts = [0];
                                                                        this.methods["SubobjectResponsibility"] = func2827;
                                                                        func2827.definitionLine = 1;
                                                                        func2827.definitionModule = "StandardPrelude";
                                                                        this.methods["SubobjectResponsibility"].debug = "def";
                                                                        setLineNumber(449);    // compilenode member
                                                                        // call case 6: other requests
                                                                        var call2829 = callmethodChecked(var_collections, "ConcurrentModification", []);
                                                                        var var_ConcurrentModification = call2829;
                                                                        setLineNumber(1);    // compilenode method
                                                                        var func2830 = function(argcv) {    // method ConcurrentModification
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          setModuleName("StandardPrelude");
                                                                          // ConcurrentModification is a simple accessor - elide try ... catch
                                                                          setLineNumber(449);    // compilenode identifier
                                                                          return var_ConcurrentModification;
                                                                        };
                                                                        func2830.paramCounts = [0];
                                                                        this.methods["ConcurrentModification"] = func2830;
                                                                        func2830.definitionLine = 1;
                                                                        func2830.definitionModule = "StandardPrelude";
                                                                        this.methods["ConcurrentModification"].debug = "def";
                                                                        setLineNumber(450);    // compilenode string
                                                                        var string2832 = new GraceString("UninitializedVariable");
                                                                        // call case 6: other requests
                                                                        // call case 5: prelude request
                                                                        var call2834 = callmethodChecked(var_prelude, "ProgrammingError", []);
                                                                        var call2835 = callmethodChecked(call2834, "refine(1)", [1], string2832);
                                                                        var var_UninitializedVariable = call2835;
                                                                        setLineNumber(1);    // compilenode method
                                                                        var func2836 = function(argcv) {    // method UninitializedVariable
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          setModuleName("StandardPrelude");
                                                                          // UninitializedVariable is a simple accessor - elide try ... catch
                                                                          setLineNumber(450);    // compilenode identifier
                                                                          return var_UninitializedVariable;
                                                                        };
                                                                        func2836.paramCounts = [0];
                                                                        this.methods["UninitializedVariable"] = func2836;
                                                                        func2836.definitionLine = 1;
                                                                        func2836.definitionModule = "StandardPrelude";
                                                                        this.methods["UninitializedVariable"].debug = "def";
                                                                        setLineNumber(452);    // compilenode member
                                                                        // call case 6: other requests
                                                                        var call2838 = callmethodChecked(var_collections, "collection", []);
                                                                        var var_collection = call2838;
                                                                        setLineNumber(1);    // compilenode method
                                                                        var func2839 = function(argcv) {    // method collection
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          setModuleName("StandardPrelude");
                                                                          // collection is a simple accessor - elide try ... catch
                                                                          setLineNumber(452);    // compilenode identifier
                                                                          return var_collection;
                                                                        };
                                                                        func2839.paramCounts = [0];
                                                                        this.methods["collection"] = func2839;
                                                                        func2839.definitionLine = 1;
                                                                        func2839.definitionModule = "StandardPrelude";
                                                                        this.methods["collection"].debug = "def";
                                                                        setLineNumber(453);    // compilenode member
                                                                        // call case 6: other requests
                                                                        var call2841 = callmethodChecked(var_collections, "enumerable", []);
                                                                        var var_enumerable = call2841;
                                                                        setLineNumber(1);    // compilenode method
                                                                        var func2842 = function(argcv) {    // method enumerable
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          setModuleName("StandardPrelude");
                                                                          // enumerable is a simple accessor - elide try ... catch
                                                                          setLineNumber(453);    // compilenode identifier
                                                                          return var_enumerable;
                                                                        };
                                                                        func2842.paramCounts = [0];
                                                                        this.methods["enumerable"] = func2842;
                                                                        func2842.definitionLine = 1;
                                                                        func2842.definitionModule = "StandardPrelude";
                                                                        this.methods["enumerable"].debug = "def";
                                                                        setLineNumber(454);    // compilenode member
                                                                        // call case 6: other requests
                                                                        var call2844 = callmethodChecked(var_collections, "indexable", []);
                                                                        var var_indexable = call2844;
                                                                        setLineNumber(1);    // compilenode method
                                                                        var func2845 = function(argcv) {    // method indexable
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          setModuleName("StandardPrelude");
                                                                          // indexable is a simple accessor - elide try ... catch
                                                                          setLineNumber(454);    // compilenode identifier
                                                                          return var_indexable;
                                                                        };
                                                                        func2845.paramCounts = [0];
                                                                        this.methods["indexable"] = func2845;
                                                                        func2845.definitionLine = 1;
                                                                        func2845.definitionModule = "StandardPrelude";
                                                                        this.methods["indexable"].debug = "def";
                                                                        setLineNumber(460);    // compilenode member
                                                                        // call case 6: other requests
                                                                        // call case 6: other requests
                                                                        var call2848 = callmethodChecked(var_collections, "sequence", []);
                                                                        var call2849 = callmethodChecked(call2848, "empty", []);
                                                                        var var_emptySequence = call2849;
                                                                        setLineNumber(1);    // compilenode method
                                                                        var func2850 = function(argcv) {    // method emptySequence
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          setModuleName("StandardPrelude");
                                                                          // emptySequence is a simple accessor - elide try ... catch
                                                                          setLineNumber(460);    // compilenode identifier
                                                                          return var_emptySequence;
                                                                        };
                                                                        func2850.paramCounts = [0];
                                                                        this.methods["emptySequence"] = func2850;
                                                                        func2850.definitionLine = 1;
                                                                        func2850.definitionModule = "StandardPrelude";
                                                                        this.methods["emptySequence"].debug = "def";
                                                                        setLineNumber(477);    // compilenode member
                                                                        // call case 6: other requests
                                                                        var call2852 = callmethodChecked(var_collections, "binding", []);
                                                                        var var_binding = call2852;
                                                                        setLineNumber(1);    // compilenode method
                                                                        var func2853 = function(argcv) {    // method binding
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          setModuleName("StandardPrelude");
                                                                          // binding is a simple accessor - elide try ... catch
                                                                          setLineNumber(477);    // compilenode identifier
                                                                          return var_binding;
                                                                        };
                                                                        func2853.paramCounts = [0];
                                                                        this.methods["binding"] = func2853;
                                                                        func2853.definitionLine = 1;
                                                                        func2853.definitionModule = "StandardPrelude";
                                                                        this.methods["binding"].debug = "def";
                                                                        setLineNumber(478);    // compilenode member
                                                                        // call case 6: other requests
                                                                        var call2855 = callmethodChecked(var_collections, "range", []);
                                                                        var var_range = call2855;
                                                                        setLineNumber(1);    // compilenode method
                                                                        var func2856 = function(argcv) {    // method range
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          setModuleName("StandardPrelude");
                                                                          // range is a simple accessor - elide try ... catch
                                                                          setLineNumber(478);    // compilenode identifier
                                                                          return var_range;
                                                                        };
                                                                        func2856.paramCounts = [0];
                                                                        this.methods["range"] = func2856;
                                                                        func2856.definitionLine = 1;
                                                                        func2856.definitionModule = "StandardPrelude";
                                                                        this.methods["range"].debug = "def";
                                                                        return this;
                                                                      }
                                                                      gracecode_StandardPrelude.imports = ['collectionsPrelude'];
                                                                      if (typeof gctCache !== "undefined")
                                                                        gctCache['StandardPrelude'] = "classes:\n AndPattern\n BaseType\n BasicPattern\n BindingPattern\n FailedMatch\n MatchAndDestructuringPattern\n OrPattern\n Singleton\n SuccessfulMatch\n TypeIntersection\n TypeSubtraction\n TypeUnion\n TypeVariant\n VariablePattern\n WildcardPattern\nconfidential:\nconstructors-of:AndPattern:\n new(2)\nconstructors-of:BaseType:\n new(1)\nconstructors-of:BasicPattern:\n new\nconstructors-of:BindingPattern:\n new(1)\nconstructors-of:FailedMatch:\n new(1)\nconstructors-of:MatchAndDestructuringPattern:\n new(2)\nconstructors-of:OrPattern:\n new(2)\nconstructors-of:Singleton:\n named(1)\n new\nconstructors-of:SuccessfulMatch:\n new(2)\nconstructors-of:TypeIntersection:\n new(2)\nconstructors-of:TypeSubtraction:\n new(2)\nconstructors-of:TypeUnion:\n new(2)\nconstructors-of:TypeVariant:\n new(2)\nconstructors-of:VariablePattern:\n new(1)\nconstructors-of:WildcardPattern:\n new\nfresh-methods:\n alwaysEqual\n methods\n point2Dx(1)y(1)\nfresh:alwaysEqual:\n ==(1)\nfresh:methods:\n AndPattern\n BaseType\n BasicPattern\n Binding\n BindingPattern\n Block0\n Block1\n Block2\n Block3\n BoundsError\n Cmd\n Collection\n ConcurrentModification\n Dictionary\n Enumerable\n ExceptionKind\n Expandable\n Extractable\n FailedMatch\n Fun\n Fun2\n Fun3\n Iterable\n Iterator\n IteratorExhausted\n List\n MatchAndDestructuringPattern\n MatchResult\n NoSuchObject\n OrPattern\n Pattern\n Point\n Proc\n Proc2\n Proc3\n RequestError\n Sequence\n Set\n Singleton\n SubobjectResponsibility\n SuccessfulMatch\n TypeIntersection\n TypeSubtraction\n TypeUnion\n TypeVariant\n UninitializedVariable\n VariablePattern\n WildcardPattern\n abstract\n alwaysEqual\n binding\n collection\n collections\n dictionary(1)\n do(1)while(1)\n emptyDictionary\n emptyList\n emptySequence\n emptySet\n enumerable\n for(1)and(1)do(1)\n indexable\n list(1)\n max(2)\n methods\n min(2)\n point2Dx(1)y(1)\n range\n repeat(1)times(1)\n required\n sequence(1)\n set(1)\n valueOf(1)\nfresh:point2Dx(1)y(1):\n *(1)\n +(1)\n -(1)\n /(1)\n ==(1)\n asDebugString\n asString\n distanceTo(1)\n dot(1)\n length\n norm\n prefix-\n reverseDivideNumber(1)\n reverseMinusNumber(1)\n reversePlusNumber(1)\n reverseTimesNumber(1)\n x\n y\n \u22c5(1)\nmethods-of:AndPattern.new(2):\n &(1)\n ::(1)\n asDebugString\n asString\n basicAsString\n isMe(1)\n match(1)\n |(1)\n \u2260(1)\nmethods-of:BaseType.new(1):\n &(1)\n +(1)\n -(1)\n asString\n |(1)\nmethods-of:BasicPattern.new:\n &(1)\n |(1)\nmethods-of:BindingPattern.new(1):\n &(1)\n ::(1)\n asDebugString\n asString\n basicAsString\n isMe(1)\n match(1)\n |(1)\n \u2260(1)\nmethods-of:FailedMatch.new(1):\n &&(1)\n asString\n bindings\n not\n prefix!\n result\n ||(1)\nmethods-of:MatchAndDestructuringPattern.new(2):\n &(1)\n ::(1)\n asDebugString\n asString\n basicAsString\n isMe(1)\n items\n match(1)\n pattern\n |(1)\n \u2260(1)\nmethods-of:OrPattern.new(2):\n &(1)\n ::(1)\n asDebugString\n asString\n basicAsString\n isMe(1)\n match(1)\n |(1)\n \u2260(1)\nmethods-of:Singleton.named(1):\n &(1)\n ::(1)\n ==(1)\n asDebugString\n asString\n basicAsString\n isMe(1)\n match(1)\n |(1)\n \u2260(1)\nmethods-of:Singleton.new:\n &(1)\n ::(1)\n ==(1)\n asDebugString\n asString\n basicAsString\n isMe(1)\n match(1)\n |(1)\n \u2260(1)\nmethods-of:SuccessfulMatch.new(2):\n &&(1)\n asString\n bindings\n not\n prefix!\n result\n ||(1)\nmethods-of:TypeIntersection.new(2):\n &(1)\n +(1)\n -(1)\n ::(1)\n asDebugString\n asString\n basicAsString\n isMe(1)\n match(1)\n methodNames\n |(1)\n \u2260(1)\nmethods-of:TypeSubtraction.new(2):\n &(1)\n +(1)\n -(1)\n ::(1)\n asDebugString\n asString\n basicAsString\n isMe(1)\n methodNames\n |(1)\n \u2260(1)\nmethods-of:TypeUnion.new(2):\n &(1)\n +(1)\n -(1)\n ::(1)\n asDebugString\n asString\n basicAsString\n isMe(1)\n match(1)\n methodNames\n |(1)\n \u2260(1)\nmethods-of:TypeVariant.new(2):\n &(1)\n +(1)\n -(1)\n ::(1)\n asDebugString\n asString\n basicAsString\n isMe(1)\n match(1)\n methodNames\n |(1)\n \u2260(1)\nmethods-of:VariablePattern.new(1):\n &(1)\n ::(1)\n asDebugString\n asString\n basicAsString\n isMe(1)\n match(1)\n |(1)\n \u2260(1)\nmethods-of:WildcardPattern.new:\n &(1)\n ::(1)\n asDebugString\n asString\n basicAsString\n isMe(1)\n match(1)\n |(1)\n \u2260(1)\nmethodtypes-of:Binding<K, T>:\nmethodtypes-of:Block0<R>:\nmethodtypes-of:Block1<T, R>:\nmethodtypes-of:Block2<S, T, R>:\nmethodtypes-of:Block3<S, T, U, R>:\n 3 apply(a : S, b : T, c : U) -> R\nmethodtypes-of:Cmd:\nmethodtypes-of:Collection<T>:\nmethodtypes-of:Dictionary<K, T>:\nmethodtypes-of:Enumerable<T>:\nmethodtypes-of:ExceptionKind:\n & 3\n & Pattern\n 3 parent -> ExceptionKind\n 3 raise(message : String) -> Done\n 3 raise(message : String)with(argument : Object) -> Done\n 3 refine(parentKind : ExceptionKind) -> ExceptionKind\nmethodtypes-of:Expandable<T>:\nmethodtypes-of:Extractable:\n 1 extract -> Done\nmethodtypes-of:Fun2<T, U, R>:\nmethodtypes-of:Fun3<T, U, W, R>:\nmethodtypes-of:Fun<T, R>:\nmethodtypes-of:Iterable<T>:\nmethodtypes-of:Iterator<T>:\nmethodtypes-of:List<T>:\nmethodtypes-of:MatchResult:\n & 2\n & Boolean\n 2 bindings -> List<Unknown>\n 2 result -> Unknown\nmethodtypes-of:Pattern:\n 2 &(other : Pattern) -> Pattern\n 2 match(value : Object) -> MatchResult\n 2 |(other : Pattern) -> Pattern\nmethodtypes-of:Point:\n 3 *(factor : Number) -> Point\n 3 +(other : Point) -> Point\n 3 -(other : Point) -> Point\n 3 /(factor : Number) -> Point\n 3 ==(other : Object) -> Boolean\n 3 distanceTo(other : Point) -> Number\n 3 dot(other : Point) -> Number\n 3 length -> Number\n 3 norm -> Point\n 3 prefix- -> Point\n 3 x -> Number\n 3 y -> Number\n 3 \u22c5(other : Point) -> Number\nmethodtypes-of:Proc2<T, U>:\nmethodtypes-of:Proc3<T, U, W>:\nmethodtypes-of:Proc<T>:\nmethodtypes-of:Sequence<T>:\nmethodtypes-of:Set<T>:\nmodules:\n collectionsPrelude\npath:\n StandardPrelude\npublic:\n AndPattern\n BaseType\n BasicPattern\n Binding\n BindingPattern\n Block0\n Block1\n Block2\n Block3\n BoundsError\n Cmd\n Collection\n ConcurrentModification\n Dictionary\n Enumerable\n ExceptionKind\n Expandable\n Extractable\n FailedMatch\n Fun\n Fun2\n Fun3\n Iterable\n Iterator\n IteratorExhausted\n List\n MatchAndDestructuringPattern\n MatchResult\n NoSuchObject\n OrPattern\n Pattern\n Point\n Proc\n Proc2\n Proc3\n RequestError\n Sequence\n Set\n Singleton\n SubobjectResponsibility\n SuccessfulMatch\n TypeIntersection\n TypeSubtraction\n TypeUnion\n TypeVariant\n UninitializedVariable\n VariablePattern\n WildcardPattern\n abstract\n alwaysEqual\n binding\n collection\n collections\n dictionary(1)\n do(1)while(1)\n emptyDictionary\n emptyList\n emptySequence\n emptySet\n enumerable\n for(1)and(1)do(1)\n indexable\n list(1)\n max(2)\n methods\n min(2)\n point2Dx(1)y(1)\n range\n repeat(1)times(1)\n required\n sequence(1)\n set(1)\n valueOf(1)\ntypes:\n Binding\n Block0\n Block1\n Block2\n Block3\n Cmd\n Collection\n Dictionary\n Enumerable\n ExceptionKind\n Expandable\n Extractable\n Fun\n Fun2\n Fun3\n Iterable\n Iterator\n List\n MatchResult\n Pattern\n Point\n Proc\n Proc2\n Proc3\n Sequence\n Set\n";
                                                                      if (typeof originalSourceLines !== "undefined") {
                                                                        originalSourceLines["StandardPrelude"] = [
                                                                          "#pragma NativePrelude",
                                                                          "#pragma ExtendedLineups",
                                                                          "",
                                                                          "var isStandardPrelude := true",
                                                                          "",
                                                                          "class SuccessfulMatch.new(result', bindings') {",
                                                                          "    inherits true",
                                                                          "    method result { result' }",
                                                                          "    method bindings { bindings' }",
                                                                          "    method asString {",
                                                                          "        \"SuccessfulMatch(result = {result}, bindings = {bindings})\"",
                                                                          "    }",
                                                                          "}",
                                                                          "",
                                                                          "class FailedMatch.new(result') {",
                                                                          "    inherits false",
                                                                          "    method result { result' }",
                                                                          "    method bindings { emptySequence }",
                                                                          "    method asString {",
                                                                          "        \"FailedMatch(result = {result})\"",
                                                                          "    }",
                                                                          "}",
                                                                          "",
                                                                          "method abstract {",
                                                                          "    SubobjectResponsibility.raise \"abstract method not overriden by subobject\"",
                                                                          "}",
                                                                          "",
                                                                          "",
                                                                          "method required {",
                                                                          "    SubobjectResponsibility.raise \"required method not overriden by subobject\"",
                                                                          "}",
                                                                          "",
                                                                          "method do(action)while(condition) {",
                                                                          "    while {",
                                                                          "        action.apply",
                                                                          "        condition.apply",
                                                                          "    } do { }",
                                                                          "}",
                                                                          "",
                                                                          "method repeat(n)times(action) {",
                                                                          "    var ix := n",
                                                                          "    while {ix > 0} do {",
                                                                          "        ix := ix - 1",
                                                                          "        action.apply",
                                                                          "    }",
                                                                          "}",
                                                                          "",
                                                                          "method for (cs) and (ds) do (action) -> Done {",
                                                                          "    def dIter = ds.iterator",
                                                                          "    cs.do { c -> ",
                                                                          "        if (dIter.hasNext) then {",
                                                                          "            action.apply(c, dIter.next)",
                                                                          "        } else {",
                                                                          "            return",
                                                                          "        }",
                                                                          "    }",
                                                                          "}",
                                                                          "",
                                                                          "method min(a, b) {",
                                                                          "    if (a < b) then { a } else { b }",
                                                                          "}",
                                                                          "",
                                                                          "method max(a, b) {",
                                                                          "    if (a > b) then { a } else { b }",
                                                                          "}",
                                                                          "",
                                                                          "method valueOf (nullaryBlock) {",
                                                                          "    nullaryBlock.apply",
                                                                          "}",
                                                                          "",
                                                                          "class BasicPattern.new {",
                                                                          "    method &(o) {",
                                                                          "        AndPattern.new(self, o)",
                                                                          "    }",
                                                                          "    method |(o) {",
                                                                          "        OrPattern.new(self, o)",
                                                                          "    }",
                                                                          "}",
                                                                          "class MatchAndDestructuringPattern.new(pat, items') {",
                                                                          "    inherits BasicPattern.new",
                                                                          "    def pattern = pat",
                                                                          "    def items = items'",
                                                                          "    method match(o) {",
                                                                          "        def m = pat.match(o)",
                                                                          "        if (m) then{",
                                                                          "            var mbindings := m.bindings",
                                                                          "            def bindings = []",
                                                                          "            if (mbindings.size < items.size) then {",
                                                                          "                if (Extractable.match(o)) then {",
                                                                          "                    mbindings := o.extract",
                                                                          "                } else {",
                                                                          "                    return FailedMatch.new(o)",
                                                                          "                }",
                                                                          "            }",
                                                                          "            for (items.indices) do {i->",
                                                                          "                def b = items.at(i).match(mbindings.at(i))",
                                                                          "                if (!b) then {",
                                                                          "                    return FailedMatch.new(o)",
                                                                          "                }",
                                                                          "                for (b.bindings) do {bb->",
                                                                          "                    bindings.push(bb)",
                                                                          "                }",
                                                                          "            }",
                                                                          "            SuccessfulMatch.new(o, bindings)",
                                                                          "        } else {",
                                                                          "            FailedMatch.new(o)",
                                                                          "        }",
                                                                          "    }",
                                                                          "}",
                                                                          "",
                                                                          "class VariablePattern.new(nm) {",
                                                                          "    inherits BasicPattern.new",
                                                                          "    method match(o) {",
                                                                          "        SuccessfulMatch.new(o, [o])",
                                                                          "    }",
                                                                          "}",
                                                                          "",
                                                                          "class BindingPattern.new(pat) {",
                                                                          "    inherits BasicPattern.new",
                                                                          "    method match(o) {",
                                                                          "        def bindings = [o]",
                                                                          "        def m = pat.match(o)",
                                                                          "        if (!m) then {",
                                                                          "            return m",
                                                                          "        }",
                                                                          "        for (m.bindings) do {b->",
                                                                          "            bindings.push(b)",
                                                                          "        }",
                                                                          "        SuccessfulMatch.new(o, bindings)",
                                                                          "    }",
                                                                          "}",
                                                                          "",
                                                                          "class WildcardPattern.new {",
                                                                          "    inherits BasicPattern.new",
                                                                          "    method match(o) {",
                                                                          "        SuccessfulMatch.new(done, [])",
                                                                          "    }",
                                                                          "}",
                                                                          "",
                                                                          "class AndPattern.new(p1, p2) {",
                                                                          "    inherits BasicPattern.new",
                                                                          "    method match(o) {",
                                                                          "        def m1 = p1.match(o)",
                                                                          "        if (!m1) then {",
                                                                          "            return m1",
                                                                          "        }",
                                                                          "        def m2 = p2.match(o)",
                                                                          "        if (!m2) then {",
                                                                          "            return m2",
                                                                          "        }",
                                                                          "        def bindings = []",
                                                                          "        for (m1.bindings) do {b->",
                                                                          "            bindings.push(b)",
                                                                          "        }",
                                                                          "        for (m2.bindings) do {b->",
                                                                          "            bindings.push(b)",
                                                                          "        }",
                                                                          "        SuccessfulMatch.new(o, bindings)",
                                                                          "    }",
                                                                          "}",
                                                                          "",
                                                                          "class OrPattern.new(p1, p2) {",
                                                                          "    inherits BasicPattern.new",
                                                                          "    method match(o) {",
                                                                          "        if (p1.match(o)) then {",
                                                                          "            return SuccessfulMatch.new(o, [])",
                                                                          "        }",
                                                                          "        if (p2.match(o)) then {",
                                                                          "            return SuccessfulMatch.new(o, [])",
                                                                          "        }",
                                                                          "        FailedMatch.new(o)",
                                                                          "    }",
                                                                          "}",
                                                                          "",
                                                                          "def Singleton is public = object {",
                                                                          "    class new {",
                                                                          "        inherits BasicPattern.new",
                                                                          "        method match(other) {",
                                                                          "            if (self.isMe(other)) then {",
                                                                          "                SuccessfulMatch.new(other, [])",
                                                                          "            } else {",
                                                                          "                FailedMatch.new(other)",
                                                                          "            }",
                                                                          "        }",
                                                                          "        method ==(other) { self.isMe(other) }",
                                                                          "    }",
                                                                          "    class named(printString) {",
                                                                          "        inherits Singleton.new",
                                                                          "        method asString { printString }",
                                                                          "    }",
                                                                          "}",
                                                                          "",
                                                                          "class BaseType.new(name) {",
                                                                          "    method &(o) {",
                                                                          "        TypeIntersection.new(self, o)",
                                                                          "    }",
                                                                          "    method |(o) {",
                                                                          "        TypeVariant.new(self, o)",
                                                                          "    }",
                                                                          "    method +(o) {",
                                                                          "        TypeUnion.new(self, o)",
                                                                          "    }",
                                                                          "    method -(o) {",
                                                                          "        TypeSubtraction.new(self, o)",
                                                                          "    }",
                                                                          "    method asString {",
                                                                          "        if (name == \"\") then { \"type ‹anon›\" }",
                                                                          "                        else { \"type {name}\" }",
                                                                          "    }",
                                                                          "}",
                                                                          "",
                                                                          "class TypeIntersection.new(t1, t2) {",
                                                                          "    inherits AndPattern.new(t1, t2)",
                                                                          "    // inherits BaseType.new",
                                                                          "    method &(o) {",
                                                                          "        TypeIntersection.new(self, o)",
                                                                          "    }",
                                                                          "    method |(o) {",
                                                                          "        TypeVariant.new(self, o)",
                                                                          "    }",
                                                                          "    method +(o) {",
                                                                          "        TypeUnion.new(self, o)",
                                                                          "    }",
                                                                          "    method -(o) {",
                                                                          "        TypeSubtraction.new(self, o)",
                                                                          "    }",
                                                                          "    method methodNames {",
                                                                          "        t1.methodNames.addAll(t2.methodNames)",
                                                                          "    }",
                                                                          "    method asString { \"({t1} & {t2})\" }",
                                                                          "}",
                                                                          "",
                                                                          "class TypeVariant.new(t1, t2) {",
                                                                          "    inherits OrPattern.new(t1, t2)",
                                                                          "    // inherits BaseType.new",
                                                                          "    method &(o) {",
                                                                          "        TypeIntersection.new(self, o)",
                                                                          "    }",
                                                                          "    method |(o) {",
                                                                          "        TypeVariant.new(self, o)",
                                                                          "    }",
                                                                          "    method +(o) {",
                                                                          "        TypeUnion.new(self, o)",
                                                                          "    }",
                                                                          "    method -(o) {",
                                                                          "        TypeSubtraction.new(self, o)",
                                                                          "    }",
                                                                          "    method methodNames {",
                                                                          "        self.TypeVariantsCannotBeCharacterizedByASetOfMethods",
                                                                          "    }",
                                                                          "    method asString { \"({t1} | {t2})\" }",
                                                                          "}",
                                                                          "",
                                                                          "class TypeUnion.new(t1, t2) {",
                                                                          "    inherits BasicPattern.new",
                                                                          "//    inherits BaseType.new",
                                                                          "    method &(o) {",
                                                                          "        TypeIntersection.new(self, o)",
                                                                          "    }",
                                                                          "    method |(o) {",
                                                                          "        TypeVariant.new(self, o)",
                                                                          "    }",
                                                                          "    method +(o) {",
                                                                          "        TypeUnion.new(self, o)",
                                                                          "    }",
                                                                          "    method -(o) {",
                                                                          "        TypeSubtraction.new(self, o)",
                                                                          "    }",
                                                                          "    method methodNames {",
                                                                          "        t1.methodNames ** t2.methodNames",
                                                                          "    }",
                                                                          "    method match(o) {",
                                                                          "        ResourceException.raise \"matching against a TypeUnion not yet implemented\"",
                                                                          "        // Why not?  Becuase it requires reflection, which",
                                                                          "        // requires the mirror module, which requires this module.",
                                                                          "        def mirror = ...",
                                                                          "        def oMethodNames = mirror.reflect(o).methodNames",
                                                                          "        for (self.methodNames) do { each ->",
                                                                          "            if (! oMethodNames.contains(each)) then {",
                                                                          "                return FailedMatch.new(o)",
                                                                          "            }",
                                                                          "        }",
                                                                          "        return SuccessfulMatch.new(o, [])",
                                                                          "    }",
                                                                          "    method asString { \"({t1} + {t2})\" }",
                                                                          "}",
                                                                          "",
                                                                          "class TypeSubtraction.new(t1, t2) {",
                                                                          "    inherits BasicPattern.new",
                                                                          "    method &(o) {",
                                                                          "        TypeIntersection.new(self, o)",
                                                                          "    }",
                                                                          "    method |(o) {",
                                                                          "        TypeVariant.new(self, o)",
                                                                          "    }",
                                                                          "    method +(o) {",
                                                                          "        TypeUnion.new(self, o)",
                                                                          "    }",
                                                                          "    method -(o) {",
                                                                          "        TypeSubtraction.new(self, o)",
                                                                          "    }",
                                                                          "    method methodNames {",
                                                                          "        t1.methodNames.removeAll(t2.methodNames)",
                                                                          "    }",
                                                                          "    method asString { \"({t1} - {t2})\" }",
                                                                          "}",
                                                                          "",
                                                                          "// Now define the types.  Because some of the types are defined using &,",
                                                                          "// TypeIntersection must be defined first.",
                                                                          "",
                                                                          "type Extractable = {",
                                                                          "    extract",
                                                                          "}",
                                                                          "",
                                                                          "type MatchResult = Boolean & type {",
                                                                          "    result -> Unknown",
                                                                          "    bindings -> List⟦Unknown⟧",
                                                                          "}",
                                                                          "",
                                                                          "type Pattern = {",
                                                                          "    & (other:Pattern) -> Pattern",
                                                                          "    | (other:Pattern) -> Pattern",
                                                                          "    match(value:Object) -> MatchResult",
                                                                          "}",
                                                                          "",
                                                                          "type ExceptionKind = Pattern & type {",
                                                                          "    refine (parentKind:ExceptionKind) -> ExceptionKind",
                                                                          "    parent -> ExceptionKind",
                                                                          "    raise (message:String) -> Done",
                                                                          "    raise (message:String) with (argument:Object) -> Done",
                                                                          "}",
                                                                          "",
                                                                          "type Point =  {",
                                                                          "",
                                                                          "    x -> Number",
                                                                          "    // the x-coordinates of self",
                                                                          "",
                                                                          "    y -> Number",
                                                                          "    // the y-coordinate of self",
                                                                          "",
                                                                          "    == (other:Object) -> Boolean",
                                                                          "    // true if other is a Point with the same x and y coordinates as self.",
                                                                          "",
                                                                          "    + (other:Point) -> Point",
                                                                          "    // the Point that is the vector sum of self and other, i.e. (self.x+other.x) @ (self.y+other.y)",
                                                                          "",
                                                                          "    - (other:Point) -> Point",
                                                                          "    // the Point that is the vector difference of self and other, i.e. (self.x-other.x) @ (self.y-other.y)",
                                                                          "",
                                                                          "    prefix- -> Point",
                                                                          "    // the negation of self",
                                                                          "    ",
                                                                          "    * (factor:Number) -> Point",
                                                                          "    // this point scaled by factor, i.e. (self.x*factor) @ (self.y*factor)",
                                                                          "    ",
                                                                          "    / (factor:Number) -> Point",
                                                                          "    // this point scaled by 1/factor, i.e. (self.x/factor) @ (self.y/factor)",
                                                                          "",
                                                                          "    length -> Number",
                                                                          "    // distance from self to the origin",
                                                                          "",
                                                                          "    distanceTo(other:Point) -> Number",
                                                                          "    // distance from self to other",
                                                                          "",
                                                                          "    dot (other:Point) -> Number",
                                                                          "    ⋅ (other:Point) -> Number",
                                                                          "    // dot product of self and other",
                                                                          "",
                                                                          "    norm -> Point",
                                                                          "    // the unit vector (vecor of length 1) in same direction as self",
                                                                          "}",
                                                                          "",
                                                                          "class alwaysEqual {     // a trait",
                                                                          "    method == (other) {",
                                                                          "        self.isMe(other)",
                                                                          "    }",
                                                                          "}",
                                                                          "",
                                                                          "class point2Dx (x') y (y') {",
                                                                          "    def x is readable = x'",
                                                                          "    def y is readable = y'",
                                                                          "    method asString { \"({x}@{y})\" }",
                                                                          "    method asDebugString { self.asString }",
                                                                          "    method distanceTo(other:Point) { (((x - other.x)^2) + ((y - other.y)^2))^(0.5) }",
                                                                          "    method -(other:Point) { point2Dx (x - other.x) y (y - other.y) }",
                                                                          "    method +(other:Point) { point2Dx (x + other.x) y (y + other.y) }",
                                                                          "    method /(other:Number) { point2Dx (x / other) y (y / other) }",
                                                                          "    method *(other:Number) { point2Dx (x * other) y (y * other) }",
                                                                          "    method length {((x^2) + (y^2))^0.5}",
                                                                          "    method ==(other) {",
                                                                          "        match (other)",
                                                                          "            case {o:Point -> (x == o.x) && (y == o.y)}",
                                                                          "            case {_ -> false}",
                                                                          "    }",
                                                                          "    method prefix- { point2Dx (-x) y (-y) }",
                                                                          "    method dot (other:Point) -> Number {",
                                                                          "        // dot product",
                                                                          "        (x * other.x) + (y * other.y)",
                                                                          "    }",
                                                                          "    method ⋅ (other:Point) -> Number {",
                                                                          "        // dot product",
                                                                          "        (x * other.x) + (y * other.y)",
                                                                          "    }",
                                                                          "    method reverseTimesNumber(n) { point2Dx (n * x) y (n * x) }",
                                                                          "    method reversePlusNumber(n) { point2Dx (n + x) y (n + x) }",
                                                                          "    method reverseDivideNumber(n) { point2Dx (n / x) y (n / x) }",
                                                                          "    method reverseMinusNumber(n) { point2Dx (n - x) y (n - x) }",
                                                                          "    method norm { self / self.length }",
                                                                          "}",
                                                                          "",
                                                                          "import \"collectionsPrelude\" as coll",
                                                                          "// collectionsPrelude defines types using &, so it can't be imported until",
                                                                          "// the above definition of TypeIntersection has been executed.",
                                                                          "",
                                                                          "// We should just be able to put \"is public\" on the above import, but this is",
                                                                          "// not fully implemented.  So instead we create an alias:",
                                                                          "def collections is public = coll",
                                                                          "",
                                                                          "type Block0⟦R⟧ = collections.Block0⟦R⟧",
                                                                          "type Block1⟦T,R⟧ = collections.Block1⟦T,R⟧",
                                                                          "type Block2⟦S,T,R⟧ = collections.Block2⟦S,T,R⟧",
                                                                          "type Block3⟦S,T,U,R⟧ = type {",
                                                                          "    apply(a:S, b:T, c:U) -> R",
                                                                          "}",
                                                                          "type Cmd = Block0⟦Done⟧",
                                                                          "type Fun⟦T,R⟧ = Block1⟦T,R⟧",
                                                                          "type Fun2⟦T,U,R⟧ = Block2⟦T,U,R⟧",
                                                                          "type Fun3⟦T,U,W,R⟧ = Block3⟦T,U,W,R⟧",
                                                                          "type Proc⟦T⟧ = Block1⟦T,Done⟧",
                                                                          "type Proc2⟦T,U⟧ = Block2⟦T,U,Done⟧",
                                                                          "type Proc3⟦T,U,W⟧ = Block3⟦T,U,W,Done⟧",
                                                                          "",
                                                                          "type Collection⟦T⟧ = collections.Collection⟦T⟧",
                                                                          "type Iterable⟦T⟧ = collections.Iterable⟦T⟧",
                                                                          "type Expandable⟦T⟧ = collections.Expandable⟦T⟧",
                                                                          "type Enumerable⟦T⟧ = collections.Enumerable⟦T⟧",
                                                                          "type Binding⟦K,T⟧ = collections.Binding⟦K,T⟧",
                                                                          "type Iterator⟦T⟧ = collections.Iterator⟦T⟧",
                                                                          "type Sequence⟦T⟧ = collections.Sequence⟦T⟧",
                                                                          "type List⟦T⟧ = collections.List⟦T⟧",
                                                                          "type Set⟦T⟧ = collections.Set⟦T⟧",
                                                                          "type Dictionary⟦K,T⟧ = collections.Dictionary⟦K,T⟧",
                                                                          "",
                                                                          "def BoundsError is public = collections.BoundsError",
                                                                          "def IteratorExhausted is public = collections.IteratorExhausted",
                                                                          "def NoSuchObject is public = collections.NoSuchObject",
                                                                          "def RequestError is public = collections.RequestError",
                                                                          "def SubobjectResponsibility is public = collections.SubobjectResponsibility",
                                                                          "def ConcurrentModification is public = collections.ConcurrentModification",
                                                                          "def UninitializedVariable is public = ProgrammingError.refine \"UninitializedVariable\"",
                                                                          "",
                                                                          "def collection is public = collections.collection",
                                                                          "def enumerable is public = collections.enumerable",
                                                                          "def indexable is public = collections.indexable",
                                                                          "",
                                                                          "method sequence⟦T⟧(arg) {",
                                                                          "    collections.sequence⟦T⟧.withAll(arg)",
                                                                          "}",
                                                                          "",
                                                                          "def emptySequence is public = collections.sequence.empty",
                                                                          "",
                                                                          "method list⟦T⟧(arg) {",
                                                                          "    collections.list⟦T⟧.withAll(arg)",
                                                                          "}",
                                                                          "method emptyList { collections.list.empty }",
                                                                          "",
                                                                          "method set⟦T⟧(arg) {",
                                                                          "    collections.set⟦T⟧.withAll(arg)",
                                                                          "}",
                                                                          "method emptySet { collections.set.empty }",
                                                                          "",
                                                                          "method dictionary⟦K, T⟧(arg) {",
                                                                          "    collections.dictionary⟦K, T⟧.withAll(arg)",
                                                                          "}",
                                                                          "method emptyDictionary { collections.dictionary.empty }",
                                                                          "",
                                                                          "def binding is public = collections.binding",
                                                                          "def range is public = collections.range",
                                                                          "",
                                                                          "method methods {",
                                                                          "    prelude.clone(self)",
                                                                          "}",
                                                                          "",
                                                                          "" ];
                                                                      }
                                                                      if (typeof global !== "undefined")
                                                                        global.gracecode_StandardPrelude = gracecode_StandardPrelude;
                                                                      if (typeof window !== "undefined")
                                                                        window.gracecode_StandardPrelude = gracecode_StandardPrelude;
