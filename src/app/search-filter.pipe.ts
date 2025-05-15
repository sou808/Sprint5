import { Pipe, PipeTransform } from '@angular/core';
import { Chanson } from './model/chanson.model';

@Pipe({
  name: 'searchChanson'
})
export class SearchFilterPipe implements PipeTransform {

  transform(list: Chanson[], filterText: string): Chanson[] {
    return list ? list.filter(item =>
      item.titreChanson?.toLowerCase().includes(filterText.toLowerCase())
    ) : [];
  }
}
