
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TrelloService {

    constructor(private http: HttpClient){

    }

    getTrelloCards(){
        const headers = new HttpHeaders();
        headers.set('Content-Type', 'application/json');
        return this.http.get('https://api.trello.com/1/boards/nC8QJJoZ/cards', {headers});
    }
}