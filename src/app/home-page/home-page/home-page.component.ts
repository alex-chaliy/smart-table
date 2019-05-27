import { Component, OnInit, OnDestroy } from '@angular/core';
import { LeadService } from 'src/app/services/lead/lead.service';
import { Subscription } from 'rxjs';
import { GroupedData } from 'src/app/models/groupedData/GroupedData';
import { ColumnService } from 'src/app/services/column/column.service';
import { Column } from 'src/app/models/column/Column';
import { LeadTypes } from 'src/app/models/lead/LeadTypes';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  columns: Column[];

  leadType: LeadTypes;
  level_second: string;
  level_third: string;

  timeStart: number;
  timeEnd: number;

  leads: GroupedData[];
  leadsSubscription: Subscription;

  constructor(
    private leadService: LeadService,
    private columnService: ColumnService
  ) {}

  ngOnInit() {

    /**
     * TODO: make tests with this values and remove the comments,
     *       cover all needed cases 
     */
    /*

      this.timeStart = 1549395953011;
        // @otherCases: 0, 1551395953011, undefined
        // @info: Feb 05 2019 

      this.timeEnd = 1551395953011;
        // @otherCases: 0, 1549395953011, undefined  
        // @info: Mar 01 2019 
    */

    this.leadType = 'Campaigns';
    this.level_second = 'source';
    this.level_third = 'name';

    this.columns = 
      this.columnService.getColumns();

    this.leadsSubscription = this.leadService
    .getLeads({
      leadType: this.leadType,
      level_second: this.level_second,
      level_third: this.level_third,
      timeStart: this.timeStart,
      timeEnd: this.timeEnd
    })
      .subscribe(leads => {
        console.log('HomePageComponent: leads \n', leads);
        this.leads = leads;
      });
  }

  ngOnDestroy() {
    this.leadsSubscription.unsubscribe();
  }

}
