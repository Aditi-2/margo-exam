import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numWord'
})
export class NumWordPipe implements PipeTransform {

regex = /\d+/g;

calculate = (str) => {
 let arr = [];
 let match = [];
 let word = [];
 let remains = "";
  while ((match = this.regex.exec(str)) != null) {
    remains+=str.slice(0, str.indexOf(match[0]));
  for(var i=0; i< match[0].length; i++){
    arr.push(match[0].charAt(i));
  }
  arr.forEach(function(item){
    if(item == 0){
      word.push('zero');
    }else if(item == 1){
      word.push('one');
    }else if(item == 2){
      word.push('two');
    }else if(item == 3){
      word.push('three');
    }else if(item == 4){
      word.push('four');
    }else if(item == 5){
      word.push('five');
    }else if(item == 6){
      word.push('six');
    }else if(item == 7){
      word.push('seven');
    }else if(item == 8){
      word.push('eight');
    }else if(item == 9){
      word.push('nine');
    }
  });
  word.forEach(function(item){
    remains+=item;
  })
}
return remains;
}
  transform(value: any, args?: any): any {
    return this.calculate(value);
  }

}