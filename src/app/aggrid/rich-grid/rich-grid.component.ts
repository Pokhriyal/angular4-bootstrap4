import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ColumnApi, GridApi, GridOptions} from "ag-grid/main";

import RefData from "../data/refData";
import { ProficiencyRendererComponent } from '../proficiency-renderer/proficiency-renderer.component';

@Component({
  selector: 'app-rich-grid',
  templateUrl: './rich-grid.component.html',
  styleUrls: ['./rich-grid.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RichGridComponent implements OnInit {
  private gridOptions: GridOptions;
  private icons: any;
  public rowData: any[];
  public columnDefs: any[];
  public rowCount: string;

  private api: GridApi;
  private columnApi: ColumnApi;

  constructor() {
       this.gridOptions = <GridOptions>{};
       this.icons = {
            columnRemoveFromGroup: '<i class="fa fa-remove"/>',
            filter: '<i class="fa fa-filter"/>',
            sortAscending: '<i class="fa fa-long-arrow-down"/>',
            sortDescending: '<i class="fa fa-long-arrow-up"/>',
            groupExpanded: '<i class="fa fa-minus-square-o"/>',
            groupContracted: '<i class="fa fa-plus-square-o"/>',
            columnGroupOpened: '<i class="fa fa-plus-square-o"/>',
            columnGroupClosed: '<i class="fa fa-minus-square-o"/>'
        };
        this.rowData = this.createRowData();
        this.columnDefs = this.createColumnDefs();
    }

    private onReady(params) {
        this.api = params.api;
        this.columnApi = params.columnApi;
    }

    private createRowData() {
        const rowData: any[] = [];

        for (let i = 0; i < 200; i++) {
            const countryData = RefData.countries[i % RefData.countries.length];
            rowData.push({
                name: RefData.firstNames[i % RefData.firstNames.length] + ' ' + RefData.lastNames[i % RefData.lastNames.length],
                skills: {
                    android: Math.random() < 0.4,
                    html5: Math.random() < 0.4,
                    mac: Math.random() < 0.4,
                    windows: Math.random() < 0.4,
                    css: Math.random() < 0.4
                },
                dob: RefData.DOBs[i % RefData.DOBs.length],
                address: RefData.addresses[i % RefData.addresses.length],
                years: Math.round(Math.random() * 100),
                proficiency: Math.round(Math.random() * 100),
                country: countryData.country,
                continent: countryData.continent,
                language: countryData.language,
                mobile: createRandomPhoneNumber(),
                landline: createRandomPhoneNumber()
            });
        }

        return rowData;
    }

    private createColumnDefs() {
        const columnDefs = [
            {
                headerName: '#',
                width: 30,
                checkboxSelection: true,
                suppressSorting: true,
                suppressMenu: true,
                pinned: true
            },
            {
                headerName: 'Employee',
                children: [
                    {
                        headerName: "Name",
                        field: "name",
                        width: 150,
                        pinned: true
                    },
                    {
                        headerName: "Country",
                        field: "country",
                        width: 150,
                        // an example of using a non-React cell renderer
                        cellRenderer: countryCellRenderer,
                        pinned: true,
                        filter: 'set',
                        filterParams: {
                            cellRenderer: countryCellRenderer,
                            cellHeight: 20
                        },
                        cellEditor: 'richSelect',
                        cellEditorParams: {
                            values: ["Argentina", "Brazil", "Colombia", "France", "Germany", "Greece", "Iceland", "Ireland",
                                "Italy", "Malta", "Portugal", "Norway", "Peru", "Spain", "Sweden", "United Kingdom",
                                "Uruguay", "Venezuela", "Belgium", "Luxembourg"],
                            cellRenderer: countryCellRenderer,
                        },
                        editable: true
                    },
                    {
                        headerName: "Date of Birth",
                        field: "dob",
                        width: 110,
                        pinned: true,
                        cellRenderer: function (params) {
                            return pad(params.value.getDate(), 2) + '/' +
                                pad(params.value.getMonth() + 1, 2) + '/' +
                                params.value.getFullYear();
                        },
                        filter: 'date',
                        columnGroupShow: 'open'
                    }
                ]
            },
            {
                headerName: "Proficiency",
                field: "proficiency",
                width: 135,
                // supply an angular component
                cellRendererFramework: ProficiencyRendererComponent
            },
            {
                headerName: 'Contact',
                children: [
                    {headerName: "Mobile", field: "mobile", width: 150, filter: 'text'},
                    {headerName: "Landline", field: "landline", width: 150, filter: 'text'},
                    {headerName: "Address", field: "address", width: 500, filter: 'text'}
                ]
            }
        ];

        return columnDefs;
    }
  ngOnInit() {
  }

}

function countryCellRenderer(params) {
    const flag = "<img border='0' width='15' height='10' style='margin-bottom: 2px' src='https://www.ag-grid.com/images/flags/" + RefData.COUNTRY_CODES[params.value] + ".png'>";
    return flag + " " + params.value;
}

function createRandomPhoneNumber() {
    let result = '+';
    for (let i = 0; i < 12; i++) {
        result += Math.round(Math.random() * 10);
        if (i === 2 || i === 5 || i === 8) {
            result += ' ';
        }
    }
    return result;
}

//Utility function used to pad the date formatting.
function pad(num, totalStringSize) {
    let asString = num + "";
    while (asString.length < totalStringSize) asString = "0" + asString;
    return asString;
}
