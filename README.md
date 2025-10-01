# 🚀 TalentoLab - Portfolio Julieta Cosentino

## Portfolio QA: De Pruebas Manuales a Automatización (Cypress/JS)

Este repositorio contiene la **evidencia QA integral** para la Web de prueba **Talentolab** (enlace: https://talentolab-test.netlify.app/).

El proyecto demuestra mi capacidad para abordar un ciclo completo de QA, desde la documentación funcional y el diseño de casos de prueba manuales, hasta la implementación de soluciones de automatización E2E con foco en la mantenibilidad.

---

## 🛡️ Ética y Alcance del Testing

Este proyecto se realiza en un **entorno exclusivamente educativo** con fines de desarrollo de portfolio QA.

* **Alcance:** El testing se limita a la funcionalidad pública de la aplicación.
* **Privacidad:** No se han utilizado ni comprometido datos sensibles, información personal o credenciales reales de usuarios.

---

## 🎯 Demostración de Competencias Clave

* **Fundamentos de QA:** Capacidad para elaborar documentación funcional (Historias de Usuario, Casos de Prueba, Reportes de Defectos).
* **Diseño de Pruebas:** Implementación de casos de prueba positivos y negativos.
* **Automatización E2E:** Desarrollo de pruebas de extremo a extremo utilizando **Cypress** con **JavaScript**.
  
## 📂 Contenido del Repositorio

1. 01_Documentacion_Manual
Esta carpeta contiene los documentos base del proyecto y los entregables de QA:

Documento	Contenido Principal
Requerimientos.pdf	Documento que detalla las Épicas (Contacto y Registro), las Features (F1 a F4), Historias de Usuario (US), Criterios de Aceptación (CA), Requisitos Funcionales (RF), Requisitos No Funcionales (RNF), manejo de error (ME) para cada historia de usuario y priorización de cada elemento (Alta y Media).

Casos de prueba.pdf	Matriz de Casos de Prueba (CP) con trazabilidad a los requerimientos (ej: US-1 F1., US-2 F3.). La matriz incluye los pasos detallados, el Resultado Esperado y el Estado de Ejecución de cada prueba (Pasó/Falló).

Reporte_Primer_Bug.md	Reporte de un bug de Severidad Mayor y Prioridad Alta. Documenta el fallo en el formulario de Contacto, donde la aplicación expone un error de código sin procesar en la interfaz.
Reporte_Segundo_Bug.md	Reporte de un bug de Severidad Crítica y Prioridad Crítica. Detalla la violación a la seguridad (US-3) por la omisión de validación de contraseña, permitiendo el registro con credenciales débiles.

2. 02_Evidencia_Bugs
   
Esta carpeta contiene todo el material de soporte para la documentación de los fallos:

Evidencia en Video: Enlaces directos a los videos de Vimeo que demuestran la reproducción paso a paso de los dos bugs reportados.

Capturas de Pantalla: Archivos de imagen incrustados en los reportes de Markdown que muestran la evidencia estática de los fallos.

---
## ⚡ Instrucciones de ejecución

1. Clonar el Repositorio:
   git clone https://github.com/jcn025/Portfolio-QA-Manual-Automation.git
2. Instalar Dependencias:
   npm install
3. Ejecutar Pruebas E2E (Terminal):
   
   npx cypress run --spec "cypress/e2e/US-2 F4.-test.cy.js"
   
   npx cypress run --spec "HU-2 CA2 RF2.cy.js"


---





