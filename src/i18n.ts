import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        footer: {
          github: 'GitHub',
          contact: 'Contact',
          rights: 'Rights',
          backToTop: 'Back to top',
        },
        home: {
          welcome: 'Welcome to Nice Gadgets store!',
        },
        header: {
          home: 'HOME',
          phones: 'PHONES',
          tablets: 'TABLETS',
          accessories: 'ACCESSORIES',
        },
        cart: {
          title: 'Cart',
          totalForItems: 'Total for {{count}} items',
        },
        successMessage: {
          message: 'Your purchase was successful.',
          redirect: 'Redirecting to the main page...',
        },
        catalog: {
          title: 'Mobile phones',
          quantity: '{{count}} models',
          sortBy: 'Sort by',
          itemsOnPage: 'Items on Page',
        },
      },
    },
    pl: {
      translation: {
        footer: {
          github: 'GitHub',
          contact: 'Kontakt',
          rights: 'Prawa',
          backToTop: 'Do góry',
        },
        home: {
          welcome: 'Witaj w sklepie Nice Gadgets!',
        },
        header: {
          home: 'STRONA GŁÓWNA',
          phones: 'TELEFONY',
          tablets: 'TABLETY',
          accessories: 'AKCESORIA',
        },
        cart: {
          title: 'Koszyk',
          totalForItems: 'Suma za {{count}} przedmiotów',
        },
        successMessage: {
          message: 'Twoje zakupy zakończyły się sukcesem.',
          redirect: 'Przekierowywanie na stronę główną...',
        },
        catalog: {
          title: 'Telefony komorkowe',
          quantity: '{{count}} modele',
          sortBy: 'Sortuj według',
          itemsOnPage: 'Elementy na stronie',
        },
      },
    },
    de: {
      translation: {
        footer: {
          github: 'GitHub',
          contact: 'Kontakt',
          rights: 'Rechte',
          backToTop: 'Nach oben',
        },
        home: {
          welcome: 'Willkommen im Nice Gadgets-Shop!',
        },
        header: {
          home: 'STARTSEITE',
          phones: 'TELEFONE',
          tablets: 'TABLETS',
          accessories: 'ZUBEHÖR',
        },
        cart: {
          title: 'Warenkorb',
          totalForItems: 'Gesamt für {{count}} Artikel',
        },
        successMessage: {
          message: 'Ihr Kauf war erfolgreich.',
          redirect: 'Weiterleitung zur Hauptseite...',
        },
        catalog: {
          title: 'Mobiltelefone',
          quantity: '{{count}} Modelle',
          sortBy: 'Sortieren nach',
          itemsOnPage: 'Elemente pro Seite',
        },
      },
    },
    es: {
      translation: {
        footer: {
          github: 'GitHub',
          contact: 'Contacto',
          rights: 'Derechos',
          backToTop: 'Volver arriba',
        },
        home: {
          welcome: 'Bienvenido a la tienda de Nice Gadgets!',
        },
        header: {
          home: 'INICIO',
          phones: 'TELÉFONOS',
          tablets: 'TABLETS',
          accessories: 'ACCESORIOS',
        },
        cart: {
          title: 'Carrito',
          totalForItems: 'Total para {{count}} artículos',
        },
        successMessage: {
          message: 'Su compra fue exitosa.',
          redirect: 'Redirigiendo a la página principal...',
        },
        catalog: {
          title: 'Telefonos moviles',
          quantity: '{{count}} modelos',
          sortBy: 'Ordenar por',
          itemsOnPage: 'Elementos por página',
        },
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
