import {Pipe,PipeTransform} from '@angular/core'

@Pipe({
    name:'testsToPl'
})

export class DLengthToPlPipe implements PipeTransform{
    transform(value:"short"|"middle"|"long"):string{
        if(value==='short'){
            return "krótkie"
        }else if(value==='middle'){
            return "średnie"
        }else {
            return "long"
        }
    }
}