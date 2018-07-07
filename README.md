# bajardepeso-app
Ejemplo pedagógico de planeación UX de una plataforma



Un blog que me da consejos diarios

Me interesaría obtener motivación en ciertos objetivos

Obtener un avance de mis objetivos

La aplicación podría decirme si voy bien o mal en mis objetivos

Requeriría itnroducir mi peso actual,  y la aplicación conoce/sugiere un peso ideal

Que la apliciación me ofreciera alguan explicación en caso de tener un retroceso

Podrṕia introducir mi peso utilizando un formulario

Si quisiera hacer un escaneopodria hacer una app que escaneara combinacioens de nùmeros + "kg"




La aplicacion podria ofrecer una serie de alarmas y con base en horarios me podria recomendar opciones

Parte del motivante del día anterior sería que me sugiriera mis compras


La aplicación podría funcionar similar a un coach o entrenador



La aplicacion usaría intensamente notificaciones





La aplicación me recordaría los momentos en los que debo tener alimentos, junto con sugerencias de ingredientes y raciones


La aplicación debería anticipar los momentos en que soy propenso a fallar a mis objetivos

Por ejemplo, en el cine, sugerirme que no compre nachos


La aplicación tiene un sistema de sugerencias que se van activando a lo largo del dia y que tambien responden a mi contexto, ubicacion, actividad, etc


La aplicacion podria tratar de impedir que sea sedentario, detectando momentos de falta de movimiento, y sugiriendome pequeños ejercicios o actividades "pro qué no vas por un vaso de  agua?"


Como usuario, esperamos la retroalimentación

Podría compartir mis objetivos logrados con las demás personas en redes sociales, cada vez que yo quiera


Hay un formulario que calcula cantidad de calorías quemadas en una sesióń de ejercicio


Hay un formulario que permite introducir los alimentos consumidos en una comida



Roles de Plataforma


- Usuario destino (descargo la app, creo cuenta, pago?)
- publico general (Usuario que se entera del producto via redes sociales)
- Encargado de contenidos / Editor / Autor
- Administrador de plataforma (crear cuentas, editar contenidos, monitorear utilizacion)
- Colaborador institucional (Ver reportes de estadísticas, revisar contenidos, autorizar contenidos)





Escenario


Contexto (Plataforma, espacio donde esta, red, situacion social, etc...)
Necesidad / Deseo
Pasos necesarios
Resultado esperado
Resultado obtenido





+++++++


Escenario 1


Emcargado de Contenido

En una unidad de trabjao, necesito que la pagina este constantemente actualizada. Para esto,
necesito generar contenidos. Para esto, cuento con una lista de requerimientos de lo qu edebe llevar,
que busca generar un control de calidad de los contenidos.  Espera publicar un articulo de mucha calidad.


Historias de Usuario de este escenario:








Colaborador institucional

Necesito revisar el contenido, para tener una planeacion a corto plazo, y poder observar mejoras en los contenidos de manera inmediata. Tngo una lista de contenidos que quiero ver mostrados, y necesito autorizar
los contenidos nuevos que sean útiles y con suficiente calidad. Necesita comunicarle al personal de contenidos
cuál es la línea editorial que se va a llevar en el siguiente plazo corto de tiempo.



Público general 

Pedro Sànchez, en mi celular veo videos de fitness en mi casa. Busco un ejercicio o suplemento para bajar
de peso antes de vacaciones de verano. Veo un banner en los videos, lo abro, navego por el sitio, busco
el contenido que me interesa. Busco algún consejo que me ayude. Leo un artículo sobre ejercicio en casa. No
tengo dinero para pagar gimnasio.  El usuario leee sobre el proyecto, termina inscribiendose en la plataforma asì como descargando la aplicación


Administrador de plataforma

Mariana San Juan, 33 años. En su oficina, haciendo revisión de la plataforma, quiere saber cuántos usuarios
hay y uqe' frecuencia de usso tienen. 
Hace login,
va al area de reportes
Seleccionar un reporte de usuarios
selecciona un rango de fechas
Buscaría comparar estadísticas con periodos anteriores
Quisiera monitorear la curva de usuarios comparando con los anteriores.
Un indicador de usuarios nuevos en el nuevo periodo.













### Ontologìas / Tipos de Contenido / Entidad / Modelos

- Usuarios
- Condición Física
- Artículos
- Reporte
- Criterio de calidad de contenido (CCC)
- Rutina de ejercicios
- Dieta
- Alimento
- Lista de Compras
- Proveedor
- Producto (Suplementos, Suscripciones a gimnasio, etc)
- Roles
- Alerta / Notificación
- Recomendaciones / Tips
- Objetivos de Usuario

### Taxonomías

- Artículos
    - Categorías
    - Fecha

- Proveedores
    - Tipo
    - Ubicación

- Asignación de Rol
    - Usuario -> Rol

- Recomendaciones
    - Tipo
        - Dieta
        - Rutina
        - No hacer


### Coreografías

Ejemplo:

Artículo -> Debe cumplir todos los Criterios de Calidad de Contenidos (CCC)


Usuario -> Proveedor -> Lista de Compras -> Productos Disponibles


Usuario -> Rutinas de Ejercicio

Usuario -> "Objetivos" -> Reportes


