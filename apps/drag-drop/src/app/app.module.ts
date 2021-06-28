import { NgModule } from '@angular/core';
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
    NonCopyDraggableDirective
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
