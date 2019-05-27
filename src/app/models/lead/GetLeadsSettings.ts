import { LeadTypes } from './LeadTypes';

export interface GetLeadsSettings {
    leadType?: LeadTypes;
    level_second?: string; /**
     * @info: cases: 'source', 'time', 'cpl', e.g.
     */
    level_third?: string; /**
    * @info: cases: 'source', 'time', 'cpl', e.g.
    */
    timeStart?: number;
    timeEnd?: number;
}
