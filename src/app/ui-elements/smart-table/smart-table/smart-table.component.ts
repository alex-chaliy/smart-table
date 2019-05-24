import { Component, OnInit, Input } from '@angular/core';
import { GroupedData } from 'src/app/models/groupedData/GroupedData';
import { Column } from 'src/app/models/column/Column';

@Component({
  selector: 'app-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss']
})
export class SmartTableComponent implements OnInit {

  @Input('groupedData') _groupedData: GroupedData;
  @Input('columns') _columns: Column[];

  constructor() {}

  ngOnInit() {}

}
