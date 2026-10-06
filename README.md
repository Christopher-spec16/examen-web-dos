# 📚 Librería Archivo

Catálogo web de publicaciones sobre arquitectura, diseño gráfico, tipografía y estética desarrollado con **HTML5, CSS y JavaScript**.

---

## 🎨 Paleta de Colores (Tokens de Diseño)

Toda la aplicación utiliza un esquema de color moderno basado en variables CSS (`:root`), sin bordes coloreados agresivos en las tarjetas y con tonos neutros slate para máxima legibilidad.

### Colores Principales y de Interfaz

| Muestra / Token | Variable CSS | Código HEX | Código RGB | Propósito / Uso en la Interfaz |
| :--- | :--- | :--- | :--- | :--- |
| 🟦 **Primary (Indigo)** | `--color-primary` | `#4f46e5` | `rgb(79, 70, 229)` | Botones principales, enlaces activos, badges de marca |
| 🟦 **Primary Hover** | `--color-primary-hover` | `#4338ca` | `rgb(67, 56, 202)` | Estado `:hover` en botones principales |
| 🩵 **Primary Light** | `--color-primary-light` | `#eef2ff` | `rgb(238, 242, 255)` | Fondo de tags, contenedor de iconos de marca |
| 🩵 **Primary Border** | `--color-primary-border` | `#c7d2fe` | `rgb(199, 210, 254)` | Borde sutil en tags principales |
| 🔷 **Secondary (Sky Blue)** | `--color-secondary` | `#0ea5e9` | `rgb(14, 165, 233)` | Acentos de información y categorías |
| 🟨 **Accent (Amber / Oro)** | `--color-accent` | `#f59e0b` | `rgb(245, 158, 11)` | Estrellas vectoriales de calificación |
| 🟨 **Accent Light** | `--color-accent-light` | `#fef3c7` | `rgb(254, 243, 199)` | Fondo de la píldora de calificación (`★ 4.9`) |
| 🟩 **Success (Emerald)** | `--color-success` | `#10b981` | `rgb(16, 185, 129)` | Indicadores de estado y confirmación |
| ⚪ **App Background** | `--bg-app` | `#f8fafc` | `rgb(248, 250, 252)` | Fondo general de toda la aplicación (Slate 50) |
| ⬜ **Card Surface** | `--bg-card` | `#ffffff` | `rgb(255, 255, 255)` | Fondo blanco de tarjetas, banners y formularios |
| 🌫️ **Subtle Surface** | `--bg-subtle` | `#f1f5f9` | `rgb(241, 245, 249)` | Fondos de inputs, cajas de metadatos (Slate 100) |
| 🔘 **Border Subtle** | `--border-subtle` | `#e2e8f0` | `rgb(226, 232, 240)` | Borde perimetral limpio y neutro de tarjetas (Slate 200) |
| 🔘 **Border Medium** | `--border-medium` | `#cbd5e1` | `rgb(203, 213, 225)` | Borde de tarjetas en estado `:hover` (Slate 300) |
| ⚫ **Text Main** | `--text-main` | `#0f172a` | `rgb(15, 23, 42)` | Títulos y texto de máximo contraste (Slate 900) |
| 🔘 **Text Muted** | `--text-muted` | `#475569` | `rgb(71, 85, 105)` | Párrafos descriptivos y subtítulos (Slate 600) |
| ⚪ **Text Light** | `--text-light` | `#94a3b8` | `rgb(148, 163, 184)` | Metadatos secundarios e iconos neutros (Slate 400) |

### Colores de Badges por Categoría

| Categoría | Color Texto (HEX) | Fondo Suave (HEX) | Borde (HEX) |
| :--- | :--- | :--- | :--- |
| **Arquitectura** | `#4338ca` | `#eef2ff` | `#c7d2fe` |
| **Diseño Industrial** | `#0369a1` | `#e0f2fe` | `#bae6fd` |
| **Diseño Gráfico** | `#6d28d9` | `#f5f3ff` | `#ddd6fe` |
| **Estética** | `#b45309` | `#fef3c7` | `#fde68a` |
| **Tipografía** | `#be123c` | `#ffe4e6` | `#fecdd3` |

---

## 🔤 Tipografía

- **Familia Tipográfica:** [`Plus Jakarta Sans`](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (Google Fonts).
- **Pila de Fallback (CSS):** `'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;`
- **Importación HTML:**
  ```html
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap">
  ```
- **Importación CSS:**
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
  ```

### Escala y Jerarquía Tipográfica

| Nivel | Tamaño | Peso (`font-weight`) | Line-Height | Uso Principal |
| :--- | :--- | :--- | :--- | :--- |
| **H1 (Hero)** | `1.95rem` (31px) | `800` (ExtraBold) | `1.25` | Títulos principales de página / banners |
| **H2 (Sección)** | `1.30rem` (21px) | `700` (Bold) | `1.3` | Encabezados de sección y formularios |
| **H3 (Tarjeta)** | `1.15rem` (18px) | `700` (Bold) | `1.35` | Título del libro en tarjetas |
| **Body (Párrafos)** | `0.92rem - 0.95rem` (15px) | `400` (Regular) / `500` (Medium) | `1.6` | Resumen, descripciones y contenido |
| **Subtítulos** | `1.02rem` (16px) | `400` (Regular) | `1.5` | Subtítulo explicativo bajo H1 |
| **Badges / Tags** | `0.76rem - 0.78rem` (12px) | `700` (Bold) | `1.0` | Píldoras de categoría (uppercase) |
| **Metadatos** | `0.82rem - 0.85rem` (13px) | `600` (SemiBold) | `1.4` | Páginas, año, editorial, ISBN |

---

## 📦 Librerías Utilizadas

### 1. [Lucide Icons](https://lucide.dev) (Librería de Iconos Vectoriales)
Librería de iconos vectoriales SVG limpios y modernos.

- **Integración vía CDN:**
  ```html
  <script src="https://unpkg.com/lucide@latest"></script>
  ```
- **Uso en HTML:**
  ```html
  <i data-lucide="book-open"></i>
  <i data-lucide="star"></i>
  <i data-lucide="search"></i>
  ```
- **Inicialización con JavaScript:**
  ```javascript
  lucide.createIcons();
  ```

### 2. [Google Fonts CDN](https://fonts.google.com)
Provee los archivos de fuentes optimizados en formatos `woff2` para la familia tipográfica `Plus Jakarta Sans`.

---

## 🏛️ Vistas de la Aplicación

1. **`index.html` (Inicio):**
   - Resumen del repositorio con métricas de la colección.
   - Selección de publicaciones destacadas.

2. **`catalogo.html` (Catálogo):**
   - Catálogo completo de publicaciones.
   - Filtrado en tiempo real por búsqueda de texto y por categoría temática.

3. **`contacto.html` (Contacto):**
   - Información de atención y canales de consulta.
   - Formulario de contacto directo.
