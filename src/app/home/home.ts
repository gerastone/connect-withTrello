import { TrelloService } from './../services/trello.service';
import { Component } from '@angular/core';


@Component({
    selector: 'app-home-page',
    templateUrl: './home.html'
})


export class HomePageComponent {
    cards : any = [];
    constructor(private trelloService: TrelloService){

    }

    ngOnInit(){

    }


    getTrello(){
        this.trelloService.getTrelloCards().subscribe(result =>{
            this.cards = result;
            console.log(result)
        }, error =>{
            console.log(error);
        })
    }
}