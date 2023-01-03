import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  employees: any[]=[];
  item ! :any ;
  fs:string ='';
  filteredArray : Array<{id: number , name: string}>=[];
//   ok=[{
//     id:0,
//     name:""
//   }
// ]

  transform(value: any[], filterString :string) : any[]{
 
    if (!value) { 
      var fs =filterString.toLowerCase();
      return []; 
    }
    
   
   
    return value.filter(item => {
      var fs =filterString.toLowerCase();
      if (item && item['first_name']) {
        if(item['first_name'].toLowerCase().includes(filterString))
               return item;
      }
      return false ;
    });
   }

 
  }
