import React from "react";

import ReactDOM from "react-dom/client";
// const heading = React.createElement("h1",{id:"heading"},"Hello World from React")
const parent=React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child"},[React.createElement("h1",{id:"heading"},"Heading"),React.createElement("h2",{id:"heading"},"Heading2")]),React.createElement("div",{id:"child"},[React.createElement("h1",{id:"heading"},"Heading"),React.createElement("h2",{id:"heading"},"Heading2")])])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)