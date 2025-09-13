# 📌 Frontend - Gestión de Deudas entre Amigos

Este proyecto implementa un **frontend en Angular** para consumir la API de gestión de deudas.  
La aplicación cuenta con una **UI moderna, minimalista y responsiva**, organizada siguiendo buenas prácticas de arquitectura en Angular.  

---

## 🚀 Funcionalidades

- **Pantalla de Login/Registro**
- **Pantalla de listado de deudas con filtros** (todas, pendientes, pagadas)
- **Formulario para crear o editar una deuda**
- **Vista de detalle de deuda** (marcar como pagada, editar, eliminar)
- **Logout** con limpieza de sesión y redirección al login
- **Arquitectura modular** siguiendo buenas prácticas (core, features, shared)

---

## 🛠️ Tecnologías usadas

- Angular 16+
- RxJS
- SCSS (estilos modernos y responsivos)
- JWT con interceptor HTTP
- Guards de autenticación
- Reactive Forms para validaciones

---

## ⚙️ Instalación y configuración

### 1️⃣ Instalar dependencias
```bash
npm install
2️⃣ Configurar entorno
Editar el archivo src/environments/environment.ts:

ts
Copiar código
export const environment = {
  production: false,
  apiUrl: 'http://localhost:4000'
};
3️⃣ Iniciar la aplicación
bash
Copiar código
ng serve
4️⃣ Acceder en navegador
👉 http://localhost:4200

📂 Estructura del proyecto
bash
Copiar código
src/app/
 ├── core/             # Interceptors, guards, servicios
 │    ├── interceptors/auth.interceptor.ts
 │    ├── guards/auth.guard.ts
 │    └── services/{auth.service.ts, debt.service.ts, api.service.ts}
 ├── features/
 │    ├── auth/        # Login y Registro
 │    │    ├── login/
 │    │    └── register/
 │    └── debts/       # Módulo de deudas
 │         ├── debt-list/
 │         ├── debt-detail/
 │         └── debt-form/
 ├── shared/           # Modelos y componentes compartidos
 │    └── models/{user.model.ts, debt.model.ts}
 └── app-routing.module.ts   # Rutas principales
✅ Flujo de uso
Registro/Login → Usuario obtiene un token JWT desde el backend.

El token se guarda en localStorage.

El AuthInterceptor añade el token automáticamente en cada request.

Usuario accede al listado de deudas:

Ver todas, pendientes o pagadas.

Crear nueva deuda.

Consultar detalle → marcar como pagada, editar o eliminar.

Logout → limpia el token y redirige a la pantalla de login.

🎨 UI
Estilos minimalistas y responsivos con SCSS.

Diseño pensado en mobile-first pero adaptable a escritorio.

Botones y formularios consistentes en toda la aplicación.

🔑 Rutas principales
/login → Iniciar sesión

/register → Registro de usuario

/debts → Listado de deudas

/debts/new → Crear nueva deuda

/debts/:id → Detalle de deuda

/debts/:id/edit → Editar deuda