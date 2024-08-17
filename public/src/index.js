import {createroot} from "react-dom/client";

const root = createroot(document.getElementById("root"));



function Sayhello()
{
    console.log("hello Rupesh") ;
}
root.render(<h1 >First react app {2+2}</h1>)// jsx {is jsx exprssion}