import React from "react";
import Navbar from "./component/Navbar"
import Card from "./component/Card";
import data from "./data";

export default function App(){
  const dataItems = data.map(item =>{
    return  <Card 
    key={item.id}
    item={item}
    />
  })

  return (
    <div className="container">
      <Navbar />
      <section className="card-list">
      {dataItems}
      </section>
     
    </div>
  )
}