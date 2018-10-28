import React from 'react';
import {NavExample} from "./navigation";
import {ControlledCarousel } from './carousel';
import {Carousel2} from './carousel2';
import {Header} from "./header";
import {ProductList} from './newlist';


const App1 =()=>{
    return(
       <div>
           <Header/>
           <NavExample />
           <ControlledCarousel />
           <ProductList/>
           <Carousel2/>


       </div>
    );
}
export default App1;

