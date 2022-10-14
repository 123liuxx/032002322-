
//变量
const left = Array(3).fill(0).map(x => Array(3).fill(0));
const right = Array(3).fill(0).map(x => Array(3).fill(0));
let flag = 0;
let m;
let countleft, countright = 0;
let total1 = 0;
let total2 = 0;
let zhuan = 1;

function f() {
    if (!flag) {
        m = Math.floor(Math.random() * 6) + 1;
        document.getElementById('ds').style.backgroundImage = 'url("../images/9267d5f2d2df7d55.jpg")';
        setTimeout(function () {
        if (zhuan == 1) {
            switch (m) {
                case 1:
                    document.getElementById('ds').style.backgroundImage = 'url("../images/骰子1.png")';
                    flag = 1;
                    break;
                case 2:
                    document.getElementById('ds').style.backgroundImage = 'url("../images/骰子2.png")';
                    flag = 1;
                    break;
                case 3:
                    document.getElementById('ds').style.backgroundImage = 'url("../images/骰子3.png")';
                    flag = 1;
                    break;
                case 4:
                    document.getElementById('ds').style.backgroundImage = 'url("../images/骰子4.png")';
                    flag = 1;
                    break;
                case 5:
                    document.getElementById('ds').style.backgroundImage = 'url("../images/骰子5.png")';
                    flag = 1;
                    break;
                case 6:
                    document.getElementById('ds').style.backgroundImage = 'url("../images/骰子6.png")';
                    flag = 1;
                    break;
            }
            zhuan = 0;
        } else {
            switch (m) {
                case 1:
                    document.getElementById('ds').style.backgroundImage = 'url("../images/骰子1.png")';
                    flag = 1;
                    break;
                case 2:
                    document.getElementById('ds').style.backgroundImage = 'url("../images/骰子2.png")';
                    flag = 1;
                    break;
                case 3:
                    document.getElementById('ds').style.backgroundImage = 'url("../images/骰子3.png")';
                    flag = 1;
                    break;
                case 4:
                    document.getElementById('ds').style.backgroundImage = 'url("../images/骰子4.png")';
                    flag = 1;
                    break;
                case 5:
                    document.getElementById('ds').style.backgroundImage = 'url("../images/骰子5.png")';
                    flag = 1;
                    break;
                case 6:
                    document.getElementById('ds').style.backgroundImage = 'url("../images/骰子6.png")';
                    flag = 1;
                    break;
            }
            zhuan = 1;
        }
        },400);
    } 
}

function compareDiceLeft() {
    let m;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < left[i].length; j++) {
            for (let k = 0; k < 3; k++) {
                if (left[i][j] == right[i][k]) {
                    right[i][k] = 0;
                    //计算对应的id值
                    m = i * 3 + k + 10;
                    document.getElementById(m).style.backgroundImage = 'url("")';
                }
            }
        }
    }
}

function compareDiceRight() {
    for (let i = 0; i < right.length; i++) {
        for (let j = 0; j < right[i].length; j++) {
            for (let k = 0; k < 3; k++) {
                if (right[i][j] == left[i][k]) {
                    left[i][k] = 0;
                    //计算对应的id值
                    m = i * 3 + k + 1;
                    document.getElementById(m).style.backgroundImage = 'url("")';
                }
            }
        }
    }
}

function countScore() {
    total1 = 0;
    total2 = 0;
    for (let i = 0; i < left.length; i++) {
        if ((left[i][0] == left[i][1]) && (left[i][1] == left[i][2])) {
            total1 = total1 + left[i][0] * 9;
        } else if (left[i][0] == left[i][1]) {
            total1 = total1 + left[i][0] * 4 + left[i][2];
        } else if (left[i][1] == left[i][2]) {
            total1 = total1 + left[i][1] * 4 + left[i][0];
        } else if (left[i][0] == left[i][2]) {
            total1 = total1 + left[i][0] * 4 + left[i][1];
        } else {
            total1 = total1 + left[i][0] + left[i][1] + left[i][2]
        }
    }
    document.getElementById("countbox1").innerText = total1;

    for (let i = 0; i < right.length; i++) {
        if ((right[i][0] == left[i][1]) && (right[i][1] == left[i][2])) {
            total2 = total2 + right[i][0] * 9;
        } else if (right[i][0] == right[i][1]) {
            total2 = total2 + right[i][0] * 4 + right[i][2];
        } else if (right[i][1] == right[i][2]) {
            total2 = total2 + right[i][1] * 4 + right[i][0];
        } else if (right[i][0] == right[i][2]) {
            total2 = total2 + right[i][0] * 4 + right[i][1];
        } else {
            total2 = total2 + right[i][0] + right[i][1] + right[i][2]
        }
    }
    document.getElementById("countbox2").innerText = total2;//shuchu


}

//重新游戏
function clearDice() {
    for (let k = 0; k < left.length; k++) {
        for (let l = 0; l < left[k].length; l++) {
            left[k][l] = 0;
            right[k][l] = 0;
        }
    }
    for (let i = 1; i < 19; i++) {
        document.getElementById(i).style.backgroundImage = 'url("../pictures/transparent.png")';
    }
    document.getElementById("countbox1").innerText = 0;
    document.getElementById("countbox2").innerText = 0;

}

//结束游戏
function judge() {
    for (let k = 0; k < left.length; k++) {
        for (let l = 0; l < left[k].length; l++) {
            if (left[k][l] != 0) {
                countleft++;
            }
            if (right[k][l] != 0) {
                countright++;
            }
        }
    }
    if (countleft == 9 || countright == 9) {
        if (total1 > total2) {
            setTimeout(function () {
                alert("游戏结束,左边玩家胜利！");
            }, 300);
        } else if (total2 > total1) {
            setTimeout(function () {
                alert("游戏结束,右边玩家胜利！");
            }, 300);
        } else {
            setTimeout(function () {
                alert("游戏结束,双方平局！");
            }, 300);
        }
        setTimeout(function () {
            clearDice();
        }, 500);
    }
    countleft = 0;
    countright = 0;
}

//互斥锁
let p1 = 1;
let p2 = 0;

//左边
function fle(event) {
    let id = event.id;
    let i = Math.floor(id / 3);
    let j = id % 3;
    if (j == 0) {
        i = i - 1;
        j = 2;
    } else {
        j = j - 1;
    }
    if (flag && p1) {
        if (left[i][j] != 0) {
            alert("此已放置骰子，")
        } else {
            switch (m) {
                case 1:
                    document.getElementById(id).style.backgroundImage =  'url("../images/骰子1.png")';
                    left[i][j] = m;
                    break;
                case 2:
                    document.getElementById(id).style.backgroundImage = 'url("../images/骰子2.png")';
                    left[i][j] = m;
                    break;
                case 3:
                    document.getElementById(id).style.backgroundImage = 'url("../images/骰子3.png")';
                    left[i][j] = m;
                    break;
                case 4:
                    document.getElementById(id).style.backgroundImage = 'url("../images/骰子4.png")';
                    left[i][j] = m;
                    break;
                case 5:
                    document.getElementById(id).style.backgroundImage = 'url("../images/骰子5.png")';
                    left[i][j] = m;
                    break;
                case 6:
                    document.getElementById(id).style.backgroundImage = 'url("../images/骰子6.png")';
                    left[i][j] = m;
                    break;

            }
            compareDiceLeft();
            countScore();
            judge();
            flag = 0;
            p1 = 0;
            p2 = 1;

        }
    } else {
        alert("请先投骰");
    }

}

//右边
function fri(event) {
    let id = event.id;
    let i = Math.floor(id / 3) - 3;
    let j = id % 3;
    if (j == 0) {
        i = i - 1;
        j = 2;
    } else {
        j = j - 1;
    }
    if (flag && p2) {
        if (right[i][j] != 0) {
            alert("此已放置骰子")
        } else {
            switch (m) {
                case 1:
                    document.getElementById(id).style.backgroundImage = 'url("../images/骰子1.png")';
                    right[i][j] = m;
                    break;
                case 2:
                    document.getElementById(id).style.backgroundImage = 'url("../images/骰子2.png")';
                    right[i][j] = m;
                    break;
                case 3:
                    document.getElementById(id).style.backgroundImage = 'url("../images/骰子3.png")';
                    right[i][j] = m;
                    break;
                case 4:
                    document.getElementById(id).style.backgroundImage = 'url("../images/骰子4.png")';
                    right[i][j] = m;
                    break;
                case 5:
                    document.getElementById(id).style.backgroundImage = 'url("../images/骰子5.png")';
                    right[i][j] = m;
                    break;
                case 6:
                    document.getElementById(id).style.backgroundImage = 'url("../images/骰子6.png")';
                    right[i][j] = m;
                    break;

            }
            compareDiceRight();
            countScore();
            judge();
            flag = 0;
            p1 = 1;
            p2 = 0;
        }
    } else {
        alert("请先投骰")
    }
}