import { Component, OnInit } from '@angular/core';

// Serivce Import
import { CircleService } from '../../services/circle.service';

// Model Import
import { Circle } from '../../models/circle';

@Component({
    moduleId: module.id,
    selector: 'mb-circle',
    templateUrl: 'circle.component.html',
    styleUrls: ['circle.component.css'],
    providers: [Circle, CircleService]

    //inputs: ['circle']
})

export class CircleComponent implements OnInit {

    circles: Circle[];

    constructor(circle: Circle, private circleService: CircleService) {
        console.log("CircleComponent Constructor.......");
        this.getCircles(circleService);
        console.log(circle);
    }

    ngOnInit() {        
        console.log(this.circles);
    }

    getCircles(circleService: CircleService) {
        this.circles = circleService.getCircles(900, 500, 10);            
    }
}