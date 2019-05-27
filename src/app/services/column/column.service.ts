import { Injectable } from '@angular/core';
import { Column } from '../../models/column/Column';

@Injectable({
  providedIn: 'root'
})
export class ColumnService {

  constructor() { }

  getColumns(): Column[] {
    const res: Column[] = [
      new Column({
        mapTo: 'source',
        name: 'Source',
        width: 100/4
      }),
      new Column({
        mapTo: 'name',
        name: 'Name',
        width: 100/4
      }),
      new Column({
        mapTo: 'cpl',
        name: 'CPL',
        width: 100/4
      }),
      new Column({
        mapTo: 'roi',
        name: 'ROI',
        width: 100/4
      }),
    ];

    return res;
  }
}

