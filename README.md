# TECNOLÓGICO NACIONAL DE MÉXICO

## INSTITUTO TECNOLÓGICO DE OAXACA

### Ingeniería en Sistemas Computacionales

---

# Pokemon Deck (Generador Aleatorio de Mazo)

- **Materia:** DSD2303 · Desarrollo de Servicios Web
- **Grupo:** 8SC
- **Docente:** Ing. Luis Angel Zaragoza Farrera
- **Estudiante:** 22161058 - Wilver Alfredo Flores Santiago

---

## Descripción del Proyecto

**Pokemon Deck** es una aplicación web de SPA (Single Page Application) desarrollada con **Vue.js 3** que consume la **PokéAPI** de manera dinámica. Su objetivo principal es permitir al usuario generar un mazo (deck) personalizado y totalmente aleatorio de cartas de Pokemon, especificando la cantidad de cartas deseadas mediante un formulario interactivo.

Cada carta del mazo se presenta con un diseño visual inspirado en coleccionables, mostrando información clave obtenida en tiempo real desde la API.

---

## Características Principales

- **Generación Aleatoria Dinámica:** Permite configurar mediante un formulario cuantas cartas se desean incluir en el mazo.
- **Consumo de la PokéAPI:** Se conecta al endpoint masivo para obtener la lista de Pokemon disponibles y procesa los detalles individuales en paralelo mediante `Promise.all()`.
- **Componentes Modulares:**
  - `<PokemonDeck />`: Componente contenedor principal que gestiona el formulario y la lógica de negocio.
  - `<PokemonCard />`: Componente dedicado a renderizar la información de cada carta de forma individual (ID, nombre, tipos, imagen oficial, altura, peso y habilidades).
- **Gestión de Caché:** Optimiza las peticiones HTTP almacenando localmente la lista general de Pokemon para evitar consultas repetitivas innecesarias.

---

## Tecnologías y Herramientas Utilizadas

- **Vue.js 3** (Composition API con `<script setup>`)
- **Vite** (Entorno de desarrollo y empaquetador)
- **Vue Router** (Gestión de rutas de la aplicación)
- **CSS3 Moderno** (Diseño responsivo con Flexbox y CSS Grid)
- **PokéAPI** (Fuente de datos externa)

---

## Instrucciones de Instalación y Ejecución

Sigue estos pasos para clonar y ejecutar el proyecto localmente en tu computadora:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/WilverAFS/pokemon_deck.git
   cd pokemon_deck
   ```
2. **Intalar las dependencias:**
   ```bash
   npm install
   ```
3. **Iniciar el servidor de desarrollo local:**
   ```bash
   npm run dev
   ```
4. **Abre la URL local que muestra la terminal:**
   ```bash
   http://localhost:5173/
   ```
