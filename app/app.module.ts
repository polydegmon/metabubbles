import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Component Imports
import { AppComponent } from './components/root/app.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { CircleComponent } from './components/circle/circle.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, CanvasComponent, CircleComponent],
  bootstrap: [AppComponent]
})

export class AppModule {

}