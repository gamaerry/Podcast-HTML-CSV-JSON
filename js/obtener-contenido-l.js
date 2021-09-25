//Papa.parse("q1-q2.csv", {download: true, header: true,complete: function(results) {construirTabla(results)}});
//var d=[{'edad':'1','cm':'23','pais':'M','genero':'M','Q1':'10','Q2':'10'},{'edad':'2','cm':'34','pais':'M','genero':'M','Q1':'10','Q2':'10'},{'edad':'3','cm':'32','pais':'M','genero':'H','Q1':'10','Q2':'10'},]
var csv=`Episodio,Título,Descripción,Formato,Fecha
1,"Qué tal, esta es nuestra despedida","Primer episodio: El desprendimiento es una practica de lo mas fundamental en la vida; desde que empieza a vivir, el ser humano se va topando en innumerables ocasiones con este dolor tan característico de dejar ir a una persona o situación que parecen darle cierta comodidad y una falsa ilusión de felicidad.",mp3,16/6/2019
2,Dragón rojo,"Segundo episodio: ""Soy un anciano y he sobrevivido a muchos y grandes problemas, pero la mayoría de ellos nunca han existido"" -Mark Twain. Si ya los cambios y la incertidumbre por sí mismos son una dura prueba en este juego de la vida, de nada nos sirve otorgarle el poder de controlarnos. El hombre que domina sus circunstancias dotándolas de sentido, tiene ventaja sobre el que no.",mp3,24/6/2019
3,Sol edad,"Tercer episodio: El resultado, somos todos el resultado del recorrido de toda una especie, todo un linaje de conocimientos que nos preceden. Sin importar qué sentimientos de la mas absoluta soledad nos inunden, siempre tendremos todo aquello de lo que somos parte, todo aquello que habitamos, todas las sociedades y el conocimiento respaldando nuestra existencia.",mp3,26/8/2019
4,Hay lugares que están malditos,"Cuarto episodio: ""Y en la televisión, en la radio, en el cine
no hubo ningún cambio de programa
no hubo ningún anuncio intercalado ni un
minuto de silencio en el banquete
(pues prosiguió el banquete)""
-Rosario Castellanos.

Cuando nacemos, nacemos con una nacionalidad, con un pasado colectivo, quizá en tierra fertil, pero no rosa. Ignoramos (muy seguido), en donde estamos y en donde hemos nacido. El texto interpretado fué escrito por Maricruz Romero Tejeda de Historias de tierra sagrada, mi México: **https://www.facebook.com/HistoriasdeTierraSagradaMiMexico/** Fondo: Jorge Reyes - Plight: **https://www.youtube.com/watch?v=U6ye-bbu73c**",mp3,13/10/2019
5,Piel negra,Quinto episodio: ¿Quién es lo suficientemente puro en su existencia como para decir que su piel no tiene la negrura que le delata de su propia naturaleza? ¿Quién es lo suficientemente inhumano como para negar la parte mas primitiva de su ser? Saber iniciar y mantener esta y otras fuentes naturales de iluminación es fundamental para no perderse en las escaramuzas de un mundo desesperado. Fondo: Philippe Rey - Ad Honorem **https://soundcloud.com/paranormal-potato/philippe-rey-ad-honorem**,ogg,6/1/2020
5,Darkened skin,Fifth episode: Who is pure enough in his existence to say that his skin does not have the blackness that betrays him of his own nature? Who is inhuman enough to deny the most primitive part of his being? Knowing how to start and maintain this and other natural sources of lighting is essential not to get lost in the skirmishes of a desperate world. Background music: Philippe Rey - Ad Honorem **https://soundcloud.com/paranormal-potato/philippe-rey-ad-honorem**,ogg,13/1/2020
6,Rama seca,"Sexto episodio: Caray, ¿cuanto apreciamos de la vida? ¿Casi nada? ¿Casi todo?, ¿Blanco? ¿Negro?, ¿agradecido? ¿inconformista? Cruz o cara, es que no nos dan al menos dos opciones. Si una entonces no es la otra, pero sin la otra siempre hubo solo una. Esta: Casi todo, un negro muy denso siendo un eterno inconformista. Fondo: Serein - To speak of solitude **https://soundcloud.com/serein/to-speak-of-solitude**",mp3,4/4/2020
7,Lejos de su noche (en imperfecto),"Séptimo episodio: Vamos todos bailando la misma melodía de la vida, dependiendo del ángulo esta será una fiesta, o una desgracia por no saber lo primero. Aunque eso sí, los matices son buenos y es favorable encontrar un punto en medio de ambos extremos. ""Ayer soñé que la vida era belleza y placer, me despertó un niño hambriento y comprendí que es deber (también)"" -Facundo Cabral. Fondo: Totó y su piano - No soy de aquí, ni soy de allá (Facundo Cabral cover) **https://www.youtube.com/watch?v=kjYZyLS8Cjc**",wav,19/5/2021
8,La fuerza vital del cielo anterior,"Octavo episodio: En el momento en el que el cielo estrellado y demás astros, bajan al hogar del ser humano, el tiempo se empieza a medir con los latidos y sabemos que estamos ante un poder que es inhumano y al que simplemente todos nos rendimos y reverenciamos. En el preciso momento en el que el viento viste y convierte al hombre en un pájaro agradecido. Aquel instante en donde el ángel labra a mano la memoria de una mujer, en donde la piedra no es vulgar y el campo es un templo. Desaparece toda duda, embriaga nuestra alma con la certeza absoluta, la única y verdadera: La dependencia del dios hecho hombre de ser acariciado.

El texto interpretado es una adaptación dramática del primer capítulo del libro La fuerza vital del cielo anterior, escrito por Jacobo Grinberg. En la interpreación se cuenta con el apoyo de la estudiante Citlali García de la Facultad de letras de la UMSNH.",wav,19/8/2021`
construir(Papa.parse(csv,{header: true}).data)
function construir(datos){
  // Preparacion de elementos:
  var tabla=document.getElementById('tabla')
  var lista=document.getElementById('lista')
  var titulo=document.getElementById('titulo')
  var fechaAutor=document.getElementById('fecha-autor')
  var player1=document.getElementById('player1')
  //LLenado de la portada:
  var fecha=datos[datos.length-1].Fecha.split('/')
  switch (fecha[1]) {
    case '1': fecha[1]='Enero'
      break;
    case '2': fecha[1]='Febrero'
      break;
    case '3': fecha[1]='Marzo'
      break;
    case '4': fecha[1]='Abril'
      break;
    case '5': fecha[1]='Mayo'
      break;
    case '6': fecha[1]='Junio'
      break;
    case '7': fecha[1]='Julio'
      break;
    case '8': fecha[1]='Agosto'
      break;
    case '9': fecha[1]='Septiembre'
      break;
    case '10': fecha[1]='Octubre'
      break;
    case '11': fecha[1]='Noviembre'
      break;
    default: fecha[1]='Diciembre'
  }
  titulo.innerHTML+=`Episodio ${datos[datos.length-1].Episodio}: ${datos[datos.length-1].Título}`
  fechaAutor.innerHTML+=`<span class="text-white-opacity-05"><small>Por Luis Gerardo | ${fecha[1]} ${fecha[2]} </small ></span>`
  player1.innerHTML+=`<source src="audio/${datos[datos.length-1].Título}.${datos[datos.length-1].Formato}" type="audio/${datos[datos.length-1].Formato}">`
  // Lista y tabla
  for (var i = 0; i < datos.length; i++) {
    //Llenado de la lista:
    lista.innerHTML+=`<li><a href="audio/${datos[i].Título}.${datos[i].Formato}">${datos[i].Episodio}. ${datos[i].Título}</a><\li>`
    //Llenado de la tabla:
    var descripcion= datos[i].Descripción
        .replace(/\*\*([^\*]+)\*\*/g,'<a href="$1" target="_blank">$1</a>')
        .replace(/\n/g,'<br>')
    tabla.innerHTML+=`
      <tr>
				<td>${datos[i].Episodio}</td>
				<td>${datos[i].Título}</td>
				<td>
				  <audio id="player2" preload="none" style="max-width: 100%">
					  <source src="audio/${datos[i].Título}${datos[i].Formato}">
				  </audio><br>
				  ${descripcion}
				</td>
				<td>${datos[i].Fecha}</td>
      </tr>`
  }
}
