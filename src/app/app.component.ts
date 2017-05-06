import { Component } from '@angular/core';

@Component({
  selector: 'sk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Postman UI Mimic';


  kvps = [''];
  checked = [false];

  testJson = {
    a_key: 'value',
    lolz: 'sweet',
    nested: {
      yes: 'Yes',
      so: 'nice'
    },
    again_nested: {
      yes: 'Yes',
      so: 'nice'
    }
  };

  public addTokvps(event, element, isLast) {
    if (isLast !== true) return;
    if (element.value === '') {
      this.kvps.push('');
      this.checked.push(false);
    }
    this.checked[this.checked.length - 2] = true;
  }
}
