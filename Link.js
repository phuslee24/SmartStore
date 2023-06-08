var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "body.html"
        })
        .when("/findStore", {
            templateUrl: "nav/menu/findStore.html"
        })
        .when("/favourite", {
            templateUrl: "nav/menu/favourite.html"
        })
        .when("/login", {
            templateUrl: "nav/menu/login.html"
        })
        .when("/shoppingCard", {
            templateUrl: "nav/menu/shoppingCart.html"
        })
        .when("/register", {
            templateUrl: "nav/menu/register.html"
        })
        .when("/iora1", {
            templateUrl: "nav/iORA_1.html"
        })
        .when("/iora2", {
            templateUrl: "IORA/iORA_2.html"
        })
        .when("/iora5", {
            templateUrl: "IORA/iORA_Bottoms.html"
        })
        .when("/iora6", {
            templateUrl: "IORA/iORA_KnitAndSweaters.html"
        })
        .when("/iora7", {
            templateUrl: "IORA/iORA_NewArrival.html"
        })
        .when("/iora8", {
            templateUrl: "IORA/iORA_Skirts.html"
        })
        .when("/iora9", {
            templateUrl: "IORA/iORA_Tops.html"
        })
        .when("/bundledeal1", {
            templateUrl: "bundledeal/bundledeal1.html"
        })
        .when("/bundledeal2", {
            templateUrl: "bundledeal/bundledeal2.html"
        })
        .when("/bags1", {
            templateUrl: "accessories/Bags_.html"
        })
        .when("/lalu", {
            templateUrl: "nav/LALU_1.html"
        })
        .when("/lalu-page2", {
            templateUrl: "lalu/LALU_2.html"
        })
        .when("/lalubottom", {
            templateUrl: "lalu/laluBottoms.html"
        })
        .when("/lalunewarri", {
            templateUrl: "lalu/laluNewArrivals.html"
        })
        .when("/laluskirts", {
            templateUrl: "lalu/laluSkirts.html"
        })

    .when("/shoe1", {
            templateUrl: "accessories/Shoes_.html"
        })
        .when("/cookies", {
            templateUrl: "footer/cookies-policy.html"
        })
        .when("/privacy", {
            templateUrl: "footer/privacy-policy.html"
        })
        .when("/terms", {
            templateUrl: "footer/terms-of-service.html"
        })
        .when("/Accessories", {
            templateUrl: "nav/Accessories_.html"
        })
        .when("/onlineexclusive", {
            templateUrl: "nav/onlineexclusive.html"
        })
        .when("/sale", {
            templateUrl: "nav/sale.html"
        })
        .when("/AboutUs", {
            templateUrl: "footer/nav/AboutUs.html"
        })
        .when("/campaigns", {
            templateUrl: "footer/nav/campaigns.html"
        })
        .when("/on-going promotions", {
            templateUrl: "footer/nav/on-going promotions.html"
        })
        .when("/ContactUs", {
            templateUrl: "footer/nav/ContactUs.html"
        })
        .when("/methods-cost", {
            templateUrl: "footer/nav/methods-cost.html"
        })
        .when("/returns-exchange", {
            templateUrl: "footer/nav/returns-exchange.html"
        })
        .when("/Blog_1", {
            templateUrl: "blog/Blog_1.html"
        })
        .when("/Blog_2", {
            templateUrl: "blog/Blog_2.html"
        })
        .when("/A-Line Flare Hem", {
            templateUrl: "IORA/Product/A-Line Flare Hem/A-Line Flare Hem.html"
        })
        .when("/Asymmetrical Flap Top", {
            templateUrl: "IORA/Product/Asymmetrical Flap Top/Asymmetrical Flap Top.html"
        })
        .when("/Basic Mayar Top", {
            templateUrl: "IORA/Product/Basic Mayar Top/Basic Mayar Top.html"
        })
        .when("/Basic PU Skorts", {
            templateUrl: "IORA/Product/Basic PU Skorts/Basic PU Skorts.html"
        })
        .when("/Centre Scrunched Knit Blouse", {
            templateUrl: "IORA/Product/Centre Scrunched Knit Blouse/Centre Scrunched Knit Blouse.html"
        })
        .when("/Crew Sweater", {
            templateUrl: "IORA/Product/Crew Sweater/Crew Sweater.html"
        })
        .when("/Criss-Cross Knit Top", {
            templateUrl: "IORA/Product/Criss-Cross Knit Top/Criss-Cross Knit Top.html"
        })
        .when("/Flare Bottom Pants", {
            templateUrl: "IORA/Product/Flare Bottom Pants/Flare Bottom Pants.html"
        })
        .when("/Highneck Knit Tank Top", {
            templateUrl: "IORA/Product/Highneck Knit Tank Top/Highneck Knit Tank Top.html"
        })
        .when("/Knotted Blouse", {
            templateUrl: "IORA/Product/Knotted Blouse/Knotted Blouse.html"
        })
        .when("/Mandarin Asymmetrical Hem Blouse", {
            templateUrl: "IORA/Product/Mandarin Asymmetrical Hem Blouse/Mandarin Asymmetrical Hem Blouse.html"
        })
        .when("/Midi A-Line Skirt", {
            templateUrl: "IORA/Product/Midi A-Line Skirt/Midi A-Line Skirt.html"
        })
        .when("/Off-Shoulder Knit Top", {
            templateUrl: "IORA/Product/Off-Shoulder Knit Top/Off-Shoulder Knit Top.html"
        })
        .when("/Overlapped Kimono Top", {
            templateUrl: "IORA/Product/Overlapped Kimono Top/Overlapped Kimono Top.html"
        })
        .when("/Panelled Colour Blouse", {
            templateUrl: "IORA/Product/Panelled Colour Blouse/Panelled Colour Blouse.html"
        })
        .when("/Polka Dot Jumpsuit", {
            templateUrl: "IORA/Product/Polka Dot Jumpsuit/Polka Dot Jumpsuit.html"
        })
        .when("/Puffy Polka Dot Top", {
            templateUrl: "IORA/Product/Puffy Polka Dot Top/Puffy Polka Dot Top.html"
        })
        .when("/Raglan Stripes Knit", {
            templateUrl: "IORA/Product/Raglan Stripes Knit/Raglan Stripes Knit.html"
        })
        .when("/Sleveless Tunic Top", {
            templateUrl: "IORA/Product/Sleveless Tunic Top/Sleveless Tunic Top.html"
        })
        .when("/Straight-Cut Jumpsuit", {
            templateUrl: "IORA/Product/Straight-Cut Jumpsuit/Straight-Cut Jumpsuit.html"
        })
        .when("/Stripes Magyar Top", {
            templateUrl: "IORA/Product/Stripes Magyar Top/Stripes Magyar Top.html"
        })
        .when("/Twist Polka Dot Top", {
            templateUrl: "IORA/Product/Twist Polka Dot Top/Twist Polka Dot Top.html"
        })
        .when("/Twisted Puffy Knit Top", {
            templateUrl: "IORA/Product/Twisted Puffy Knit Top/Twisted Puffy Knit Top.html"
        })
        .when("/Zippers Tapered Pants", {
            templateUrl: "IORA/Product/Zippers Tapered Pants/Zippers Tapered Pants.html"
        })
        .when("/careers", {
            templateUrl: "footer/careers.html"
        })
        .when("/sizeguide", {
            templateUrl: "footer/sizeguide.html"
        })
        //Accessories
        .when("/Ruched Shoulder Bag", {
            templateUrl: "accessories/Product/accessories/product1.html"
        })
        .when("/Drawstringed Shoulder Bag", {
            templateUrl: "accessories/Product/accessories/product2.html"
        })
        .when("/Heel Crossbody", {
            templateUrl: "accessories/Product/accessories/product3.html"
        })
        .when("/Shopper Tote", {
            templateUrl: "accessories/Product/accessories/product4.html"
        })
        .when("/Crescent Crossbody", {
            templateUrl: "accessories/Product/accessories/product5.html"
        })
        .when("/Top Handle Hobo Bag", {
            templateUrl: "accessories/Product/accessories/product6.html"
        })
        .when("/Nylon Box Bag", {
            templateUrl: "accessories/Product/accessories/product7.html"
        })
        .when("/Nylon Crossbody Bag", {
            templateUrl: "accessories/Product/accessories/product8.html"
        })
        .when("/Tie Detail Pointed Shoes", {
            templateUrl: "accessories/Product/accessories/product9.html"
        })
        .when("/Canvas Top Handle Tote", {
            templateUrl: "accessories/Product/accessories/product10.html"
        })
        .when("/Grained Bucket Bag", {
            templateUrl: "accessories/Product/accessories/product11.html"
        })
        .when("/Crisscross Sandals", {
            templateUrl: "accessories/Product/accessories/product12.html"
        })
        // product dentail laluArrivals            //
        .when("/lalu/Contrasting Knit Top", {
            templateUrl: "lalu/productLalu/ari0/Contrasting Knit Top/Contrasting Knit Top.html"
        })
        .when("/lalu/Cropped Buttondown Jacket", {
            templateUrl: "lalu/productLalu/ari0/Cropped Buttondown Jacket/Cropped Buttondown Jacket.html"
        })
        .when("/lalu/Cropped Utilitarian Leather Vest", {
            templateUrl: "lalu/productLalu/ari0/Cropped Utilitarian Leather Vest/Cropped Utilitarian Leather Vest.html"
        })
        .when("/lalu/Cropped Utilitarian PU Vest", {
            templateUrl: "lalu/productLalu/ari0/Cropped Utilitarian PU Vest/Cropped Utilitarian PU Vest.html"
        })
        .when("/lalu/Cut Out Jersey Top", {
            templateUrl: "lalu/productLalu/ari0/Cut Out Jersey Top/Cut Out Jersey Top.html"
        })
        .when("/lalu/Embroidered High Neck Logo Tee", {
            templateUrl: "lalu/productLalu/ari0/Embroidered High Neck Logo Tee/Embroidered High Neck Logo Tee.html"
        })
        .when("/lalu/Silky Printed Shirt", {
            templateUrl: "lalu/productLalu/ari0/Silky Printed Shirt/Silky Printed Shirt.html"
        })

    // product dentail lalubottom           //

    .when("/lalu/Decorative Button Down Shorts", {
            templateUrl: "lalu/productLalu/bottom/Decorative Button Down Shorts/Decorative Button Down Shorts.html"
        })
        .when("/lalu/Double Button Tapered Jeans", {
            templateUrl: "lalu/productLalu/bottom/Double Button Tapered Jeans/Double Button Tapered Jeans.html"
        })
        .when("/lalu/Elasticated Back Shorts", {
            templateUrl: "lalu/productLalu/bottom/Elasticated Back Shorts/Elasticated Back Shorts.html"
        })
        .when("/lalu/Elasticated Wide-Legged Shorts", {
            templateUrl: "lalu/productLalu/bottom/Elasticated Wide-Legged Shorts/Elasticated Wide-Legged Shorts.html"
        })
        .when("/lalu/Enclosed Waist Trousers", {
            templateUrl: "lalu/productLalu/bottom/Enclosed Waist Trousers/Enclosed Waist Trousers.html"
        })
        .when("/lalu/Panelled Skirt", {
            templateUrl: "lalu/productLalu/bottom/Panelled Skirt/Panelled Skirt.html"
        })

    // product dentail laluSkirts         //
    .when("/lalu/Button Down A-Line Skirt", {
            templateUrl: "lalu/productLalu/skirts/Button Down A-Line Skirt/Button Down A-Line Skirt.html"
        })
        .when("/lalu/Denim Straight Front Slit Skirt", {
            templateUrl: "lalu/productLalu/skirts/Denim Straight Front Slit Skirt/Denim Straight Front Slit Skirt.html"
        })
        .when("/lalu/Elasticated A-Line Skirt", {
            templateUrl: "lalu/productLalu/skirts/Elasticated A-Line Skirt/Elasticated A-Line Skirt.html"
        })
        .when("/lalu/Elasticated Ruffle Hem Skirt", {
            templateUrl: "lalu/productLalu/skirts/Elasticated Ruffle Hem Skirt/Elasticated Ruffle Hem Skirt.html"
        })
        .when("/lalu/High Waisted Midi Skirt", {
            templateUrl: "lalu/productLalu/skirts/High Waisted Midi Skirt/High Waisted Midi Skirt.html"
        })
        .when("/lalu/Tiered Flare Skirt", {
            templateUrl: "lalu/productLalu/skirts/Tiered Flare Skirt/Tiered Flare Skirt.html"
        })
        //Stories
        .when("/Stories", {
            templateUrl: "Stories/Stories.html"
        })
        .when("/iORA_Stories", {
            templateUrl: "Stories/iORA/iORA_Stories.html"
        })
        .when("/iORA GLAMOROUS FLARE", {
            templateUrl: "Stories/iORA/iORA GLAMOROUS FLARE.html"
        })
        .when("/iORA COVETED ESSENTIALS", {
            templateUrl: "Stories/iORA/iORA COVETED ESSENTIALS.html"
        })
        .when("/iORA SUMPTUOUS CONFIDENCE", {
            templateUrl: "Stories/iORA/iORA SUMPTUOUS CONFIDENCE.html"
        })



    .when("/lalu/stories", {
        templateUrl: "lalu/stories.html"
    })

    .when("/lalu/stories/lalu2022", {
            templateUrl: "lalu/stories/lalu2022.html"
        })
        .when("/lalu/stories/lalu2021", {
            templateUrl: "lalu/stories/lalu2021.html"
        })
        .when("/lalu/stories/lalu2020", {
            templateUrl: "lalu/stories/lalu2020.html"
        })
        .when("/lalu/stories/lalu2019", {
            templateUrl: "lalu/stories/lalu2019.html"
        })

})

var offset = 300;
// thời gian di trượt 0.75s ( 1000 = 1s )
var duration = 150;
$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset)
            $('#top-up').fadeIn(duration);
        else
            $('#top-up').fadeOut(duration);
    });
    $('#top-up').click(function() {
        $('body,html').animate({ scrollTop: 0 }, duration);
    });
});
$(function() {

    $('a').click(function() {
        $('body,html').animate({ scrollTop: 0 }, duration);
    });
});

function DisSelect() {
    var x = document.getElementById("inlineRadio1");
    x.checked = false;
    var y = document.getElementById("inlineRadio2");
    y.checked = false;
    var z = document.getElementById("inlineRadio3");
    z.checked = false;
    if (x.checked == false) {
        var Add = document.getElementById("Submit").disabled = true;
        document.getElementById("Size").innerHTML = " ";
    }
}

function Checksize() {
    var ele = document.getElementsByName('inlineRadioOptions');
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            var Add = document.getElementById("Submit").disabled = false;
            document.getElementById("Size").innerHTML = ele[i].value;
        }
    }
}