import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiFilter, LaunchData } from './models/models';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sapient-test';
  launchData$: Observable<LaunchData[]> = new Observable<LaunchData[]>();

  constructor(readonly apiService: DataService) {
  }

  ngOnInit() {
    const data: ApiFilter = {};
    this.getLaunchData(data);
  }

  onSelectFilter(filterData: ApiFilter) {
    this.getLaunchData(filterData);
  }

  getLaunchData(filter: ApiFilter) {
    this.launchData$ = this.apiService.getLaunchesData(filter);
  }
}
