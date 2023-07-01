import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { ResistenciasComponent } from "./practicas/resistencias/resistencias.component";
import { Distancia2pComponent } from "./practicas/distancia2p/distancia2p.component";
import { CinepolisComponent } from "./practicas/cinepolis/cinepolis.component";

const routes:Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'Resistencias', component:ResistenciasComponent},
    { path: 'D2P', component:Distancia2pComponent},
    { path: 'Cinepolis', component:CinepolisComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
