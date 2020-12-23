import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_TallHero_HolidayDeals_en_US_1x._CB414278668_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="23245"
            title="Acer Aspire 5 Slim Laptop"
            price={365}
            image="https://cdn.vox-cdn.com/thumbor/bgMYYUjHv4vq_id42kGcxB7Iu6M=/0x131:2631x1885/1200x800/filters:focal(0x131:2631x1885)/cdn.vox-cdn.com/uploads/chorus_image/image/49788615/Acer_Chromebook_14_CB3-431_right_facing_Google_wp.0.0.jpg"
            rating={5}
          />

          <Product
            id="232745"
            title="Acer Aspire 5 Slim Desktop"
            price={356}
            image="http://www.klikglodok.com/toko/18114-thickbox_default/harga-jual-dell-all-in-one-2350-lcd-23-in-wide-touch-screen-.jpg"
            rating={4}
          />

          <Product
            id="232234"
            title="Acer Aspire 5 Slim Laptop"
            price={345}
            image="http://i.dell.com/das/dih.ashx/673w/sites/imagecontent/products/PublishingImages/chromebook-11-3180-laptop/Chromebook-11-3180-pdp-polaris-01.jpg"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="23245"
            title="Electrical Product Design | 4D Products Design | Product"
            price={305}
            image="https://4dproducts.co.uk/wp-content/uploads/2018/06/electrical-product-design-584.jpg"
            rating={5}
          />

          <Product
            id="232745"
            title="Electric Bicycle(id:1753112) Product details - View"
            price={256}
            image="https://image.ec21.com/image/shlima/oimg_GC01753111_CA01753112/Electric-Bicycle.jpg"
            rating={4}
          />

          <Product
            id="232234"
            title="Acer Aspire 5 Slim Laptop"
            price={345}
            image="http://i.dell.com/das/dih.ashx/673w/sites/imagecontent/products/PublishingImages/chromebook-11-3180-laptop/Chromebook-11-3180-pdp-polaris-01.jpg"
            rating={3}
          />

          <Product
            id="232454"
            title="Electric scooter TDR106Z - Romai (China Manufacturer"
            price={200}
            image="https://img.diytrade.com/cdimg/1331163/17593814/0/1291262045/Electric_scooter_TDR106Z.jpg"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="232644"
            title="Construction Electrical Products 7220/7270 Rechargeable"
            price={344}
            image="https://5.imimg.com/data5/HG/TE/YB/SELLER-56173387/textile-printer-machine-500x500.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
