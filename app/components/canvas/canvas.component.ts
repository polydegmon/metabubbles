import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'mb-canvas',
  templateUrl: 'canvas.component.html'
})

export class CanvasComponent {
  
  // THIS NEEDS TO BE LOADED USING THE METHODS LEARNED WITH THE SPOTIFY APP
  // THIS FUNCTIONALITY ALSO NEEDS TO BE PUT INTO A SERVICE
  circles = [
    {x: 50, y: 50, radius: 10},
    {x: 75, y: 75, radius: 20},
    {x: 115, y: 115, radius: 30}
  ]; 
}