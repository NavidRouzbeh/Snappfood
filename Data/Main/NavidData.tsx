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