import { LabelComponent } from './../controls/label/label.component';
import { LinkComponent } from './../controls/link/link.component';
import { HeaderComponent } from './../controls/header/header.component';
/* eslint-disable @angular-eslint/component-selector */
import { ButtonComponent } from './../controls/button/button.component';
import { DropdownComponent } from './../controls/dropdown/dropdown.component';
import { TextinputComponent } from './../controls/textinput/textinput.component';
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

@Component({
  selector: 'app-full-tab',
  templateUrl: './full-tab.component.html',
  styleUrls: ['./full-tab.component.css']
})
export class FullTabComponent implements OnInit  {
  drag = '';
  drop = '';

  typeMap: any = {
    textinput: {component: TextinputComponent},
    button: {component: ButtonComponent},
    header: {component: HeaderComponent},
    link: {component: LinkComponent},
    dropdown: {component: DropdownComponent},
    label: {component: LabelComponent}
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
