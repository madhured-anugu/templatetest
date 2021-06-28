import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// import { CardComponent } from './card/card.component';
import { TabComponent } from './tab/tab.component';
import { StackedComponent } from './stacked/stacked.component';
import { AccordianComponent } from './accordian/accordian.component';
import { DynamicCompDirective } from './dynamic-comp.directive';
import { DynamicComponent } from './dynamic/dynamic.component';
import { ToolContentComponent } from './tool-content/tool-content.component';
import { ToolHeaderComponent } from './tool-header/tool-header.component';
import { DraggableDirective } from './directives/draggable.directive';
import { DroppableDirective } from './directives/droppable.directive';
import { DropAreaComponent } from './drop-area/drop-area.component';
import { FullTabComponent } from './full-tab/full-tab.component';
import { ResizableDirective } from './directives/resizable.directive';
import { NonCopyDraggableDirective } from './directives/noncopy-draggable.directive';
import { TextinputComponent } from './controls/textinput/textinput.component';
import { LinkComponent } from './controls/link/link.component';
import { HeaderComponent } from './controls/header/header.component';
import { FooterComponent } from './controls/footer/footer.component';
import { LabelComponent } from './controls/label/label.component';
import { ButtonComponent } from './controls/button/button.component';
import { DropdownComponent } from './controls/dropdown/dropdown.component';
import { defineCustomElements, applyPolyfills } from '@bds/bds-core/loader';
import { GridComponent } from './controls/grid/grid.component';
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    TabComponent,
    StackedComponent,
    AccordianComponent,
    DynamicCompDirective,
    DynamicComponent,
    ToolContentComponent,
    ToolHeaderComponent,
    DraggableDirective,
    DroppableDirective,
    DropAreaComponent,
    FullTabComponent,
    ResizableDirective,
    NonCopyDraggableDirective,
    TextinputComponent,
    LinkComponent,
    HeaderComponent,
    FooterComponent,
    LabelComponent,
    ButtonComponent,
    DropdownComponent,
    GridComponent
  ],
  bootstrap: [AppComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor() {
    applyPolyfills().then(() => {
      defineCustomElements(window);
    });
  }
}
