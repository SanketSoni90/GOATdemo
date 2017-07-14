import {Pipe, PipeTransform} from '@angular/core';
import {layoutPaths} from '../../../theme';

@Pipe({name: 'paSvgPicture'})
export class PaSvgPicturePipe implements PipeTransform {

  transform(input:string):string {
    return layoutPaths.images.root + 'app/' + input + '.svg';
  }
}
