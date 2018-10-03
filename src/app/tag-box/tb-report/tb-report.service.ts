import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

export class Sale {
    Id: number;
    Source: string;
    Destination: string;
    DepartureDate: string;
    CTA: string;
    Progress: string;
    TripSegment: string;
    Details;
}

const sales: Sale[] = [{
    'Id': 10248,
    'Source': 'BLR',
    'Destination': 'BKK',
    'DepartureDate': '2018/07/23 21:30:00',
    'CTA': '2018/07/23 21:30:00',
    'Progress': ' ',
    'TripSegment': '',
    'Details': ''
}, {
    'Id': 10249,
    'Source': 'BLR',
    'Destination': 'BKK',
    'DepartureDate': '2018/07/23 21:30:00',
    'CTA': '2018/07/23 21:30:00',
    'Progress': ' ',
    'TripSegment': '',
    'Details': ''
}, {
    'Id': 10250,
    'Source': 'BLR',
    'Destination': 'BKK',
    'DepartureDate': '2018/07/23 21:30:00',
    'CTA': '2018/07/23 21:30:00',
    'Progress': ' ',
    'TripSegment': '',
    'Details': ''
}, {
    'Id': 10251,
    'Source': 'BLR',
    'Destination': 'BKK',
    'DepartureDate': '2018/07/23 21:30:00',
    'CTA': '2018/07/23 21:30:00',
    'Progress': ' ',
    'TripSegment': '',
    'Details': ''
}, {
    'Id': 10252,
    'Source': 'BLR',
    'Destination': 'BKK',
    'DepartureDate': '2018/07/23 21:30:00',
    'CTA': '2018/07/23 21:30:00',
    'Progress': ' ',
    'TripSegment': '',
    'Details': ''
}, {
    'Id': 10253,
    'Source': 'BLR',
    'Destination': 'BKK',
    'DepartureDate': '2018/07/23 21:30:00',
    'CTA': '2018/07/23 21:30:00',
    'Progress': ' ',
    'TripSegment': '',
    'Details': ''
}, {
    'Id': 10254,
    'Source': 'BLR',
    'Destination': 'BKK',
    'DepartureDate': '2018/07/23 21:30:00',
    'CTA': '2018/07/23 21:30:00',
    'Progress': ' ',
    'TripSegment': '',
    'Details': ''
}, {
    'Id': 10255,
    'Source': 'BLR',
    'Destination': 'BKK',
    'DepartureDate': '2018/07/23 21:30:00',
    'CTA': '2018/07/23 21:30:00',
    'Progress': ' ',
    'TripSegment': '',
    'Details': ''
}, {
    'Id': 10256,
    'Source': 'BLR',
    'Destination': 'BKK',
    'DepartureDate': '2018/07/23 21:30:00',
    'CTA': '2018/07/23 21:30:00',
    'Progress': ' ',
    'TripSegment': '',
    'Details': ''
}, {
    'Id': 10257,
    'Source': 'BLR',
    'Destination': 'BKK',
    'DepartureDate': '2018/07/23 21:30:00',
    'CTA': '2018/07/23 21:30:00',
    'Progress': ' ',
    'TripSegment': '',
    'Details': ''
}, {
    'Id': 10258,
    'Source': 'BLR',
    'Destination': 'BKK',
    'DepartureDate': '2018/07/23 21:30:00',
    'CTA': '2018/07/23 21:30:00',
    'Progress': ' ',
    'TripSegment': '',
    'Details': ''
}, {
    'Id': 10259,
    'Source': 'BLR',
    'Destination': 'BKK',
    'DepartureDate': '2018/07/23 21:30:00',
    'CTA': '2018/07/23 21:30:00',
    'Progress': ' ',
    'TripSegment': '',
    'Details': ''
}, {
    'Id': 10260,
    'Source': 'BLR',
    'Destination': 'BKK',
    'DepartureDate': '2018/07/23 21:30:00',
    'CTA': '2018/07/23 21:30:00',
    'Progress': ' ',
    'TripSegment': '',
    'Details': ''
}, {
    'Id': 10261,
    'Source': 'BLR',
    'Destination': 'BKK',
    'DepartureDate': '2018/07/23 21:30:00',
    'CTA': '2018/07/23 21:30:00',
    'Progress': ' ',
    'TripSegment': '',
    'Details': ''
}, {
    'Id': 10262,
    'Source': 'BLR',
    'Destination': 'BKK',
    'DepartureDate': '2018/07/23 21:30:00',
    'CTA': '2018/07/23 21:30:00',
    'Progress': ' ',
    'TripSegment': '',
    'Details': ''
}, {
    'Id': 10263,
    'Source': 'BLR',
    'Destination': 'BKK',
    'DepartureDate': '2018/07/23 21:30:00',
    'CTA': '2018/07/23 21:30:00',
    'Progress': ' ',
    'TripSegment': '',
    'Details': ''
}, {
    'Id': 10264,
    'Source': 'BLR',
    'Destination': 'BKK',
    'DepartureDate': '2018/07/23 21:30:00',
    'CTA': '2018/07/23 21:30:00',
    'Progress': ' ',
    'TripSegment': '',
    'Details': ''
}, {
    'Id': 10265,
    'Source': 'BLR',
    'Destination': 'BKK',
    'DepartureDate': '2018/07/23 21:30:00',
    'CTA': '2018/07/23 21:30:00',
    'Progress': ' ',
    'TripSegment': '',
    'Details': ''
}, {
    'Id': 10266,
    'Source': 'BLR',
    'Destination': 'BKK',
    'DepartureDate': '2018/07/23 21:30:00',
    'CTA': '2018/07/23 21:30:00',
    'Progress': ' ',
    'TripSegment': '',
    'Details': ''
}, {
    'Id': 10267,
    'Source': 'BLR',
    'Destination': 'BKK',
    'DepartureDate': '2018/07/23 21:30:00',
    'CTA': '2018/07/23 21:30:00',
    'Progress': ' ',
    'TripSegment': '',
    'Details': ''
}, {
    'Id': 10268,
    'Source': 'BLR',
    'Destination': 'BKK',
    'DepartureDate': '2018/07/23 21:30:00',
    'CTA': '2018/07/23 21:30:00',
    'Progress': ' ',
    'TripSegment': '',
    'Details': ''
}, {
    'Id': 10269,
    'Source': 'BLR',
    'Destination': 'BKK',
    'DepartureDate': '2018/07/23 21:30:00',
    'CTA': '2018/07/23 21:30:00',
    'Progress': ' ',
    'TripSegment': '',
    'Details': ''
}, {
    'Id': 10270,
    'Source': 'BLR',
    'Destination': 'BKK',
    'DepartureDate': '2018/07/23 21:30:00',
    'CTA': '2018/07/23 21:30:00',
    'Progress': ' ',
    'TripSegment': '',
    'Details': ''
}, {
    'Id': 10271,
    'Source': 'BLR',
    'Destination': 'BKK',
    'DepartureDate': '2018/07/23 21:30:00',
    'CTA': '2018/07/23 21:30:00',
    'Progress': ' ',
    'TripSegment': '',
    'Details': ''
}, {
    'Id': 10272,
    'Source': 'BLR',
    'Destination': 'BKK',
    'DepartureDate': '2018/07/23 21:30:00',
    'CTA': '2018/07/23 21:30:00',
    'Progress': ' ',
    'TripSegment': '',
    'Details': ''
}, {
    'Id': 10273,
    'Source': 'BLR',
    'Destination': 'BKK',
    'DepartureDate': '2018/07/23 21:30:00',
    'CTA': '2018/07/23 21:30:00',
    'Progress': ' ',
    'TripSegment': '',
    'Details': ''
}, {
    'Id': 10274,
    'Source': 'BLR',
    'Destination': 'BKK',
    'DepartureDate': '2018/07/23 21:30:00',
    'CTA': '2018/07/23 21:30:00',
    'Progress': ' ',
    'TripSegment': '',
    'Details': ''
}, {
    'Id': 10275,
    'Source': 'BLR',
    'Destination': 'BKK',
    'DepartureDate': '2018/07/23 21:30:00',
    'CTA': '2018/07/23 21:30:00',
    'Progress': ' ',
    'TripSegment': '',
    'Details': ''
}, {
    'Id': 10276,
    'Source': 'BLR',
    'Destination': 'BKK',
    'DepartureDate': '2018/07/23 21:30:00',
    'CTA': '2018/07/23 21:30:00',
    'Progress': ' ',
    'TripSegment': '',
    'Details': ''
}, {
    'Id': 10277,
    'Source': 'BLR',
    'Destination': 'BKK',
    'DepartureDate': '2018/07/23 21:30:00',
    'CTA': '2018/07/23 21:30:00',
    'Progress': ' ',
    'TripSegment': '',
    'Details': ''
}, {
    'Id': 10278,
    'Source': 'BLR',
    'Destination': 'BKK',
    'DepartureDate': '2018/07/23 21:30:00',
    'CTA': '2018/07/23 21:30:00',
    'Progress': ' ',
    'TripSegment': '',
    'Details': ''
}, {
    'Id': 10279,
    'Source': 'BLR',
    'Destination': 'BKK',
    'DepartureDate': '2018/07/23 21:30:00',
    'CTA': '2018/07/23 21:30:00',
    'Progress': ' ',
    'TripSegment': '',
    'Details': ''
}, {
    'Id': 10280,
    'Source': 'BLR',
    'Destination': 'BKK',
    'DepartureDate': '2018/07/23 21:30:00',
    'CTA': '2018/07/23 21:30:00',
    'Progress': ' ',
    'TripSegment': '',
    'Details': ''
}, {
    'Id': 10281,
    'Source': 'BLR',
    'Destination': 'BKK',
    'DepartureDate': '2018/07/23 21:30:00',
    'CTA': '2018/07/23 21:30:00',
    'Progress': ' ',
    'TripSegment': '',
    'Details': ''
}, {
    'Id': 10282,
    'Source': 'BLR',
    'Destination': 'BKK',
    'DepartureDate': '2018/07/23 21:30:00',
    'CTA': '2018/07/23 21:30:00',
    'Progress': ' ',
    'TripSegment': '',
    'Details': ''
}, {
    'Id': 10283,
    'Source': 'BLR',
    'Destination': 'BKK',
    'DepartureDate': '2018/07/23 21:30:00',
    'CTA': '2018/07/23 21:30:00',
    'Progress': ' ',
    'TripSegment': '',
    'Details': ''
}, {
    'Id': 10284,
    'Source': 'BLR',
    'Destination': 'BKK',
    'DepartureDate': '2018/07/23 21:30:00',
    'CTA': '2018/07/23 21:30:00',
    'Progress': ' ',
    'TripSegment': '',
    'Details': ''
}, {
    'Id': 10285,
    'Source': 'BLR',
    'Destination': 'BKK',
    'DepartureDate': '2018/07/23 21:30:00',
    'CTA': '2018/07/23 21:30:00',
    'Progress': '',
    'TripSegment': '',
    'Details': ''
}, {
    'Id': 10286,
    'Source': 'BLR',
    'Destination': 'BKK',
    'DepartureDate': '2018/07/23 21:30:00',
    'CTA': '2018/07/23 21:30:00',
    'Progress': '',
    'TripSegment': '',
    'Details': ''
}]

@Injectable({ providedIn: 'root' })
export class ReportService {
    getSales(): Sale[] {
        return sales;
    }
}
