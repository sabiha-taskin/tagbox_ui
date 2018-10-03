import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';


export class Employee {
    ID: number;
    Source: string;
    Destination: string;
    DepartureDate: string;
    ArrivalDate: string;
    Type: string;
    ProductFamily: string;
    Gateway: string;
    ContainerID: string;
    CrateID: string;
    SensorID: string;

}
const employee: Employee = {
    ID: 1,
    Source: 'Corning',
    Destination: 'Beijing',
    DepartureDate: '1964/03/16',
    ArrivalDate: '1995/01/15',
    Type: ' ',
    ProductFamily: '',
    Gateway: '',
    ContainerID: '',
    CrateID: '',
    SensorID: '',
};

const positions: string[] = [
    'HR Manager',
    'IT Manager',
    'CEO',
    'Controller',
    'Sales Manager',
    'Support Manager',
    'Shipping Manager'
];
export class Customer {
    ID: string;
    Source: string;
    Destination: string;
    Departure: string;
    ETA: string;
    Status: string;
    Risk: string;
}

const customers: Customer[] = [{
    'ID': 'CON50',
    'Source': 'BLR',
    'Destination': 'BKK',
    'Departure': '21-03-2018',
    'ETA': '24-04-2018',
    'Status': 'First mile',
    'Risk': 'On Time',
}, {
    'ID': 'CON51',
    'Source': 'BLR',
    'Destination': 'BKK',
    'Departure': '21-03-2018',
    'ETA': '24-04-2018',
    'Status': 'Manufacturing',
    'Risk': 'Delayed',
}, {
    'ID': 'CON52',
    'Source': 'BLR',
    'Destination': 'BKK',
    'Departure': '21-03-2018',
    'ETA': '24-04-2018',
    'Status': 'Warehouse',
    'Risk': 'Progress',
}, {
    'ID': 'CON53',
    'Source': 'BLR',
    'Destination': 'BKK',
    'Departure': '21-03-2018',
    'ETA': '24-04-2018',
    'Status': 'First mile',
    'Risk': 'On Time',
}, {
    'ID': 'CON54',
    'Source': 'BLR',
    'Destination': 'BKK',
    'Departure': '21-03-2018',
    'ETA': '24-04-2018',
    'Status': 'Manufacturing',
    'Risk': 'Delayed',
}, {
    'ID': 'CON55',
    'Source': 'BLR',
    'Destination': 'BKK',
    'Departure': '21-03-2018',
    'ETA': '24-04-2018',
    'Status': 'First mile',
    'Risk': 'On Time',
}, {
    'ID': 'CON56',
    'Source': 'BLR',
    'Destination': 'BKK',
    'Departure': '21-03-2018',
    'ETA': '24-04-2018',
    'Status': 'Warehouse',
    'Risk': 'On Time',
}, {
    'ID': 'CON57',
    'Source': 'BLR',
    'Destination': 'BKK',
    'Departure': '21-03-2018',
    'ETA': '24-04-2018',
    'Status': 'First mile',
    'Risk': 'Progress',
}, {
    'ID': 'CON58',
    'Source': 'BLR',
    'Destination': 'BKK',
    'Departure': '21-03-2018',
    'ETA': '24-04-2018',
    'Status': 'First mile',
    'Risk': 'On Time',
}];

export class CompleteTrip {
    ID: string;
    Source: string;
    Destination: string;
    Departure: string;
    Arrival: string;
    HardwareReturn: string;
}
const complete: CompleteTrip[] = [{
    'ID': 'CONT4567BA',
    'Source': 'BLR',
    'Destination': 'BKK',
    'Departure': '21-03-2018',
    'Arrival': '24-04-2018',
    'HardwareReturn': 'Yes',
}, {
    'ID': 'CONT4567BA',
    'Source': 'BLR',
    'Destination': 'BKK',
    'Departure': '21-03-2018',
    'Arrival': '24-04-2018',
    'HardwareReturn': 'No',
}, {
    'ID': 'CONT4567BA',
    'Source': 'BLR',
    'Destination': 'BKK',
    'Departure': '21-03-2018',
    'Arrival': '24-04-2018',
    'HardwareReturn': 'No',
}, {
    'ID': 'CONT4567BA',
    'Source': 'BLR',
    'Destination': 'BKK',
    'Departure': '21-03-2018',
    'Arrival': '24-04-2018',
    'HardwareReturn': 'Yes',
}, {
    'ID': 'CONT4567BA',
    'Source': 'BLR',
    'Destination': 'BKK',
    'Departure': '21-03-2018',
    'Arrival': '24-04-2018',
    'HardwareReturn': 'Yes',
}, {
    'ID': 'CONT4567BA',
    'Source': 'BLR',
    'Destination': 'BKK',
    'Departure': '21-03-2018',
    'Arrival': '24-04-2018',
    'HardwareReturn': 'No',
}, {
    'ID': 'CONT4567BA',
    'Source': 'BLR',
    'Destination': 'BKK',
    'Departure': '21-03-2018',
    'Arrival': '24-04-2018',
    'HardwareReturn': 'Yes',
}, {
    'ID': 'CONT4567BA',
    'Source': 'BLR',
    'Destination': 'BKK',
    'Departure': '21-03-2018',
    'Arrival': '24-04-2018',
    'HardwareReturn': 'No',
}, {
    'ID': 'CONT4567BA',
    'Source': 'BLR',
    'Destination': 'BKK',
    'Departure': '21-03-2018',
    'Arrival': '24-04-2018',
    'HardwareReturn': 'No',
}];



@Injectable({ providedIn: 'root' })
export class TripService {

    getEmployee(): Employee {
        return employee;
    }
    getPositions(): string[] {
        return positions
    }
    getCustomers() {
        return customers;
    }
    getComplete() {
        return complete;
    }
}


