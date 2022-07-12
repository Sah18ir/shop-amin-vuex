<template>
  <div class="comments_product_details">
    <article>
      <h3 class="number_comments_title">نظرات کاربران (5)</h3>
      <h3 class="name_comments_title">کت مردانه کوین MNT5288</h3>
      <div class="rate_stars_part_comments">
        <ul>
          <li
            v-for="(item, index) in levelratestars"
            :key="index"
            class="S-all-flex level_rate_stars"
          >
            <h5>{{ item.number }}</h5>
            <div class="squere_rate_stars">
              <div class="black_init_rate_stars"></div>
            </div>
            <h5>{{ item.level }}</h5>
          </li>
        </ul>
        <div class="get_stars_to_product S-all-flex">
          <h3>امتیاز دادن به این محصول:</h3>
          <div>
            <img
              v-for="(item, index) in ratestars"
              :key="index"
              :src="item.image"
              alt="خوب"
            />
          </div>
          <button><h4>نظر خود را بنویسید</h4></button>
        </div>
      </div>
      <div class="S-mar-top-twenty S-width-all">
        <div
          class="S-all-flex-reg S-mar-top-half-two"
          v-for="(item, index) in allcommentsvalue"
          :key="index"
        >
          <img
            class="profile_image_comments"
            src="https://s6.uupload.ir/files/profile_h6y6.jpg"
            alt=""
          />
          <div class="box_comments_person">
            <div class="S-all-flex">
              <h4>{{ item.person }}</h4>
              <div class="box_stars_rate">
                <img
                  v-for="(stars, index) in item.ratestarscomments"
                  :key="index"
                  :src="stars.image"
                  alt="خوب"
                />
              </div>
            </div>
            <h5 class="S-mar-top-min">{{ item.date }}</h5>
            <h4 class="S-color-graylike S-mar-top-reg-mine">
              {{ item.comment }}
            </h4>
          </div>
        </div>
        <div class="write_comments_btn">
          <button>
            <router-link to="/">
              <h4>نظر خود را بنویسید</h4>
            </router-link>
          </button>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "NovincharmCommentsproductdetail",

  data() {
    return {
      levelratestars: [
        {
          number: "1 ستاره",
          level: "( 0 )",
        },
        {
          number: "2 ستاره",
          level: "( 1 )",
        },
        {
          number: "3 ستاره",
          level: "( 0 )",
        },
        {
          number: "4 ستاره",
          level: "( 1 )",
        },
        {
          number: "5 ستاره",
          level: "( 4 )",
        },
      ],
      ratestars: [
        {
          image: "https://s6.uupload.ir/files/icons8-star-48_118z.png",
        },
        {
          image: "https://s6.uupload.ir/files/icons8-star-48_118z.png",
        },
        {
          image: "https://s6.uupload.ir/files/icons8-star-48_118z.png",
        },
        {
          image: "https://s6.uupload.ir/files/icons8-star-48_118z.png",
        },
        {
          image: "https://s6.uupload.ir/files/icons8-star-48_118z.png",
        },
      ],
      allcommentsvalue: [
        {
          person: "امیر",
          ratestarscomments: [
            {
              image: "https://s6.uupload.ir/files/icons8-star-24_(1)_u3ch.png",
            },
            {
              image: "https://s6.uupload.ir/files/icons8-star-24_(1)_u3ch.png",
            },
            {
              image: "https://s6.uupload.ir/files/icons8-star-24_(1)_u3ch.png",
            },
            {
              image: "https://s6.uupload.ir/files/icons8-star-24_(1)_u3ch.png",
            },
            {
              image: "https://s6.uupload.ir/files/icons8-star-24_(1)_u3ch.png",
            },
          ],
          date: "۱۰ شهريور ۱۴۰۰",
          comment:
            "ضمن تشکر از کیفت کالای ارسالی زمان ارسال نیز مورد رضایت بود.",
        },
        {
          person: "مهیار",
          ratestarscomments: [
            {
              image: "https://s6.uupload.ir/files/icons8-star-24_(1)_u3ch.png",
            },
            {
              image: "https://s6.uupload.ir/files/icons8-star-24_9tzf.png",
            },
            {
              image: "https://s6.uupload.ir/files/icons8-star-24_9tzf.png",
            },
            {
              image: "https://s6.uupload.ir/files/icons8-star-24_9tzf.png",
            },
            {
              image: "https://s6.uupload.ir/files/icons8-star-24_9tzf.png",
            },
          ],
          date: "۱۷ فروردين ۱۳۹۹",
          comment: "کت بسیار زیباییه.دوخت و جنسش عالیه",
        },
        {
          person: "مهیار",
          ratestarscomments: [
            {
              image: "https://s6.uupload.ir/files/icons8-star-24_(1)_u3ch.png",
            },
            {
              image: "https://s6.uupload.ir/files/icons8-star-24_9tzf.png",
            },
            {
              image: "https://s6.uupload.ir/files/icons8-star-24_9tzf.png",
            },
            {
              image: "https://s6.uupload.ir/files/icons8-star-24_9tzf.png",
            },
            {
              image: "https://s6.uupload.ir/files/icons8-star-24_9tzf.png",
            },
          ],
          date: "۱۲ فروردين ۱۳۹۹",
          comment:
            "سلام...امروز12فروردین سال1399 این کت بدستم رسید .هم دوخت وهم جنسش عالیه..عاشقش شدم..نمیونم چرا تو کاور کت رو نذاشتن....",
        },
        {
          person: "amir",
          ratestarscomments: [
            {
              image: "https://s6.uupload.ir/files/icons8-star-24_9tzf.png",
            },
            {
              image: "https://s6.uupload.ir/files/icons8-star-24_9tzf.png",
            },
            {
              image: "https://s6.uupload.ir/files/icons8-star-24_9tzf.png",
            },
            {
              image: "https://s6.uupload.ir/files/icons8-star-24_9tzf.png",
            },
            {
              image: "https://s6.uupload.ir/files/icons8-star-24_9tzf.png",
            },
          ],
          date: "۳ شهريور ۱۳۹۸",
          comment: "5",
        },
        {
          person: "گودرز",
          ratestarscomments: [
            {
              image: "https://s6.uupload.ir/files/icons8-star-24_(1)_u3ch.png",
            },
            {
              image: "https://s6.uupload.ir/files/icons8-star-24_(1)_u3ch.png",
            },
            {
              image: "https://s6.uupload.ir/files/icons8-star-24_(1)_u3ch.png",
            },
            {
              image: "https://s6.uupload.ir/files/icons8-star-24_9tzf.png",
            },
            {
              image: "https://s6.uupload.ir/files/icons8-star-24_9tzf.png",
            },
          ],
          date: "۱۵ بهمن ۱۳۹۷",
          comment: "ساده وشیک",
        },
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style>
.comments_product_details {
  width: 75%;
  margin: 6rem auto;
}

.comments_product_details h5 {
  color: #666666;
  font-weight: lighter;
}

.number_comments_title {
  color: red;
  font-weight: lighter;
}

.name_comments_title {
  margin-top: 1.5rem;
  padding-bottom: 2rem;
}

.rate_stars_part_comments {
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  padding-left: 18rem;
}

.level_rate_stars {
  width: 230px;
  margin-top: 0.7rem;
}

.level_rate_stars .squere_rate_stars {
  float: right;
  height: 20px;
  width: 150px;
  border: 1px solid #ccc;
  position: relative;
  overflow: hidden;
}

.level_rate_stars:nth-child(5) div .black_init_rate_stars {
  width: 67%;
  height: 100%;
  position: absolute;
  right: 0;
  display: block;
  background-color: #212121;
}

.level_rate_stars:nth-child(even) div .black_init_rate_stars {
  width: 17%;
  height: 100%;
  position: absolute;
  right: 0;
  display: block;
  background-color: #212121;
}

.get_stars_to_product {
  width: 550px;
}

.get_stars_to_product img {
  width: 37px;
}

.get_stars_to_product div {
  width: 200px;
  margin-top: 0.5rem;
}

.get_stars_to_product button {
  width: 150px;
  padding: 0.8rem 0.5rem;
  background-color: #58595b;
  cursor: pointer;
}

.get_stars_to_product button h4 {
  color: white;
  font-weight: lighter;
}

.get_stars_to_product button:hover {
  background-color: red;
  transition: 0.5s all ease-in-out;
}

.box_stars_rate img {
  width: 20px;
  cursor: pointer;
}

.box_comments_person {
  width: 94.4%;
  background-color: #f3f3f3;
  padding: 1rem;
}

.box_comments_person h4 {
  font-weight: lighter;
}

.profile_image_comments {
  height: 50px;
  border-radius: 50%;
}

.write_comments_btn {
  display: flex;
  justify-content: left;
  margin-top: 2.5rem;
}

.write_comments_btn button {
  width: 150px;
  padding: 0.8rem 0.5rem;
  background-color: #58595b;
}

.write_comments_btn button h4 {
  color: white;
  font-weight: lighter;
}

.write_comments_btn button:hover {
  background-color: red;
  transition: 0.5s all ease-in-out;
}
</style>
