import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'sk-json-output',
  templateUrl: './json-output.component.html',
  styleUrls: ['./json-output.component.css']
})
export class JsonOutputComponent implements OnInit {

  @Input('json') json;

  jsonStrings =  ['{'];

  constructor() { }

  ngOnInit() {
    this.walk(this.json, 1);
    this.jsonStrings.push('}');
  }

  walk(obj, indentLevel) {
  for (const key in obj) {
    let indents = '';
    for (let i = 0; i < indentLevel; i++) {
      indents += '&nbsp;&nbsp;&nbsp;&nbsp;';
    }
    if (typeof obj[key] === 'object') {
      this.jsonStrings.push(indents + '<span class="key">' + key + '</span>: {');
      this.walk(obj[key], indentLevel + 1);
      this.jsonStrings.push(indents + '},');

    }
    else {
      this.jsonStrings.push(indents + '<span class="key">' + key + '</span>: <span class="value">"' + obj[key] + '"</span>,');
    }
  }
    this.jsonStrings[this.jsonStrings.length - 1] = this.jsonStrings[this.jsonStrings.length - 1].replace(',', '');
}

}
