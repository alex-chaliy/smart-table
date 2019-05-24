export type ColAction = '' | 'delete' | 'edit';


export interface IColumn {
	name: string;

	mapTo: string; /**
	 * @info: in which property we need to map; this property contains some data
	 */
	
	width: number; /**
	 * @info: width in percents
	 */
}
