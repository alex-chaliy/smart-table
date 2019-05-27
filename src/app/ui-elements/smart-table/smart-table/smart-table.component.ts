import { Component, OnInit, Input } from '@angular/core';
import { GroupedData } from 'src/app/models/groupedData/GroupedData';
import { Column } from 'src/app/models/column/Column';

import * as _ from 'lodash';

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

  switchExpanded(elID) {
    document.getElementById(elID).classList.toggle('row-group--expanded');
  }

}
