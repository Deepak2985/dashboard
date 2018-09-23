import { Component } from "@angular/core";

@Component({
    selector:"xv-navigation",
    templateUrl:"./navigation.component.html",
    styleUrls:['./navigation.component.css']
})
export class NavigationComponent{

    showMenu=false;

    toggleMenu(){
        this.showMenu=!this.showMenu;
    }
}