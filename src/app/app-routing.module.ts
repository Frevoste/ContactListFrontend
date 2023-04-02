import { NgModule } from "@angular/core";
import { Routes,RouterModule} from "@angular/router";
import { ContactDetailComponent } from "./contacts/contact-detail/contact-detail.component";
import { ContactEditComponent } from "./contacts/contact-edit/contact-edit.component";
import { ContactStartComponent } from "./contacts/contact-start/contact-start.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { LoginComponent } from "./login/login.component";

const appRoutes: Routes = [
    {path: '', redirectTo: '/contacts', pathMatch:'full'},
    {path: 'contacts', component: ContactsComponent, children: [
        {path:'', component:ContactStartComponent},
        {path: 'new', component: ContactEditComponent},
        {path:':id', component: ContactDetailComponent},
        {path: ':id/edit', component: ContactEditComponent}
    ]},
    {path: 'login', component: LoginComponent},
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}