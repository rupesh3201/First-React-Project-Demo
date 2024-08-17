import {createroot} from "react-dom/client";

const root = createroot(document.getElementById("root"));


//jsx has two rrule all tages must be close and there is one parent elemnt
function Sayhello()
{
    console.log("hello Rupesh") ;
}
root.render(<h1 >First react app {2+2}</h1>)// jsx {is jsx exprssion} 