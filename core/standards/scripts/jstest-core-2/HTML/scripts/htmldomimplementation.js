/* Tests for DOM 2 Core 'DOMImplementation' object.
*/

var cvs = "$Id: htmldomimplementation.js 4838 2006-01-18 05:59:01Z hallvord $";

testmodule( "HTMLDOMImplementation", cvs );

try {

  testcase( "Function exists" );
  tdef( "implementation", document.implementation );
  tdef( "createHTMLDocument", document.implementation.createHTMLDocument );
  tdef( "hasFeature", document.implementation.hasFeature );

  testcase( "Call function" );
  
  var doc = document.implementation.createHTMLDocument("Test doc");
  test("createHTMLDocument",doc.title,"Test doc");
 
 
  test("window",window.document,document);
  
  //window.document = doc;

} catch (e) { exception(e); }

testmodule_finished();

/* eof */
