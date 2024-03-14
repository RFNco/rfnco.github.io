const sanpham1 = {
  id: 1,
  name: "nồi cơm điện abc ",
  price: 1500000,
  percentDiscount: "50%"
};
function age(name, price, percentDiscount) {
  const isDiscount = (price * percentDiscount) / 100;
  console.log(
    "sản phẩm " +
      name +
      "có giá là " +
      isDiscount +
      "-đã giảm giá " +
      percentDiscount +
      " (giá gốc " +
      price +
      " đồng)"
  );
}
age(sanpham1.name, sanpham1.price.toLocaleString(), sanpham1.percentDiscount);
