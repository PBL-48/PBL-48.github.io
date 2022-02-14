$(function () {
    var sec=0;//秒を0にする
    var min = 0;//分を0にする
    var hour = 0;//時を0にする
    var min_only;//保存用分を0にする
    var timer;//タイマー機構
    var saves=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];//保存用配列
    var ls = localStorage;//略
    
    // 開始ボタン
    $('#start').click(function() {
        //内部計算用変数をリセット
        sec=0;
        min = 0;
        hour = 0;
        min_only=0;
        $('#clock').html("00:00'00");//表示をリセット
        timer = setInterval(countup, 1000);//countup関数を60秒間隔＝timerとする
        //ボタンの有効化・無効化
        $(this).prop('disabled', true);
        $('#stop').prop('disabled', false);
        
    });
    
    // 停止
    $('#stop').click(function() {
        // 一時停止
        clearInterval(timer);//timerを止める
        //ボタンの有効化・無効化
        $(this).prop('disabled', true);
        //現在の選択要素を変数に
        var kyoka=$("#subject").val();
            //ボタンの有効化・無効化
        $('#stop').prop('disabled', true);
        $('#start').prop('disabled', false);
        $(this).prop('disabled', true);
        $(this).prop("disabled", true);
        //配列内の対応番目に分を加算
        if (kyoka==="現文"){
            saves.splice(0, 1, saves[0]+min_only+Number($("#shudo").val()));
        };
        if (kyoka==="古典"){
            saves.splice(1, 1, saves[1]+min_only+Number($("#shudo").val()));
        };
        if (kyoka==="数I"){
            saves.splice(2, 1, saves[2]+min_only+Number($("#shudo").val()));
        };
        if (kyoka==="数A"){
            saves.splice(3, 1, saves[3]+min_only+Number($("#shudo").val()));
        };
        if (kyoka==="物理"){
            saves.splice(4, 1, saves[4]+min_only+Number($("#shudo").val()));
        };
        if (kyoka==="化学"){
            saves.splice(5, 1, saves[5]+min_only+Number($("#shudo").val()));
        };
        if (kyoka==="生物"){
            saves.splice(6, 1, saves[6]+min_only+Number($("#shudo").val()));
        };
        if (kyoka==="地学"){
            saves.splice(7, 1, saves[7]+min_only+Number($("#shudo").val()));
        };
        if (kyoka==="世史"){
            saves.splice(8, 1, saves[8]+min_only+Number($("#shudo").val()));
        };
        if (kyoka==="日地"){
            saves.splice(9, 1, saves[9]+min_only+Number($("#shudo").val()));
        };
        if (kyoka==="政経"){
            saves.splice(10, 1, saves[10]+min_only+Number($("#shudo").val()));
        };
        if (kyoka==="現社"){
            saves.splice(11, 1, saves[11]+min_only+Number($("#shudo").val()));
        };
        if (kyoka==="倫理"){
            saves.splice(12, 1, saves[12]+min_only+Number($("#shudo").val()));
        };
        if (kyoka==="コ英"){
            saves.splice(13, 1, saves[13]+min_only+Number($("#shudo").val()));
        };
        if (kyoka==="英表"){
            saves.splice(14, 1, saves[14]+min_only+Number($("#shudo").val()));
        };
        if (kyoka==="情報"){
            saves.splice(15, 1, saves[15]+min_only+Number($("#shudo").val()));
        };
        if (kyoka==="家庭"){
            saves.splice(16, 1, saves[16]+min_only+Number($("#shudo").val()));
        };
        if (kyoka==="保健"){
            saves.splice(17, 1, saves[17]+min_only+Number($("#shudo").val()));
        };

    //localstorageに保存
        let date=new Date();
        let day=date.getDate();
        //すでにその日付があれば配列同士を足す
        if (ls.hasOwnProperty(day)){
            var picked=ls.getItem(day).split(",");
            var save2=[Number(picked[0])+Number(saves[0]),Number(picked[1])+Number(saves[1]),Number(picked[2])+Number(saves[2]),Number(picked[3])+Number(saves[3]),Number(picked[4])+Number(saves[4]),Number(picked[5])+Number(saves[5]),Number(picked[6])+Number(saves[6]),Number(picked[7])+Number(saves[7]),Number(picked[8])+Number(saves[8]),Number(picked[9])+Number(saves[9]),Number(picked[10])+Number(saves[10]),Number(picked[11])+Number(saves[11]),Number(picked[12])+Number(saves[12]),Number(picked[13])+Number(saves[13]),Number(picked[14])+Number(saves[14]),Number(picked[15])+Number(saves[15]),Number(picked[16])+Number(saves[16]),Number(picked[17])+Number(saves[17])];
            ls.removeItem(day);
            ls.setItem(day, save2);
        }
        //なければそのまま追加
        else {
            ls.setItem(day,saves);
        }

        console.log("save2="+String(save2));
        saves=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        $("#shudo").val("0");
        $('#list').empty()
            // localStorageすべての情報の取得
            for (var i = 0; i < ls.length; i++) {
            var _key = ls.key(i)
            var array=ls.getItem(_key).split(",");
            // 登録されているkey, valueを順に取得して表示
            var tr = $('<tr></tr>')
            var tddate = $('<td></td>')
            var td0 = $('<td></td>')
            var td1 = $('<td></td>')
            var td2 = $('<td></td>')
            var td3 = $('<td></td>')
            var td4 = $('<td></td>')
            var td5 = $('<td></td>')
            var td6 = $('<td></td>')
            var td7 = $('<td></td>')
            var td8 = $('<td></td>')
            var td9 = $('<td></td>')
            var td10 = $('<td></td>')
            var td11 = $('<td></td>')
            var td12 = $('<td></td>')
            var td13 = $('<td></td>')
            var td14 = $('<td></td>')
            var td15 = $('<td></td>')
            var td16 = $('<td></td>')
            var td17 = $('<td></td>')
            var tdsum=$('<td></td>')
            $('#list').append(tr);
            tr.append(tddate).append(td0).append(td1).append(td2).append(td3).append(td4).append(td5).append(td6).append(td7).append(td8).append(td9).append(td10).append(td11).append(td12).append(td13).append(td14).append(td15).append(td16).append(td17).append(tdsum);
            tddate.html(_key);
            td0.html(array[0]);
            td1.html(array[1]);
            td2.html(array[2]);
            td3.html(array[3]);
            td4.html(array[4]);
            td5.html(array[5]);
            td6.html(array[6]);
            td7.html(array[7]);
            td8.html(array[8]);
            td9.html(array[9]);
            td10.html(array[10]);
            td11.html(array[11]);
            td12.html(array[12]);
            td13.html(array[13]);
            td14.html(array[14]);
            td15.html(array[15]);
            td16.html(array[16]);
            td17.html(array[17]);
            for (var u=0; u<array.length; u++){
                array[u]=parseInt(array[u]);
            }
            tdsum.html(array.reduce(function(sum, element){
                return sum+element;
            }));
        console.log("array="+String(array));
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
  
        //Excel文字化け対策
        var bom=new Uint8Array([0xEF,0xBB,0xBF]);
        //CSVダウンロード
        var blob=new Blob([bom,csv], {type:'text/csv'});
        var url=(window.URL ||window.webkitURL).createObjectURL(blob);
        var a=document.getElementById("download_button");
        a.download_button="table.csv";
        a.href= url;
    })
    
    //手動追加・表の再読込
    $('#add,#reload').click(function(){
        //内部計算用変数をリセット
        sec=0;
        min = 0;
        hour = 0;
        min_only=0;
        $('#clock').html("00:00'00");//表示をリセット
        //現在の選択要素を変数に
        var kyoka=$("#subject").val()
        //配列内の対応番目に分を加算
        if (kyoka==="現文"){
            saves.splice(0, 1, saves[0]+min_only+Number($("#shudo").val()));
        };
        if (kyoka==="古典"){
            saves.splice(1, 1, saves[1]+min_only+Number($("#shudo").val()));
        };
        if (kyoka==="数I"){
            saves.splice(2, 1, saves[2]+min_only+Number($("#shudo").val()));
        };
        if (kyoka==="数A"){
            saves.splice(3, 1, saves[3]+min_only+Number($("#shudo").val()));
        };
        if (kyoka==="物理"){
            saves.splice(4, 1, saves[4]+min_only+Number($("#shudo").val()));
        };
        if (kyoka==="化学"){
            saves.splice(5, 1, saves[5]+min_only+Number($("#shudo").val()));
        };
        if (kyoka==="生物"){
            saves.splice(6, 1, saves[6]+min_only+Number($("#shudo").val()));
        };
        if (kyoka==="地学"){
            saves.splice(7, 1, saves[7]+min_only+Number($("#shudo").val()));
        };
        if (kyoka==="世史"){
            saves.splice(8, 1, saves[8]+min_only+Number($("#shudo").val()));
        };
        if (kyoka==="日地"){
            saves.splice(9, 1, saves[9]+min_only+Number($("#shudo").val()));
        };
        if (kyoka==="政経"){
            saves.splice(10, 1, saves[10]+min_only+Number($("#shudo").val()));
        };
        if (kyoka==="現社"){
            saves.splice(11, 1, saves[11]+min_only+Number($("#shudo").val()));
        };
        if (kyoka==="倫理"){
            saves.splice(12, 1, saves[12]+min_only+Number($("#shudo").val()));
        };
        if (kyoka==="コ英"){
            saves.splice(13, 1, saves[13]+min_only+Number($("#shudo").val()));
        };
        if (kyoka==="英表"){
            saves.splice(14, 1, saves[14]+min_only+Number($("#shudo").val()));
        };
        if (kyoka==="情報"){
            saves.splice(15, 1, saves[15]+min_only+Number($("#shudo").val()));
        };
        if (kyoka==="家庭"){
            saves.splice(16, 1, saves[16]+min_only+Number($("#shudo").val()));
        };
        if (kyoka==="保健"){
            saves.splice(17, 1, saves[17]+min_only+Number($("#shudo").val()));
        };

    //localstorageに保存
        let date=new Date();
        let day=date.getDate();
        //すでにその日付があれば配列同士を足す
        if (ls.hasOwnProperty(day)){
            var picked=ls.getItem(day).split(",");
            //要変更
            var save2=[Number(picked[0])+Number(saves[0]),Number(picked[1])+Number(saves[1]),Number(picked[2])+Number(saves[2]),Number(picked[3])+Number(saves[3]),Number(picked[4])+Number(saves[4]),Number(picked[5])+Number(saves[5]),Number(picked[6])+Number(saves[6]),Number(picked[7])+Number(saves[7]),Number(picked[8])+Number(saves[8]),Number(picked[9])+Number(saves[9]),Number(picked[10])+Number(saves[10]),Number(picked[11])+Number(saves[11]),Number(picked[12])+Number(saves[12]),Number(picked[13])+Number(saves[13]),Number(picked[14])+Number(saves[14]),Number(picked[15])+Number(saves[15]),Number(picked[16])+Number(saves[16]),Number(picked[17])+Number(saves[17])];
            ls.removeItem(day);
            ls.setItem(day, save2);
        }
        //なければそのまま追加
        else {
            ls.setItem(day,saves);
        }
        //要変更
        console.log("save2="+String(save2));
        saves=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        $("#shudo").val("0");
        $('#list').empty()
            // localStorageすべての情報の取得
            for (var i = 0; i < ls.length; i++) {
            var _key = ls.key(i)
            var array=ls.getItem(_key).split(",");
            // 登録されているkey, valueを順に取得して表示
            //教科分追加
            var tr = $('<tr></tr>')
            var tddate = $('<td></td>')
            var td0 = $('<td></td>')
            var td1 = $('<td></td>')
            var td2 = $('<td></td>')
            var td3 = $('<td></td>')
            var td4 = $('<td></td>')
            var td5 = $('<td></td>')
            var td6 = $('<td></td>')
            var td7 = $('<td></td>')
            var td8 = $('<td></td>')
            var td9 = $('<td></td>')
            var td10 = $('<td></td>')
            var td11 = $('<td></td>')
            var td12 = $('<td></td>')
            var td13 = $('<td></td>')
            var td14 = $('<td></td>')
            var td15 = $('<td></td>')
            var td16 = $('<td></td>')
            var td17 = $('<td></td>')
            var tdsum=$('<td></td>')
            $('#list').append(tr);
            tr.append(tddate).append(td0).append(td1).append(td2).append(td3).append(td4).append(td5).append(td6).append(td7).append(td8).append(td9).append(td10).append(td11).append(td12).append(td13).append(td14).append(td15).append(td16).append(td17).append(tdsum);
            tddate.html(_key);
            td0.html(array[0]);
            td1.html(array[1]);
            td2.html(array[2]);
            td3.html(array[3]);
            td4.html(array[4]);
            td5.html(array[5]);
            td6.html(array[6]);
            td7.html(array[7]);
            td8.html(array[8]);
            td9.html(array[9]);
            td10.html(array[10]);
            td11.html(array[11]);
            td12.html(array[12]);
            td13.html(array[13]);
            td14.html(array[14]);
            td15.html(array[15]);
            td16.html(array[16]);
            td17.html(array[17]);
            for (var u=0; u<array.length; u++){
                array[u]=parseInt(array[u]);
            }
            tdsum.html(array.reduce(function(sum, element){
                return sum+element;
            }));
        console.log("array="+String(array));
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
  
        //Excel文字化け対策
        var bom=new Uint8Array([0xEF,0xBB,0xBF]);
        //CSVダウンロード
        var blob=new Blob([bom,csv], {type:'text/csv'});
        var url=(window.URL ||window.webkitURL).createObjectURL(blob);
        var a=document.getElementById("download_button");
        a.download_button="table.csv";
        a.href= url;
    });
    $("#clear").click(function(){
        localStorage.clear();
    });
    //カウントアップ
    function countup()
    {
      sec += 1;

      if (sec>59){
          sec=0;
          min+=1;
      }
  
      if (min > 59) {
        min = 0;
        hour += 1;
      }
  
      sec_number= ('0' + sec).slice(-2);
      min_number = ('0' + min).slice(-2);
      hour_number = ('0' + hour).slice(-2);
  
      $('#clock').html(hour_number + ':' +  min_number+"'"+sec_number);
      min_only=min+(hour*60);
    }
    
  });
