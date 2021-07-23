import React , { useState } from "react";

const [todos, setTodos] = useState([
    {
     food: "Pizza",
     cals : "500"
     },
     {
       food: "Coke",
       cals : "50"
     },
     {
       food: "Apple",
       cals: "100"
     },
     {
       food: "Milk",
       cals: "25"
     },
     {
       food: "Egg",
       cals: "250"
     }
   ]);
   const todoDelete = (index) => {
     const todolist = [...todos];
     todolist.splice(index,1);
     setTodos(todolist);
   };
   return (
       <div className = "Todo">
    {
    todos.length === 0 ? (
    (<h2 className = "todoss"> No Todos Left</h2> ) :
     ( todos.map((item, index) => (
      <Card 
      food = {item.food}
      author = {item.author}
      key = {index}
      clickdeletebutton = {() => todoDelete(index)}
      />
    ))
     )  
     }
    </div>
    );
export default Card;