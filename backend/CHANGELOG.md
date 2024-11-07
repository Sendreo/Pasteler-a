# Importante

 Todas las actualizaciones van dentro de este archivo.


## [v.0.3] 06/11/2024 -- Prieto Matías
### Added
- **Archivos de prueba**: Se añadió archivos *.http* para realizar el teste e pruebas de integración de todo el backend. Las pruebas salieron:
    - **Exitosas**: *products.http, inventory.http, user.http, supplier.http*
    - **Pendientes de testeo**: *report.http, sales.http*. A razón de que se necesita lógica más compleja de microservicio en integración con analisis de datos, para calcular las ganacias y generar el reporte.

## [v.0.3] - 04/11/2024 -- Vaca Andrés
### Added
- **Endpoints**: Añadidos los respectivos endpoints para acceder a la lógica de los controladores.
- **Middelwares**: Configurados los middelwares para el correcto funcionamiento de las solicitudes http al servidor.
- **Dependencias**: Se añadió dos dependencias más. *cors, morgan*:
    - **Morgan**: Para ver el intercambio de información en las rutas http
    - **Cors**: Para que el backend permite el acceso de los endpoints hacia el fronted


## [v.0.2] - 02/11/2024 -- Urbani Juan Pablo
### Added
- **Controladores**: Añadidos los respectivos controladores que se comunican con los métodos de servicios de los modelos previamente realizados. Controladores:
    - **Inventory, Products, Suppliers, Sales, Report**: Maneja la solicitud y respuesta http con *Alta, Baja, Modificacion*
    - **Users**: Maneja la escritura y retorno de un token de acceso para posteriormente configurar las rutas protegidas.
- **Validaciones**: Añadidas las respectivas validaciones del los controladores.
- **Cookies**: Configurado el token que se almacenara en las rutas protegidas.



## [v.0.1] - 01/11/2024 -- Augusto Terrera
### Added
- **Estructura general**: Añadidas carpetas de *src*-> *controllers, routes, services* -> *methods, models*
- **Conexión a la base de datos**: Nos conectamos a la base de datos mediante mongoose
- **Creación e integración de la base de datos**: Creamos los esquemas y modelos para  realizar consultas y métodos. Se creó lo siguiente:
    - **Users**: Para permitir el registro de usuarios, no se relaciona con ninguna.
    - **Products**: Para guardar los productos, relación con inventario.
    - **Inventory**: Va contener como el "Lote" de los productos, relación con proveedores
    - **Suppliers**: Es el documento que va guardar los proveedores y su contacto, relación con inventario y con ventas.
    - **Sales**: Esta documento va contener el historial de ventas. Relación con productos y proveedores
    - **Report**: Este documento va contener los reportes y el analisis de datos. Relación con ventas.