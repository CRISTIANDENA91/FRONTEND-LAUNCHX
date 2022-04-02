const fetchPokemon = () => {
     let pokeInput = pokeName.value.toLowerCase();
     const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
     fetch(url).then((res) => {
          if (res.status != "200"){
               console.log(res);
               pokeImage("./pokeSad.gif");
          }
          else{
               return res.json();
          } 
     }).then((data) => {
          console.log(data);
          let pokeImg = data.sprites.front_default;
          console.log(pokeImg);
          pokeImage(pokeImg);
          pokeNombre(data.name);
          pokeId(data.id);
          pokeHeight(data.height);
          pokeWeight(data.weight);
          let hp = data.stats[0].base_stat;
          pokeHp(hp);
          let atk = data.stats[1].base_stat;
          pokeAtk(atk);
          let def = data.stats[2].base_stat;
          pokeDef(def);
          let satk = data.stats[3].base_stat;
          pokeSatk(satk);
          let sdef = data.stats[4].base_stat;
          pokeSdef(sdef);
          let spd = data.stats[5].base_stat;
          pokeSpd(spd);
          let tipos = data.types.map(typ => typ.type.name);
          poketipo(tipos);
     })
}

// fetchPokemon();

const pokeImage = (url) => {
     const pokeImg = document.getElementById("pokeImg");
     pokeImg.src = url;
}


const pokeNombre = (name) => {
     const pokeNombre = document.getElementById("pokeNombre");
     pokeNombre.innerHTML = ("Name: "+name);

}

const pokeHeight = (height) => {
     const pokeHeight = document.getElementById("pokeHeight");
     pokeHeight.innerHTML = ("Height: "+height);
}

const pokeWeight = (weight) => {
     const pokeWeight = document.getElementById("pokeWeight");
     pokeWeight.innerHTML = ("Weight: "+weight);
}


const pokeId = (id) => {
     const pokeId = document.getElementById("pokeId");
     pokeId.innerHTML = ("#"+id);
}

const pokeHp = (hp) =>{
     const pokeHp = document.getElementById("hp");
     pokeHp.innerHTML = ("HP: "+ hp);
}
const pokeAtk = (atk) =>{
     const pokeAtk = document.getElementById("atk");
     pokeAtk.innerHTML = ("ATK: "+ atk);
}

const pokeDef = (def) =>{
     const pokeDef = document.getElementById("def");
     pokeDef.innerHTML = ("DEF: "+ def);
}

const pokeSatk = (satk) =>{
     const pokeSatk = document.getElementById("satk");
     pokeSatk.innerHTML = ("SATK: "+ satk);
}


const pokeSdef = (sdef) =>{
     const pokeSdef = document.getElementById("sdef");
     pokeSdef.innerHTML = ("SDEF: "+ sdef);
}

const pokeSpd = (spd) =>{
     const pokeSpd = document.getElementById("spd");
     pokeSpd.innerHTML = ("SPD: "+ spd);
}

const poketipo = (tipo) =>{
     const type = document.getElementById("tipo");
     type.innerHTML = (tipo);
 }
