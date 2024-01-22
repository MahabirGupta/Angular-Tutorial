import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpHandlerFn, HttpInterceptorFn, HttpRequest, provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),provideHttpClient()]
};



// export const authenticationInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next:
//   HttpHandlerFn) => {
//   const modifiedReq = req.clone({
//       headers: req.headers.set('Authorization', `Bearer ${sessionStorage.getItem('token')}`),
//   });

//   return next(modifiedReq);
// };

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideRouter(routes), 
//     provideAnimations(),
//     provideHttpClient(withInterceptors([authenticationInterceptor]))
//   ]
// };