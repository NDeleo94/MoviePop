# MoviePop
## Prerrequisitos
El proyecto fue desarrollado con los siguientes lenguajes:

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

Una vez que `pip` haya descargado e instaladado las depencencias:
```sh
(env)$ python manage.py runserver
```
Y con esto tenemos el servidor backend funcionando.
