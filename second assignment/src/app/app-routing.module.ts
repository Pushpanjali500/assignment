import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { RewardsComponent } from './rewards/rewards.component';
import { GiftCardsComponent } from './gift-cards/gift-cards.component';

const routes: Routes = [
  {path : 'home',component:HomeComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'menu',component:MenuComponent},
  {path:'rewards',component:RewardsComponent},
  {path:'giftcards',component:GiftCardsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
