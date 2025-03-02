

function openApp(title) {
  console.log(title);
  window.scrollTo(0, 0)
  setAll(title);

}

function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(attr => {
    element.setAttribute(attr, attributes[attr]);
  });
}

function setAll(app) {
  let link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=arrow_left_alt";
  document.getElementsByTagName("head")[0].appendChild(link);


  document.body.innerHTML = "";
  document.body.setAttribute('class', 'text-light bg-dark');

  let div0 = document.createElement('div');
  div0.setAttribute('class', "toolbar m-3 mb-4");

  div0.innerHTML = `<i class="material-symbols-outlined arr p-1" style="border-radius: 2.5rem; width: 40px;" onclick="window.location.assign('./index.html');">
arrow_left_alt
</i><i class="fas fa-globe-asia arr p-1" style="border-radius: 0.8rem;"></i>`


  let div1 = document.createElement('div');
  setAttributes(div1, { class: "my-4 r", id: "preview" });

  let div10 = document.createElement('div');
  div10.setAttribute('class', "d-flex");
  let div100 = document.createElement('div');
  div100.setAttribute('id', "logo");
  let icon = document.createElement('img');
  setAttributes(icon, { id: 'icon', src: data[app]["icon"] });

  let div101 = document.createElement('div');
  div101.setAttribute('class', "info ml-4");
  let t1 = document.createElement('p');
  setAttributes(t1, { id: "title", class: "h5" });
  t1.innerHTML = app;
  let t2 = document.createElement('p');
  setAttributes(t2, { id: "sub-title", class: 'text-primary font-weight-bold' });
  t2.innerHTML = "PyWeb";
  let t3 = document.createElement('p');
  setAttributes(t3, { class: "text-secondary", style: "font-size: 0.8rem" });
  t3.innerHTML = "Without ads"

  div101.appendChild(t1);
  div101.appendChild(t2);
  div101.appendChild(t3);

  div100.appendChild(icon);
  div10.appendChild(div100);
  div10.appendChild(div101);
  div1.appendChild(div10);

  let div2 = document.createElement('div');
  div2.setAttribute('class', 'ext d-flex align-items-center justify-content-center');

  div2.innerHTML = '<div class="icont"><span class="i">4.2 <i class="material-icons"> star</i></span><span class="text-secondary">Reviews</span></div><div class="icont"><span class="i"><i class="material-icons" style="border: 1.5px solid white; border-radius: 3px; padding: 1px">get_app</i></span><span class="text-secondary" id="size">14MB</span></div><div class="icont"><span class="i font-weight-bold" style="border: 1.5px solid white; border-radius: 3px; padding: 0px 3px">3+</span><span class="text-secondary">Rated</span></div><div class="icont"><span class="i" style="font-weight:bold">10M+</span><span class="text-secondary">Downloads</span></div>';

  div3 = document.createElement('div');
  div3.setAttribute('class', 'my-3')
  div3.innerHTML = `<a class="btn btn-primary w-100 text-light d-block mx-auto" style="backgfround: #0b8856;" role="button" id="install">Install</a>`;

  let div4 = document.createElement('div');
  setAttributes(div4, { class: 'my-3 d-flex', id: 'ss' })

  document.body.appendChild(div0);
  document.body.appendChild(div1);
  div1.appendChild(div2);
  div1.appendChild(div3);
  div1.appendChild(div4);
  let screenshot = document.getElementById("ss")
  document.getElementById("title").innerHTML = app;
  document.getElementById("icon").setAttribute("src", data[app]["icon"]);
  document.getElementById("install").setAttribute("href", data[app]["apk"]);
  document.getElementById("size").innerHTML = data[app]["size"];

  list = Object.keys(data[app]["screenshot"]);

  list.forEach((ss, index) => {
    let elem = document.createElement('img');
    let src = data[app]["screenshot"][ss]
    elem.setAttribute("src", src);
    elem.setAttribute("class", "mx-2");
    if (index == 0) {
      elem.setAttribute("class", "l");
    }

    if (index == list.length - 1) {
      elem.setAttribute("class", "r");
    }
    screenshot.appendChild(elem);
    //console.log(document.body.innerHTML)
  })

  let div5 = document.createElement('div');
  setAttributes(div5, { class: 'about my-5' });
  div5.innerHTML = `<div class="d-flex" style="justify-content: space-between">
               <h5>About this app</h5>
               <i class="fas fa-info-circle mr-4 arr p-1" style="border-radius: 2.5rem;"></i>
           </div>
           <div class="my-3 sdes text-secondary" id="ades" style="font-size: 0.8rem; color: #f8f8f8c9;">This is a simple Calculating app made for regular calculations</div>
       </div>
       
       <hr class="bg-light mt-5">
        				<footer class="blog-footer" style="font-family:'Bree Serif'; font-size: 0.9rem; line-height: 0.5rem; color:#f7f7f7;">
        								<div class="container text-center">
        								<p>PyWeb ApkStore - A collection of Apps</p> <p> by <a href="https://tahmid-mahmud.github.io/portfolio/" class="text-warning font-weight-bold">Tahmid Mahmud</a></p>
      <p>
        <a href="#" class="text-info">Back to top</a>
      </p>
        				</div>
    				</footer>`;
  div1.appendChild(div5); document.getElementById('ades').innerHTML = data[app]['desp'];
}


function loadApps() {
  let root = document.getElementById("view");
  for (i = 0; i < apps.length; i++) {
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    let ico = document.createElement('img');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    setAttributes(div1, { class: "d-flex align-items-center lgb bg-none" });
    setAttributes(div2, { class: "d-inline-block mx-3 mt-4", style: "float: left; line-height:0.2rem;" });
    let name = apps[i];
    p1.innerHTML = name;
    p2.innerHTML = "Tools •  Leisure"
    p3.innerHTML = data[apps[i]]['upload']
    //console.log(i, name);

    p3.setAttribute("class", "text-secondary");
    p2.setAttribute("class", "text-secondary");
    p1.setAttribute("class", "font-weight-bold");

    //div3.innerHTML=apps[i];
    ico.setAttribute("class", "logo");
    ico.setAttribute("src", data[apps[i]]["icon"]);

    div1.addEventListener('click', () => openApp(name));
    div2.addEventListener('click', () => openApp(name));
    div1.appendChild(ico);
    div2.appendChild(p1);
    div2.appendChild(p2);
    div2.appendChild(p3);

    div1.appendChild(div2);
    root.appendChild(div1);
  }

}
