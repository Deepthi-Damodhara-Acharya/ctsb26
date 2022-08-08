import { Routes } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { ValidUserGuard } from "./services/valid-user.guard";

export const routes:Routes = [
    { path: "about", component: AboutComponent},
    { path: "home", component: HomeComponent},
    { path: "login", component: LoginComponent},
    { path: "welcome", component: WelcomeComponent, canActivate: [ValidUserGuard]},
    
    // { path: "**", component: HomeComponent}
    { path: "**", redirectTo: "home"}

];