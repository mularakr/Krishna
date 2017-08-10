import {NgModule} from '@angular/core';
import {AboutComponent} from './components/about/about.component';
import {ChildComponent} from './components/childComponent/child.component';
import {AppComponent} from './app.component'
import {RouterModule,Routes} from '@angular/router';

const routes:Routes=[
    {path:"about",component:AboutComponent},
    {path:"child",component:ChildComponent},
    {path:"app",component:AppComponent}
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRootModule{}
export const routingComponents =[AboutComponent,ChildComponent,AppComponent]