import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { ComponentModule } from "../component/component.module";


@NgModule({
    declarations: [
        ProjectComponent
    ],
    imports: [
        CommonModule,
        ProjectRoutingModule,
        ComponentModule
    ]
})
export class ProjectModule { }
