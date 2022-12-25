import shilap1 from '../../Assets/Images/ImageDatabase/shila/shila-pizaa-1.jpg'
import shilap2 from '../../Assets/Images/ImageDatabase/shila/shila-pizaa-2.jpg'
import shilap3 from '../../Assets/Images/ImageDatabase/shila/shila-pizaa-3.jpg'
import shilap4 from '../../Assets/Images/ImageDatabase/shila/shila-chiken-1.jpg'
import shilap5 from '../../Assets/Images/ImageDatabase/shila/shila-chiken-2.jpg'
import shilap6 from '../../Assets/Images/ImageDatabase/shila/shila-chiken-3.jpg'
import shilap7 from '../../Assets/Images/ImageDatabase/shila/shila-drink-1.jpg'
import shilap8 from '../../Assets/Images/ImageDatabase/shila/shila-drink-2.jpg'
import shilap9 from '../../Assets/Images/ImageDatabase/shila/shila-drink-3.jpg'
import shilap10 from '../../Assets/Images/ImageDatabase/shila/shila-aptizer-1.jpg'
import shilap11 from '../../Assets/Images/ImageDatabase/shila/shila-aptizer-2.jpg'
import shilap12 from '../../Assets/Images/ImageDatabase/shila/shila-aptizer-3.jpg'
import shilap13 from '../../Assets/Images/ImageDatabase/shila/shila-khaja-1.jpg'
import shilap14 from '../../Assets/Images/ImageDatabase/shila/shila-khaja-2.jpg'
import shilap15 from '../../Assets/Images/ImageDatabase/shila/shila-khaja-3.jpg'
import shilap16 from '../../Assets/Images/ImageDatabase/shila/shila-hotdog-1.jpg'
import shilap17 from '../../Assets/Images/ImageDatabase/shila/shila-hotdog-2.jpg'
import shilap18 from '../../Assets/Images/ImageDatabase/shila/shila-hotdog-3.jpg'
import shilalogo from '../../Assets/Images/ImageDatabase/shila/shila_logo.jpg'
import shila from '../../Assets/Images/ImageDatabase/shila/shila.jpg'
//----------------------------------------------------------
import pitko1 from '../../Assets/Images/ImageDatabase/pitko/pitko-pizza-1.jpeg'
import pitko2 from '../../Assets/Images/ImageDatabase/pitko/pitko-pizza-2.jpeg'
import pitko3 from '../../Assets/Images/ImageDatabase/pitko/pitko-pizza-3.jpeg'
import pitko4 from '../../Assets/Images/ImageDatabase/pitko/pitko-berger-1.jpeg'
import pitko5 from '../../Assets/Images/ImageDatabase/pitko/pitko-berger-2.jpeg'
import pitko6 from '../../Assets/Images/ImageDatabase/pitko/pitko-berger-3.jpeg'
import pitko7 from '../../Assets/Images/ImageDatabase/pitko/pitko-sand-1.jpeg'
import pitko8 from '../../Assets/Images/ImageDatabase/pitko/pitko-sand-2.jpeg'
import pitko9 from '../../Assets/Images/ImageDatabase/pitko/pitko-sand-3.jpeg'
import pitko10 from '../../Assets/Images/ImageDatabase/pitko/pitko-pasta-1.jpeg'
import pitko11 from '../../Assets/Images/ImageDatabase/pitko/pitko-box-1.jpeg'
import pitko12 from '../../Assets/Images/ImageDatabase/pitko/pitko-sokhari-1.jpeg'
import pitko13 from '../../Assets/Images/ImageDatabase/pitko/pitko-sokhari-2.jpeg'
import pitko14 from '../../Assets/Images/ImageDatabase/pitko/pitko-sokhari-3.jpeg'
import pitkologo from '../../Assets/Images/ImageDatabase/pitko/pitko-logo.jpeg'
import pitko from '../../Assets/Images/ImageDatabase/pitko/pitko.jpeg'
//------------------------------------------------------------------------------------

export const DataBase = [
    { id: 1, 
      name: "شیلا", 
      star:4.7,
      score:6056,
      address:'خیابان پیروزی، خیابان اول نیروی هوایی، پلاک ۱/۳، پیتزا شیلا (پیروزی)',
      delivery:10200,
      logo:shilalogo,
      picture:shila,
      coupon:false,
      discount:true,
      categories: [" پیتزا فیتکس", "سوخاری",'نوشیدنی','پیش غدا','خاچاپوری','هات داگ'] ,
      foods:[
          {id:1,category:' پیتزا فیتکس',name:'پیتزا فیتکس پپرونی',images:shilap1,price:99000,material:'کالباس پپرونی، قارچ، پنیر موزارلا، سس مخصوص، سیب زمینی سرخ شده'},
          {id:2,category:' پیتزا فیتکس',name:'پیتزا فیتکس مخلوط',images:shilap2,price:99000,material:'ژامبون گوشت و مرغ، هات داگ فرانکفورتر، قارچ، زیتون، گوجه، فلفل دلمه ای، پنیر موزارلا، سس مخصوص، سیب زمینی سرخ شده'},
          {id:3,category:' پیتزا فیتکس',name:'پیتزا فیتکس مرغ و شوید',images:shilap3,price:104000,material:'سینه مرغ گریل، قارچ، شوید، زیتون، جعفری، پنیر موزارلا، سس مخصوص، سیب زمینی سرخ شده'},
          {id:4,category:'سوخاری',name:'چیکن چیز کلاسیک',images:shilap4,price:136000,material:'مرغ سوخاری، پنیر پیتزا، سیب زمینی سرخ شده، سس مخصوص'},
          {id:5,category:'سوخاری',name:'چیکن چیز ژامبو پلاس',images:shilap5,price:136000,material:'مرغ سوخاری، پنیر پیتزا، سیب زمینی سرخ شده، ژامبون، سس مخصوص'},
          {id:6,category:'سوخاری',name:'چیکن استریپس',images:shilap6,price:159000,material:'۳ تکه فیله مرغ سوخاری، سس مخصوص، سالاد کلم، سیب زمینی سرخ شده، نان بروتچن'},
          {id:7,category:'نوشیدنی',name:'نوشابه قوطی',images:shilap7,price:11010,material:'۳۳۰ میلی لیتر'},
          {id:8,category:'نوشیدنی',name:'نوشابه خانواده',images:shilap8,price:16372,material:'۱.۵ لیتر'},
          {id:9,category:'نوشیدنی',name:'ماءالشعیر قوطی هی دی',images:shilap9,price:12528,material:'۳۳۰ میلی لیتر'},
          {id:10,category:'پیش غذا',name:'هات داگ چیز فرایز',images:shilap10,price:93000,material:'سیب زمینی سرخ شده، پنیر دیپ گودا، سس هات داگ، پیازچه'},
          {id:11,category:'پیش غذا',name:'آلفردو چیز فرایز',images:shilap11,price:96000,material:'سیب زمینی سرخ شده، سس آلفردو، پنیر دیپ گودا، پیاز سرخ شده'},
          {id:12,category:'پیش غذا',name:'نان سیر',images:shilap12,price:81000,material:'خمیر پیتزا ۲۳ سانتی متری، پوره سیر کره ای، سس مخصوص، پنیر پیتزا'},
          {id:13,category:'خاچاپوری',name:'خاچاپوری کلاسیک',images:shilap13,price:88000,material:'نان، پنیر مخصوص، تخم مرغ، کره، کنجد، سیاه دانه'},
          {id:14,category:'خاچاپوری',name:'خاچاپوری اسفناج',images:shilap14,price:88000,material:'نان، پنیر مخصوص، تخم مرغ، اسفناج طعم دار شده، کره، کنجد، سیاه دانه'},
          {id:15,category:'خاچاپوری',name:'خاچاپوری گوجه فرنگی',images:shilap15,price:88000,material:'نان، پنیر مخصوص، تخم مرغ، گوجه گیلاسی، پیاز، کره، کنجد، سیاه دانه'},
          {id:16,category:'هات داگ',name:'ساندویچ هات داگ کلاسیک',images:shilap16,price:88000,material:'هات داگ گوشت ۷۰%، گوجه فرنگی، خیارشور، سس خردل، سبزیجات معطر'},
          {id:17,category:'هات داگ',name:'ساندویچ هات داگ مکزیکن',images:shilap17,price:96000,material:'هات داگ گوشت ۸۵%، کاهو، خیارشور، سس هالوپینو، سس مخصوص'},
          {id:18,category:'هات داگ',name:'ساندویچ هات داگ رست بیف',images:shilap18,price:115000,material:'هات داگ گوشت ۸۵%، رست بیف، سس خامه، کاهو'},
      ]
      },
      { id: 2, 
        name: "فست فود پیتکو", 
        star:4.3,
        score:4029,
        address:'خیابان پیروزی، مقابل نیرو هوایی، ساختمان شمیم، پلاک ۵۶۸، فست فود پیتکو',
        delivery:10200,
        logo:pitkologo,
        picture:pitko,
        coupon:false,
        discount:true,
        categories: ["پیتزاایتالیایی", "برگر",'ساندویچ گرم','پاستا','باکس ویژه','سوخاری'] ,
        foods:[
            {id:1,category:'پیتزاایتالیایی',name:'پیتزا بیکن ایتالیایی',images:pitko1,price:199000,material:'خمیر پیتزا ایتالیایی ۳۰ سانتی متر، بیکن ۹۰%، پنیر موزارلا، زیتون، قارچ، فلفل دلمه ای رنگی، سس مخصوص'},
            {id:2,category:'پیتزاایتالیایی',name:'پیتزا استراگانف ایتالیایی',images:pitko2,price:219000,material:'خمیر پیتزا ایتالیایی ۳۰ سانتی متر، گوشت راسته گوساله رست شده، سس آلفردو، پنیر موزارلا، چیپس خلالی، قارچ'},
            {id:3,category:'پیتزاایتالیایی',name:'پیتزا آمریکانو ایتالیایی',images:pitko3,price:179000,material:'خمیر پیتزا ایتالیایی ۳۰ سانتی متر، سوسیس فرانکفورتر، زیتون، پنیر موزارلا، فلفل دلمه ای رنگی، قارچ، سس مخصوص'},
            {id:4,category:'برگر',name:'همبرگر',images:pitko4,price:125000,material:'۱۶۰ گرم برگر گوشت دست ساز، کاهو، گوجه، خیارشور، سس مخصوص'},
            {id:5,category:'برگر',name:'چیز برگر',images:pitko5,price:129000,material:'۱۶۰ گرم گوشت دست ساز، پنیر چدار، کاهو، گوجه، خیارشور، سس مخصوص'},
            {id:6,category:'برگر',name:'هالو برگر',images:pitko6,price:135000,material:'۱۶۰ گرم گوشت دست ساز، پنیر چدار، فلفل هالوپینو، کاهو، گوجه، خیارشور، سس مخصوص'},
            {id:7,category:'ساندویچ گرم',name:'سوپر ساندویچ پیتکو',images:pitko7,price:145000,material:'فیله گوساله رست شده، فیله مرغ، پنیر موزرلا، قارچ، پیاز کاراملی، فلفل دلمه ای، گوجه، خیارشور، کاهو، سس مخصوص'},
            {id:8,category:'ساندویچ گرم',name:'ساندویچ رست بیف',images:pitko8,price:155000,material:'فیله گوساله رست شده، پنیر موزرلا، قارچ، پیاز کاراملی، فلفل دلمه ای، خیارشور،کاهو،گوجه،سس مخصوص'},
            {id:9,category:'ساندویچ گرم',name:'ساندویچ ژامبون مخلوط تنوری',images:pitko9,price:99000,material:'ژامبون گوشت و مرغ، پنیر موزرلا و قارچ، گوجه، خیارشور، کاهو،سس مخصوص'},
            {id:10,category:'پاستا',name:'پاستا آلفردو',images:pitko10,price:139000,material:'پنه،سینه مرغ گریل شده، سس آلفردو، قارچ، جعفری، پنیر پارمسان'},
            {id:11,category:'باکس ویژه',name:'اکسترا باکس',images:pitko11,price:245000,material:'۲ تکه ران مرغ کریسپی، دو تکه فیله استریپس،یک پرس قارچ سوخاری، یک پرس سیب زمینی، دو عدد سالاد کلم، دو عدد نان بروچن،سس سیر،سس انار،سس سانتافه (مخصوص تند)'},
            {id:12,category:'سوخاری',name:'مرغ سوخاری کریسپی ۲ تکه',images:pitko12,price:145000,material:'مرغ سوخاری، سالاد کلم، سیب زمینی سرخ شده، نان بروچن، سس سیر، سس انار، سس سانتافه(مخصوص تند)'},
            {id:13,category:'سوخاری',name:'چیزا',images:pitko13,price:155000,material:'۲ عدد سینه مرغ سوخاری،پپرونی، پنیر موزارلا،سیب زمینی،سس سیر،سس سانتافه(مخصوص تند)،سس انار'},
            {id:14,category:'سوخاری',name:'چیکن استریپس',images:pitko14,price:169000,material:'۴ عدد فیله مرغ، سالاد کلم، سیب زمینی سرخ کرده، نان بروچن، سس سیر ،سس سانتافه(مخصوص تند) ،سس انار'},
        ]
        },
];