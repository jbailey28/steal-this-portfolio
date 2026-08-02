// "Steal This Portfolio" — live fork counter from the GitHub repo.
document.querySelectorAll('.jb-live[data-repo]').forEach(function (card) {
  var repo = card.getAttribute('data-repo');
  var el = card.querySelector('[data-count]');
  if (!repo || !el) return;
  fetch('https://api.github.com/repos/' + repo)
    .then(function (r) { return r.ok ? r.json() : Promise.reject(); })
    .then(function (d) {
      var n = d.forks_count || 0;
      el.textContent = n ? ('Stolen ' + n + '×') : 'Be the first';
    })
    .catch(function () {});
});
