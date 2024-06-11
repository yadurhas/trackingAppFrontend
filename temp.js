const data = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]


console.log(data);

document.addEventListener('DOMContentLoaded', () => {

    const arr = ['.work', '.play', '.study', '.exercise', '.social', '.selfcare'];

    const elementList = new Array(arr.length);

    let t;

    for (let i = 0; i < arr.length; i++) {
        t = document.querySelector(arr[i]);
        elementList[i] = [t.querySelector('.stat_value'), t.querySelector('.prev'), t.querySelector('.prevtext')];
        console.log(data[i]);
        elementList[i][0].textContent = data[i].timeframes.weekly.current;
        elementList[i][1].textContent = data[i].timeframes.weekly.previous;
        elementList[i][2].textContent = "Last Week";
    }

    let flag = 2;
    const daily = document.querySelector("#daily");
    const weekly = document.querySelector("#weekly");
    const monthly = document.querySelector("#monthly");

    weekly.classList.add("selected");

    daily.addEventListener('click', () => {
        if (flag !== 1) {
            flag = 1;
            daily.classList.add("selected");
            weekly.classList.remove("selected");
            monthly.classList.remove("selected");
            for (let i = 0; i < arr.length; i++) {
                elementList[i][0].textContent = data[i].timeframes.daily.current;
                elementList[i][1].textContent = data[i].timeframes.daily.previous;
                elementList[i][2].textContent = "Yesterday";
            }
        }
    });

    weekly.addEventListener('click', () => {
        if (flag !== 2) {
            flag = 2;
            daily.classList.remove("selected");
            weekly.classList.add("selected");
            monthly.classList.remove("selected");
            for (let i = 0; i < arr.length; i++) {
                elementList[i][0].textContent = data[i].timeframes.weekly.current;
                elementList[i][1].textContent = data[i].timeframes.weekly.previous;
                elementList[i][2].textContent = "Last Week";
            }
        }
    });

    monthly.addEventListener('click', () => {
        if (flag !== 3) {
            flag = 3;
            daily.classList.remove("selected");
            weekly.classList.remove("selected");
            monthly.classList.add("selected");
            for (let i = 0; i < arr.length; i++) {
                elementList[i][0].textContent = data[i].timeframes.monthly.current;
                elementList[i][1].textContent = data[i].timeframes.monthly.previous;
                elementList[i][2].textContent = "Last Month";
            }
        }
    });

});