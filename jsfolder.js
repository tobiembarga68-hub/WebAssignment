
  // ---- Data ----
  const products = [
    { name:"Robe", price:"25000F", rating:4.5, img:"./image/robe.jpg" },
    { name:"Sneakers", price:"10000F", rating:4.5, img:"./image/8033a49a1af88a4e4b3e22abd2795173.jpg" },
    { name:"T-Shirt", price:"7000F", rating:4.5, img:"./image/t-shirt.jpg" },
    { name:"Pullover", price:"8000F", rating:4.5, img:"./image/pullover.jpg" },
  ];
  const categories = [
    { name:"Men", img:"./image/men.jpg" },
    { name:"Women", img:"./image/women.jpg" },
    { name:"Accessoires", img:"./image/2df90591a101fa19843a57507bcb9a72.jpg" },
  ];
  const services = [
    { name:"Fast Delivery", icon:"🚚" },
    { name:"Tracking order", icon:"📍" },
    { name:"Secure Payment", icon:"💳" },
    { name:"Customer Service", icon:"🎧" },
  ];
  const socials = ["f","t","in","▶","📷","g+","p","📡"];

  function starString(r){
    const full = Math.floor(r);
    const half = r % 1 >= 0.5;
    return "★".repeat(full) + (half ? "½" : "");
  }

  // ---- Render products ----
  const productGrid = document.getElementById('productGrid');
  products.forEach(p=>{
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-img"><img src="${p.img}" alt="${p.name}"></div>
      <div class="product-info">
        <h3>${p.name}</h3>
        <div class="rating">${starString(p.rating)} <span>${p.rating}</span></div>
        <div class="price-row"><span class="label">PRICE</span><span>${p.price}</span></div>
        <button class="add-cart">Add To Cart</button>
      </div>`;
    productGrid.appendChild(card);
  });

  // ---- Render categories ----
  const catGrid = document.getElementById('catGrid');
  categories.forEach(c=>{
    const el = document.createElement('div');
    el.className = 'cat-card';
    el.innerHTML = `
      <div class="cat-img"><img src="${c.img}" alt="${c.name}"></div>
      <h3>${c.name}</h3>
      <button class="btn-black">Shop Now</button>`;
    catGrid.appendChild(el);
  });

  // ---- Render services ----
  const serviceGrid = document.getElementById('serviceGrid');
  services.forEach(s=>{
    const el = document.createElement('div');
    el.className = 'service';
    el.innerHTML = `<div class="service-icon">${s.icon}</div><h4>${s.name}</h4>`;
    serviceGrid.appendChild(el);
  });

  // ---- Render social icons ----
  const socialIcons = document.getElementById('socialIcons');
  socials.forEach(s=>{
    const a = document.createElement('a');
    a.href = "#";
    a.textContent = s;
    socialIcons.appendChild(a);
  });

  // ---- Cart logic ----
  let cartCount = 0;
  const cartCountEl = document.getElementById('cartCount');
  const toast = document.getElementById('toast');
  let toastTimer;
  document.addEventListener('click', (e)=>{
    if(e.target.classList.contains('add-cart')){
      cartCount++;
      cartCountEl.textContent = cartCount;
      const name = e.target.closest('.product-card').querySelector('h3').textContent;
      toast.textContent = `${name} added to cart`;
      toast.classList.add('show');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(()=> toast.classList.remove('show'), 1800);
    }
  });

  // ---- Mobile menu ----
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  menuToggle.addEventListener('click', ()=> navMenu.classList.toggle('open'));
  navMenu.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=> navMenu.classList.remove('open')));