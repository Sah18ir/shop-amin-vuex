<template>
  <aside class="aside_part_product_filter" style="padding-bottom: 5rem">
    <div class="title_filter_aside">
      <h4>کت مردانه</h4>
      <span>> همه گروه ها</span>
    </div>
    <div class="minus_filter_product S-all-flex">
      <h4>قیمت</h4>
      <span>−</span>
    </div>
    <div class="range-slider">
      <span>
        <input type="number" value="6698000" min="0" max="120000" />
        <input type="number" value="8698000" min="0" max="120000" />
      </span>
      <input value="6698000" min="0" max="8698000" step="500" type="range" />
      تومان<input
        value="6698000"
        min="0"
        max="8698000"
        step="500"
        type="range"
      />
    </div>
    <div
      class="minus_filter_product S-all-flex S-mar-top-twenty S-regular-border-top S-pad-top-onerem"
    >
      <h4>سایز</h4>
      <span>−</span>
    </div>
    <div class="S-mar-top-min S-regular-border-bottom S-pad-bot-regular">
      <form action="#">
        <p v-for="(item, index) in sizes" :key="index">
          <input name="group1" type="radio" id="test1" />
          <label for="test1">{{item.labelsize}}</label>
        </p>
      </form>
    </div>
  </aside>
</template>

<script>
export default {
  name: "NovincharmFilteraside",

  data() {
    return {
        sizes:[
            {
                labelsize:"3XL"
            },
            {
                labelsize:"4XL"
            },
            {
                labelsize:"5XL"
            },
            {
                labelsize:"L"
            },
            {
                labelsize:"M"
            },
            {
                labelsize:"S"
            },
            {
                labelsize:"XL"
            },
            {
                labelsize:"XXL"
            },
        ]
    };
  },

  mounted() {
    (function () {
      var parent = document.querySelector(".range-slider");
      if (!parent) return;

      var rangeS = parent.querySelectorAll("input[type=range]"),
        numberS = parent.querySelectorAll("input[type=number]");

      rangeS.forEach(function (el) {
        el.oninput = function () {
          var slide1 = parseFloat(rangeS[0].value),
            slide2 = parseFloat(rangeS[1].value);

          if (slide1 > slide2) {
            [slide1, slide2] = [slide2, slide1];
            // var tmp = slide2;
            // slide2 = slide1;
            // slide1 = tmp;
          }

          numberS[0].value = slide1;
          numberS[1].value = slide2;
        };
      });

      numberS.forEach(function (el) {
        el.oninput = function () {
          var number1 = parseFloat(numberS[0].value),
            number2 = parseFloat(numberS[1].value);

          if (number1 > number2) {
            var tmp = number1;
            numberS[0].value = number2;
            numberS[1].value = tmp;
          }

          rangeS[0].value = number1;
          rangeS[1].value = number2;
        };
      });
    })();
  },

  methods: {},
};
</script>

<style>
.aside_part_product_filter {
  width: 230px;
}

.title_filter_aside {
  width: 230px;
  margin: 0 auto;
  border-bottom: 1px solid lightgray;
  padding: 1rem;
  line-height: 2.5;
}

.title_filter_aside span {
  color: red;
}

.minus_filter_product {
  margin-top: 1rem;
}

.range-slider {
  width: 230px;
  margin: auto;
  text-align: center;
  position: relative;
  height: 2em;
}

.range-slider svg,
.range-slider input[type="range"] {
  position: absolute;
  left: 0;
  bottom: -15px;
}

input[type="number"] {
  text-align: center;
  font-size: 15px;
  padding: 0.5rem;
  -moz-appearance: textfield;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type="number"]:invalid,
input[type="number"]:out-of-range {
  border: 0;
}

input[type="range"] {
  -webkit-appearance: none;
  width: 100%;
}

input[type="range"]:focus {
  outline: none;
}

input[type="range"]:focus::-webkit-slider-runnable-track {
  background: #58595b;
}

input[type="range"]:focus::-ms-fill-lower {
  background: red;
}

input[type="range"]:focus::-ms-fill-upper {
  background: red;
}

input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  background: #58595b;
  border-radius: 1px;
  box-shadow: none;
  border: 0;
}

input[type="range"]::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  box-shadow: 0px 0px 0px #000;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #58595b;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -7px;
}

input[type="range"]::-moz-range-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  background: #2497e3;
  border-radius: 1px;
  box-shadow: none;
  border: 0;
}

input[type="range"]::-moz-range-thumb {
  z-index: 2;
  position: relative;
  box-shadow: 0px 0px 0px #000;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #a1d0ff;
  cursor: pointer;
}

input[type="range"]::-ms-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  color: transparent;
}

input[type="range"]::-ms-fill-lower,
input[type="range"]::-ms-fill-upper {
  background: #2497e3;
  border-radius: 1px;
  box-shadow: none;
  border: 0;
}

input[type="range"]::-ms-thumb {
  margin-left: 5rem;
  z-index: 2;
  position: relative;
  box-shadow: 0px 0px 0px #000;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #a1d0ff;
  cursor: pointer;
}

input[type='radio'] {
    -webkit-appearance:none;
    width:16px;
    height:16px;
    border: 2px solid #5B5B5B;
    margin-top: .5rem;
    border-radius:50%;
    outline:none;
    box-shadow:0 0 0 0px gray;
    display: inline-block;
}

input[type='radio']:before {
    content:'';
    display:block;
    width:68%;
    height:68%;
    margin: 15% auto;    
    border-radius:50%;    
}

input[type='radio']:checked:before {
    background: #212121;
}

.aside_part_product_filter label{
    position: absolute;
    margin-top: .4rem;
    margin-right: .5rem;
}

@media screen and (max-width: 1000px) {
  .aside_part_product_filter{
    display: none;
  }
}
</style>
