"use strict";

/*Stampare a schermo un messaggio all’interno di un h1, utilizzando 
i data.

/*Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.*/

const { createApp } = Vue;

createApp({
    data(){
        return{
            title: 'Hello World! -- By Vue.js',
            image: `img/Vue-js-logo.png`,
            logo: 'logo-img',
            firstName: '',
            lastName: '',
            centering: 'd-flex',
            fullName(){
                return this.firstName + " " + this.lastName;
            },
            lista: [
                'pane',
                'Biscotti',
                'Latte',
                'acqua',
            ],
            addItem: '',
        };
    },
    methods: {
        printText: () => {
            alert("Ciao")
        },
        addItemToList: function(){
            if(!this.lista.includes(this.addItem)){
                return this.lista.push(this.addItem)
            }
        },
        removeFromList: function(index){
            this.lista.splice(index, 1);
        }
    }
}).mount('#app');

