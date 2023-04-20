import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { HomeSectionFirstComponent } from './home-section-first/home-section-first.component';
import { HomeSectionSecondComponent } from './home-section-second/home-section-second.component';
import { MenuNavSectionComponent } from './menu-nav-section/menu-nav-section.component';
import { MenuContainerSectionComponent } from './menu-container-section/menu-container-section.component';
import { RewardsComponent } from './rewards/rewards.component';
import { GiftCardsComponent } from './gift-cards/gift-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    HomeSectionFirstComponent,
    HomeSectionSecondComponent,
    MenuNavSectionComponent,
    MenuContainerSectionComponent,
    RewardsComponent,
    GiftCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
