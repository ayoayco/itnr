import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-searchbutton',
  templateUrl: './searchbutton.component.html',
  styleUrls: ['./searchbutton.component.css']
})
export class SearchbuttonComponent implements OnInit {
  @Output() submitQuery = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  execute() {
    this.submitQuery.emit();
  }

}
