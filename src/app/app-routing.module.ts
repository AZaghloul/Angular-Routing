import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { AuthGuardService } from './auth-guard.sercive';
import { ErrorPageComponent } from './error-page/error-page.component';
import { UsersResolver } from './users/users-resolver.service';

const appRoutes: Route[] = [
  { path: '', component: HomeComponent },
  {
    path: 'users',
    component: UsersComponent,
    resolve: { servers: UsersResolver },
  },
  {
    path: 'servers',
    canActivateChild: [AuthGuardService],
    component: ServersComponent,
    children: [
      {
        path: ':id',
        component: ServerComponent,
        // canActivate: [AuthGuardService],
      },
    ],
  },
  {
    path: 'not-found',
    component: ErrorPageComponent,
    data: { message: '404 : Page Not Found' },
  },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
