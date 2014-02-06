var React = require("react");
var AppContainer = require("./app.jsx");

React.renderComponent(
    AppContainer({}),
    document.getElementById("main")
);
