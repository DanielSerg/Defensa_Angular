import { Routes } from '@angular/router';
import { MenuComponent } from './auth/menu/menu.component';
import { SliderComponent } from './auth/slider/slider.component';
import { BodyComponent } from './auth/body/body.component';
import { FooterComponent } from './auth/footer/footer.component';

export const routes: Routes = [
    {
        path:'menu',
        component:MenuComponent
    },
    {
        path:'slider',
        component:SliderComponent
    },
    {
        path:'body',
        component:BodyComponent
    },
    {
        path:'footer',
        component:FooterComponent
    }
];
