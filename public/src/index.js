import {createroot} from "react-dom/client";

const root = createroot(document.getElementById("root"));


//jsx has two rule all tages must be close and there is one parent elemnt
function SayHello()
{
    console.log("hello Rupesh") ;
}
// rule for  componets
//its as simlar as javascript funtion
//componets name should be in pascal case uppercameel case
//and function must be return jsx 
function Nilesh()
{
return <p>hello nilesh</p>
}
//componets provoide reausablity
const Pankaj  = ()=>{
    const random_num = Math.floor(Math.random()*10)
    return <h1>random number {random_num}</h1>
}
root.render(<><h1 >First react app {2+2}</h1>
    <h1>HII guys</h1>
    SayHello()
    <Nilesh/>
    <Nilesh/>
    </>
)// jsx {is jsx exprssion} //
//<></> is called jsx fragment

//calling compontes




