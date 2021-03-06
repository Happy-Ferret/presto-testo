//Test some of the things that are and aren't allowed in identifiers

/*
 * Tests run over only the things that are in both Unicode 5.1 and
 * Unicode 3.
 */

digits = ['\u0030', '\u0031', '\u0032', '\u0033', '\u0034',
	  '\u0035', '\u0036', '\u0037', '\u0038', '\u0039',
	  '\u0660', '\u0661', '\u0662', '\u0663', '\u0664',
	  '\u0665', '\u0666', '\u0667', '\u0668', '\u0669',
	  '\u06f0', '\u06f1', '\u06f2', '\u06f3', '\u06f4',
	  '\u06f5', '\u06f6', '\u06f7', '\u06f8', '\u06f9',
	  '\u0966', '\u0967', '\u0968', '\u0969', '\u096a',
	  '\u096b', '\u096c', '\u096d', '\u096e', '\u096f',
	  '\u09e6', '\u09e7', '\u09e8', '\u09e9', '\u09ea',
	  '\u09eb', '\u09ec', '\u09ed', '\u09ee', '\u09ef',
	  '\u0a66', '\u0a67', '\u0a68', '\u0a69', '\u0a6a',
	  '\u0a6b', '\u0a6c', '\u0a6d', '\u0a6e', '\u0a6f',
	  '\u0ae6', '\u0ae7', '\u0ae8', '\u0ae9', '\u0aea',
	  '\u0aeb', '\u0aec', '\u0aed', '\u0aee', '\u0aef',
	  '\u0b66', '\u0b67', '\u0b68', '\u0b69', '\u0b6a',
	  '\u0b6b', '\u0b6c', '\u0b6d', '\u0b6e', '\u0b6f',
	  '\u0be7', '\u0be8', '\u0be9', '\u0bea', '\u0beb',
	  '\u0bec', '\u0bed', '\u0bee', '\u0bef', '\u0c66',
	  '\u0c67', '\u0c68', '\u0c69', '\u0c6a', '\u0c6b',
	  '\u0c6c', '\u0c6d', '\u0c6e', '\u0c6f', '\u0ce6',
	  '\u0ce7', '\u0ce8', '\u0ce9', '\u0cea', '\u0ceb',
	  '\u0cec', '\u0ced', '\u0cee', '\u0cef', '\u0d66',
	  '\u0d67', '\u0d68', '\u0d69', '\u0d6a', '\u0d6b',
	  '\u0d6c', '\u0d6d', '\u0d6e', '\u0d6f', '\u0e50',
	  '\u0e51', '\u0e52', '\u0e53', '\u0e54', '\u0e55',
	  '\u0e56', '\u0e57', '\u0e58', '\u0e59', '\u0ed0',
	  '\u0ed1', '\u0ed2', '\u0ed3', '\u0ed4', '\u0ed5',
	  '\u0ed6', '\u0ed7', '\u0ed8', '\u0ed9', '\u0f20',
	  '\u0f21', '\u0f22', '\u0f23', '\u0f24', '\u0f25',
	  '\u0f26', '\u0f27', '\u0f28', '\u0f29', '\u1040',
	  '\u1041', '\u1042', '\u1043', '\u1044', '\u1045',
	  '\u1046', '\u1047', '\u1048', '\u1049', '\u17e0',
	  '\u17e1', '\u17e2', '\u17e3', '\u17e4', '\u17e5',
	  '\u17e6', '\u17e7', '\u17e8', '\u17e9', '\u1810',
	  '\u1811', '\u1812', '\u1813', '\u1814', '\u1815',
	  '\u1816', '\u1817', '\u1818', '\u1819', '\uff10',
	  '\uff11', '\uff12', '\uff13', '\uff14', '\uff15',
	  '\uff16', '\uff17', '\uff18', '\uff19'];

/*
 * Unicode 3 digits ['\u1369', '\u136a', '\u136b', '\u136c',
 *                   '\u136d', '\u136e', '\u136f', '\u1370',
 *                   '\u1371']
 * Unicode 5 digits ['\u07c0', '\u07c1', '\u07c2', '\u07c3', '\u07c4',
 *                   '\u07c5', '\u07c6', '\u07c7', '\u07c8', '\u07c9',
 *                   '\u0be6', '\u1090', '\u1091', '\u1092', '\u1093',
 *                   '\u1094', '\u1095', '\u1096', '\u1097', '\u1098',
 *                   '\u1099', '\u1946', '\u1947', '\u1948', '\u1949',
 *                   '\u194a', '\u194b', '\u194c', '\u194d', '\u194e',
 *                   '\u194f', '\u19d0', '\u19d1', '\u19d2', '\u19d3',
 *                   '\u19d4', '\u19d5', '\u19d6', '\u19d7', '\u19d8',
 *                   '\u19d9', '\u1b50', '\u1b51', '\u1b52', '\u1b53',
 *                   '\u1b54', '\u1b55', '\u1b56', '\u1b57', '\u1b58',
 *                   '\u1b59', '\u1bb0', '\u1bb1', '\u1bb2', '\u1bb3',
 *                   '\u1bb4', '\u1bb5', '\u1bb6', '\u1bb7', '\u1bb8',
 *                   '\u1bb9', '\u1c40', '\u1c41', '\u1c42', '\u1c43',
 *                   '\u1c44', '\u1c45', '\u1c46', '\u1c47', '\u1c48',
 *                   '\u1c49', '\u1c50', '\u1c51', '\u1c52', '\u1c53',
 *                   '\u1c54', '\u1c55', '\u1c56', '\u1c57', '\u1c58',
 *                   '\u1c59', '\ua620', '\ua621', '\ua622', '\ua623',
 *                   '\ua624', '\ua625', '\ua626', '\ua627', '\ua628',
 *                   '\ua629', '\ua8d0', '\ua8d1', '\ua8d2', '\ua8d3',
 *                   '\ua8d4', '\ua8d5', '\ua8d6', '\ua8d7', '\ua8d8',
 *                   '\ua8d9', '\ua900', '\ua901', '\ua902', '\ua903',
 *                   '\ua904', '\ua905', '\ua906', '\ua907', '\ua908',
 *                   '\ua909', '\uaa50', '\uaa51', '\uaa52', '\uaa53',
 *                   '\uaa54', '\uaa55', '\uaa56', '\uaa57', '\uaa58',
 *                   '\uaa59']
 */


combining_marks = ['\u0300', '\u0301', '\u0302', '\u0303', '\u0304',
		   '\u0305', '\u0306', '\u0307', '\u0308', '\u0309',
		   '\u030a', '\u030b', '\u030c', '\u030d', '\u030e',
		   '\u030f', '\u0310', '\u0311', '\u0312', '\u0313',
		   '\u0314', '\u0315', '\u0316', '\u0317', '\u0318',
		   '\u0319', '\u031a', '\u031b', '\u031c', '\u031d',
		   '\u031e', '\u031f', '\u0320', '\u0321', '\u0322',
		   '\u0323', '\u0324', '\u0325', '\u0326', '\u0327',
		   '\u0328', '\u0329', '\u032a', '\u032b', '\u032c',
		   '\u032d', '\u032e', '\u032f', '\u0330', '\u0331',
		   '\u0332', '\u0333', '\u0334', '\u0335', '\u0336',
		   '\u0337', '\u0338', '\u0339', '\u033a', '\u033b',
		   '\u033c', '\u033d', '\u033e', '\u033f', '\u0340',
		   '\u0341', '\u0342', '\u0343', '\u0344', '\u0345',
		   '\u0346', '\u0347', '\u0348', '\u0349', '\u034a',
		   '\u034b', '\u034c', '\u034d', '\u034e', '\u0360',
		   '\u0361', '\u0362', '\u0483', '\u0484', '\u0485',
		   '\u0486', '\u0591', '\u0592', '\u0593', '\u0594',
		   '\u0595', '\u0596', '\u0597', '\u0598', '\u0599',
		   '\u059a', '\u059b', '\u059c', '\u059d', '\u059e',
		   '\u059f', '\u05a0', '\u05a1', '\u05a3', '\u05a4',
		   '\u05a5', '\u05a6', '\u05a7', '\u05a8', '\u05a9',
		   '\u05aa', '\u05ab', '\u05ac', '\u05ad', '\u05ae',
		   '\u05af', '\u05b0', '\u05b1', '\u05b2', '\u05b3',
		   '\u05b4', '\u05b5', '\u05b6', '\u05b7', '\u05b8',
		   '\u05b9', '\u05bb', '\u05bc', '\u05bd', '\u05bf',
		   '\u05c1', '\u05c2', '\u05c4', '\u064b', '\u064c',
		   '\u064d', '\u064e', '\u064f', '\u0650', '\u0651',
		   '\u0652', '\u0653', '\u0654', '\u0655', '\u0670',
		   '\u06d6', '\u06d7', '\u06d8', '\u06d9', '\u06da',
		   '\u06db', '\u06dc', '\u06df', '\u06e0', '\u06e1',
		   '\u06e2', '\u06e3', '\u06e4', '\u06e7', '\u06e8',
		   '\u06ea', '\u06eb', '\u06ec', '\u06ed', '\u0711',
		   '\u0730', '\u0731', '\u0732', '\u0733', '\u0734',
		   '\u0735', '\u0736', '\u0737', '\u0738', '\u0739',
		   '\u073a', '\u073b', '\u073c', '\u073d', '\u073e',
		   '\u073f', '\u0740', '\u0741', '\u0742', '\u0743',
		   '\u0744', '\u0745', '\u0746', '\u0747', '\u0748',
		   '\u0749', '\u074a', '\u07a6', '\u07a7', '\u07a8',
		   '\u07a9', '\u07aa', '\u07ab', '\u07ac', '\u07ad',
		   '\u07ae', '\u07af', '\u07b0', '\u0901', '\u0902',
		   '\u0903', '\u093c', '\u093e', '\u093f', '\u0940',
		   '\u0941', '\u0942', '\u0943', '\u0944', '\u0945',
		   '\u0946', '\u0947', '\u0948', '\u0949', '\u094a',
		   '\u094b', '\u094c', '\u094d', '\u0951', '\u0952',
		   '\u0953', '\u0954', '\u0962', '\u0963', '\u0981',
		   '\u0982', '\u0983', '\u09bc', '\u09be', '\u09bf',
		   '\u09c0', '\u09c1', '\u09c2', '\u09c3', '\u09c4',
		   '\u09c7', '\u09c8', '\u09cb', '\u09cc', '\u09cd',
		   '\u09d7', '\u09e2', '\u09e3', '\u0a02', '\u0a3c',
		   '\u0a3e', '\u0a3f', '\u0a40', '\u0a41', '\u0a42',
		   '\u0a47', '\u0a48', '\u0a4b', '\u0a4c', '\u0a4d',
		   '\u0a70', '\u0a71', '\u0a81', '\u0a82', '\u0a83',
		   '\u0abc', '\u0abe', '\u0abf', '\u0ac0', '\u0ac1',
		   '\u0ac2', '\u0ac3', '\u0ac4', '\u0ac5', '\u0ac7',
		   '\u0ac8', '\u0ac9', '\u0acb', '\u0acc', '\u0acd',
		   '\u0b01', '\u0b02', '\u0b03', '\u0b3c', '\u0b3e',
		   '\u0b3f', '\u0b40', '\u0b41', '\u0b42', '\u0b43',
		   '\u0b47', '\u0b48', '\u0b4b', '\u0b4c', '\u0b4d',
		   '\u0b56', '\u0b57', '\u0b82', '\u0bbe', '\u0bbf',
		   '\u0bc0', '\u0bc1', '\u0bc2', '\u0bc6', '\u0bc7',
		   '\u0bc8', '\u0bca', '\u0bcb', '\u0bcc', '\u0bcd',
		   '\u0bd7', '\u0c01', '\u0c02', '\u0c03', '\u0c3e',
		   '\u0c3f', '\u0c40', '\u0c41', '\u0c42', '\u0c43',
		   '\u0c44', '\u0c46', '\u0c47', '\u0c48', '\u0c4a',
		   '\u0c4b', '\u0c4c', '\u0c4d', '\u0c55', '\u0c56',
		   '\u0c82', '\u0c83', '\u0cbe', '\u0cbf', '\u0cc0',
		   '\u0cc1', '\u0cc2', '\u0cc3', '\u0cc4', '\u0cc6',
		   '\u0cc7', '\u0cc8', '\u0cca', '\u0ccb', '\u0ccc',
		   '\u0ccd', '\u0cd5', '\u0cd6', '\u0d02', '\u0d03',
		   '\u0d3e', '\u0d3f', '\u0d40', '\u0d41', '\u0d42',
		   '\u0d43', '\u0d46', '\u0d47', '\u0d48', '\u0d4a',
		   '\u0d4b', '\u0d4c', '\u0d4d', '\u0d57', '\u0d82',
		   '\u0d83', '\u0dca', '\u0dcf', '\u0dd0', '\u0dd1',
		   '\u0dd2', '\u0dd3', '\u0dd4', '\u0dd6', '\u0dd8',
		   '\u0dd9', '\u0dda', '\u0ddb', '\u0ddc', '\u0ddd',
		   '\u0dde', '\u0ddf', '\u0df2', '\u0df3', '\u0e31',
		   '\u0e34', '\u0e35', '\u0e36', '\u0e37', '\u0e38',
		   '\u0e39', '\u0e3a', '\u0e47', '\u0e48', '\u0e49',
		   '\u0e4a', '\u0e4b', '\u0e4c', '\u0e4d', '\u0e4e',
		   '\u0eb1', '\u0eb4', '\u0eb5', '\u0eb6', '\u0eb7',
		   '\u0eb8', '\u0eb9', '\u0ebb', '\u0ebc', '\u0ec8',
		   '\u0ec9', '\u0eca', '\u0ecb', '\u0ecc', '\u0ecd',
		   '\u0f18', '\u0f19', '\u0f35', '\u0f37', '\u0f39',
		   '\u0f3e', '\u0f3f', '\u0f71', '\u0f72', '\u0f73',
		   '\u0f74', '\u0f75', '\u0f76', '\u0f77', '\u0f78',
		   '\u0f79', '\u0f7a', '\u0f7b', '\u0f7c', '\u0f7d',
		   '\u0f7e', '\u0f7f', '\u0f80', '\u0f81', '\u0f82',
		   '\u0f83', '\u0f84', '\u0f86', '\u0f87', '\u0f90',
		   '\u0f91', '\u0f92', '\u0f93', '\u0f94', '\u0f95',
		   '\u0f96', '\u0f97', '\u0f99', '\u0f9a', '\u0f9b',
		   '\u0f9c', '\u0f9d', '\u0f9e', '\u0f9f', '\u0fa0',
		   '\u0fa1', '\u0fa2', '\u0fa3', '\u0fa4', '\u0fa5',
		   '\u0fa6', '\u0fa7', '\u0fa8', '\u0fa9', '\u0faa',
		   '\u0fab', '\u0fac', '\u0fad', '\u0fae', '\u0faf',
		   '\u0fb0', '\u0fb1', '\u0fb2', '\u0fb3', '\u0fb4',
		   '\u0fb5', '\u0fb6', '\u0fb7', '\u0fb8', '\u0fb9',
		   '\u0fba', '\u0fbb', '\u0fbc', '\u0fc6', '\u102c',
		   '\u102d', '\u102e', '\u102f', '\u1030', '\u1031',
		   '\u1032', '\u1036', '\u1037', '\u1038', '\u1039',
		   '\u1056', '\u1057', '\u1058', '\u1059', '\u17b6',
		   '\u17b7', '\u17b8', '\u17b9', '\u17ba', '\u17bb',
		   '\u17bc', '\u17bd', '\u17be', '\u17bf', '\u17c0',
		   '\u17c1', '\u17c2', '\u17c3', '\u17c4', '\u17c5',
		   '\u17c6', '\u17c7', '\u17c8', '\u17c9', '\u17ca',
		   '\u17cb', '\u17cc', '\u17cd', '\u17ce', '\u17cf',
		   '\u17d0', '\u17d1', '\u17d2', '\u17d3', '\u18a9',
		   '\u20d0', '\u20d1', '\u20d2', '\u20d3', '\u20d4',
		   '\u20d5', '\u20d6', '\u20d7', '\u20d8', '\u20d9',
		   '\u20da', '\u20db', '\u20dc', '\u20e1', '\u302a',
		   '\u302b', '\u302c', '\u302d', '\u302e', '\u302f',
		   '\u3099', '\u309a', '\ufb1e', '\ufe20', '\ufe21',
		   '\ufe22', '\ufe23'];

/*
 * Unicode 3 Combining Marks ['\u0b83', '\u17b4', '\u17b5']
 * Unicode 5 Combining Marks [lots]
 */

connector_punctuation = ['\u203f', '\u2040', '\ufe33',
			 '\ufe34', '\ufe4d', '\ufe4e', '\ufe4f',
			 '\uff3f'];

/*
 * Note \u005f == _
 *
 * unicode 3 only pc ['\u30fb', '\uff65']
 * unicode 5.1 only Pc ['\u2054']
 */

others = ["_", "$"];

function testIdentifierStart_0() {
  var $ = 1;
  assertEquals(1, $);
}

function testIdentifierStart_1() {
  var _ = 1;
  assertEquals(1, "_");
}

function testIdentifierStart_2() {
  //Can't start with connector punctuation characters
  for (var i=0; i<connector_punctuation.length; i++) {
    assertThrows(SyntaxError(), eval, "var " +
		 connector_punctuation[i] + " = 1");
  }
}

function testIdentifierStart_3() {
  //Can't start with a digit
  for (var i=0; i<digits.length; i++) {
    assertThrows(SyntaxError(), eval, "var " + digits[i] + " = 1");
  }
}

function testIdentifierStart_4() {
  //Can't start with a combining marks
  for (var i=0; i<combining_marks.length; i++) {
    assertThrows(SyntaxError(), eval, "var " + combining_marks[i] + " = 1");
  }
}

function testIdentifierStart_5() {
  var \u0024 = 1;
  assertEquals(1, \u0024);
  \u0024++;
  assertEquals(2, $);
}


function testIdentifier_0() {
  var a$ = 1;
  assertEquals(1, a$);
}

function testIdentifierStart_1() {
  var a_ = 1;
  assertEquals(1, a_);
}

function testIdentifier_2() {
  var a\u0024 = 1;
  assertEquals(1, a\u0024);
  a\u0024++;
  assertEquals(2, a$);
}

function testIdentifier_3() {
  //Can contain connector punctuation characters
  for (var i=0; i<connector_punctuation.length; i++) {
    eval("var a" + connector_punctuation[i] + " = 1");
    assertEquals(1, eval("a" + connector_punctuation[i]));
  }
}
testIdentifier_3.metadata = {
    bug:"CARAKAN-261"
};

function testIdentifier_4() {
  //Can contain a digit
  for (var i=0; i<digits.length; i++) {
    eval("var a" + digits[i] + " = 1");
    assertEquals(1, eval("a" + digits[i]));
  }
}
testIdentifier_4.metadata = {
    bug:"CARAKAN-261"
};

function testIdentifier_5() {
  //Can contain combining marks
  for (var i=0; i<combining_marks.length; i++) {
    eval("var a" + combining_marks[i] + " = 1");
    assertEquals(1, eval("a" + combining_marks[i]));
  }
}
testIdentifier_5.metadata = {
    bug:"CARAKAN-261"
};

//Identifiers as function names

function testFunctionIdentifierStart_0() {
  function $(){return 1;};
  assertEquals(1, $());
}

function testFunctionIdentifierStart_1() {
  function _() {return 1;};
  assertEquals(1, "_");
}

function testFunctionIdentifierStart_2() {
  //Can't start with connector punctuation characters
  for (var i=0; i<connector_punctuation.length; i++) {
    assertThrows(SyntaxError(), eval, "function " +
		 connector_punctuation[i] + "() {return 1}");
  }
}

function testIdentifierStart_3() {
  //Can't start with a digit
  for (var i=0; i<digits.length; i++) {
    assertThrows(SyntaxError(), eval, "function " + digits[i] + "() {return 1}");
  }
}

function testIdentifierStart_4() {
  //Can't start with combining marks
  for (var i=0; i<combining_marks.length; i++) {
    assertThrows(SyntaxError(), eval, "function " + combining_marks[i] + "() {return 1}");
  }
}

function testFunctionIdentifierStart_5() {
  function \u0024() {return 1;};
  assertEquals(1, \u0024());
  assertEquals(1, $());
}


function testFunctionIdentifier_0() {
  function a$() {return 1;};
  assertEquals(1, a$());
}

function testFunctionIdentifierStart_1() {
  function a_() {return 1;};
  assertEquals(1, a_());
}

function testFunctionIdentifier_2() {
  function a\u0024() {return 1;};
  assertEquals(1, a\u0024());
  assertEquals(1, a$());
}

function testFunctionIdentifier_3() {
  //Can contain connector punctuation characters
  for (var i=0; i<connector_punctuation.length; i++) {
    eval("function a" + connector_punctuation[i] + "() {return 1}");
    assertEquals(1, eval("a" + connector_punctuation[i])());
  }
}
testFunctionIdentifier_3.metadata = {
  bug:"CARAKAN-261"
};

function testFunctionIdentifier_4() {
  //Can contain a digit
  for (var i=0; i<digits.length; i++) {
    eval("function a" + digits[i] + "() {return 1}");
    assertEquals(1, eval("a" + digits[i])());
  }
}
testFunctionIdentifier_4.metadata = {
    bug:"CARAKAN-261"
};

function testFunctionIdentifier_5() {
  //Can contain combining marks
  for (var i=0; i<combining_marks.length; i++) {
    eval("function a" + combining_marks[i] + "() {return 1}");
    assertEquals(1, eval("a" + combining_marks[i])());
  }
}
testFunctionIdentifier_5.metadata = {
    bug:"CARAKAN-261"
};

function testFunctionNames_0() {
  function f\u0042() {
    return 7;
  }
  assertEquals(7, fB());
}

function testFunctionNames_1() {
  function f\u0400() {
    return 8;
  }
  assertEquals(8, f\u0400());
}

function testFunctionNames_2() {
  function \ufdfb() {
    return 9;
  }
  assertEquals(9, \ufdfb());
}

function testFunctionNames_3() {
  eval("function f\u0042() {return 7;}");
  assertEquals(7, fB());
}

function testFunctionNames_4() {
  eval("function f\u0400() {return 8;}");
  assertEquals(8, f\u0400());
}

function testFunctionNames_5() {
  eval("function \ufdfb() {return 9;}");
  assertEquals(9, \ufdfb());
}

/*
 * For letter characters we have a few tests since being complete
 * means having a rather long list
 */

function testVariableNames_0() {
  var a = 1;
  assertEquals(1,a);
}

function testVariableNames_1() {
  var a\u0042 = 2;
  assertEquals(2, aB);
}

function testVariableNames_2() {
  var a\uAc00 = 3;
  assertEquals(3, a\uAc00);
}

function testVariableNames_3() {
  var \uff21 = 4;
  assertEquals(4, \uff21);
}

function testVariableNames_4() {
  eval("var a = 1");
  assertEquals(1,a);
}

function testVariableNames_5() {
  eval("var a\u0042 = 2");
  assertEquals(2, aB);
}

function testVariableNames_6() {
  eval("var a\uAc00 = 3");
  assertEquals(3, a\uAc00);
}
testVariableNames_6.metadata = {
    bug:"CARAKAN-261"
};

function testVariableNames_7() {
  eval("var \uff21 = 4");
  assertEquals(4, \uff21);
}
testVariableNames_7.metadata = {
    bug:"CARAKAN-261"
};

function testVariableNames_8() {
  var a =  new Function("var a = 1; return a");
  assertEquals(1,a());
}

function testVariableNames_9() {
  var a = new Function("var a\u0042 = 2; return a\u0042");
  assertEquals(2, a());
}

function testVariableNames_10() {
  var a = new Function("var a\uAC00 = 3; return a\uAC00");
  assertEquals(3, a());
}
testVariableNames_10.metadata = {
    bug:"CARAKAN-261"
};

function testVariableNames_11() {
  var a = new Function("var \uff21 = 4; return \uff21");
  assertEquals(4, a());
}
testVariableNames_11.metadata = {
    bug:"CARAKAN-261"
};