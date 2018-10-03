import { environment } from '../../../environments/environment';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';


import { RoleAccess } from './role-access';

@Injectable({ providedIn: 'root' })
export class RoleAccessService {

  private readApi = environment.readApi;
  private createApi = environment.createApi;
  private updateApi = environment.updateApi;
  private deleteApi = environment.deleteApi;
  private dal_api_key = environment.dal_api_key;
  private headers = new Headers({'Content-Type': 'application/json', 'x-api-key': this.dal_api_key});
  private tableName = environment.NEO_ROLE_ACCESS;
  private primaryKey = 'USER_ROLE';

  constructor(private http: Http) { }

  getRoleAccesss(filters: any): Promise<RoleAccess[]> {
    return this.http
      .post(this.readApi, JSON.stringify(filters), { headers: this.headers })
              .toPromise()
              .then(response => response.json().records as RoleAccess[])
              .catch(this.handleError);
  }

  getAllRoleAccesss(): Promise<RoleAccess[]> {
    const filters = {
            'tableName': this.tableName,
        };

    return this.http
      .post(this.readApi, JSON.stringify(filters), { headers: this.headers })
              .toPromise()
              .then(response => response.json().records as RoleAccess[])
              .catch(this.handleError);
  }

  filterRoleAccesss(filters): Promise<RoleAccess[]> {
    const filterRequest = {
      'tableName': this.tableName
    };

    filterRequest['columnFilters'] = filters;

    return this.http
      .post(this.readApi, JSON.stringify(filterRequest), { headers: this.headers })
              .toPromise()
              .then(response => response.json().records as RoleAccess[])
              .catch(this.handleError);
  }

  createNewRoleAccess(records): Promise<any> {
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

  updateRoleAccess(records): Promise<any> {
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

  deleteRoleAccess(records): Promise<any> {
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
