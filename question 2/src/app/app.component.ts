import { Component } from '@angular/core';
import { NumWordPipe } from './num-word.pipe';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Pipes';
  value = "hello 123";
  result = "";
}
