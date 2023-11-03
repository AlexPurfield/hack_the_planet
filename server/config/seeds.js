const db = require("../config/connection");
const { User, Product, Category } = require("../models");
const cleanDB = require("../config/cleanDB");

db.once("open", async () => {
  await cleanDB("category_id", "categories");
  await cleanDB("Product", "products");
  await cleanDB("User", "users");

  const categories = await Category.insertMany([
    { name: "Desks" },
    { name: "Mouses" },
    { name: "Keyboards" },
    { name: "Chairs" },
    { name: "laptop" },
  ]);

  const products = await Product.insertMany([
    {
      name: "WorkPro® Quantum 9000 Series Ergonomic Mesh/Mesh Mid-Back Chair, Black/Black, BIFMA Compliant",
      price: 449.99,
      image:
        "https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/510830/510830_o01_111020/510830",

      short_desc: "Stay cool on this WorkPro Quantum",
      long_desc:
        "The adjustable office chair's mesh back and seat help promote airflow to keep you comfortable when answering e-mails, meeting with co-workers and handling day-to-day duties.",
      category: categories[3]._id,
    },
    {
      name: "WorkPro® Sentrix Ergonomic Mesh/Mesh Mid-Back Manager Chair, Fixed Arms, Black, BIFMA Compliant",
      price: 199.99,
      image:
        "https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/9579648/9579648_o01_052322/9579648",

      short_desc: "A breathable mesh seat and back help you stay cool.",
      long_desc:
        "The lumbar support can be adjusted to your ideal height for optimum positioning. Utilize tilt, recline and seat height adjustments to find your perfect position during the workday or at lunchtime.",
      category: categories[3]._id,
    },
    {
      name: "Serta® Smart Layers™ Brinkley Ergonomic Bonded Leather High-Back Executive Chair, Black/Silver",
      price: 309.99,
      image:
        "https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/9003237/9003237_o01_051923/9003237",

      short_desc: "It is about balance in the workplace nowadays",
      long_desc:
        "With a perfect mix of comfort and performance, this Serta office chair features 5 layers of foam with individually wrapped ComfortCoils™ for pressure point relief and temperature control during extended use.",
      category: categories[3]._id,
    },
    {
      name: "Flash Furniture Mesh Mid-Back Swivel Task Chair With Padded Seat, Black",
      price: 131.99,
      image:
        "https://media.officedepot.com/images/f_auto,q_auto,e_sharpen/products/761468/761468_o01_091321/761468",

      short_desc:
        "Revamp your office space with a ventilated mesh office chair ",
      long_desc:
        "Contemporary Task Office Chair, Mid-Back Design, and Ventilated Decorative Mesh Back will make a great addition in modern and industrial spaces.",
      category: categories[3]._id,
    },
    {
      name: "Dell™ Inspiron 15 3520 Laptop",
      price: 649.99,
      image:
        "https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/3497373/3497373_o01_101422/3497373",

      short_desc:
        "Choose this Dell Inspiron 15 3520 laptop to get things done.",
      long_desc:
        " The 15.6 laptop screen provides FHD resolution and helps prevent glare. The Windows 11 laptop comes with a helpful operating system, offering fun features right away.",
      category: categories[4]._id,
    },
    {
      name: "Dell™ Inspiron 15 3520 Laptop",
      price: 649.99,
      image:
        "https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/3497373/3497373_o01_101422/3497373",

      short_desc:
        "Choose this Dell Inspiron 15 3520 laptop to get things done.",
      long_desc:
        "The 15.6 laptop screen provides FHD resolution and helps prevent glare. The Windows 11 laptop comes with a helpful operating system, offering fun features right away.",
      category: categories[4]._id,
    },
    {
      name: "Dell™ Inspiron 16 5630 Laptop",
      price: 929.99,
      image:
        "https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/8856075/8856075_o01/8856075",

      short_desc:
        "With the Dell Inspiron laptop, you can surf, stream, game and work from 1 device.",
      long_desc:
        "The Windows 11 laptop features a user-friendly operating system to help you get started. The 16 inch laptop display offers crystal-clear picture quality, and the FHD camera lets you take photos, record video or chat with friends and family face-to-face.",
      category: categories[4]._id,
    },
    {
      name: "Dell™ Latitude 7390 2-in-1 Refurbished Laptop",
      price: 279.99,
      image:
        "https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/8896386/8896386",

      short_desc:
        "Manage your workflow or game with friends using this Dell Latitude PC.",
      long_desc:
        "The Windows 10 laptop offers wireless technology and a built-in webcam to help keep you connected. The 13.3 inch display offers touch-screen functionality, helping you control the refurbished laptop with a tap, pinch or swipe.",
      category: categories[4]._id,
    },
    {
      name: "Logitech® K270 Wireless Keyboard",
      price: 34.99,
      image:
        "https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/610663/610663_p/610663",

      short_desc:
        "Enhance your typing accuracy with this Logitech wireless keyboard.",
      long_desc:
        " The 2.4GHz RF technology supports wireless connectivity, while 8 hot keys let you program your device for effortless operation. A UV coating keeps off harmful sun rays for durability. This Logitech wireless keyboard uses 2 AAA batteries for flawless operation in off-grid locations, and the spill-resistant design stands up to minor accidental liquid splashes.",
      category: categories[2]._id,
    },
    {
      name: "Logitech® K780 Multi-Device Wireless Keyboard",
      price: 64.99,
      image:
        "https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/716162/716162_o01_122021/716162",

      short_desc: "Enjoy exceptional typing on your computer",
      long_desc:
        "All from one fully equipped and beautifully finished keyboard. The K780 Multi-Device redefines what a desktop keyboard can do, letting you switch typing easily between all the devices you enter text on.",
      category: categories[2]._id,
    },
    {
      name: "Logitech K380 Multi-Device Bluetooth Wireless Keyboard",
      price: 29.99,
      image:
        "https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/212351/212351_o01_112921/212351",
      short_desc:
        "The Logitech® K380 Multi-Device Bluetooth® keyboard makes any space minimalist.",
      long_desc:
        "Connect with up to three Bluetooth-enabled devices simultaneously and switch instantly between them.The K380 Multi-Device is compact and lightweight.",
      category: categories[2]._id,
    },
    {
      name: "AbleNet Keys-U-See Large print keyboards",
      price: 45.69,
      image:
        "https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/5161860/5161860_o51/5161860",
      short_desc:
        "Keys-U-See large print keyboards are the perfect replacement.",
      long_desc:
        "For anyone who has a hard time seeing the letters on their computer keyboard. The large print keyboards are also great for anyone working in low light conditions or are learning to type.",
      category: categories[2]._id,
    },
    {
      name: "Logitech® M325 Wireless Mouse, Blue",
      price: 19.99,
      image:
        "https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/604723/604723_o02_021323/604723",
      short_desc:
        "A better mix of precision and comfort with designed-for-Web scrolling.",
      long_desc:
        "Designed for how you use the Web, our newest micro-precise scrolling makes reading your Facebook®, shopping Amazon®, or scrolling through Google® searches easier.* Plus, tilting the wheel left or right moves you backward or forward on the Web. Its feel-good, contoured shape and textured rubber grips help keep your hand happy even after long hours.",
      category: categories[1]._id,
    },
    {
      name: "Logitech ERGO M575 Wireless Trackball Mouse, Black",
      price: 49.99,
      image:
        "https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/5765812/5765812_o01_120821/5765812",

      short_desc: "A wireless trackball with incredibly easy thumb control.",
      long_desc:
        "The Logitech Ergo series that promotes increased comfort, lower muscle strain, and improved, more natural posture. Forget about sliding around a mouse or moving your arm to move the cursor.",
      category: categories[1]._id,
    },
    {
      name: "Logitech Lift Vertical Ergonomic Mouse",
      price: 69.99,
      image:
        "https://media.officedepot.com/images/f_auto,q_auto,e_sharpen/products/7263334/7263334_o01_080522/7263334",

      short_desc: "A comfy and intuitive wireless mouse with quiet clicks",
      long_desc:
        " Scrolling feels second nature with SmartWheel, which easily shifts from precision to speed-scroll. Customize Lift ergo mouse using intuitive Logi Options+ Software. Easily assign each of the 4 easy-to-reach customizable buttons to a handy shortcut program them to change as you hop between apps. Connect with up to 3 devices, and Easy-Switch between them at the click of a button.",
      category: categories[1]._id,
    },
    {
      name: "Logitech® Design Collection Limited Edition Wireless Mouse, Forest Floral",
      price: 19.99,
      image:
        "https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/9906635/9906635_o01_051722/9906635",

      short_desc:
        "Smooth, line by line scrolling and precise cursor control for easy navigation.",
      long_desc:
        "Scroll effortlessly using the Logitech Design Collection Limited Edition Wireless Mouse. Its 10m wireless operating range offers ease of use anywhere at your desk.",
      category: categories[1]._id,
    },
    {
      name: "Whalen® Jasper 60 inch W L-Shape Corner Desk",
      price: 249.99,
      image:
        "https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/163691/163691_o01_071723/163691",
      short_desc:
        "Laminated engineered wood frame offers strength and stability.",
      long_desc:
        "Upgrade your office with this Whalen Jasper L-shaped corner desk. The integrated open bookshelf offers ample room for stationery and accessories, while the dark espresso finish blends in with various decor themes. A wide L-shaped surface accommodates a PC and other work devices comfortably.",
      category: categories[0]._id,
    },
    {
      name: "Sauder® Nova Loft 59 inch W L-Shape Corner Desk, Grand Walnut",
      price: 239.99,
      image:
        "https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/3513269/3513269_o01_sauder_nova_loft_l_shaped_desk/3513269",

      short_desc:
        "Enhance the look of your office with this 59-inch Sauder Nova Loft L-shaped desk. ",
      long_desc:
        ". The wooden legs offer strength and stability, while the 3 drawers let you keep your laptop, files and frequently used items tucked away. Sturdy engineered wood offers durability. This Sauder Nova Loft L-shaped desk features cable management grommets to help keep your workspace tidy, and the grand walnut finish delivers a mid-century modern touch.",
      category: categories[0]._id,
    },
    {
      name: "Realspace® Broadstreet 65 inch W U-Shaped Executive Corner Desk",
      price: 399.99,
      image:
        "https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/475994/475994_o01_realspace_broadstreet_u_shaped_executive_desk_061521/475994",
      short_desc: "Desktop boasts a laminate finish for durability.",
      long_desc:
        "Give your corner office a style boost with this Realspace Broadstreet U-shaped desk. The 3 drawers provide storage for files and supplies, while the pullout keyboard tray allows for comfortable typing. A bridge connects the 2 spacious work surfaces, delivering abundant space for your computer, calendar and peripherals.",
      category: categories[0]._id,
    },
    {
      name: "Realspace® Magellan Performance 71 inch W L-Shape Corner Desk",
      price: 579.99,
      image:
        "https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/956697/956697_o01_realspace_magellan_performance_71w_l_shaped_desk_010721/956697",
      short_desc: "Laminated wood desktop offers a hint of contemporary style.",
      long_desc:
        "Organize your workspace with this 71-inch Realspace Magellan Performance L-shaped desk. The 4 integrated drawers provide plenty of room for your file folders, office supplies and peripherals, while the cord management system keeps your space neat and tidy. ",
      category: categories[0]._id,
    },
  ]);
  console.log("productData seeded");

  await User.create({
    name: "Pamela",
    email: "pamela@testmail.com",
    password: "password12345",
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
  });

  await User.create({
    name: "eholt",
    email: "eholt@testmail.com",
    password: "password12345",
  });

  console.log("users seeded");

  process.exit();
});
