# 🚀 Guía de Despliegue de Frontend en Vercel

Esta guía detalla paso a paso cómo desplegar un frontend (Angular) en Vercel y conectarlo con su backend.

---

## 1. Registro y Vinculación
Lo primero es iniciar sesión en [Vercel](https://vercel.com/). Seleccioná la opción **Continue with GitHub**.

![Login Vercel](https://github.com/user-attachments/assets/254985d1-5349-4464-82e1-699ef03067f5)

Es probable que te pida autorización para acceder a tus repositorios. Confirmá la conexión.

![Autorizar GitHub](https://github.com/user-attachments/assets/f6cea1a5-0705-4e41-a4b4-cdc37a030639)

---

## 2. Crear Nuevo Proyecto
Una vez dentro del dashboard de Vercel, andá al botón **Add New...** y seleccioná **Project**.

![Crear Proyecto](https://github.com/user-attachments/assets/a23ddf21-14b6-4c18-9830-175cc3b7c156)

---

## 3. Importar Repositorio
Buscá en la lista el repositorio donde tenés guardado tu código y hacé clic en **Import**.

![Elegir Repositorio](https://github.com/user-attachments/assets/c38c3868-9ba5-4ed2-b002-f86383f022bf)

---

## 4. Configurar Directorio Raíz (Root Directory)
**⚠️ Paso Importante:** Si tu proyecto no está en la raíz del repositorio (por ejemplo, tenés una carpeta `backend` y otra `client`), tenés que editar el **Root Directory**.

Hacé clic en **Edit** y seleccioná la carpeta de tu frontend (ej: `client`).

![Root Directory](https://github.com/user-attachments/assets/c297a28c-68ed-48ad-a81e-06f110d984df)

---

## 5. Configurar la Salida (Output Directory)
Vercel necesita saber dónde guarda Angular los archivos compilados.

1.  En tu editor (VS Code), corré el comando `ng build` para generar la carpeta de distribución.
    ![Comando Build](https://github.com/user-attachments/assets/e91950d5-211f-499f-bef9-1c8bc8c9227e)

2.  Observá la estructura que se generó dentro de la carpeta `dist`. Generalmente es `dist/nombre-proyecto/browser`.
    ![Estructura Dist](https://github.com/user-attachments/assets/c756ba5c-9347-4028-a9c6-717a7f20f0cd)

3.  Hacé clic derecho en la carpeta `browser` y seleccioná **Copiar ruta de acceso relativa** (Copy Relative Path).
    ![Copiar Ruta](https://github.com/user-attachments/assets/9a01aecf-89cc-457f-a271-0cffb1dac7c7)

4.  Volvé a Vercel, en la sección **Build and Output Settings**. Activá la opción **Output Directory** y pegá la ruta que copiaste (ej: `dist/client/browser`).
    ![Configurar Output](https://github.com/user-attachments/assets/43302df7-18ef-4f67-9cb0-aaa4b5df6d63)

---

## 6. Variables de Entorno
Para que tu frontend se pueda comunicar con el backend que subiste a Render, necesitás configurar la URL de la API.

Desplegá la sección **Environment Variables**:
* **Key:** El nombre de la variable que usás en tu `environment.ts` (ej: `apiUrl`).
* **Value:** La URL de tu backend en Render (ej: `https://tu-deploy.onrender.com`).

![Variables de Entorno](https://github.com/user-attachments/assets/0357f971-535b-4329-a80d-18259e746530)

---

## 7. Despliegue Final y URLs

Hacé clic en **Deploy**. Vercel comenzará a construir tu aplicación. Si todo sale bien, verás la pantalla del **Production Deployment** con el **Status** en **Ready**.

![Dashboard Final Vercel](https://github.com/user-attachments/assets/8c3c2ce3-a5a5-4d69-89a8-709ac9074d4e)

### 📌 Diferencia de URLs

En la sección **Domains**, verás dos tipos de URL:

| Tipo de URL | Ejemplo (Línea superior) | Descripción |
| :--- | :--- | :--- |
| **Dinámica** | `prueba-deploy-uq3b-98tsmpof7-nataladiez-projects.vercel.app` | Es la URL **específica** de esta versión del *deployment*. Cambia con cada nuevo *commit* que se sube al repositorio. Útil para verificar cambios específicos. |
| **Estática/Principal** | `prueba-deploy-uq3b.vercel.app` | Es la URL **permanente** y la que debés usar para acceder a tu proyecto de forma habitual. Siempre apunta al último *deployment* exitoso. |
