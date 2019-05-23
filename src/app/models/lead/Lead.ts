import { ILead } from './ILead';

export class Lead implements ILead {
	source: string;
	time: number;
	name: string;

    leads: number;
	perOfLeads: number;
	revenueLeads: number; 
	revenueCalls: number;
	revenueFull: number;
	cost: number; 
	p_l: number;
	roi: number;
	cpl: number;
	rpl: number;
    
    constructor(o: ILead = <ILead>{}) {
        this.source = o.source || '';
        this.time = o.time || 0;
        this.name = o.name || '';

        this.leads = o.leads || 0;
        this.perOfLeads = o.perOfLeads || 0;
        this.revenueLeads = o.revenueLeads || 0;
        this.revenueCalls = o.revenueCalls || 0;
        this.revenueFull = o.revenueFull || 0;
        this.cost = o.cost || 0;
        this.p_l = o.p_l || 0;
        this.roi = o.roi || 0;
        this.cpl = o.cpl || 0;
        this.rpl = o.rpl || 0;
    }
}