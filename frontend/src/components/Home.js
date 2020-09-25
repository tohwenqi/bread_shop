import React from 'react';
import Header from "./components/layout/Header";
import Selection from "./components/selection/Selection";

export default function Home() {
    return (
        <div>
          <Header /> 
          <Selection data={data} setCart={setCart}/>
        </div>
    )
}
