// const { HdrOffSelect } = require("@mui/icons-material");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const demoProducts = [
  // ----------------charger product start ---------------
  {
    id: "1",
    title: "5V-1A MOBILE CHARGER",
    price: 499,
    salePrice: 149,
    rating: 5,
    description: "5V 1A Mobile Charger.",
    mainImage: "charger.webp",
    slug: "charger-1A",
    manufacturer: "DTM",
    categoryId: "7a241318-624f-48f7-9921-1818f6c20d85",
    inStock: 7,
  },]
// const demoProducts = [
//   // ----------------charger product start ---------------
//   {
//     id: "1",
//     title: "5V-1A MOBILE CHARGER",
//     price: 499,
//     salePrice: 149,
//     rating: 5,
//     description: "5V 1A Mobile Charger. Wall Charger. USB Power Adapter. Wall Charger for All iOS & Android Devices, Tablets, Smart Watch, Bluetooth Speakers, TWS Wireless Neckband, Power Bank. Color: White.",
//     mainImage: "charger.webp",
//     slug: "charger-1A",
//     manufacturer: "DTM",
//     categoryId: "7a241318-624f-48f7-9921-1818f6c20d85",
//     inStock: 7,
//   },
//   {
//     id: "2",
//     title: "DUAL PORT USB CHARGER",
//     price: 699,
//     salePrice: 199,

//     rating: 5,
//     description: "✅Dual Port Convenience: Charge two devices simultaneously with the dual-port design. Say goodbye to waiting for one device to finish charging before plugging in another. ✅High-Speed Charging: With a powerful 2.4...",
//     mainImage: "product9.webp",
//     slug: "dual-port-charger",
//     manufacturer: "DTM",
//     categoryId: "7a241318-624f-48f7-9921-1818f6c20d85",
//     inStock: 7,
//   },
//   {
//     id: "3",
//     title: "20W PD CHARGER",
//     price: 799,
//     salePrice: 249,

//     rating: 3,
//     description: "PD 20W CHARGER MATERIAL : ABS PLASTIC WEIGHT: 90G COLOUR: WHITE INPUT: 270V OUTPUT: 3A WATTAGE: 20W",
//     mainImage: "product10.webp",
//     slug: "pd-charger",
//     manufacturer: "DTM",
//     categoryId: "7a241318-624f-48f7-9921-1818f6c20d85",
//     inStock: 7,
//   },

// //-------------- changer product end ---------------
// // --------------data cable start -----------------
// //  ** data cable 1 **
//   {
//     id: "4",
//     title: "USB TO TYPE C PVC CABLE ",
//     price: 499,
//     salePrice: 199,

//     rating: 5,
//     description: "USB to Type C. Fast Charging. Data Cable 1m. 2.5A. PVC Round Cable. Color:White.",
//     mainImage: "1.webp",
//     slug: "usb-to-type-c-pvc-cable",
//     manufacturer: "DTM-2N01",
//     categoryId: "313eee86-bc11-4dc1-8cb0-6b2c2a2a1ccb",
//     inStock: 7,
//   },
//   //  ** data cable 2 **
//   {
//     id: "5",
//     title: "TYPE C TYPE C PVC DATA CABLE",
//     price: 499,
//     salePrice: 129,

//     rating: 5,
//     description: "5A FAST CHARGING, compatible with iPhones/iPads, 480 Mbps data transfer speed, tangle-free design, round shape, length: 1M, color:Red & Black.",
//     mainImage: "1.webp",
//     slug: "type-c-to-type-c-pvc-data-cable",
//     manufacturer: "DTM-P4101",
//     categoryId: "313eee86-bc11-4dc1-8cb0-6b2c2a2a1ccb",
//     inStock: 6,
//   },
//   //  ** data cable 3 **
//   {
//     id: "6",
//     title: "TYPE C PVC DATA CABLE",
//     price: 499,
//     salePrice: 129,

//     rating: 5,
//     description: "1M 3Amp MICRO USB PVC Data Cable. Compatible for Smartphones, Tablets, & other Micro USB devices, 480Mbps Data Sync. Quick Charge 3.0 Color: Black",
//     mainImage: "1.webp",
//     slug: "type-c-pvc-data-cable",
//     manufacturer: "DTM-2N02",
//     categoryId: "313eee86-bc11-4dc1-8cb0-6b2c2a2a1ccb",
//     inStock: 5,
//   },
//   //  ** data cable 4 **
//   {
//     id: "7",
//     title: "TYPE C BRAIDED DATA CABLE",
//     price: 499,
//     salePrice: 119,

//     rating: 5,
//     description: "USB to Type C Premium. Fast Charging Data Cable. Length: 1m. 3A Braided & Metal. Type C Premium Fast Charging Data Cable. Color: White & Black.",
//     mainImage: "1.webp",
//     slug: "type-c-braided-data-cable",
//     manufacturer: "DTM-2321",
//     categoryId: "313eee86-bc11-4dc1-8cb0-6b2c2a2a1ccb",
//     inStock: 7,
//   },
//   //  ** data cable 5 **
//   {
//     id: "8",
//     title: "TYPE C BRAIDED DATA CABLE",
//     price: 499,
//     salePrice: 119,

//     rating: 5,
//     description: "USB to Type C. Fast Charging. 2.5 Amp. Highly Durable. Compatible with Smartphones, Chargers, Wireless-Bluetooth, Power Banks. Color: Black.",
//     mainImage: "1.webp",
//     slug: "type-c-braided-data-cable-2",
//     manufacturer: "DTM-P2N02",
//     categoryId: "313eee86-bc11-4dc1-8cb0-6b2c2a2a1ccb",
//     inStock: 2,
//   },
//   //  ** data cable 6 **
//   {
//     id: "9",
//     title: "TYPE C BRAIDED DATA CABLE",
//     price: 499,
//     salePrice: 119,

//     rating: 5,
//     description: "USB to Type C Fast Charging Data Cable. Length: 1m. 3A Braided Only. Type C Fast Charging Data Cable. Color: Gold & Black.",
//     mainImage: "1.webp",
//     slug: "type-c-braided-data-cable-1",
//     manufacturer: "DTM-2427",
//     categoryId: "313eee86-bc11-4dc1-8cb0-6b2c2a2a1ccb",
//     inStock: 7,
//   },
//   //  ** data cable 7 **
//   {
//     id: "10",
//     title: "MICRO USB PVC DATA CABLE",
//     price: 499,
//     salePrice: 99,

//     rating: 5,
//     description: "USB-A to Micro USB Fast Charging Cable. 1m 2A PVC Round Cable. USB Fast Charging Cable. Color: White.",
//     mainImage: "1.webp",
//     slug: "micro-usb-pvc-data-cable",
//     manufacturer: "DTM-P1N01",
//     categoryId: "313eee86-bc11-4dc1-8cb0-6b2c2a2a1ccb",
//     inStock: 7,
//   },
//   //  ** data cable 8 **
//   {
//     id: "11",
//     title: "MICRO USB PVC DATA CABLE",
//     price: 499,
//     salePrice: 99,

//     rating: 5,
//     description: "1M 3Amp MICRO USB PVC Data Cable. Compatible for Smartphones, Tablets, Laptops & other Micro USB devices, 480Mbps Data Sync. Quick Charge 3.0 Color: Black",
//     mainImage: "1.webp",
//     slug: "micro-usb-pvc-data-cable-2",
//     manufacturer: "DTM-1102",
//     categoryId: "313eee86-bc11-4dc1-8cb0-6b2c2a2a1ccb",
//     inStock: 7,
//   },
//   //  ** data cable 9 **
//   {
//     id: "12",
//     title: "MICRO USB PVC DATA CABLE",
//     price: 499,
//     salePrice: 99,

//     rating: 5,
//     description: "USB-A to Micro USB. 3A Fast Charging Cable. Compatible with Android Phones/Tablets, 480mbps Data Transfer Speed. Tangle-Free USB Cable. Round. Length: 1M. Color: White.",
//     mainImage: "1.webp",
//     slug: "micro-usb-pvc-data-cable-1",
//     manufacturer: "DTM-P1101",
//     categoryId: "313eee86-bc11-4dc1-8cb0-6b2c2a2a1ccb",
//     inStock: 7,
//   }, 
//   //  ** data cable 10 **
//   {
//     id: "13",
//     title: "MICRO USB BRAIDED DATA CABLE",
//     price: 499,
//     salePrice: 99,

//     rating: 5,
//     description: "USB-A to Micro USB Fast Charging Cable. 3A Braided & Metal. Length: 1m. Color: Red & Black.",
//     mainImage: "1.webp",
//     slug: "micro-usb-braided-data-cable",
//     manufacturer: "DTM-P1102",
//     categoryId: "313eee86-bc11-4dc1-8cb0-6b2c2a2a1ccb",
//     inStock: 7,
//   },
//   //  ** data cable 11 **
//   {
//     id: "14",
//     title: "MICRO USB BRAIDED DATA CABLE",
//     price: 499,
//     salePrice: 99,

//     rating: 5,
//     description: "USB To Micro-USB. 3 Amp. Data sync at 480 Mbps. Cotton Braiding. Color: Black/Grey. Compatible with all Micro-USB devices.",
//     mainImage: "1.webp",
//     slug: "micro-usb-braided-data-cable-1",
//     manufacturer: "DTM-P1103",
//     categoryId: "313eee86-bc11-4dc1-8cb0-6b2c2a2a1ccb",
//     inStock: 7,
//   },
//   //  ** data cable 12 **
//   {
//     id: "15",
//     title: "LIGHTING DATA CABLE",
//     price: 499,
//     salePrice: 129,

//     rating: 5,
//     description: "features: fast charging support, tangle-resistant design, stable and efficient data transfer.",
//     mainImage: "1.webp",
//     slug: "lighting-data-cable",
//     manufacturer: "DTM-3382",
//     categoryId: "313eee86-bc11-4dc1-8cb0-6b2c2a2a1ccb",
//     inStock: 7,
//   },
//   //--------------------socket board start -----------------
//   {
//     id: "16",
//     title: "EXTENSION BOARD",
//     price: 799,
//     salePrice: 349,

//     rating: 5,
//     description: "4 Way Strip with Individual Switch (240V Multipurpose). 6A 4 Way Extension Board. Length: 3M Cord Length. 4 Universal Sockets. Color: White / Red.",
//     mainImage: "board.webp",
//     slug: "socket-board",
//     manufacturer: "DTM",
//     categoryId: "782e7829-806b-489f-8c3a-2689548d7153",
//     inStock: 7,
//   },
//   //------------------socket board end-------------------
//   // -----------------water alarm start ----------------
//   {
//     id: "17",
//     title: "WATER TANK ALARM",
//     price: 799,
//     salePrice: 249,

//     rating: 5,
//     description: "Type: Wired, Buzzer & LED Indicator Sensors: Float Switch Power Source: AC Power (Battery Backup Optional) Material: Weatherproof Plastic Casing",
//     mainImage: "alarm.webp",
//     slug: "water-tank-alarm",
//     manufacturer: "DTM",
//     categoryId: "a6896b67-197c-4b2a-b5e2-93954474d8b4",
//     inStock: 7,
//   },
//   // ------------------water alarm end--------------
//   // ----------------- mini wifi start-------------
//   {
//     id: "18",
//     title: "MINI WIFI UPS",
//     price: 1999,
//     salePrice: 799,

//     rating: 5,
//     description: "Mini UPS for 12V Wi-Fi Router Broadband Modem. UPS Power Backup During Power Cuts. Broadband Modem. Compatible with Routers, Set Top Box, Alexa, Mini Camera. Color: Black.",
//     mainImage: "mini.webp",
//     slug: "mini-wifi-ups",
//     manufacturer: "DTM",
//     categoryId: "4c2cc9ec-7504-4b7c-8ecd-2379a854a423",
//     inStock: 7,
//   },
//   //----------------- mini wifi end --------------
//   //-------------------start-------------
//   {
//     id: "19",
//     title: "MYZK TOP SELLING PRODUCTS",
//     price: 499,
//     salePrice: 199,

//     rating: 5,
//     description: "This is myzk top selling products description",
//     mainImage: "topselling.webp",
//     slug: "top-selling",
//     manufacturer: "DTM",
//     categoryId: "8d2a091c-4b90-4d60-b191-114b895f3e54",
//     inStock: 7,
//   },
//   {
//     id: "20",
//     title: "NEW PRODUCTS",
//     price: 35,
//     salePrice: 20,

//     rating: 5,
//     description: "This is a new products description",
//     mainImage: "newproduct.png",
//     slug: "new-products",
//     manufacturer: "DTM",
//     categoryId: "1cb9439a-ea47-4a33-913b-e9bf935bcc0b",
//     inStock: 7,
//   },
//   {
//     id: "21",
//     title: "INSPIRED PRODUCTS",
//     price: 69,
//     salePrice: 20,

//     rating: 5,
//     description: " This is a inspired products description",
//     mainImage: "inspiredproduct.jpg",
//     slug: "inspired-products",
//     manufacturer: "DTM",
//     categoryId: "ada699e5-e764-4da0-8d3e-18a8c8c5ed24",
//     inStock: 7,
//   },
//   //----------------------end-------------------
// ];

const demoCategories = [
  {
    id: "7a241318-624f-48f7-9921-1818f6c20d85",
    name: "Adaptor's",
    href: "/adaptors",
    image: "categories/charger.webp",
  },
  {
    id: "313eee86-bc11-4dc1-8cb0-6b2c2a2a1ccb",
    name: "Data Cable's",
    href: "shop/datacables",
    image: "categories/cable.webp",
    
  },
  {
    id: "782e7829-806b-489f-8c3a-2689548d7153",
    name: "Socket Board",
    href: "shop/socketboard",
    image: "categories/board.webp",
  },
  {
    id: "a6896b67-197c-4b2a-b5e2-93954474d8b4",
    name: "Water Level Controller",
    href: "shop/waterlevel",
    image: "categories/alarm.webp",
  },
  {
    id: "4c2cc9ec-7504-4b7c-8ecd-2379a854a423",
    name: "WiFi Stability UPS",
    href: "shop/miniups",
    image: "categories/mini.webp",
  },
  {
    id: "8d2a091c-4b90-4d60-b191-114b895f3e54",
    name: "MYZK TOP SELLING PRODUCTS",
    href: "shop/topselling",
    image: "categories/topselling.webp",
  },
  {
    id: "1cb9439a-ea47-4a33-913b-e9bf935bcc0b",
    name: "NEW PRODUCTS",
    href: "shop/newproducts",
    image: "categories/newproduct.png",
  },
  {
    id: "ada699e5-e764-4da0-8d3e-18a8c8c5ed24",
    name: "INSPIRED PRODUCTS",
    href: "shop/inspiredproducts",
    image: "categories/inspiredproduct.jpg",
  },
  // {
  //   id: "d30b85e2-e544-4f48-8434-33fe0b591579",
  //   name: "phone-gimbals",
  //   },
  // {
  //   id: "6c3b8591-b01e-4842-bce1-2f5585bf3a28",
  //   name: "mixer-grinders",
  // },
  // {
  //   id: "659a91b9-3ff6-47d5-9830-5e7ac905b961",
  //   name: "cameras",
  // },
  // {
  //   id: "3117a1b0-6369-491e-8b8b-9fdd5ad9912e",
  //   name: "smart-phones",
  // },
  // {
  //   id: "da6413b4-22fd-4fbb-9741-d77580dfdcd5",
  //   name: "mouses",
  // },
  // {
  //   id: "ss6412b4-22fd-4fbb-9741-d77580dfdcd2",
  //   name: "computers",
  // },
  // {
  //   id: "fs6412b4-22fd-4fbb-9741-d77512dfdfa3",
  //   name: "printers",
  // },
];

async function insertDemoData() {
  for (const category of demoCategories) {
    await prisma.category.create({
      data: category,
    });
  }
  console.log("Demo categories inserted successfully!");

  for (const product of demoProducts) {
    await prisma.product.create({
      data: product,
    });
  }
  console.log("Demo products inserted successfully!");
}

insertDemoData()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
  