import { Injectable } from '@angular/core';
import { leads } from 'src/test/data/leads';
import * as _ from 'lodash';

import 'rxjs/add/observable/of';
import { Observable, of } from 'rxjs';

import { GroupedData } from 'src/app/models/groupedData/GroupedData';
import { Lead } from 'src/app/models/lead/Lead';
import { GetLeadsSettings } from 'src/app/models/lead/GetLeadsSettings';

import { ArrayService } from '../array/array.service';

@Injectable({
  providedIn: 'root'
})
export class LeadService {
  constructor(
    private arrayService: ArrayService
  ) {}

  /**
   * @info level: 'source' | 'time' | 'name'
   *              (levels 1 -> 2 -> 3)
   * @info name: used when level = 'name'
   *  to filter items instead of grouping
   *  because in this case we have only onr level 
   */
  getLeads(settings: GetLeadsSettings = <GetLeadsSettings>{}): Observable<GroupedData> {
    const {level, name, timeStart, timeEnd} = settings;

    let res: GroupedData;
    const leads_ = (!!timeStart && !!timeEnd) ? 
      this.filterDate(leads, timeStart, timeEnd) : [...leads];

    switch (level) {
      case 'source':
        res = this.arrayService.groupObjectsBy('source', leads_, 'groupName', 'items')
          .map(group => {
            group['items'] = this.arrayService.groupObjectsBy('time', group['items'], 'groupName', 'items');
            return group;
          });
        break;

      case 'time':
        res = this.arrayService.groupObjectsBy('time', leads_, 'groupName', 'items');
        break;

      case 'name':
        res = new GroupedData({
          items: _.filter(leads_, {name: name}),
          groupedBy: 'name',
          groupName: name
        });
        break;

      default:
        res = new GroupedData({
          items: leads_,
          groupedBy: '',
          groupName: 'default'
        });
        break;
    }

    return of(res);
  }

  private filterDate(leads: Lead[], timeStart: number, timeEnd: number): Lead[] {
    const leads_ = [...leads];
    return _.filter(leads_, l => l.time >= timeStart && l.time <= timeEnd );
  }

}
