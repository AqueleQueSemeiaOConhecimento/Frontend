'use client'

import { useState, useEffect } from "react";

export default function Botao() {
   const handleClick = (event : any) => {
      event.preventDefault();
      const elementos = document.querySelectorAll('.element');
      elementos.forEach((element) => {
         element.classList.remove('hidden');
      });
   };;

   return (
    <>
    <button className="button" onClick={handleClick}>CLAIM YOUR FREE TRIAL</button> 
    </>
   )
}
