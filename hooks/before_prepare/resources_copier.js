#!/usr/bin/env node
/*
// A cordova hook that copies various resource files, mainly icons and splash screens, 
// into the appropriate platform specific location.
// Version; 3
// Modified from https://github.com/numediaweb/resources_copier
// Need to setup the appName (from config.xml)
*/

/////////////////////////////////////////////////////////////////////
// Ios require name of the application. To find how to get this info
var appName = "CI_Panxampla";
/////////////////////////////////////////////////////////////////////


// give the console some vibrant colors :)
var colors = require('colors');

/*
// This module adds a few extra file system methods that aren't included in the native fs module. 
// It is a drop in replacement for fs.
// npm install --save fs-extra
*/
var fs = require('fs-extra');

// Returns the current working directory of the process; console.log('Current directory: ' + process.cwd());
var rootDir = process.cwd();

//copies directory and subdirectories
fs.copy(rootDir + '/resources/android/res', rootDir + '/platforms/android/res', function (err) {
    if (err) return console.error(err.red + ' An error occured! did you put your assets in; "resources/android/res"? \r\n'.red);

    process.stdout.write('Android Icon Resources successfully copied! \r\n'.green)
});

//Copy the AndroidManifest.xml and prevent losing changes when you delete/rebuild the platform
//fs.copy(rootDir + '/resources/android/AndroidManifest.xml', rootDir + '/platforms/android/AndroidManifest.xml', function (err) {
//    if (err) return console.error(err.red + ' An error occured! Could not copy "AndroidManifest.xml" \r\n'.red);
//
//    process.stdout.write('AndroidManifest.xml successfully copied! \r\n'.green)
//});

// Copy the IOS icons
fs.copy(rootDir + '/resources/ios/icons', rootDir + '/platforms/ios/'+appName+'/resources/icons', function(err) {
	if (err) return console.error(err.red +'An error occured! did you put assets in; "resources/ios/icons"? \r\n'.red);
	process.stdout.write('IOS Icon Resources successfully copied! \r\n'.green)
});

// Copy the IOS splash
fs.copy(rootDir + '/resources/ios/splash', rootDir + '/platforms/ios/'+appName+'/resources/splash', function(err) {
	if (err) return console.error(err.red +'An error occured! did you put assets in; "resources/ios/splash"? \r\n'.red);
	process.stdout.write('IOS Splash Resources successfully copied! \r\n'.green)
});

// Copy directories and subdirectories of Assets. Put the sound files here
fs.copy(rootDir + '/resources/android/assets', rootDir + '/platforms/android/assets', function (err) {
    if (err) return console.error(err.red + ' An error occured! did you put your assets in; "resources/android/assets"? \r\n'.red);

    process.stdout.write('Android audio assets successfully copied! \r\n'.green)
});



// Copy the android project
//fs.copy(rootDir + '/resources/ios/' + appName + '.xcodeproj', rootDir + '/platforms/ios/'+appName+'.xcodeproj', function(err) {
//    if (err) return console.error(err.red + ' An error occured! Could not copy the .xcodeproj file" \r\n'.red);
//	process.stdout.write('The .xcodeproj successfully copied! \r\n'.green)
//});
