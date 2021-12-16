//
//  tapGame.js
//  MonacaFirstApp
//
//  Created by Natsumo Ikeda on 2016/07/01.
//  Copyright 2017 FUJITSU CLOUD TECHNOLOGIES LIMITED All Rights Reserved.
//

// 「記録を見る」ボタン押下時の処理
function toRanking() {
  // データ取得
  checkRanking();
  // 記録画面へ遷移
  window.location.href = "#ranking-page";
}

// 【mBaaS】保存したデータの検索と取得
function checkRankingb() {
  /*$("#ranking-page test").html("あああああ");
  // **********【問題２】ランキングを表示しよう！**********
  var highScore = ncmb.DataStore("GameScore");
    highScore//.order("score",true)
    //.limit(5)
    .fetchAll()
    .then(function (results) {
      var data=results.get("score");
      $("#message").html("New object created with objectId: " +
        testClass.objectId);
    })
    .catch(function (err) {
      $("#message").html("Failed to create new object, with error code: " +
        JSON.stringify(err));
    })*/










  // ******************************************************
}


function checkRanking() {
var highScore = ncmb.DataStore("GameScore");
// scoreの降順でデータ5件を取得するように設定する
highScore.order("createDate", true)
         .limit(10)
         .fetchAll()
         .then(function(results){
             // 検索に成功した場合の処理
             console.log("検索に成功しました。");
             // テーブルにデータをセット
             setData(results);
         })
         .catch(function(error){
             // 検索に失敗した場合の処理
             console.log("検索に失敗しました。エラー:" +error);
         });
}
// テーブルにデータを設定
function setData(array) {
  var table = document.getElementById("rankingTable");
  for (i = 0; i < array.length; i++) {
    // 名前の設定
    var name = table.rows[i].cells[1];
    name.innerHTML = array[i].name + "";
    // スコアの設定
    var updateDate = table.rows[i].cells[2];
    updateDate.innerHTML = array[i].updateDate + " ";
  }
}







