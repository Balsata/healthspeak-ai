# 🩺 HealthSpeak AI 🌐 Demo 👉 [LINK](https://healthspeak-ai.vercel.app)

  

**HealthSpeak AI** is a web application that facilitates communication in multilingual medical environments through real-time voice translation powered by artificial intelligence.

  

## ✨ Features

  

- 🎙️ Real-time voice recognition

- 🌍 Instant translation between multiple languages (Spanish, English, German, Portuguese, Chinese, French, Italian, etc.)

- 🔊 Audio playback in the translated language

- 🔄 Swap between source and target languages

- 👩‍⚕️ Patient / Doctor mode with conversation history

- 💾 Persistent history using `localStorage`

- 🧽 Confirmation modal for clearing conversation

- 📱 Responsive and mobile-ready UI

- 🌐 Multilanguage support using `react-i18next`

- 📩 Functional contact form using EmailJS

- 🧱 Architecture based on Clean Architecture

  

## 🚀 Technologies

  

-  **React + Vite**

-  **TypeScript**

-  **Tailwind CSS**

-  **OpenAI Whisper + Translate (simulated use case)**

-  **react-i18next** for internationalization

-  **EmailJS** for form submission

-  **FontAwesome** for icons

  

---

  

## 📁 Project Structure

  

```

src/

├── assets/ # Images and assets

├── components/ # Reusable components (Header, Footer, etc.)

├── hooks/ # Custom hooks (useMedicalTranslator)

├── pages/ # Main pages (Home, Translate)

├── container/ # Dependency injection (useCases)

├── core/ # Clean Architecture (valueObjects, useCases, etc.)

├── utils/ # i18n config, helpers

└── App.tsx # Main layout and routing

```

  

## 🔧 Environment Variables

  

Use a `.env` file to configure your keys:

  

```env

VITE_OPENAI_API_KEY=your_key

```

  

## 📦 Installation

  

```bash

# Clone the repository

git  clone  https://github.com/your-user/healthspeak-ai.git

cd  healthspeak-ai

  

# Install dependencies

npm  install

  

# Run in development

npm  run  dev

```

 
  

## 🧠 Author

  

Developed with ❤️ by [Bryan Sáenz](https://www.linkedin.com/in/bryansaenzt/)



# 🩺 HealthSpeak AI  🌐 Demo 👉 [LINK](https://healthspeak-ai.vercel.app) 

  

**HealthSpeak AI** es una aplicación web que facilita la comunicación en entornos médicos multilingües mediante traducción de voz en tiempo real, impulsada por inteligencia artificial.

 

## ✨ Características

  

- 🎙️ Reconocimiento de voz en tiempo real

- 🌍 Traducción instantánea entre múltiples idiomas (español, inglés, alemán, portugués, chino, francés, italiano, etc.)

- 🔊 Reproducción de audio en el idioma traducido

- 🔄 Intercambio de idioma de origen y destino

- 👩‍⚕️ Modo paciente / doctor con historial de conversación

- 💾 Historial persistente usando `localStorage`

- 🧽 Modal para borrar conversación con confirmación

- 📱 UI responsive y lista para móviles

- 🌐 Soporte multilenguaje (i18n con `react-i18next`)

- 📩 Formulario de contacto funcional con EmailJS

- 🧱 Arquitectura basada en Clean Architecture
  

  

## 🚀 Tecnologías

  

-  **React + Vite**

-  **TypeScript**

-  **Tailwind CSS**

-  **OpenAI Whisper + Translate (caso de uso simulado)**

-  **react-i18next** para internacionalización

-  **EmailJS** para envío de formularios

-  **FontAwesome** para íconos

  

## 📁 Estructura del Proyecto

  

```

src/

├── assets/ # Imágenes y recursos

├── components/ # Componentes reutilizables (Header, Footer, etc.)

├── hooks/ # Custom hooks (useMedicalTranslator)

├── pages/ # Páginas principales (Home, Translate)

├── container/ # Contenedor de dependencias (useCases)

├── core/ # Arquitectura Clean (valueObjects, useCases, etc.)

├── utils/ # Configuración de i18n, helpers

└── App.tsx # Enrutador y layout principal

```

  

  

## 🔧 Variables de Entorno

  

Usa un archivo `.env` para configurar tus claves:

  

```env

VITE_OPENAI_API_KEY=tu_clave

```

 

  


  

## 📦 Instalación

  

```bash

# Clonar el repositorio

git  clone  https://github.com/tu-usuario/healthspeak-ai.git

cd  healthspeak-ai

  

# Instalar dependencias

npm  install

  

# Ejecutar en desarrollo

npm  run  dev

```

  


  

## 🚀 Despliegue

  

Este proyecto está preparado para desplegar fácilmente en **Vercel**.

  

1. Sube tu repo a GitHub

2. Ve a vercel.com y selecciona el repo

3. Agrega las variables de entorno necesarias

4. ¡Listo!

  



  

## 🧠 Autor

  

Desarrollado con ❤️ por [Bryan Sáenz](https://www.linkedin.com/in/bryansaenzt/)

 
