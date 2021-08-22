import React from 'react'
import "./App.css"
import shoes from "./assets/shoes.jpg"
import hats from "./assets/hats.jpg"
import tshirt from "./assets/tshirts.jpg"
import sunglasses from "./assets/sunglasses.jpg"
import p1 from "./assets/p1.jpg"
import p2 from "./assets/p2.jpg"
import p3 from "./assets/p3.jpg"
import p4 from "./assets/p4.jpg"
import p5 from "./assets/p5.jpg"
import p6 from "./assets/p6.jpg"
import p7 from "./assets/p7.jpg"
import p8 from "./assets/p8.jpg"


function App() {
  return (
    <>
                  <section class="categories">
            <div
                class="category-item "
                style={{ backgroundImage:`url(${shoes})` }}
                
            >
                <div class="category-item-inner">
                    <div>
                        Shoes
                    </div>
                </div>
            </div>
            <div
                class="category-item"
                style={{ backgroundImage:`url(${hats})`}}
            >
                <div class="category-item-inner">
                    <div>
                        Hats
                    </div>
                </div>
            </div>
            <div
                class="category-item "
                style={{ backgroundImage:`url(${tshirt})`}}
                
            >
                <div class="category-item-inner">
                    <div>
                        T shirts
                    </div>
                </div>
            </div>
            <div
                class="category-item"
                style={{ backgroundImage:`url(${sunglasses})`}}
            >
                <div class="category-item-inner">
                    <div>
                        Sunglasses
                    </div>
                </div>
            </div>
        </section>
        <h2 class="featured-products-title">
            Featured products
        </h2>
        <section class="featured-products">
            <div class="featured-product-item">
                <div
                     style={{ backgroundImage:`url(${p1})`}}
                    class="featured-product-item-image"
                ></div>
                <p class="title">
                    Plain white t shirt
                </p>
                <p class="description">
                    A plain white t shirt perfect for summer!
                </p>
                <p class="price">
                    from $9.99
                </p>
                <button>
                    View item
                </button>
            </div>
            <div class="featured-product-item">
                <div
                   style={{ backgroundImage:`url(${p2})`}}
                    class="featured-product-item-image "
                ></div>
                <p class="title">
                    Plain white t shirt
                </p>
                <p class="description">
                    A plain white t shirt perfect for summer!
                </p>
                <p class="price">
                    from $9.99
                </p>
                <button>
                    View item
                </button>
            </div>
            <div class="featured-product-item">
                <div
                    style={{ backgroundImage:`url(${p3})`}}
                    class="featured-product-item-image "
                ></div>
                <p class="title">
                    Plain white t shirt
                </p>
                <p class="description">
                    A plain white t shirt perfect for summer!
                </p>
                <p class="price">
                    from $9.99
                </p>
                <button>
                    View item
                </button>
            </div>
            <div class="featured-product-item">
                <div
                   style={{ backgroundImage:`url(${p4})`}}
                    class="featured-product-item-image "
                ></div>
                <p class="title">
                    Plain white t shirt
                </p>
                <p class="description">
                    A plain white t shirt perfect for summer!
                </p>
                <p class="price">
                    from $9.99
                </p>
                <button>
                    View item
                </button>
            </div>
            <div class="featured-product-item ">
                <div
                   style={{ backgroundImage:`url(${p5})`}}
                    class="featured-product-item-image "
                ></div>
                <p class="title">
                    Plain white t shirt
                </p>
                <p class="description">
                    A plain white t shirt perfect for summer!
                </p>
                <p class="price">
                    from $9.99
                </p>
                <button>
                    View item
                </button>
            </div>
            <div class="featured-product-item">
                <div
                   style={{ backgroundImage:`url(${p6})`}}
                    class="featured-product-item-image "
                ></div>
                <p class="title">
                    Plain white t shirt
                </p>
                <p class="description">
                    A plain white t shirt perfect for summer!
                </p>
                <p class="price">
                    from $9.99
                </p>
                <button>
                    View item
                </button>
            </div>
            <div class="featured-product-item">
                <div
                    style={{ backgroundImage:`url(${p7})`}}
                    class="featured-product-item-image "
                ></div>
                <p class="title">
                    Plain white t shirt
                </p>
                <p class="description">
                    A plain white t shirt perfect for summer!
                </p>
                <p class="price">
                    from $9.99
                </p>
                <button>
                    View item
                </button>
            </div>
            <div class="featured-product-item">
                <div
                  style={{ backgroundImage:`url(${p8})`}}
                    class="featured-product-item-image "
                ></div>
                <p class="title">
                    Plain white t shirt
                </p>
                <p class="description">
                    A plain white t shirt perfect for summer!
                </p>
                <p class="price">
                    from $9.99
                </p>
                <button>
                    View item
                </button>
            </div>
        </section>
    </>
  )
}

export default App
