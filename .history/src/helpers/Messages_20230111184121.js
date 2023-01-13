export const getMessages =()=>{
    return {
        previous: '<',
        next: '>',

        noEventsInRange: 'No hay eventos en este rango',
        showMore: total => `+ Ver más (${total})`
    };
}


export const getMessages2 =()=>{
    return {
        allDay: 'Todo el día',
        previous: '<',
        next: '>',
        today: 'Hoy',
        month: 'Mes',
        week: 'Semana',
        day: 'Día',
        agenda: 'Agenda',
        date: 'Fecha',
        time: 'Hora',
        event: 'Evento',
        noEventsInRange: 'No hay eventos en este rango',
        showMore: total => `+ Ver más (${total})`
    };
}



