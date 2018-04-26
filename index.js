
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        console.log('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {

        if( window.plugins && window.plugins.NativeAudio ) {

            var items = ['bass', 'snare', 'highhat', 'bongo'];
            for(var i=0; i<items.length; i++) {
                var asset = 'assets/' + items[i] + '.mp3';
                window.plugins.NativeAudio.preloadSimple(items[i],
                                                         asset,
                                                         function(msg){console.info(msg)},
                                                         function(msg){ console.error( 'Error: ' + msg ); });


            window.plugins.NativeAudio.preloadComplex('noise',
                                                      'assets/LogoAudio.mp3',
                                                      1, // volume
                                                      1, // voices
                                                      0, // delay
            function(msg) {
                console.info(msg);
                window.plugins.NativeAudio.play('noise',
                                                function(msg){console.info(msg)},
                                                function(msg){ console.error( 'Error: ' + msg ); },
                                                function(msg){ console.error( 'Complete: ' + msg ); });
            },
                                                      //function(msg){ alert( 'Error: ' + msg ); });

        //}

    },

    play: function(drum) {
        document.getElementById(drum).classList.add('touched');
        window.plugins.NativeAudio.play(drum,
                                        function(msg){console.info(msg), document.getElementById(drum).classList.remove('touched');},
                                        function(msg){ console.error( 'Error: ' + msg ); });
    }


};
