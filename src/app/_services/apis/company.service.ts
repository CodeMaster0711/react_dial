import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { BaseApiService } from "../baseAPI";
import { NonSupportedCountryLead } from "../../models/non-supported-country-lead";
import { Company } from "../../models/company";


@Injectable()
export class CompaniesService extends BaseApiService<Company> {

    constructor(http: HttpClient) {
        super(http);
        this.url = '/company';
    }

}


