import { ButtonComponent } from './../controls/button/button.component';
import { DropdownComponent } from './../controls/dropdown/dropdown.component';
import { TextinputComponent } from './../controls/textinput/textinput.component';
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @angular-eslint/component-selector */
import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { DragDropInteractionService } from '../services/drag-drop-interaction.service';
import { DragModel } from '../model/dragModel';
import { FullTabComponent } from '../full-tab/full-tab.component';

@Component({
  selector: 'app-drop-area',
  templateUrl: './drop-area.component.html',
  styleUrls: ['./drop-area.component.css'],
})
export class DropAreaComponent implements OnInit {
  drag = '';
  drop = '';

  typeMap: any = {
    tabs: { component: FullTabComponent },
    textinput: {component: TextinputComponent},
    button: {component: ButtonComponent},
    dropdown: {component: DropdownComponent}
  };

  @ViewChild('viewContainerRef', { read: ViewContainerRef })
  VCR: ViewContainerRef = {} as ViewContainerRef;

  componentsReferences = Array<ComponentRef<any>>();

  constructor(
    private interactionService: DragDropInteractionService,
    private CFR: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    this.interactionService.onDragComplete().subscribe((data: DragModel) => {
      this.drag = data.dragType;
      this.drop = data.dropType;
      this.createComponent();
    });
  }

  createComponent() {
    const type: any = this.drag;
    const obj: any = this.typeMap[type];
    if (!obj) {
      return;
    }

    const componentFactory = this.CFR.resolveComponentFactory(obj.component);

    const childComponentRef = this.VCR.createComponent(componentFactory);

    // const childComponent = childComponentRef.instance;
    // add reference for newly created component
    this.componentsReferences.push(childComponentRef);
  }
}
