# Importante

 Todas las actualizaciones van dentro de este archivo.

## [v.0.1] - 01/11/2024 -- Prieto Matías
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