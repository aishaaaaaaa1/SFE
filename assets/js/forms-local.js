(function () {
  function mailtoLink(to, subject, body) {
    return 'mailto:' + to + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  }

  var preForm = document.getElementById('form-preinstruction');
  if (preForm) {
    preForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var nom = document.getElementById('pre-nom').value.trim();
      var email = document.getElementById('pre-email').value.trim();
      var objet = document.getElementById('pre-objet').value.trim();
      var desc = document.getElementById('pre-desc').value.trim();
      var pieces = document.getElementById('pre-pieces').value.trim();
      var cap = document.getElementById('pre-captcha').value.trim();
      if (!nom || !email || !desc) {
        alert('Veuillez remplir les champs obligatoires (nom, e-mail, description).');
        return;
      }
      if (parseInt(cap, 10) !== 9) {
        alert('Réponse incorrecte à la question anti-robot (7 + 2).');
        return;
      }
      if (!document.getElementById('pre-accept').checked) {
        alert('Veuillez accepter les conditions relatives aux données personnelles.');
        return;
      }
      var textBody =
        'Pré-instruction — AUDOE Dakhla – Oued Eddahab\r\n\r\n' +
        'Nom et prénom : ' +
        nom +
        '\r\nE-mail : ' +
        email +
        '\r\nObjet : ' +
        objet +
        '\r\n\r\nDescription :\r\n' +
        desc +
        '\r\n\r\nPièces prévues : ' +
        (pieces || '—') +
        '\r\n\r\n---\r\nMessage généré depuis le formulaire local du site.';
      preForm.setAttribute('hidden', '');
      var succ = document.getElementById('preinstruction-success');
      if (succ) {
        succ.removeAttribute('hidden');
        var sum = succ.querySelector('.js-pre-summary');
        if (sum) {
          sum.textContent = nom + ' — ' + (objet || 'Sans objet');
        }
        var a = succ.querySelector('.js-mailto-pre');
        if (a) a.href = mailtoLink('agencedakhla@gmail.com', 'Pré-instruction — ' + (objet || 'Demande'), textBody);
      }
    });
  }

  var enoteForm = document.getElementById('form-enote');
  if (enoteForm) {
    var steps = enoteForm.querySelectorAll('.enote-step');
    var cur = 1;

    function showStep(n) {
      cur = n;
      steps.forEach(function (el) {
        var s = parseInt(el.getAttribute('data-step'), 10);
        if (s === n) el.removeAttribute('hidden');
        else el.setAttribute('hidden', '');
      });
    }

    var enoteRequiredByStep = {
      1: ['enote-civilite', 'enote-nom', 'enote-cin', 'enote-email', 'enote-qualite'],
      2: ['enote-statut', 'enote-pref', 'enote-commune', 'enote-natureprojet', 'enote-natureterrain'],
    };

    function fieldOk(id) {
      var el = document.getElementById(id);
      return el && el.value && String(el.value).trim() !== '';
    }

    enoteForm.querySelectorAll('[data-enote-next]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var list = enoteRequiredByStep[cur];
        if (list) {
          for (var i = 0; i < list.length; i++) {
            if (!fieldOk(list[i])) {
              alert('Veuillez compléter tous les champs obligatoires de cette étape.');
              var miss = document.getElementById(list[i]);
              if (miss) miss.focus();
              return;
            }
          }
        }
        if (cur < 3) showStep(cur + 1);
      });
    });

    enoteForm.querySelectorAll('[data-enote-prev]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (cur > 1) showStep(cur - 1);
      });
    });

    enoteForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var all = enoteRequiredByStep[1].concat(enoteRequiredByStep[2]);
      for (var j = 0; j < all.length; j++) {
        if (!fieldOk(all[j])) {
          alert('Certains champs obligatoires sont vides. Retournez aux étapes précédentes.');
          var back = enoteRequiredByStep[2].indexOf(all[j]) >= 0 ? 2 : 1;
          showStep(back);
          var missEl = document.getElementById(all[j]);
          if (missEl) missEl.focus();
          return;
        }
      }
      if (parseInt(document.getElementById('enote-captcha').value.trim(), 10) !== 8) {
        alert('Réponse incorrecte à la question anti-robot (5 + 3).');
        return;
      }
      if (!document.getElementById('enote-accept').checked) {
        alert('Veuillez accepter les conditions générales.');
        return;
      }
      function v(id) {
        var el = document.getElementById(id);
        return el ? el.value.trim() : '';
      }
      var lines = [
        'E-Note de renseignements — AUDOE Dakhla – Oued Eddahab',
        '',
        'Demandeur',
        'Civilité : ' + v('enote-civilite'),
        'Nom et prénom : ' + v('enote-nom'),
        'C.I.N. / statut : ' + v('enote-cin'),
        'Adresse : ' + v('enote-adrdem'),
        'Téléphone : ' + v('enote-tel'),
        'E-mail : ' + v('enote-email'),
        'Qualité : ' + v('enote-qualite'),
        '',
        'Terrain',
        'Statut foncier : ' + v('enote-statut'),
        'Référence foncière : ' + v('enote-refcad'),
        'Adresse du terrain : ' + v('enote-adrterrain'),
        'Préfecture / province : ' + v('enote-pref'),
        'Commune : ' + v('enote-commune'),
        'Nature du projet : ' + v('enote-natureprojet'),
        'Nature du terrain : ' + v('enote-natureterrain'),
        '',
        'Les pièces justificatives (identité, certificat de propriété, plans cadastraux, etc.) sont à transmettre au bureau d’ordre ou en pièces jointes via votre client mail.',
        '',
        '---',
        'Message généré depuis le formulaire local du site.',
      ];
      var textBody = lines.join('\r\n');
      enoteForm.setAttribute('hidden', '');
      var succ = document.getElementById('enote-success');
      if (succ) {
        succ.removeAttribute('hidden');
        var a = succ.querySelector('.js-mailto-enote');
        if (a) a.href = mailtoLink('agencedakhla@gmail.com', 'E-Note de renseignements', textBody);
      }
    });

    showStep(1);
  }

  var standaloneContactForm = document.getElementById('form-contact-standalone');
  if (standaloneContactForm) {
    standaloneContactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var nom = document.getElementById('cs-nom').value.trim();
      var email = document.getElementById('cs-email').value.trim();
      var tel = document.getElementById('cs-tel').value.trim();
      var sujet = document.getElementById('cs-sujet').value.trim();
      var msg = document.getElementById('cs-msg').value.trim();
      var cap = document.getElementById('cs-captcha').value.trim();
      if (!nom || !email || !sujet || !msg) {
        alert('Veuillez remplir tous les champs obligatoires.');
        return;
      }
      if (parseInt(cap, 10) !== 7) {
        alert('Réponse incorrecte à la question anti-robot (5 + 2).');
        return;
      }
      var textBody =
        'Contact — AUDOE Dakhla – Oued Eddahab\r\n\r\n' +
        'Nom : ' +
        nom +
        '\r\nE-mail : ' +
        email +
        '\r\nTéléphone : ' +
        (tel || '—') +
        '\r\nSujet : ' +
        sujet +
        '\r\n\r\nMessage :\r\n' +
        msg +
        '\r\n\r\n---\r\nMessage généré depuis la page Contact du site.';
      standaloneContactForm.setAttribute('hidden', '');
      var succ = document.getElementById('contact-standalone-success');
      if (succ) {
        succ.removeAttribute('hidden');
        var a = succ.querySelector('.js-mailto-contact-standalone');
        if (a) a.href = mailtoLink('agencedakhla@gmail.com', sujet + ' — Contact AUDOE', textBody);
      }
    });
  }

  var creationForm = document.getElementById('form-creation-contact');
  if (creationForm) {
    creationForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var nom = document.getElementById('cc-nom').value.trim();
      var email = document.getElementById('cc-email').value.trim();
      var tel = document.getElementById('cc-tel').value.trim();
      var sujet = document.getElementById('cc-sujet').value.trim();
      var msg = document.getElementById('cc-msg').value.trim();
      var cap = document.getElementById('cc-captcha').value.trim();
      if (!nom || !email || !sujet || !msg) {
        alert('Veuillez remplir tous les champs obligatoires.');
        return;
      }
      if (parseInt(cap, 10) !== 7) {
        alert('Réponse incorrecte à la question anti-robot (3 + 4).');
        return;
      }
      var textBody =
        'Message depuis la page Création — AUDOE\r\n\r\n' +
        'Nom : ' +
        nom +
        '\r\nE-mail : ' +
        email +
        '\r\nTéléphone : ' +
        (tel || '—') +
        '\r\nSujet : ' +
        sujet +
        '\r\n\r\nMessage :\r\n' +
        msg +
        '\r\n\r\n---\r\nMessage généré depuis le site.';
      creationForm.setAttribute('hidden', '');
      var succ = document.getElementById('creation-contact-success');
      if (succ) {
        succ.removeAttribute('hidden');
        var a = succ.querySelector('.js-mailto-creation');
        if (a) a.href = mailtoLink('agencedakhla@gmail.com', sujet + ' — Contact AUDOE', textBody);
      }
    });
  }

  document.querySelectorAll('form.reg-upload-form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = form.querySelector('input.reg-pdf-input');
      if (!input || !input.files || !input.files[0]) {
        alert('Veuillez sélectionner un fichier PDF.');
        return;
      }
      var file = input.files[0];
      var name = (file.name || '').toLowerCase();
      var okType = file.type === 'application/pdf' || name.endsWith('.pdf');
      if (!okType) {
        alert('Seuls les fichiers PDF sont acceptés.');
        return;
      }
      var cat = form.getAttribute('data-reg-type') || 'Réglementation';
      var msgEl = form.querySelector('.reg-pdf-msg');
      var msg = msgEl ? msgEl.value.trim() : '';
      var body =
        'Catégorie : ' +
        cat +
        '\r\nNom du fichier : ' +
        file.name +
        '\r\n\r\n' +
        (msg || '(aucun message)') +
        '\r\n\r\n---\r\nJoignez ce PDF manuellement à l’e-mail depuis votre messagerie (le navigateur ne peut pas l’attacher automatiquement).';
      window.location.href = mailtoLink('agencedakhla@gmail.com', 'Envoi PDF — ' + cat, body);
    });
  });
})();
