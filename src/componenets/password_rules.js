import React from "react";
import Password from "./Password";

export default function Rules(){
    const [Password,setPassword]=React.useState(" ");
    const [Wants,setWants]=React.useState({
      lenght:0,
      capital:false,
      number: false,
      special:false
    })
    //array changer
    function Manipulator(){
      var items = [];
      const capital =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
      'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
      'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
      const number =[1,2,3,4,5,6,7,8,9,0];
      const special = [ '!', '@', '#', 
      '$', '%', '^', '&', '*', '(', ')', '_', '+'];
      
      if(Wants.capital){
        items=items.concat(capital);


      }
      if(Wants.number){
        items=items.concat(number);


      }
      if(Wants.special){
        items=items.concat(special);


      }
      
      return items;


    }
    // main generator function 
    function Generator(box){
      let passwordGenerated="";
      
       for(let i=0;i<Wants.lenght;i++){
        let indexNumber = Math.floor(Math.random() * box.length);
          passwordGenerated+=box[indexNumber];
 
 
       }
      
       setPassword(passwordGenerated);
    }

    function handleClick(event){
     
      let {name,checked}= event.target;
      if(name==="capital"){
        setWants({
          ...Wants,
          capital:checked
          
        }
      );
     }
      else if(name==="number"){
        setWants({
          ...Wants,
          number:checked
        }
      );
   }
      else if(name==="special"){
        setWants({
          ...Wants,
          special:checked
        }
      );
    }
      
    };
    function handleButton(){
      var items=Manipulator();
      
      Generator(items);
    }

    function handleOnChange(event){
     setWants(
      {
        ...Wants,
        lenght:event.target.value

      }
     )
    }
      
       
    
   
    return (
        <div className="Main">
          <p className="Password">{Password}</p>
        
        <div className="Rules flex">
           <input onChange={handleOnChange} className ="Rules_NumberBox" type="number"/>
           <div className="Rules_CheckBox ">
           <div className="flex checkbox">
            <input onClick={handleClick} type ="checkbox"name="capital"></input>
           <label for="capital"> Character</label>
           </div>
           <div className="flex checkbox">
            <input onClick={handleClick} type ="checkbox"name="number"></input>
           <label for="capital"> Number</label>
           </div>
           <div className="flex checkbox">
            <input onClick={handleClick}type ="checkbox"name="special"></input>
           <label for="capital"> Special Character</label>
           </div>
            <button className="button" onClick={handleButton}>Generate New Password</button>
           </div>

        </div>
        </div>
    )
}