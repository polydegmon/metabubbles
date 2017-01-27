// Ability to use dependency injection in this service
import { Injectable } from '@angular/core';

// ReactiveX Extensions for javascript - Asynchronous javascript extensions
import 'rxjs/add/operator/map';

import { Circle } from '../models/circle';

@Injectable()

export class CircleService {

    circles: Circle[];

    constructor() {
        console.info("CircleService Initialized...");
    }

    getCircles(canvasHeight:number, canvasWidth:number, radiusModifier:number, generate: number): Circle[] {
        
        this.circles = [];

        for (let i = 0; i < generate; i++) {
            this.circles.push({
                cx: this.randInt(canvasWidth),
                cy: this.randInt(canvasHeight),
                radius: this.randInt(generate) + radiusModifier
            });            
        }

        return this.circles;
    }

    private randInt(max: number): number {
        return Math.floor(Math.random() * max);
    }
}