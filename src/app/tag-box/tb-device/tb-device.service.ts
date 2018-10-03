import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

export class Node {
    ID: string;
    LastSeen: string;
    BatteryLevel: string;
}

const node: Node[] = [{
    'ID': 'CONT4567BA',
    'LastSeen': '28/07/2018',
    'BatteryLevel': '85 %'
}, {
    'ID': 'CONT4567BA',
    'LastSeen': '28/07/2018',
    'BatteryLevel': '85 %'
}, {
    'ID': 'CONT4567BA',
    'LastSeen': '28/07/2018',
    'BatteryLevel': '85 %'
}, {
    'ID': 'CONT4567BA',
    'LastSeen': '28/07/2018',
    'BatteryLevel': '85 %'
}, {
    'ID': 'CONT4567BA',
    'LastSeen': '28/07/2018',
    'BatteryLevel': '85 %'
}, {
    'ID': 'CONT4567BA',
    'LastSeen': '28/07/2018',
    'BatteryLevel': '85 %'
}, {
    'ID': 'CONT4567BA',
    'LastSeen': '28/07/2018',
    'BatteryLevel': '85 %'
}, {
    'ID': 'CONT4567BA',
    'LastSeen': '28/07/2018',
    'BatteryLevel': '85 %'
}, {
    'ID': 'CONT4567BA',
    'LastSeen': '28/07/2018',
    'BatteryLevel': '85 %'
},
{
    'ID': 'CONT4567BA',
    'LastSeen': '28/07/2018',
    'BatteryLevel': '85 %'
},
{
    'ID': 'CONT4567BA',
    'LastSeen': '28/07/2018',
    'BatteryLevel': '85 %'
},
{
    'ID': 'CONT4567BA',
    'LastSeen': '28/07/2018',
    'BatteryLevel': '85 %'
},
{
    'ID': 'CONT4567BA',
    'LastSeen': '28/07/2018',
    'BatteryLevel': '85 %'
},
{
    'ID': 'CONT4567BA',
    'LastSeen': '28/07/2018',
    'BatteryLevel': '85 %'
},
{
    'ID': 'CONT4567BA',
    'LastSeen': '28/07/2018',
    'BatteryLevel': '85 %'
},
{
    'ID': 'CONT4567BA',
    'LastSeen': '28/07/2018',
    'BatteryLevel': '85 %'
},
{
    'ID': 'CONT4567BA',
    'LastSeen': '28/07/2018',
    'BatteryLevel': '85 %'
},
{
    'ID': 'CONT4567BA',
    'LastSeen': '28/07/2018',
    'BatteryLevel': '85 %'
},
{
    'ID': 'CONT4567BA',
    'LastSeen': '28/07/2018',
    'BatteryLevel': '85 %'
}];

export class Gateway {
    ID: string;
    LastSeen: string;
    BatteryLevel: string;
    Charging: string;
}

const gateway: Gateway[] = [{
    'ID': 'CONT4567BA',
    'LastSeen': '28/07/2018',
    'BatteryLevel': '85 %',
    'Charging': 'no '
}, {
    'ID': 'CONT4567BA',
    'LastSeen': '28/07/2018',
    'BatteryLevel': '85 %',
    'Charging': 'yes'
}, {
    'ID': 'CONT4567BA',
    'LastSeen': '28/07/2018',
    'BatteryLevel': '85 %',
    'Charging': 'no '
}, {
    'ID': 'CONT4567BA',
    'LastSeen': '28/07/2018',
    'BatteryLevel': '85 %',
    'Charging': 'no '
}, {
    'ID': 'CONT4567BA',
    'LastSeen': '28/07/2018',
    'BatteryLevel': '85 %',
    'Charging': 'yes'
}, {
    'ID': 'CONT4567BA',
    'LastSeen': '28/07/2018',
    'BatteryLevel': '85 %',
    'Charging': 'yes'
}, {
    'ID': 'CONT4567BA',
    'LastSeen': '28/07/2018',
    'BatteryLevel': '85 %',
    'Charging': 'no '
}, {
    'ID': 'CONT4567BA',
    'LastSeen': '28/07/2018',
    'BatteryLevel': '85 %',
    'Charging': 'no '
}, {
    'ID': 'CONT4567BA',
    'LastSeen': '28/07/2018',
    'BatteryLevel': '85 %',
    'Charging': 'yes'
},
{
    'ID': 'CONT4567BA',
    'LastSeen': '28/07/2018',
    'BatteryLevel': '85 %',
    'Charging': 'no '
},
{
    'ID': 'CONT4567BA',
    'LastSeen': '28/07/2018',
    'BatteryLevel': '85 %',
    'Charging': 'no '
},
{
    'ID': 'CONT4567BA',
    'LastSeen': '28/07/2018',
    'BatteryLevel': '85 %',
    'Charging': 'no '
},
{
    'ID': 'CONT4567BA',
    'LastSeen': '28/07/2018',
    'BatteryLevel': '85 %',
    'Charging': 'no '
},
{
    'ID': 'CONT4567BA',
    'LastSeen': '28/07/2018',
    'BatteryLevel': '85 %',
    'Charging': 'no '
},
{
    'ID': 'CONT4567BA',
    'LastSeen': '28/07/2018',
    'BatteryLevel': '85 %',
    'Charging': 'no '
},
{
    'ID': 'CONT4567BA',
    'LastSeen': '28/07/2018',
    'BatteryLevel': '85 %',
    'Charging': 'yes'
},
{
    'ID': 'CONT4567BA',
    'LastSeen': '28/07/2018',
    'BatteryLevel': '85 %',
    'Charging': 'no '
},
{
    'ID': 'CONT4567BA',
    'LastSeen': '28/07/2018',
    'BatteryLevel': '85 %',
    'Charging': 'yes'
},
{
    'ID': 'CONT4567BA',
    'LastSeen': '28/07/2018',
    'BatteryLevel': '85 %',
    'Charging': 'yes'
}];


@Injectable({ providedIn: 'root' })
export class HardwareService {
    getNode() {
        return node;
    }
    getGateway() {
        return gateway;
    }
}


