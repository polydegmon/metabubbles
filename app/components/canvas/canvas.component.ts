import { Component } from '@angular/core';
import { CircleService } from '../../services/circle.service';
import { Circle } from '../../models/circle';

@Component({
  moduleId: module.id,
  selector: 'mb-canvas',
  templateUrl: 'canvas.component.html',
  styleUrls: ['canvas.component.css']
})

export class CanvasComponent {

  // circles: Circle[];
  
  // canvasHeight: number;
  // canvasWidth: number;

  // constructor(private circleService: CircleService) {
  //   this.canvasWidth = this.getCanvasWidth();
  //   this.canvasHeight = this.getCanvasHeight();

  //   this.circles = this.circleService.getCircles(this.canvasWidth, this.canvasHeight, 10);
  // }

  // getCanvasHeight(): number {
  //   // At some point this will be able to get the size of the container
  //   return 500;
  // }

  // getCanvasWidth(): number {
  //   // At some point this will be able to get the size of the container
  //   return 900;    
  // }

  // getViewBox(): string {    
  //   // fix the issue here before moving on to the circle issue
  //   return "0 0 this.canvasWidth this.canvasHeight";
  // }
}