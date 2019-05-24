import { IColumn, ColAction } from './IColumn';

export class Column implements IColumn {
	name: string;
	mapTo: string;
	width: number;

	constructor(o: IColumn = <IColumn>{}) {
		this.name = o.name || '';
		this.mapTo = o.mapTo || '';
		this.width = o.width || 0;
	}
}
