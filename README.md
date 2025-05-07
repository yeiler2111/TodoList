# TodoList

Este proyecto fue generado con la versión 16.1.0 de [Angular CLI](https://github.com/angular/angular-cli).

## Instalación de dependencias

Antes de ejecutar el proyecto, debes instalar las dependencias necesarias. Ejecuta el siguiente comando en la raíz del proyecto:

```bash
npm install
```

## Servidor de desarrollo

Ejecuta `ng serve` para iniciar el servidor de desarrollo. Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si realizas cambios en alguno de los archivos fuente.

## Construcción

Ejecuta `ng build` para construir el proyecto. Los archivos generados se almacenarán en el directorio `dist/`.

## Ayuda adicional
Para obtener más ayuda sobre el uso de Angular CLI, ejecuta `ng help` o consulta la página de [Visión general de Angular CLI y referencia de comandos](https://angular.io/cli).


## Arquitectura del Proyecto

El proyecto está organizado siguiendo buenas prácticas de modularidad y separación de responsabilidades para mejorar la escalabilidad y mantenimiento:

1. **Módulo Angular Material**: Se creó un módulo específico para gestionar todas las dependencias de Angular Material, centralizando las importaciones y evitando repeticiones en los componentes.

2. **Módulo de TODOs**: La lógica relacionada con los TODOs se encuentra desacoplada en su propio módulo, con componentes, servicios y demás, lo que mantiene el módulo principal limpio y enfocado en tareas globales.

3. **Estructura de Componentes**: Cada componente sigue la estructura estándar de Angular, con archivos separados para la lógica (`.ts`), plantilla (`.html`), estilos (`.css`) y pruebas unitarias (`.spec.ts`), lo que mejora la organización y modularidad.

4. **Desacoplamiento de la Lógica**: El módulo de TODOs está completamente desacoplado de otras funcionalidades, permitiendo modificarlo y extenderlo sin afectar otras partes del proyecto.

## Pruebas

Las pruebas unitarias se realizan utilizando **Jasmine** como framework de pruebas y **Karma** como el ejecutor de las pruebas. Esta combinación permite visualizar y analizar los errores de manera efectiva durante el desarrollo, asegurando que los componentes y la lógica del proyecto se comporten correctamente.

Para ejecutar las pruebas, puedes utilizar el siguiente comando:

```bash
ng test
```