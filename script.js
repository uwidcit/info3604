// This is for able to see chart. We are using Apex Chart. U can check the documentation of Apex Charts too..

function fetchData(){
  fetch("https://reqres.in/api/users")
  .then(response => {
    if (!response.ok){
      throw Error("ERROR");
    }
    return response.json();
  })
  .then(data => {
    console.log(data.data);
    const html = data.data.map(user => {
      return `
      <div class="card">
      <h4>From ${user.first_name}</h4></br>
      <div class="card_inner">
      <p>CONTENT CONTENT CONTENT CONTENT</p>
      </div>
      </br><p class="text-primary-p">Date: ${user.email}</p>
      </div>
      `
    }).join("");
    document.querySelector('#messages').insertAdjacentHTML('afterbegin', html);
  }).catch(error => {
    console.log(error);
  });
}

fetchData();

//fetch('https://rickandmortyapi.com/api/character/')
//  .then(response => response.json())
//  .then(characters => showMessages(characters.results));

//showMessages = characters => {
//  const charactersDiv = document.querySelector('#messages');
//  characters.forEach(character => {
//    const characterElement = document.createElement('p');
//    characterElement.innerText = `Message: ${character.name}`;
//    charactersDiv.append(characterElement);
//  });
//}


var options = {
    series: [
      {
        name: "New Users",
        data: [7, 10, 15, 19, 24, 23, 19, 22, 26],
      },
      {
        name: "New Admins",
        data: [2, 3, 3, 1, 4, 2, 1, 5, 6],
      },
    ],
    chart: {
      type: "bar",
      height: 250, // make this 250
      sparkline: {
        enabled: true, // make this true
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    },
    yaxis: {
      title: {
        text: "$ (thousands)",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + " users";
        },
      },
    },
  };
  
  var chart = new ApexCharts(document.querySelector("#apex1"), options);
  chart.render();
  
/////////////////////////////////////////NEXT GRAPH

var options = {
  series: [
    {
      name: "Hurricanes",
      data: [30, 40, 50, 40, 30, 35, 25, 40, 50],
    },
    {
      name: "Floodings",
      data: [40, 50, 60, 50, 40, 45, 35, 50, 60],
    },
    {
      name: "Forest Fires",
      data: [10, 15, 20, 25, 10, 20, 15, 19, 25],
    },
    {
      name: "Heatwaves",
      data: [5, 15, 7, 5, 18, 25, 12, 17, 20],
    },
  ],
  chart: {
    type: "area",
    height: 250, // make this 250
    sparkline: {
      enabled: true, // make this true
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
  },
  yaxis: {
    title: {
      text: "$ (thousands)",
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + " new messages";
      },
    },
  },
};

var chart = new ApexCharts(document.querySelector("#apex2"), options);
chart.render();







  // Sidebar Toggle Codes;
  
  var sidebarOpen = false;
  var sidebar = document.getElementById("sidebar");
  var sidebarCloseIcon = document.getElementById("sidebarIcon");
  
  function toggleSidebar() {
    if (!sidebarOpen) {
      sidebar.classList.add("sidebar_responsive");
      sidebarOpen = true;
    }
  }
  
  function closeSidebar() {
    if (sidebarOpen) {
      sidebar.classList.remove("sidebar_responsive");
      sidebarOpen = false;
    }
  }

//  let request = new XMLHttpRequest ();
//  request.open("GET", "https://jsonplaceholder.typicode.com/users");
//  request.send();
//  request.onload = () => {
//    console.log(request);
//    if (request.status == 200) {
//      console.log(JSON.parse(request.response));
//    } else {
//      console.log(`error ${request.status} ${request.statusText}`)
//    }
// }
  

