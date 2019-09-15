import { Pipe, PipeTransform } from '@angular/core';
// making my own custom pipe to change chars to spaces
@Pipe({
    name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform{

    transform(value: string , charachter: string): string {
            return value.replace(charachter, ' ' );
    }
}