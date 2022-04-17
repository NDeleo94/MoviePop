# MoviePop

Es un mini proyecto desarrollado con Django REST framework y ReactJS.

El proyecto muestra información de peliculas y series emitidas en todo el mundo.

## Prerrequisitos
El proyecto fue implementado con los siguientes lenguajes:

Python 3.8.10

Node v16.14.2

Se recomienda usar estas versiones o superiores.

Tambien se necesitará la libreria `virtualenvwrapper` para crear un entorno virtual de Python

## Instalación
El primer paso es crear un entorno virtual, y activarlo

```sh
$ mkvirtualenv env
$ workon mi_entorno_virtual
```

Luego clonar el repositorio, e instalar las dependencias:

```sh
(env)$ git clone https://github.com/NDeleo94/MoviePop.git
(env)$ cd Moviepop
(env)$ pip install -r requirements.txt
```

Nota: `(env)` Indica que la terminal esta trabajando en un entorno 
virtual configurado por `virtualenvwrapper`.

## Funcionamiento
### Backend

Una vez que `pip` haya descargado e instaladado las depencencias, utilizamos el siguiente comando:
```sh
(env)$ python manage.py runserver
```
Y con esto tenemos el servidor backend funcionando.

## Frontend

Con la ayuda de una segunda terminal, nos ubicamos en el directorio del frontend del proyecto
y utilizamos el comando `npm start`:

```sh
$ cd Moviepop/frontend
$ cd npm start
```

Con esto tenemos el frontend funcionando.

Listo! Ya podemos hacer uso de la aplicación.
