

# Práctica 07: Modelo de datos de un sistema que permite el diseño de menús

```
Universidad: Universidad de La laguna
Asignatura: Desarrollo de Sistemas Informaticos
Curso: 2020 - 2021
Autor: XueMei Lin
```

## 1. Introducción

El propósito de esta practica de consiste en un diseño orientado a objetos del modelo de datos de un sistema de información que permita el diseño de menús. En esta practica vamos a aprender con más profundidad sobre la clase abstracta y interfaz.

## 2. Objetivos

1. Conocimientos sobre las clases abstractas
2. Conocimientos sobre interfaces
3. Uso de [Inquirer.js](https://www.npmjs.com/package/inquirer) y [Lowdb](https://www.npmjs.com/package/lowdb). 
4. Conocimiento de  los principios SOLID

## 3. Ejercicios realizados

La practica se divide en tres partes grandes:

- **Implementación de alimentos**
- **Implementación de platos**
- **Implementación de menú**
- **Implementación de Carta**



​																				***Implementación de alimentos***

```
Para la implementaicon del alimentos, para cada alimentos y/o ingredientes tenemos que crear varios tipos de alimentos o ingredientes, la siguiente table:	
	- Carnes, 
    - Pescados, 
    - Huevos, 
    - Tofu, 
    - Frutos secos, 
    - Semillas
    - Legumbres.
    - Verduras y hortalizas.
    - Leche y derivados.
    - Cereales.
    - Frutas.
       	
Además tenemos que crear una tabla de los  nutricional del alimento con respecto a los macronutrientes y     kcal por 100 gr de dicho alimento. Asimismo hay que calcular el precio del alimento y/o ingrediente por kg en euros. En esa parte tenemos que poner los nombres de alimentos y el origen de cada alimentación.
```

**Clase de Tofu** 

Así como se crea cada clase de alimentación, con distintos atributos como por ejemplo:

(Nombre, Origen, Macros, Peso, Kcal por cada 100 gramo, Precio por cada kilo)

![image-20210419012720471](C:\Users\linyouzi\AppData\Roaming\Typora\typora-user-images\image-20210419012720471.png)

La siguiente imagen se muestra distinta información sobre distintos alimentos:

![image-20210419065656599](C:\Users\linyouzi\AppData\Roaming\Typora\typora-user-images\image-20210419065656599.png)





​																			***Implementación de platos***

````
Para la implementación de Los platos se consideran en los alimentos y/o los ingredientes ,dentro de los platos tienen cuatro categorías distintas:

- platos entrantes
- primer plato
- segundo plato
- postres
````



​																			***Implementación de Menú***

````
En menú tiene que implemtanruna una serie de consultas como por ejemplo:
	- Precio total del menú
	- Platos que lo compone cada alimento
	- Composicion nutricional del menú
	- Listado de grupos de alimentos por orden de aparición
````



​																			***Implementación de Carta***

````
La implementación de la carta esta compuesta por una seria de menús prediseñados, en la carta aparecerá platos individuales para los comensales.
Por un lado está disponible la carta con varios platos para  un grupo de personas
Por otro lado está disponible la carta de plato indivual para cada mienbro.
````



## 4. Conclusiones

Desde mi punto de vista, ha sido una practica muy útil e interesante. Me ayuda a conocer más sobre TypeScript, y también conocer más la implementación de SOLID, Inquirer.js y Lowdb. Me gustaría aprender más TypeScript y desarrollar más diseños interesantes. 

## 5. Bibliografía

1. [Contenido sobre interfaces]([Microsoft Word - EIPR_Tema04.doc (unirioja.es)](https://www.unirioja.es/cu/jearansa/0809/archivos/EIPR_Tema04.pdf))
2. [Principios SOLID]([PRINCIPIOS S.O.L.I.D. USANDO TYPESCRIPT - Baufest (tss.com.pe)](http://www.tss.com.pe/blog/principios-s-o-l-i-d-usando-typescript))
3. [Apuntes de la clase](https://ull-esit-inf-dsi-2021.github.io/typescript-theory/typescript-solid.html)

