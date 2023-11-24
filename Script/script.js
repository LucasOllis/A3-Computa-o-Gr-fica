/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//==============================================================================

//Como carregar em módulos
const Scene = require('Scene');
const Materials = require('Materials');
const TouchGestures = require('TouchGestures');

const plane = Scene.root.find('resposta');

// Use a palavra-chave export para disponibilizar um símbolo no console de depuração de scripts
export const Diagnostics = require('Diagnostics');

var interval;
var materials = [];
var sorting = false;


getMaterials();

TouchGestures.onTap().subscribe(function (gesture) {
	if(sorting) return;
	start();
});


function start(){
	interval = Time.setInterval(sortResult, 50);
	Time.setTimeout(finishSort, 2000);
	sorting = true;
}



function getMaterials(){
	var numeroDeRespostas = 14;
	//Edite aqui para o numero de respostas do seu filtro
	//Os materiais devem seguir o padrão de nomeclatura r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 ...

	for(var i = 1; i <= numeroDeRespostas; i++){
		materials.push(Materials.get('r' + i));
	}
}

function sortResult(){
	var random = Math.floor((Math.random() * materials.length) + 0);
	plane.material = materials[random];
}

function finishSort(){
	Time.clearInterval(interval);
	sorting = false;
}

// Para usar variáveis ​​e funções em arquivos, use a palavra-chave export/import
// exporta const animaçãoDuration = 10;

// Use a palavra-chave import para importar um símbolo de outro arquivo
//importar {animaçãoDuration} de './script.js'

//Para acessar objetos da cena
// const direcionalLight = Scene.root.find('direcionalLight0');

//Para acessar as propriedades da classe
// const direcionalLightIntensity = direcionalLight.intensity;

// Para registrar mensagens no console
// Diagnostics.log('Mensagem do console registrada do script.');