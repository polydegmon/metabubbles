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

    getCircles(): Circle[] {
        return this.circles = [            
            { x: 50, y: 50, radius: 10 },
            { x: 75, y: 75, radius: 20 },
            { x: 115, y: 115, radius: 30 }
        ];
    }
}