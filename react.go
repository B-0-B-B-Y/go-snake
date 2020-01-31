package main

import (
	"fmt"
	"html/template"
	
	"github.com/zserge/webview"
)

func loadUIFramework(snakeInterface webview.WebView) {
	// Inject React and Babel
	snakeInterface.Eval(string(MustAsset("interface/vendor/babel.min.js")))
	snakeInterface.Eval(string(MustAsset("interface/vendor/preact.min.js")))

	// Inject our app code
	snakeInterface.Eval(fmt.Sprintf(`(function(){
		var n=document.createElement('script');
		n.setAttribute('type', 'text/babel');
		n.appendChild(document.createTextNode("%s"));
		document.body.appendChild(n);
	})()`, template.JSEscapeString(string(MustAsset("interface/app.jsx")))))

	// Process our code with Babel
	snakeInterface.Eval(`Babel.transformScriptTags()`)
}
