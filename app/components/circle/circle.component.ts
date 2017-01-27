import { Component, OnInit } from '@angular/core';

// // Serivce Import
// import { CircleService } from '../../services/circle.service';

// Model Import
import { Circle } from '../../models/circle';

@Component({
    moduleId: module.id,
    selector: '[mb-circle]',
    templateUrl: 'circle.component.html',
    styleUrls: ['circle.component.css'],
    providers: [Circle],     
    inputs: ['circle'],
})

export class CircleComponent implements OnInit {

    // circle: Circle;

    // constructor(circle: Circle) {        
    //     console.info("CircleComponent Constructor.......");    

    //     this.circle = circle;        
    // }

    ngOnInit() {        
        console.info("CircleComponent ngOnInit........");
    }
}