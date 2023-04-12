import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ParticleComponent } from './particle/particle.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    HeaderComponent,
    ParticleComponent,
FooterComponent  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    HeaderComponent,
    ParticleComponent,
    FooterComponent
  ]
})
export class ComponentModule { }
