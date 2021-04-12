import { Component, Input, OnInit } from '@angular/core';
import { LaunchData } from 'src/app/models/models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() launchData!: LaunchData;
  constructor() { }

  ngOnInit(): void {
  }

}
