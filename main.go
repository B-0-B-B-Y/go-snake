package main

import (
	"github.com/zserge/webview"
)

func main() {
	snakeInterface := webview.New(webview.Settings{
		Title: "React.js In Action",
		Debug: true,
	})
	defer snakeInterface.Exit()

	snakeInterface.Dispatch(func() {
		loadUIFramework(snakeInterface)
	})
	snakeInterface.Run()
}
