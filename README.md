# Hola Mundo — Landing Page

Proyecto tecno-pedagógico para niñas, niños y jóvenes de 13 a 18 años.

## Estructura del proyecto

```
holamundo-site/
├── index.html          ← Página principal
├── assets/
│   ├── css/
│   │   └── styles.css  ← Todos los estilos
│   ├── js/
│   │   └── main.js     ← Clock, scroll suave, formulario
│   └── img/            ← SVGs y recursos gráficos
└── README.md
```

## Deploy en GitHub Pages

1. Crear un repositorio en GitHub (ej: `holamundo-page`)
2. Subir todos los archivos de esta carpeta
3. Ir a **Settings → Pages**
4. En **Source**, seleccionar la rama `main` y carpeta `/ (root)`
5. Guardar — la URL será: `https://TU_USUARIO.github.io/holamundo-page/`

## Desarrollo local

Abrir `index.html` directamente en el navegador, o usar un servidor local:

```bash
# Con Python
python3 -m http.server 3000

# Con Node.js (npx)
npx serve .
```

## Paleta de colores

| Variable    | Hex       | Uso                        |
|-------------|-----------|----------------------------|
| `--blue`    | `#2326F7` | Fondo principal, acentos   |
| `--yellow`  | `#FAD627` | Botones, keys del logo     |
| `--dark`    | `#00001C` | Texto, bordes              |
| `--green`   | `#40D36D` | Acento tecla, chips activos|
| `--pink`    | `#F63A97` | Acento secundario, errores |

## Tecnologías

- HTML5 semántico
- CSS3 con variables custom (sin frameworks)
- Vanilla JavaScript (~50 líneas)
- Google Fonts: Space Grotesk + JetBrains Mono

Sin dependencias externas — carga rápida, compatible con todos los navegadores modernos.
