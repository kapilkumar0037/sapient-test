import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiFilter, LaunchData } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly baseUrl = environment.apiUrl;
  constructor(private readonly httpClient: HttpClient) { }

  getLaunchesData(data: ApiFilter): Observable<LaunchData[]> {
    let params = new HttpParams().set('limit', "100");
    if (data.year) {
      params=params.append('launch_year', data.year);
    }
    if (data.launchSuccess) {
      params=params.append('launch_success', data.launchSuccess);
    }
    if (data.landingSuccess) {
      params=params.append('land_success', data.landingSuccess);
    }

    return this.httpClient.get<LaunchData[]>(this.baseUrl, { params });
  }

}
