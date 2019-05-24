import { Component, OnInit, OnDestroy } from '@angular/core';
import { LeadService } from 'src/app/services/lead/lead.service';
import { Subscription } from 'rxjs';
import { GroupedData } from 'src/app/models/groupedData/GroupedData';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

  level: string;
  name: string;
  timeStart: number;
  timeEnd: number;

  leads: GroupedData;
  leadsSubscription: Subscription;
  constructor(
    private leadService: LeadService
  ) {}

  ngOnInit() {

    /**
     * TODO: make tests with this values and remove the comments,
     *       cover all needed cases 
     */
    /*
      this.level = 'name'; // @otherCases: 'sourece', 'time', undefined   
                           // @info: see levels in ILead interface  

      this.name = 'Precise Leads'; // @otherCases: '', undefined

      this.timeStart = 1549395953011;
        // @otherCases: 0, 1551395953011, undefined
        // @info: Feb 05 2019 

      this.timeEnd = 1551395953011;
        // @otherCases: 0, 1549395953011, undefined  
        // @info: Mar 01 2019 
    */

    this.leadsSubscription = this.leadService
    .getLeads({
      level: this.level,
      name: this.name,
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
