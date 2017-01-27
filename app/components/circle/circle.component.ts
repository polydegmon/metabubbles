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
})

export class CircleComponent implements OnInit {

    circles: Circle[];

    constructor(circle: Circle, private circleService: CircleService) {        
        console.info("CircleComponent Constructor.......");  

        // The 900 and 500 here should come from the canvas component
        this.circles = circleService.getCircles(500, 900, 10);        
    }

    ngOnInit() {        
        console.info("CircleComponent ngOnInit........");
    }
}