import { Component, OnInit } from '@angular/core';
import { CircleService } from '../../services/circle.service';
import { Circle } from '../../models/circle';

@Component({
    moduleId: module.id,
    selector: 'mb-circle',
    templateUrl: 'circle.component.html'
})

export class CircleComponent implements OnInit {

    circles: Circle[];

    constructor(private circleService: CircleService) {

    }

    ngOnInit() {
        this.getCircles();
        console.log(this.circles);
    }

    getCircles() {
        this.circles = this.circleService.getCircles()            
    }
}