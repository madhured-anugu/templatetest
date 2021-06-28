/* eslint-disable @angular-eslint/directive-selector */
import {
  ComponentFactoryResolver,
  Directive,
  OnInit,
  ViewContainerRef
} from '@angular/core';
import { CompInterface } from './comp-interface';

import { DynamicComponent } from './dynamic/dynamic.component';

@Directive({
  selector: '[dynamic]'
})
export class DynamicCompDirective implements OnInit {
  
  constructor(
    public viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private host: DynamicComponent
  ) {}

  ngOnInit() {
     this.loadComponent();
  }



  loadComponent() {
    const item = this.host?.item;
    if (!item) {
      return;
    }
    const compFactory = this.componentFactoryResolver.resolveComponentFactory(
      item.component
    );
    const viewContainerRef = this.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent<CompInterface>(
      compFactory
    );
    componentRef.instance.data = item.data;
  }
}
