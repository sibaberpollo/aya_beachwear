// Variables globales requeridas por el JavaScript original
var LEO_COOKIE_THEME = "LEO_VOGAZA_PANEL_CONFIG";
var add_cart_error = "An error occurred while processing your request. Please try again";
var ajaxsearch = "1";
var buttoncompare_title_add = "Add to Compare";
var buttoncompare_title_remove = "Remove from Compare";
var buttonwishlist_title_add = "Add to Wishlist";
var buttonwishlist_title_remove = "Remove from WishList";
var cancel_rating_txt = "Cancel Rating";
var comparator_max_item = 3;
var compared_products = [];
var data_product_popup = [];
var disable_review_form_txt = "Not exists a criterion to review for this product or this language";
var enable_dropdown_defaultcart = 1;
var enable_flycart_effect = 1;
var enable_notification = 0;
var height_cart_item = "135";
var isLogged = false;
var leo_push = 0;
var leo_search_url = "#";
var leo_token = "035ae513f0bf74ee09f447da1849f1c4";
var leoproductsearch_static_token = "035ae513f0bf74ee09f447da1849f1c4";
var leoproductsearch_token = "73348b55aabb3e055436ebdfd6724371";
var lf_is_gen_rtl = false;
var lps_show_product_img = "1";
var lps_show_product_price = "1";
var lql_ajax_url = "#";
var lql_is_gen_rtl = false;
var lql_module_dir = "/modules/leoquicklogin/";
var lql_myaccount_url = "#";
var lql_redirect = "0";
var number_cartitem_display = 3;
var numpro_display = "100";
var prestashop = {
  "cart": {
    "products": [],
    "totals": {
      "total": {"type": "total", "label": "Total", "amount": 0, "value": "$0.00"},
      "total_including_tax": {"type": "total", "label": "Total (tax incl.)", "amount": 0, "value": "$0.00"},
      "total_excluding_tax": {"type": "total", "label": "Total (tax excl.)", "amount": 0, "value": "$0.00"}
    },
    "subtotals": {
      "products": {"type": "products", "label": "Subtotal", "amount": 0, "value": "$0.00"},
      "discounts": null,
      "shipping": {"type": "shipping", "label": "Shipping", "amount": 0, "value": ""},
      "tax": {"type": "tax", "label": "Taxes", "amount": 0, "value": "$0.00"}
    },
    "products_count": 0,
    "summary_string": "0 items",
    "vouchers": {"allowed": 0, "added": []},
    "discounts": [],
    "minimalPurchase": 0,
    "minimalPurchaseRequired": ""
  },
  "currency": {"name": "US Dollar", "iso_code": "USD", "iso_code_num": "840", "sign": "$"},
  "customer": {
    "lastname": null,
    "firstname": null,
    "email": null,
    "birthday": null,
    "newsletter": null,
    "newsletter_date_add": null,
    "optin": null,
    "website": null,
    "company": null,
    "siret": null,
    "ape": null,
    "is_logged": false,
    "gender": {"type": null, "name": null},
    "addresses": []
  },
  "language": {
    "name": "English (English)",
    "iso_code": "en",
    "locale": "en-US",
    "language_code": "en-us",
    "is_rtl": "0",
    "date_format_lite": "m/d/Y",
    "date_format_full": "m/d/Y H:i:s",
    "id": 1
  },
  "page": {
    "title": "",
    "canonical": null,
    "meta": {
      "title": "Leo Vogaza",
      "description": "Shop powered by PrestaShop",
      "keywords": "",
      "robots": "index"
    },
    "page_name": "index",
    "body_classes": {
      "lang-en": true,
      "lang-rtl": false,
      "country-US": true,
      "currency-USD": true,
      "layout-full-width": true,
      "page-index": true,
      "tax-display-disabled": true
    },
    "admin_notifications": []
  },
  "shop": {
    "name": "Leo Vogaza",
    "logo": "/index_files/leo-vogaza-logo-1603779785.jpg",
    "stores_icon": "/img/logo_stores.png",
    "favicon": "/favicon.ico"
  },
  "urls": {
    "base_url": "/",
    "current_url": "/",
    "shop_domain_url": "/",
    "img_ps_url": "/index_files/",
    "img_cat_url": "/index_files/",
    "img_lang_url": "/index_files/",
    "img_prod_url": "/index_files/",
    "img_manu_url": "/index_files/",
    "img_sup_url": "/index_files/",
    "img_ship_url": "/index_files/",
    "img_store_url": "/index_files/",
    "img_col_url": "/index_files/",
    "img_url": "/index_files/",
    "css_url": "/index_files/",
    "js_url": "/index_files/",
    "pic_url": "/index_files/",
    "pages": {
      "address": "#",
      "addresses": "#",
      "authentication": "#",
      "cart": "#",
      "category": "#",
      "cms": "#",
      "contact": "#",
      "discount": "#",
      "guest_tracking": "#",
      "history": "#",
      "identity": "#",
      "index": "/",
      "my_account": "#",
      "order_confirmation": "#",
      "order_detail": "#",
      "order_follow": "#",
      "order": "#",
      "order_return": "#",
      "order_slip": "#",
      "pagenotfound": "#",
      "password": "#",
      "pdf_invoice": "#",
      "pdf_order_return": "#",
      "pdf_order_slip": "#",
      "prices_drop": "#",
      "product": "#",
      "search": "#",
      "sitemap": "#",
      "stores": "#",
      "supplier": "#",
      "register": "#",
      "order_login": "#"
    },
    "alternative_langs": {},
    "theme_assets": "/",
    "actions": {"logout": "#"},
    "no_picture_image": {
      "bySize": {
        "cart_default": {"url": "/index_files/", "width": 100, "height": 124},
        "small_default": {"url": "/index_files/", "width": 150, "height": 186},
        "medium_default": {"url": "/index_files/", "width": 452, "height": 452},
        "home_default": {"url": "/index_files/", "width": 800, "height": 1014},
        "large_default": {"url": "/index_files/", "width": 1000, "height": 1243}
      },
      "small": {"url": "/index_files/", "width": 100, "height": 124},
      "medium": {"url": "/index_files/", "width": 452, "height": 452},
      "large": {"url": "/index_files/", "width": 1000, "height": 1243},
      "legend": ""
    }
  },
  "configuration": {
    "display_taxes_label": false,
    "display_prices_tax_incl": false,
    "is_catalog": false,
    "show_prices": true,
    "opt_in": {"partner": true},
    "quantity_discount": {"type": "discount", "label": "Unit discount"},
    "voucher_enabled": 0,
    "return_enabled": 0
  },
  "field_required": [],
  "breadcrumb": {
    "links": [{"title": "Home", "url": "/"}],
    "count": 1
  },
  "link": {
    "protocol_link": "https://",
    "protocol_content": "https://"
  },
  "time": Date.now(),
  "static_token": "035ae513f0bf74ee09f447da1849f1c4",
  "token": "73348b55aabb3e055436ebdfd6724371",
  "debug": false
};
var productcompare_add = "The product has been added to list compare";
var productcompare_add_error = "An error occurred while adding. Please try again";
var productcompare_max_item = "You cannot add more than 3 product(s) to the product comparison";
var productcompare_remove = "The product was successfully removed from list compare";
var productcompare_remove_error = "An error occurred while removing. Please try again";
var productcompare_url = "#";
var productcompare_viewlistcompare = "View list compare";
var review_error = "An error occurred while processing your request. Please try again";
var show_popup = 1;
var text_no_product = "Don't have products";
var type_dropdown_defaultcart = "dropdown";
var type_flycart_effect = "fade";
var url_leoproductattribute = "#";
var width_cart_item = "265";
var wishlist_add = "The product was successfully added to your wishlist";
var wishlist_cancel_txt = "Cancel";
var wishlist_confirm_del_txt = "Delete selected item?";
var wishlist_del_default_txt = "Cannot delete default wishlist";
var wishlist_email_txt = "Email";
var wishlist_loggin_required = "You must be logged in to manage your wishlist";
var wishlist_ok_txt = "Ok";
var wishlist_quantity_required = "You must enter a quantity";
var wishlist_remove = "The product was successfully removed from your wishlist";
var wishlist_reset_txt = "Reset";
var wishlist_send_txt = "Send";
var wishlist_send_wishlist_txt = "Send wishlist";
var wishlist_url = "#";
var wishlist_viewwishlist = "View your wishlist";

var choosefile_text = "Choose file";
var turnoff_popup_text = "Do not show this popup again";
var size_item_quickview = 113;
var style_scroll_quickview = 'vertical';
var size_item_page = 113;
var style_scroll_page = 'horizontal';
var size_item_quickview_attr = 113;
var style_scroll_quickview_attr = 'vertical';
var size_item_popup = 113;
var style_scroll_popup = 'vertical';

// Funciones de compatibilidad
window.pcRunDynamicModulesJs = function() {};
window.processDynamicModules = function(dyndatas) {
  for (var key in dyndatas) {
    if (key == 'js') {
      document.body.insertAdjacentHTML('beforeend', dyndatas[key]);
    } else if (typeof key === 'string' && key.startsWith('dyn')) {
      var elem = document.getElementById(key);
      if (elem) elem.outerHTML = dyndatas[key];
    }
  }
  if (typeof window.pcRunDynamicModulesJs == 'function') {
    window.pcRunDynamicModulesJs();
  }
};

// Deshabilitar LeoSpeed y otras funcionalidades dinámicas
var leo_speed_enable = 0;
var enable_leo_speed = 0;

// Mock de funciones AJAX para evitar errores
if (typeof $ !== 'undefined' && $) {
  // Interceptar llamadas AJAX problemáticas
  var originalAjax = $.ajax;
  $.ajax = function(options) {
    // Si es una llamada a módulos dinámicos, retornar vacío
    if (options && options.url && (
      options.url.indexOf('module') !== -1 ||
      options.url.indexOf('ajax') !== -1 ||
      options.url.indexOf('leospeed') !== -1
    )) {
      console.log('[Mock] Blocked AJAX call to:', options.url);
      if (options.success) {
        options.success({});
      }
      return {
        done: function(fn) { fn({}); return this; },
        fail: function() { return this; },
        always: function(fn) { fn(); return this; }
      };
    }
    // Para otras llamadas, usar el original
    return originalAjax.apply(this, arguments);
  };
}

// Mock de LeoCustomAjax
window.LeoCustomAjax = function() {
  this.processAjax = function() {
    console.log('[Mock] LeoCustomAjax.processAjax called but disabled');
  };
};

// Mock adicional para jQuery
if (typeof $ !== 'undefined') {
  $.LeoCustomAjax = window.LeoCustomAjax;
}

