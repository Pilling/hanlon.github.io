import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnterStoryComponent } from './enter-story/enter-story.component';
import { BodyComponent } from './body/body.component';


const routes: Routes = [

  {path: 'enter-story', component: EnterStoryComponent},
  {path: 'body', component: BodyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
