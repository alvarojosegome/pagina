# ¿Quieres salir?

Este es un simple proyecto HTML con JavaScript que presenta una pregunta con dos opciones "Sí" y "No". Si se elige "No", el elemento se mueve a una posición aleatoria en la ventana. Si se elige "Sí", aparece un mensaje adicional.

## Estructura del archivo HTML

El archivo HTML (`index.html`) consiste en una estructura básica con:

- La declaración `<!DOCTYPE html>`.
- El elemento `<html>` con el atributo `lang="en"`.
- La sección `<head>` que incluye metadatos, título y vinculación al archivo CSS.
- La sección `<body>` que contiene el contenido visible.

## Estilos CSS

Los estilos CSS están en un archivo separado (`style.css`) que no está proporcionado aquí. Sin embargo, se asume que contiene estilos para el diseño de la página.

## JavaScript

Se incluye un script JavaScript directamente en el archivo HTML. Este script contiene dos funciones:

1. `cambiarPosicion(elemento)`: Esta función toma un elemento como argumento y lo mueve a una posición aleatoria en la ventana.
2. `dijoSi()`: Esta función se llama cuando se hace clic en la opción "Sí", mostrando un mensaje adicional.

## Uso

Puedes abrir el archivo HTML (`index.html`) en cualquier navegador web para interactuar con él. Al hacer clic en las opciones "No" o "Sí", se activarán las funciones correspondientes.

## Nota

- Asegúrate de tener los archivos HTML, CSS y JavaScript en la misma carpeta para que funcionen correctamente.
- El comportamiento de movimiento aleatorio se activa al hacer clic en la opción "No".
- El mensaje adicional se muestra al hacer clic en la opción "Sí".
