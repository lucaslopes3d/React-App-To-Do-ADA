import { FormEvent, useEffect, useRef, useState } from "react";

export const Refs: React.FC = () => {
  const inputNameRef = useRef<HTMLInputElement>(null);// {current: null}
  const inputEmailRef = useRef<HTMLInputElement>(null);
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  function handleClickOnSubmit (event: FormEvent) {
    event.preventDefault(); //Evita que a página seja recarregada ao submeter um formulário
    console.log(inputNameRef.current?.value);
    console.log(inputEmailRef.current?.value);
    console.log(inputPasswordRef.current?.value);
  };

  return(
    <form style={{paddingLeft: '2rem'}} onSubmit={(event) => handleClickOnSubmit(event)}>
      <h1>useRef</h1>

      <br />
      <input type="text" placeholder="Nome completo" ref={inputNameRef} />
      <input type="email" placeholder="E-mail" ref={inputEmailRef} />
      <input type="password" placeholder="Senha" ref={inputPasswordRef} />
      
      <br />
      <button type="submit" onClick={handleClickOnSubmit}>Submeter</button>
    </form>
  )
}