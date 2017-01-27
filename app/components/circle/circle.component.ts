import { Component, OnInit } from '@angular/core';

// Model Import
import { Circle } from '../../models/circle';

@Component({
    moduleId: module.id,
    selector: '[mb-circle]',
    templateUrl: 'circle.component.html',
    styleUrls: ['circle.component.css'],
    providers: [Circle],     
    inputs: ['circle']
})

export class CircleComponent implements OnInit {
    
    constructor() {        
        console.info("CircleComponent Constructor.......");    
    }

    ngOnInit() {        
        console.info("CircleComponent ngOnInit........");
    }
}