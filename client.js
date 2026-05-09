TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return [{
      icon: 'https://emgov-morgan.azurewebsites.net/assets/img/emgov.png',
      text: 'Estimate Size',
      callback: function(t) {
        return t.popup({
          title: 'Estimate Size',
          url: window.location.origin + '/popup.html',
          height: 180,
        });
      },
    }];
  },
  'card-badges': function(t, options) {
    return t.get('card', 'shared', 'estimateSize').then(function(estimate) {
      if (!estimate) {
        return [];
      }
      return [{
        text: 'Estimate: ' + estimate,
        color: 'green',
      }];
    });
  },
  'show-settings': function(t, options) {
    return t.popup({
      title: 'Power-Up Settings',
      url: window.location.origin + '/popup.html',
      height: 180,
    });
  },
});