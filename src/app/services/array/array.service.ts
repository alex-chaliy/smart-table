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
        return obj;
      })
      .value();
    return result;
  }
}
