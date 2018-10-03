import { environment } from './../../environments/environment';
import { Injectable, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable({ providedIn: 'root' })
export class ApiService {

  private readApi = environment.spend_less_data;
  private spendYTDApi = environment.spend_data;
  private spendVisibiltyApi = environment.spend_vis_data;
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  getSpendDataList(): Promise<any> {
    return this.http
      .get(this.readApi, { headers: this.headers })
      .toPromise()
      .then(response => response.json() as any)
      .catch(this.handleError);
  }

  getSpendData(jwtToken) {
    return this.http
      .post(this.spendYTDApi, { headers: this.headers })
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleError);
  }
  getSpendVisibiltyData(jwtToken) {
    return this.http
      .get(this.spendVisibiltyApi, { headers: this.headers })
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleError);
  }

  getAllTables(jwtToken, filterName): Promise<any> {
    // console.log(environment.supplier_list);
    // console.log('jwt token');
    // console.log(jwtToken);
    // this.headers.set('Authorization', jwtToken);
    const filters = {
            'filter': filterName,
        };
    // other filters
    // const filters = {
    //     'filter': 'columns',
    // };
    // const filters = {
    //     'filter': 'spend',
    // };

    return this.http
      .post(this.readApi, { headers: this.headers })
              .toPromise()
              .then(response => response.json() as any)
              .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
