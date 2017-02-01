import {Injectable} from "@angular/core";
import {BaseRequestOptions, RequestOptions, URLSearchParams} from "@angular/http";
import {environment} from "../../../../environments/environment"
import {UnitsFormat} from "../../../common/constants";

@Injectable()
export class DefaultRequestOptionsService extends BaseRequestOptions {
  constructor() {
    super();
    // Set the default Request Options
    // this.headers.set('Content-Type', 'application/json');

    // Set the default query params
    this.search = new URLSearchParams();
    this.search.set('appid', environment.apiKey);
    this.search.set('units', new UnitsFormat().Fahrenheit);
  }
}

export const REQUEST_OPTIONS_PROVIDER = {
  provide: RequestOptions,
  useClass: DefaultRequestOptionsService
};