
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileRoutes } from './profile.routes';
import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(ProfileRoutes)
    ],
    declarations: [
        ProfileComponent, LoginComponent,
    ],
    providers: [

    ]
})

export class ProfileModule { }
