import React from "react";
import "./Home.css";
import ProductCard from "../component/common/productCard/ProductCard";
import ProductImage from "../component/feature/productimage/ProductImage";
import ProductDetail from "../component/feature/productdetails/ProductDetail";
import { RightArrow, Shop } from "../component/common/Icons";
import Shoe8 from "../assets/shoe8.png";
import Shoe7 from "../assets/shoe7.png";
import Shoe6 from "../assets/shoe5.png";
import Shoe5 from "../assets/shoe5.png";
import Shoe4 from "../assets/shoe4.png";
import Shoe3 from "../assets/shoe3.png";
import Shoe2 from "../assets/shoe2.png";
import Shoe1 from "../assets/shoe.png";
import S1 from "../assets/S1.png";
import S2 from "../assets/S2.png";
import S3 from "../assets/S3.png";
import S4 from "../assets/S4.png";
import Adpic3 from "../assets/adpic3.jpg";
import Adpic2 from "../assets/adpic2.jpg";
import Adpic from "../assets/adimage1.jpg";
import HeroImage from "../assets/heroimg.png";
import AdImage from "../component/feature/adimage/AdImage";

export default function Home() {
  return (
    <>
      <div className="hero-container">
        <div className="hero-container-card1">
          <h2>Where Fashion Meets with a lot of Comfort</h2>
          <p>
            we believe that fashion should never compromise comfort. Our
            carefully curated collection
          </p>
          <button className="shop-button">Shop Now</button>
        </div>
        <div className="hero-container-card-image">
          <img src={HeroImage} alt="hero image" />
        </div>
      </div>
      <div className="season-shop">
        <h3>The Season To Shop</h3>
        <div className="season-shop-product responsive-layout">
          <div className="season-shop-product-item ">
            <ProductCard
              ProductImage={
                <ProductImage ProductImage={Shoe1} productDiscount="30% OFF" />
              }
              ProductDetail={
                <ProductDetail
                  productName="Sports Lifestyle"
                  icon={<RightArrow />}
                />
              }
            />
          </div>
          <div
            className="season-shop-product-item
"
          >
            <ProductCard
              ProductImage={
                <ProductImage ProductImage={Shoe2} productDiscount="30% OFF" />
              }
              ProductDetail={
                <ProductDetail
                  productName="Sports Lifestyle"
                  icon={<RightArrow />}
                />
              }
            />
          </div>
          <div className="season-shop-product-item">
            <ProductCard
              ProductImage={
                <ProductImage ProductImage={Shoe3} productDiscount="30% OFF" />
              }
              ProductDetail={
                <ProductDetail
                  productName="Sports Lifestyle"
                  icon={<RightArrow />}
                />
              }
            />
          </div>
          <div className="season-shop-product-item">
            <ProductCard
              ProductImage={
                <ProductImage ProductImage={Shoe4} productDiscount="30% OFF" />
              }
              ProductDetail={
                <ProductDetail
                  productName="Sports Lifestyle"
                  icon={<RightArrow />}
                />
              }
            />
          </div>
        </div>
      </div>
      <div className="discover-grid-container">
        <h3>Discover Fresh Footwear</h3>
        <div className="discover-grid responsive-layout">
          <div className="discover-grid-item1">
            <AdImage Image={Adpic} ImageText="adimage" />
            <ProductDetail
              productName="Kids Lifestyle"
              productDescription="Experience the epitome of the kids lifestyle with ahdhia"
              icon={<RightArrow />}
            />
          </div>
          <div className="discover-grid-item2 responsive-layout">
            <div className="discover-grid-card">
              <div className="discover-grid-card-item">
                <ProductCard
                  ProductImage={
                    <ProductImage
                      ProductImage={S4}
                      ProductImageName="single sneakers"
                    />
                  }
                  ProductDetail={
                    <ProductDetail
                      productName="Men's Lifestyle"
                      productDescription="Ahdhia lifestyle shoe for men"
                      icon={<RightArrow />}
                    />
                  }
                />
              </div>
              <div className="discover-grid-card-item">
                <ProductCard
                  ProductImage={
                    <ProductImage
                      ProductImage={S3}
                      ProductImageName="single sneakers"
                    />
                  }
                  ProductDetail={
                    <ProductDetail
                      productName="Women's Lifestyle"
                      productDescription="Ahdhia lifestyle shoe for women"
                      icon={<RightArrow />}
                    />
                  }
                />
              </div>
            </div>
            <div className="discover-grid-card">
              <div className="discover-grid-card-item">
                <ProductCard
                  ProductImage={
                    <ProductImage
                      ProductImage={S2}
                      ProductImageName="single sneakers"
                    />
                  }
                  ProductDetail={
                    <ProductDetail
                      productName="Kid's Lifestyle"
                      productDescription="Ahdhia lifestyle shoe for kids"
                      icon={<RightArrow />}
                    />
                  }
                />
              </div>
              <div className="discover-grid-card-item">
                <ProductCard
                  ProductImage={
                    <ProductImage
                      ProductImage={S1}
                      ProductImageName="single sneakers"
                    />
                  }
                  ProductDetail={
                    <ProductDetail
                      productName="Casual Lifestyle"
                      productDescription="Ahdhia lifestyle shoe for casuals"
                      icon={<RightArrow />}
                    />
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="recommended-grid-container">
        <div className="recommended-title">
          <h3>Recommended For You</h3>
          <p>Shop Now</p>
        </div>
        <div className="recommended-grid responsive-layout">
          <div className="recommended-grid-item">
            <ProductCard
              ProductImage={
                <ProductImage
                  productDiscount="Best Seller"
                  ProductImage={Shoe4}
                  ProductImageName="shoe "
                />
              }
              ProductDetail={
                <ProductDetail
                  productName="Dunk The Hull"
                  productPrice="$240"
                  icon={<Shop />}
                />
              }
            />
          </div>
          <div className="recommended-grid-item">
            <ProductCard
              ProductImage={
                <ProductImage
                  productDiscount="Best Seller"
                  ProductImage={Shoe3}
                  ProductImageName="shoe "
                />
              }
              ProductDetail={
                <ProductDetail
                  productName="Joran 1Shoes"
                  productPrice="$140"
                  icon={<Shop />}
                />
              }
            />
          </div>
          <div className="recommended-grid-item">
            <ProductCard
              ProductImage={
                <ProductImage
                  productDiscount="Best Seller"
                  ProductImage={Shoe2}
                  ProductImageName="shoe "
                />
              }
              ProductDetail={
                <ProductDetail
                  productName="Cold Weather"
                  productPrice="$120"
                  icon={<Shop />}
                />
              }
            />
          </div>
          <div className="recommended-grid-item">
            <ProductCard
              ProductImage={
                <ProductImage
                  productDiscount="Best Seller"
                  ProductImage={Shoe1}
                  ProductImageName="shoe "
                />
              }
              ProductDetail={
                <ProductDetail
                  productName="Air Max"
                  productPrice="$300"
                  icon={<Shop />}
                />
              }
            />
          </div>
        </div>
      </div>
      <div className="explore-grid-container">
        <h3>Explore Trending Collection</h3>
        <div className="explore-grid responsive-layout">
          <div className="explore-grid-item">
            <AdImage Image={Adpic2} ImageText="ad image 3" />
            <ProductDetail
              productName="Sports Lifestyle"
              productDescription="Experience the epitome of the sport with ahdhias"
              icon={<RightArrow />}
            />
          </div>
          <div className="explore-grid-item">
            <AdImage Image={Adpic3} ImageText="ad image 2" />
            <ProductDetail
              productName="Fashion Lifestyle"
              productDescription="Experience the epitome of the fashion with ahdhias"
              icon={<RightArrow />}
            />
          </div>
        </div>
      </div>
      <div className="product-sport-container">
        <h3>Shop By Sport</h3>
        <div className="product-sport responsive-layout">
          <ProductCard
            ProductImage={
              <ProductImage
                ProductImage={Shoe8}
                ProductImageName="shoe 8"
                productDiscount="30% OFF"
              />
            }
            ProductDetail={
              <ProductDetail
                productName="Sports Lifestyle"
                icon={<RightArrow />}
              />
            }
          />
          <ProductCard
            ProductImage={
              <ProductImage
                ProductImage={Shoe7}
                ProductImageName="shoe 8"
                productDiscount="30% OFF"
              />
            }
            ProductDetail={
              <ProductDetail
                productName="Sports Lifestyle"
                icon={<RightArrow />}
              />
            }
          />
          <ProductCard
            ProductImage={
              <ProductImage
                ProductImage={Shoe6}
                ProductImageName="shoe 8"
                productDiscount="30% OFF"
              />
            }
            ProductDetail={
              <ProductDetail
                productName="Sports Lifestyle"
                icon={<RightArrow />}
              />
            }
          />
          <ProductCard
            ProductImage={
              <ProductImage
                ProductImage={Shoe5}
                ProductImageName="shoe 8"
                productDiscount="30% OFF"
              />
            }
            ProductDetail={
              <ProductDetail
                productName="Sports Lifestyle"
                icon={<RightArrow />}
              />
            }
          />
        </div>
      </div>
    </>
  );
}
