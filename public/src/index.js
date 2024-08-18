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
//props
//props is usually used to take property of 
const Props = (props) =>{ // take input
    console.log(props) 
    return(<><h1>learning props </h1><hr/></>)
 //we can use componet to reuse of code less code
}//componets crearted
const Cholate = (Toffy)=>
{
    console.log(Toffy)
    return (<h1>kikat</h1>)

}
root.render(<><h1 >First react app {2+2}</h1>
    <h1>HII guys</h1>
    SayHello()
    <Nilesh/>
    <Nilesh/>
    <Cholate name =" kikat " price= "10"/> 
    <Cholate name =" fivestar " price= "10"/>
    <Cholate name =" much " price= "10"/>
     <Cholate name =" fivestar " price= "10"/>
   < Props name="kissme" city="Pune" /> 

    </>
)// jsx {is jsx exprssion} //
//<></> is called jsx fragment

//calling compontes




