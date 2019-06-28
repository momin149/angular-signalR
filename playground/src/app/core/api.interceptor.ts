
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PLAYGROUND_SETTINGS } from '../../../config';

@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.url == "https://localhost:44342/api/chart")
    {
      request = request.clone({ url: request.url });
    }
    else
    {
    request = request.clone({ url: PLAYGROUND_SETTINGS.config.apiUrl + request.url });
    }
    return next.handle(request);
  }
}
