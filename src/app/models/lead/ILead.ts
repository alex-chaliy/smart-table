import { LeadTypes } from './LeadTypes';

export interface ILead {
	type: LeadTypes;
	source: string; /** @info: 1st level */
	time: number; /** @info: 2nd level, timestamp is a number */   
	name: string; /** @info: 3rd level */

	leads: number;
	perOfLeads: number; /** @info: percentage */ 

	revenueLeads: number; 
	revenueCalls: number;
	revenueFull: number;
	cost: number; 
	p_l: number;
	roi: number;
	cpl: number;
	rpl: number; 
}