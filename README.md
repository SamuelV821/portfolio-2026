Un sistema de gestión comercial robusto desarrollado como un reto personal de 96 horas, enfocado en la integridad de datos, seguridad por capas y actualización en tiempo real.

Stack Tecnológico:
Frontend: React.js + Tailwind CSS (Diseño responsive y modular).

Backend/Database: Supabase (PostgreSQL).

Real-time: WebSockets para sincronización de inventario instantánea.

Seguridad: Row Level Security (RLS) para aislamiento de datos multi-tenant.

Arquitectura y Desafíos Técnicos
Este proyecto no es solo una interfaz; se enfoca en resolver problemas críticos de backend:

Transacciones Atómicas (RPC/SQL): Implementación de funciones en el servidor para asegurar que el descuento de stock y la creación de la boleta de venta ocurran como una única operación. Esto garantiza que nunca haya inconsistencias de inventario.

Seguridad Robusta (RLS): Configuración de políticas de seguridad a nivel de base de datos para asegurar que cada negocio solo pueda visualizar y manipular sus propios datos.

Sincronización en Tiempo Real: Uso de canales de Supabase para que cualquier cambio en el stock se refleje automáticamente en todos los dispositivos conectados sin necesidad de recargar la página.

Funcionalidades Implementadas:
- Autenticación: Sistema de usuarios y perfiles de negocio.

- Gestión de Inventario: CRUD completo de productos con control de existencias.

- Módulo de Ventas: Generación de boletas digitales con vinculación cabecera-detalle.

- Despliegue Profesional: Configuración de variables de entorno y optimización de build.

Instalación y Uso:

.Clona el repositorio.

.Instala las dependencias: npm install.

.Configura tus variables de entorno en un archivo .env (ver .env.example).

.Inicia el servidor de desarrollo: npm run dev.

 "Desarrollado por Pablo Samuel Vega - samuel-v.dev".
