import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {Sample1App} from "./app.component";
import {AccordionModule} from "../../src/index";

@NgModule({
    imports: [
        BrowserModule,
        AccordionModule
    ],
    declarations: [
        Sample1App
    ],
    bootstrap: [
        Sample1App
    ]
})
export class SampleAppModule {
}