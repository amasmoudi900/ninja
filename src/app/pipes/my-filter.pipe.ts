import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFilter'
})
export class MyFilterPipe implements PipeTransform {

  transform(objs: any, term: any): any {
    if (term === undefined) {
      return objs;
    }
    //obj.teamOne.toLowerCase() : {teamOne: "Real Madrid"} => "real madrid"
    //term : "mad"
    return objs.filter((obj) => {
      return (obj.teamOne.toLowerCase().includes(term.toLowerCase())
        || obj.teamTwo.toLowerCase().includes(term.toLowerCase()));
    })
  }

}
