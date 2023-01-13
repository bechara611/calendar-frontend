import { addHours } from "date-fns";
import { useState } from "react";
const [hola, setHola] = useState('second')

export const Events = [{
    title: 'Cumple de dany',
    notes: 'Torta para Dany',
    start: new Date(),
    end: addHours(new Date(), 1),
    bgColor: '#fafafa',
    user: {
      id: '123',
      name: 'Dany Bechara'
    }
  }]