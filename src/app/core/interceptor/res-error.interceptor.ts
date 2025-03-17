import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const resErrorInterceptor: HttpInterceptorFn = (req, next) => {

  return next(req).pipe(
   catchError(   (err)=>{
console.log('interceptor gg' , err.error)
return throwError(()=> err)

   })






  );
};
