import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UtilityService {

  constructor() { }

  parseDynamoResponse(inputArray: any[]): any[] {
    const outputArray: any[] = [];

    inputArray.forEach(element => {
      const parsedElement = element.s;
      outputArray.push(parsedElement);
    });

    return outputArray;
  }

  parseStringtoArray(inputString: string): string[] {
    inputString = inputString.replace(/[\[\]']+/g, '').trim();
    let stringArray = inputString.split(',');
    if ( stringArray.length === 0 ) {
      stringArray = [];
    }
    return stringArray;
  }

  trimSpaceChars(inputArray: string[]): string[] {
    const outputArray: string[] = [];

    inputArray.forEach(element => {
      const parsedElement = element.trim();
      outputArray.push(parsedElement);
    });

    return outputArray;
  }

}
