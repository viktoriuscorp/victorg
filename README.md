# Victor Garcia IA — Portafolio Web

Landing page profesional de Victor Garcia especializado en Inteligencia Artificial y Automatización. Construida con React, Vite y Tailwind CSS.

## 🚀 Características

- **Diseño moderno y responsive**: Interfaz limpia y atractiva optimizada para móviles y desktop.
- **Animaciones suaves**: Scroll reveal, hover effects y microinteracciones.
- **Accesibilidad (A11y)**: Labels asociados, ARIA attributes, soporte para `prefers-reduced-motion`.
- **Performance**: Vite + Tailwind JIT, assets optimizados.
- **Secciones**:
  - Hero con CTAs claros
  - Tech stack (Make.com, n8n, Webhooks)
  - Comunidad IA360 Labs
  - Canal de YouTube con 50+ tutoriales
  - Servicios de consultoría (Auditoría, Implementación, Mentoría)
  - FAQ interactivo
  - Formulario de contacto

## 📋 Tech Stack

- **Frontend**: React 18 + JSX
- **Build**: Vite
- **Styling**: Tailwind CSS
- **Icons**: lucide-react
- **Desarrollo**: Node.js + npm

## 🛠️ Instalación

```bash
git clone https://github.com/tu-usuario/victorg.git
cd victorg
npm install
```

## 🚀 Desarrollo

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## 📦 Build para producción

```bash
npm run build
```

Los archivos optimizados se guardan en `dist/`.

## 📝 Estructura del proyecto

```
victorg/
├── src/
│   ├── App.jsx           # Componente principal
│   ├── main.jsx          # Entrada de React
│   └── App.css           # Estilos locales
├── public/               # Assets estáticos
├── styles.css            # Estilos globales
├── vite.config.js        # Configuración de Vite
├── tailwind.config.js    # Configuración de Tailwind
├── index.html            # HTML raíz
└── package.json          # Dependencias
```

## 🌐 Despliegue

### Vercel (recomendado)

1. Conecta tu repositorio a [Vercel](https://vercel.com)
2. Vercel detecta Vite automáticamente
3. Deploy automático en cada push a `main`

### Netlify

1. Conecta tu repositorio a [Netlify](https://netlify.com)
2. Build command: `npm run build`
3. Publish directory: `dist`

### GitHub Pages

```bash
# Instala gh-pages
npm install --save-dev gh-pages

# Añade a package.json:
# "deploy": "npm run build && gh-pages -d dist"

npm run deploy
```

## ♿ Accesibilidad

- Labels `htmlFor`/`id` en formularios
- Atributos ARIA (`aria-expanded`, `aria-controls`, `aria-hidden`)
- Respeto a `prefers-reduced-motion` para usuarios sensibles
- Contraste WCAG mejorado

## 📊 Optimizaciones

- Scroll reveal con IntersectionObserver
- Animaciones CSS eficientes
- Tailwind CSS purge (producción)
- Componentes optimizados con React

## 📧 Contacto

Para colaboraciones o preguntas, contacta a través del formulario en el sitio o accede al canal de YouTube.

## 📄 Licencia

MIT — Uso libre para proyectos personales y comerciales.

---

**Construido con ❤️ por Victor Garcia**
