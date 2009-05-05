// Created by iWeb 3.0.1 local-build-20090504

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:10,offset:new IWPoint(-0.0000,2.0000),color:'#000000',opacity:0.600000}),stroke_0:new IWPhotoFrame([IWCreateImage('Referenser_files/Playtime_blue_hills_01.png'),IWCreateImage('Referenser_files/Playtime_blue_hills_02.png'),IWCreateImage('Referenser_files/Playtime_blue_hills_03.png'),IWCreateImage('Referenser_files/Playtime_blue_hills_06.jpg'),IWCreateImage('Referenser_files/Playtime_blue_hills_09.png'),IWCreateImage('Referenser_files/Playtime_blue_hills_08.png'),IWCreateImage('Referenser_files/Playtime_blue_hills_07.png'),IWCreateImage('Referenser_files/Playtime_blue_hills_04.png')],null,2,1.000000,0.000000,0.000000,0.000000,0.000000,1.000000,25.000000,1.000000,10.000000,355.000000,229.000000,355.000000,229.000000,null,null,null,0.500000)});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Referenser_files/ReferenserMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupIECSS3Opacity('id3');applyEffects()}
function onPageUnload()
{Widget.onunload();}
