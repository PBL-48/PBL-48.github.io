$(function () {
    var min = 0;
    var hour = 0;
    var min_only;
    var timer;
    var saves=[0,0,0,0,0];//教科数分 要素を並べる
    var ls = localStorage;
  
    // 開始
    $('#start').click(function() {
      // 00:00から開始
      min = 0;
      hour = 0;
      min_only=0;
      $('#clock').html('00:00');
      timer = setInterval(countup, 60000);
  //ボタンの有効化・無効化
      $(this).prop('disabled', true);
      $('#stop').prop('disabled', false);
    });
  
    // 停止
    $('#stop').click(function() {
      // 一時停止
      clearInterval(timer);
  //ボタンの有効化・無効化
      $(this).prop('disabled', true);
  
      var kyoka=$("#subject").val();
      //教科数分ifを追加、教科のところと数字だけ変更
      //加算
      if (kyoka==="国語"){
          saves.splice(0, 1, saves[0]+min_only+Number($("#shudo").val()));
      };
      if (kyoka==="数学"){
          saves.splice(1, 1, saves[1]+min_only+Number($("#shudo").val()));
      };
      if (kyoka==="理科"){
          saves.splice(2, 1, saves[2]+min_only+Number($("#shudo").val()));
      };
      if (kyoka==="社会"){
          saves.splice(3, 1, saves[3]+min_only+Number($("#shudo").val()));
      };
      if (kyoka==="英語"){
          saves.splice(4, 1, saves[4]+min_only+Number($("#shudo").val()));
      };
      //ボタンの有効化・無効化
      $('#stop').prop('disabled', true);
      $('#start').prop('disabled', false);
      $(this).prop('disabled', true);
  //localstorageに保存
      let date=new Date();
      let day=date.getDate();
      //すでにその日付があれば配列同士を足す
      if (ls.hasOwnProperty(day)){
            var picked=ls.getItem(day).split(",");
            //要変更
            var save2=[Number(picked[0])+Number(saves[0]),Number(picked[1])+Number(saves[1]),Number(picked[2])+Number(saves[2]),Number(picked[3])+Number(saves[3]),Number(picked[4])+Number(saves[4])];
            ls.removeItem(day);
            ls.setItem(day, save2);
        }
        //なければそのまま追加
      else {
            ls.setItem(day,saves);
        }
      //要変更
      saves=[0,0,0,0,0];
      $("#shudo").val("0");
      $(this).prop("disabled", true);
      $('#list').empty()
          // localStorageすべての情報の取得
          for (var i = 0; i < ls.length; i++) {
          var _key = ls.key(i)
          var array=ls.getItem(_key).split(",");
          // 登録されているkey, valueを順に取得して表示
          //教科分追加
          var tr = $('<tr></tr>')
          var tddate = $('<td></td>')
          var tdjapanese = $('<td></td>')
          var tdmath = $('<td></td>')
          var tdscience = $('<td></td>')
          var tdsocial = $('<td></td>')
          var tdenglish = $('<td></td>')
          var tdsum=$('<td></td>')
          $('#list').append(tr)
          tr.append(tddate).append(tdjapanese).append(tdmath).append(tdscience).append(tdsocial).append(tdenglish).append(tdsum)
          tddate.html(_key);
          tdjapanese.html(array[0]);
          tdmath.html(array[1]);
          tdscience.html(array[2]);
          tdsocial.html(array[3]);
          tdenglish.html(array[4]);
          for (var u=0; u<array.length; u++){
              array[u]=parseInt(array[u]);
          }
          tdsum.html(array.reduce(function(sum, element){
              return sum+element;
          }))
      }
      
      //表からデータ取得
      var table=$('table#csv-table tr').map(function(i) {
        return $(this).find('td,th').map(function() {
          return $(this).text();
        });
        
      });
      
      //CSVデータ整形
      var csv=table.map(function(i, row){
        return row.toArray().join(',');
      }).toArray().join('\r\n');
      console.log("csv="+csv);
  
      //Excel文字化け対策
      var bom=new Uint8Array([0xEF,0xBB,0xBF]);
      //CSVダウンロード
      var blob=new Blob([bom,csv], {type:'text/csv'});
      var url=(window.URL ||window.webkitURL).createObjectURL(blob);
      var a=document.getElementById("download_button");
      a.download_button="table.csv";
      a.href= url;
    })
    //カウントアップ
    function countup()
    {
      min += 1;
  
      if (min > 59) {
        min = 0;
        hour += 1;
      }
  
      min_number = ('0' + min).slice(-2);
      hour_number = ('0' + hour).slice(-2);
  
      $('#clock').html(hour_number + ':' +  min_number);
      min_only=min+(hour*60);
    }
    
  });
