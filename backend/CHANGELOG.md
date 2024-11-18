# Importante

 Todas las actualizaciones van dentro de este archivo.


## [v.0.8] 16/11/2024 -- Vaca Andres
### Added
- **Endpoints**: Se añadió un archivo de ruta nuevo llamado *route.dashboard.js* en donde se van almacenar las llamadas a los controladores mediante peticiones http.
- **Rutas Protegidas**: Se empezó la construcción del middelware correspondiente que protege las rutas del dashboard para evitar el acceso de terceros a datos sensibles.


## [v.0.7] 15/11/2024 -- Prieto Matías
### Added
- **Controladores**: Se le sumó funcionalidad a los controladores: *avgMargin, lowStockProducts, categoryDistribution, topSuppliers*. Lo que hace esto es:
    - **avgMargin**: Trae el margen promedio de los productos
    - **lowStockProducts**: Trae los productos que estén más bajo de stock
    - **categoryDistribution**: Trae los numeros de productos por categoría
    - **topSuppliers**: Trae a los proveedores más solicitados



## [v.0.6] 14/11/2024 -- Urbani Juan Pablo
### Added
- **Controladores**: Se agregó funcionalidad a los controladores: *salesTrends, paymentMethods, avgProduct*. Esto hace:
    - **salesTrends**: Esto lo que hace es traer la tendencia de ventas.
    - **paymentMethods**: Esto lo que hace es traer los métodos de pagos más usados
    - **avgProduct**: Esto lo que hace es traer el promedio de precio de los productos



## [v.0.5] 12/11/2024 -- Terrera Augusto
### Added
- **Controladores**: Se añadió funcionalidad a los controladores: *monthlySales, weeklySales, mostSalesProducts*. Esto hace: 
    - **monthlySales**: Trae las ventas mensuales.
    - **weeklySales**: Trae las ventas semanales
    - **mostSalesProducts**: Trae los productos más vendidos.


## [v.0.4] 09/11/2024 -- Prieto Matías
### Added
- **Empezado el Dashboard**: Se agregó más controladores en *product.controller.js, sales.controller.js, y supplier.controller.js*. Se empezó controladores base para obtener y hacer el análisis de datos.


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