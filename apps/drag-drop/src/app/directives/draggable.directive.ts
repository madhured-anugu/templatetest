/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @angular-eslint/directive-selector */
import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import interact from 'interactjs';
import { getClassStartsWith } from '.././utils/domUtils';
import { DragModel } from '../model/dragModel';
import { DragDropInteractionService } from '../services/drag-drop-interaction.service';
@Directive({
  selector: '[draggable]'
})
export class DraggableDirective implements AfterViewInit {
  constructor(
    private element: ElementRef,
    private interactionService: DragDropInteractionService
  ) {}
  ngAfterViewInit(): void {
    (window as any).dragMoveListener = (event: { target: any; dx: number; dy: number; }) => {
      const target = event.target;
      // keep the dragged position in the data-x/data-y attributes
      const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
      const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

      // translate the element
      target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

      // update the posiion attributes
      target.setAttribute('data-x', x);
      target.setAttribute('data-y', y);
    };
    const elem = this.element.nativeElement;

    interact(elem)
      .draggable({
        // enable inertial throwing
        inertia: true,
        // restrict: {
        //   restriction: '',
        //   endOnly: true,
        //   elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
        // },

        // enable autoScroll
        autoScroll: true,

        listeners: {
          // call this function on every dragmove event
          move: (window as any).dragMoveListener,

          // call this function on every dragend event
          end: this.onDragEnd
        }
      })
      .on('move', (event:any) => {
        const interaction = event.interaction;
        if (
          interaction.pointerIsDown &&
          !interaction.interacting() &&
          event.currentTarget.getAttribute('clonable') != 'false'
        ) {
          const original = event.currentTarget;
          const clone = event.currentTarget.cloneNode(true);
          // const x = clone.offsetLeft;
          // const y = clone.offsetTop;
          clone.setAttribute('clonable', 'false');
          clone.style.position = 'absolute';
          clone.style.left = original.offsetLeft + 'px';
          clone.style.top = original.offsetTop + 'px';
          original.parentElement.appendChild(clone);
          interaction.start({ name: 'drag' }, event.interactable, clone);
        }
      });
  }

  onDragEnd = (event:any) => {
    const canDrop = event.target.classList.contains('can-drop');
    const dropParentCls = getClassStartsWith(event.target, 'dropParent-');
    const dragCls = getClassStartsWith(event.target, 'drag-');
    if (canDrop) {
      console.log('drag: ' + dragCls + ' drop: ' + dropParentCls);
      const data: DragModel = {
        dragType: dragCls,
        dropType: dropParentCls
      };
      this.interactionService.sendDragComplete(data);
    }
    interact(event.target).unset();
    event.target.remove();
  };
}
