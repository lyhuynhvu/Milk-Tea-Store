// Menu Function

function scrollToBlock(target) {
    var element = document.getElementById(target);
    window.scrollTo(element.offsetLeft, element.offsetTop - 80);
}

window.onscroll = function() {
    scrollFunction();
}

function scrollFunction() {
    var headerMenu = document.getElementById('menu-bar-wrapper');
    if(document.documentElement.scrollTop > 125) {
        headerMenu.classList.add('keeping');
    }
    else {
        headerMenu.classList.remove('keeping');
    }
}

function viewDetail(name, imgUrl) {
  document.getElementById('product-name').innerText = name;
  document.getElementById('product-img-detail').setAttribute('src', imgUrl);
}

function viewDetailMilkTea(name, imgUrl) {
  viewDetail(name, imgUrl);
  document.getElementById('price-size-m').innerText = '29.000';
  document.getElementById('price-size-l').innerText = '35.000';
}

function viewDetailTea(name, imgUrl) {
  viewDetail(name, imgUrl);
  document.getElementById('price-size-m').innerText = '38.000';
  document.getElementById('price-size-l').innerText = '47.000';
}

function viewDetailLatte(name, imgUrl) {
  viewDetail(name, imgUrl);
  document.getElementById('price-size-m').innerText = '50.000';
  document.getElementById('price-size-l').innerText = '60.000';
}

function viewDetailSmoothies(name, imgUrl) {
  viewDetail(name, imgUrl);
  document.getElementById('price-size-m').innerText = '44.000';
  document.getElementById('price-size-l').innerText = '55.000';
}

function viewDetailSpecial(name, imgUrl) {
  viewDetail(name, imgUrl);
  document.getElementById('price-size-m').innerText = '47.000';
  document.getElementById('price-size-l').innerText = '52.000';
}

function viewTopping(name, price, type, imgUrl) {
	var suggestTC = 'Trà Xanh, Trà Bá Tước, Trà Alisan, Trà Oolong, Trà Bí Đao...';
	var suggestMF = 'Trà Alisan Chanh Dây, Trà Alisan Chanh Dây, Trà Alisan Xoài, Chanh Dây Trà Xanh...'
	var suggestDD = 'Trà Xanh, Trà sữa Trà Xanh, Trà sữa Trà Đen...';
	var suggestPD = 'Trà sữa Chocolate, Trà sữa Khoai môn, Trà sữa Oolong, Trà Alisan Vải, Trà Oolong Vải...';	

  document.getElementById('topping-name').innerText = name;
  document.getElementById('price-topping').innerText = price;
  document.getElementById('topping-img-detail').setAttribute('src', imgUrl);

  if (type == 'TC') document.getElementById('text-suggest-topping').innerText = suggestTC;
  if (type == 'MF') document.getElementById('text-suggest-topping').innerText = suggestMF;
  if (type == 'DD') document.getElementById('text-suggest-topping').innerText = suggestDD;
  if (type == 'PD') document.getElementById('text-suggest-topping').innerText = suggestPD;
}