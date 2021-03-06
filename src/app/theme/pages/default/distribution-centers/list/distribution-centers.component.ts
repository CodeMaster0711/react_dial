import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { ScriptLoaderService } from "../../../../../_services/script-loader.service";
import { Company } from "../../../../../models/company";
// import { Helpers } from '../../../../../../../helpers';
// import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';


@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
    templateUrl: "./distribution-centers.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class DistributionCentersComponent implements OnInit, AfterViewInit {


    constructor(private _script: ScriptLoaderService) {

    }
    ngOnInit() {

    }
    ngAfterViewInit() {
        this._script.load('.m-grid__item.m-grid__item--fluid.m-wrapper',
            'assets/grids/distribution-centers.js');

    }

}