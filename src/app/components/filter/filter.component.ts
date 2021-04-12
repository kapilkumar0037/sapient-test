import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiFilter } from 'src/app/models/models';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  yearData = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
  constructor() { }
  filter: ApiFilter = {};
  @Output() onSelectFilter = new EventEmitter<ApiFilter>();
  ngOnInit(): void {
  }
  selectYear(year: string) {
    this.filter.year = year;
    this.emitfilter();
  }
  selectSuccessLaunch(launch: string) {
    this.filter.launchSuccess = launch;
    this.emitfilter();
  }
  selectSuccessLand(land: string) {
    this.filter.landingSuccess = land;
    this.emitfilter();
  }
  reset(){
    this.filter={};
    this.emitfilter();
  }
  emitfilter() {
    this.onSelectFilter.emit(this.filter);
  }
}
