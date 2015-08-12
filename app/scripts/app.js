(function(document) {
  'use strict';
  
    // Listen for template bound event to know when bindings
    // have resolved and content has been stamped to the page
    app.addEventListener('dom-change', function() {
        
    });

    window.addEventListener('WebComponentsReady', function() {
        var pilotList = document.querySelector('xwsb-pilot-list'),
            squad = document.querySelector('xwsb-squad');
            
        pilotList.addEventListener('xwsb-pilot-select', function(evt) {
            squad.addPilot(evt.detail.pilot);
        });
    });

})(document);
