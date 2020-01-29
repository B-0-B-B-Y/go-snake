package main

import "github.com/zserge/webview"

func main() {
	snakeInterface := webview.New(webview.Settings { URL: "" })

	snakeInterface.Dispatch(func() {
		snakeInterface.Eval()
	})
}
