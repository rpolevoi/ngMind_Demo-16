import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-child-component',
  template: `<h3 (click)="onClick()" >{{childProp}} in own child component</h3>`,
  styleUrls: ['child.component.css']
})
export class ChildComponent {
  
  @Input() childProp;
  @Output() emitter = new EventEmitter;
  
  onClick() {this.emitter.emit(this.childProp);}
  
}
