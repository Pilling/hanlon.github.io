import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnterStoryComponent } from './enter-story/enter-story.component';


const routes: Routes = [

  {path: 'enter-story', component: EnterStoryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
