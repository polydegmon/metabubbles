import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'mb-canvas',
  templateUrl: 'canvas.component.html',
  styleUrls: ['canvas.component.css']
})

export class CanvasComponent {
  
  height: number;
  width: number;
  
  constructor() {    
    console.info("CanvasComponent Constructor.......");      
    
    this.height = this.getCanvasHeight();
    this.width = this.getCanvasWidth();

    console.log(`canvas height - ${this.height} : canvas width - ${this.width}`);    
  }

  getCanvasHeight(): number {
    // At some point this will be able to get the size of the container
    return 500;
  }

  getCanvasWidth(): number {
    // At some point this will be able to get the size of the container
    return 900;    
  }

  getViewBox(): string {        
    return `0 0 ${this.width} ${this.height}`;
  }
}