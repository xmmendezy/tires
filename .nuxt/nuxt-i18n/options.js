

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {"fallbackLocale":"es","messages":{"es":{"title":"Tires","login":{"a":"Iniciar sesión","b":"Correo","c":"Contraseña","d":"He olvidado mi contraseña","e":"Ingresar","f":"Registrarse","error":{"e000":"Ha ocurrido un error, confirme su usuario y contraseña, y vuelva a intentar","u1":"No se ha encontrado el usuario","u2":"La contraseña no coinciden","u3":"Sesión experada","u5":"No se ha podido recuperar la contraseña"}},"helper":{"welcome":"Bienvenido","support":"Soporte","home":"Inicio","search":"Buscar producto","not_found":"Sin resultados","setting":"Configuración","logout":"Salir","locale":"Idioma","see":"Ver","prev":"Regresar","next":"Continuar","confirm":"Confirmar","finish":"Terminar","cancel":"Cancelar","continue_task":"¿Continuar con esta opción?","success_task":"Tarea realizada con éxito","error_task":"No se pudo procesar"},"error":{"e000":"Error inesperado, vuelva a intentarlo mas tarde","e001":"Su sessión ha expirado","e003":"Este usuario no tiene permiso para acceder","e004":"No se ha encontrado el recurso web"}}}},
  vueI18nLoader: false,
  locales: ["es"],
  defaultLocale: "es",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  strategy: "prefix_except_default",
  lazy: false,
  langDir: null,
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","onlyOnNoPrefix":false,"onlyOnRoot":false,"useCookie":true},
  differentDomains: false,
  seo: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncLocale":false,"syncMessages":false,"syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  beforeLanguageSwitch: () => null,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{"code":"es"}],
  localeCodes: ["es"],
}
