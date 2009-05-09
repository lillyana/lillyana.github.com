// Created by iWeb 3.0.1 local-build-20090508

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:10,offset:new IWPoint(-0.0000,2.0000),color:'#000000',opacity:0.600000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Kontakt_files/KontaktMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupIECSS3Opacity('id3');applyEffects()}
function onPageUnload()
{Widget.onunload();}
