import {uuid} from 'uuidv4'

class Appointment {
    id: string;

    provider: string;

    date: Date;

    // criar variaveis mas o Omit vai servir para apenas o ID nao ser criado
    constructor({provider, date,}: Omit<Appointment, 'id'>) {
        this.id = uuid();
        this.provider = provider;
        this.date = date
    }
}

export default Appointment;
