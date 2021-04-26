

# Práctica 8 - Aplicación de procesamiento de notas de texto

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
 1- La aplicación de notas tiene que ser multíples usuarios
 2- Una nota tiene que tener por lo menos un titulo, una cuerpo o una color.
 3- Cada usuario tiene su propio lista de notas que son

Los siguientes son los casos necesarios que hay que implementar en la práctica.

**Caso 1 - Añadir una nota, en este caso, tenemos que comprobar que si ya existe o no, es decir si tiene el mismo titulo que una nota almacenado. Si ya existe, saldrá errores. **

**Caso 2 - Para modificar una nota de la lista, hay que comprobarlo si existe una una lista de la nota que vas a modificar, si existe podemos modificar la nota , el caso contrario, saldrá errores también.**

**Caso 3 - Realizar la eliminación de una nota, tenemos que comprobar si existe el nota o no , si existe puedes eliminar ,el contrario si no existe no se puede eliminar y indicando error. **

**Caso 4 - Para listar  los nombres de la nota de la lista tenemos que utilizar el paquete chalk y como el resultado saldr con el color corresponde de cada unos de ellos. **

**Caso 5 - Si queremos leer una nota concreta, tenemos que comprobar si existe está lista con estas nota o no, si existe va salir con el color corresponde de paquete chalk, el contrario dará errores.**

**Datos importantes:**

Sabemos que las información tienen que ser con color verde, si es color rojo esta error. También sabemos que la lista de nota de cada usuario están permanente, y  para entrar el juego tiene que  usar la API síncrona de Node.js para trabajar con el sistema de ficheros:
1- Tenemos que guardar cada una de la lista de nota al usuario corresponde.
2- Si queremos cargar una nota desde los diferentes ficheros tenemos que utilizar formato JSON almacenados en el directorio del usuario correspondiente.

Sabemos que cada uno usuario solo puede hacer procesamiento de texto a través de la línea de comandos, y distintos comandos tienen que gestionar con el paquete yargs.

### 3.1. Añadir una nota

Para ```caso 1 - añadir una nota``` , realizamos con el comando ``add`` la siguiente función, lo que hace es, crear una nueva nota, con el nombre, el titulo, el cuerpo y el color correspondiente. (La siguiente imagen se muestra la estructura de creación de cada comando)

![image-20210426041636328](C:\Users\linyouzi\AppData\Roaming\Typora\typora-user-images\image-20210426041636328.png)

````handler(argv) {
handler(argv) {
    //default colour is yellow 
    let colourNote: colours = colours.yellow;
    if (typeof argv.title === 'string' && typeof argv.body === 'string' && typeof argv.color === 'string' && typeof argv.user === 'string') {
      Object.values(colours).forEach((value) => {
        if (argv.color == value) {
          colourNote = value;
        }
      });
     notes.addNote(argv.user, argv.title, argv.body, colourNote);
   }
},
````

Y la siguiente imagen es la comprobación de comando ``add`` :

![image-20210426042903205](C:\Users\linyouzi\AppData\Roaming\Typora\typora-user-images\image-20210426042903205.png)



### 3.2. Modificar una nota

Para ```caso 2 - modificar una nota``` , modifica una nota existente. se puede cambiar el nombre, el titulo, el cuerpo o  el color de la nota que sea cambiar. 

````handler(argv) {
handler(argv) {
    if (typeof argv.user === 'string' && typeof argv.title === 'string' && typeof argv.body === 'string' && typeof argv.color === 'string') {
      let colour: colours = colours.yellow;
      Object.values(colours).forEach((value) => {
        if (argv.color == value) {
          colour = value;
        }
      });
      notes.modifyNote(argv.user, argv.title, argv.body, colour);
   }
},
````

![image-20210426042706028](C:\Users\linyouzi\AppData\Roaming\Typora\typora-user-images\image-20210426042706028.png)



### 3.3. Eliminar una nota

Para ```caso 3 - eliminar una nota``` , en este caso si el usuario desea eliminar una nota tiene que cumplir que dicha nota existe en la base de datos, y el nombre indicado es correcto.

``````
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    user: {
      describe: 'User's name',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'string' && typeof argv.title === 'string') {
      notes.removeNote(argv.user, argv.title);
    }
  },
});
``````

![image-20210426043111566](C:\Users\linyouzi\AppData\Roaming\Typora\typora-user-images\image-20210426043111566.png)



### 3.4. Listar todas las notas

Para ```caso 3 - Listar todas las notas``` , tendrá que mostrar todas las notas creadas en la base de datos. 

``````
yargs.command({
  command: 'list',
  describe: 'List all notes',
  builder: {
    user: {
      describe: 'User's name',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'string') {
      notes.listNotes(argv.user);
    }
  },
});
``````

![image-20210426044050552](C:\Users\linyouzi\AppData\Roaming\Typora\typora-user-images\image-20210426044050552.png)



### 3.5. Leer una nota específica

Para ```caso 3 - Listar todas las notas``` , es necesario que el usuario introduzca una nota existente en la base de datos, así se puede mostrar el nombre, el titulo, el cuerpo y el color de la nota especifíca.

````
yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    user: {
      describe: 'User's name',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'string' && typeof argv.title === 'string') {
      notes.readNote(argv.user, argv.title);
    }
  },
});
````

Como hemos puesto en la tercera nota con el titulo ``Tercera nota`` , el cuerpo `Prueba_03`  y el color `azul`, por lo tanto a la hora de leer esa nota, nos muestra una su información correspondiente.

![image-20210426044249933](C:\Users\linyouzi\AppData\Roaming\Typora\typora-user-images\image-20210426044249933.png)

## 4. API síncrona de Node.js para trabajar con el sistema de ficheros

Para el uso de API que proporciona por Nodes.js, tendremos que instalar el paquete `@types/node` para trabajar con el sistema de ficheros desde TypeScript. Si queremos aplicarla, tenemos que añadir en nuestro fichero lo siguiente:



**Instalación del paquete**

![image-20210426044858038](C:\Users\linyouzi\AppData\Roaming\Typora\typora-user-images\image-20210426044858038.png)



**Uso de API**

![image-20210426044930825](C:\Users\linyouzi\AppData\Roaming\Typora\typora-user-images\image-20210426044930825.png)

## 5. El paquete chalk

El paquete chalk es similar que una dependencia del proyecto ya se incluyen los tipos para poder utilizarlo con TypeScript.

![image-20210426045034781](C:\Users\linyouzi\AppData\Roaming\Typora\typora-user-images\image-20210426045034781.png)

## 6. El paquete yargs

Yargs permite parsear diferentes argumentos pasados a un programa desde la línea de comandos. Más concretamente permite gestionar diferentes comandos, cada uno de ellos, con sus opciones y manejador correspondientes. Para el programa, necesita utilizar el paquete yargs, tenemos que instalar con lo siguiente comando:

![image-20210426032531276](C:\Users\linyouzi\AppData\Roaming\Typora\typora-user-images\image-20210426032531276.png)

luego, en el fichero de ```app.ts``` tiene que importar el fichero ```fs```, como está indicando abajo:

```
import * as yargs from 'yargs';
```

Para describir el comando de ```add``` , utilizamos el ```yargs.command()```, dentro describimos el comando ``add``. Como la siguiente imagen:

![image-20210426045400087](C:\Users\linyouzi\AppData\Roaming\Typora\typora-user-images\image-20210426045400087.png)

Para poder procesar los argumentos pasados desde línea de comandos a la aplicación es importante que el punto de entrada o programa principal incluya la siguiente sentencia:

![image-20210426033506482](C:\Users\linyouzi\AppData\Roaming\Typora\typora-user-images\image-20210426033506482.png)

## 7. Conclusiones

Como conclusion, hemos aprendido cosas nuevas como por ejemplo yargs y chalk. Asimismo hemos forzado el conocimiento sobre typescrit, API, etc. Ha sido una practica interesante. Me gustaria aprender más sobre dicho conocimiento.

## 8. Bibliografía


```
1. yargs: https://www.npmjs.com/package/yargs
```

````
2. chalk: https://www.npmjs.com/package/chalk
````

