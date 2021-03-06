
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { CountriesService } from "../../../../_services/apis/countries.service";
import { Country } from "../../../../models/country";
import { CountryInvestmentResolver } from "./country-investment-resolver";

@Injectable()
export class CountriesInvestmentsResolver implements Resolve<any> {

    constructor(private api: CountriesService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return [];//this.api.query('{"fields": ["id", "name"]}');
    }

}
