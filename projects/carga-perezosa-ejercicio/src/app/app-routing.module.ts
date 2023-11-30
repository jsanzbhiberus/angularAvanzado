import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'modulo-a', loadChildren: () => import('./modulo-a/modulo-a.module').then(m => m.ModuloAModule) },
  { path: 'modulo-b', loadChildren: () => import('./modulo-b/modulo-b.module').then(m => m.ModuloBModule), data: { preload: true } },
  { path: '', redirectTo: '/modulo-a', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
