
# learning-react-query


Esto es un proyecto realizado para aprender y ver como funciona [React query](https://react-query.tanstack.com/), es una librería que se utiliza para hacer peticiones al backend.

Su objetivo es facilitar todo el proceso de llamadas al back end, devolviendote parametros interesantes como `isLoading` o `isError`.

Principalmente se utilizan 3 hooks:

 - useQuery: es el hook que se utliza para hacer la petición `get` al servidor y poder obtener la información que vamos a mostrar al usuario. (es una especie de subscripción que hacemos a una llamada que nos devuelve datos)
 - useMutation: este hook nos permite modificar la llamada que estamos listando con el useQuery, se utiliza para actualizar un dato, eliminarlo o crearlo.
 - useQueryClient: nos devuelve nuestro Query client, gracias a este hook podemos realizar acciones como invalidar la caché de alguna query para que vuelva a llamarse.
