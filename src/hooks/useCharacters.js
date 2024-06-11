import { useEffect, useState } from "react";

export const useCharacters = () => {
  const [person, setPerson] = useState({}); //Creo el estado 
  const [counter, setCounter] = useState(1); // estado que almacena el número del personaje actual.


  // Consumir la API con fetch
  // función asíncrona que realiza una solicitud a la API de Rick and Morty usando el número de personaje almacenado en counter.
  const getPerson = async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${counter}`
    );
    const data = await response.json();
    setPerson(data);
  };

  // Boton para el personaje anterior
  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  // Boton para el personaje siguiente
  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    getPerson();
  }, [counter]);

  return {
    person,
    handleDecrement,
    handleIncrement,
    counter
  };
};
