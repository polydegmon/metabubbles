// Component Import
import { Component } from '@angular/core';

// Serivce Import
import { CircleService } from '../../services/circle.service';

// Model Import
import { Circle } from '../../models/circle';

@Component({
  moduleId: module.id,
  selector: 'mb-canvas',
  templateUrl: 'canvas.component.html',
  styleUrls: ['canvas.component.css'],
  providers: [Circle, CircleService]
})

export class CanvasComponent {

  circles: Circle[]
  height: number;
  width: number;

  constructor(private circleService: CircleService) {
    console.info("CanvasComponent Constructor.......");

    this.height = this.getCanvasHeight();
    this.width = this.getCanvasWidth();

    this.circles = circleService.getCircles(this.height, this.width, 10, 100);

    console.log(`canvas height - ${this.height} : canvas width - ${this.width}`);
  }

  // At some point this will be able to get the size of the container
  private getCanvasHeight(): number {
    return 500;
  }

  // At some point this will be able to get the size of the container
  private getCanvasWidth(): number {
    return 900;
  }

  getViewBox() {
    return `0 0 ${this.width.toString()} ${this.height.toString()}`;
  }
}