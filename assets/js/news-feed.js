(function () {
  function apiBase() {
    if (typeof window.AUDOE_API_BASE === 'string' && window.AUDOE_API_BASE) {
      return window.AUDOE_API_BASE.replace(/\/+$/, '');
    }
    var path = (window.location.pathname || '').replace(/\\/g, '/');
    if (path.indexOf('/pages/') !== -1) {
      var after = path.slice(path.indexOf('/pages/') + '/pages/'.length);
      var parts = after.split('/').filter(Boolean);
      return new Array(parts.length).fill('..').join('/') + '/api';
    }
    var last = path.lastIndexOf('/');
    var dir = last <= 0 ? '/' : path.slice(0, last + 1);
    try {
      var resolved = new URL('api', window.location.origin + dir);
      return resolved.href.replace(/\/+$/, '');
    } catch (e1) {
      if (dir === '/') {
        return 'api';
      }
      return dir.replace(/\/+$/, '') + '/api';
    }
  }

  function esc(s) {
    var d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
  }

  function svgArrow(locale) {
    if (locale === 'ar') {
      return (
        '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">' +
        '<path d="M19 12H5M12 19l-7-7 7-7"/></svg>'
      );
    }
    return (
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">' +
      '<path d="M5 12h14M12 5l7 7-7 7"/></svg>'
    );
  }

  function renderGrid(items, locale) {
    var readMore = locale === 'ar' ? 'اقرأ المزيد ' : 'Lire la suite ';
    return items
      .map(function (it) {
        var em = it.emoji || '📌';
        return (
          '<div class="news-card">' +
          '<div class="news-img">' +
          '<div class="news-img-placeholder">' +
          esc(em) +
          '</div>' +
          '<span class="news-cat">' +
          esc(it.category || '') +
          '</span></div>' +
          '<div class="news-body">' +
          '<div class="news-date">' +
          esc(it.date_label || '') +
          '</div>' +
          '<h3 class="news-title">' +
          esc(it.title || '') +
          '</h3>' +
          '<a href="' +
          esc(it.href || '#') +
          '" class="news-link">' +
          readMore +
          svgArrow(locale) +
          '</a></div></div>'
        );
      })
      .join('');
  }

  function renderList(items) {
    return items
      .map(function (it) {
        return (
          '<article>' +
          '<div class="meta">' +
          esc(it.date_label || '') +
          '</div>' +
          '<h2><a href="' +
          esc(it.href || '#') +
          '">' +
          esc(it.title || '') +
          '</a></h2>' +
          '<p>' +
          esc(it.excerpt || '') +
          '</p></article>'
        );
      })
      .join('');
  }

  function errMsg(locale) {
    return locale === 'ar'
      ? 'تعذر تحميل الأخبار. تحقق من الاتصال أو إعدادات الخادم.'
      : 'Impossible de charger les actualités. Vérifiez la connexion ou la configuration PHP / MySQL.';
  }

  function emptyMsg(locale) {
    return locale === 'ar' ? 'لا توجد أخبار منشورة حالياً.' : 'Aucune actualité publiée pour le moment.';
  }

  function loadMount(mount) {
    var locale = mount.getAttribute('data-news-locale') || document.documentElement.lang || 'fr';
    if (locale.indexOf('ar') === 0) {
      locale = 'ar';
    } else {
      locale = 'fr';
    }
    var from = mount.getAttribute('data-news-from') || 'pages_fr';
    var limit = mount.getAttribute('data-news-limit') || '50';
    var mode = mount.getAttribute('data-news-mode') || 'list';

    mount.innerHTML =
      '<p class="news-api-loading" style="opacity:.75">' +
      (locale === 'ar' ? 'جاري التحميل…' : 'Chargement des actualités…') +
      '</p>';

    var base = apiBase();
    var url =
      base +
      '/news-list.php?locale=' +
      encodeURIComponent(locale) +
      '&from=' +
      encodeURIComponent(from) +
      '&limit=' +
      encodeURIComponent(limit);

    fetch(url, { credentials: 'same-origin' })
      .then(function (r) {
        return r.text().then(function (text) {
          var j = {};
          try {
            j = text ? JSON.parse(text) : {};
          } catch (e) {
            var err = new Error(
              locale === 'ar'
                ? 'الخادم لم يعد JSON (تحقق من PHP).'
                : 'Le serveur ne renvoie pas du JSON (vérifiez PHP / erreur 404).'
            );
            err._raw = text ? text.slice(0, 280) : '';
            throw err;
          }
          if (!r.ok || !j.ok) {
            var er = new Error(j.error || 'HTTP ' + r.status);
            er._status = r.status;
            throw er;
          }
          return j;
        });
      })
      .then(function (data) {
        var items = data.items || [];
        if (items.length === 0) {
          mount.innerHTML = '<p class="news-api-empty">' + esc(emptyMsg(locale)) + '</p>';
          return;
        }
        mount.innerHTML = mode === 'grid' ? renderGrid(items, locale) : renderList(items);
      })
      .catch(function (err) {
        console.error('[AUDOE] news-list', url, err);
        var extra =
          locale === 'ar'
            ? ' <a href="' +
              esc(base + '/health.php') +
              '">اختبار api/health.php</a>'
            : ' Testez <a href="' +
              esc(base + '/health.php') +
              '">api/health.php</a> — MySQL démarré, base <code>audoe_forms</code> importée, fichier <code>api/config.local.php</code>.';
        mount.innerHTML =
          '<p class="news-api-error">' +
          esc(errMsg(locale)) +
          '</p>' +
          '<p class="news-api-hint" style="font-size:13px;margin-top:12px;line-height:1.5;opacity:.9">' +
          (err && err.message ? '<span style="display:block;margin-bottom:8px">' + esc(err.message) + '</span>' : '') +
          extra +
          '</p>';
      });
  }

  function init() {
    document.querySelectorAll('[data-news-feed]').forEach(function (el) {
      loadMount(el);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
