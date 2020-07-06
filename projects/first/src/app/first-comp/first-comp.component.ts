import { Component, OnInit, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class FirstCompComponent implements OnInit {

  @Input() name: string;
  @Output() clicked: EventEmitter<string[]> = new EventEmitter<string[]>();

  constructor() { }

  ngOnInit(): void {
  }

  emitEvent() {
    this.clicked.emit(['first', 'second']);
  }

}
