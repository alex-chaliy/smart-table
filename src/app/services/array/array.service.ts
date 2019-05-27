import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ArrayService {

  constructor() {}

  groupObjectsBy(
    propName: string,
    objectsArray: any[],
    outputGroupName: string,
    outputValuesName: string
  ): any {
    const objectsArray_ = [...objectsArray];
    const result = _( objectsArray_ )
      .groupBy( obj => obj[ propName ] )
      .map( (values, key) => {
        const obj = {};
        obj[ 'groupedBy' ] = propName;
        obj[ outputGroupName ] = key;
        obj[ outputValuesName ] = values;

        const keyMap: string[] = Object.keys(values[0]);

        _.map( keyMap, propName => {
          const c = calcTotal(values, propName);
          obj[propName] = c;
          
          if (typeof c === 'number') {
            obj[propName] = c;
          } else {
            _.map(values, v => v[propName] = '');
          }
        });

        return obj;
      })
      .value();

    return result;

    function calcTotal(items, propName): number | string {
      let res;
      if (typeof (items && items[0][propName]) ==='number') {
        res = _.sumBy(items, (el) => el[propName]);
      } else {
        res = (items && items[0][propName]);
      }
      return res;
    }
  }
}
