# 🚀 Guía de Despliegue de Backend en Render

Esta guía detalla paso a paso cómo desplegar un backend de Node.js en Render y cómo vincularlo posteriormente con un frontend (Angular).

---

## 1. Registro y Conexión
Lo primero es registrarse en [Render](https://render.com/) utilizando **GitHub**. Esto es fundamental para poder elegir el repositorio donde está alojado el backend.

![Registro Render](https://github.com/user-attachments/assets/58cb4ebc-c316-4fa5-ae4b-5905a073ce2f)

---

## 2. Crear el Servicio
Una vez en el dashboard, hacé clic en el botón **+ New** y elegí la opción **Web Service**.

![Crear Web Service](https://github.com/user-attachments/assets/92596b7b-e8e8-452b-affe-3716a2e9f614)

---

## 3. Seleccionar Repositorio
Elegí el repositorio de GitHub donde se encuentra el código de tu backend.

![Seleccionar Repo](https://github.com/user-attachments/assets/000116b0-90a1-43ec-8e17-3a0006352465)

---

## 4. Configuración del Deploy
Esta es la parte más importante. Completá los campos de la siguiente manera:

* **Name:** El nombre que quieras darle a tu deploy.
* **Language:** Node.
* **Branch:** La rama de github (master, main, etc).
* **Root Directory:** El nombre de la carpeta donde está tu backend (si está en la raíz, dejalo vacío o poné `./`).
* **Build Command:** `npm install && npm run build`
* **Start Command:** `npm run start` o `npm run start:prod` (⚠️ *Verificar que este comando exista en tu `package.json`*).

![Configuración](https://github.com/user-attachments/assets/3eb386f7-e83b-4426-8279-988a11244cd5)

---

## 5. Plan y Variables de Entorno
* Elegí el plan **Free**.
* **Environment Variables:** Podés agregar las variables una por una (Key/Value) o usar la opción **"Add from .env"** para pegar todo el contenido de tu archivo local.

![Variables de entorno](https://github.com/user-attachments/assets/e522d808-bf59-4c9d-abed-80f561a62e68)

---

## 6. Confirmación de Éxito
Si la configuración es correcta, verás los logs corriendo. Al finalizar, debería aparecer el mensaje: **Build successful 🎉**.

![Build Successful](https://github.com/user-attachments/assets/4a7cbe70-687f-4764-9e07-8602bda71134)

---

## 7. Obtener URL del Backend
Arriba a la izquierda, debajo del nombre de tu servicio, encontrarás la URL pública de tu backend desplegado.

!https://www.merriam-webster.com/dictionary/deploy(https://github.com/user-attachments/assets/c2e33317-90fb-4f0f-8cac-e64c50643bbb)

---

## 8. Integración con Frontend (Angular)
Ahora debés actualizar tu frontend para que apunte al nuevo backend.

1.  Andá al archivo `environment.ts` (o generalo con `ng generate environments`).
2.  Donde tenías la `ApiURL` como `localhost:3000`, reemplazala por la URL que te dio Render.

![Environment Frontend](https://github.com/user-attachments/assets/0820d18b-5478-42b6-b627-9f54c02545b7)

---

## 9. Actualizar Servicios
Asegurate de que todos tus servicios estén llamando a la variable de entorno.
* **Antes:** `//localhost:3000/saludar`
* **Ahora:** `https://tu-proyecto.onrender.com/saludar`

![Servicios Angular](https://github.com/user-attachments/assets/759d09ff-fc82-4974-9db6-8141466a95f5)

---

## 10. Modificaciones Posteriores
* Si necesitás cambiar algo de la configuración, andá a la pestaña **Settings**.
* Si necesitás agregar o editar claves secretas, andá a la pestaña **Environment**.

![Settings](https://github.com/user-attachments/assets/42cb997b-a2c6-4e96-b40e-1729740c8f2c)

---

## ⚠️ Solución de Problemas Comunes

### Error: "Cannot find package.json"
Si el deploy falla inmediatamente diciendo que no encuentra el archivo, revisá la estructura de carpetas de tu repositorio.

![Error Package Json](https://github.com/user-attachments/assets/7db54dbd-1a93-4ff9-8294-cf52c3633958)

**Estructura correcta de ejemplo:**
Asegurate de que el `Root Directory` configurado en el paso 4 coincida con la carpeta donde está el `package.json`.

![Estructura 1](https://github.com/user-attachments/assets/5d02b843-94cd-46f9-8e06-32dd3e687849)
![Estructura 2](https://github.com/user-attachments/assets/50941ed0-3269-4ef3-9007-e189ff5a9790)
