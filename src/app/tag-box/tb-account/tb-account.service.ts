import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

export class LanguageData {
    language: string;
    percent: number;
}

const languages: LanguageData[] = [{
    language: 'Ship',
    percent: 55.5
}, {
    language: 'Train',
    percent: 4.0
}, {
    language: 'Trucks',
    percent: 14.9
}, {
    language: 'Container',
    percent: 22.3
}];

export class ZoomingData {
    arg: string;
    y1: number;
    y2: number;
    y3: number;
}
// export class Humid {
//     arg: string;
//     y1: string;
//     y2: number;
//     y3: number;
// }

const zoomingData: ZoomingData[] =  [
    { arg: 'Tue 12:00', y1: 0, y2: 10, y3: 32 },
    { arg: 'Tue 12:05', y1: 40, y2: 30, y3: 12 },
    { arg: 'Tue 12:10', y1: 40.3, y2: 20, y3: 30 },
    { arg: 'Tue 12:15', y1: 44.4, y2: 50, y3: 19 },
    { arg: 'Tue 12:20', y1: 40.9, y2: 10, y3: 15 },
    { arg: 'Tue 12:25', y1: 39, y2: 10, y3: 15 },
    { arg: 'Tue 12:30', y1: 38, y2: 50, y3: 13 },
    { arg: 'Tue 12:35', y1: 37.9, y2: 50, y3: 14 },
    { arg: 'Tue 12:40', y1: 37.5, y2: 90, y3: 90 },
    { arg: 'Tue 12:45', y1: 37.8, y2: 175, y3: 120 },
    { arg: 'Tue 12:50', y1: 45, y2: 10, y3: 32 },
    { arg: 'Tue 12:55', y1: 46, y2: 30, y3: 12 },
    { arg: 'Tue 01:00', y1: 46.7, y2: 20, y3: 30 },
    { arg: 'Tue 01:05', y1: 46.2, y2: 10, y3: 32 },
    { arg: 'Tue 01:10', y1: 46, y2: 30, y3: 12 },
    { arg: 'Tue 01:15', y1: 47, y2: 20, y3: 30 },
    { arg: 'Tue 01:20', y1: 47.4, y2: 50, y3: 19 },
    { arg: 'Tue 01:25', y1: 47.5, y2: 10, y3: 15 },
    { arg: 'Tue 01:30', y1: 47.8, y2: 10, y3: 15 },
    { arg: 'Tue 01:35', y1: 50, y2: 100, y3: 13 },
    { arg: 'Tue 01:40', y1: 50.3, y2: 110, y3: 14 },
    { arg: 'Tue 01:45', y1: 50, y2: 90, y3: 90 },
    { arg: 'Tue 01:50', y1: 45, y2: 95, y3: 120 },
    { arg: 'Tue 01:55', y1: 45.6, y2: 10, y3: 32 },
    { arg: 'Tue 02:00', y1: 45.7, y2: 30, y3: 12 },
    { arg: 'Tue 02:05', y1: 45.4, y2: 20, y3: 30 },
    { arg: 'Tue 02:10', y1: 33, y2: 10, y3: 32 },
    { arg: 'Tue 02:15', y1: 33, y2: 30, y3: 12 },
    { arg: 'Tue 02:20', y1: 33.3, y2: 20, y3: 30 },
    { arg: 'Tue 02:25', y1: 45, y2: 50, y3: 19 },
    { arg: 'Tue 02:30', y1: 45.3, y2: 10, y3: 15 },
    { arg: 'Tue 02:35', y1: 45.3, y2: 50, y3: 19 },
    { arg: 'Tue 02:40', y1: 60, y2: 50, y3: 19 },
    { arg: 'Tue 02:45', y1: 60.4, y2: 50, y3: 19 },
    { arg: 'Tue 02:50', y1: 59.3, y2: 50, y3: 19 },
    { arg: 'Tue 02:55', y1: 60.2, y2: 50, y3: 19 },
    { arg: 'Tue 03:00', y1: 62, y2: 50, y3: 19 },
    { arg: 'Tue 03:05', y1: 45, y2: 50, y3: 19 },
    { arg: 'Tue 03:10', y1: 20, y2: 50, y3: 19 },
    { arg: 'Tue 03:15', y1: 20.4, y2: 50, y3: 19 },
    { arg: 'Tue 03:20', y1: 39.8, y2: 50, y3: 19 },
    { arg: 'Tue 03:25', y1: 40, y2: 50, y3: 19 },
    { arg: 'Tue 03:30', y1: 40.2, y2: 50, y3: 19 },
    { arg: 'Tue 03:35', y1: 40.4, y2: 50, y3: 19 },
    { arg: 'Tue 03:40', y1: 70, y2: 50, y3: 19 },
    { arg: 'Tue 03:45', y1: 72.4, y2: 50, y3: 19 },
    { arg: 'Tue 03:50', y1: 78, y2: 50, y3: 19 },
    { arg: 'Tue 03:55', y1: 79, y2: 50, y3: 19 },
    { arg: 'Tue 04:00', y1: 62, y2: 50, y3: 19 },
    { arg: 'Tue 04:05', y1: 45, y2: 50, y3: 19 },
    { arg: 'Tue 04:10', y1: 40, y2: 50, y3: 19 },
    { arg: 'Tue 04:15', y1: 40.4, y2: 50, y3: 19 },
    { arg: 'Tue 04:20', y1: 40.8, y2: 50, y3: 19 },
    { arg: 'Tue 04:25', y1: 50, y2: 50, y3: 19 },
    { arg: 'Tue 04:30', y1: 50.2, y2: 50, y3: 19 },
    { arg: 'Tue 04:35', y1: 38.4, y2: 50, y3: 19 },
    { arg: 'Tue 04:40', y1: 39, y2: 50, y3: 19 },
    { arg: 'Tue 04:45', y1: 46.4, y2: 50, y3: 19 },
    { arg: 'Tue 04:50', y1: 48, y2: 50, y3: 19 },
    { arg: 'Tue 04:55', y1: 49, y2: 50, y3: 19 },
    { arg: 'Tue 05:00', y1: 42, y2: 50, y3: 19 },
    { arg: 'Tue 05:05', y1: 45, y2: 50, y3: 19 },
    { arg: 'Tue 05:10', y1: 40, y2: 50, y3: 19 },
    { arg: 'Tue 05:15', y1: 49.4, y2: 50, y3: 19 },
    { arg: 'Tue 05:20', y1: 49.8, y2: 50, y3: 19 },
    { arg: 'Tue 05:25', y1: 50, y2: 50, y3: 19 },
    { arg: 'Tue 05:30', y1: 50.2, y2: 50, y3: 19 },
    { arg: 'Tue 05:35', y1: 50.4, y2: 50, y3: 19 },
    { arg: 'Tue 05:40', y1: 39, y2: 50, y3: 19 },
    { arg: 'Tue 05:45', y1: 39.4, y2: 50, y3: 19 },
    { arg: 'Tue 05:50', y1: 40, y2: 50, y3: 19 },
    { arg: 'Tue 05:55', y1: 42, y2: 50, y3: 19 },
    { arg: 'Tue 06:00', y1: 43, y2: 50, y3: 19 },
    { arg: 'Tue 06:05', y1: 43.2, y2: 50, y3: 19 },
    { arg: 'Tue 06:10', y1: 43, y2: 50, y3: 19 },
    { arg: 'Tue 06:15', y1: 43.4, y2: 50, y3: 19 },
    { arg: 'Tue 06:20', y1: 43.8, y2: 50, y3: 19 },
    { arg: 'Tue 06:25', y1: 43, y2: 50, y3: 19 },
    { arg: 'Tue 06:30', y1: 43.2, y2: 50, y3: 19 },
    { arg: 'Tue 06:35', y1: 43.4, y2: 50, y3: 19 },
    { arg: 'Tue 06:40', y1: 43, y2: 50, y3: 19 },
    { arg: 'Tue 06:45', y1: 43.4, y2: 50, y3: 19 },
    { arg: 'Tue 06:50', y1: 43, y2: 50, y3: 19 },
    { arg: 'Tue 06:55', y1: 44, y2: 50, y3: 19 },
    { arg: 'Tue 07:00', y1: 42, y2: 50, y3: 19 },
    { arg: 'Tue 07:05', y1: 42.2, y2: 50, y3: 19 },
    { arg: 'Tue 07:10', y1: 42, y2: 50, y3: 19 },
    { arg: 'Tue 07:15', y1: 42.4, y2: 50, y3: 19 },
    { arg: 'Tue 07:20', y1: 39.8, y2: 50, y3: 19 },
    { arg: 'Tue 07:25', y1: 40, y2: 50, y3: 19 },
    { arg: 'Tue 07:30', y1: 40.2, y2: 50, y3: 19 },
    { arg: 'Tue 07:35', y1: 40.4, y2: 50, y3: 19 },
    { arg: 'Tue 07:40', y1: 30, y2: 50, y3: 19 },
    { arg: 'Tue 07:45', y1: 22.4, y2: 50, y3: 19 },
    { arg: 'Tue 07:50', y1: 40, y2: 50, y3: 19 },
    { arg: 'Tue 07:55', y1: 40.2, y2: 50, y3: 19 },
    { arg: 'Tue 08:00', y1: 42, y2: 50, y3: 19 },
    { arg: 'Tue 08:05', y1: 45, y2: 50, y3: 19 },
    { arg: 'Tue 08:10', y1: 40, y2: 50, y3: 19 },
    { arg: 'Tue 08:15', y1: 40.4, y2: 50, y3: 19 },
    { arg: 'Tue 08:20', y1: 39.8, y2: 50, y3: 19 },
    { arg: 'Tue 08:25', y1: 40, y2: 50, y3: 19 },
    { arg: 'Tue 08:30', y1: 40.2, y2: 50, y3: 19 },
    { arg: 'Tue 08:35', y1: 40.4, y2: 50, y3: 19 },
    { arg: 'Tue 08:40', y1: 20, y2: 50, y3: 19 },
    { arg: 'Tue 08:45', y1: 32.4, y2: 50, y3: 19 },
    { arg: 'Tue 08:50', y1: 50, y2: 50, y3: 19 },
    { arg: 'Tue 08:55', y1: 50.2, y2: 50, y3: 19 },
    { arg: 'Tue 09:00', y1: 52, y2: 50, y3: 19 },
    { arg: 'Tue 09:05', y1: 52.2, y2: 50, y3: 19 },
    { arg: 'Tue 09:10', y1: 50, y2: 50, y3: 19 },
    { arg: 'Tue 09:15', y1: 52.4, y2: 50, y3: 19 },
    { arg: 'Tue 09:20', y1: 51.8, y2: 50, y3: 19 },
    { arg: 'Tue 09:25', y1: 50, y2: 50, y3: 19 },
    { arg: 'Tue 09:30', y1: 50.2, y2: 50, y3: 19 },
    { arg: 'Tue 09:35', y1: 50.4, y2: 50, y3: 19 },
    { arg: 'Tue 09:40', y1: 50, y2: 50, y3: 19 },
    { arg: 'Tue 09:45', y1: 52.4, y2: 50, y3: 19 },
    { arg: 'Tue 09:50', y1: 53.2, y2: 50, y3: 19 },
    { arg: 'Tue 09:55', y1: 40, y2: 50, y3: 19 },
    { arg: 'Tue 10:00', y1: 42, y2: 50, y3: 19 },
    { arg: 'Tue 10:05', y1: 45, y2: 50, y3: 19 },
    { arg: 'Tue 10:10', y1: 40, y2: 50, y3: 19 },
    { arg: 'Tue 10:15', y1: 40.4, y2: 50, y3: 19 },
    { arg: 'Tue 10:20', y1: 39.8, y2: 50, y3: 19 },
    { arg: 'Tue 10:25', y1: 40, y2: 50, y3: 19 },
    { arg: 'Tue 10:30', y1: 40.2, y2: 50, y3: 19 },
    { arg: 'Tue 10:35', y1: 40.4, y2: 50, y3: 19 },
    { arg: 'Tue 10:40', y1: 79, y2: 50, y3: 19 },
    { arg: 'Tue 10:45', y1: 23.4, y2: 50, y3: 19 },
    { arg: 'Tue 10:50', y1: 40, y2: 50, y3: 19 },
    { arg: 'Tue 10:55', y1: 40.3, y2: 50, y3: 19 },
];
// const humid: Humid[] =  [
//     { arg: '1/08/2018', y1: '23', y2: 10, y3: 32 },
//     { arg: '2/08/2018', y1: '89', y2: 30, y3: 12 },
//     { arg: '3/08/2018', y1: '27', y2: 20, y3: 30 },
//     { arg: '4/08/2018', y1: '78', y2: 50, y3: 19 },
//     { arg: '5/08/2018', y1: '67', y2: 10, y3: 15 },
//     { arg: '6/08/2018', y1: '89', y2: 10, y3: 15 },
//     { arg: '7/08/2018', y1: '77', y2: 50, y3: 13 },
//     { arg: '8/08/2018', y1: '56', y2: 50, y3: 14 },
//     { arg: '9/08/2018', y1: '54', y2: 90, y3: 90 },
//     { arg: '10/08/2018', y1: '55', y2: 175, y3: 120 },
//     { arg: '11/08/2018', y1: '49', y2: 10, y3: 32 },
//     { arg: '12/08/2018', y1: '78', y2: 30, y3: 12 },
//     { arg: '13/08/2018', y1: '89', y2: 20, y3: 30 },
//     { arg: '14/08/2018', y1: '56', y2: 10, y3: 32 },
//     { arg: '15/08/2018', y1: '45', y2: 30, y3: 12 },
//     { arg: '16/08/2018', y1: '34', y2: 20, y3: 30 },
//     { arg: '17/08/2018', y1: '45', y2: 50, y3: 19 },
//     { arg: '18/08/2018', y1: '34', y2: 10, y3: 15 },
//     { arg: '19/08/2018', y1: '67', y2: 10, y3: 15 },
//     { arg: '20/08/2018', y1: '45', y2: 100, y3: 13 },
//     { arg: '21/08/2018', y1: '34', y2: 110, y3: 14 },
//     { arg: '22/08/2018', y1: '38', y2: 90, y3: 90 },
//     { arg: '23/08/2018', y1: '45', y2: 95, y3: 120 },
//     { arg: '24/08/2018', y1: '76', y2: 10, y3: 32 },
//     { arg: '25/08/2018', y1: '45', y2: 30, y3: 12 },
//     { arg: '26/08/2018', y1: '67', y2: 20, y3: 30 },
//     { arg: '27/08/2018', y1: '56', y2: 10, y3: 32 },
//     { arg: '28/08/2018', y1: '75', y2: 30, y3: 12 },
//     { arg: '29/08/2018', y1: '34', y2: 20, y3: 30 },
//     { arg: '30/08/2018', y1: '23', y2: 50, y3: 19 },
//     { arg: '31/08/2018', y1: '66', y2: 10, y3: 15 }
// ];
export class Marker {
    location: any;
}

export class Route {
    weight: number;
    color: string;
    opacity: number;
    mode: string;
    locations: any[]
}

const markers: Marker[] = [{
    location: '25.105497, 121.597366'
}, {
    location: [22.999727, 120.227028]
}, {
    location: {
        lat: 24.573389,
        lng: 120.815247
    }
}, {
    location: 'Taiwan'
}];

const routes: Route[] = [{
    weight: 6,
    color: 'blue',
    opacity: 0.5,
    mode: '',
    locations: [
        [25.105497, 121.597366],
        [22.999727, 120.227028],
        [24.573389, 120.815247],
        'Taipei City, Taiwan'
    ]

}];
export class Temperature  {
    day: string;
    value: number;
}

const temperaturesData: Temperature[]  = [{
    day: 'Tue 12:00',
    value: 57
}, {
    day: 'Tue 12:05',
    value: 58
}, {
    day: 'Tue 12:10',
    value: 57
}, {
    day: 'Tue 12:15',
    value: 59
}, {
    day: 'Tue 12:20',
    value: 63
}, {
    day: 'Tue 12:25',
    value: 63
}, {
    day: 'Tue 12:30',
    value: 63
}, {
    day: 'Tue 12:35',
    value: 64
}, {
    day: 'Tue 12:40',
    value: 64
}, {
    day: 'Tue 12:45',
    value: 64
}, {
    day: 'Tue 12:50',
    value: 69
}, {
    day: 'Tue 12:55',
    value: 72
}, {
    day: 'Tue 1:00',
    value: 75
}, {
    day: 'Tue 1:05',
    value: 75
}, {
    day: 'Tue 1:10',
    value: 76.2
}, {
    day: 'Tue 1:15',
    value: 73
}, {
    day: 'Tue 1:20',
    value: 73.2
}, {
    day: 'Tue 1:25',
    value: 74.2
}, {
    day: 'Tue 1:30',
    value: 72
}, {
    day: 'Tue 1:35',
    value: 73
}, {
    day: 'Tue 1:40',
    value: 73.3
}, {
    day: 'Tue 1:45',
    value: 73.3
}, {
    day: 'Tue 1:50',
    value: 74.2
}, {
    day: 'Tue 1:55',
    value: 72.1
}, {
    day: 'Tue 2:00',
    value: 70
}, {
    day: 'Tue 2:05',
    value: 73
}, {
    day: 'Tue 2:10',
    value: 72
}, {
    day: 'Tue 2:15',
    value: 76
}, {
    day: 'Tue 2:20',
    value: 75
}, {
    day: 'Tue 2:25',
    value: 75
}, {
    day: 'Tue 2:30',
    value: 74
}, {
    day: 'Tue 2:35',
    value: 74
}, {
    day: 'Tue 2:40',
    value: 74
}, {
    day: 'Tue 2:45',
    value: 74
}, {
    day: 'Tue 2:50',
    value: 74
}, {
    day: 'Tue 2:55',
    value: 74
}, {
    day: 'Tue 3:00',
    value: 74
}, {
    day: 'Tue 3:05',
    value: 75
}, {
    day: 'Tue 3:10',
    value: 74.2
}, {
    day: 'Tue 3:15',
    value: 74
}, {
    day: 'Tue 3:20',
    value: 74
}, {
    day: 'Tue 3:25',
    value: 74
}, {
    day: 'Tue 3:30',
    value: 74
}, {
    day: 'Tue 3:35',
    value: 74
}, {
    day: 'Tue 3:40',
    value: 74
}, {
    day: 'Tue 3:45',
    value: 74
}, {
    day: 'Tue 3:50',
    value: 74
}, {
    day: 'Tue 3:55',
    value: 74
}, {
    day: 'Tue 4:00',
    value: 80
}, {
    day: 'Tue 4:05',
    value: 80.6
}, {
    day: 'Tue 4:10',
    value: 79
}, {
    day: 'Tue 4:15',
    value: 68
}, {
    day: 'Tue 4:20',
    value: 68
}, {
    day: 'Tue 4:25',
    value: 68.6
}, {
    day: 'Tue 4:30',
    value: 68
}, {
    day: 'Tue 4:35',
    value: 67
}, {
    day: 'Tue 4:40',
    value: 68
}, {
    day: 'Tue 4:45',
    value: 66
}, {
    day: 'Tue 4:50',
    value: 68.3
}, {
    day: 'Tue 4:55',
    value: 68
}, {
    day: 'Tue 5:00',
    value: 68
}, {
    day: 'Tue 5:05',
    value: 68
}, {
    day: 'Tue 5:10',
    value: 70
}, {
    day: 'Tue 5:15',
    value: 72
}, {
    day: 'Tue 5:20',
    value: 73
}, {
    day: 'Tue 5:25',
    value: 74
}, {
    day: 'Tue 5:30',
    value: 74
}, {
    day: 'Tue 5:35',
    value: 75
}, {
    day: 'Tue 5:40',
    value: 75
}, {
    day: 'Tue 5:45',
    value: 77
}, {
    day: 'Tue 5:50',
    value: 82
}, {
    day: 'Tue 6:55',
    value: 79
}, {
    day: 'Tue 6:00',
    value: 69
}, {
    day: 'Tue 6:05',
    value: 89
}, {
    day: 'Tue 6:10',
    value: 66
}, {
    day: 'Tue 6:15',
    value: 70
}, {
    day: 'Tue 6:20',
    value: 71
}, {
    day: 'Tue 6:25',
    value: 70
}, {
    day: 'Tue 6:30',
    value: 70
}, {
    day: 'Tue 6:35',
    value: 70
}, {
    day: 'Tue 6:40',
    value: 74
}, {
    day: 'Tue 6:45',
    value: 74
}, {
    day: 'Tue 6:50',
    value: 74
}, {
    day: 'Tue 6:55',
    value: 74
}, {
    day: 'Tue 7:00',
    value: 65
}, {
    day: 'Tue 7:05',
    value: 67
}, {
    day: 'Tue 7:10',
    value: 80.2
}, {
    day: 'Tue 7:15',
    value: 44
}, {
    day: 'Tue 7:20',
    value: 77
}, {
    day: 'Tue 7:25',
    value: 77
}, {
    day: 'Tue 7:30',
    value: 77
}, {
    day: 'Tue 7:35',
    value: 77
}, {
    day: 'Tue 7:40',
    value: 74
}, {
    day: 'Tue 7:45',
    value: 74
}, {
    day: 'Tue 7:50',
    value: 74
}, {
    day: 'Tue 7:55',
    value: 74
}, {
    day: 'Tue 8:00',
    value: 76
}, {
    day: 'Tue 8:05',
    value: 76
}, {
    day: 'Tue 8:10',
    value: 80
}, {
    day: 'Tue 8:15',
    value: 60
}, {
    day: 'Tue 8:20',
    value: 61
}, {
    day: 'Tue 8:25',
    value: 60
}, {
    day: 'Tue 8:30',
    value: 60
}, {
    day: 'Tue 8:35',
    value: 61
}, {
    day: 'Tue 8:40',
    value: 60
}, {
    day: 'Tue 8:45',
    value: 61
}, {
    day: 'Tue 8:50',
    value: 61
}, {
    day: 'Tue 8:55',
    value: 61
}, {
    day: 'Tue 9:00',
    value: 60
}, {
    day: 'Tue 9:05',
    value: 60
}, {
    day: 'Tue 9:10',
    value: 60
}, {
    day: 'Tue 9:15',
    value: 61
}, {
    day: 'Tue 9:20',
    value: 61
}, {
    day: 'Tue 9:25',
    value: 61
}, {
    day: 'Tue 9:30',
    value: 61
}, {
    day: 'Tue 9:35',
    value: 45
}, {
    day: 'Tue 9:40',
    value: 61
}, {
    day: 'Tue 9:45',
    value: 67
}, {
    day: 'Tue 9:50',
    value: 67
}, {
    day: 'Tue 9:55',
    value: 68.2
}, {
    day: 'Tue 10:00',
    value: 67.2
}, {
    day: 'Tue 10:05',
    value: 55
}, {
    day: 'Tue 10:10',
    value: 82
}, {
    day: 'Tue 10:15',
    value: 70
}, {
    day: 'Tue 10:20',
    value: 71
}, {
    day: 'Tue 10:25',
    value: 71
}, {
    day: 'Tue 10:30',
    value: 71.2
}, {
    day: 'Tue 10:35',
    value: 73
}, {
    day: 'Tue 10:40',
    value: 72
}, {
    day: 'Tue 10:45',
    value: 72
}, {
    day: 'Tue 10:50',
    value: 72.2
}, {
    day: 'Tue 10:55',
    value: 72
}];

export class RelativeMass {
    name: string;
    mass: number;
   }

const relativeMasses: RelativeMass[] = [{
     name: 'Tue 12:00',
     mass: 0,
 }, {
    name: 'Tue 12:05',
    mass: 3.2,
 }, {
    name: 'Tue 12:10',
    mass: 3.2,
 }, {
      name: 'Tue 12:15',
     mass: 3,
 }, {
    name: 'Tue 12:20',
    mass: 3.9,
 }, {
    name: 'Tue 12:25',
    mass: 4.1,
 }, {
    name: 'Tue 12:25',
    mass: 4.2,
 }, {
    name: 'Tue 12:30',
    mass: 4,
 }, {
    name: 'Tue 12:35',
    mass: 4.2,
 }, {
    name: 'Tue 12:40',
    mass: 4,
 }, {
    name: 'Tue 12:45',
    mass: 4,
 }, {
    name: 'Tue 12:50',
    mass: 4.2,
 }, {
    name: 'Tue 12:55',
    mass: 4.4,
 }, {
    name: 'Tue 1:00',
    mass: 3.9,
}, {
    name: 'Tue 1:05',
    mass: 4,
 }, {
   name: 'Tue 1:10',
   mass: 4.2,
}, {
     name: 'Tue 1:15',
    mass: 4,
}, {
   name: 'Tue 1:20',
   mass: 4.3,
}, {
   name: 'Tue 1:25',
   mass: 4.1,
}, {
   name: 'Tue 1:30',
   mass: 4,
}, {
   name: 'Tue 1:35',
   mass: 8.6,
}, {
   name: 'Tue 1:40',
   mass: 7.4,
}, {
   name: 'Tue 1:45',
   mass: 5.4,
}, {
   name: 'Tue 1:50',
   mass: 3.2,
}, {
   name: 'Tue 1:55',
   mass: 6.5,
}, {
    name: 'Tue 2:00',
    mass: 6,
}, {
    name: 'Tue 2:05',
    mass: 3.2,
 }, {
   name: 'Tue 2:10',
   mass: 7.8,
}, {
     name: 'Tue 2:15',
    mass: 8,
}, {
   name: 'Tue 2:20',
   mass: 3.5,
}, {
   name: 'Tue 2:25',
   mass: 3.3,
}, {
   name: 'Tue 2:30',
   mass: 3.3,
}, {
   name: 'Tue 2:35',
   mass: 3.3,
}, {
   name: 'Tue 2:40',
   mass: 3.3,
}, {
   name: 'Tue 2:45',
   mass: 3.3,
}, {
   name: 'Tue 2:50',
   mass: 3.3,
}, {
   name: 'Tue 2:55',
   mass: 2.3,
}, {
    name: 'Tue 3:00',
    mass: 6.2,
}, {
    name: 'Tue 3:05',
    mass: 9.2,
 }, {
   name: 'Tue 3:10',
   mass: 3.8,
}, {
     name: 'Tue 3:15',
    mass: 8.3,
}, {
   name: 'Tue 3:20',
   mass: 6.3,
}, {
   name: 'Tue 3:25',
   mass: 6.1,
}, {
   name: 'Tue 3:30',
   mass: 6.4,
}, {
   name: 'Tue 3:35',
   mass: 6.9,
}, {
   name: 'Tue 3:40',
   mass: 6.6,
}, {
   name: 'Tue 3:45',
   mass: 6.3,
}, {
   name: 'Tue 3:50',
   mass: 6.2,
}, {
   name: 'Tue 3:55',
   mass: 5.3,
}, {
    name: 'Tue 4:00',
    mass: 5.2,
}, {
    name: 'Tue 4:05',
    mass: 5.2,
 }, {
   name: 'Tue 4:10',
   mass: 5.8,
}, {
     name: 'Tue 4:15',
    mass: 6.3,
}, {
   name: 'Tue 4:20',
   mass: 6.5,
}, {
   name: 'Tue 4:25',
   mass: 6.1,
}, {
   name: 'Tue 4:30',
   mass: 6.5,
}, {
   name: 'Tue 4:35',
   mass: 6.9,
}, {
   name: 'Tue 4:40',
   mass: 6.6,
}, {
   name: 'Tue 4:45',
   mass: 7,
}, {
   name: 'Tue 4:50',
   mass: 7.2,
}, {
   name: 'Tue 4:55',
   mass: 7.3,
}, {
    name: 'Tue 5:00',
    mass: 7.2,
}, {
    name: 'Tue 5:05',
    mass: 7.2,
 }, {
   name: 'Tue 5:10',
   mass: 7.8,
}, {
     name: 'Tue 5:15',
    mass: 7.3,
}, {
   name: 'Tue 5:20',
   mass: 7.5,
}, {
   name: 'Tue 5:25',
   mass: 7.1,
}, {
   name: 'Tue 5:30',
   mass: 7.3,
}, {
   name: 'Tue 5:35',
   mass: 6.9,
}, {
   name: 'Tue 5:40',
   mass: 5.6,
}, {
   name: 'Tue 5:45',
   mass: 7.4,
}, {
   name: 'Tue 5:50',
   mass: 3.2,
}, {
   name: 'Tue 5:55',
   mass: 4.3,
}, {
    name: 'Tue 6:00',
    mass: 6.2,
}, {
    name: 'Tue 6:05',
    mass: 9.2,
 }, {
   name: 'Tue 6:10',
   mass: 5.2,
}, {
     name: 'Tue 6:15',
    mass: 5.5,
}, {
   name: 'Tue 6:20',
   mass: 5.6,
}, {
   name: 'Tue 6:25',
   mass: 5,
}, {
   name: 'Tue 6:30',
   mass: 5.5,
}, {
   name: 'Tue 6:35',
   mass: 5.4,
}, {
   name: 'Tue 6:40',
   mass: 5.3,
}, {
   name: 'Tue 6:45',
   mass: 5.3,
}, {
   name: 'Tue 6:50',
   mass: 5.3,
}, {
   name: 'Tue 6:55',
   mass: 5.3,
}, {
    name: 'Tue 7:00',
    mass: 5.2,
}, {
    name: 'Tue 7:05',
    mass: 5.2,
 }, {
   name: 'Tue 7:10',
   mass: 7.8,
}, {
     name: 'Tue 7:15',
    mass: 8.3,
}, {
   name: 'Tue 7:20',
   mass: 6.2,
}, {
   name: 'Tue 7:25',
   mass: 6.2,
}, {
   name: 'Tue 7:30',
   mass: 6.2,
}, {
   name: 'Tue 7:35',
   mass: 6.2,
}, {
   name: 'Tue 7:40',
   mass: 6.2,
}, {
   name: 'Tue 7:45',
   mass: 6.2,
}, {
   name: 'Tue 7:50',
   mass: 6.2,
}, {
   name: 'Tue 7:55',
   mass: 6.2,
}, {
    name: 'Tue 8:00',
    mass: 6.2,
}, {
    name: 'Tue 8:05',
    mass: 6.2,
 }, {
   name: 'Tue 8:10',
   mass: 6.2,
}, {
     name: 'Tue 8:15',
    mass: 6.3,
}, {
   name: 'Tue 8:20',
   mass: 2.5,
}, {
   name: 'Tue 8:25',
   mass: 6.1,
}, {
   name: 'Tue 8:30',
   mass: 6,
}, {
   name: 'Tue 8:35',
   mass: 6.9,
}, {
   name: 'Tue 8:40',
   mass: 6.6,
}, {
   name: 'Tue 8:45',
   mass: 6,
}, {
   name: 'Tue 8:50',
   mass: 6.2,
}, {
   name: 'Tue 8:55',
   mass: 6.3,
}, {
    name: 'Tue 9:00',
    mass: 6.2,
}, {
    name: 'Tue 9:05',
    mass: 6.2,
 }, {
   name: 'Tue 9:10',
   mass: 4.8,
}, {
     name: 'Tue 9:15',
    mass: 4.3,
}, {
   name: 'Tue 9:20',
   mass: 4.5,
}, {
   name: 'Tue 9:25',
   mass: 4.1,
}, {
   name: 'Tue 9:30',
   mass: 4.3,
}, {
   name: 'Tue 9:35',
   mass: 4.6,
}, {
   name: 'Tue 9:40',
   mass: 4.6,
}, {
   name: 'Tue 9:45',
   mass: 7.8,
}, {
   name: 'Tue 9:50',
   mass: 3.2,
}, {
   name: 'Tue 9:55',
   mass: 3.3,
}, {
    name: 'Tue 10:00',
    mass: 3.2,
}, {
    name: 'Tue 10:05',
    mass: 3.2,
 }, {
   name: 'Tue 10:10',
   mass: 3.8,
}, {
     name: 'Tue 10:15',
    mass: 8.3,
}, {
   name: 'Tue 10:20',
   mass: 5.5,
}, {
   name: 'Tue 10:25',
   mass: 3.1,
}, {
   name: 'Tue 10:30',
   mass: 5,
}, {
   name: 'Tue 10:35',
   mass: 4.9,
}, {
   name: 'Tue 10:40',
   mass: 3.6,
}, {
   name: 'Tue 10:45',
   mass: 7.2,
}, {
   name: 'Tue 10:50',
   mass: 3.2,
}, {
   name: 'Tue 10:55',
   mass: 4.3,
}];



@Injectable({ providedIn: 'root' })
export class TripDetailsService {
    getRelativeMasses(): RelativeMass[] {
        return relativeMasses;
    }
    getLanguagesData(): LanguageData[] {
        return languages;
    }

    getZoomingData(): ZoomingData[] {
        return zoomingData;
    }
    getMarkers(): Marker[] {
        return markers;
    }
    getRoutes(): Route[] {
        return routes;
    }
    getTemperaturesData(): Temperature[] {
        return temperaturesData;
    }
    // getZoomingDataHumid(): Humid[] {
    //     return zoomingData;
    // }
}


