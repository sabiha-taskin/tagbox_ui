import { environment } from '../../../environments/environment';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';


import { NeoUser } from './neo-user';

@Injectable({ providedIn: 'root' })
export class UserListService {

  private readApi = environment.readApi;
  private createApi = environment.createApi;
  private updateApi = environment.updateApi;
  private deleteApi = environment.deleteApi;
  private dal_api_key = environment.dal_api_key;
  private headers = new Headers({'Content-Type': 'application/json', 'x-api-key': this.dal_api_key});
  private tableName = environment.NEO_USER_LIST;
  private primaryKey = 'USER_ID';

  constructor(private http: Http) { }

  getNeoUsers(filters: any): Promise<NeoUser[]> {
    return this.http
      .post(this.readApi, JSON.stringify(filters), { headers: this.headers })
              .toPromise()
              .then(response => response.json().records as NeoUser[])
              .catch(this.handleError);
  }

  getAllNeoUsers(): Promise<NeoUser[]> {
    const filters = {
            'tableName': this.tableName,
        };

    return this.http
      .post(this.readApi, JSON.stringify(filters), { headers: this.headers })
              .toPromise()
              .then(response => response.json().records as NeoUser[])
              .catch(this.handleError);
  }

  filterNeoUsers(filters): Promise<NeoUser[]> {
    const filterRequest = {
      'tableName': this.tableName
    };

    filterRequest['columnFilters'] = filters;

    return this.http
      .post(this.readApi, JSON.stringify(filterRequest), { headers: this.headers })
              .toPromise()
              .then(response => response.json().records as NeoUser[])
              .catch(this.handleError);
  }

  createNewNeoUser(records): Promise<any> {
    const createRequest = { 'tableName': this.tableName,
        'primaryKeyColumn': this.primaryKey,
      };

    createRequest['records'] = records;

    return this.http
      .post(this.createApi, JSON.stringify(createRequest), { headers: this.headers })
              .toPromise()
              .then(response => response.json() as any)
              .catch(this.handleError);
  }

  updateNeoUser(records): Promise<any> {
    const createRequest = { 'tableName': this.tableName,
        'primaryKeyColumn': this.primaryKey,
      };

    createRequest['records'] = records;

    return this.http
      .post(this.updateApi, JSON.stringify(createRequest), { headers: this.headers })
              .toPromise()
              .then(response => response.json() as any)
              .catch(this.handleError);
  }

  deleteNeoUser(records): Promise<any> {
    const createRequest = { 'tableName': this.tableName,
        'primaryKeyColumn': this.primaryKey,
      };

    createRequest['records'] = records;

    return this.http
      .post(this.deleteApi, JSON.stringify(createRequest), { headers: this.headers })
              .toPromise()
              .then(response => response.json() as any)
              .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
