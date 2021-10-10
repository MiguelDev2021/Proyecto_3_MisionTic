<template>
  
  <v-container>  
   <br>
    <v-container  id="fondo">
        <H1><span>Bienvenidos a verduras S.A </span></H1>
        <div id="lema">
            <span>
                <p><b>El mejor enlace del campo hacia tu vida</b></p>
            </span>
        </div>
        <div id="descripcion">
            <p>En verduras S.A nos encargamos de conectar los mercados mas importantes de la agricultura enlazando
                productores
                con
                distribuidores realizando una reserva directa, ahorrando tiempo, evitando intermediarios y logrando los
                mejores precios. Unete a nosotros para que disfrutes de los grandes beneficios que tenemos para
                ofrecerte.</p>
        </div>
        <br>
    </v-container>
    <div id="seleccion">
        <p><b>Selecciona un usuario</b></p>
    </div>


    <div id="distribuidor">
        <ul>
            <div>
                <li><b>Compro diferentes
                        productos agricolas<br> para surtir los mercados
                        en restaurantes y hoteles.</b></li>
            </div>
        </ul>
        <br>
        <div class="imagen">
            <img  src="https://i1.wp.com/easyfood.es/wp-content/uploads/2020/03/Los-tiempos-de-reparto-son-importantes-para-escoger-distribuidor.png?resize=800%2C400&ssl=1"
                width="400" height="200" alt="Distribuidor">
        </div>
        <br><br>
        <center>
        <v-btn id="boton-distribuidor"
        outlined
        rounded
        plain
        to ="/oferts" link

         
         
        > Soy Distribuidor</v-btn>
        </center>
        <br>
    </div>
    <div id="produc-tor">
        <div>
            <ul>
                <li><b>Construyo y produczco
                        cultivos especializados <br>para vender al
                        por mayor en productos como <br> el tomate
                        la cebolla y la papa en todas sus variantes.</b></li>
            </ul>
        </div>
        <div class="imagen">
            <img src="https://www.cordobabn.com/media/cordobabn/images/2020/01/21/tecnicas-cultivos-ecologicos-660x400.jpg"
                width="400" height="200" alt="productor">
        </div>
        <br><br>

        <center>
        <v-btn id="boton-distribuidor"
        outlined
        rounded
        plain
        to="/login" link
         
         
        > Soy Productor Agricola</v-btn>
        </center>
    </div>
  </v-container>
</template>



<script>

export default {

 
  created () {
            this.$store.commit('SET_LAYOUT', 'Interfaz_default')
        },

    recargar_pagina(){
        this.$router.reload();
    }
    
}

</script>

<style>

h1{
    text-align: center;
    font-size: 65px;
    font-family: 'Courier New', Courier, monospace;
    color: #038603
}
#lema{
    text-align:center;
    margin: 0.5px 350px;
    background-color: #b5b5b5;
    font-style:italic;
    font-size: 25px;
    font-family: 'Courier New', Courier, monospace;
    color:black
}
h3{
    color: #005200;
}

#fondo{
    background-image: url("https://1.bp.blogspot.com/-Y2TBmGkP1Qk/VgBv9G8EiuI/AAAAAAAAA-A/EuaExDn7iXUK3tQrvTWbLsXgtHalgbf8ACPcBGAYYCw/s1600/302.jpg");
    
}

#descripcion{
    
    margin-left: 40px;
    margin-right: 35px;
    text-align:justify;
    font-family:'Courier New', Courier, monospace;
    font-size: 45px;
    color:white;
}
#distribuidor{
    display: block;
    font-family: 'Courier New', Courier, monospace;
    text-align: left;
    float:left;
    left: 200px;
}
#productor{
    position: relative;
    display: block;
    left: 10%;
    font-family: 'Courier New', Courier, monospace;
    font-family: 'Courier New', Courier, monospace;
    text-align: left;
    float: left;
    
    
    
}
#seleccion{
    font-size: 25px;
    font-family: 'Courier New', Courier, monospace;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
}
.boton{
    
    border: 1px  solid black;
    color: rgb(0, 0, 0);
    text-decoration: none;
    text-align: center;
    padding: 10px 15px;
    border-radius:40px;
    }
.caja-boton{
    text-align:center;
}
.boton:hover{
    background-color: #038603;
}
.imagen{
    text-align: center;
}

#boton-distribuidor:hover{
    background: #038603;
    text-align: center;
}

</style>
