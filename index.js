
const reviews = [
    {
      id: 1,
      name: 'HP Pavilion Gaming 15.6" Full HD Gaming Laptop',
      price: '$1,154.88',
      img: 'https://i5.walmartimages.com/asr/533088c2-9971-4dcf-9af0-7a580311d41b_1.1ba4cb4017d03bed92ded247db0f5ff1.jpeg',
    },
    {
      id: 2,
      name: 'Asus G501VW-FY081T Notebook Review',
      price: '$1,121.88',
      img: 'https://www.notebookcheck.net/fileadmin/Notebooks/Asus/G501VW-FY081T/4zu3_Asus_G501VW_FY081T.jpg',
    },
    {
      id: 3,
      name: 'Dell Inspiron 5410 2in1 i5-1155G7 NVIDIA MX350 2GB 8 GB 512GB SSD Windows 11',
      price: '$1,257.88',
      img: 'https://static1.industrybuying.com/products/it-electronics/laptops/ITE.LAP.55991492_1668222136099.webp',
    },
    {
      id: 4,
      name: 'Lenovo ThinkPad L14 Gen 1',
      price: '$1,054.88',
      img: 'https://th.bing.com/th/id/OIP.Gf5CcvYl0DHq9fZkK1hfpwHaHa?rs=1&pid=ImgDetMain',
    },
    {
      id: 5,
      name: 'Asus VivoBook',
      price: '$1,364.88',
      img: 'https://www.techinn.com/f/13822/138228216/asus-f415ea-ek247t-14-i7-1165g7-16gb-1tb-ssd-laptop.jpg',
    },
  
  ];

  let counter = 0;
  let intervalId;

  const img = document.querySelector('#product-img');
  const author = document.querySelector('.name');
  const job = document.querySelector('.price');

  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');


  window.addEventListener('DOMContentLoaded',function(){
    showPerson();
    startAutoMove();
  });

  function showPerson(){
    const idx = reviews[counter];
    img.src  = idx.img;
    author.textContent = idx.name;
    job.textContent = idx.price;
  }

  function showNextPerson() {
    counter++;
    if (counter > reviews.length - 1) {
      counter = 0;
    }
    showPerson();
  }
  
  function showPrevPerson() {
    counter--;
    if (counter < 0) {
      counter = reviews.length - 1;
    }
    showPerson();
  }
  
  function startAutoMove() {
    intervalId = setInterval(showNextPerson, 2000);
  }
  
  nextBtn.addEventListener('click' , function(){
    counter++;
    if(counter > reviews.length-1){
      counter=0;
    }
    showPerson();
  })

  prevBtn.addEventListener('click' , function(){
    counter--;
    if(counter < 0){
     counter = reviews.length - 1;
    }
    showPerson();
  })

  randomBtn.addEventListener('click', startAutoMove);


