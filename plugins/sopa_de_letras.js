//CREADO POR @gata_dios
// EL CÓDIGO ESTARÁ OFUSCADO HASTA QUE SE COMPRUEBE QUE NO EXISTA ERRORES

// SOPA DE LETRAS (BETA)
const _0xd0eee8=_0x4222;(function(_0x32a38f,_0x53f23e){const _0x57d9aa=_0x4222,_0x2fe9d2=_0x32a38f();while(!![]){try{const _0x2b4fd7=parseInt(_0x57d9aa(0xfb))/0x1*(parseInt(_0x57d9aa(0x10e))/0x2)+-parseInt(_0x57d9aa(0xee))/0x3*(parseInt(_0x57d9aa(0x10b))/0x4)+parseInt(_0x57d9aa(0xf5))/0x5+-parseInt(_0x57d9aa(0xe3))/0x6*(-parseInt(_0x57d9aa(0x106))/0x7)+parseInt(_0x57d9aa(0xd5))/0x8*(-parseInt(_0x57d9aa(0xf0))/0x9)+-parseInt(_0x57d9aa(0x107))/0xa*(-parseInt(_0x57d9aa(0x100))/0xb)+-parseInt(_0x57d9aa(0xfd))/0xc;if(_0x2b4fd7===_0x53f23e)break;else _0x2fe9d2['push'](_0x2fe9d2['shift']());}catch(_0x209051){_0x2fe9d2['push'](_0x2fe9d2['shift']());}}}(_0x4cc5,0x1d485));let fila,columna,sopaNube,sopaPalabra,sopaDir,userSP=null,intentos=0x0,handler=async(_0x588a8d,{conn:_0x1a37dd,text:_0x5648de,usedPrefix:_0x43df11,command:_0x1d9403})=>{const _0x59503d=_0x4222;userSP===null&&(userSP=_0x588a8d[_0x59503d(0xd6)][_0x59503d(0x10d)]('@')[0x0],await _0x1a37dd[_0x59503d(0xe1)](_0x588a8d[_0x59503d(0x102)],'*@'+_0x588a8d[_0x59503d(0xd6)]['split']('@')[0x0]+_0x59503d(0xf6),_0x588a8d,{'mentions':[_0x588a8d[_0x59503d(0xd6)]]}));async function _0x1e6a59(){const _0x52169b=_0x59503d,_0x4ef470=0xa;let _0x26fb41=new Array(_0x4ef470);for(let _0x4197c8=0x0;_0x4197c8<_0x4ef470;_0x4197c8++){_0x26fb41[_0x4197c8]=new Array(_0x4ef470);}const _0x20f01a=['CASA',_0x52169b(0xd4),_0x52169b(0x10f),_0x52169b(0x115),_0x52169b(0x10a),_0x52169b(0xea),_0x52169b(0x112),_0x52169b(0xf9),_0x52169b(0xd8),_0x52169b(0xe8),_0x52169b(0x103),_0x52169b(0xdd),_0x52169b(0xe4),_0x52169b(0xd7),'MUEBLES'],_0x54a10f=_0x20f01a[Math[_0x52169b(0xef)](Math[_0x52169b(0xf2)]()*_0x20f01a[_0x52169b(0xda)])];let _0x8d8052=Math[_0x52169b(0xef)](Math[_0x52169b(0xf2)]()*_0x4ef470),_0x124c97=Math[_0x52169b(0xef)](Math['random']()*_0x4ef470);const _0x1d25dd=[_0x52169b(0xfe),_0x52169b(0x113),_0x52169b(0xd2),_0x52169b(0x109)],_0x1e4a32=_0x1d25dd[Math['floor'](Math['random']()*_0x1d25dd[_0x52169b(0xda)])];while(_0x8d8052+_0x54a10f['length']>_0x4ef470&&_0x1e4a32===_0x52169b(0x113)||_0x124c97+_0x54a10f[_0x52169b(0xda)]>_0x4ef470&&_0x1e4a32===_0x52169b(0xfe)||_0x8d8052+_0x54a10f[_0x52169b(0xda)]>_0x4ef470||_0x124c97+_0x54a10f[_0x52169b(0xda)]>_0x4ef470){_0x8d8052=Math[_0x52169b(0xef)](Math[_0x52169b(0xf2)]()*_0x4ef470),_0x124c97=Math['floor'](Math[_0x52169b(0xf2)]()*_0x4ef470);}for(let _0x1fda47=0x0;_0x1fda47<_0x54a10f[_0x52169b(0xda)];_0x1fda47++){if(_0x1e4a32===_0x52169b(0xfe))_0x26fb41[_0x8d8052][_0x124c97+_0x1fda47]=_0x54a10f[_0x52169b(0xff)](_0x1fda47);else{if(_0x1e4a32===_0x52169b(0x113))_0x26fb41[_0x8d8052+_0x1fda47][_0x124c97]=_0x54a10f[_0x52169b(0xff)](_0x1fda47);else _0x1e4a32===_0x52169b(0xd2)?_0x26fb41[_0x8d8052+_0x1fda47][_0x124c97+_0x1fda47]=_0x54a10f[_0x52169b(0xff)](_0x1fda47):_0x26fb41[_0x8d8052+_0x1fda47][_0x124c97-_0x1fda47]=_0x54a10f[_0x52169b(0xff)](_0x1fda47);}}const _0x304f39=_0x52169b(0xf1);let _0x339116='';_0x339116+='\x20\x20\x20\x20\x20'+[...Array(_0x4ef470)[_0x52169b(0xf8)]()][_0x52169b(0xeb)]('\x20\x20\x20')+'\x0a',_0x339116+=_0x52169b(0xd1)+'┄'[_0x52169b(0x105)](_0x4ef470)+'┄┄'+_0x52169b(0xe5);for(let _0x183128=0x0;_0x183128<_0x4ef470;_0x183128++){let _0x17b7aa=_0x183128+'\x20|\x20';for(let _0x16b421=0x0;_0x16b421<_0x4ef470;_0x16b421++){if(_0x26fb41[_0x183128][_0x16b421])_0x17b7aa+=_0x26fb41[_0x183128][_0x16b421]+'\x20';else{let _0x40e300=_0x304f39['charAt'](Math[_0x52169b(0xef)](Math[_0x52169b(0xf2)]()*_0x304f39[_0x52169b(0xda)]));_0x17b7aa+=_0x40e300+'\x20';}}_0x17b7aa+='\x20|',_0x339116+=_0x17b7aa+'\x0a';}_0x339116+=_0x52169b(0xd3)+'┄'[_0x52169b(0x105)](_0x4ef470)+'┄┄'+'╯*',_0x339116=_0x339116[_0x52169b(0xdc)](/[a-zA-Z]/g,_0x367a1d=>_0x304f39[_0x367a1d[_0x52169b(0xdb)]()-0x41]||_0x367a1d),await _0x588a8d[_0x52169b(0xe1)]('🔠\x20*SOPA\x20DE\x20LETRAS*\x20🔠\x0a*ENCUENTRE\x20LA\x20PALABRA\x20_\x22'+_0x54a10f+'\x22_\x20EN\x20LA\x20SOPA\x20DE\x20LETRAS,\x20TIENE\x20_'+intentos+_0x52169b(0xf4)+_0x54a10f['charAt'](0x0)+_0x52169b(0x111)+_0x54a10f+'\x22_*\x0a\x0a*EJEMPLO:*\x0a❇️\x20```'+(_0x43df11+_0x1d9403)+'\x2028```\x0a➡️\x20```FILA\x202```\x0a⬇️\x20```COLUMNA\x208```\x0a\x0a*_\x22'+_0x54a10f+_0x52169b(0xe7)+_0x8d8052+_0x52169b(0xfa)+_0x124c97+'*\x0a'+_0x339116),fila=_0x8d8052,columna=_0x124c97,sopaNube=_0x339116,sopaPalabra=_0x54a10f,sopaDir=_0x1e4a32;}let _0x1b6045=userSP+_0x59503d(0xf7);if(userSP!=_0x588a8d[_0x59503d(0xd6)]['split']('@')[0x0]){await _0x1a37dd[_0x59503d(0xe1)](_0x588a8d[_0x59503d(0x102)],'*@'+_0x1b6045[_0x59503d(0x10d)]('@')[0x0]+_0x59503d(0xde),_0x588a8d,{'mentions':[_0x1b6045]});return;}if(intentos===0x0){intentos=0x3,_0x1e6a59(),_0x46b1d3();function _0x46b1d3(){setTimeout(()=>{const _0x9eb718=_0x4222;userSP!==null&&(userSP=null,console[_0x9eb718(0x110)](_0x9eb718(0xec))),_0x46b1d3();},0x2*0x3c*0x3e8);}}else{let _0x5d06c4=sopaDir;_0x5d06c4=_0x5d06c4[_0x59503d(0xdc)](/([A-Z])/g,_0x59503d(0xed))[_0x59503d(0xd9)]()[_0x59503d(0xdc)](/^./,_0x8b366c=>_0x8b366c[_0x59503d(0xe2)]());if(''+fila+columna==_0x5648de)await _0x588a8d[_0x59503d(0xe1)](_0x59503d(0x101)+sopaPalabra+_0x59503d(0x108)+_0x5d06c4+_0x59503d(0xe0)+fila+_0x59503d(0xf3)+columna+'_*'),(fila,columna,sopaNube,sopaPalabra,sopaDir,userSP=null),intentos=0x0;else{if(intentos===0x1){fila,columna,sopaNube,sopaPalabra,sopaDir,userSP=null,intentos=0x0,await _0x588a8d[_0x59503d(0xe1)](_0x59503d(0xe6)+sopaPalabra+'\x22_\x20SE\x20ENCONTRABA\x20EN\x20LA\x20DIRECCIÓN\x20_'+_0x5d06c4+_0x59503d(0xe0)+fila+_0x59503d(0xf3)+columna+'_*');return;}else intentos-=0x1,await _0x588a8d['reply'](_0x59503d(0xdf)+intentos+'_\x20INTENTOS!!*'+(intentos===0x1?'':_0x59503d(0xe9)+sopaPalabra+'```')+'\x0a\x0a'+(intentos===0x1?_0x59503d(0x114)+sopaPalabra+_0x59503d(0xfc)+_0x5d06c4+_0x59503d(0x104):'')+sopaNube);}}};function _0x4222(_0x16e3f3,_0xd0d624){const _0x4cc584=_0x4cc5();return _0x4222=function(_0x422243,_0x1d7346){_0x422243=_0x422243-0xd1;let _0x4a3598=_0x4cc584[_0x422243];return _0x4a3598;},_0x4222(_0x16e3f3,_0xd0d624);}handler[_0xd0eee8(0x10c)]=/^(sopa)$/i;export default handler;function _0x4cc5(){const _0x903331=['18356EXhjZh','WHATSAPP','log','\x22_\x20DE\x20LA\x20PALABRA\x20_\x22','VIRUS','vertical','```💡\x20PISTA!!```\x0a*LA\x20PALABRA\x20_','GITHUB','\x20\x20*╭','diagonalDerecha','\x20\x20*╰','GATABOT','88wsuscR','sender','MARCADORES','MOTOS','toLowerCase','length','charCodeAt','replace','COMPUTER','\x20ESTA\x20JUGANDO\x20SOPA\x20DE\x20LETRAS\x20ACTUALEMENTE*','*INCORRECTO.\x20TE\x20QUEDAN\x20_','_\x20DE\x20LA\x20FILA\x20_','reply','toUpperCase','474SrfpFg','LAPIZ','╮*\x0a','*AGOTASTE\x20LOS\x20INTENTOS!!\x20LA\x20PALABRA\x20_\x22','\x22_\x20ESTA\x20EN\x20LA\x20FILA\x20','ROBOT','\x0a*PALABRA\x20A\x20ENCONTRAR:*\x20```','PIZZAS','join','userSP\x20se\x20ha\x20vuelto\x20null\x20después\x20de\x202\x20minutos','\x20$1','2988XYMBCD','floor','47916NZVSbj','ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓜⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ','random','_\x20Y\x20COLUMNA\x20_','_\x20INTENTOS!!*\x0a\x0a*ESCRIBA\x20EL\x20NÚMERO\x20DE\x20FILA\x20Y\x20COLUMNA\x20DEL\x20COMIENZO\x20DE\x20LA\x20PRIMERA\x20LETRA\x20_\x22','866320qFoTaZ','\x20REGISTRADO\x20EN\x20EL\x20JUEGO*','@s.whatsapp.net','keys','CARRO',',\x20COLUMNA\x20','7CNTleu','_\x20SE\x20ENCUENTRA\x20EN\x20LA\x20DIRECCIÓN\x20_\x22','2742984HSeQMj','horizontal','charAt','22PrTxkR','*CORRECTO!!\x20LA\x20PALABRA\x20_\x22','chat','CELULAR','\x22_*\x0a\x0a','repeat','11613pPgnNW','750340FudHsU','\x22_\x20SE\x20ENCONTRABA\x20EN\x20LA\x20DIRECCIÓN\x20_','diagonalIzquierda','COLORES','448sckJrC','command','split'];_0x4cc5=function(){return _0x903331;};return _0x4cc5();}