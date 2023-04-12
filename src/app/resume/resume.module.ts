import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ComponentModule } from '../component/component.module';


@NgModule({
  declarations: [
    ResumeComponent
  ],
  imports: [
    CommonModule,
    ResumeRoutingModule,
    ComponentModule,
  PdfViewerModule  ]
})
export class ResumeModule { }
