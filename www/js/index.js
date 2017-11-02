/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        
        hockeyapp.start(null, null, '0b7c4d1939a64570a2bd4b38732d1e0e', true);
        
        //ANONYMOUS
        //hockeyapp.start(this.onHockyeSDKSuccess, this.onHockyeSDKFailure, "");

        //EMAIL_PASSWORD
        //hockeyapp.start(this.onHockyeSDKSuccess, this.onHockyeSDKFailure, "", false, false, hockeyapp.loginMode.EMAIL_PASSWORD);

        //EMAIL_ONLY
        //hockeyapp.start(this.onHockyeSDKSuccess, this.onHockyeSDKFailure, "", false, false, hockeyapp.loginMode.EMAIL_ONLY, "dedfae48d85a1bc1232ea7a8f4603860");
        
        //VALIDATE
        //hockeyapp.start(this.onHockyeSDKSuccess, this.onHockyeSDKFailure, "", false, false, hockeyapp.loginMode.VALIDATE);

    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        document.getElementById("crash-me").addEventListener("click", this.onCrashMe.bind(this));
        document.getElementById("compose-feedback").addEventListener("click", this.onComposeFeedback.bind(this));
        document.getElementById("compose-feedback-screenshot").addEventListener("click", this.onComposeFeedbackWithScreenshot.bind(this));
        document.getElementById("track-custom-event").addEventListener("click", this.onTrackCustomEvent.bind(this));
        document.getElementById("check-update").addEventListener("click", this.onCheckForUpdate.bind(this));
    },
    onHockyeSDKSuccess: function(){
        console.log('onHockyeSDKSuccess');
    },
    onHockyeSDKFailure: function(msg){
        console.log('onHockyeSDKFailure: ' + msg);
        alert('onHockyeSDKFailure: ' + msg);
    },
    onCrashMe: function(){
        console.log('Crash me clicked');
        hockeyapp.forceCrash();
    },
    onComposeFeedback: function(){
        console.log('Compose feedback clicked');
        hockeyapp.feedback();
    },
    onComposeFeedbackWithScreenshot: function(){
        console.log('Compose feedback with screenshot clicked');
        hockeyapp.composeFeedback(null, null, true, "Additional data");
    },
    onTrackCustomEvent: function(){
        console.log('Track custom event clicked');
        hockeyapp.trackEvent(this.onTrackCustomEventSuccess, this.onTrackCustomEventFailure, "CUSTOM_EVENT");
    },
    onTrackCustomEventSuccess:function(){
        console.log('Custom event tracked');
    },
    onTrackCustomEventFailure:function(msg){
        console.log('Custom event track failed ' + msg);
        alert('Custom event track failed ' + msg);
    },
    onCheckForUpdate: function(){
        console.log('Check for update clicked');
        hockeyapp.checkForUpdate();
    }
};

app.initialize();