var gridItem = document.querySelectorAll('.gridItem');
var gridItem2 = document.querySelectorAll('.gridItem2');
var innerGrid = document.querySelectorAll('#innerGrid');
var statusText = document.querySelector('.status');
var resetBtn = document.querySelector('#resetBtn');
var timeText = document.querySelector('.time');
var heading = document.querySelector('#heading');


var i, j, k;
var blank = -1;
var movesTaken = 0;
var startTime = 0;
var endTime = 0;




resetBtn.addEventListener('click', resetAction);

function resetAction(e) {
    moves = 0;
    e.target.textContent = "RESET";
    heading.textContent = "COLOR TILES";
    statusText.textContent = "Given the 3x3 grid, find a perfect match of 3x3 in the 5x5 grid ";
    timeText.textContent = "Time taken:";
    var tiles = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 , 20, 21, 22, 23, 24];
    var tiles2 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    var n1 = 25;
    var n2=9;
    
    //for 5x5 grid
    for(i = 1; i<=5; i++) {
        j = Math.floor(Math.random() * n1);
        var p=tiles[j];
        gridItem2[p].style.backgroundColor="red";
    
        for(k = j; k<n1-1; k++) {
            tiles[k] = tiles[k+1];
        }
        n1--;
    }
    
    
    for(i = 1; i<=4; i++) {
        j = Math.floor(Math.random() * n1);
        var p=tiles[j];
        gridItem2[p].style.backgroundColor="blue";
    
        for(k = j; k<n1-1; k++) {
            tiles[k] = tiles[k+1];
        }
        n1--;
    }
    
    
    for(i = 1; i<=4; i++) {
        j = Math.floor(Math.random() * n1);
        var p=tiles[j];
        gridItem2[p].style.backgroundColor="green";
    
        for(k = j; k<n1-1; k++) {
            tiles[k] = tiles[k+1];
        }
        n1--;
    }
    
    
    for(i = 1; i<=4; i++) {
        j = Math.floor(Math.random() * n1);
        var p=tiles[j];
        gridItem2[p].style.backgroundColor="yellow";
    
        for(k = j; k<n1-1; k++) {
            tiles[k] = tiles[k+1];
        }
        n1--;
    }
    
    
    for(i = 1; i<=4; i++) {
        j = Math.floor(Math.random() * n1);
        var p=tiles[j];
        gridItem2[p].style.backgroundColor="purple";
    
        for(k = j; k<n1-1; k++) {
            tiles[k] = tiles[k+1];
        }
        n1--;
    }
    
    
    for(i = 1; i<=4; i++) {
        j = Math.floor(Math.random() * n1);
        var p=tiles[j];
        gridItem2[p].style.backgroundColor="pink";
    
        for(k = j; k<n1-1; k++) {
            tiles[k] = tiles[k+1];
        }
        n1--;
    }
    
    //for 3x3 grid
    for(i = 1; i<=2; i++) {
        j = Math.floor(Math.random() * n2);
        var p=tiles2[j];
        gridItem[p].style.backgroundColor="red";
    
        for(k = j; k<n2-1; k++) {
            tiles2[k] = tiles2[k+1];
        }
        n2--;
    }
    
    
    for(i = 1; i<=2; i++) {
        j = Math.floor(Math.random() * n2);
        var p=tiles2[j];
        gridItem[p].style.backgroundColor="blue";
    
        for(k = j; k<n2-1; k++) {
            tiles2[k] = tiles2[k+1];
        }
        n2--;
    }
    
    
    for(i = 1; i<=2; i++) {
        j = Math.floor(Math.random() * n2);
        var p=tiles2[j];
        gridItem[p].style.backgroundColor="green";
    
        for(k = j; k<n2-1; k++) {
            tiles2[k] = tiles2[k+1];
        }
        n2--;
    }
    for(i = 1; i<=1; i++) {
        j = Math.floor(Math.random() * n2);
        var p=tiles2[j];
        gridItem[p].style.backgroundColor="yellow";
    
        for(k = j; k<n2-1; k++) {
            tiles2[k] = tiles2[k+1];
        }
        n2--;
    }
    
    
    for(i = 1; i<=1; i++) {
        j = Math.floor(Math.random() * n2);
        var p=tiles2[j];
        gridItem[p].style.backgroundColor="purple";
    

        for(k = j; k<n2-1; k++) {
            tiles2[k] = tiles2[k+1];
        }
        n2--;
    }
    
    
    for(i = 1; i<=1; i++) {
        j = Math.floor(Math.random() * n2);
        var p=tiles2[j];
        gridItem[p].style.backgroundColor="pink";
    
        for(k = j; k<n2-1; k++) {
            tiles2[k] = tiles2[k+1];
        }
        n2--;
    }

    var i = Math.floor(Math.random() * 25);
    (i>=6 && i<=8) || (i>=11 && i<=13) || (i>=16 && i<=18)
        gridItem2[i].style.backgroundColor = "white";
    blank = i;
    t0 = performance.now();
}
            


for(var a = 0; a<25; a++) {
    gridItem2[a].addEventListener('click', switchTiles);
}

    function switchTiles(e) {
        if((blank+1)%5 != 0 && blank != -1) {
            if(e.target == gridItem2[blank+1]) {
                var x = e.target.style.backgroundColor;
                (blank+1>=6 && blank+1<=8) || (blank+1>=11 && blank+1<=13) || (blank+1>=16 && blank+1<=18)
                    gridItem2[blank+1].style.backgroundColor = "white";
                    gridItem2[blank].style.backgroundColor = x;
                blank++;
                moves++;
            }
        }

        if((blank-1)%5 != 4) {
            if(e.target == gridItem2[blank-1]) {
                var x = e.target.style.backgroundColor;
                (blank-1>=6 && blank-1<=8) || (blank-1>=11 && blank-1<=13) || (blank-1>=16 && blank-1<=18)
                    gridItem2[blank-1].style.backgroundColor = "white";
                
                gridItem2[blank].style.backgroundColor = x;
                blank--;
                moves++;
            }
        }

        if(blank+5<=24 && blank != -1) {
            if(e.target == gridItem2[blank+5]) {
                var x = e.target.style.backgroundColor;
                (blank+5>=6 && blank+5<=8) || (blank+5>=11 && blank+5<=13) || (blank+5>=16 && blank+5<=18)
                    gridItem2[blank+5].style.backgroundColor = "white";
               
                gridItem2[blank].style.backgroundColor = x;
                blank += 5;
                moves++;
            }
        }

        if(blank-5>=0) {
            if(e.target == gridItem2[blank-5]) {
                var x = e.target.style.backgroundColor;
                (blank-5>=6 && blank-5<=8) || (blank-5>=11 && blank-5<=13) || (blank-5>=16 && blank-5<=18)
                    gridItem2[blank-5].style.backgroundColor = "white";
               
                gridItem2[blank].style.backgroundColor = x;
                blank -= 5;
                moves++;
            }
        }

        var flag = true;
        for(var j = 0; j<9; j++) {
            if(gridItem[j].style.backgroundColor != innerGrid[j].style.backgroundColor) {
                flag = false;
                break;
            }
        }
        if(flag) {
            var t1 = performance.now();
            blank = -1;
            heading.textContent = "YOU WIN !";
            statusText.textContent = "Moves Taken = " +moves;
            resetBtn.textContent = "START NEW GAME";
            var s = (Math.round((t1-t0)/1000));
            timeText.textContent = "Time Taken = " +s+" seconds";
        }
    }