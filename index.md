

# Práctica 8 - Aplicacion de procesamiento de notas de texto

```
Universidad: Universidad de La laguna
Asignatura: Desarrollo de Sistemas Informaticos
Curso: 2020 - 2021
Autor: XueMei Lin
```

## 1. Introducción

En esta practica, vamos a aprender como usar la aplicación de procesamiento de notas de texto, y basado en los conocimientos que hemos aprendido en la clase, vamos a programar una pequeña aplicación sobre añadir, modificar, eliminar, listar y leer notas de un usuario concreto.

Además, vamos a conocer como utilizar [yargs](https://www.npmjs.com/package/yargs) y [chalk](https://www.npmjs.com/package/chalk).


## 3. Ejercicios realizados

Descripción general sobre los requisitos de la aplicación de procesamiento de notas de texto.

Los requisitos que debe cumplir la aplicación de procesamiento de notas de texto son los siguientes:

 1- La aplicacion de notas tiene que ser multiples usarios
 
 2- Una nota tiene que tener por lo menos un titulo, una cuerpo o una color.
 
 3- Cada usario tiene su propio lista de nostas que son
 
Hay que comprabar andes de añadir una nota si existe el mismo titulo o no , si existe va salir error , el contrario si no existe el mismo tiltulo se puede añadir una nueva nota a la lista.
Para modificar una nota de la lista ,hay que comprobarlo si existe una una lista de la nota que vas a modidicar, si existe puedemos modificar la nota , el contrario si no existe ,saldrá error si vamos a eliminar una nota , tenemos que comprobar si existe el nota o no , si existe puedes eliminar ,el contrario si no existe no se puede eliminar y va salir error.
Para listar  los nombres de la nota de la lista tenemos que utilizar el paquete chalk y se va salir con el color corresponde de cada unos de ellos.
Si queremos leer una nota concreta,tenemos que comprabar si existe esta lista con estas nota o no ,si existe va salir con el color corresponde de paquete cha1k, el contrario no va salir nada.
Sabemos que las informacion tiene que ser con color verde, si es color rojo esta error.
sabemos que la lista de nota de cada usario estan permanente ,y  para entrar el juego tiene que  usar la API síncrona de Node.js para trabajar con el sistema de ficheros:
  
1- Tenemos que guardar cada una de la lista de nota al usario corresponde.

2- Si queremos cargar una nota desde los diferentes ficheros tienemos que ultilizar formato JSON almacenados en el directorio del usuario correspondiente.

Sabemos que cada uno usario solo puede hacer procesamiento de texto a traves la línea de comandos, y distintos comandos tienen que gestionar con el paquete yargs.


## 4. Conclusiones
Como conclusion, hemos aprendido cosas nuevas como por ejemplo yargs y chalk. Asimismo hemos forzado el conocimiento sobre typescrit, API, etc. Ha sido una practica interesante. Me gustaria aprender más sobre dicho conocimiento.


## 5. Bibliografía

```
1. yargs: https://www.npmjs.com/package/yargs
```

````
2. chalk: https://www.npmjs.com/package/chalk
````

