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
        width: 50
      }),
      new Column({
        mapTo: 'name',
        name: 'Name',
        width: 50
      })
    ];

    return res;
  }
}

