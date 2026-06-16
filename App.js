import React from "react";

import ReactDOM from "react-dom/client";
const num = 1000;
const heading =(
    <div>
    {num} <h1 className="heading">Harish Sharma</h1>
    </div>)
const Bye = ()=> (<div>
    {heading}
    <h2>Bye Everyone</h2>
</div>
)
const Heading = ()=> (
    <div>
        {Bye()}
        <Bye/>
        <Bye></Bye>
        <h1>Hello Everyone</h1>
    </div>



)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Heading/>);