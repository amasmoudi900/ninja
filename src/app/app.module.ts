import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { WorldCupComponent } from './components/world-cup/world-cup.component';
import { ResultComponent } from './components/result/result.component';
import { NewsComponent } from './components/news/news.component';
import { ScoresComponent } from './components/scores/scores.component';
import { VideosComponent } from './components/videos/videos.component';
import { BlogComponent } from './components/blog/blog.component';
import { ArticleComponent } from './components/article/article.component';
import { BlogArticleComponent } from './components/blog-article/blog-article.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './components/admin/admin.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { HttpClientModule } from "@angular/common/http";
import { AddTeamComponent } from './components/add-team/add-team.component';
import { SearchComponent } from './components/search/search.component';
import { MatchesComponent } from './components/matches/matches.component';
import { MyFilterPipe } from './pipes/my-filter.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    WorldCupComponent,
    ResultComponent,
    NewsComponent,
    ScoresComponent,
    VideosComponent,
    BlogComponent,
    ArticleComponent,
    BlogArticleComponent,
    AddMatchComponent,
    AdminComponent,
    MatchInfoComponent,
    AddTeamComponent,
    SearchComponent,
    MatchesComponent,
    MyFilterPipe,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
