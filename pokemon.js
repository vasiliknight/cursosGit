const charizard = {
    name: "charizard",
    type: "fire/dragon",
}

const pokeballs = {
    pokemon1: "pikachu",
    pokemon2: "no pokemon",
    type1: "electric",
    type2: "no type",
    owner1: "ash",
    owner2: "wild",
    hunger1: true,
    hunger2: true,
    tired2: true,
    tired1: true,

    feedpokemon1: function(){
        this.hunger1 = false;
    
    },
    sleeppokemon1: function(){
        this.tired1 = false
    },

    changeowner1: function(newowner1){
        if(typeof newowner1){
            this.owner1 = newowner1 ;
        }

    },
    
    feedpokemon2: function(){
        this.hunger2 = false;
    
    },
    sleeppokemon2: function(){
        this.tired2 = false
    },

    changeowner2: function(newowner2){
        if(typeof newowner2){
            this.owner2 = newowner2 ;
        }

    },
    capturecharizard: function(){
        this.pokemon2=charizard.name
        this.type2=charizard.type
        this.owner2="ash"
    }


    
}

