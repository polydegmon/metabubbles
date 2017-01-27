// Ability to use dependency injection in this service
import { Injectable } from '@angular/core';

// ReactiveX Extensions for javascript - Asynchronous javascript extensions
import 'rxjs/add/operator/map';

import { Circle } from '../models/circle';

@Injectable()

export class CircleService {

    circles: Circle[];

    constructor() {
        console.log("CircleService Initialized...");
    }

    getCircles(canvasWidth:number, canvasHeight:number, radiusModifier:number): Circle[] {
        
        this.circles = [];

        for (let i = 0; i < 100; i++) {
            this.circles.push({
                cx: this.randInt(canvasWidth),
                cy: this.randInt(canvasHeight),
                radius: this.randInt(100) + radiusModifier
            });            
        }

        return this.circles;
    }

    private randInt(max: number): number {
        return Math.floor(Math.random() * max);
    }
}