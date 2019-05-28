import { Injectable } from '@angular/core';
import { leads } from 'src/test/data/leads';
import * as _ from 'lodash';

import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Observable, timer } from 'rxjs';

import { GroupedData } from 'src/app/models/groupedData/GroupedData';
import { Lead } from 'src/app/models/lead/Lead';
import { GetLeadsSettings } from 'src/app/models/lead/GetLeadsSettings';

import { ArrayService } from '../array/array.service';
import { LeadTypes } from 'src/app/models/lead/LeadTypes';
import { LEADS_REFRESH_TIME } from 'src/app/constants/leads';

@Injectable({
  providedIn: 'root'
})
export class LeadService {
  constructor(
    private arrayService: ArrayService
  ) {}

  getLeads(settings: GetLeadsSettings = <GetLeadsSettings>{}): Observable<GroupedData[]> {
    const {leadType, level_second, level_third, timeStart, timeEnd} = settings;

    let res: GroupedData[];
    let leads_ = (!!timeStart && !!timeEnd) ? 
      this.filterDate(leads, timeStart, timeEnd) : [...leads];

    if (leadType) {
      leads_ = _.filter(leads_, l => l.type === leadType);
    }

    if (level_second && level_third) {
      
      res = this.arrayService
        .groupObjectsBy(level_second, leads_, 'groupName', 'items')
        .map(group => {
          group['items'] = this.arrayService
          .groupObjectsBy(level_third, group['items'], 'groupName', 'items');
          return group;
          
        });
        
    } else if (level_second) {
      res = this.arrayService
        .groupObjectsBy(level_second, leads_, 'groupName', 'items');

    } else {
      res = [
        {
          items: leads_,
          groupedBy: '',
          groupName: 'default'
        }
      ];
    }

    return timer(0, LEADS_REFRESH_TIME)
      .pipe(
        map(() => res)
      );

  }

  getLeadTypes(): LeadTypes[] {
    return [
      'Buyers', 'Campaigns', 'Daily', 'Hourly'
    ];
  }

  private filterDate(leads: Lead[], timeStart: number, timeEnd: number): Lead[] {
    const leads_ = [...leads];
    return _.filter(leads_, l => l.time >= timeStart && l.time <= timeEnd );
  }

}
