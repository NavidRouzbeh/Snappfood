// --------bamahas------------
import bamahas98 from '../../Assets/Images/bamahas/bamahas.98.hot.jpeg';
import bamahasargentina from '../../Assets/Images/bamahas/bamahas.agentina.hot.jpeg';
import bamahaschicken from '../../Assets/Images/bamahas/bamahas.chicken.hot.jpeg';
import bamahasbacon from '../../Assets/Images/bamahas/bamahas.bacon.cold.jpeg';
import bamahasjambon from '../../Assets/Images/bamahas/bamahas.jambon.cold.jpeg';
import bamahasmix from '../../Assets/Images/bamahas/bamahas.mix.cold.jpeg';
import bamahaspasta from '../../Assets/Images/bamahas/bamahas.pasta.jpeg';
import bamahassalad from '../../Assets/Images/bamahas/bamahas.salad.jpeg';
import bamahastorshi from '../../Assets/Images/bamahas/bamahas.torshi.jpeg';
import bamahasdrink from '../../Assets/Images/bamahas/bamahas.drink.jpeg';
import bamahaslogo from '../../Assets/Images/bamahas/bamahas.logo.jpg';
import bamahasbackground from '../../Assets/Images/bamahas/bamahas.background.jpeg';
//--------baroj--------------
import barojbella from '../../Assets/Images/baroj/baroj.pizza.bellachaw.jpeg';
import barojstake from '../../Assets/Images/baroj/baroj.pizza.stake.jpeg';
import barojpizza from '../../Assets/Images/baroj/baroj.pizza.jpeg';
import barojfried2 from '../../Assets/Images/baroj/baroj.fried.2normal.jpeg';
import barojfried2spice from '../../Assets/Images/baroj/baroj.fried.2spicy.jpeg';
import barojfriedmeygoo from '../../Assets/Images/baroj/baroj.fried.meygoo.jpeg';
import barojcoca from '../../Assets/Images/baroj/baroj.coca.jpeg';
import barojfanta from '../../Assets/Images/baroj/baroj.fanta.jpeg';
import barojsprite from '../../Assets/Images/baroj/baroj.sprite.jpeg';
import barojfries from '../../Assets/Images/baroj/baroj.appit.fries.jpeg';
import barojfries2 from '../../Assets/Images/baroj/baroj.appit.frieswithcheese.jpeg';
import barojonion from '../../Assets/Images/baroj/baroj.appit.onion.jpeg';
import barojlogo from '../../Assets/Images/baroj.logo.png';
import barojbackground from '../../Assets/Images/baroj/baroj.background.jpeg';
//---------burgerland----------
import burgerlandpizzaspecial from '../../Assets/Images/burgerland/burgerland.pizza.special.jpeg';
import burgerlandpizzapeproni from '../../Assets/Images/burgerland/burgerland.pizza.peperoni.jpeg';
import burgerlandpizzastake from '../../Assets/Images/burgerland/burgerland.pizza.stake.jpeg';
import burgerlandfried from '../../Assets/Images/burgerland/burgerland.fried.chicken.jpeg';
import burgerlandsandwichchicken from '../../Assets/Images/burgerland/burgerland.sandwich.chickenwrap.jpeg';
import burgerlandsandwichrost from '../../Assets/Images/burgerland/burgerland.sandwich.rostbeef.jpeg';
import burgerlandfries from '../../Assets/Images/burgerland/burgerland.appit.fries.jpeg';
import burgerlandgarlicb from '../../Assets/Images/burgerland/burgerland.appit.garlicbread.jpeg';
import burgerlandsalad from '../../Assets/Images/burgerland/burgerland.appit.salad.jpeg';
import burgerlandsoda from '../../Assets/Images/burgerland/burgerland.drink.soda.jpeg';
import burgerlandheydey from '../../Assets/Images/burgerland/burgerland.drink.heydey.jpeg';
import burgerlandorengina from '../../Assets/Images/burgerland/burgerland.drink.orengina.jpeg';
import burgerlandicon from '../../Assets/Images/burgerland/burgerland.logo.jpeg';
import burgerlandback from '../../Assets/Images/burgerland/burgerland.background.jpeg';


// ---------------------------------------------
export const NavidData = [

{ id: 1, 
    name: "باماهاس", 
    star:4.4,
    score:10011,
    address:'',
    delivery:7000,
    logo:{bamahaslogo},
    picture:bamahasbackground,
    coupon:false,
    discount:true,
    categories: ["ساندویچ گرم", "ساندویچ سرد",'پاستا','پیش غدا','نوشیدنی'] ,
    foods:[
        {id:1,category:'ساندویچ گرم',name:'ساندویچ کوکتل آرژانتینی',images:{bamahasargentina},price:178000,material:'کوکتل بخارپز ممتاز میکاییلیان،پیاز جعفری،گوجه،خیارشور و سس مخصوص باماهاس'},
        {id:2,category:'ساندویچ گرم',name:'ساندویچ فیله پیچ تنوری',images:{bamahaschicken},price:165000,material:'فیله مرغ طعم دار شده،پنیر و پیاز جعفری،گوجه،خیارشور و سس مخصوص باماهاس'},
        {id:3,category:'ساندویچ گرم',name:'ساندویچ شکارچیان نود و هشت',images:{bamahas98},price:200000,material:'سوسیس چوریتسو،کاهو،گوجه،خیارشور و سس مخصوص باماهاس'},
        {id:4,category:'ساندویچ سرد',name:'ساندویچ بیکن مخصوص باماهاس (سرد)',images:{bamahasbacon},price:198000,material:'بیکن بره ۹۰٪ میکاییلیان،بیکن گوشت ۹۰٪ میکاییلیان،چیپس،پیاز جعفری و گوجه'},
        {id:5,category:'ساندویچ سرد',name:'ساندویچ ژامبون مرغ (سرد)',images:{bamahasjambon},price:88000,material:'ژامبون مرغ ۹۰٪ میکاییلیان،پیاز جعفری،گوجه،خیارشور و سس مخصوص باماهاس'},
        {id:6,category:'ساندویچ سرد',name:'ساندویچ مخلوط (سرد)',images:{bamahasmix},price:99000,material:'بیکن گوشت ۹۰٪ میکاییلیان،ژامبون مرغ۹۰٪،پیاز جعفری،گوجه،خیارشور و سس مخصوص باماهاس'},
        {id:7,category:'پاستا',name:'پاستا با سس آلفردو',images:{bamahaspasta},price:150000,material:'پاستا،فیله مرغ طعم دار،سس آلفردو'},
        {id:8,category:'نوشیدنی',name:'کوکاکولا',images:{bamahasdrink},price:12000,material:'۱.۵ لیتر'},
        {id:9,category:'نوشیدنی',name:'فانتا',images:{bamahasdrink},price:12000,material:'۱.۵ لیتر'},
        {id:10,category:'نوشیدنی',name:'اسپرایت',images:{bamahasdrink},price:12000,material:'۱.۵ لیتر'},
        {id:11,category:'پیش غذا',name:'سالاد سوییسی',images:{bamahassalad},price:20000,material:'سیب زمینی،ماست،پیازچه،خیارشور'},
        {id:12,category:'پیش غذا',name:'ترشی تند هالوپینو',images:{bamahastorshi},price:12000,material:'فلفل هالوپینو،ادویه مخصوص باماهاس'},
    ]
    },

    { id: 2, 
      name: "باروژ", 
      star:3.9,
      score:32462,
      address:'',
      delivery:7000,
      logo:{barojlogo},
      picture:{barojbackground},
      coupon:false,
      discount:true,
      categories: ["پیتزا", "سوخاری",'نوشیدنی','پیش غدا','برگر','پاستا'] ,
      foods:[
          {id:1,category:'پیتزا',name:'پیتزا بلا چاو',images:{barojbella},price:188000,material:'خمیر پیتزا ایتالیایی،سس پیتزا،پنیر موزارلا،پنیر پیتزا و بیکن'},
          {id:2,category:'پیتزا',name:'پیتزا خامه استیک',images:{barojstake},price:193000,material:'گوشت استیک،سس آلفردو،پنیر'},
          {id:3,category:'پیتزا',name:'پیتزا باروژ',images:{barojpizza},price:174000,material:'خمیر پیتزا ایتالیایی،سالامی،پپرونی،پنیر زرد،کنجد و پنیر'},
          {id:4,category:'سوخاری',name:'مرغ سوخاری دو تکه نرمال',images:{barojfried2},price:159000,material:'دو تکه مرغ سوخاری،سیب زمینی سرخ کرده،سالاد کلم،نان بروتچنز'},
          {id:5,category:'سوخاری',name:'مرغ سوخاری دو تکه اسپایسی',images:{barojfried2spice},price:159000,material:'دو تکه مرغ سوخاری،سیب زمینی سرخ کرده،سالاد کلم،نان بروتچنز'},
          {id:6,category:'سوخاری',name:'میگو سوخاری',images:{barojfriedmeygoo},price:183000,material:'میگو سوخاری،سی زمینی سرخ کرده،نان بروتچن،سس مخصوص'},
          {id:7,category:'نوشیدنی',name:'نوشابه کوکاکولا',images:{barojcoca},price:8620,material:'۳۳۰ سی سی'},
          {id:8,category:'نوشیدنی',name:'نوشابه فانتا',images:{barojfanta},price:8620,material:'۳۳۰ سی سی'},
          {id:9,category:'نوشیدنی',name:'نوشابه اسپرایت',images:{barojsprite},price:8620,material:'۳۳۰ سی سی'},
          {id:10,category:'پیش غذا',name:'سیب زمینی سرخ شده',images:{barojfries},price:59000,material:'۲۴۰ گرم سیب زمینی سرخ شده'},
          {id:11,category:'پیش غذا',name:'سیب زمینی با سس پنیر',images:{barojfries2},price:72000,material:'۲۴۰ گرم سیب زمینی سرخ شده،سس پنیر'},
          {id:12,category:'پیش غذا',name:'پیاز حلقه ای',images:{barojonion},price:72000,material:''},
      ]
      },

      { id: 3, 
        name: "برگرلند", 
        star:4.2,
        score:25504,
        address:'',
        delivery:17000,
        logo:{burgerlandicon},
        picture:{burgerlandback},
        coupon:false,
        discount:true,
        categories: ["پیتزا", "سوخاری",'نوشیدنی','پیش غدا','ساندویچ','چیکن برگر'] ,
        foods:[
            {id:1,category:'پیتزا',name:'پیتزا مخصوص',images:{burgerlandpizzaspecial},price:118800,material:'خمیر پیتزا آمریکایی،سس مخصوص،کالباس گوشت،پپرونی،قارچ،زیتون سبز،پنیر و فلفل دلمه ای'},
            {id:2,category:'پیتزا',name:'پیتزا استیک',images:{burgerlandpizzastake},price:125200,material:'خمیر پیتزا آمریکایی،سس سیر و ریحان،پنیر،فیله گوساله،قارچ،فلفل دلمه ای و پیازچه'},
            {id:3,category:'پیتزا',name:'پیتزا پپرونی',images:{burgerlandpizzapeproni},price:126000,material:'خمیر پیتزا آمریکایی،سس مخصوص،پنیر،پپرونی،قارچ'},
            {id:4,category:'سوخاری',name:'چیکن استریپس',images:{burgerlandfried},price:130000,material:'چهار عدد فیله سوخاری،سیب زمینی مخصوص،پنیر پارمزان،سس تایلندی تند،سس مخصوص'},
            {id:5,category:'ساندویچ',name:'ساندویچ چیکن رپ',images:{burgerlandsandwichchicken},price:77200,material:'دو عدد فیله سوخاری،سس مخصوص،رلیش سبزیجات،پنیر زرد،کاهو،نان ترتیلا'},
            {id:6,category:'ساندویچ',name:'ساندویچ رست بیف',images:{burgerlandsandwichrost},price:108400,material:'رست بیف،قارچ،پنیر ورقه ای،ریحان،سس اسموکی،سیب زمینی خلالی'},
            {id:7,category:'نوشیدنی',name:'نوشابه قوطی',images:{burgerlandsoda},price:12000,material:'۳۳۰ میلی لیتر'},
            {id:8,category:'نوشیدنی',name:'هی دی قوطی',images:{burgerlandheydey},price:13500,material:'۳۳۰ میلی لیتر'},
            {id:9,category:'نوشیدنی',name:'اورنجینا',images:{burgerlandorengina},price:7500,material:'۳۲۰ میلی لیتر'},
            {id:10,category:'پیش غذا',name:'سیب زمینی مخصوص',images:{burgerlandfries},price:61500,material:'۲۵۰ گرم سیب زمینی سرخ شده،ادویه مخصوص،پنیر پارمزان'},
            {id:11,category:'پیش غذا',name:'سالاد برگرلند',images:{burgerlandsalad},price:103500,material:'کاهو فرانسوی سبز،کاهو فرانسوی قرمز،گوجه خشک در روغن،زیتون سیاه و گوجه گیلاسی'},
            {id:12,category:'پیش غذا',name:'نان سیر',images:{burgerlandgarlicb},price:62500,material:'خمیر مخصوص،سس سیر و ریحان،پنیر مخصوص'},
        ]
        },

        { id: 4, 
          name: "دان تان", 
          star:4.4,
          score:6990,
          address:'',
          delivery:24000,
          logo:'',
          picture:'',
          coupon:false,
          discount:true,
          categories: ["پیتزا", "سوخاری",'نوشیدنی','پیش غدا','برگر'] ,
          foods:[
              {id:1,category:'پیتزا',name:'پیتزا پپرونی',images:'',price:143500,material:'خمیر تازه با سس تومیتو دان تان،پنیر موتزارلا و پارمسان'},
              {id:2,category:'پیتزا',name:'',images:'',price:165000,material:''},
              {id:3,category:'پیتزا',name:'',images:'',price:145000,material:''},
              {id:4,category:'برگر',name:'',images:'',price:145000,material:''},
              {id:5,category:'برگر',name:'',images:'',price:145000,material:''},
              {id:6,category:'سوخاری',name:'',images:'',price:145000,material:''},
              {id:7,category:'نوشیدنی',name:'',images:'',price:145000,material:''},
              {id:8,category:'نوشیدنی',name:'',images:'',price:145000,material:''},
              {id:9,category:'نوشیدنی',name:'',images:'',price:145000,material:''},
              {id:10,category:'پیش غذا',name:'',images:'',price:145000,material:''},
              {id:11,category:'پیش غذا',name:'',images:'',price:145000,material:''},
              {id:12,category:'پیش غذا',name:'',images:'',price:145000,material:''},
          ]
          },

          { id: 1, 
            name: "شیلا", 
            star:4,
            score:6056,
            address:'',
            delivery:5000,
            logo:'',
            picture:'',
            coupon:false,
            discount:true,
            categories: ["پیتزا", "سوخاری",'نوشیدنی','پیش غدا','خاچاپوری','هات داگ'] ,
            foods:[
                {id:1,category:'پیتزا',name:'',images:'',price:145000,material:''},
                {id:2,category:'پیتزا',name:'',images:'',price:165000,material:''},
                {id:3,category:'پیتزا',name:'',images:'',price:145000,material:''},
                {id:4,category:'سوخاری',name:'',images:'',price:145000,material:''},
                {id:5,category:'سوخاری',name:'',images:'',price:145000,material:''},
                {id:6,category:'سوخاری',name:'',images:'',price:145000,material:''},
                {id:7,category:'نوشیدنی',name:'',images:'',price:145000,material:''},
                {id:8,category:'نوشیدنی',name:'',images:'',price:145000,material:''},
                {id:9,category:'نوشیدنی',name:'',images:'',price:145000,material:''},
                {id:10,category:'پیش غذا',name:'',images:'',price:145000,material:''},
                {id:11,category:'پیش غذا',name:'',images:'',price:145000,material:''},
                {id:12,category:'پیش غذا',name:'',images:'',price:145000,material:''},
            ]
        }
    ]