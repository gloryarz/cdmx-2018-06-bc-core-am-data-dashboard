# Data Dashboard
##Speech de presentación

Como sabemos, la clave del progreso se encuentra en la manipulación de DATA, y partiendo de esto, para la creación de nuestro producto nos enfocamos primordialmente en las TMs de Laboratoria. Quienes son las encargadas de seguir detalladamente el progreso de las estudiantes y el desarrollo del bootcamp.

Realizando el research correspondiente, pudimos enfatizar la necesidad de una interfaz amigable que procesara la información para ellos, y la presentará de forma clara y fácil de interpretar.

Cual es la información que necesitan:
promedio general de la generación actual.
promedio general de las generaciones actuales en otras sedes.
promedio general de avance de las chicas.
listado completo por generación y sede.
porcentajes de comparación entre generaciones, sedes, y alumnas en ese orden.

Cuales son los obstáculos a los que se enfrentan las TMs al analizar DATA en estos momentos:
demasiadas carpetas.
demasiado tiempo invertido en buscar la data.
procesamiento manual de la data.

Diseño seleccionado para la interfaz:
Como institución, Laboratoria maneja 4 colores, 2  principales que son NEGRO Y AMARILLO, y 2 secundarios, EL ROSA Y EL VERDE. Para fines prácticos y de usabilidad seleccionamos los dos principales (negro  y amarillo) por ser los de mayor identificación tanto para el personal que trabaja, como para el público en general, y el rosa como identificador individual por cada estudiante.

Presentación de la interfaz:
Cuenta con un LOGIN, que permite tener un acceso restringido y exclusivo solamente para el personal de laboratoria.
Una vez ingresado el usuario y la contraseña previamente registrada, presenta una visión  general del estatus de laboratoria, es decir, presenta PORCENTAJES POR SEDES DE TODAS LAS GENERACIONES, ESTUDIANTES ACTIVAS, Y LISTADO DE ESTUDIANTES DE TODAS LAS SEDES, DE TODAS LAS GENERACIONES.
Una vez dentro, es posible seleccionar la data de acuerdo a las necesidades del usuario.


## Preámbulo

En Laboratoria, las Training Managers (TMs) hacen un gran trabajo al analizar la
mayor cantidad de datos posibles respecto al progreso de las estudiantes para
apoyarlas en su aprendizaje. Por lo que la creacion de una interfaz en donde las TMs puedan _ver_ y _usar_ la data de progreso de las estudiantes es de suma  importancia.

## Introducción

Según un [estudio de IBM](https://www-01.ibm.com/common/ssi/cgi-bin/ssialias?htmlfid=WRL12345USEN),
el 90% de la data que existe hoy ha sido creada en los últimos dos años. Lo que asume que cada día generamos 2.5 trillones de bytes de datos, una cifra sin precedentes.

Sin embargo, los datos por sí solos son de poca utilidad. Para transformar datos
en **información** necesitamos procesarlos y entenderlos. Una manera muy
sencilla de hacerlo es creando _visualizaciones_. Las
empresas líderes de hoy generan visualizaciones dinámicas de su data
que les permiten entender mejor su negocio y tomar decisiones apropiadas.

## Aplicaciones en el mundo real

En el mundo de la web es muy común el uso de _dashboards_. De hecho, [wikipedia](https://goo.gl/P7PF4y)
nos dice que un _dashboard_ puede ser un resumen gráfico de varias piezas de
información importante, generalmente utilizadas para dar una visión general de
una empresa o de un servicio. Así, tenemos dashboards como los de:
* [Google Analytics](https://assets.econsultancy.com/images/resized/0003/3813/mobile_commerce_dashboard-blog-full.png)
  para visualizar la data de tráfico de sitios web.

* [Mailchimp](https://blog.mailchimp.com/wp-content/uploads/2016/11/Dashboard-view-3-Copy-1008x768.jpg)
  para visualizar el desempeño de campañas de mercadeo digital por correo
  electrónico.
* [Quickbooks](https://quickbooks.intuit.com/content/dam/intuit/quickbooks/branding/make-organization-easy-visual.png) para visualizar la información financiera de una empresa.

## Objetivos de aprendizaje

Aprender a diseñar y construir una _interfaz web_ donde se pueda visualizar y manipular data.

## Tópicos a cubrir

Conceptos a aplicar:
_arrays_,_objects_, _dom_, _xhr_ y _visual design_.

Conceptos a repasar: _valores, tipos,
variables_, _control de flujo_ y _tests unitarios_.

## Consideraciones generales

La lógica del proyecto debe estar implementada completamente en JavaScript
(ES6), HTML y CSS. En este proyecto NO está permitido usar librerías o
frameworks, solo [vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e).

No se debe utilizar la _pseudo-variable_ `this`.

Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_
y _lines_, y un mínimo del 50% de _branches_. El _boilerplate_ ya contiene el
setup y configuración necesaria para ejecutar los tests (pruebas) usando el
comando `npm test`.

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias y tests de ejemplo:

```text
./
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── data
│   └── laboratoria.json
├── package.json
├── src
│   ├── data.js
│   ├── index.html
│   ├── main.js
│   └── style.css
└── test
|   ├── data.spec.js
|   ├── fixtures.js
|   ├── headless.js
|   └── index.html
└── ux
    └── README.md
```

La carpeta `data/` dentro del _boilerplate_ incluye un extracto de la data que
podemos usar tanto en los tests como en la interfaz en sí.

a.
La carpeta de `ux/`, incluye un `README` donde vas a encontrar una guía de qué hacer. Te pedimos que ahí mismo documentes ese proceso que realizaste.

## Entregables

Los criterios mínimos de aceptación para considerar que has completado este
proyecto son:

### User Experience Design

#### 1) Definición del producto

* Quiénes son los principales usuarios de producto.
* Cuáles son los objetivos de estos usuarios en relación con el producto.
* Cuáles son los datos más relevantes que quieren ver en la interfaz y
  por qué. Cómo los descubriste.
* Cuándo revisan normalmente estos datos los usuarios.
* Cómo crees que el producto les está resolviendo sus problemas.
* Cómo fue tu proceso de diseño.

#### 2) Sketch de la solución (prototipo de baja fidelidad)

Debes hacer un _sketch_ (boceto) de tu solución usando papel y lápiz, tomarle
una foto, subirla a tu repositorio y hacer mención del _sketch_ en tu `README.md`.

#### 3) Diseño de la Interfaz de Usuario (prototipo de alta fidelidad)

Lo siguiente es diseñar tu Interfaz de Usuario (UI por sus siglas en inglés).
Para eso debes aprender a utilizar alguna herramienta de diseño visual.
Nosotros te recomendamos [Figma](https://www.figma.com/) que  es una herramienta
que funciona en el navegador y, además, puedes crear una cuenta gratis. Sin
embargo, eres libre de utilizar otros editores gráficos como
Illustrator, Photoshop, PowerPoint, Keynote, etc.

El diseño debe representar tu _ideal_ de solución. Digamos que es lo que
desearías implementar si tuvieras tiempo ilimitado para hackear.

Tu diseño debe seguir los fundamentos de _visual design_, como:
contraste, alineación, jerarquía, entre otros. Tip: revisa el contenido de UX
de la unidad de visual design.

### Implementación de la Interfaz de Usuario (HTML/CSS/JS)

Luego de diseñar tu interfaz de usuario deberás trabajar en su implementación.
Como mencionamos, **no** es necesario que construyas la interfaz tal como la
diseñaste. Tendrás un tiempo limitado para hackear, así es que deberás priorizar.

La interfaz debe permitir al usuario:

* Listar y poder seleccionar sedes
* Dentro de cada sede:
  * Listar y poder seleccionar generaciones
  * Para cada generación:
    * Listar y poder seleccionar estudiantes mostrando porcentaje general de completitud de c/estudiante
    * Seleccionar estudiantes mostrando reporte de progreso:
        * Mostrar porcentaje de completitud de todos los temas
        * Calcular porcentaje de tiempo completado de cada tema
        * Listar subtemas de cada tema
        * Poder filtrar subtemas completados y no-completados de cada tema
        * Poder filtrar subtemas por tipos (ejercicios, lecturas y quizzes)
  * En la vista de cada generación mostrar reporte de:
    * Promedio de la generación
    * Generar status para identificar estudiantes debajo del 60 en su porcentaje de completitud
    * Generar status para identificar estudiantes con 90 o más en su porcentaje de completitud
    * Poder filtrar estudiantes por estos dos status
    * Filtrar y poder buscar estudiantes por nombre
    * Poder ordenar de manera ascendente y descendente a las estudiantes según
    porcentaje de completitud
* Utiliza la interfaz sin problemas desde distintos tamaños de pantallas:
  móviles, tablets, desktops
* Realizar pruebas unitarias

Es importante que tu interfaz, a pesar de ser una versión mínima de tu ideal,
igual debe seguir los fundamentos de visual design, como: contraste,
alineación, jerarquía, entre otros.

## Detalles de Implementación

data.js
El corazón de este proyecto es la manipulación de datos a través de arreglos y
objetos. La idea de este archivo es contener toda la funcionalidad que
corresponda a obtener, procesar y manipular datos.

Parte de un buen proyecto es que esté ordenado y que otras programadoras puedan
acceder a el código rápidamente. Es por esto que este orden no es casualidad y
es una convención que generalmente encontrarás en internet bajo el nombre MVC o
Modelo Vista Controlador. En este proyecto Controlador y Modelo estarán bajo
el archivo data.js.

El boilerplate incluye tests que esperan que implementes las
siguientes 4 funciones y las exportes al entorno global (window) dentro del
script src/data.js, ten en cuenta que esto es solo lo básico, si necesitas más
funciones puedes hacerlo:

#### 1) `computeStudentsStats(laboratoria)`

Esta función es la responsable de "crear" la lista de estudiantes
que vamos a "pintar" en la pantalla. La idea es "recorrer" el arreglo de
estudiantes que se encuentra dentro de `laboratoria.json`.

La función debe devolver un nuevo arreglo de estudiantes donde cada objeto
de estudiante deberá tener una propiedad con el nombre `stats` y dentro,
sólo los datos requeridos.

##### Argumentos

* `laboratoria`: Objeto obtenido de la data en bruto.

##### Valor de retorno

Un arreglo de objetos `student` con las siguientes propiedades:

* `name`: Nombre respectivo de la estudiante.
* `email`: Correo electrónico de la estudiante.
* `campus`: Sede a la cual la estudiante pertenece.
* `generation`: Generación a la cual la estudiante pertenece.
* `stats`: Un objeto con las siguientes propiedades:
  * `status`: Status para identificar si la estudiante esta por debajo del 60,
  en 90 o superándolo, o dentro de la media en su `completedPercentage`.
  * `completedPercentage`: Número entero entre 0 y 100 que indica el porcentaje
  de completitud general del usuario con respecto a todos los temas asignados.
  * `topics`: Un objeto que incluye como propiedades los temas del programa y cada tema tiene las siguientes propiedades:
    - `completedPercentage`: Número entero entre 0 y 100 que indica el
    porcentaje de completitud general del usuario con respecto al tema
    respectivo.
    - `percentageDuration`: Número entero que indica el porcentaje de tiempo
    invertido según la duración indicada de cada tema, si el resultado son números flotantes deberías redondearlo al entero más cercano. Ejemplo: 78.78 = 79.  
    - `subtopics`: Un objeto que incluye como propiedades los subtemas de ese
    tema en particular y cada subtema tiene las siguientes propiedades:
      - `completedPercentage`: Número entero entre 0 y 100 que indica el
      porcentaje de completitud general del usuario con respecto al subtema.
      - `type`: String que indica la modalidad del subtema.
      - `duration`: Número entero que indica el tiempo necesario a invertir
      para completar el subtema.  

#### 2) `computeGenerationsStats(laboratoria)`

Esta función es la responsable de "crear" los status de cada generación que
vamos a "pintar" en la pantalla. La idea es "recorrer" el objeto que se
encuentra dentro de la "data".

La función debe devolver un nuevo arreglo de generaciones donde cada objeto
`generation` deberá tener una propiedad con el nombre `average` y dentro el
promedio de `completedPercentage` de todas las estudiantes de la generación.

##### Argumentos

* `laboratoria`: Objeto obtenido de la data en bruto.

##### Valor de retorno

Un arreglo de objetos `generation` con las siguientes propiedades:

* `campus`: Sede a la cual la generación pertenece.
* `generation`: Generación a la cual pertence
* `average`: Promedio del porcentajeCompletado de todas las estudiantes de la generación, si resulta un número flotante debería de ser redondeado al número entero más cercano.
* `count`: Número de estudiantes de la generación.

#### 3) `sortStudents(students, orderBy, orderDirection)`

La función `sortStudents()` se encarga de _ordenar_ la lista de estudiantes creada con
`computeStudentsStats()` en base a `orderBy` y `orderDirection`.

##### Argumentos

* `students`: Arreglo de objetos creado con `computeStudentsStats()`.
* `orderBy`: String que indica el criterio de ordenado. Debe permitir ordenar
  por nombre y porcentaje de completitud.
* `orderDirection`: La dirección en la que queremos ordenar. Posibles valores:
  `ASC` y `DESC` (ascendente y descendente).

##### Valor de retorno

Arreglo de estudiantes ordenado.

#### 4) `filterStudents(students, search)`

##### Argumentos

* `students`: Arreglo de objetos creado con `computeStudentsStats()`.
* `search`: String de búsqueda.

##### Valor de retorno

Nuevo arreglo de usuarios incluyendo solo aquellos que cumplan la condición de
filtrado, es decir, aquellos que contengan el string _busqueda_ en el nombre
(`name`) de las estudiantes.

### main.js

Ten en cuenta también que existe otro archivo _main.js_ que no está solo por
casualidad en la estructura del proyecto. En general es una buena idea ir
separando la funcionalidad en varios archivos, ya que a medida que un proyecto
crece, se vuelve insostenible dejar todo en un solo archivo. En este caso puedes
usar _main.js_ para todo tu código que tenga que ver con mostrar los datos en la
pantalla, y _data.js_ para todas las funciones que vimos que obtienen y
manipulan los datos.

Esta no es la única forma de dividir tu código, puedes usar más archivos y
carpetas, siempre y cuando la estructura sea clara.

### index.html

Al igual que en el proyecto anterior, también existe un archivo `index.html`.
Como ya sabrás, acá va la página que se mostrará al usuario de este tablero de
información. También nos sirve para indicar qué scripts se usarán y unir todo lo
que hemos hecho.

### Data

En esta carpeta están los datos de prueba del proyecto, contiene información
sobre las sedes, las generaciones que han pasado por cada sede, las estudiantes que han pasado por cada generación y su progreso en cada uno de los temas y subtemas que han visto.
Para poder usar el archivo  JSON, puedes ocupar el mismo método que
usarías si es que estuvieses haciendo una llamada HTTP o a una API, pero usando
una dirección **relativa**, ejemplo:

```javascript
"../data/users.json"
```

### UX

En esta carpeta vas a encontrar una guía para realizar el proceso de diseño de tu data dashboard, donde se explican las diferentes fases a seguir de manera muy breve, así como los pasos a desarrollar dentro de cada fase. También se deja espacios para que completes este `README` con tu información, pero si deseas agregar más cosas, siéntete en la libertad. Recuerda que este es un proceso creativo que responde a la data recopilada.

### Tests

Tendrás también que completar las pruebas unitarias de estas funciones que se
incluyen en el _boilerplate_, que encontrarás en el archivo `data.spec.js`.
Si te fijas bien en la carpeta también encontrarás otros archivos, que
detallaremos a continuación:

#### index.html

No confundas este archivo con tu `index.html` del proyecto, este archivo es
especial para los test y es una manera de ver el resultado de tus pruebas
unitarias, pero en el navegador. Para arrancar las pruebas de esta forma,
escribe en tu consola:

```javascript
npm run test-browser
```

Una página se abrirá en tu navegador conteniendo los resultados de las pruebas.

#### fixtures.js

Muy importante archivo, aunque no siempre estará (depende del proyecto). Acá es
donde está el set de datos de prueba que se usarán para correr las pruebas.

## Hacker edition

Features/características extra sugeridas:

* En lugar de consumir la data estática brindada en este repositorio, puedes
  consumir la data del [Live API de Laboratoria](https://api.laboratoria.la/).
  Lee la [documentación aquí](https://laboratoria.github.io/api.laboratoria.la/).
* Agregarle a tu interfaz de usuario implementada visualizaciones gráficas.
* Brindar el detalle de progreso de cada estudiante _por curso_
* Proveer estadísticas de progreso de todo el cohort

## Entrega

En este proyecto deberás trabajar colaborativamente. Para ello, una de las integrantes del equipo deberá forkear el repositorio del cohort y la otra integrante **deberá hacer un fork del repositorio de su compañera**. Luego de esto, deberás [configurar](https://help.github.com/articles/configuring-a-remote-for-a-fork/) un `remote` hacia el repositorio del cual hiciste el fork.

Para mandar cambios desde un repositorio forkeado al original debes crear un [pull request](https://help.github.com/articles/creating-a-pull-request-from-a-fork/) y el propietario del repositorio original recibirá una notificación para [revisar el pull request](https://help.github.com/articles/reviewing-proposed-changes-in-a-pull-request/) y [aceptar los cambios](https://help.github.com/articles/merging-a-pull-request/).

Aquí algunas recomendaciones para que organices mejor el trabajo con tu compañera:
* En lugar de trabajar en una sola rama o _branch_, puedes organizar el flujo de trabajo con dos ramas principales:
  * `master`: rama que contiene las funcionalidades terminadas y sin errores.
  * `develop`: rama dónde integrarás las funcionalidades conforme las vayas desarrollando.

* Además de tener las dos ramas anteriores, puedes trabajar cada nueva funcionalidad en una rama individual (_feature branches_), estas ramas en lugar de crearse a partir de `master`, tienen a `develop` como su rama de origen. Cuando una funcionalidad es terminada se integra de nuevo a `develop`. Las _feature branches_ no se deben integrar directamente a `master`.

* Por último, te sugerimos codear usando la técnica de [pair programming](http://www.javiergarzas.com/2012/06/beneficios-pair-programming.html).


¿Quieres saber más forks y pull requests?

* Un [fork](https://help.github.com/articles/fork-a-repo/) es una copia de un repositorio en el que puedes experimentar sin afectar al repositorio original. Generalmente se usa para proponer cambios al proyecto de alguien más o para usar el proyecto de otra persona como punto de partida para una idea que quieras realizar.

* Un [pull request](https://help.github.com/articles/about-pull-requests/) (PR) te permite solicitar la inclusión de cambios al repositorio original (tu punto de partida) en GitHub. Cuando un PR es abierto, este permite solicitar, discutir y revisar los cambios realizados con todos los colaboradores y agregar otros commits antes de que los cambios sean incluidos al repositorio original.




## Evaluación

Recuerda revisar la [rúbrica](https://docs.google.com/spreadsheets/d/e/2PACX-1vSkQy1waRpQ-16sn7VogiDTy-Fz5e7OSZSYUCiHC_bkLAKYewr4L8pWJ_BG210PeULe-TjLScNQQT_x/pubhtml#)
para ver la descripción detallada de cada _habilidad_ y cada _nivel_. A
continuación presentamos los niveles esperados para cada habilidad:

### General

| Característica/Habilidad | Nivel esperado |
|--------------------------|----------------|
| Completitud | 3
| Investigación | 3
| Documentación | 2

### Tech

| Habilidad | Nivel esperado |
|-----------|----------------|
| **JavaScript** | |
| Estilo | 2
| Nomenclatura/semántica | 3
| Funciones/modularidad | 2
| Estructuras de datos | 2
| Tests | 2
| **HTML** | |
| Validación | 3
| Estilo | 3
| Semántica | 2
| SEO | 0
| **CSS** | |
| DRY | 2
| Responsive | 2
| **SCM** | |
| Git | 3
| GitHub | 2
| **CS** | |
| Lógica | 1
| Arquitectura | 2
| Patrones/paradigmas | 0

### UX

| Habilidad | Nivel esperado |
|-----------|----------------|
| User Centricity | 3 |
| Entrevistas | 2 |
| Contraste | 3 |
| Alineación | 3 |
| Jerarquía | 2 |
| Tipografía | 2 |
| Color | 2 |

### Habilidades Blandas
Esperamos que alcances al menos el nivel 2 en todas tus habilidades blandas.

| Habilidad | Nivel esperado |
|-----------|----------------|
| Planificación y organización | 2
| Autoaprendizaje | 2
| Solución de problemas | 2
| Dar y recibir feedback | 2
| Adaptabilidad | 2
| Trabajo en equipo (trabajo colaborativo y responsabilidad) | 2
| Comunicación eficaz | 2
| Presentaciones | 2

***

## Puntos de experiencia

* Completando los requerimientos mínimos de este proyecto ganarás 250 XPs.
* Completando el hacker edition de este proyecto ganarás 100 XPs adicionales.
* Completando los ejercicios de manipulación de arreglos en el LMS (https://lms.laboratoria.la/cohorts/lim-2018-05-bc-core-am/courses/javascript/04-arrays/06-practice)
  ganarás otros 25 XPs.
* Completando los ejercicios de manipulación de objetos en el LMS (https://lms.laboratoria.la/cohorts/lim-2018-05-bc-core-am/courses/javascript/05-objects/06-practice)
  ganarás otros 25 XPs.

## Herramientas

Para facilitar la lectura del JSON te recomendamos instalar algún plugin en tu
navegador o visitar un JSON parser online:

* [JSONView](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc)

* [JSON Editor Online](https://jsoneditoronline.org/)


## Tips / Pistas

* [Array en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array)
* [Array.sort en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort)
* [Array.map en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map)
* [Array.filter en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter)
* [Array.reduce en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce)
* [Array.forEach en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach)
* [Object.keys en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/keys)
* [Object.entries en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/entries)
* [XMLHttpRequest en MDN](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
* [Fetch API en MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [json.org](https://json.org/json-es.html)
* [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en)
