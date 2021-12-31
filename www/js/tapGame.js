//  tapGame.js
//  MonacaFirstApp
//
//  Created by Natsumo Ikeda on 2016/07/01.
//  Copyright 2017 FUJITSU CLOUD TECHNOLOGIES LIMITED All Rights Reserved.
//

/******************************************************/

/******************************************************/

// mBaaSの初期化
var ncmb = new NCMB(this.APPLICATION_KEY, this.CLIENT_KEY);
// タイマー設定
//var countTimer = 13;
// タップ回数カウンター
//var counter = 0;
// 「tapFlag」的のタップ可否設定
//var tapFlag = false;

/*// 「Start」ボタン押下時の処理
function startGame() {
  // ボタンの無効化
  document.gameForm.start.disabled = true;
  document.gameForm.ranking.disabled = true;

  // タップカウンターリセット
  this.counter = 0;
  $("#list-page strong").html(String(0));
  // タイマーリセット
  this.countTimer = 13;
  // タイマーを起動
  countTime(countTimer);
}*/

// 【mBaaS】データの保存
function saveScore(name, score,Kibunn) {
  // **********【問題１】名前とスコアと気分を保存しよう！**********
  var GameScore = ncmb.DataStore("GameScore");
  var gameScore = new GameScore;
  gameScore.set("name", name);
  gameScore.set("score", score);
  gameScore.set("Kibunn", Kibunn);

  gameScore.save()
    .then(function (m) {
      $("#message").html("New object created with objectId: " +
        testClass.objectId);
    })
    .catch(function (err) {
      $("#message").html("Failed to create new object, with error code: " +
        JSON.stringify(err));
    })

    
  // ********************************************************
}

// タイマー
/*function countTime(time) {
  if (time > 0) {
    if (time >= 11) {
      this.tapFlag = false;
      $("#list-page p").html(String(time - 10));
    } else if (time == 10) {
      this.tapFlag = true;
      $("#list-page p").html("スタート！");
    } else {
      this.tapFlag = true;
      $("#list-page p").html(String(time));
    }
    this.countTimer -= 1;
    // １秒後にcountTime()を呼び出す
    setTimeout("countTime(countTimer)", 1000);
  } else {
    this.tapFlag = false;
    $("#list-page p").html("タイムアップ！");
    imputName(this.counter);
  }
}*/
// 「書く」ボタン押下時の処理
function toWrite() {
   $("#list-page strong").html(String("書く"));
   var textbox = document.getElementById("data");
   var value = textbox.value;
   $("#list-page strong").html(String(value));
  //名前入力アラートの表示処理を追加
  imputName(value);
  // 記録画面へ遷移
 // window.location.href = "#ranking-page";
}
name=Kibunn;
var bool_Harebtn= false;
var bool_Kumoribtn= false;
var bool_Amebtn= false;
//「晴れ☀」ボタン押下時の処理
function OnClickedHare() {
   $("#list-page strong").html(String("晴れ☀"));
   bool_Harebtn= true;
    bool_Kumoribtn= false;
    bool_Amebtn= false;
   var textbox = document.getElementById("Hare");
   /*var value = textbox.value;
   $("#list-page strong").html(String(value));*/
  //名前入力アラートの表示処理を追加
  //imputName(value);
}
//「くもり☁」ボタン押下時の処理
function OnClickedKumori() {
   $("#list-page strong").html(String("くもり☁"));
   bool_Kumoribtn= true;
   bool_Harebtn= false;
   bool_Amebtn= false;
  //名前入力アラートの表示処理を追加
  //imputName(value);
}
//「雨☂」ボタン押下時の処理
function OnClickedAme() {
   $("#list-page strong").html(String("雨☂"));
   bool_Amebtn= true;
   bool_Kumoribtn= false;
   bool_Harebtn= false;
  //名前入力アラートの表示処理を追加
  //imputName(value);
}


// 名前入力アラートの表示
function imputName(value) {
  // 入力アラートを表示
  //var name = window.prompt("名前を入力してください", "");
  var kibunn="Kibunn";
  if(bool_Harebtn == true){
    kibunn="晴れ☀";
  }else if(bool_Kumoribtn == true){
    kibunn="くもり☁";
  }else if(bool_Amebtn == true){
    kibunn="雨☂";
  }
  if (kibunn == null || kibunn == "") {
    $("#list-page p").html("保存がキャンセルされました");
  } else {
    // スコアと入力した名前(気分)を保存
    saveScore("maeno", value,kibunn);
    $("#list-page p").html( String(count) );
  }
  // ボタンの有効化
  document.gameForm.start.disabled = false;
  document.gameForm.ranking.disabled = false;
}

/*// タップ数カウント
function tapCount() {
  if (tapFlag) {
    this.counter += 1;
    $("#list-page strong").html(String(this.counter));
  }
}*/
