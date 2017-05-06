import {Component, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'sk-key-value-form',
  templateUrl: './key-value-form.component.html',
  styleUrls: ['./key-value-form.component.css']
})
export class KeyValueFormComponent implements OnInit {

  @Input('key') key = '';
  @ViewChild('keyInput') keyInput;
  @Input('checked') checked = false;

  constructor() { }

  ngOnInit() { }

}
