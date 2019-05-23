import { IGroupedData } from './IGroupedData';

export class GroupedData implements IGroupedData {
	groupedBy: string;
	groupName: string;
	items: any[];

    constructor(o: IGroupedData = <IGroupedData>{}) {
        this.groupedBy = o.groupedBy || '';
        this.groupName = o.groupName || '';
        this.items = o.items || [];
    }
}
