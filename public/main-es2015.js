(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-login></app-login> -->\n<section class=\"container\">\n    <app-header></app-header>\n\n    <app-nav-bar> </app-nav-bar>\n\n\n\n    <router-outlet></router-outlet>\n\n    <app-footer> </app-footer>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>home works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/link-companies/link-companies.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/link-companies/link-companies.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>link-companies works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/management-vacancies/management-vacancies.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/management-vacancies/management-vacancies.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"containerview\">\n    <article class=\"container-form\">\n        <form>\n            <span class=\"inner-addon left-addon\">\n                <i class=\"fas fa-search\"></i>\n                <input type=\"text\" placeholder=\"Buscar empleo\" />\n            </span>\n\n            <span class=\"inner-addon left-addon\">\n                    <i class=\"fas fa-map-marker-alt\"></i>\n                <input type=\"text\" placeholder=\"Ingresar ubicacion\"/>\n            </span>\n\n\n            <select required>\n                <option value=\"\" disabled selected hidden>Estado</option>\n                <option *ngFor=\"let state of status\" [ngValue]=\"state\">{{state}}</option>\n            </select>\n\n        </form>\n\n        <div class=\"headerview\">\n            <h1>Solicitud de avisos</h1>\n            <div class=\"subHeaderView\">\n                <p>Mas recientes</p>\n                <img src=\"../../../assets/img/flecha.png\" alt=\"\">\n                <img src=\"../../../assets/img/Filas.png\" alt=\"\">\n                <img src=\"../../../assets/img/Vector.png\" alt=\"\">\n            </div>\n\n        </div>\n    </article>\n\n\n    <table class=\"containervacanciestitles\">\n        <thead>\n            <tr class=\"titles\">\n                <th class=\"one\">Titulo <img src=\"../../../assets/img/flecha.png\" alt=\"\"></th>\n                <th>Estado <img src=\"../../../assets/img/flechablack.png\" alt=\"\"> </th>\n                <th>Publicado <img src=\"../../../assets/img/flechablack.png\" alt=\"\"></th>\n                <th>Jornada <img src=\"../../../assets/img/flechablack.png\" alt=\"\"></th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr class=\"titles\" *ngFor=\"let vacant of vacancies\">\n                <td class=\"containerOne\">\n                    <div class=\"subcontainerOne\">\n                        <div><img src=\"../../../assets/img/image.png\"></div>\n                        <div>\n                            <p>{{vacant.jobName}}</p>\n                            <p class=\"sub-title\"> {{vacant.business}}</p>\n                        </div>\n                    </div>\n                </td>\n                <td class=\"Containertwo\">\n                    <div class=\"subContainertwo\">\n                        <div class=\"subbContainertwo\">\n                            <img src=\"../../../assets/img/starVector.png\" alt=\"\">\n                            <button [ngClass]=\"{'btnrejected': vacant.status == 'Rechazado' , 'btnapproved':vacant.status != 'Rechazado' }\">{{vacant.status}}</button>\n                        </div>\n                    </div>\n                </td>\n                <td class=\"container-three\">\n\n                    <div class=\"subcontainer-three\">\n                        <img src=\"../../../assets/img/reloj.png\" alt=\"\"> {{vacant.startDate}}\n                    </div>\n                    <p class=\"sub-title\">Publicado</p>\n\n                </td>\n                <td class=\"container-four\">\n                    <div class=\"subcontainer-four\">\n                        <img src=\"../../../assets/img/maletin.png\" alt=\"\"> {{vacant.workDay}}\n                    </div>\n                    <p class=\"sub-title\">Jornada</p>\n                </td>\n            </tr>\n        </tbody>\n    </table>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/postulants/postulants.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/postulants/postulants.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>postulants works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/profile/profile-cont/profile-cont.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/profile/profile-cont/profile-cont.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ContainerInstitution\">\n  <h2>Perfil Institución</h2>\n  <div class=\"institutionData\">\n\n    <div class=\"fileinfo2\">\n      <label>Pagina Web</label>\n      <input type='text' />\n    </div>\n    <div class=\"fileinfo1\">\n      <label>Teléfono</label>\n      <input type='text' />\n      <input type='text' />\n      <label>Teléfono Adicional (Opcional)</label>\n      <input type='text' />\n      <input type='text' />\n    </div>\n\n    <div class=\"fileinfo2\">\n      <label>Pagina Web</label>\n      <input type='text' />\n    </div>\n    <div>\n      <label>Facebook</label>\n      <input type='text' />\n      <label>Linkedin</label>\n      <input type='text' />\n    </div>\n    <div>\n      <label>Youtube</label>\n      <input type=\"text\" />\n      <label>Twitter</label>\n      <input type='text' />\n    </div>\n  </div>\n\n  <div ><button class=\"btnColor\">Terminar</button><button class=\"btnColor\">Atrás</button></div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/profile/profile.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/profile/profile.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"containerInstitutionProfile col-9\">\n\n        <section class=\"title\">\n          <h2>Perfil Institución</h2>\n          \n        </section>\n    \n  <div class=\"contDatos\">\n      <section class=\"imgPerfilInst\">\n            <div class=\"logo\">\n            <img href='' alt=''>\n            <h2 class=\"titleimgPerfilInst\">Sube tu logo</h2>\n            <p class=\"textimgPerfilInst\">Esta foto aparecerá en tu perfil. Debe medir 235px x 65px</p>\n          </div>\n            <div class=\"color\">\n            <img href='' alt=''>\n            <h2 class=\"titleimgPerfilInst\">Escoge color</h2>\n            <p class=\"textimgPerfilInst\">Se sugiere que sea el color corporativo </p>\n          </div>\n            <div class=\"inicio\">\n            <img href='' alt=''>\n            <h2 class=\"titleimgPerfilInst\">Sube tu foto de inicio</h2>\n            <p class=\"textimgPerfilInst\">Esta foto aparecerá en tu login de bolsa de trabajo. Debe medir 975px x 720px</p>\n            </div>\n          </section>\n        <div class=\"modification\"> \n          <img href='' alt=''>\n        </div>\n    \n          <div class=\"institutionData\">\n          \n            <img href='' alt=''>\n            <h2 class=\"subtitle\">Datos Institución </h2>\n            <form [formGroup]=\"form\" (ngSubmit)=\"save($event)\">\n            <section class=\"fileinfo1\">\n              <section class=\"fileinfo1-1\">\n                <p>Nombre de la Institución</p> \n                <input class=\"input-text\" type=\"text\" formControlName=\"name\"/>\n              </section>\n              <section class=\"fileinfo1-2\">\n                <p>Razón Social</p> \n                <input class=\"input-text\" type='text'formControlName=\"businessName\" />\n              </section>\n            </section>\n    \n            <section class=\"fileinfo2\">\n              <section class=\"fileinfo2-1\">\n                <p>Dirección</p>\n                <input class=\"input-text\" type='text' formControlName=\"address\" />\n              </section>\n              <section class=\"fileinfo2-2\"> \n                <p>Ciudad</p>\n                <input  class=\"input-text\" type='text' formControlName=\"city\"/>\n              </section>  \n              <section class=\"fileinfo2-3\">\n                <p>País</p>\n                <input class=\"input-text\" type='text'formControlName=\"country\"/>\n              </section>  \n            </section>\n    \n            <section class=\"fileinfo3\">\n              <section class=\"fileinfo3-1\">\n                <p>Fecha de Registro (No editable)</p>\n                <input class=\"input-date\" type='date' formControlName=\"registrationDate\"/>\n              </section>\n              <section class=\"fileinfo3-2\">\n                <p>Última modificación (No editable)</p>\n                <input class=\"input-date\" type='date' formControlName=\"lastModificationDate\"/>\n              </section>\n            </section>\n            \n            <div class=\"container-info\">\n            <section class =\"description\">\n              <p>Breve descripción de la Institución</p>\n              <textarea class=\"input-textarea\" type='textarea' formControlName=\"description\"></textarea>\n            </section>\n            <section class=\"cont-analitics\">\n              <section class=\"google\">\n                <p>Google Analytics</p>\n                <input class=\"input-text\" type='text' formControlName=\"analytics\">\n              </section>\n    \n     \n            </section>\n            </div>\n            <section class=\"buttonpag\">\n              <button class=\"btn-atras\">Atrás</button>\n              <button class=\"btn-next\" type=\"Submit\" >Siguiente</button>\n            </section>\n          </form>\n          <div class=\"count\"> \n              <section class=\"counter\">\n                <p class=\"num\">0</p>\n                <p class=\"textcount\">Avisos</p>\n              </section>  \n              <section class=\"counter\"> \n                <p class=\"num\">0</p>\n                <p class=\"textcount\">Vínculos</p>\n              </section>   \n              <section class=\"counter\">\n                <p class=\"num\">0</p>\n                <p class=\"textcount\">Postulantes</p> \n                </section>  \n              </div>\n          </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/shared/footer/footer.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/shared/footer/footer.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"container_footer col-9\">\n    <div class=\"text_footer\">\n        <p>©2020 Powered by Hiring Room, todos los derechos reservados.</p>\n    </div>\n    <div class=\"icons_footer\">\n        <img class=\"icon-footer\" src=\"../../../../assets/img/facebook.png\" alt=\"\">\n        <img class=\"icon-footer\" src=\"../../../../assets/img/linkendi.png\" alt=\"\">\n        <img class=\"icon-footer\" src=\"../../../../assets/img/google.png\" alt=\"\">\n    </div>\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/shared/header/header.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/shared/header/header.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"col-12\">\n    <div class=\"col-1 logoContainer\">\n        <img src=\"../../../../assets/img/logo.png\" alt=\"logo\" class=\"logo\" />\n    </div>\n    <nav class=\"col-12 navigation\">\n        <input type=\"search\" placeholder=\"Buscar\" class=\"search\" />\n        <button class=\"btnSearch\">\n        <img src=\"../../../../assets/img/lupa.png\" alt=\"lupa\" class=\"icon\" />\n      </button>\n        <button class=\"btnCircle\">\n        <img src=\"../../../../assets/img/Aa.png\" alt=\"accesibilidad\" class=\"icon\" />\n      </button>\n        <button class=\"btnCircle\">\n        <img src=\"../../../../assets/img/notificacion01.png\" alt=\"notificacion\" class=\"icon\" />\n      </button>\n        <div class=\"imgCircle\">\n            <img src=\"../../../../assets/img/foto.png\" alt=\"fotoPerfil\" class=\"icon\" />\n        </div>\n        <div class=\"profile\">\n            <h3>Julieta Salgado</h3>\n            <h4>julietasalgado@gmail.com</h4>\n        </div>\n        <button class=\"btnTransparent\">\n        <img src=\"../../../../assets/img/flechaAbajo.png\" alt=\"flecha\" class=\"icon\" />\n      </button>\n    </nav>\n\n</header>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/shared/nav-bar/nav-bar.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/shared/nav-bar/nav-bar.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n    <div class=\"sidebar col-3\">\n        <nav>\n\n            <ul>\n                <li>\n                    <a [routerLink]=\"['/home']\">\n                        <svg id=\"star\" class=\"star-icon\" width=\"14\" height=\"13\" viewBox=\"0 0 14 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M13.4999 4.52023L9.36976 3.93543L7.52487 0.291391C7.47123 0.202653 7.39475 0.129094 7.30299 0.077988C7.21123 0.0268822 7.10737 0 7.00167 0C6.89598 0 6.79212 0.0268822 6.70036 0.077988C6.6086 0.129094 6.53212 0.202653 6.47848 0.291391L4.63009 3.93543L0.499945 4.52023C0.392238 4.53538 0.291028 4.57958 0.207758 4.64785C0.124488 4.71611 0.0624786 4.80571 0.02874 4.90652C-0.00499854 5.00733 -0.0091204 5.11532 0.0168404 5.21829C0.0428012 5.32126 0.0978094 5.4151 0.175646 5.48921L3.16491 8.32738L2.45974 12.3357C2.44136 12.4402 2.45336 12.5477 2.49437 12.6459C2.53539 12.7441 2.60379 12.8292 2.69184 12.8915C2.77989 12.9538 2.88408 12.9909 2.99262 12.9985C3.10117 13.0062 3.20974 12.9841 3.30606 12.9347L6.99992 11.0428L10.6938 12.9347C10.7901 12.9841 10.8987 13.0062 11.0072 12.9985C11.1158 12.9909 11.22 12.9538 11.308 12.8915C11.3961 12.8292 11.4645 12.7441 11.5055 12.6459C11.5465 12.5477 11.5585 12.4402 11.5401 12.3357L10.8349 8.32738L13.8242 5.48921C13.902 5.41518 13.957 5.32143 13.9831 5.21854C14.0091 5.11565 14.0051 5.00773 13.9715 4.90695C13.9378 4.80617 13.876 4.71655 13.7929 4.64822C13.7098 4.57988 13.6087 4.53555 13.5011 4.52023H13.4999Z\" fill=\"#CEF8ED\" />\n                  </svg> Inicio\n                    </a>\n                </li>\n                <li>\n\n                    <a [routerLink]=\"['/profile']\">\n\n                        <svg id=\"star\" class=\"star-icon\" width=\"14\" height=\"13\" viewBox=\"0 0 14 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M13.4999 4.52023L9.36976 3.93543L7.52487 0.291391C7.47123 0.202653 7.39475 0.129094 7.30299 0.077988C7.21123 0.0268822 7.10737 0 7.00167 0C6.89598 0 6.79212 0.0268822 6.70036 0.077988C6.6086 0.129094 6.53212 0.202653 6.47848 0.291391L4.63009 3.93543L0.499945 4.52023C0.392238 4.53538 0.291028 4.57958 0.207758 4.64785C0.124488 4.71611 0.0624786 4.80571 0.02874 4.90652C-0.00499854 5.00733 -0.0091204 5.11532 0.0168404 5.21829C0.0428012 5.32126 0.0978094 5.4151 0.175646 5.48921L3.16491 8.32738L2.45974 12.3357C2.44136 12.4402 2.45336 12.5477 2.49437 12.6459C2.53539 12.7441 2.60379 12.8292 2.69184 12.8915C2.77989 12.9538 2.88408 12.9909 2.99262 12.9985C3.10117 13.0062 3.20974 12.9841 3.30606 12.9347L6.99992 11.0428L10.6938 12.9347C10.7901 12.9841 10.8987 13.0062 11.0072 12.9985C11.1158 12.9909 11.22 12.9538 11.308 12.8915C11.3961 12.8292 11.4645 12.7441 11.5055 12.6459C11.5465 12.5477 11.5585 12.4402 11.5401 12.3357L10.8349 8.32738L13.8242 5.48921C13.902 5.41518 13.957 5.32143 13.9831 5.21854C14.0091 5.11565 14.0051 5.00773 13.9715 4.90695C13.9378 4.80617 13.876 4.71655 13.7929 4.64822C13.7098 4.57988 13.6087 4.53555 13.5011 4.52023H13.4999Z\" fill=\"#CEF8ED\" />\n                  </svg> Perfil\n                    </a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/gestionavisos']\">\n                        <svg id=\"star\" class=\"star-icon\" width=\"14\" height=\"13\" viewBox=\"0 0 14 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M13.4999 4.52023L9.36976 3.93543L7.52487 0.291391C7.47123 0.202653 7.39475 0.129094 7.30299 0.077988C7.21123 0.0268822 7.10737 0 7.00167 0C6.89598 0 6.79212 0.0268822 6.70036 0.077988C6.6086 0.129094 6.53212 0.202653 6.47848 0.291391L4.63009 3.93543L0.499945 4.52023C0.392238 4.53538 0.291028 4.57958 0.207758 4.64785C0.124488 4.71611 0.0624786 4.80571 0.02874 4.90652C-0.00499854 5.00733 -0.0091204 5.11532 0.0168404 5.21829C0.0428012 5.32126 0.0978094 5.4151 0.175646 5.48921L3.16491 8.32738L2.45974 12.3357C2.44136 12.4402 2.45336 12.5477 2.49437 12.6459C2.53539 12.7441 2.60379 12.8292 2.69184 12.8915C2.77989 12.9538 2.88408 12.9909 2.99262 12.9985C3.10117 13.0062 3.20974 12.9841 3.30606 12.9347L6.99992 11.0428L10.6938 12.9347C10.7901 12.9841 10.8987 13.0062 11.0072 12.9985C11.1158 12.9909 11.22 12.9538 11.308 12.8915C11.3961 12.8292 11.4645 12.7441 11.5055 12.6459C11.5465 12.5477 11.5585 12.4402 11.5401 12.3357L10.8349 8.32738L13.8242 5.48921C13.902 5.41518 13.957 5.32143 13.9831 5.21854C14.0091 5.11565 14.0051 5.00773 13.9715 4.90695C13.9378 4.80617 13.876 4.71655 13.7929 4.64822C13.7098 4.57988 13.6087 4.53555 13.5011 4.52023H13.4999Z\" fill=\"#CEF8ED\" />\n                  </svg> Gestión de Avisos\n                    </a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/vinculacionempresa']\">\n                        <svg id=\"star\" class=\"star-icon\" width=\"14\" height=\"13\" viewBox=\"0 0 14 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M13.4999 4.52023L9.36976 3.93543L7.52487 0.291391C7.47123 0.202653 7.39475 0.129094 7.30299 0.077988C7.21123 0.0268822 7.10737 0 7.00167 0C6.89598 0 6.79212 0.0268822 6.70036 0.077988C6.6086 0.129094 6.53212 0.202653 6.47848 0.291391L4.63009 3.93543L0.499945 4.52023C0.392238 4.53538 0.291028 4.57958 0.207758 4.64785C0.124488 4.71611 0.0624786 4.80571 0.02874 4.90652C-0.00499854 5.00733 -0.0091204 5.11532 0.0168404 5.21829C0.0428012 5.32126 0.0978094 5.4151 0.175646 5.48921L3.16491 8.32738L2.45974 12.3357C2.44136 12.4402 2.45336 12.5477 2.49437 12.6459C2.53539 12.7441 2.60379 12.8292 2.69184 12.8915C2.77989 12.9538 2.88408 12.9909 2.99262 12.9985C3.10117 13.0062 3.20974 12.9841 3.30606 12.9347L6.99992 11.0428L10.6938 12.9347C10.7901 12.9841 10.8987 13.0062 11.0072 12.9985C11.1158 12.9909 11.22 12.9538 11.308 12.8915C11.3961 12.8292 11.4645 12.7441 11.5055 12.6459C11.5465 12.5477 11.5585 12.4402 11.5401 12.3357L10.8349 8.32738L13.8242 5.48921C13.902 5.41518 13.957 5.32143 13.9831 5.21854C14.0091 5.11565 14.0051 5.00773 13.9715 4.90695C13.9378 4.80617 13.876 4.71655 13.7929 4.64822C13.7098 4.57988 13.6087 4.53555 13.5011 4.52023H13.4999Z\" fill=\"#CEF8ED\" />\n                  </svg> Vinculación de Empresas\n                    </a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/postulantes']\">\n                        <svg id=\"star\" class=\"star-icon\" width=\"14\" height=\"13\" viewBox=\"0 0 14 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M13.4999 4.52023L9.36976 3.93543L7.52487 0.291391C7.47123 0.202653 7.39475 0.129094 7.30299 0.077988C7.21123 0.0268822 7.10737 0 7.00167 0C6.89598 0 6.79212 0.0268822 6.70036 0.077988C6.6086 0.129094 6.53212 0.202653 6.47848 0.291391L4.63009 3.93543L0.499945 4.52023C0.392238 4.53538 0.291028 4.57958 0.207758 4.64785C0.124488 4.71611 0.0624786 4.80571 0.02874 4.90652C-0.00499854 5.00733 -0.0091204 5.11532 0.0168404 5.21829C0.0428012 5.32126 0.0978094 5.4151 0.175646 5.48921L3.16491 8.32738L2.45974 12.3357C2.44136 12.4402 2.45336 12.5477 2.49437 12.6459C2.53539 12.7441 2.60379 12.8292 2.69184 12.8915C2.77989 12.9538 2.88408 12.9909 2.99262 12.9985C3.10117 13.0062 3.20974 12.9841 3.30606 12.9347L6.99992 11.0428L10.6938 12.9347C10.7901 12.9841 10.8987 13.0062 11.0072 12.9985C11.1158 12.9909 11.22 12.9538 11.308 12.8915C11.3961 12.8292 11.4645 12.7441 11.5055 12.6459C11.5465 12.5477 11.5585 12.4402 11.5401 12.3357L10.8349 8.32738L13.8242 5.48921C13.902 5.41518 13.957 5.32143 13.9831 5.21854C14.0091 5.11565 14.0051 5.00773 13.9715 4.90695C13.9378 4.80617 13.876 4.71655 13.7929 4.64822C13.7098 4.57988 13.6087 4.53555 13.5011 4.52023H13.4999Z\" fill=\"#CEF8ED\" />\n                  </svg> Postulantes\n                    </a>\n                </li>\n            </ul>\n        </nav>\n    </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/user/login/login.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/user/login/login.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"login-container\">\n  <h3 class=\"login-h3\">Iniciar sesion</h3>\n <form [formGroup]=\"loginForm\">\n  <div class=\"form-group\">\n    <label for=\"email\">Correo</label>\n    <input type=\"text\" id=\"email\" placeholder=\"Email\" class=\"input-login\" formControlName=\"email\" />\n    <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert alert-success\">\n        <div *ngIf=\"email.errors.required\">\n          El email es requerido\n        </div>\n       </div>\n </div>\n\n  <div class=\"form-group\">\n    <label for=\"password\">Contraseña</label>\n    <input id=\"password\" type=\"password\" placeholder=\"Contraseña\" class=\"input-login\" formControlName=\"password\" />\n     <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"alert alert-success\">\n        <div *ngIf=\"password.errors.required\">\n          La contraseña es requerido\n        </div>\n  </div> \n</div>\n  <div class=\"section-6\">\n    <input type=\"checkbox\" class=\"form-check-input\"formControlName=\"remember\" class=\"rememberMe\">\n    <label class=\"h6\" for=\"promociones\">Recuerdame</label>\n    <h6 className=\"h6-1\"><a routerLink=\"./register\" class=\"link-login\">¿Olvidaste tu contraseña?</a></h6>\n  </div>\n  <div class=\"form-group\">\n      <button class=\"btn-login\" (click)=\"signIn()\" [disabled]=\"loginForm.invalid\">Iniciar sesion</button>\n  </div>\n</form>\n</div> \n\n  \n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/user/register/register.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/user/register/register.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n <form [formGroup]=\"registerForm\">\n    <h1>Conecta a tus postulante con las mejores ofertas </h1>\n    <h2>Registrarse</h2>\n     <div class=\"form-group\">\n       <label for=\"email\">Correo</label>\n       <input type=\"text\" id=\"email\" placeholder=\"Email\" class=\"form-control\" formControlName=\"email\" />       \n       <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert alert-success\">\n          <div *ngIf=\"email.errors.required\">\n            El email es requerido\n          </div>\n          <div *ngIf=\"email.errors.usernameUnico\">\n            Email ya está en uso\n          </div>\n         <div>\n     </div>\n    </div>\n      </div>\n     <div class=\"form-group\">\n       <label for=\"password\">Contraseña</label>\n       <input id=\"password\" type=\"password\" placeholder=\"Password\" class=\"form-control\" formControlName=\"password\" />\n       <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"alert alert-success\">\n          <div *ngIf=\"password.errors.required\">\n            La contraseña es requerido\n          </div>\n          <div *ngIf=\"password.errors.minlength\">\n            La longitud mínima de la contraseña es 4 caracteres\n          </div>\n    </div>\n      </div>\n   \n     <div class=\"form-group form-check\">\n      <input type=\"checkbox\" class=\"form-check-input\"formControlName=\"remember\">\n       <label class=\"form-check-label\" for=\"recordar\">Recuerdame</label>\n     </div>\n     <div class=\"form-group\">\n\n     <button class=\"btn btn-success\" (click)=\"createUser()\" [disabled]=\"registerForm.invalid\">Comenzar</button>\n     </div>\n     <div class=\"form-group\">\n         <p>¿Ya tienes cuenta?</p><a routerLink=\"/login\" class=\"form-control login-user\">Iniciar sesion</a>\n     </div>\n   </form>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_management_vacancies_management_vacancies_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/management-vacancies/management-vacancies.component */ "./src/app/components/management-vacancies/management-vacancies.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/user/login/login.component */ "./src/app/components/user/login/login.component.ts");
/* harmony import */ var _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/user/register/register.component */ "./src/app/components/user/register/register.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_link_companies_link_companies_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/link-companies/link-companies.component */ "./src/app/components/link-companies/link-companies.component.ts");
/* harmony import */ var _components_postulants_postulants_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/postulants/postulants.component */ "./src/app/components/postulants/postulants.component.ts");
/* harmony import */ var _components_profile_profile_cont_profile_cont_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/profile/profile-cont/profile-cont.component */ "./src/app/components/profile/profile-cont/profile-cont.component.ts");











const routes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"] },
    { path: 'login', component: _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'register', component: _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    { path: 'gestionavisos', component: _components_management_vacancies_management_vacancies_component__WEBPACK_IMPORTED_MODULE_3__["ManagementVacanciesComponent"] },
    { path: 'vinculacionempresa', component: _components_link_companies_link_companies_component__WEBPACK_IMPORTED_MODULE_8__["LinkCompaniesComponent"] },
    { path: 'postulantes', component: _components_postulants_postulants_component__WEBPACK_IMPORTED_MODULE_9__["PostulantsComponent"] },
    { path: 'profilecont', component: _components_profile_profile_cont_profile_cont_component__WEBPACK_IMPORTED_MODULE_10__["ProfileContComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-1 {\n    width: 8.33%;\n}\n\n.col-2 {\n    width: 16.66%;\n}\n\n.col-3 {\n    width: 25%;\n}\n\n.col-4 {\n    width: 33.33%;\n}\n\n.col-5 {\n    width: 41.66%;\n}\n\n.col-6 {\n    width: 50%;\n}\n\n.col-7 {\n    width: 58.33%;\n}\n\n.col-8 {\n    width: 66.66%;\n}\n\n.col-9 {\n    width: 75%;\n}\n\n.col-10 {\n    width: 83.33%;\n}\n\n.col-11 {\n    width: 91.66%;\n}\n\n.col-12 {\n    width: 100%;\n}\n\n.App {\n    background: #E5E5E5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbC0xIHtcbiAgICB3aWR0aDogOC4zMyU7XG59XG5cbi5jb2wtMiB7XG4gICAgd2lkdGg6IDE2LjY2JTtcbn1cblxuLmNvbC0zIHtcbiAgICB3aWR0aDogMjUlO1xufVxuXG4uY29sLTQge1xuICAgIHdpZHRoOiAzMy4zMyU7XG59XG5cbi5jb2wtNSB7XG4gICAgd2lkdGg6IDQxLjY2JTtcbn1cblxuLmNvbC02IHtcbiAgICB3aWR0aDogNTAlO1xufVxuXG4uY29sLTcge1xuICAgIHdpZHRoOiA1OC4zMyU7XG59XG5cbi5jb2wtOCB7XG4gICAgd2lkdGg6IDY2LjY2JTtcbn1cblxuLmNvbC05IHtcbiAgICB3aWR0aDogNzUlO1xufVxuXG4uY29sLTEwIHtcbiAgICB3aWR0aDogODMuMzMlO1xufVxuXG4uY29sLTExIHtcbiAgICB3aWR0aDogOTEuNjYlO1xufVxuXG4uY29sLTEyIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLkFwcCB7XG4gICAgYmFja2dyb3VuZDogI0U1RTVFNTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'laborum-Institucion';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/user/login/login.component */ "./src/app/components/user/login/login.component.ts");
/* harmony import */ var _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/user/register/register.component */ "./src/app/components/user/register/register.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_management_vacancies_management_vacancies_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/management-vacancies/management-vacancies.component */ "./src/app/components/management-vacancies/management-vacancies.component.ts");
/* harmony import */ var _components_link_companies_link_companies_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/link-companies/link-companies.component */ "./src/app/components/link-companies/link-companies.component.ts");
/* harmony import */ var _components_postulants_postulants_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/postulants/postulants.component */ "./src/app/components/postulants/postulants.component.ts");
/* harmony import */ var _components_shared_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/shared/nav-bar/nav-bar.component */ "./src/app/components/shared/nav-bar/nav-bar.component.ts");
/* harmony import */ var _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/shared/footer/footer.component */ "./src/app/components/shared/footer/footer.component.ts");
/* harmony import */ var _components_shared_header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/shared/header/header.component */ "./src/app/components/shared/header/header.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _components_profile_profile_cont_profile_cont_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/profile/profile-cont/profile-cont.component */ "./src/app/components/profile/profile-cont/profile-cont.component.ts");



/**** Formulario ****/

//servicio

//Rutas

//componentes











//Modulos de firebase





// environment config


let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
            _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
            _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"],
            _components_management_vacancies_management_vacancies_component__WEBPACK_IMPORTED_MODULE_11__["ManagementVacanciesComponent"],
            _components_link_companies_link_companies_component__WEBPACK_IMPORTED_MODULE_12__["LinkCompaniesComponent"],
            _components_postulants_postulants_component__WEBPACK_IMPORTED_MODULE_13__["PostulantsComponent"],
            _components_shared_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_14__["NavBarComponent"],
            _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
            _components_shared_header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"],
            _components_shared_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_14__["NavBarComponent"],
            _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
            _components_shared_header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"],
            _components_profile_profile_cont_profile_cont_component__WEBPACK_IMPORTED_MODULE_23__["ProfileContComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_17__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_22__["environment"].firebaseConfig),
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_18__["AngularFireDatabaseModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_20__["AngularFirestoreModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_21__["AngularFireStorageModule"] // Necesario para las funciones de almacenamiento de imagenes
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
        providers: [
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_19__["AngularFireAuth"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomeComponent);



/***/ }),

/***/ "./src/app/components/link-companies/link-companies.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/link-companies/link-companies.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGluay1jb21wYW5pZXMvbGluay1jb21wYW5pZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/link-companies/link-companies.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/link-companies/link-companies.component.ts ***!
  \***********************************************************************/
/*! exports provided: LinkCompaniesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkCompaniesComponent", function() { return LinkCompaniesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LinkCompaniesComponent = class LinkCompaniesComponent {
    constructor() { }
    ngOnInit() {
    }
};
LinkCompaniesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-link-companies',
        template: __webpack_require__(/*! raw-loader!./link-companies.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/link-companies/link-companies.component.html"),
        styles: [__webpack_require__(/*! ./link-companies.component.css */ "./src/app/components/link-companies/link-companies.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LinkCompaniesComponent);



/***/ }),

/***/ "./src/app/components/management-vacancies/management-vacancies.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/management-vacancies/management-vacancies.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n \n @import url('https://fonts.googleapis.com/css?family=Mada&display=swap'); /*Tipografia mada*/ .containerview {\n     width: 72%;\n     height: auto;\n     margin-left: 20em;\n } form {\n     width: 100%;\n     display: flex;\n     flex-direction: row;\n     justify-content: center;\n     align-content: center;\n } input {\n     border-radius: 5px;\n     border: solid 2px;\n     border-color: #00BCA0;\n     height: 2.3em;\n     margin: 1em 0.5em;\n } .inner-addon {\n     position: relative;\n } .inner-addon .fas {\n     position: absolute;\n     padding: 22px 13px;\n     pointer-events: none;\n } .left-addon .fas {\n     left: 0px;\n     color: #00BCA0;\n } .left-addon input {\n     padding-left: 30px;\n } select {\n     background: transparent;\n     border-radius: 5px;\n     border: solid 2px;\n     border-color: #00BCA0;\n     font-size: 14px;\n     height: 2.6em;\n     width: 15em;\n     margin-top: 1.1em;\n     margin-left: 0.5em;\n     -webkit-border-radius: 5px;\n     -moz-border-radius: 5px;\n     -ms-border-radius: 5px;\n     -o-border-radius: 5px;\n } .headerview {\n     width: 93%;\n     height: 30%;\n     display: flex;\n     flex-direction: row;\n     color: #00BCA0;\n     justify-content: space-between;\n     margin: 1em;\n } .headerview h1,\n p {\n     padding: 0;\n     margin: 0;\n     font-weight: bold;\n     font-size: 1.1em;\n } .subHeaderView {\n     font-family: 'Mada', sans-serif;\n     width: 25%;\n     display: flex;\n     flex-direction: row;\n     justify-content: space-between;\n } .subHeaderView img {\n     width: 15px;\n     height: 15px;\n } .containervacanciestitles {\n     width: 93%;\n     padding: 0.5em 0;\n } .titles {\n     font-family: 'Mada', sans-serif;\n     font-size: 1em;\n     display: flex;\n     flex-direction: row;\n     justify-content: space-around;\n     border-bottom: solid 1.5px rgb(199, 199, 199);\n     color: #1a1a1a;\n } .titles p {\n     margin-bottom: 0.7em;\n } .title {\n     width: 15%;\n     display: flex;\n     flex-direction: row;\n     justify-content: space-evenly;\n } .title img {\n     height: 20px;\n     width: 10px;\n } .one {\n     color: #00BCA0;\n } .subcontainerOne {\n     height: auto;\n     display: flex;\n     flex-direction: row;\n     margin: 0.5em;\n     font-family: 'Mada', sans-serif;\n     align-content: center;\n } .subcontainerOne img {\n     margin-right: 0.5em;\n } .subcontainerOne div p {\n     font-size: 1em;\n } .containerOne {\n     width: 25%;\n } .sub-title {\n     font-weight: 100;\n     font-size: xx-small;\n } /*Segundo bloque*/ .Containertwo {\n     width: 25%;\n     display: flex;\n     flex-direction: column;\n     align-items: center;\n } .subContainertwo {\n     width: 65%;\n     height: 70%;\n     align-items: center;\n     display: flex;\n     flex-direction: row;\n     margin: 0.5em;\n     font-family: 'Mada', sans-serif;\n     align-content: center;\n } .subbContainertwo {\n     width: 100%;\n     display: flex;\n     justify-content: space-between;\n } .subContainertwo img {\n     width: 20px;\n     height: 20px;\n } /*BOTONES */ .btnapproved {\n     font-family: Mada;\n     border: none;\n     color: #ffffff;\n     font-size: 1em;\n     padding: 0.5em 1.3em;\n     line-height: 16px;\n     text-align: center;\n     border-radius: 3px;\n     background: #00BCA0;\n     -webkit-border-radius: 3px;\n     -moz-border-radius: 3px;\n     -ms-border-radius: 3px;\n     -o-border-radius: 3px;\n } .btnrejected {\n     font-family: Mada;\n     border: none;\n     color: #ffffff;\n     font-size: 1em;\n     padding: 0.5em 1.1em;\n     line-height: 16px;\n     text-align: center;\n     border-radius: 3px;\n     background: #F7685B;\n     -webkit-border-radius: 3px;\n     -moz-border-radius: 3px;\n     -ms-border-radius: 3px;\n     -o-border-radius: 3px;\n } /*Tercer BLOQUE*/ .container-three {\n     width: 25%;\n     height: auto;\n     display: flex;\n     flex-direction: column;\n     align-items: center;\n     justify-content: center;\n     font-family: 'Mada', sans-serif;\n } .subcontainer-three {\n     width: 65%;\n     font-weight: 700;\n     display: flex;\n     align-items: center;\n } .subcontainer-three img {\n     width: 15px;\n     height: 15px;\n     margin-right: 0.5em;\n } /*Cuarto BLOQUE*/ .container-four {\n     width: 25%;\n     height: auto;\n     display: flex;\n     flex-direction: column;\n     align-items: center;\n     justify-content: center;\n     font-family: 'Mada', sans-serif;\n } .subcontainer-four {\n     width: 65%;\n     font-weight: 700;\n     display: flex;\n     align-items: center;\n } .subcontainer-four img {\n     width: 15px;\n     height: 15px;\n     margin-right: 0.5em;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYW5hZ2VtZW50LXZhY2FuY2llcy9tYW5hZ2VtZW50LXZhY2FuY2llcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0NBRUMsd0VBQXdFLEVBRnhFLGtCQUFrQixFQUdsQjtLQUNJLFVBQVU7S0FDVixZQUFZO0tBQ1osaUJBQWlCO0NBQ3JCLEVBRUE7S0FDSSxXQUFXO0tBQ1gsYUFBYTtLQUNiLG1CQUFtQjtLQUNuQix1QkFBdUI7S0FDdkIscUJBQXFCO0NBQ3pCLEVBRUE7S0FDSSxrQkFBa0I7S0FDbEIsaUJBQWlCO0tBQ2pCLHFCQUFxQjtLQUNyQixhQUFhO0tBQ2IsaUJBQWlCO0NBQ3JCLEVBRUE7S0FDSSxrQkFBa0I7Q0FDdEIsRUFFQTtLQUNJLGtCQUFrQjtLQUNsQixrQkFBa0I7S0FDbEIsb0JBQW9CO0NBQ3hCLEVBRUE7S0FDSSxTQUFTO0tBQ1QsY0FBYztDQUNsQixFQUVBO0tBQ0ksa0JBQWtCO0NBQ3RCLEVBRUE7S0FDSSx1QkFBdUI7S0FDdkIsa0JBQWtCO0tBQ2xCLGlCQUFpQjtLQUNqQixxQkFBcUI7S0FDckIsZUFBZTtLQUNmLGFBQWE7S0FDYixXQUFXO0tBQ1gsaUJBQWlCO0tBQ2pCLGtCQUFrQjtLQUNsQiwwQkFBMEI7S0FDMUIsdUJBQXVCO0tBQ3ZCLHNCQUFzQjtLQUN0QixxQkFBcUI7Q0FDekIsRUFFQTtLQUNJLFVBQVU7S0FDVixXQUFXO0tBQ1gsYUFBYTtLQUNiLG1CQUFtQjtLQUNuQixjQUFjO0tBQ2QsOEJBQThCO0tBQzlCLFdBQVc7Q0FDZixFQUVBOztLQUVJLFVBQVU7S0FDVixTQUFTO0tBQ1QsaUJBQWlCO0tBQ2pCLGdCQUFnQjtDQUNwQixFQUVBO0tBQ0ksK0JBQStCO0tBQy9CLFVBQVU7S0FDVixhQUFhO0tBQ2IsbUJBQW1CO0tBQ25CLDhCQUE4QjtDQUNsQyxFQUVBO0tBQ0ksV0FBVztLQUNYLFlBQVk7Q0FDaEIsRUFFQTtLQUNJLFVBQVU7S0FDVixnQkFBZ0I7Q0FDcEIsRUFFQTtLQUNJLCtCQUErQjtLQUMvQixjQUFjO0tBQ2QsYUFBYTtLQUNiLG1CQUFtQjtLQUNuQiw2QkFBNkI7S0FDN0IsNkNBQTZDO0tBQzdDLGNBQWM7Q0FDbEIsRUFFQTtLQUNJLG9CQUFvQjtDQUN4QixFQUVBO0tBQ0ksVUFBVTtLQUNWLGFBQWE7S0FDYixtQkFBbUI7S0FDbkIsNkJBQTZCO0NBQ2pDLEVBRUE7S0FDSSxZQUFZO0tBQ1osV0FBVztDQUNmLEVBRUE7S0FDSSxjQUFjO0NBQ2xCLEVBRUE7S0FDSSxZQUFZO0tBQ1osYUFBYTtLQUNiLG1CQUFtQjtLQUNuQixhQUFhO0tBQ2IsK0JBQStCO0tBQy9CLHFCQUFxQjtDQUN6QixFQUVBO0tBQ0ksbUJBQW1CO0NBQ3ZCLEVBRUE7S0FDSSxjQUFjO0NBQ2xCLEVBRUE7S0FDSSxVQUFVO0NBQ2QsRUFFQTtLQUNJLGdCQUFnQjtLQUNoQixtQkFBbUI7Q0FDdkIsRUFDQSxpQkFBaUIsRUFFakI7S0FDSSxVQUFVO0tBQ1YsYUFBYTtLQUNiLHNCQUFzQjtLQUN0QixtQkFBbUI7Q0FDdkIsRUFFQTtLQUNJLFVBQVU7S0FDVixXQUFXO0tBQ1gsbUJBQW1CO0tBQ25CLGFBQWE7S0FDYixtQkFBbUI7S0FDbkIsYUFBYTtLQUNiLCtCQUErQjtLQUMvQixxQkFBcUI7Q0FDekIsRUFFQTtLQUNJLFdBQVc7S0FDWCxhQUFhO0tBQ2IsOEJBQThCO0NBQ2xDLEVBRUE7S0FDSSxXQUFXO0tBQ1gsWUFBWTtDQUNoQixFQUNBLFdBQVcsRUFFWDtLQUNJLGlCQUFpQjtLQUNqQixZQUFZO0tBQ1osY0FBYztLQUNkLGNBQWM7S0FDZCxvQkFBb0I7S0FDcEIsaUJBQWlCO0tBQ2pCLGtCQUFrQjtLQUNsQixrQkFBa0I7S0FDbEIsbUJBQW1CO0tBQ25CLDBCQUEwQjtLQUMxQix1QkFBdUI7S0FDdkIsc0JBQXNCO0tBQ3RCLHFCQUFxQjtDQUN6QixFQUVBO0tBQ0ksaUJBQWlCO0tBQ2pCLFlBQVk7S0FDWixjQUFjO0tBQ2QsY0FBYztLQUNkLG9CQUFvQjtLQUNwQixpQkFBaUI7S0FDakIsa0JBQWtCO0tBQ2xCLGtCQUFrQjtLQUNsQixtQkFBbUI7S0FDbkIsMEJBQTBCO0tBQzFCLHVCQUF1QjtLQUN2QixzQkFBc0I7S0FDdEIscUJBQXFCO0NBQ3pCLEVBQ0EsZ0JBQWdCLEVBRWhCO0tBQ0ksVUFBVTtLQUNWLFlBQVk7S0FDWixhQUFhO0tBQ2Isc0JBQXNCO0tBQ3RCLG1CQUFtQjtLQUNuQix1QkFBdUI7S0FDdkIsK0JBQStCO0NBQ25DLEVBRUE7S0FDSSxVQUFVO0tBQ1YsZ0JBQWdCO0tBQ2hCLGFBQWE7S0FDYixtQkFBbUI7Q0FDdkIsRUFFQTtLQUNJLFdBQVc7S0FDWCxZQUFZO0tBQ1osbUJBQW1CO0NBQ3ZCLEVBQ0EsZ0JBQWdCLEVBRWhCO0tBQ0ksVUFBVTtLQUNWLFlBQVk7S0FDWixhQUFhO0tBQ2Isc0JBQXNCO0tBQ3RCLG1CQUFtQjtLQUNuQix1QkFBdUI7S0FDdkIsK0JBQStCO0NBQ25DLEVBRUE7S0FDSSxVQUFVO0tBQ1YsZ0JBQWdCO0tBQ2hCLGFBQWE7S0FDYixtQkFBbUI7Q0FDdkIsRUFFQTtLQUNJLFdBQVc7S0FDWCxZQUFZO0tBQ1osbUJBQW1CO0NBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYW5hZ2VtZW50LXZhY2FuY2llcy9tYW5hZ2VtZW50LXZhY2FuY2llcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIC8qVGlwb2dyYWZpYSBtYWRhKi9cbiBcbiBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1hZGEmZGlzcGxheT1zd2FwJyk7XG4gLmNvbnRhaW5lcnZpZXcge1xuICAgICB3aWR0aDogNzIlO1xuICAgICBoZWlnaHQ6IGF1dG87XG4gICAgIG1hcmdpbi1sZWZ0OiAyMGVtO1xuIH1cbiBcbiBmb3JtIHtcbiAgICAgd2lkdGg6IDEwMCU7XG4gICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gfVxuIFxuIGlucHV0IHtcbiAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICBib3JkZXI6IHNvbGlkIDJweDtcbiAgICAgYm9yZGVyLWNvbG9yOiAjMDBCQ0EwO1xuICAgICBoZWlnaHQ6IDIuM2VtO1xuICAgICBtYXJnaW46IDFlbSAwLjVlbTtcbiB9XG4gXG4gLmlubmVyLWFkZG9uIHtcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuIH1cbiBcbiAuaW5uZXItYWRkb24gLmZhcyB7XG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgcGFkZGluZzogMjJweCAxM3B4O1xuICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiB9XG4gXG4gLmxlZnQtYWRkb24gLmZhcyB7XG4gICAgIGxlZnQ6IDBweDtcbiAgICAgY29sb3I6ICMwMEJDQTA7XG4gfVxuIFxuIC5sZWZ0LWFkZG9uIGlucHV0IHtcbiAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuIH1cbiBcbiBzZWxlY3Qge1xuICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICBib3JkZXI6IHNvbGlkIDJweDtcbiAgICAgYm9yZGVyLWNvbG9yOiAjMDBCQ0EwO1xuICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgIGhlaWdodDogMi42ZW07XG4gICAgIHdpZHRoOiAxNWVtO1xuICAgICBtYXJnaW4tdG9wOiAxLjFlbTtcbiAgICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xuICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgIC1tcy1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgIC1vLWJvcmRlci1yYWRpdXM6IDVweDtcbiB9XG4gXG4gLmhlYWRlcnZpZXcge1xuICAgICB3aWR0aDogOTMlO1xuICAgICBoZWlnaHQ6IDMwJTtcbiAgICAgZGlzcGxheTogZmxleDtcbiAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgY29sb3I6ICMwMEJDQTA7XG4gICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgbWFyZ2luOiAxZW07XG4gfVxuIFxuIC5oZWFkZXJ2aWV3IGgxLFxuIHAge1xuICAgICBwYWRkaW5nOiAwO1xuICAgICBtYXJnaW46IDA7XG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICBmb250LXNpemU6IDEuMWVtO1xuIH1cbiBcbiAuc3ViSGVhZGVyVmlldyB7XG4gICAgIGZvbnQtZmFtaWx5OiAnTWFkYScsIHNhbnMtc2VyaWY7XG4gICAgIHdpZHRoOiAyNSU7XG4gICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiB9XG4gXG4gLnN1YkhlYWRlclZpZXcgaW1nIHtcbiAgICAgd2lkdGg6IDE1cHg7XG4gICAgIGhlaWdodDogMTVweDtcbiB9XG4gXG4gLmNvbnRhaW5lcnZhY2FuY2llc3RpdGxlcyB7XG4gICAgIHdpZHRoOiA5MyU7XG4gICAgIHBhZGRpbmc6IDAuNWVtIDA7XG4gfVxuIFxuIC50aXRsZXMge1xuICAgICBmb250LWZhbWlseTogJ01hZGEnLCBzYW5zLXNlcmlmO1xuICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgZGlzcGxheTogZmxleDtcbiAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDEuNXB4IHJnYigxOTksIDE5OSwgMTk5KTtcbiAgICAgY29sb3I6ICMxYTFhMWE7XG4gfVxuIFxuIC50aXRsZXMgcCB7XG4gICAgIG1hcmdpbi1ib3R0b206IDAuN2VtO1xuIH1cbiBcbiAudGl0bGUge1xuICAgICB3aWR0aDogMTUlO1xuICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiB9XG4gXG4gLnRpdGxlIGltZyB7XG4gICAgIGhlaWdodDogMjBweDtcbiAgICAgd2lkdGg6IDEwcHg7XG4gfVxuIFxuIC5vbmUge1xuICAgICBjb2xvcjogIzAwQkNBMDtcbiB9XG4gXG4gLnN1YmNvbnRhaW5lck9uZSB7XG4gICAgIGhlaWdodDogYXV0bztcbiAgICAgZGlzcGxheTogZmxleDtcbiAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgbWFyZ2luOiAwLjVlbTtcbiAgICAgZm9udC1mYW1pbHk6ICdNYWRhJywgc2Fucy1zZXJpZjtcbiAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuIH1cbiBcbiAuc3ViY29udGFpbmVyT25lIGltZyB7XG4gICAgIG1hcmdpbi1yaWdodDogMC41ZW07XG4gfVxuIFxuIC5zdWJjb250YWluZXJPbmUgZGl2IHAge1xuICAgICBmb250LXNpemU6IDFlbTtcbiB9XG4gXG4gLmNvbnRhaW5lck9uZSB7XG4gICAgIHdpZHRoOiAyNSU7XG4gfVxuIFxuIC5zdWItdGl0bGUge1xuICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICBmb250LXNpemU6IHh4LXNtYWxsO1xuIH1cbiAvKlNlZ3VuZG8gYmxvcXVlKi9cbiBcbiAuQ29udGFpbmVydHdvIHtcbiAgICAgd2lkdGg6IDI1JTtcbiAgICAgZGlzcGxheTogZmxleDtcbiAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiB9XG4gXG4gLnN1YkNvbnRhaW5lcnR3byB7XG4gICAgIHdpZHRoOiA2NSU7XG4gICAgIGhlaWdodDogNzAlO1xuICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICBtYXJnaW46IDAuNWVtO1xuICAgICBmb250LWZhbWlseTogJ01hZGEnLCBzYW5zLXNlcmlmO1xuICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gfVxuIFxuIC5zdWJiQ29udGFpbmVydHdvIHtcbiAgICAgd2lkdGg6IDEwMCU7XG4gICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiB9XG4gXG4gLnN1YkNvbnRhaW5lcnR3byBpbWcge1xuICAgICB3aWR0aDogMjBweDtcbiAgICAgaGVpZ2h0OiAyMHB4O1xuIH1cbiAvKkJPVE9ORVMgKi9cbiBcbiAuYnRuYXBwcm92ZWQge1xuICAgICBmb250LWZhbWlseTogTWFkYTtcbiAgICAgYm9yZGVyOiBub25lO1xuICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgZm9udC1zaXplOiAxZW07XG4gICAgIHBhZGRpbmc6IDAuNWVtIDEuM2VtO1xuICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgIGJhY2tncm91bmQ6ICMwMEJDQTA7XG4gICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgLW1zLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgLW8tYm9yZGVyLXJhZGl1czogM3B4O1xuIH1cbiBcbiAuYnRucmVqZWN0ZWQge1xuICAgICBmb250LWZhbWlseTogTWFkYTtcbiAgICAgYm9yZGVyOiBub25lO1xuICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgZm9udC1zaXplOiAxZW07XG4gICAgIHBhZGRpbmc6IDAuNWVtIDEuMWVtO1xuICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgIGJhY2tncm91bmQ6ICNGNzY4NUI7XG4gICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgLW1zLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgLW8tYm9yZGVyLXJhZGl1czogM3B4O1xuIH1cbiAvKlRlcmNlciBCTE9RVUUqL1xuIFxuIC5jb250YWluZXItdGhyZWUge1xuICAgICB3aWR0aDogMjUlO1xuICAgICBoZWlnaHQ6IGF1dG87XG4gICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICBmb250LWZhbWlseTogJ01hZGEnLCBzYW5zLXNlcmlmO1xuIH1cbiBcbiAuc3ViY29udGFpbmVyLXRocmVlIHtcbiAgICAgd2lkdGg6IDY1JTtcbiAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgZGlzcGxheTogZmxleDtcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiB9XG4gXG4gLnN1YmNvbnRhaW5lci10aHJlZSBpbWcge1xuICAgICB3aWR0aDogMTVweDtcbiAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xuIH1cbiAvKkN1YXJ0byBCTE9RVUUqL1xuIFxuIC5jb250YWluZXItZm91ciB7XG4gICAgIHdpZHRoOiAyNSU7XG4gICAgIGhlaWdodDogYXV0bztcbiAgICAgZGlzcGxheTogZmxleDtcbiAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgIGZvbnQtZmFtaWx5OiAnTWFkYScsIHNhbnMtc2VyaWY7XG4gfVxuIFxuIC5zdWJjb250YWluZXItZm91ciB7XG4gICAgIHdpZHRoOiA2NSU7XG4gICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gfVxuIFxuIC5zdWJjb250YWluZXItZm91ciBpbWcge1xuICAgICB3aWR0aDogMTVweDtcbiAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xuIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/management-vacancies/management-vacancies.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/management-vacancies/management-vacancies.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ManagementVacanciesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementVacanciesComponent", function() { return ManagementVacanciesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");



let ManagementVacanciesComponent = class ManagementVacanciesComponent {
    constructor(authService) {
        this.authService = authService;
        // Declarando variable donde se almacena resp del getTabls para poder pintarla en la interfaz
        this.vacancies = [];
        this.status = ["Aprobado", "Rechazado"];
        this.selected = [];
    }
    ngOnInit() {
        this.authService.getjobVacan()
            .subscribe(resp => {
            console.log('entro a asignar la data');
            this.vacancies = resp;
            console.log(this.vacancies);
        });
    }
};
ManagementVacanciesComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
ManagementVacanciesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-management-vacancies',
        template: __webpack_require__(/*! raw-loader!./management-vacancies.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/management-vacancies/management-vacancies.component.html"),
        styles: [__webpack_require__(/*! ./management-vacancies.component.css */ "./src/app/components/management-vacancies/management-vacancies.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], ManagementVacanciesComponent);



/***/ }),

/***/ "./src/app/components/postulants/postulants.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/postulants/postulants.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9zdHVsYW50cy9wb3N0dWxhbnRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/postulants/postulants.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/postulants/postulants.component.ts ***!
  \***************************************************************/
/*! exports provided: PostulantsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostulantsComponent", function() { return PostulantsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PostulantsComponent = class PostulantsComponent {
    constructor() { }
    ngOnInit() {
    }
};
PostulantsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-postulants',
        template: __webpack_require__(/*! raw-loader!./postulants.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/postulants/postulants.component.html"),
        styles: [__webpack_require__(/*! ./postulants.component.css */ "./src/app/components/postulants/postulants.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PostulantsComponent);



/***/ }),

/***/ "./src/app/components/profile/profile-cont/profile-cont.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/profile/profile-cont/profile-cont.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".containerview {\n    width: 72%;\n    height: auto;\n    margin-left: 20em;\n}\n\n.containerInstitutionProfile > div {\n    padding: 20px 0;\n    margin-left: 20%;\n    float: right;\n  flex-direction: column-reverse;\n    display: flex;\n    \n  }\n\n/* css formularios */\n\n.titleComponent {\n  font-family: Mada;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 21px;\n  line-height: 27px;\n  display: flex;\n  align-items: center;\n  color: #00BCA0;\n}\n\nlabel {\n  font-family: Mada;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 10px;\n  line-height: 13px;\n  display: flex;\n  align-items: center;\n  color: #5E807F;\n}\n\ninput {\n  position: relative;\n  display: flex;\n  justify-content: left;\n  background: #FFFFFF;\n  border: 1px solid #CEF8ED;\n  box-sizing: border-box;\n  border-radius: 6px;\n  height: 25px;\n}\n\n.textComponent-aboutme {\n  height: 50px;\n}\n\n.selectComponent{\n  margin: 0 20px 0 0;\n  padding: 5px 20px;\n  background: #FFFFFF;\n  border: 1px solid #00BCA0;\n  border-radius: 6px;\n  font-family: 'Mada';\n  font-style: normal;\n  font-size: 12px;\n  color: #2A303A;\n}\n\n.btnColor {\n  height: 35px;\n  border-radius: 5px;\n  background-color: #00BCA0;\n  color: white;\n  border: none;\n  font-family: 'Mada', sans-serif;\n  font-weight: 500;\n  font-size: 14px;\n  margin: 15px;\n  float: right;\n}\n\n.texLabelInput {\n  font-family: Mada;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 10px;\n  line-height: 13px;\n  display: flex;\n  align-items: center;\n  color: #5E807F;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUtY29udC9wcm9maWxlLWNvbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0VBQ2QsOEJBQThCO0lBQzVCLGFBQWE7O0VBRWY7O0FBRUYsb0JBQW9COztBQUVwQjtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWiwrQkFBK0I7RUFDL0IsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS1jb250L3Byb2ZpbGUtY29udC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcnZpZXcge1xuICAgIHdpZHRoOiA3MiU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiAyMGVtO1xufVxuXG4uY29udGFpbmVySW5zdGl0dXRpb25Qcm9maWxlID4gZGl2IHtcbiAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIFxuICB9XG5cbi8qIGNzcyBmb3JtdWxhcmlvcyAqL1xuXG4udGl0bGVDb21wb25lbnQge1xuICBmb250LWZhbWlseTogTWFkYTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDIxcHg7XG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzAwQkNBMDtcbn1cblxubGFiZWwge1xuICBmb250LWZhbWlseTogTWFkYTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzVFODA3Rjtcbn1cblxuaW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm9yZGVyOiAxcHggc29saWQgI0NFRjhFRDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbi50ZXh0Q29tcG9uZW50LWFib3V0bWUge1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5zZWxlY3RDb21wb25lbnR7XG4gIG1hcmdpbjogMCAyMHB4IDAgMDtcbiAgcGFkZGluZzogNXB4IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMEJDQTA7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC1mYW1pbHk6ICdNYWRhJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMkEzMDNBO1xufVxuICBcbi5idG5Db2xvciB7XG4gIGhlaWdodDogMzVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBCQ0EwO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1mYW1pbHk6ICdNYWRhJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDE1cHg7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnRleExhYmVsSW5wdXQge1xuICBmb250LWZhbWlseTogTWFkYTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzVFODA3Rjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/profile/profile-cont/profile-cont.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/profile/profile-cont/profile-cont.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProfileContComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileContComponent", function() { return ProfileContComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProfileContComponent = class ProfileContComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProfileContComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-cont',
        template: __webpack_require__(/*! raw-loader!./profile-cont.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/profile/profile-cont/profile-cont.component.html"),
        styles: [__webpack_require__(/*! ./profile-cont.component.css */ "./src/app/components/profile/profile-cont/profile-cont.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProfileContComponent);



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Mada:400,500,600,700&display=swap');\n* {\n  font-family: \"Mada\";\n}\n/* Informacion de perfil */\n.containerInstitutionProfile {\n  display: flex;\n  flex-direction: column;\n  margin-left: auto;\n  height: 100vh;\n  font-family: 'Mada';\n  background-color: #E5E5E5;\n \n}\n.imgPerfilInst{\n  display:flex;\n  flex-direction: column;\n  width: 25%;\n  align-items: center;\n  margin: 5% 2%;\n}\nh2{\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 31px;\n  color: rgb(166, 173, 173);\n  margin-left:5%;\n  margin-top: 1%;\n}\n.titleimgPerfilInst{\n  font-style: normal;\n  font-weight: 600;\n  font-size: 21px;\n  color: #00BCA0;\n  text-align: center;\n  \n}\n.textimgPerfilInst{\n  font-style: normal;\n  font-weight: 600;\n  font-size: 10px;\n  text-align: center;\n  color: #5E807F;\n}\n.title{\n  width: 100%;\n  display: flex;\n  height: 30px;\n  margin-top: 10%;\n  \n}\n.contDatos{\n  display: flex;\n  width: 100%;\n  margin-top: 3%;\n  background: #E5E5E5;\n}\n.institutionData {\n  display: flex;\n  flex-direction: column;\n  width: 75%;\n  margin-top: 1%;\n  justify-content: center;\n  \n}\n.fileinfo1, .fileinfo2, .fileinfo3{\n  display: flex;\n}\n.fileinfo3{\n  border-bottom: 4px solid #DEE5E5;\n  \n}\n.subtitle{\n  font-style: normal;\n  font-weight: 600;\n  font-size: 21px;\n  line-height: 27px;\n  display: flex;\n  align-items: center;\n  color: #00BCA0;\n  margin: 2% 0;\n}\n.input-text{\n  background: #FFFFFF;\n  border: 1px solid #CEF8ED;\n  box-sizing: border-box;\n  border-radius: 6px;\n  width: 90%;\n  height: 25px;\n}\n.input-date{\n  background: #DEE5E5;\n  border-radius: 6px;\n  width: 50%;\n  height: 40px;\n  color: #ACB3B3;\n  margin-bottom: 5%;\n  \n}\np{\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 16px;\n  display: flex;\n  align-items: center;\n  color: #5E807F;\n  margin: 3%;\n}\n.fileinfo1-1, .fileinfo1-2{\n  display: flex;\n  width: 45%;\n  height: 10vh;\n  flex-direction: column;\n}\n.fileinfo2-1, .fileinfo2-2, .fileinfo2-3{\n  display: flex;\n  width: 33%;\n  height: 10vh;\n  flex-direction: column;\n}\n.fileinfo3-1, .fileinfo3-2{\n  display: flex;\n  width: 35%;\n  margin-right: 3%;\n  margin-left: 1%;\n  height: 10vh;\n  flex-direction: column;\n}\n.container-info{\n  display: flex;\n  width: 100%;\n}\n.description{\n  width: 65%;\n  display: flex;\n  flex-direction: column;\n}\n.input-textarea{\n  background: #FFFFFF;\n  border: 1px solid #CEF8ED;\n  box-sizing: border-box;\n  border-radius: 6px;\n  width: 95%;\n  height: 80px;\n}\n.cont-analitics{\n  display: flex;\n  flex-direction: column;\n  width: 30%;\n  height: 20%;\n  \n}\n.google{\n  width: 100%;\n  justify-self: flex-end;\n  margin-top: 6%;\n}\n.count{\n  display: flex;\n  width: 100%;\n  justify-content: space-around;\n}\n.counter{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 30%;\n  margin-top: 15%\n}\n.textcounter, .num{\n  font-style: normal;\n  font-weight: 600;\n  font-size: 10px;\n  line-height: 13px;\n  color: #5E807F;\n  text-align: center;\n}\n.buttonpag{\n  width: 100%;\n  height: 35px;\n  \n  display: flex;\n  justify-content: flex-end;\n}\n.btn-atras{\n  border: 1px solid #ACB3B3;\n  box-sizing: border-box;\n  border-radius: 5px;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 12px;\n  text-align: center;\n  color: #ACB3B3;\n  height: 30px;\n  width: 20%;\n  margin:3%;\n}\n.btn-next{\n  height: 30px;\n  width: 20%;\n  background: #DEE5E5;\n  border: 1px solid #ACB3B3;\n  border-radius: 5px;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 12px;\n  line-height: 16px;\n  text-align: center;\n  color: #FFFFFF;\n  margin:3%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3RkFBd0Y7QUFDeEY7RUFDRSxtQkFBbUI7QUFDckI7QUFDQSwwQkFBMEI7QUFDMUI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5Qjs7QUFFM0I7QUFFQTtFQUNFLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsY0FBYztBQUNoQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztFQUNkLGtCQUFrQjs7QUFFcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlOztBQUVqQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixjQUFjO0VBQ2QsdUJBQXVCOztBQUV6QjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxnQ0FBZ0M7O0FBRWxDO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsWUFBWTtBQUNkO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7QUFDZDtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGNBQWM7RUFDZCxpQkFBaUI7O0FBRW5CO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsVUFBVTtBQUNaO0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsWUFBWTtFQUNaLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0FBQ2I7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7QUFDZDtBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsV0FBVzs7QUFFYjtBQUNBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWO0FBQ0Y7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTs7RUFFWixhQUFhO0VBQ2IseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7RUFDWixVQUFVO0VBQ1YsU0FBUztBQUNYO0FBQ0E7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFNBQVM7QUFDWCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1hZGE6NDAwLDUwMCw2MDAsNzAwJmRpc3BsYXk9c3dhcCcpO1xuKiB7XG4gIGZvbnQtZmFtaWx5OiBcIk1hZGFcIjtcbn1cbi8qIEluZm9ybWFjaW9uIGRlIHBlcmZpbCAqL1xuLmNvbnRhaW5lckluc3RpdHV0aW9uUHJvZmlsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBmb250LWZhbWlseTogJ01hZGEnO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTVFNUU1O1xuIFxufVxuXG4uaW1nUGVyZmlsSW5zdHtcbiAgZGlzcGxheTpmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMjUlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDUlIDIlO1xufVxuaDJ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMXB4O1xuICBjb2xvcjogcmdiKDE2NiwgMTczLCAxNzMpO1xuICBtYXJnaW4tbGVmdDo1JTtcbiAgbWFyZ2luLXRvcDogMSU7XG59XG4udGl0bGVpbWdQZXJmaWxJbnN0e1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgY29sb3I6ICMwMEJDQTA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgXG59XG4udGV4dGltZ1BlcmZpbEluc3R7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNUU4MDdGO1xufVxuLnRpdGxle1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIFxufSBcbi5jb250RGF0b3N7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAzJTtcbiAgYmFja2dyb3VuZDogI0U1RTVFNTtcbn1cblxuLmluc3RpdHV0aW9uRGF0YSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA3NSU7XG4gIG1hcmdpbi10b3A6IDElO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgXG59XG4uZmlsZWluZm8xLCAuZmlsZWluZm8yLCAuZmlsZWluZm8ze1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmZpbGVpbmZvM3tcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNERUU1RTU7XG4gIFxufVxuXG4uc3VidGl0bGV7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBsaW5lLWhlaWdodDogMjdweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICMwMEJDQTA7XG4gIG1hcmdpbjogMiUgMDtcbn1cbi5pbnB1dC10ZXh0e1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3JkZXI6IDFweCBzb2xpZCAjQ0VGOEVEO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogMjVweDtcbn1cbi5pbnB1dC1kYXRle1xuICBiYWNrZ3JvdW5kOiAjREVFNUU1O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNDBweDtcbiAgY29sb3I6ICNBQ0IzQjM7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xuICBcbn1cbnB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICM1RTgwN0Y7XG4gIG1hcmdpbjogMyU7XG59XG5cbi5maWxlaW5mbzEtMSwgLmZpbGVpbmZvMS0ye1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogNDUlO1xuICBoZWlnaHQ6IDEwdmg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5maWxlaW5mbzItMSwgLmZpbGVpbmZvMi0yLCAuZmlsZWluZm8yLTN7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAzMyU7XG4gIGhlaWdodDogMTB2aDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5maWxlaW5mbzMtMSwgLmZpbGVpbmZvMy0ye1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMzUlO1xuICBtYXJnaW4tcmlnaHQ6IDMlO1xuICBtYXJnaW4tbGVmdDogMSU7XG4gIGhlaWdodDogMTB2aDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNvbnRhaW5lci1pbmZve1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRlc2NyaXB0aW9ue1xuICB3aWR0aDogNjUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uaW5wdXQtdGV4dGFyZWF7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNDRUY4RUQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgd2lkdGg6IDk1JTtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG4uY29udC1hbmFsaXRpY3N7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogMjAlO1xuICBcbn1cbi5nb29nbGV7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xuICBtYXJnaW4tdG9wOiA2JTtcbn1cbi5jb3VudHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLmNvdW50ZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAzMCU7XG4gIG1hcmdpbi10b3A6IDE1JVxufVxuXG4udGV4dGNvdW50ZXIsIC5udW17XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMTNweDtcbiAgY29sb3I6ICM1RTgwN0Y7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ1dHRvbnBhZ3tcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzVweDtcbiAgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uYnRuLWF0cmFze1xuICBib3JkZXI6IDFweCBzb2xpZCAjQUNCM0IzO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI0FDQjNCMztcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMjAlO1xuICBtYXJnaW46MyU7XG59XG4uYnRuLW5leHR7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDIwJTtcbiAgYmFja2dyb3VuZDogI0RFRTVFNTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0FDQjNCMztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBtYXJnaW46MyU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let ProfileComponent = class ProfileComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.buildForm();
    }
    ngOnInit() {
    }
    buildForm() {
        this.form = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            businessName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            country: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            registrationDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            lastModificationDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]],
            analytics: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        // this.form.valueChanges
        // .pipe(
        //   debounceTime(500)
        //   )
        // .subscribe(value => {
        //   console.log(value);
        // });
    }
    save(event) {
        event.preventDefault();
        const value = this.form.value;
        console.log(value);
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/profile/profile.component.html"),
        styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], ProfileComponent);



/***/ }),

/***/ "./src/app/components/shared/footer/footer.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n    height: 10%;\n    position: fixed;\n    bottom: 0;\n    right: 0;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    background: #2a303a;\n    border-top-left-radius: 70px;\n}\n\n.icons_footer img {\n    width: 25px;\n    height: 25px;\n}\n\n.text_footer {\n    height: 50%;\n    color: #ffffff;\n    font-size: 16px;\n    width: 80vh;\n    display: flex;\n    flex-direction: row;\n    text-align: end;\n    justify-content: center;\n}\n\n.icon-footer {\n    margin-left: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixTQUFTO0lBQ1QsUUFBUTtJQUNSLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZUFBZTtJQUNmLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xuICAgIGhlaWdodDogMTAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICMyYTMwM2E7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNzBweDtcbn1cblxuLmljb25zX2Zvb3RlciBpbWcge1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbn1cblxuLnRleHRfZm9vdGVyIHtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgd2lkdGg6IDgwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmljb24tZm9vdGVyIHtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/shared/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/shared/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/shared/footer/footer.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "./src/app/components/shared/header/header.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/shared/header/header.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n    width: 100%;\n    height: 80px;\n    display: flex;\n    flex-direction: row;\n}\n\n.logoContainer {\n    margin-right: 85px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.logo {\n    width: 200px;\n}\n\n.navigation {\n    border-bottom: 1px solid #ACB3B3;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n\n.search {\n    width: 325px;\n    height: 35px;\n    padding: 5px 20px;\n    border-radius: 6px;\n    border: none;\n}\n\n.btnSearch {\n    width: 35px;\n    height: 35px;\n    margin: 0 150px 0 -35px;\n    border: none;\n    border-radius: 6px;\n    background: #00BCA0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.icon {\n    width: 100%;\n}\n\n.btnCircle {\n    width: 40px;\n    height: 40px;\n    margin-right: 30px;\n    border: none;\n    border-radius: 50%;\n    background: #00BCA0;\n    color: white;\n}\n\n.imgCircle {\n    width: 40px;\n    height: 40px;\n    margin: 0 10px 0 30px;\n    background-color: #C4C4C4;\n    border: none;\n    border-radius: 50%;\n}\n\n.profile {\n    width: 150px;\n    height: 30px;\n}\n\nh3 {\n    font-family: 'Mada', sans-serif;\n    font-weight: 600;\n    font-size: 14px;\n    color: #2A303A;\n    margin: 0;\n}\n\nh4 {\n    font-family: 'Mada', sans-serif;\n    font-weight: 500;\n    font-size: 12px;\n    color: #90A0B7;\n    margin: 0;\n}\n\n.btnTransparent {\n    width: 40px;\n    height: 40px;\n    margin: 0 5px;\n    border: none;\n    border-radius: 50%;\n    background: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0lBQ2QsU0FBUztBQUNiOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogODBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5sb2dvQ29udGFpbmVyIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDg1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubG9nbyB7XG4gICAgd2lkdGg6IDIwMHB4O1xufVxuXG4ubmF2aWdhdGlvbiB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNBQ0IzQjM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZWFyY2gge1xuICAgIHdpZHRoOiAzMjVweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgcGFkZGluZzogNXB4IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLmJ0blNlYXJjaCB7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIG1hcmdpbjogMCAxNTBweCAwIC0zNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYmFja2dyb3VuZDogIzAwQkNBMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pY29uIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmJ0bkNpcmNsZSB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6ICMwMEJDQTA7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uaW1nQ2lyY2xlIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luOiAwIDEwcHggMCAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNDNEM0QzQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnByb2ZpbGUge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG59XG5cbmgzIHtcbiAgICBmb250LWZhbWlseTogJ01hZGEnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMkEzMDNBO1xuICAgIG1hcmdpbjogMDtcbn1cblxuaDQge1xuICAgIGZvbnQtZmFtaWx5OiAnTWFkYScsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM5MEEwQjc7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uYnRuVHJhbnNwYXJlbnQge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW46IDAgNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/shared/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/shared/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/shared/header/header.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/shared/nav-bar/nav-bar.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/shared/nav-bar/nav-bar.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Mada:400,500,600,700&display=swap');\n* {\n    font-family: \"Mada\";\n}\n.sidebar {\n    z-index: 1000;\n    font-family: Mada;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 18px;\n    justify-content: center;\n    background: #2a303a;\n    position: absolute;\n    left: 0%;\n    top: 2%;\n    bottom: 0%;\n    color: #cef8ed;\n    height: 83%;\n    border-top-right-radius: 90px;\n    margin-top: 100px;\n    width: 20%;\n}\n/* .logo{\n  border: solid 1px red;\n  margin: 40px;\n} */\n.star-icon {\n    height: 14px;\n    width: auto;\n    margin-right: 10px;\n}\nnav a:hover {\n    color: #FFBD3A;\n    font-weight: bold;\n}\nnav a:hover path {\n    fill: #FFBD3A;\n}\nnav a:active path {\n    fill: #01F0D1;\n}\nnav a:active {\n    font-weight: bold;\n    color: #01F0D1;\n}\nnav ul {\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column;\n}\n/* nav button  {\n  align-content: center;\n  margin-top: 15%;\n  margin-left: 20%;\n} */\nnav li {\n    list-style: none;\n    padding: 1.5em 0;\n    margin-left: 5%;\n}\nli a {\n    text-decoration: none;\n    color: #cef8ed;\n}\n.btn-second-little {\n    -webkit-appearance: none !important;\n    color: #00BCA0;\n    padding: 8px 15px;\n    margin-top: 50px;\n    font-weight: bold;\n    background-color: transparent;\n    border: solid 1px #00BCA0;\n    border-radius: 5px;\n    align-content: center;\n    margin-top: 15%;\n    margin-left: 20%;\n}\n.btn-second-little:hover {\n    color: #FFBD3A;\n    border: solid 1px #FFBD3A;\n}\n.btn-second-little:active {\n    color: #6BFFFF;\n    font-weight: bold;\n    border: solid 1px #6BFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0ZBQXdGO0FBQ3hGO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsT0FBTztJQUNQLFVBQVU7SUFDVixjQUFjO0lBQ2QsV0FBVztJQUNYLDZCQUE2QjtJQUM3QixpQkFBaUI7SUFDakIsVUFBVTtBQUNkO0FBR0E7OztHQUdHO0FBRUg7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsc0JBQXNCO0FBQzFCO0FBR0E7Ozs7R0FJRztBQUVIO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TWFkYTo0MDAsNTAwLDYwMCw3MDAmZGlzcGxheT1zd2FwJyk7XG4qIHtcbiAgICBmb250LWZhbWlseTogXCJNYWRhXCI7XG59XG5cbi5zaWRlYmFyIHtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIGZvbnQtZmFtaWx5OiBNYWRhO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjMmEzMDNhO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwJTtcbiAgICB0b3A6IDIlO1xuICAgIGJvdHRvbTogMCU7XG4gICAgY29sb3I6ICNjZWY4ZWQ7XG4gICAgaGVpZ2h0OiA4MyU7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDkwcHg7XG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgd2lkdGg6IDIwJTtcbn1cblxuXG4vKiAubG9nb3tcbiAgYm9yZGVyOiBzb2xpZCAxcHggcmVkO1xuICBtYXJnaW46IDQwcHg7XG59ICovXG5cbi5zdGFyLWljb24ge1xuICAgIGhlaWdodDogMTRweDtcbiAgICB3aWR0aDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbm5hdiBhOmhvdmVyIHtcbiAgICBjb2xvcjogI0ZGQkQzQTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxubmF2IGE6aG92ZXIgcGF0aCB7XG4gICAgZmlsbDogI0ZGQkQzQTtcbn1cblxubmF2IGE6YWN0aXZlIHBhdGgge1xuICAgIGZpbGw6ICMwMUYwRDE7XG59XG5cbm5hdiBhOmFjdGl2ZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICMwMUYwRDE7XG59XG5cbm5hdiB1bCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuXG4vKiBuYXYgYnV0dG9uICB7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTUlO1xuICBtYXJnaW4tbGVmdDogMjAlO1xufSAqL1xuXG5uYXYgbGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMS41ZW0gMDtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG59XG5cbmxpIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogI2NlZjhlZDtcbn1cblxuLmJ0bi1zZWNvbmQtbGl0dGxlIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmUgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzAwQkNBMDtcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogc29saWQgMXB4ICMwMEJDQTA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxNSU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcbn1cblxuLmJ0bi1zZWNvbmQtbGl0dGxlOmhvdmVyIHtcbiAgICBjb2xvcjogI0ZGQkQzQTtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjRkZCRDNBO1xufVxuXG4uYnRuLXNlY29uZC1saXR0bGU6YWN0aXZlIHtcbiAgICBjb2xvcjogIzZCRkZGRjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjNkJGRkZGO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/shared/nav-bar/nav-bar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/nav-bar/nav-bar.component.ts ***!
  \****************************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavBarComponent = class NavBarComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-bar',
        template: __webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/shared/nav-bar/nav-bar.component.html"),
        styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/components/shared/nav-bar/nav-bar.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NavBarComponent);



/***/ }),

/***/ "./src/app/components/user/login/login.component.css":
/*!***********************************************************!*\
  !*** ./src/app/components/user/login/login.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Mada:400,500,600,700&display=swap');\n\n.login-screen {\n    display: flex;\n}\n\n.login-box-left {\n    width: 35%;\n}\n\n.login-logo {\n    margin-top: 20%;\n}\n\n.login-h1 {\n    color: #8CAFAE;\n    font-size: 30px;\n    font-weight: bold;\n    margin-left: 95px;\n    text-align: left;\n    width: 277px;\n}\n\n.login-h3 {\n    color: #2A303A;\n    font-size: 21px;\n    font-weight: 600;\n    margin-left: 95px;\n    text-align: left;\n    width: 277px;\n}\n\nlabel{\n    color: #2A303A;\n    font-size: 16px;\n    margin-left: 95px;\n    text-align: left;\n    width: 277px;\n}\n\n.input-login {\n    background: #FFFFFF;\n    border: 1px solid #9DC5BB;\n    border-radius: 5px;\n    margin-left: 95px;\n    padding: 10px;\n    width: 260px;\n\n    font-family: Mada;\n    font-size: 12px;\n    font-weight: 300;\n    line-height: 15px;\n    display: flex;\n    color: #ACB3B3;\n}\n\n.section-6, .section-7 {\n    display: flex;\n    width: 277px;\n    margin-left: 95px;\n}\n\n.h6 {\n    color: #2A303A;\n    font-size: 12px;\n    font-weight: 600;\n    text-align: left;\n    margin-right: auto;\n}\n\n.btn-login {\n    background: #00BCA0;\n    border: none;\n    border-radius: 5px;\n    padding: 10px;\n    margin-left: 95px;\n    width: 265px;\n\n    font-family: Mada;\n    font-size: 16px;\n    font-weight: bold;\n    text-align: center;\n    color: #FFFFFF;\n}\n\n.login-box-right {\n    background: #EBFAF4;\n    height: 765px;\n    top: 0px;\n    width: 65%;\n}\n\n.login-photo {\n    height: 765px;\n    top: 0px;\n}\n\n.rememberMe{\n    border: 1px solid #9DC5BB;\n    box-sizing: border-box;\n    border-radius: 2px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0ZBQXdGOztBQUV4RjtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLFlBQVk7O0lBRVosaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUlBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixZQUFZOztJQUVaLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUlBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixRQUFRO0lBQ1IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7QUFDWjs7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1hZGE6NDAwLDUwMCw2MDAsNzAwJmRpc3BsYXk9c3dhcCcpO1xuXG4ubG9naW4tc2NyZWVuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubG9naW4tYm94LWxlZnQge1xuICAgIHdpZHRoOiAzNSU7XG59XG5cbi5sb2dpbi1sb2dvIHtcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG59XG5cbi5sb2dpbi1oMSB7XG4gICAgY29sb3I6ICM4Q0FGQUU7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1sZWZ0OiA5NXB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd2lkdGg6IDI3N3B4O1xufVxuXG4ubG9naW4taDMge1xuICAgIGNvbG9yOiAjMkEzMDNBO1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi1sZWZ0OiA5NXB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd2lkdGg6IDI3N3B4O1xufVxuXG5sYWJlbHtcbiAgICBjb2xvcjogIzJBMzAzQTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDk1cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB3aWR0aDogMjc3cHg7XG59XG5cbi5pbnB1dC1sb2dpbiB7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOURDNUJCO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tbGVmdDogOTVweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHdpZHRoOiAyNjBweDtcblxuICAgIGZvbnQtZmFtaWx5OiBNYWRhO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sb3I6ICNBQ0IzQjM7XG59XG5cbi5zZWN0aW9uLTYsIC5zZWN0aW9uLTcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDI3N3B4O1xuICAgIG1hcmdpbi1sZWZ0OiA5NXB4O1xufVxuXG4uaDYge1xuICAgIGNvbG9yOiAjMkEzMDNBO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG5cblxuLmJ0bi1sb2dpbiB7XG4gICAgYmFja2dyb3VuZDogIzAwQkNBMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDk1cHg7XG4gICAgd2lkdGg6IDI2NXB4O1xuXG4gICAgZm9udC1mYW1pbHk6IE1hZGE7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuXG5cbi5sb2dpbi1ib3gtcmlnaHQge1xuICAgIGJhY2tncm91bmQ6ICNFQkZBRjQ7XG4gICAgaGVpZ2h0OiA3NjVweDtcbiAgICB0b3A6IDBweDtcbiAgICB3aWR0aDogNjUlO1xufVxuXG4ubG9naW4tcGhvdG8ge1xuICAgIGhlaWdodDogNzY1cHg7XG4gICAgdG9wOiAwcHg7XG59XG4ucmVtZW1iZXJNZXtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOURDNUJCO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/user/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/user/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let LoginComponent = class LoginComponent {
    constructor(afAuth, router, fb, ngZone) {
        this.afAuth = afAuth;
        this.router = router;
        this.fb = fb;
        this.ngZone = ngZone;
        this.errorMessage = '';
        this.loginForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)] }],
            remember: [true]
        });
    }
    get email() {
        return this.loginForm.get('email');
    }
    get password() {
        return this.loginForm.get('password');
    }
    ngOnInit() {
        this.afAuth.user.subscribe(user => {
            if (user) {
                this.ngZone.run(() => {
                    this.router.navigate(['/home']);
                });
            }
        });
    }
    signIn() {
        this.afAuth.auth.signInWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password)
            .then(() => {
            this.router.navigate(['/home']);
        }).catch(response => {
            this.errorMessage = response.message;
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/user/login/login.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/components/user/register/register.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/user/register/register.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/user/register/register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/user/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let RegisterComponent = class RegisterComponent {
    constructor(afAuth, router, fb, ngZone) {
        this.afAuth = afAuth;
        this.router = router;
        this.fb = fb;
        this.ngZone = ngZone;
        this.errorMessage = '';
        this.registerForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            remember: [true]
        });
    }
    ngOnInit() {
    }
    createUser() {
        this.afAuth.auth.createUserWithEmailAndPassword(this.registerForm.value.email, this.registerForm.value.password)
            .then(() => {
            this.router.navigate(['/home']);
        }).catch(response => {
            this.errorMessage = response.message;
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/user/register/register.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], RegisterComponent);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let AuthService = class AuthService {
    constructor(afsAuth, afs) {
        this.afsAuth = afsAuth;
        this.afs = afs;
        /////////////////////////////////DATA DEL AVISO///////////////////////////////////////////
        ///////////////////////////////Peticion de coleccion de avisos//////////////////////////////////////
        this.jobVacanCollection = afs.collection('newJobAnnouncementiinstitutions');
        /////////Guardando coleccion en array/////////////////
        this.arrayjobVacan = this.jobVacanCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return Object.assign({ id }, data);
        })));
    }
    ////////////////////////////////////////////////////////////////
    /////////////////FUNCION QUE RETORNA TODA LA DATA DE AVISOS///////////////
    getjobVacan() {
        return this.arrayjobVacan;
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]])
], AuthService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyCLA_dSSlsWUmaV6w7nJil8RiwdM2AD5uQ",
        authDomain: "laborum-scl011.firebaseapp.com",
        databaseURL: "https://laborum-scl011.firebaseio.com",
        projectId: "laborum-scl011",
        storageBucket: "laborum-scl011.appspot.com",
        messagingSenderId: "116883762326",
        appId: "1:116883762326:web:ff16d76535c779bfa366b7",
        measurementId: "G-J124MMBTPN"
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/crusiris/Proyectos/Angular/laborum-Institucion/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map