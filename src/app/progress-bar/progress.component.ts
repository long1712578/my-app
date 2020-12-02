import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
    selector:'progress-app',
    templateUrl:'./progress.component.html',
    styleUrls:['./progress.component.css'],
})
export class ProgressComponent implements OnInit ,OnChanges{
     ngOnChanges(changes: SimpleChanges): void {
         
     }
     ngOnInit(): void {
     }
     @Input() progress=50;
     @Input()backgroundColor='#ccc';
     @Input()progressColor='tomato';
}