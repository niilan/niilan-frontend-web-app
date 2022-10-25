import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  addTag(){
    this.title.setTitle('Niilano | Car rentals in Ghana')

    this.meta.addTags([
      {name: 'Keywords', content : 'Niilano car rentals, Car rentals based in Ghana, Car rentals based in Gh, Ghana car rentals, Rent a car in Ghana, Rent a car, Rent a vehicle, book cars in Ghana, Book a car in Ghana'},
      { name: 'description', content: 'A car rental website based in Ghana. Niilano helps you get access to different varieties of cars to book for renting.'},
      { name: 'robots', content: 'index,follow'},
      {name:'author', content: 'Abdul-Latif Mohammed'},
      {name:'twitter:card', content: 'summary'},
      {name:'twitter:image', content: 'http'},
      {name:'twitter:title', content: 'title'},
      {name:'twitter:description', content: 'description'}
    ])
  }

  // updateSeoTag(title:any){
  //   this.title.setTitle(title)

  //   this.meta.updateTag([])
  // }

  constructor(private title : Title, private meta : Meta) { }
}