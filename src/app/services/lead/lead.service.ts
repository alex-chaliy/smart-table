import { Injectable } from '@angular/core';
import { leads } from 'src/test/data/leads';
import * as _ from 'lodash';
import { Observable, of } from 'rxjs';
import { ILead } from 'src/app/models/lead/ILead';
import { ArrayService } from '../array/array.service';
import { GroupedData } from 'src/app/models/groupedData/GroupedData';
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class LeadService {
  constructor(
    private arrayService: ArrayService
  ) {}

  getLeads(): Observable<ILead[]> {
     return of(leads);
  }

  /**
   * @info level: 'source' | 'time' | 'name'
   *              (levels 1 -> 2 -> 3)
   * @info name: used when level = 'name'
   *  to filter items instead of grouping
   *  because in this case we have only onr level 
   */
  getGroupedData(level: string, name?: string): Observable<GroupedData> {
    let res: GroupedData;
    switch (level) {
      case 'source':
        res = this.arrayService.groupObjectsBy('source', leads, 'groupName', 'items')
          .map(group => {
            group['items'] = this.arrayService.groupObjectsBy('time', group['items'], 'groupName', 'items');
            return group;
          });
        break;

      case 'time':
        res = this.arrayService.groupObjectsBy('time', leads, 'groupName', 'items');
        break;

        case 'time':
        res = new GroupedData({
          items: _.filter(leads, {name: name}),
          groupedBy: '',
          groupName: ''
        });
        break;

        default:
        break;
    }

    return of(res);
  }

  private filterDate(timeStart: number, timeEnd: number): ILead[] {
    return _.filter(leads, l => l.time >= timeStart && l.time <= timeEnd );
  }

}
