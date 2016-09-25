import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  moduleId: module.id,
  selector: 'root',
  template: `<h3>This line in parent component template</h3>
            <app-child-component *ngFor = "let item of list" [childProp]="item"
              (emitter)="selected = $event">
                </app-child-component>
            <h3>CLICK on list items to see selected item below:</h3>
            <h3 *ngIf="selected">{{selected}} displayed in parent component template</h3>`,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  
  list = ["first",
          "second",
          "third",
          "fourth",
          "fifth"
          ];
          
  selected;
  
}
